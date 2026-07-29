import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import { Button } from "../../_components/ui/button";
import { AnimatedSection } from "../../_components/AnimatedSection";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/schema";
import { getPostBySlug, getAllPosts, getRelatedPosts, BlogPost } from "../data";
import {
  MarkdownRenderer,
  TableOfContents,
  MobileTableOfContents,
  ReadingProgress,
  ShareButtons,
  RelatedPosts,
  ArticleNavigation,
  BackToTop,
  AuthorCard,
  AuthorBadge,
} from "../_components";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return constructMetadata({
      title: "Artigo não encontrado",
      pathname: `/blog/${resolvedParams.slug}`,
    });
  }

  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: [...post.keywords, post.category, "contabilidade", "Florianópolis", "ZACON"],
    pathname: `/blog/${post.slug}`,
  });
}

// Get adjacent posts for navigation
function getAdjacentPosts(currentSlug: string): {
  previous: BlogPost | null;
  next: BlogPost | null;
} {
  const posts = getAllPosts();
  const currentIndex = posts.findIndex((p) => p.slug === currentSlug);

  return {
    previous: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
    next: currentIndex > 0 ? posts[currentIndex - 1] : null,
  };
}

// Extract FAQs from content for schema
function extractFAQsFromContent(content: string): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  const faqRegex = /:::faq\n([\s\S]*?)\n---\n([\s\S]*?):::/g;
  let match;

  while ((match = faqRegex.exec(content)) !== null) {
    faqs.push({
      question: match[1].trim(),
      answer: match[2].trim(),
    });
  }

  // Also extract from FAQ headers in markdown
  const faqSectionRegex = /\*\*([^*]+\?)\*\*\s*\n([^*\n][^\n]+)/g;
  while ((match = faqSectionRegex.exec(content)) !== null) {
    faqs.push({
      question: match[1].trim(),
      answer: match[2].trim(),
    });
  }

  return faqs;
}

// Calculate word count
function getWordCount(content: string): number {
  return content.split(/\s+/).filter(Boolean).length;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);
  const { previous, next } = getAdjacentPosts(post.slug);
  const faqs = extractFAQsFromContent(post.content);
  const wordCount = getWordCount(post.content);

  // Build schemas
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://zacon.com.br/blog/${post.slug}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://zacon.com.br/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole || "Contador",
      url: post.authorSlug
        ? `https://zacon.com.br/equipe/${post.authorSlug}`
        : undefined,
      worksFor: {
        "@type": "Organization",
        name: "ZACON Contabilidade",
        url: "https://zacon.com.br",
      },
      ...(post.authorRole?.includes("CRC") && {
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "professional license",
          name: "CRC/SC",
          recognizedBy: {
            "@type": "Organization",
            name: "Conselho Regional de Contabilidade de Santa Catarina",
          },
        },
      }),
    },
    publisher: {
      "@type": "Organization",
      name: "ZACON Contabilidade",
      url: "https://zacon.com.br",
      logo: {
        "@type": "ImageObject",
        url: "https://zacon.com.br/opengraph-image",
      },
    },
    image: `https://zacon.com.br/blog/${post.slug}/opengraph-image`,
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    wordCount: wordCount,
    inLanguage: "pt-BR",
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
          __html: JSON.stringify(blogPostingSchema),
        }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getFAQSchema(faqs)),
          }}
        />
      )}

      {/* Reading Progress Bar */}
      <ReadingProgress />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Floating Share Buttons (Desktop) */}
      <ShareButtons title={post.title} variant="floating" />

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
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
                <span>/</span>
                <span className="text-zacon-accent-light truncate max-w-[200px]">
                  {post.category}
                </span>
              </nav>

              {/* Category Badge */}
              <div className="mb-6 inline-flex rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 text-sm font-medium text-zacon-accent-light">
                {post.category}
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-zacon-silver-light text-sm sm:text-base">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span>
                    {new Date(post.date).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                {post.dateModified && post.dateModified !== post.date && (
                  <div className="flex items-center text-zacon-accent-light">
                    <RefreshCw className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span>
                      Atualizado em{" "}
                      {new Date(post.dateModified).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                      })}
                    </span>
                  </div>
                )}
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span>{post.readingTime} de leitura</span>
                </div>
              </div>

              {/* Author Badge */}
              <div className="mt-6 flex justify-center">
                <AuthorBadge
                  name={post.author}
                  role={post.authorRole}
                  slug={post.authorSlug}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Table of Contents (Desktop) */}
            <TableOfContents content={post.content} />

            {/* Main Content */}
            <div className="flex-1 max-w-3xl mx-auto lg:mx-0">
              <AnimatedSection>
                {/* Back Button */}
                <div className="mb-6">
                  <Button variant="ghost" asChild className="text-zacon-graphite hover:text-zacon-corporate">
                    <Link href="/blog">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Voltar ao Blog
                    </Link>
                  </Button>
                </div>

                {/* Mobile TOC */}
                <MobileTableOfContents content={post.content} />

                {/* Mobile Share Buttons */}
                <div className="lg:hidden mb-6 p-4 bg-gray-50 rounded-lg">
                  <ShareButtons title={post.title} variant="compact" />
                </div>

                {/* Article Content */}
                <article className="prose-article">
                  <MarkdownRenderer content={post.content} />
                </article>

                {/* Author Bio Card */}
                {post.authorBio && (
                  <AuthorCard
                    name={post.author}
                    role={post.authorRole}
                    bio={post.authorBio}
                    slug={post.authorSlug}
                    credentials={post.authorRole?.includes("CRC") ? ["CRC/SC"] : []}
                  />
                )}

                {/* Share Section (Mobile) */}
                <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                  <ShareButtons title={post.title} />
                </div>

                {/* Related Services */}
                {post.relatedServices && post.relatedServices.length > 0 && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-zacon-corporate/5 to-zacon-accent/5 rounded-xl border border-zacon-corporate/10">
                    <h3 className="font-semibold text-zacon-navy mb-4">
                      Serviços relacionados a este tema
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {post.relatedServices.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-zacon-light hover:border-zacon-corporate hover:bg-zacon-corporate/5 text-sm font-medium text-zacon-graphite hover:text-zacon-corporate transition-all"
                        >
                          {service.title}
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </AnimatedSection>

              {/* Main CTA */}
              <AnimatedSection delay={200}>
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

              {/* Related Posts */}
              <RelatedPosts posts={relatedPosts} />

              {/* Article Navigation */}
              <ArticleNavigation previous={previous} next={next} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
