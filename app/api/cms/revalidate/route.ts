import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

/**
 * Endpoint de Webhook para revalidação do cache do CMS
 *
 * Recebe notificações do CMS FastTeam quando conteúdo é criado, atualizado ou deletado.
 * Revalida as páginas e tags de cache correspondentes.
 *
 * Rota: POST /api/cms/revalidate
 *
 * Headers esperados:
 * - X-Webhook-Secret: Token de autenticação
 * - X-Webhook-Signature: (opcional) Assinatura HMAC-SHA256 do body
 * - X-CMS-Event: Tipo do evento
 *
 * Body esperado:
 * {
 *   "event": "content.published" | "content.updated" | "content.deleted" | etc,
 *   "content": {
 *     "type": "page" | "post",
 *     "id": "uuid",
 *     "slug": "slug-da-pagina",
 *     "title": "Título",
 *     "category": { "slug": "categoria", "name": "Categoria" },
 *     ...
 *   },
 *   "paths_to_revalidate": ["/artigo/slug", "/artigo"],
 *   "tags_to_revalidate": ["cms-posts", "cms-post-slug"],
 *   "timestamp": "2026-08-03T14:00:00Z"
 * }
 */

interface WebhookPayload {
  event: string;
  content?: {
    type: "page" | "post" | "category" | "author";
    id: string;
    slug: string;
    title?: string;
    category?: { slug: string; name: string };
    old_slug?: string;
  };
  paths_to_revalidate?: string[];
  tags_to_revalidate?: string[];
  timestamp?: string;
}

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.CMS_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("Webhook: CMS_WEBHOOK_SECRET não configurado");
    return NextResponse.json(
      { error: "Webhook not configured" },
      { status: 500 }
    );
  }

  // 1. Verificar webhook secret
  const receivedSecret = request.headers.get("X-Webhook-Secret");

  if (receivedSecret !== webhookSecret) {
    console.error("Webhook: Invalid secret");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // 2. Ler body
  let bodyText: string;
  try {
    bodyText = await request.text();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // 3. Verificar assinatura HMAC (se fornecida)
  const signature = request.headers.get("X-Webhook-Signature");
  if (signature) {
    const expectedSignature = crypto
      .createHmac("sha256", webhookSecret)
      .update(bodyText)
      .digest("hex");

    if (signature !== `sha256=${expectedSignature}`) {
      console.error("Webhook: Invalid signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }
  }

  // 4. Parse payload
  let payload: WebhookPayload;
  try {
    payload = JSON.parse(bodyText);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { event, content, paths_to_revalidate, tags_to_revalidate } = payload;

  console.log(`[CMS Webhook] Evento recebido: ${event}`, {
    type: content?.type,
    slug: content?.slug,
    timestamp: payload.timestamp,
  });

  const revalidated: string[] = [];
  const errors: string[] = [];

  // 5. Revalidar paths específicos enviados pelo CMS
  if (paths_to_revalidate && Array.isArray(paths_to_revalidate)) {
    for (const path of paths_to_revalidate) {
      try {
        revalidatePath(path);
        revalidated.push(`path:${path}`);
      } catch (error) {
        errors.push(`Failed to revalidate path: ${path}`);
        console.error(`[CMS Webhook] Erro ao revalidar path ${path}:`, error);
      }
    }
  }

  // 6. Revalidar tags de cache enviadas pelo CMS
  if (tags_to_revalidate && Array.isArray(tags_to_revalidate)) {
    for (const tag of tags_to_revalidate) {
      try {
        revalidateTag(tag);
        revalidated.push(`tag:${tag}`);
      } catch (error) {
        errors.push(`Failed to revalidate tag: ${tag}`);
        console.error(`[CMS Webhook] Erro ao revalidar tag ${tag}:`, error);
      }
    }
  }

  // 7. Revalidações padrão baseadas no tipo de evento
  try {
    switch (event) {
      case "content.created":
      case "content.published":
        if (content?.type === "post") {
          // Revalidar listagem de artigos e artigo específico
          revalidatePath("/artigo");
          revalidatePath(`/artigo/${content.slug}`);
          revalidateTag("cms-posts");
          revalidateTag(`cms-post-${content.slug}`);
          revalidated.push("path:/artigo", `path:/artigo/${content.slug}`);

          // Revalidar categoria se existir
          if (content.category?.slug) {
            revalidatePath(`/artigo/categoria/${content.category.slug}`);
            revalidateTag(`cms-category-${content.category.slug}`);
            revalidated.push(`path:/artigo/categoria/${content.category.slug}`);
          }
        } else if (content?.type === "page") {
          // Revalidar página específica
          revalidatePath(`/pagina/${content.slug}`);
          revalidateTag("cms-pages");
          revalidateTag(`cms-page-${content.slug}`);
          revalidated.push(`path:/pagina/${content.slug}`);
        }

        // Sempre revalidar sitemap ao criar/publicar conteúdo
        revalidatePath("/sitemap.xml");
        revalidateTag("cms-sitemap");
        revalidated.push("path:/sitemap.xml");
        break;

      case "content.updated":
        if (content?.type === "post") {
          revalidatePath(`/artigo/${content.slug}`);
          revalidatePath("/artigo");
          revalidateTag("cms-posts");
          revalidateTag(`cms-post-${content.slug}`);
          revalidated.push(`path:/artigo/${content.slug}`, "path:/artigo");
        } else if (content?.type === "page") {
          revalidatePath(`/pagina/${content.slug}`);
          revalidateTag("cms-pages");
          revalidateTag(`cms-page-${content.slug}`);
          revalidated.push(`path:/pagina/${content.slug}`);
        }

        // Revalidar sitemap também em updates
        revalidatePath("/sitemap.xml");
        revalidateTag("cms-sitemap");
        break;

      case "content.deleted":
      case "content.unpublished":
        if (content?.type === "post") {
          revalidatePath("/artigo");
          revalidateTag("cms-posts");
          revalidated.push("path:/artigo");
        } else if (content?.type === "page") {
          // Revalidar página específica e tag global
          revalidatePath(`/pagina/${content.slug}`);
          revalidateTag("cms-pages");
          revalidateTag(`cms-page-${content.slug}`);
          revalidated.push(`path:/pagina/${content.slug}`);
        }

        // Sempre revalidar sitemap ao deletar/despublicar
        revalidatePath("/sitemap.xml");
        revalidateTag("cms-sitemap");
        revalidated.push("path:/sitemap.xml");
        break;

      case "slug.changed":
        // Quando slug muda, revalidar ambos (antigo e novo)
        if (content?.old_slug) {
          if (content.type === "post") {
            revalidatePath(`/artigo/${content.old_slug}`);
            revalidatePath(`/artigo/${content.slug}`);
            revalidatePath("/artigo");
            revalidateTag("cms-posts");
            revalidated.push(
              `path:/artigo/${content.old_slug}`,
              `path:/artigo/${content.slug}`
            );
          } else if (content.type === "page") {
            revalidatePath(`/pagina/${content.old_slug}`);
            revalidatePath(`/pagina/${content.slug}`);
            revalidateTag("cms-pages");
            revalidated.push(
              `path:/pagina/${content.old_slug}`,
              `path:/pagina/${content.slug}`
            );
          }
        }

        revalidatePath("/sitemap.xml");
        revalidateTag("cms-sitemap");
        break;

      case "category.updated":
      case "category.created":
      case "category.deleted":
        revalidatePath("/artigo");
        revalidateTag("cms-categories");
        if (content?.slug) {
          revalidatePath(`/artigo/categoria/${content.slug}`);
          revalidateTag(`cms-category-${content.slug}`);
        }
        revalidated.push("path:/artigo", "tag:cms-categories");
        break;

      case "author.updated":
      case "author.created":
        revalidateTag("cms-authors");
        if (content?.slug) {
          revalidatePath(`/artigo/autor/${content.slug}`);
          revalidateTag(`cms-author-${content.slug}`);
        }
        revalidated.push("tag:cms-authors");
        break;

      case "media.uploaded":
      case "media.deleted":
        // Não precisa revalidar nada específico para mídia
        break;

      case "settings.updated":
        // Revalidar tudo quando configurações mudam
        revalidateTag("cms-pages");
        revalidateTag("cms-posts");
        revalidateTag("cms-sitemap");
        revalidated.push(
          "tag:cms-pages",
          "tag:cms-posts",
          "tag:cms-sitemap"
        );
        break;

      default:
        console.log(`[CMS Webhook] Evento não tratado: ${event}`);
    }
  } catch (error) {
    console.error("[CMS Webhook] Erro durante revalidação padrão:", error);
    errors.push("Error during default revalidation");
  }

  const response = {
    success: true,
    event,
    revalidated: [...new Set(revalidated)], // Remove duplicatas
    errors: errors.length > 0 ? errors : undefined,
    timestamp: new Date().toISOString(),
  };

  console.log(
    `[CMS Webhook] Processado: ${revalidated.length} itens revalidados`,
    response
  );

  return NextResponse.json(response);
}

/**
 * Endpoint GET para teste manual de revalidação
 *
 * Uso: GET /api/cms/revalidate?secret=TOKEN
 *
 * Revalida todo o cache do CMS
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const webhookSecret = process.env.CMS_WEBHOOK_SECRET;

  if (!webhookSecret || secret !== webhookSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  console.log("[CMS Webhook] Revalidação manual solicitada");

  try {
    // Revalidar todas as tags do CMS
    revalidateTag("cms-posts");
    revalidateTag("cms-pages");
    revalidateTag("cms-categories");
    revalidateTag("cms-authors");
    revalidateTag("cms-tags");
    revalidateTag("cms-sitemap");

    // Revalidar paths principais
    revalidatePath("/artigo");
    revalidatePath("/sitemap.xml");

    return NextResponse.json({
      success: true,
      message: "All CMS content revalidated",
      revalidated: [
        "tag:cms-posts",
        "tag:cms-pages",
        "tag:cms-categories",
        "tag:cms-authors",
        "tag:cms-tags",
        "tag:cms-sitemap",
        "path:/artigo",
        "path:/sitemap.xml",
      ],
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[CMS Webhook] Erro na revalidação manual:", error);
    return NextResponse.json(
      { error: "Revalidation failed", details: String(error) },
      { status: 500 }
    );
  }
}
