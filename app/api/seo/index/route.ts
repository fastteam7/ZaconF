import { NextRequest, NextResponse } from "next/server";
import {
  notifySearchEngines,
  notifySearchEnginesBatch,
  notifyUrlRemoval,
} from "@/lib/search-engine-notify";

/**
 * POST /api/seo/index
 *
 * Solicita indexação de URLs manualmente.
 * Útil para indexar conteúdo existente ou reindexar após correções.
 *
 * Body:
 * {
 *   "urls": ["/artigo/meu-post", "/pagina/sobre"],
 *   "action": "index" | "remove"
 * }
 */
export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const webhookSecret = process.env.CMS_WEBHOOK_SECRET;

  // Requer autenticação
  if (!webhookSecret || secret !== webhookSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { urls?: string[]; url?: string; action?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const urls = body.urls || (body.url ? [body.url] : []);
  const action = body.action || "index";

  if (urls.length === 0) {
    return NextResponse.json(
      { error: "Nenhuma URL fornecida. Use 'urls' ou 'url' no body." },
      { status: 400 }
    );
  }

  if (urls.length > 100) {
    return NextResponse.json(
      { error: "Máximo de 100 URLs por requisição" },
      { status: 400 }
    );
  }

  console.log(`[SEO Index] Solicitação: ${action} para ${urls.length} URLs`);

  try {
    if (action === "remove") {
      // Solicitar remoção de URLs
      const results = await Promise.all(urls.map((url) => notifyUrlRemoval(url)));

      return NextResponse.json({
        success: true,
        action: "remove",
        total: urls.length,
        results,
        timestamp: new Date().toISOString(),
      });
    }

    // Indexar URLs
    if (urls.length === 1) {
      const result = await notifySearchEngines(urls[0]);
      return NextResponse.json({
        success: true,
        action: "index",
        total: 1,
        result,
        timestamp: new Date().toISOString(),
      });
    }

    // Batch indexing
    const result = await notifySearchEnginesBatch(urls);
    return NextResponse.json({
      success: true,
      action: "index",
      total: urls.length,
      result,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[SEO Index] Erro:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/seo/index?url=/artigo/meu-post
 *
 * Solicita indexação de uma única URL via GET (conveniência)
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const url = searchParams.get("url");
  const webhookSecret = process.env.CMS_WEBHOOK_SECRET;

  if (!webhookSecret || secret !== webhookSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!url) {
    return NextResponse.json(
      { error: "Parâmetro 'url' é obrigatório" },
      { status: 400 }
    );
  }

  try {
    const result = await notifySearchEngines(url);
    return NextResponse.json({
      success: true,
      result,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[SEO Index] Erro:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}
