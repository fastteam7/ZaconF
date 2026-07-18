import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { WhatsAppButton } from "./_components/WhatsAppButton";
import { HydrationMarker } from "./_components/HydrationMarker";
import { constructMetadata } from "@/lib/seo";
import {
  getOrganizationSchema,
  getWebsiteSchema,
  getLocalBusinessSchema,
} from "@/lib/schema";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
});

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1E3A8A" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={plusJakartaSans.variable}>
      <head>
        {/* Favicons são gerados automaticamente via icon.tsx e apple-icon.tsx */}

        {/* Preconnect para fontes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch para recursos externos */}
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* Meta tags adicionais para SEO local */}
        <meta name="geo.region" content="BR-SC" />
        <meta name="geo.placename" content="Florianópolis" />
        <meta name="geo.position" content="-27.4344;-48.3944" />
        <meta name="ICBM" content="-27.4344, -48.3944" />

        {/* Business info */}
        <meta name="author" content="ZACON Contabilidade" />
        <meta name="copyright" content="ZACON Contabilidade" />
        <meta name="application-name" content="ZACON Contabilidade" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteSchema()),
          }}
        />

        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema()),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-zacon-graphite antialiased font-sans">
        <HydrationMarker />
        <Header />
        <main className="flex-1 pt-0">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
