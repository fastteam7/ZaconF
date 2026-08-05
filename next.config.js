/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimização de imagens
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dias
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zacon.com.br",
      },
      // CMS FastTeam - imagens de mídia
      {
        protocol: "https",
        hostname: "api.fastteam.pro",
        pathname: "/api/cms/media/**",
      },
      {
        protocol: "https",
        hostname: "api.fastteam.pro",
        pathname: "/uploads/**",
      },
      // Permitir também subdomínios do FastTeam
      {
        protocol: "https",
        hostname: "*.fastteam.pro",
      },
    ],
  },

  // Compressão habilitada
  compress: true,

  // Output standalone para Docker otimizado
  output: "standalone",

  // Configuração de PoweredBy
  poweredByHeader: false,

  // Headers de segurança e performance
  async headers() {
    // Content Security Policy
    const cspHeader = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' blob: data: https://www.google-analytics.com https://www.googletagmanager.com https://*.google.com https://*.googleapis.com https://api.fastteam.pro https://*.fastteam.pro",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://vitals.vercel-insights.com https://api.fastteam.pro https://*.fastteam.pro",
      "frame-src 'self' https://www.google.com https://maps.google.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          // DNS Prefetch
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          // Security Headers
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
        ],
      },
      {
        // Cache para assets estáticos
        source:
          "/(.*)\\.(ico|png|jpg|jpeg|gif|webp|avif|svg|woff|woff2|ttf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache para JS e CSS
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache para imagens otimizadas
        source: "/_next/image/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      // Impedir indexação de metadata routes do Next.js
      // Essas rotas geram imagens dinamicamente e não devem aparecer no Google
      {
        source: "/opengraph-image",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/opengraph-image.png",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/twitter-image",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/twitter-image.png",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/apple-icon",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/apple-icon.png",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/icon",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/icon.png",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/icon.ico",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        // Metadata routes em subpastas do blog
        source: "/blog/:slug/opengraph-image",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/blog/:slug/opengraph-image.png",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/blog/:slug/twitter-image",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/blog/:slug/twitter-image.png",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },

  // Redirects para SEO (www para non-www + URLs legadas)
  async redirects() {
    return [
      // www para non-www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.zacon.com.br",
          },
        ],
        destination: "https://zacon.com.br/:path*",
        permanent: true,
      },
      // Redirects 301 para URLs de nichos com hífen -> barra
      // Canonical é /contabilidade-para/{nicho}, redirect de /contabilidade-para-{nicho}
      {
        source: "/contabilidade-para-medicos",
        destination: "/contabilidade-para/medicos",
        permanent: true,
      },
      {
        source: "/contabilidade-para-advogados",
        destination: "/contabilidade-para/advogados",
        permanent: true,
      },
      {
        source: "/contabilidade-para-dentistas",
        destination: "/contabilidade-para/dentistas",
        permanent: true,
      },
      {
        source: "/contabilidade-para-engenheiros",
        destination: "/contabilidade-para/engenheiros",
        permanent: true,
      },
      {
        source: "/contabilidade-para-clinicas",
        destination: "/contabilidade-para/clinicas",
        permanent: true,
      },
      // Consolidação: folha-de-pagamento -> departamento-pessoal
      {
        source: "/servicos/folha-de-pagamento",
        destination: "/servicos/departamento-pessoal",
        permanent: true,
      },
      // Redirects de artigos do blog atualizados (2024 -> 2026)
      {
        source: "/blog/imposto-de-renda-2024-guia-completo",
        destination: "/blog/imposto-de-renda-2026-guia-completo",
        permanent: true,
      },
      {
        source: "/blog/esocial-2024-guia-para-empresas",
        destination: "/blog/esocial-2026-guia-para-empresas",
        permanent: true,
      },
      // Redirects 301 de bairros com hífen -> barra (consolidação de autoridade)
      {
        source: "/contabilidade-centro",
        destination: "/contabilidade/centro",
        permanent: true,
      },
      {
        source: "/contabilidade-trindade",
        destination: "/contabilidade/trindade",
        permanent: true,
      },
      {
        source: "/contabilidade-canasvieiras",
        destination: "/contabilidade/canasvieiras",
        permanent: true,
      },
      {
        source: "/contabilidade-jurere",
        destination: "/contabilidade/jurere",
        permanent: true,
      },
      {
        source: "/contabilidade-cachoeira-do-bom-jesus",
        destination: "/contabilidade/cachoeira-do-bom-jesus",
        permanent: true,
      },
      {
        source: "/contabilidade-rio-vermelho",
        destination: "/contabilidade/rio-vermelho",
        permanent: true,
      },
    ];
  },

  // Experimental features para performance
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-accordion",
      "@radix-ui/react-slot",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-navigation-menu",
      "@radix-ui/react-tooltip",
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
    ],
  },

  // NOTA: Rewrites removidos em favor de redirects 301 para consolidar autoridade SEO
  // Todas as URLs alternativas agora redirecionam para as canônicas via redirects()
};


module.exports = nextConfig;
