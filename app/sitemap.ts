import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { blogPosts } from "./blog/data";

// Data base para páginas estáticas (atualizar quando houver mudanças significativas)
const SITE_LAST_UPDATED = "2024-07-08";

const services = [
  { slug: "abertura-de-empresas", lastMod: "2024-07-08" },
  { slug: "contabilidade-empresarial", lastMod: "2024-07-08" },
  { slug: "contabilidade-mei", lastMod: "2024-07-08" },
  { slug: "planejamento-tributario", lastMod: "2024-07-08" },
  { slug: "imposto-de-renda", lastMod: "2024-07-08" },
  { slug: "departamento-pessoal", lastMod: "2024-07-08" },
  { slug: "folha-de-pagamento", lastMod: "2024-07-08" },
  { slug: "regularizacao-empresarial", lastMod: "2024-07-08" },
  { slug: "bpo-financeiro", lastMod: "2024-07-08" },
];

// Bairros de Florianópolis para SEO Local
const bairros = [
  { slug: "ingleses", lastMod: "2024-07-08" },
  { slug: "centro", lastMod: "2024-07-08" },
  { slug: "trindade", lastMod: "2024-07-08" },
  { slug: "canasvieiras", lastMod: "2024-07-08" },
  { slug: "jurere", lastMod: "2024-07-08" },
];

// Nichos específicos para SEO
const nichos = [
  { slug: "medicos", lastMod: "2024-07-08" },
  { slug: "advogados", lastMod: "2024-07-08" },
  { slug: "dentistas", lastMod: "2024-07-08" },
  { slug: "engenheiros", lastMod: "2024-07-08" },
  { slug: "clinicas", lastMod: "2024-07-08" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Páginas principais
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(SITE_LAST_UPDATED),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(SITE_LAST_UPDATED),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicos`,
      lastModified: new Date(SITE_LAST_UPDATED),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(SITE_LAST_UPDATED),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(SITE_LAST_UPDATED),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Páginas de serviços (alta prioridade para contabilidade)
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/servicos/${service.slug}`,
    lastModified: new Date(service.lastMod),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Páginas de bairros (SEO Local)
  const bairroPages: MetadataRoute.Sitemap = bairros.map((bairro) => ({
    url: `${baseUrl}/contabilidade-${bairro.slug}`,
    lastModified: new Date(bairro.lastMod),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Páginas de nichos (SEO por segmento)
  const nichoPages: MetadataRoute.Sitemap = nichos.map((nicho) => ({
    url: `${baseUrl}/contabilidade-para-${nicho.slug}`,
    lastModified: new Date(nicho.lastMod),
    changeFrequency: "monthly" as const,
    priority: 0.8,
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
    ...servicePages,
    ...bairroPages,
    ...nichoPages,
    ...blogPages,
  ];
}
