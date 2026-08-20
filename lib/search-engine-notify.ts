/**
 * Search Engine Notification Service
 *
 * Módulo unificado para notificar motores de busca sobre novos conteúdos.
 * Combina múltiplas estratégias para maximizar velocidade de indexação.
 *
 * Estratégias (em ordem de prioridade):
 * 1. Google Indexing API - Indexação em minutos (requer configuração)
 * 2. IndexNow - Bing, Yandex, etc (requer configuração)
 * 3. Sitemap Ping - Fallback universal (sempre funciona)
 */

import {
  isGoogleIndexingConfigured,
  requestIndexing,
  requestBatchIndexing,
} from "./google-indexing";
import { isIndexNowConfigured, submitToIndexNow } from "./indexnow";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zacon.com.br";

export interface NotificationResult {
  url: string;
  google: {
    enabled: boolean;
    success: boolean;
    error?: string;
  };
  indexnow: {
    enabled: boolean;
    success: boolean;
    error?: string;
  };
  sitemapPing: {
    success: boolean;
    error?: string;
  };
}

export interface BatchNotificationResult {
  total: number;
  google: {
    enabled: boolean;
    successful: number;
    failed: number;
  };
  indexnow: {
    enabled: boolean;
    successful: number;
  };
  sitemapPing: {
    success: boolean;
  };
}

/**
 * Faz ping do sitemap para o Google
 * Método básico, sempre disponível
 */
async function pingSitemap(): Promise<{ success: boolean; error?: string }> {
  try {
    const sitemapUrl = `${SITE_URL}/sitemap.xml`;
    const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;

    const response = await fetch(pingUrl, {
      method: "GET",
      // Timeout de 10 segundos
      signal: AbortSignal.timeout(10000),
    });

    if (response.ok) {
      console.log("[Sitemap Ping] Google notificado com sucesso");
      return { success: true };
    }

    return { success: false, error: `HTTP ${response.status}` };
  } catch (error) {
    console.error("[Sitemap Ping] Erro:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro desconhecido",
    };
  }
}

/**
 * Notifica todos os motores de busca sobre uma nova URL
 *
 * @param path - Path relativo da URL (ex: /artigo/meu-post)
 */
export async function notifySearchEngines(path: string): Promise<NotificationResult> {
  const fullUrl = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  // Executar todas as notificações em paralelo
  const [googleResult, indexNowResult, sitemapResult] = await Promise.all([
    // Google Indexing API
    isGoogleIndexingConfigured()
      ? requestIndexing(fullUrl)
      : Promise.resolve({ success: false, error: "Não configurado" }),

    // IndexNow
    isIndexNowConfigured()
      ? submitToIndexNow([fullUrl])
      : Promise.resolve({ success: false, error: "Não configurado" }),

    // Sitemap Ping (sempre executa)
    pingSitemap(),
  ]);

  return {
    url: fullUrl,
    google: {
      enabled: isGoogleIndexingConfigured(),
      success: "success" in googleResult ? googleResult.success : false,
      error: "error" in googleResult ? googleResult.error : undefined,
    },
    indexnow: {
      enabled: isIndexNowConfigured(),
      success: indexNowResult.success,
      error: "error" in indexNowResult ? indexNowResult.error : undefined,
    },
    sitemapPing: sitemapResult,
  };
}

/**
 * Notifica todos os motores de busca sobre múltiplas URLs
 *
 * @param paths - Array de paths relativos
 */
export async function notifySearchEnginesBatch(
  paths: string[]
): Promise<BatchNotificationResult> {
  const fullUrls = paths.map((path) =>
    `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
  );

  // Executar em paralelo
  const [googleResult, indexNowResult, sitemapResult] = await Promise.all([
    // Google Indexing API (batch)
    isGoogleIndexingConfigured()
      ? requestBatchIndexing(fullUrls)
      : Promise.resolve({ total: 0, successful: 0, failed: paths.length, results: [] }),

    // IndexNow (já suporta batch nativamente)
    isIndexNowConfigured()
      ? submitToIndexNow(fullUrls)
      : Promise.resolve({ success: false, urlsSubmitted: 0, responses: [] }),

    // Sitemap Ping (uma vez só)
    pingSitemap(),
  ]);

  return {
    total: paths.length,
    google: {
      enabled: isGoogleIndexingConfigured(),
      successful: googleResult.successful,
      failed: googleResult.failed,
    },
    indexnow: {
      enabled: isIndexNowConfigured(),
      successful: indexNowResult.urlsSubmitted,
    },
    sitemapPing: sitemapResult,
  };
}

/**
 * Notifica sobre remoção de uma URL
 *
 * @param path - Path relativo da URL removida
 */
export async function notifyUrlRemoval(path: string): Promise<{
  google: { success: boolean; error?: string };
}> {
  const fullUrl = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  if (!isGoogleIndexingConfigured()) {
    return {
      google: { success: false, error: "Não configurado" },
    };
  }

  const result = await requestIndexing(fullUrl, "URL_DELETED");

  return {
    google: {
      success: result.success,
      error: result.error,
    },
  };
}

/**
 * Retorna status de configuração de todos os serviços
 */
export function getSearchEngineStatus(): {
  googleIndexing: boolean;
  indexNow: boolean;
  sitemapPing: boolean;
} {
  return {
    googleIndexing: isGoogleIndexingConfigured(),
    indexNow: isIndexNowConfigured(),
    sitemapPing: true, // Sempre disponível
  };
}
