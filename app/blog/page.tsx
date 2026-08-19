import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../_components/ui/card";
import { AnimatedSection } from "../_components/AnimatedSection";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";
import { getAllPosts, type BlogPost } from "./data";
import { getCMSPosts, isCMSConfigured, getCMSMediaUrl, type CMSPost } from "@/lib/cms";

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

// Tipo unificado para posts
interface UnifiedPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image?: string | null;
  source: "cms" | "code";
  href: string;
}

// Converte post do CMS para formato unificado
function convertCMSPost(post: CMSPost): UnifiedPost {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category?.name || "Artigo",
    date: post.published_at,
    author: post.author?.name || "ZACON",
    image: getCMSMediaUrl(post.featured_image),
    source: "cms",
    href: `/artigo/${post.slug}`,
  };
}

// Converte post do código para formato unificado
function convertCodePost(post: BlogPost): UnifiedPost {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    date: post.date,
    author: post.author,
    image: post.image,
    source: "code",
    href: `/blog/${post.slug}`,
  };
}

export default async function BlogPage() {
  // Buscar posts do código (sempre disponíveis)
  const codePosts = getAllPosts().map(convertCodePost);

  // Buscar posts do CMS (se configurado)
  let cmsPosts: UnifiedPost[] = [];
  if (isCMSConfigured()) {
    try {
      const { posts } = await getCMSPosts({ per_page: 100 });
      cmsPosts = posts.map(convertCMSPost);
    } catch (error) {
      console.error("Erro ao buscar posts do CMS:", error);
    }
  }

  // Combinar: CMS primeiro, depois código
  // Ordenar cada grupo por data (mais recentes primeiro)
  const sortedCmsPosts = cmsPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const sortedCodePosts = codePosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const allPosts = [...sortedCmsPosts, ...sortedCodePosts];

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
          {/* Indicador de posts do CMS */}
          {cmsPosts.length > 0 && (
            <div className="mb-8 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-zacon-accent/10 px-4 py-2 text-sm font-medium text-zacon-corporate">
                <Sparkles className="h-4 w-4" />
                {cmsPosts.length} {cmsPosts.length === 1 ? "artigo novo" : "artigos novos"} do CMS
              </span>
            </div>
          )}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allPosts.map((post, index) => (
              <AnimatedSection key={`${post.source}-${post.slug}`} delay={index * 100}>
                <Link href={post.href} className="group block h-full">
                  <Card className="h-full overflow-hidden">
                    {/* Imagem do post (se existir) */}
                    {post.image && (
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {post.source === "cms" && (
                          <div className="absolute top-3 right-3 rounded-full bg-zacon-accent px-2 py-1 text-xs font-semibold text-white">
                            Novo
                          </div>
                        )}
                      </div>
                    )}
                    <CardHeader>
                      <div className="mb-3 flex items-center gap-2">
                        <span className="inline-flex rounded-full bg-zacon-corporate/10 px-3 py-1 text-xs font-semibold text-zacon-corporate">
                          {post.category}
                        </span>
                        {post.source === "cms" && !post.image && (
                          <span className="inline-flex rounded-full bg-zacon-accent/10 px-2 py-1 text-xs font-semibold text-zacon-accent">
                            Novo
                          </span>
                        )}
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
