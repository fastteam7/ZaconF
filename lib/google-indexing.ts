/**
 * Google Indexing API Client
 *
 * Permite solicitar indexação/remoção de URLs diretamente ao Google.
 * Indexação acontece em minutos, não dias.
 *
 * Requisitos:
 * 1. Projeto no Google Cloud Console
 * 2. Ativar "Indexing API"
 * 3. Criar Service Account com permissão
 * 4. Adicionar Service Account como proprietário no Search Console
 * 5. Configurar variáveis de ambiente
 *
 * Variáveis de ambiente necessárias:
 * - GOOGLE_SERVICE_ACCOUNT_EMAIL: email da service account
 * - GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: chave privada (com \n escapados)
 */

import { SignJWT, importPKCS8 } from "jose";

const INDEXING_API_URL = "https://indexing.googleapis.com/v3/urlNotifications:publish";
const BATCH_API_URL = "https://indexing.googleapis.com/batch";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/indexing";

interface IndexingResult {
  url: string;
  success: boolean;
  type: "URL_UPDATED" | "URL_DELETED";
  error?: string;
  notifyTime?: string;
}

interface BatchResult {
  total: number;
  successful: number;
  failed: number;
  results: IndexingResult[];
}

/**
 * Verifica se a Google Indexing API está configurada
 */
export function isGoogleIndexingConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
    process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
  );
}

/**
 * Gera um JWT para autenticação com a Google API
 */
async function generateAccessToken(): Promise<string> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKeyRaw = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!email || !privateKeyRaw) {
    throw new Error("Google Service Account não configurada");
  }

  // Converter \n escapados para quebras de linha reais
  const privateKey = privateKeyRaw.replace(/\\n/g, "\n");

  const now = Math.floor(Date.now() / 1000);

  // Criar JWT assertion
  const key = await importPKCS8(privateKey, "RS256");

  const jwt = await new SignJWT({
    scope: SCOPE,
  })
    .setProtectedHeader({ alg: "RS256", typ: "JWT" })
    .setIssuer(email)
    .setSubject(email)
    .setAudience(TOKEN_URL)
    .setIssuedAt(now)
    .setExpirationTime(now + 3600)
    .sign(key);

  // Trocar JWT por access token
  const tokenResponse = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!tokenResponse.ok) {
    const error = await tokenResponse.text();
    throw new Error(`Erro ao obter access token: ${error}`);
  }

  const tokenData = await tokenResponse.json();
  return tokenData.access_token;
}

/**
 * Solicita indexação de uma URL ao Google
 *
 * @param url - URL completa para indexar (ex: https://zacon.com.br/artigo/meu-post)
 * @param type - "URL_UPDATED" para indexar, "URL_DELETED" para remover
 */
export async function requestIndexing(
  url: string,
  type: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED"
): Promise<IndexingResult> {
  if (!isGoogleIndexingConfigured()) {
    return {
      url,
      success: false,
      type,
      error: "Google Indexing API não configurada",
    };
  }

  try {
    const accessToken = await generateAccessToken();

    const response = await fetch(INDEXING_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        url,
        type,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error(`[Google Indexing] Erro para ${url}:`, error);
      return {
        url,
        success: false,
        type,
        error: error.error?.message || `HTTP ${response.status}`,
      };
    }

    const result = await response.json();
    console.log(`[Google Indexing] Sucesso: ${url} - ${type}`);

    return {
      url,
      success: true,
      type,
      notifyTime: result.urlNotificationMetadata?.latestUpdate?.notifyTime,
    };
  } catch (error) {
    console.error(`[Google Indexing] Erro para ${url}:`, error);
    return {
      url,
      success: false,
      type,
      error: error instanceof Error ? error.message : "Erro desconhecido",
    };
  }
}

/**
 * Solicita indexação de múltiplas URLs em batch
 *
 * @param urls - Array de URLs para indexar
 * @param type - Tipo de notificação
 */
export async function requestBatchIndexing(
  urls: string[],
  type: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED"
): Promise<BatchResult> {
  if (!isGoogleIndexingConfigured()) {
    return {
      total: urls.length,
      successful: 0,
      failed: urls.length,
      results: urls.map((url) => ({
        url,
        success: false,
        type,
        error: "Google Indexing API não configurada",
      })),
    };
  }

  // Processar em paralelo com limite de concorrência
  const CONCURRENCY = 5;
  const results: IndexingResult[] = [];

  for (let i = 0; i < urls.length; i += CONCURRENCY) {
    const batch = urls.slice(i, i + CONCURRENCY);
    const batchResults = await Promise.all(
      batch.map((url) => requestIndexing(url, type))
    );
    results.push(...batchResults);

    // Pequeno delay entre batches para não exceder rate limit
    if (i + CONCURRENCY < urls.length) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }

  return {
    total: urls.length,
    successful: results.filter((r) => r.success).length,
    failed: results.filter((r) => !r.success).length,
    results,
  };
}

/**
 * Obtém status de indexação de uma URL
 */
export async function getIndexingStatus(url: string): Promise<{
  url: string;
  lastUpdate?: string;
  lastCrawl?: string;
  error?: string;
}> {
  if (!isGoogleIndexingConfigured()) {
    return { url, error: "Google Indexing API não configurada" };
  }

  try {
    const accessToken = await generateAccessToken();
    const encodedUrl = encodeURIComponent(url);

    const response = await fetch(
      `https://indexing.googleapis.com/v3/urlNotifications/metadata?url=${encodedUrl}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return { url, error: error.error?.message || `HTTP ${response.status}` };
    }

    const data = await response.json();
    return {
      url,
      lastUpdate: data.latestUpdate?.notifyTime,
      lastCrawl: data.latestRemove?.notifyTime,
    };
  } catch (error) {
    return {
      url,
      error: error instanceof Error ? error.message : "Erro desconhecido",
    };
  }
}
