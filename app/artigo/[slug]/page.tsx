import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, RefreshCw, Tag, User } from "lucide-react";
import { Button } from "../../_components/ui/button";
import { AnimatedSection } from "../../_components/AnimatedSection";
import { TipTapRenderer } from "../../_components/TipTapRenderer";
import { constructMetadata, siteConfig } from "@/lib/seo";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/schema";
import {
  getCMSPostBySlug,
  getCMSPosts,
  getCMSMediaUrl,
  CMSNotFoundError,
  isCMSConfigured,
  type CMSPost,
} from "@/lib/cms";

interface CMSPostPageProps {
  params: Promise<{ slug: string }>;
}

// Permitir posts dinâmicos (não listados em generateStaticParams)
// Isso permite criar novos posts no CMS sem precisar rebuild
export const dynamicParams = true;

// Revalidar a cada 60 segundos para sincronizar rapidamente com o CMS
// Posts deletados mostrarão 404 após esse período
export const revalidate = 60;

// Gera páginas estáticas para todos os posts do CMS
export async function generateStaticParams() {
  if (!isCMSConfigured()) {
    return [];
  }

  try {
    const { posts } = await getCMSPosts({ per_page: 100 });
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Erro ao gerar parâmetros estáticos do CMS:", error);
    return [];
  }
}

// Metadata dinâmica para SEO
export async function generateMetadata({
  params,
}: CMSPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;

  if (!isCMSConfigured()) {
    return constructMetadata({
      title: "Artigo não encontrado",
      pathname: `/artigo/${resolvedParams.slug}`,
    });
  }

  try {
    const post = await getCMSPostBySlug(resolvedParams.slug);

    const seoTitle = post.seo?.title || post.title;
    const seoDescription = post.seo?.description || post.excerpt;
    const ogImage = getCMSMediaUrl(post.seo?.og_image || post.featured_image);

    return {
      title: `${seoTitle} | ${siteConfig.name}`,
      description: seoDescription,
      alternates: {
        canonical: `${siteConfig.url}/artigo/${post.slug}`,
      },
      openGraph: {
        type: "article",
        locale: "pt_BR",
        url: `${siteConfig.url}/artigo/${post.slug}`,
        title: post.seo?.og_title || seoTitle,
        description: post.seo?.og_description || seoDescription,
        siteName: siteConfig.name,
        publishedTime: post.published_at,
        modifiedTime: post.updated_at,
        authors: post.author ? [post.author.name] : [],
        images: ogImage ? [{ url: ogImage }] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: post.seo?.twitter_title || seoTitle,
        description: post.seo?.twitter_description || seoDescription,
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
        title: "Artigo não encontrado",
        pathname: `/artigo/${resolvedParams.slug}`,
      });
    }
    throw error;
  }
}

// Calcular contagem de palavras do conteúdo TipTap
function getWordCount(content: CMSPost["content"]): number {
  if (!content?.content) return 0;

  let text = "";
  const extractText = (nodes: CMSPost["content"]["content"]) => {
    for (const node of nodes) {
      if (node.text) {
        text += node.text + " ";
      }
      if (node.content) {
        extractText(node.content);
      }
    }
  };

  extractText(content.content);
  return text.split(/\s+/).filter(Boolean).length;
}

export default async function CMSPostPage({ params }: CMSPostPageProps) {
  const resolvedParams = await params;

  if (!isCMSConfigured()) {
    notFound();
  }

  let post: CMSPost;
  try {
    post = await getCMSPostBySlug(resolvedParams.slug);
  } catch (error) {
    if (error instanceof CMSNotFoundError) {
      notFound();
    }
    throw error;
  }

  const featuredImage = getCMSMediaUrl(post.featured_image);
  const authorAvatar = post.author ? getCMSMediaUrl(post.author.avatar) : null;
  const wordCount = getWordCount(post.content);

  // Build breadcrumb schema
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ];

  if (post.category) {
    breadcrumbItems.push({
      name: post.category.name,
      url: `/artigo/categoria/${post.category.slug}`,
    });
  }

  breadcrumbItems.push({ name: post.title, url: `/artigo/${post.slug}` });

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  // Build article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteConfig.url}/artigo/${post.slug}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/artigo/${post.slug}`,
    },
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: post.author
      ? {
          "@type": "Person",
          name: post.author.name,
          url: post.author.slug
            ? `${siteConfig.url}/artigo/autor/${post.author.slug}`
            : undefined,
          worksFor: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
        }
      : {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/opengraph-image`,
      },
    },
    image: featuredImage || `${siteConfig.url}/opengraph-image`,
    articleSection: post.category?.name,
    wordCount: wordCount,
    inLanguage: "pt-BR",
    keywords: post.tags.map((t) => t.name).join(", "),
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
          __html: JSON.stringify(articleSchema),
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
              <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-zacon-silver-light flex-wrap">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
                {post.category && (
                  <>
                    <span>/</span>
                    <span className="text-zacon-accent-light">
                      {post.category.name}
                    </span>
                  </>
                )}
              </nav>

              {/* Category Badge */}
              {post.category && (
                <div className="mb-6 inline-flex rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 text-sm font-medium text-zacon-accent-light">
                  {post.category.name}
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-zacon-silver-light text-sm sm:text-base">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <time dateTime={post.published_at}>
                    {new Date(post.published_at).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
                {post.updated_at !== post.published_at && (
                  <div className="flex items-center text-zacon-accent-light">
                    <RefreshCw className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span>
                      Atualizado em{" "}
                      {new Date(post.updated_at).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                      })}
                    </span>
                  </div>
                )}
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span>{post.reading_time} min de leitura</span>
                </div>
              </div>

              {/* Author */}
              {post.author && (
                <div className="mt-6 flex justify-center">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                    {authorAvatar ? (
                      <Image
                        src={authorAvatar}
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <span className="text-white font-medium">
                      {post.author.name}
                    </span>
                  </div>
                </div>
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
              alt={post.title}
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
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar ao Blog
                </Link>
              </Button>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    <Tag className="w-3 h-3" />
                    {tag.name}
                  </span>
                ))}
              </div>
            )}

            {/* Article Content */}
            <article className="prose-article">
              <TipTapRenderer content={post.content} />
            </article>

            {/* Author Bio Card */}
            {post.author?.bio && (
              <div className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                <div className="flex items-start gap-4">
                  {authorAvatar ? (
                    <Image
                      src={authorAvatar}
                      alt={post.author.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-zacon-corporate/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-8 h-8 text-zacon-corporate" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-zacon-navy">
                      {post.author.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {post.author.bio}
                    </p>
                    {post.author.social_links && (
                      <div className="mt-3 flex gap-3">
                        {Object.entries(post.author.social_links).map(
                          ([network, url]) => (
                            <a
                              key={network}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-zacon-corporate hover:underline capitalize"
                            >
                              {network}
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                Compartilhe este artigo
              </h3>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    `${siteConfig.url}/artigo/${post.slug}`
                  )}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#1DA1F2] text-white rounded-lg text-sm font-medium hover:bg-[#1a8cd8] transition-colors"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                    `${siteConfig.url}/artigo/${post.slug}`
                  )}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#0A66C2] text-white rounded-lg text-sm font-medium hover:bg-[#084d96] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `${post.title} - ${siteConfig.url}/artigo/${post.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#25D366] text-white rounded-lg text-sm font-medium hover:bg-[#1fb855] transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

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
