import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "../../_components/ui/button";
import { AnimatedSection } from "../../_components/AnimatedSection";
import { TipTapRenderer } from "../../_components/TipTapRenderer";
import { constructMetadata, siteConfig } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";
import {
  getCMSPageBySlug,
  getCMSPages,
  getCMSMediaUrl,
  CMSNotFoundError,
  isCMSConfigured,
} from "@/lib/cms";

interface CMSPageProps {
  params: Promise<{ slug: string }>;
}

// Desabilita renderização de slugs não listados em generateStaticParams
// Isso garante que páginas deletadas retornem 404 real após revalidação
export const dynamicParams = false;

// Revalidar a cada 5 minutos para sincronizar com o CMS
export const revalidate = 300;

// Gera páginas estáticas para todas as páginas do CMS
export async function generateStaticParams() {
  if (!isCMSConfigured()) {
    return [];
  }

  try {
    const { pages } = await getCMSPages();
    return pages.map((page) => ({
      slug: page.slug,
    }));
  } catch (error) {
    console.error("Erro ao gerar parâmetros estáticos do CMS:", error);
    return [];
  }
}

// Metadata dinâmica para SEO
export async function generateMetadata({
  params,
}: CMSPageProps): Promise<Metadata> {
  const resolvedParams = await params;

  if (!isCMSConfigured()) {
    return constructMetadata({
      title: "Página não encontrada",
      pathname: `/pagina/${resolvedParams.slug}`,
    });
  }

  try {
    const page = await getCMSPageBySlug(resolvedParams.slug);

    const seoTitle = page.seo?.title || page.title;
    const seoDescription = page.seo?.description || page.excerpt;
    const ogImage = getCMSMediaUrl(page.seo?.og_image || page.featured_image);

    return {
      title: `${seoTitle} | ${siteConfig.name}`,
      description: seoDescription,
      keywords: page.seo?.keywords?.join(", "),
      alternates: {
        canonical: `${siteConfig.url}/pagina/${page.slug}`,
      },
      openGraph: {
        type: "website",
        locale: "pt_BR",
        url: `${siteConfig.url}/pagina/${page.slug}`,
        title: page.seo?.og_title || seoTitle,
        description: page.seo?.og_description || seoDescription,
        siteName: siteConfig.name,
        images: ogImage ? [{ url: ogImage }] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: page.seo?.twitter_title || seoTitle,
        description: page.seo?.twitter_description || seoDescription,
        images: ogImage ? [ogImage] : [],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  } catch (error) {
    if (error instanceof CMSNotFoundError) {
      return constructMetadata({
        title: "Página não encontrada",
        pathname: `/pagina/${resolvedParams.slug}`,
      });
    }
    throw error;
  }
}

export default async function CMSPage({ params }: CMSPageProps) {
  const resolvedParams = await params;

  if (!isCMSConfigured()) {
    notFound();
  }

  let page;
  try {
    page = await getCMSPageBySlug(resolvedParams.slug);
  } catch (error) {
    if (error instanceof CMSNotFoundError) {
      notFound();
    }
    throw error;
  }

  const featuredImage = getCMSMediaUrl(page.featured_image);

  // Build breadcrumb schema
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: page.title, url: `/pagina/${page.slug}` },
  ]);

  // Build page schema based on page type
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": page.schema_type || "WebPage",
    "@id": `${siteConfig.url}/pagina/${page.slug}#webpage`,
    url: `${siteConfig.url}/pagina/${page.slug}`,
    name: page.title,
    description: page.excerpt,
    datePublished: page.published_at,
    dateModified: page.updated_at,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(page.schema_data || {}),
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-zacon-navy py-16 lg:py-24">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-zacon-corporate/20 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              {/* Breadcrumb */}
              <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-zacon-silver-light">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-zacon-accent-light truncate max-w-[200px]">
                  {page.title}
                </span>
              </nav>

              {/* Title */}
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                {page.title}
              </h1>

              {/* Excerpt */}
              {page.excerpt && (
                <p className="mt-6 text-lg text-zacon-silver-light">
                  {page.excerpt}
                </p>
              )}

              {/* Reading time */}
              {page.reading_time > 0 && (
                <p className="mt-4 text-sm text-zacon-silver">
                  {page.reading_time} min de leitura
                </p>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image */}
      {featuredImage && (
        <section className="bg-white py-8">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Image
              src={featuredImage}
              alt={page.title}
              width={1200}
              height={630}
              className="w-full rounded-xl shadow-lg"
              priority
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {/* Back Button */}
            <div className="mb-8">
              <Button
                variant="ghost"
                asChild
                className="text-zacon-graphite hover:text-zacon-corporate"
              >
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar ao início
                </Link>
              </Button>
            </div>

            {/* Page Content */}
            <article className="prose-article">
              <TipTapRenderer content={page.content} />
            </article>

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-gradient-to-br from-zacon-navy to-zacon-corporate p-8 lg:p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <h3 className="relative text-2xl font-bold text-white">
                Precisa de ajuda com sua contabilidade?
              </h3>
              <p className="relative mt-3 text-zacon-silver-light">
                A ZACON tem mais de 15 anos de experiência em Florianópolis.
                Fale conosco!
              </p>
              <div className="relative mt-6">
                <Button variant="premium" size="lg" asChild>
                  <Link href="/contato">Entrar em Contato</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
