import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
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
      <section className="bg-gradient-to-br from-zacon-primary to-zacon-primary-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Blog ZACON Contabilidade
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
                Conteúdo relevante sobre contabilidade, tributação, abertura de
                empresas e gestão financeira para você e sua empresa.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={index * 100}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <Card className="h-full transition-all hover:border-zacon-primary hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-2 inline-flex rounded-full bg-zacon-primary/10 px-3 py-1 text-xs font-medium text-zacon-primary">
                        {post.category}
                      </div>
                      <CardTitle className="line-clamp-2 group-hover:text-zacon-primary-light">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3 text-gray-600">{post.excerpt}</p>
                      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          {new Date(post.date).toLocaleDateString("pt-BR")}
                        </div>
                        <div className="flex items-center">
                          <User className="mr-1 h-4 w-4" />
                          {post.author}
                        </div>
                      </div>
                      <div className="mt-4 flex items-center text-sm font-medium text-zacon-primary">
                        Ler artigo
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
