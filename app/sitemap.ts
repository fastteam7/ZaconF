import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { blogPosts } from "./blog/data";

// Data dinâmica baseada no momento do build/deploy
const BUILD_DATE = new Date();

// Serviços disponíveis
const services = [
  "abertura-de-empresas",
  "contabilidade-empresarial",
  "contabilidade-mei",
  "planejamento-tributario",
  "imposto-de-renda",
  "departamento-pessoal",
  "folha-de-pagamento",
  "regularizacao-empresarial",
  "bpo-financeiro",
];

export default function sitemap(): MetadataRoute.Sitemap {
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
  const bairrosSecundarios = ["centro", "trindade", "canasvieiras", "jurere"];
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

  // Páginas do blog
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...localSeoPages, // Ingleses com prioridade alta
    ...servicePages,
    ...bairroPages,
    ...nichoPages,
    ...blogPages,
  ];
}
