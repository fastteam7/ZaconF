import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "../../_components/ui/button";
import { AnimatedSection } from "../../_components/AnimatedSection";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";
import { getPostBySlug, getAllPosts } from "../data";

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
    keywords: [post.category, "contabilidade", "Florianópolis", "ZACON"],
    pathname: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: post.title, url: `/blog/${post.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.dateModified || post.date,
            author: {
              "@type": "Person",
              name: post.author,
              jobTitle: post.authorRole || "Contador",
              url: post.authorSlug ? `https://zacon.com.br/equipe/${post.authorSlug}` : undefined,
              worksFor: {
                "@type": "Organization",
                name: "ZACON Contabilidade",
              },
            },
            publisher: {
              "@type": "Organization",
              name: "ZACON Contabilidade",
              url: "https://zacon.com.br",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-zacon-navy py-16 lg:py-24">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-zacon-corporate/20 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 text-sm font-medium text-zacon-accent-light">
                {post.category}
              </div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                {post.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-zacon-silver-light text-sm sm:text-base">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span>
                    Publicado em{" "}
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
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                )}
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {post.authorSlug ? (
                    <Link
                      href={`/equipe/${post.authorSlug}`}
                      className="hover:text-white hover:underline transition-colors"
                    >
                      {post.author}
                      {post.authorRole && (
                        <span className="text-zacon-silver"> · {post.authorRole}</span>
                      )}
                    </Link>
                  ) : (
                    <span>
                      {post.author}
                      {post.authorRole && (
                        <span className="text-zacon-silver"> · {post.authorRole}</span>
                      )}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar ao Blog
                </Link>
              </Button>
            </div>
            <article className="prose prose-lg prose-gray max-w-none prose-headings:text-zacon-navy prose-a:text-zacon-corporate prose-strong:text-zacon-navy">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .split("\n")
                    .map((line) => {
                      // H1 do markdown vira H2 (o H1 único já está no Hero)
                      if (line.startsWith("# ")) {
                        return `<h2 class="text-3xl font-bold mt-8 mb-4">${line.slice(2)}</h2>`;
                      }
                      if (line.startsWith("## ")) {
                        return `<h2>${line.slice(3)}</h2>`;
                      }
                      if (line.startsWith("### ")) {
                        return `<h3>${line.slice(4)}</h3>`;
                      }
                      if (line.startsWith("- ")) {
                        return `<li>${line.slice(2)}</li>`;
                      }
                      if (line.trim() === "") {
                        return "<br />";
                      }
                      return `<p>${line}</p>`;
                    })
                    .join(""),
                }}
              />
            </article>

            {/* Author Bio Card */}
            {post.authorBio && (
              <div className="mt-12 p-6 bg-zacon-light-ultra rounded-xl border border-zacon-light">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zacon-corporate to-zacon-corporate-light flex items-center justify-center text-white text-xl font-bold">
                      {post.author.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zacon-navy">
                      {post.authorSlug ? (
                        <Link
                          href={`/equipe/${post.authorSlug}`}
                          className="hover:text-zacon-corporate transition-colors"
                        >
                          {post.author}
                        </Link>
                      ) : (
                        post.author
                      )}
                    </h4>
                    {post.authorRole && (
                      <p className="text-sm text-zacon-corporate mb-2">{post.authorRole}</p>
                    )}
                    <p className="text-sm text-zacon-graphite-muted">{post.authorBio}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Related Services */}
            {post.relatedServices && post.relatedServices.length > 0 && (
              <div className="mt-8 p-6 bg-gradient-to-r from-zacon-corporate/5 to-zacon-accent/5 rounded-xl border border-zacon-corporate/10">
                <h4 className="font-semibold text-zacon-navy mb-4">
                  Serviços relacionados a este tema
                </h4>
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

          {/* CTA */}
          <AnimatedSection delay={200}>
            <div className="mt-12 rounded-2xl bg-gradient-to-br from-zacon-navy to-zacon-corporate p-8 lg:p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <h3 className="relative text-2xl font-bold text-white">
                Precisa de ajuda com sua contabilidade?
              </h3>
              <p className="relative mt-3 text-zacon-silver-light">
                A ZACON tem mais de 15 anos de experiência. Fale conosco!
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
