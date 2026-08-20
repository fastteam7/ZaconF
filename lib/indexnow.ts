/**
 * IndexNow API Client
 *
 * Protocolo de indexação instantânea suportado por:
 * - Bing
 * - Yandex
 * - Seznam
 * - Naver
 *
 * Requisitos:
 * 1. Gerar uma chave única (UUID ou string aleatória)
 * 2. Criar arquivo público: /public/{chave}.txt contendo a chave
 * 3. Configurar INDEXNOW_KEY no .env
 *
 * Exemplo de chave: a1b2c3d4e5f6g7h8i9j0
 */

const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zacon.com.br";

interface IndexNowResult {
  success: boolean;
  urlsSubmitted: number;
  responses: {
    endpoint: string;
    status: number;
    success: boolean;
  }[];
  error?: string;
}

/**
 * Verifica se IndexNow está configurado
 */
export function isIndexNowConfigured(): boolean {
  return Boolean(process.env.INDEXNOW_KEY);
}

/**
 * Gera uma chave IndexNow aleatória
 * Use isso para gerar a chave inicial
 */
export function generateIndexNowKey(): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let key = "";
  for (let i = 0; i < 32; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return key;
}

/**
 * Submete URLs para IndexNow
 *
 * @param urls - Array de URLs completas ou paths relativos
 */
export async function submitToIndexNow(urls: string[]): Promise<IndexNowResult> {
  const key = process.env.INDEXNOW_KEY;

  if (!key) {
    return {
      success: false,
      urlsSubmitted: 0,
      responses: [],
      error: "INDEXNOW_KEY não configurada",
    };
  }

  // Normalizar URLs
  const normalizedUrls = urls.map((url) => {
    if (url.startsWith("http")) return url;
    return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
  });

  const host = new URL(SITE_URL).hostname;

  const payload = {
    host,
    key,
    keyLocation: `${SITE_URL}/${key}.txt`,
    urlList: normalizedUrls,
  };

  const responses: IndexNowResult["responses"] = [];

  // Submeter para múltiplos endpoints (redundância)
  for (const endpoint of INDEXNOW_ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      // IndexNow retorna 200 ou 202 para sucesso
      const success = response.status === 200 || response.status === 202;

      responses.push({
        endpoint,
        status: response.status,
        success,
      });

      if (success) {
        console.log(`[IndexNow] ${endpoint}: ${normalizedUrls.length} URLs submetidas`);
      } else {
        console.warn(`[IndexNow] ${endpoint}: Status ${response.status}`);
      }
    } catch (error) {
      console.error(`[IndexNow] Erro em ${endpoint}:`, error);
      responses.push({
        endpoint,
        status: 0,
        success: false,
      });
    }
  }

  const anySuccess = responses.some((r) => r.success);

  return {
    success: anySuccess,
    urlsSubmitted: anySuccess ? normalizedUrls.length : 0,
    responses,
  };
}

/**
 * Submete uma única URL para IndexNow
 */
export async function submitUrlToIndexNow(url: string): Promise<IndexNowResult> {
  return submitToIndexNow([url]);
}
