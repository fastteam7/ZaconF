import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
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
            author: {
              "@type": "Organization",
              name: "ZACON Contabilidade",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-zacon-primary to-zacon-primary-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex rounded-full bg-zacon-secondary/20 px-4 py-1 text-sm text-zacon-secondary">
                {post.category}
              </div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <div className="mt-6 flex items-center justify-center gap-6 text-gray-300">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  {new Date(post.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  {post.author}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
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
            <article className="prose prose-lg prose-gray max-w-none prose-headings:text-zacon-primary prose-a:text-zacon-primary prose-strong:text-zacon-primary">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .split("\n")
                    .map((line) => {
                      if (line.startsWith("# ")) {
                        return `<h1>${line.slice(2)}</h1>`;
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
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={200}>
            <div className="mt-12 rounded-2xl bg-zacon-primary p-8 text-center">
              <h3 className="text-2xl font-bold text-white">
                Precisa de ajuda com sua contabilidade?
              </h3>
              <p className="mt-2 text-gray-300">
                A ZACON tem mais de 15 anos de experiência. Fale conosco!
              </p>
              <div className="mt-6">
                <Button variant="secondary" size="lg" asChild>
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
