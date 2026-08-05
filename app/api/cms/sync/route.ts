import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Endpoint de Sincronização Periódica com o CMS
 *
 * Faz GET periódico no CMS para garantir que as páginas e posts estão atualizados.
 * Pode ser chamado por:
 * - Cron job externo (ex: GitHub Actions, Vercel Cron)
 * - Script de monitoramento
 * - Manualmente para forçar sincronização
 *
 * Rota: GET /api/cms/sync
 *
 * Query params:
 * - secret: Token de autenticação (obrigatório)
 * - force: Se "true", força revalidação mesmo sem mudanças
 *
 * Retorna:
 * - Lista de conteúdo sincronizado
 * - Status de cada item
 * - Timestamp da última sincronização
 */

const CMS_API_URL = process.env.CMS_API_URL || "https://api.fastteam.pro";
const CMS_API_KEY = process.env.CMS_API_KEY || "";

interface SyncResult {
  type: "page" | "post" | "category";
  slug: string;
  title: string;
  status: "synced" | "error";
  error?: string;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const force = searchParams.get("force") === "true";
  const webhookSecret = process.env.CMS_WEBHOOK_SECRET;

  // Verificar autenticação
  if (!webhookSecret || secret !== webhookSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!CMS_API_KEY) {
    return NextResponse.json(
      { error: "CMS_API_KEY not configured" },
      { status: 500 }
    );
  }

  console.log("[CMS Sync] Iniciando sincronização", { force });

  const results: SyncResult[] = [];
  const errors: string[] = [];

  try {
    // 1. Sincronizar páginas
    console.log("[CMS Sync] Buscando páginas...");
    const pagesResponse = await fetch(`${CMS_API_URL}/api/v1/cms/pages`, {
      headers: {
        "X-API-Key": CMS_API_KEY,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (pagesResponse.ok) {
      const { pages } = await pagesResponse.json();
      console.log(`[CMS Sync] ${pages?.length || 0} páginas encontradas`);

      if (pages && Array.isArray(pages)) {
        for (const page of pages) {
          try {
            revalidatePath(`/pagina/${page.slug}`);
            revalidateTag(`cms-page-${page.slug}`);
            results.push({
              type: "page",
              slug: page.slug,
              title: page.title,
              status: "synced",
            });
          } catch (error) {
            results.push({
              type: "page",
              slug: page.slug,
              title: page.title,
              status: "error",
              error: String(error),
            });
          }
        }
      }
    } else {
      errors.push(`Failed to fetch pages: ${pagesResponse.status}`);
    }

    // 2. Sincronizar posts
    console.log("[CMS Sync] Buscando posts...");
    const postsResponse = await fetch(
      `${CMS_API_URL}/api/v1/cms/posts?per_page=100`,
      {
        headers: {
          "X-API-Key": CMS_API_KEY,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (postsResponse.ok) {
      const { posts } = await postsResponse.json();
      console.log(`[CMS Sync] ${posts?.length || 0} posts encontrados`);

      if (posts && Array.isArray(posts)) {
        for (const post of posts) {
          try {
            revalidatePath(`/artigo/${post.slug}`);
            revalidateTag(`cms-post-${post.slug}`);
            results.push({
              type: "post",
              slug: post.slug,
              title: post.title,
              status: "synced",
            });
          } catch (error) {
            results.push({
              type: "post",
              slug: post.slug,
              title: post.title,
              status: "error",
              error: String(error),
            });
          }
        }
      }
    } else {
      errors.push(`Failed to fetch posts: ${postsResponse.status}`);
    }

    // 3. Sincronizar categorias
    console.log("[CMS Sync] Buscando categorias...");
    const categoriesResponse = await fetch(
      `${CMS_API_URL}/api/v1/cms/categories`,
      {
        headers: {
          "X-API-Key": CMS_API_KEY,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (categoriesResponse.ok) {
      const { categories } = await categoriesResponse.json();
      console.log(
        `[CMS Sync] ${categories?.length || 0} categorias encontradas`
      );

      if (categories && Array.isArray(categories)) {
        for (const category of categories) {
          try {
            revalidatePath(`/artigo/categoria/${category.slug}`);
            revalidateTag(`cms-category-${category.slug}`);
            results.push({
              type: "category",
              slug: category.slug,
              title: category.name,
              status: "synced",
            });
          } catch (error) {
            results.push({
              type: "category",
              slug: category.slug,
              title: category.name,
              status: "error",
              error: String(error),
            });
          }
        }
      }
    } else {
      errors.push(`Failed to fetch categories: ${categoriesResponse.status}`);
    }

    // 4. Revalidar tags globais
    console.log("[CMS Sync] Revalidando tags globais...");
    revalidateTag("cms-posts");
    revalidateTag("cms-pages");
    revalidateTag("cms-categories");
    revalidateTag("cms-sitemap");

    // 5. Revalidar paths principais
    revalidatePath("/artigo");
    revalidatePath("/sitemap.xml");

    const syncedCount = results.filter((r) => r.status === "synced").length;
    const errorCount = results.filter((r) => r.status === "error").length;

    console.log(
      `[CMS Sync] Concluído: ${syncedCount} sincronizados, ${errorCount} erros`
    );

    return NextResponse.json({
      success: true,
      summary: {
        total: results.length,
        synced: syncedCount,
        errors: errorCount,
        pages: results.filter((r) => r.type === "page").length,
        posts: results.filter((r) => r.type === "post").length,
        categories: results.filter((r) => r.type === "category").length,
      },
      results,
      globalErrors: errors.length > 0 ? errors : undefined,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[CMS Sync] Erro fatal:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Sync failed",
        details: String(error),
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

/**
 * Health check do CMS
 *
 * Verifica se o CMS está acessível e retorna status
 */
export async function HEAD(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const webhookSecret = process.env.CMS_WEBHOOK_SECRET;

  if (!webhookSecret || secret !== webhookSecret) {
    return new NextResponse(null, { status: 401 });
  }

  if (!CMS_API_KEY) {
    return new NextResponse(null, { status: 500 });
  }

  try {
    const response = await fetch(`${CMS_API_URL}/api/v1/cms/sitemap`, {
      method: "HEAD",
      headers: {
        "X-API-Key": CMS_API_KEY,
      },
      cache: "no-store",
    });

    if (response.ok) {
      return new NextResponse(null, {
        status: 200,
        headers: {
          "X-CMS-Status": "connected",
          "X-CMS-URL": CMS_API_URL,
        },
      });
    }

    return new NextResponse(null, {
      status: 503,
      headers: {
        "X-CMS-Status": "unavailable",
        "X-CMS-Error": `HTTP ${response.status}`,
      },
    });
  } catch (error) {
    return new NextResponse(null, {
      status: 503,
      headers: {
        "X-CMS-Status": "error",
        "X-CMS-Error": String(error),
      },
    });
  }
}
