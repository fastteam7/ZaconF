/**
 * Cliente da API do CMS FastTeam
 *
 * Integração com o headless CMS para páginas e posts dinâmicos.
 * Usa cache tags do Next.js para revalidação sob demanda via webhook.
 */

const CMS_API_URL = process.env.CMS_API_URL || "https://api.fastteam.pro";
const CMS_API_KEY = process.env.CMS_API_KEY || "";

interface CMSFetchOptions {
  tags?: string[];
  revalidate?: number | false;
}

/**
 * Fetch genérico para a API do CMS com cache e tags
 */
async function cmsFetch<T>(
  endpoint: string,
  options: CMSFetchOptions = {}
): Promise<T> {
  const { tags = [], revalidate = 300 } = options;

  if (!CMS_API_KEY) {
    throw new Error("CMS_API_KEY não configurada");
  }

  const response = await fetch(`${CMS_API_URL}/api/v1/cms${endpoint}`, {
    headers: {
      "X-API-Key": CMS_API_KEY,
      "Content-Type": "application/json",
    },
    next: {
      tags,
      revalidate,
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new CMSNotFoundError(`Recurso não encontrado: ${endpoint}`);
    }
    if (response.status === 401 || response.status === 403) {
      throw new CMSAuthError(`Não autorizado: verifique CMS_API_KEY`);
    }
    throw new Error(`CMS API error: ${response.status} - ${response.statusText}`);
  }

  return response.json();
}

// ==================== TIPOS ====================

export class CMSNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CMSNotFoundError";
  }
}

export class CMSAuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CMSAuthError";
  }
}

export interface CMSPage {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: TipTapContent;
  featured_image: string | null;
  page_type: "page" | "landing" | "contact" | "about" | "services";
  template: string;
  reading_time: number;
  seo: CMSSEO;
  schema_type: string;
  schema_data: Record<string, unknown>;
  published_at: string;
  updated_at: string;
}

export interface CMSPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: TipTapContent;
  featured_image: string | null;
  reading_time: number;
  view_count: number;
  is_featured: boolean;
  category: CMSCategory | null;
  author: CMSAuthor | null;
  tags: CMSTag[];
  seo: CMSSEO;
  published_at: string;
  updated_at: string;
}

export interface CMSCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  post_count: number;
}

export interface CMSTag {
  id: string;
  slug: string;
  name: string;
  color?: string;
  post_count?: number;
}

export interface CMSAuthor {
  id: string;
  slug: string;
  name: string;
  avatar: string | null;
  bio?: string;
  social_links?: Record<string, string>;
  post_count?: number;
}

export interface CMSSEO {
  title: string;
  description: string;
  keywords?: string[];
  canonical_url?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_card?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  schema_type?: string;
}

