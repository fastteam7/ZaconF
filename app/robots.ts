import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/private/",
          "/*.json$",
          // Bloquear metadata routes do Next.js (não devem ser indexadas)
          "/opengraph-image",
          "/opengraph-image.png",
          "/twitter-image",
          "/twitter-image.png",
          "/apple-icon",
          "/apple-icon.png",
          "/icon",
          "/icon.png",
          "/icon.ico",
          // Bloquear metadata routes em subpastas
          "/*/opengraph-image",
          "/*/opengraph-image.png",
          "/*/twitter-image",
          "/*/twitter-image.png",
          // Bloquear query strings de busca
          "/blog?*",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          // Metadata routes
          "/opengraph-image",
          "/opengraph-image.png",
          "/twitter-image",
          "/twitter-image.png",
          "/apple-icon",
          "/apple-icon.png",
          "/icon",
          "/icon.png",
          "/icon.ico",
          "/*/opengraph-image",
          "/*/opengraph-image.png",
          "/*/twitter-image",
          "/*/twitter-image.png",
          "/blog?*",
        ],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Amazonbot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
