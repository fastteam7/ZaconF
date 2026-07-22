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
      "img-src 'self' blob: data: https://www.google-analytics.com https://www.googletagmanager.com https://*.google.com https://*.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://vitals.vercel-insights.com",
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
    ];
  },

  // Redirects para SEO (www para non-www)
  async redirects() {
    return [
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
    // Otimização de CSS
    optimizeCss: true,
  },

  // Rewrites para URLs SEO-friendly com rotas dinâmicas
  // NOTA: /contabilidade-ingleses é página dedicada (não precisa de rewrite)
  async rewrites() {
    return [
      // Bairros secundários: /contabilidade-{slug} -> /contabilidade/{slug}
      // Ingleses tem página própria em /contabilidade-ingleses
      {
        source: "/contabilidade-centro",
        destination: "/contabilidade/centro",
      },
      {
        source: "/contabilidade-trindade",
        destination: "/contabilidade/trindade",
      },
      {
        source: "/contabilidade-canasvieiras",
        destination: "/contabilidade/canasvieiras",
      },
      {
        source: "/contabilidade-jurere",
        destination: "/contabilidade/jurere",
      },
      // Nichos: /contabilidade-para-{slug} -> /contabilidade-para/{slug}
      {
        source: "/contabilidade-para-:nicho",
        destination: "/contabilidade-para/:nicho",
      },
    ];
  },
};

module.exports = nextConfig;
