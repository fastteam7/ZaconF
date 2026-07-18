import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { blogPosts } from "./blog/data";

// Data dinâmica baseada no momento do build/deploy
// Em produção, isso será a data do deploy
const BUILD_DATE = new Date();

// Serviços com a data do último deploy
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

// Bairros de Florianópolis para SEO Local
const bairros = [
  "ingleses",
  "centro",
  "trindade",
  "canasvieiras",
  "jurere",
];

// Nichos específicos para SEO
const nichos = [
  "medicos",
  "advogados",
  "dentistas",
  "engenheiros",
  "clinicas",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Páginas principais - usa data do deploy
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

  // Páginas de serviços (alta prioridade para contabilidade)
  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${baseUrl}/servicos/${slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Páginas de bairros (SEO Local)
  const bairroPages: MetadataRoute.Sitemap = bairros.map((slug) => ({
    url: `${baseUrl}/contabilidade-${slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Páginas de nichos (SEO por segmento)
  const nichoPages: MetadataRoute.Sitemap = nichos.map((slug) => ({
    url: `${baseUrl}/contabilidade-para-${slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Páginas do blog - usa data do post (já é dinâmica)
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
