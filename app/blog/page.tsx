import Link from "next/link";
import { ArrowRight, Calendar, User, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../_components/ui/card";
import { AnimatedSection } from "../_components/AnimatedSection";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";
import { getAllPosts } from "./data";

export const metadata = constructMetadata({
  title: "Blog",
  description:
    "Blog da ZACON Contabilidade. Artigos sobre contabilidade, abertura de empresas, MEI, planejamento tributário, imposto de renda e muito mais.",
  keywords: [
    "blog contabilidade",
    "artigos contábeis",
    "dicas MEI",
    "planejamento tributário",
    "abertura de empresas",
  ],
  pathname: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-zacon-navy py-20 lg:py-28">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-zacon-corporate/20 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 text-sm font-medium text-zacon-silver-light mb-8">
                <Sparkles className="h-4 w-4 text-zacon-accent-light" />
                Conteúdo especializado
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Blog ZACON Contabilidade
              </h1>
              <p className="mx-auto mt-6 text-lg text-zacon-silver-light leading-relaxed">
                Conteúdo relevante sobre contabilidade, tributação, abertura de
                empresas e gestão financeira para você e sua empresa.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={index * 100}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="mb-3 inline-flex rounded-full bg-zacon-corporate/10 px-3 py-1 text-xs font-semibold text-zacon-corporate">
                        {post.category}
                      </div>
                      <CardTitle className="line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3 text-zacon-graphite-light leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-sm text-zacon-silver">
                        <div className="flex items-center">
                          <Calendar className="mr-1.5 h-4 w-4" />
                          {new Date(post.date).toLocaleDateString("pt-BR")}
                        </div>
                        <div className="flex items-center">
                          <User className="mr-1.5 h-4 w-4" />
                          {post.author}
                        </div>
                      </div>
                      <div className="mt-6 flex items-center text-sm font-semibold text-zacon-corporate">
                        Ler artigo
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
