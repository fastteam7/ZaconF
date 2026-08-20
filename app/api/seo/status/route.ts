import { NextRequest, NextResponse } from "next/server";
import { getSearchEngineStatus } from "@/lib/search-engine-notify";
import { isGoogleIndexingConfigured, getIndexingStatus } from "@/lib/google-indexing";
import { isIndexNowConfigured } from "@/lib/indexnow";

/**
 * GET /api/seo/status
 *
 * Retorna status de configuração dos serviços de SEO
 * Útil para verificar se tudo está configurado corretamente
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const webhookSecret = process.env.CMS_WEBHOOK_SECRET;

  // Requer autenticação
  if (!webhookSecret || secret !== webhookSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const status = {
    services: getSearchEngineStatus(),
    configuration: {
      googleIndexing: {
        configured: isGoogleIndexingConfigured(),
        serviceAccountEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
          ? `${process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL.substring(0, 10)}...`
          : null,
        hasPrivateKey: Boolean(process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY),
      },
      indexNow: {
        configured: isIndexNowConfigured(),
        keyConfigured: Boolean(process.env.INDEXNOW_KEY),
        keyFileUrl: process.env.INDEXNOW_KEY
          ? `${process.env.NEXT_PUBLIC_SITE_URL || "https://zacon.com.br"}/${process.env.INDEXNOW_KEY}.txt`
          : null,
      },
      sitemapPing: {
        configured: true, // Sempre disponível
        sitemapUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zacon.com.br"}/sitemap.xml`,
      },
    },
    environment: {
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://zacon.com.br",
      nodeEnv: process.env.NODE_ENV,
    },
    recommendations: [] as string[],
  };

  // Adicionar recomendações
  if (!status.services.googleIndexing) {
    status.recommendations.push(
      "Configure Google Indexing API para indexação instantânea (minutos em vez de dias)"
    );
  }
  if (!status.services.indexNow) {
    status.recommendations.push(
      "Configure IndexNow para indexação rápida no Bing/Yandex"
    );
  }

  return NextResponse.json(status);
}
