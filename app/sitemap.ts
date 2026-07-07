import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { blogPosts } from "./blog/data";

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
  const currentDate = new Date().toISOString();

  // Páginas principais
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicos`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Páginas de serviços (importante para SEO de contabilidade)
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/servicos/${service}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Páginas do blog
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