export interface CMSSitemapUrl {
  type: "page" | "post" | "category";
  slug: string;
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

export interface TipTapContent {
  type: "doc";
  content: TipTapNode[];
}

export interface TipTapNode {
  type: string;
  content?: TipTapNode[];
  text?: string;
  attrs?: Record<string, unknown>;
  marks?: Array<{ type: string; attrs?: Record<string, unknown> }>;
}

interface CMSPaginatedResponse<T> {
  items: T[];
  meta: {
    page: number;
    per_page: number;
    total: number;
    pages_count: number;
  };
}

// ==================== PÁGINAS ====================

export async function getCMSPages(): Promise<{ pages: CMSPage[]; meta: CMSPaginatedResponse<CMSPage>["meta"] }> {
  try {
    const response = await cmsFetch<{ pages: CMSPage[]; meta: CMSPaginatedResponse<CMSPage>["meta"] }>(
      "/pages",
      { tags: ["cms-pages"] }
    );
    return response;
  } catch (error) {
    if (error instanceof CMSNotFoundError || error instanceof CMSAuthError) {
      console.warn("[CMS] Páginas não disponíveis:", error.message);
      return { pages: [], meta: { page: 1, per_page: 10, total: 0, pages_count: 0 } };
    }
    throw error;
  }
}

export async function getCMSPageBySlug(slug: string): Promise<CMSPage> {
  return cmsFetch<CMSPage>(`/pages/${slug}`, {
    tags: ["cms-pages", `cms-page-${slug}`],
  });
}

// ==================== POSTS ====================

export interface GetPostsParams {
  page?: number;
  per_page?: number;
  category?: string;
  tag?: string;
  author?: string;
  search?: string;
  featured?: boolean;
}

export async function getCMSPosts(
  params?: GetPostsParams
): Promise<{ posts: CMSPost[]; meta: CMSPaginatedResponse<CMSPost>["meta"] }> {
  const searchParams = new URLSearchParams();

  if (params?.page) searchParams.set("page", String(params.page));
  if (params?.per_page) searchParams.set("per_page", String(params.per_page));
  if (params?.category) searchParams.set("category", params.category);
  if (params?.tag) searchParams.set("tag", params.tag);
  if (params?.author) searchParams.set("author", params.author);
  if (params?.search) searchParams.set("search", params.search);
  if (params?.featured) searchParams.set("featured", "true");

  const query = searchParams.toString();

  try {
    const response = await cmsFetch<{ posts: CMSPost[]; meta: CMSPaginatedResponse<CMSPost>["meta"] }>(
      `/posts${query ? `?${query}` : ""}`,
      { tags: ["cms-posts"] }
    );
    return response;
  } catch (error) {
    if (error instanceof CMSNotFoundError || error instanceof CMSAuthError) {
      console.warn("[CMS] Posts não disponíveis:", error.message);
      return { posts: [], meta: { page: 1, per_page: 10, total: 0, pages_count: 0 } };
    }
    throw error;
  }
}

export async function getCMSPostBySlug(slug: string): Promise<CMSPost> {
  return cmsFetch<CMSPost>(`/posts/${slug}`, {
    tags: ["cms-posts", `cms-post-${slug}`],
  });
}

// ==================== CATEGORIAS ====================

export async function getCMSCategories(): Promise<{ categories: CMSCategory[] }> {
  try {
    return await cmsFetch<{ categories: CMSCategory[] }>("/categories", {
      tags: ["cms-categories"],
      revalidate: 600,
    });
  } catch (error) {
    if (error instanceof CMSNotFoundError || error instanceof CMSAuthError) {
      console.warn("[CMS] Categorias não disponíveis:", error.message);
      return { categories: [] };
    }
    throw error;
  }
}

export async function getCMSCategoryBySlug(
  slug: string
): Promise<{ category: CMSCategory; posts: CMSPost[]; meta: CMSPaginatedResponse<CMSPost>["meta"] }> {
  return cmsFetch(`/categories/${slug}`, {
    tags: ["cms-categories", `cms-category-${slug}`],
  });
}

// ==================== TAGS ====================

export async function getCMSTags(): Promise<{ tags: CMSTag[] }> {
  try {
    return await cmsFetch<{ tags: CMSTag[] }>("/tags", {
      tags: ["cms-tags"],
      revalidate: 600,
    });
  } catch (error) {
    if (error instanceof CMSNotFoundError || error instanceof CMSAuthError) {
      console.warn("[CMS] Tags não disponíveis:", error.message);
      return { tags: [] };
    }
    throw error;
  }
}

export async function getCMSTagBySlug(
  slug: string
): Promise<{ tag: CMSTag; posts: CMSPost[]; meta: CMSPaginatedResponse<CMSPost>["meta"] }> {
  return cmsFetch(`/tags/${slug}`, {
    tags: ["cms-tags", `cms-tag-${slug}`],
  });
}

// ==================== AUTORES ====================

export async function getCMSAuthors(): Promise<{ authors: CMSAuthor[] }> {
  try {
    return await cmsFetch<{ authors: CMSAuthor[] }>("/authors", {
      tags: ["cms-authors"],
      revalidate: 600,
    });
  } catch (error) {
    if (error instanceof CMSNotFoundError || error instanceof CMSAuthError) {
      console.warn("[CMS] Autores não disponíveis:", error.message);
      return { authors: [] };
    }
    throw error;
  }
}

export async function getCMSAuthorBySlug(
  slug: string
): Promise<{ author: CMSAuthor; posts: CMSPost[]; meta: CMSPaginatedResponse<CMSPost>["meta"] }> {
  return cmsFetch(`/authors/${slug}`, {
    tags: ["cms-authors", `cms-author-${slug}`],
  });
}

// ==================== SITEMAP ====================

export async function getCMSSitemap(): Promise<{
  urls: CMSSitemapUrl[];
  total: number;
  generated_at: string;
}> {
  try {
    return await cmsFetch<{
      urls: CMSSitemapUrl[];
      total: number;
      generated_at: string;
    }>("/sitemap", {
      tags: ["cms-sitemap"],
      revalidate: 3600,
    });
  } catch (error) {
    // Se o CMS não estiver disponível, retornar vazio
    console.error("Erro ao buscar sitemap do CMS:", error);
    return { urls: [], total: 0, generated_at: new Date().toISOString() };
  }
}

// ==================== HELPERS ====================

/**
 * Converte path relativo de mídia para URL absoluta do CMS
 */
export function getCMSMediaUrl(path: string | null): string | null {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  return `${CMS_API_URL}${path}`;
}

/**
 * Verifica se o CMS está configurado e disponível
 */
export function isCMSConfigured(): boolean {
  return Boolean(CMS_API_KEY);
}

/**
 * Verifica conexão com o CMS (para health check)
 */
export async function checkCMSConnection(): Promise<{
  connected: boolean;
  error?: string;
}> {
  if (!CMS_API_KEY) {
    return { connected: false, error: "CMS_API_KEY não configurada" };
  }

  try {
    const response = await fetch(`${CMS_API_URL}/api/v1/cms/sitemap`, {
      headers: {
        "X-API-Key": CMS_API_KEY,
      },
      next: { revalidate: 0 },
    });

    if (response.ok) {
      return { connected: true };
    }

    return { connected: false, error: `HTTP ${response.status}` };
  } catch (error) {
    return {
      connected: false,
      error: error instanceof Error ? error.message : "Erro desconhecido",
    };
  }
}
