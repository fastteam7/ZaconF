import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { blogPosts } from "./blog/data";
import { teamMembers } from "@/lib/team";
import {
  getCMSPages,
  getCMSPosts,
  getCMSSitemap,
  isCMSConfigured,
} from "@/lib/cms";

// Data dinâmica baseada no momento do build/deploy
const BUILD_DATE = new Date();

// Serviços disponíveis (folha-de-pagamento foi consolidada em departamento-pessoal)
const services = [
  "abertura-de-empresas",
  "contabilidade-empresarial",
  "contabilidade-mei",
  "planejamento-tributario",
  "imposto-de-renda",
  "departamento-pessoal",
  "regularizacao-empresarial",
  "bpo-financeiro",
];

/**
 * Sitemap dinâmico que combina conteúdo local e do CMS
 *
 * Prioridades:
 * - 1.0: Homepage
 * - 0.95: Página principal de SEO local (Ingleses)
 * - 0.9: Serviços principais, contato
 * - 0.85: Páginas de serviços individuais
 * - 0.8: Blog index, páginas do CMS
 * - 0.75: Bairros, nichos
 * - 0.7: Posts do blog (local e CMS)
 * - 0.6: Equipe
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  // Páginas principais
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicos`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/perguntas-frequentes`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/glossario`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/simulador-simples-nacional`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Páginas de serviços
  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${baseUrl}/servicos/${slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Página de SEO Local - INGLESES (PRIORIDADE MÁXIMA - sede do escritório)
  // URL: /contabilidade-ingleses (rota estática dedicada)
  const localSeoPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/contabilidade-ingleses`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly" as const,
      priority: 0.95, // Alta prioridade - página principal de SEO local
    },
  ];

  // Páginas de bairros secundários (usam rota dinâmica /contabilidade/[bairro])
  const bairrosSecundarios = [
    "centro",
    "trindade",
    "canasvieiras",
    "jurere",
    "cachoeira-do-bom-jesus",
    "rio-vermelho",
  ];
  const bairroPages: MetadataRoute.Sitemap = bairrosSecundarios.map((slug) => ({
    url: `${baseUrl}/contabilidade/${slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Páginas de nichos (usam rota dinâmica /contabilidade-para/[nicho])
  const nichos = ["medicos", "advogados", "dentistas", "engenheiros", "clinicas"];
  const nichoPages: MetadataRoute.Sitemap = nichos.map((slug) => ({
    url: `${baseUrl}/contabilidade-para/${slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Páginas do blog LOCAL
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified || post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Páginas de equipe (biografias)
  const teamPages: MetadataRoute.Sitemap = teamMembers.map((member) => ({
    url: `${baseUrl}/equipe/${member.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // ==================== CONTEÚDO DO CMS ====================
  let cmsPages: MetadataRoute.Sitemap = [];
  let cmsPosts: MetadataRoute.Sitemap = [];

  // Só busca do CMS se estiver configurado
  if (isCMSConfigured()) {
    try {
      // Tentar usar o endpoint de sitemap do CMS (mais eficiente)
      const cmsSitemap = await getCMSSitemap();

      if (cmsSitemap.urls && cmsSitemap.urls.length > 0) {
        // Usar dados do endpoint de sitemap do CMS
        for (const url of cmsSitemap.urls) {
          // Corrigir paths: posts do CMS usam /artigo/, páginas usam /pagina/
          let correctedLoc = url.loc;
          if (url.type === "post") {
            // Extrair o slug e garantir que use /artigo/
            const slug = url.loc.replace(/^\/(blog|artigo|post)\//, "");
            correctedLoc = `/artigo/${slug}`;
          } else if (url.type === "page") {
            // Extrair o slug e garantir que use /pagina/
            const slug = url.loc.replace(/^\/(pagina|page)\//, "");
            correctedLoc = `/pagina/${slug}`;
          }

          const entry: MetadataRoute.Sitemap[0] = {
            url: `${baseUrl}${correctedLoc}`,
            lastModified: new Date(url.lastmod),
            changeFrequency: url.changefreq as MetadataRoute.Sitemap[0]["changeFrequency"],
            priority: parseFloat(url.priority),
          };

          if (url.type === "page") {
            cmsPages.push(entry);
          } else if (url.type === "post") {
            cmsPosts.push(entry);
          }
        }
      } else {
        // Fallback: buscar páginas e posts individualmente
        const [pagesResult, postsResult] = await Promise.all([
          getCMSPages().catch(() => ({ pages: [] })),
          getCMSPosts({ per_page: 100 }).catch(() => ({ posts: [] })),
        ]);

        // Páginas do CMS
        cmsPages = pagesResult.pages.map((page) => ({
          url: `${baseUrl}/pagina/${page.slug}`,
          lastModified: new Date(page.updated_at),
          changeFrequency: "weekly" as const,
          priority: 0.8,
        }));

        // Posts/artigos do CMS
        cmsPosts = postsResult.posts.map((post) => ({
          url: `${baseUrl}/artigo/${post.slug}`,
          lastModified: new Date(post.updated_at),
          changeFrequency: "weekly" as const,
          priority: 0.7,
        }));
      }

      console.log(
        `[Sitemap] CMS: ${cmsPages.length} páginas, ${cmsPosts.length} posts`
      );
    } catch (error) {
      console.error("[Sitemap] Erro ao buscar conteúdo do CMS:", error);
      // Continua sem conteúdo do CMS em caso de erro
    }
  }

  // Adicionar página de listagem de artigos do CMS se houver posts
  const cmsIndexPages: MetadataRoute.Sitemap =
    cmsPosts.length > 0
      ? [
          {
            url: `${baseUrl}/artigo`,
            lastModified: BUILD_DATE,
            changeFrequency: "daily" as const,
            priority: 0.8,
          },
        ]
      : [];

  return [
    ...staticPages,
    ...localSeoPages, // Ingleses com prioridade alta
    ...servicePages,
    ...bairroPages,
    ...nichoPages,
    ...blogPages,
    ...teamPages,
    // Conteúdo do CMS
    ...cmsIndexPages,
    ...cmsPages,
    ...cmsPosts,
  ];
}
