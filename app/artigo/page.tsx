import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { AnimatedSection } from "../_components/AnimatedSection";
import { Button } from "../_components/ui/button";
import { constructMetadata, siteConfig } from "@/lib/seo";
import {
  getCMSPosts,
  getCMSCategories,
  getCMSMediaUrl,
  isCMSConfigured,
} from "@/lib/cms";

export const metadata: Metadata = constructMetadata({
  title: "Artigos | Blog",
  description:
    "Artigos sobre contabilidade, impostos, abertura de empresas e dicas para empreendedores em Florianópolis.",
  pathname: "/artigo",
});

// Revalidar a cada 5 minutos
export const revalidate = 300;

export default async function ArtigosPage() {
  if (!isCMSConfigured()) {
    return (
      <section className="py-16 lg:py-24 bg-gray-50 min-h-[60vh]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            CMS não configurado
          </h1>
          <p className="mt-4 text-gray-600">
            Configure as variáveis de ambiente CMS_API_URL e CMS_API_KEY para
            visualizar os artigos.
          </p>
          <Button asChild className="mt-8">
            <Link href="/blog">Ver blog local</Link>
          </Button>
        </div>
      </section>
    );
  }

  const [{ posts, meta }, { categories }] = await Promise.all([
    getCMSPosts({ per_page: 12 }),
    getCMSCategories(),
  ]);

  if (posts.length === 0) {
    return (
      <section className="py-16 lg:py-24 bg-gray-50 min-h-[60vh]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Nenhum artigo encontrado
          </h1>
          <p className="mt-4 text-gray-600">
            Em breve publicaremos novos conteúdos. Enquanto isso, confira nosso
            blog principal.
          </p>
          <Button asChild className="mt-8">
            <Link href="/blog">Ver blog</Link>
          </Button>
        </div>
      </section>
    );
  }

  // Separar post destacado
  const featuredPost = posts.find((p) => p.is_featured) || posts[0];
  const otherPosts = posts.filter((p) => p.id !== featuredPost.id);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-zacon-navy py-16 lg:py-24">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-zacon-corporate/20 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Artigos
              </h1>
              <p className="mt-6 text-lg text-zacon-silver-light">
                Conteúdos exclusivos sobre contabilidade, finanças e
                empreendedorismo para ajudar sua empresa a crescer.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="py-8 bg-gray-50 border-b">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/artigo"
                className="px-4 py-2 bg-zacon-corporate text-white rounded-full text-sm font-medium"
              >
                Todos
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/artigo/categoria/${category.slug}`}
                  className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors border"
                >
                  {category.name}
                  {category.post_count > 0 && (
                    <span className="ml-2 text-gray-400">
                      ({category.post_count})
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link href={`/artigo/${featuredPost.slug}`} className="group block">
              <article className="grid md:grid-cols-2 gap-8 items-center">
                {featuredPost.featured_image && (
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <Image
                      src={getCMSMediaUrl(featuredPost.featured_image)!}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                    {featuredPost.is_featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-zacon-corporate text-white text-sm font-medium rounded-full">
                        Destaque
                      </div>
                    )}
                  </div>
                )}
                <div>
                  {featuredPost.category && (
                    <span className="text-sm font-medium text-zacon-corporate">
                      {featuredPost.category.name}
                    </span>
                  )}
                  <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-zacon-corporate transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-gray-600 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    {featuredPost.author && (
                      <div className="flex items-center gap-2">
                        {featuredPost.author.avatar ? (
                          <Image
                            src={getCMSMediaUrl(featuredPost.author.avatar)!}
                            alt={featuredPost.author.name}
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                        ) : (
                          <User className="w-5 h-5" />
                        )}
                        <span>{featuredPost.author.name}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.published_at).toLocaleDateString(
                        "pt-BR",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.reading_time} min
                    </div>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-zacon-corporate font-medium group-hover:gap-3 transition-all">
                      Ler artigo <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Other Posts */}
      {otherPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 100}>
                  <Link href={`/artigo/${post.slug}`} className="group block">
                    <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                      {post.featured_image && (
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={getCMSMediaUrl(post.featured_image)!}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-6 flex-1 flex flex-col">
                        {post.category && (
                          <span className="text-xs font-medium text-zacon-corporate uppercase tracking-wide">
                            {post.category.name}
                          </span>
                        )}
                        <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-zacon-corporate transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-gray-600 text-sm line-clamp-2 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 pt-4 border-t flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.published_at).toLocaleDateString(
                              "pt-BR",
                              {
                                day: "2-digit",
                                month: "short",
                              }
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.reading_time} min
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

            {/* Pagination */}
            {meta.pages_count > 1 && (
              <div className="mt-12 flex justify-center gap-2">
                {Array.from({ length: meta.pages_count }, (_, i) => (
                  <Link
                    key={i + 1}
                    href={`/artigo?page=${i + 1}`}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      meta.page === i + 1
                        ? "bg-zacon-corporate text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {i + 1}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl bg-gradient-to-br from-zacon-navy to-zacon-corporate p-8 lg:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Quer receber novos artigos?
              </h2>
              <p className="mt-4 text-zacon-silver-light">
                Entre em contato conosco e fique por dentro das novidades do
                mundo contábil.
              </p>
              <Button variant="premium" size="lg" asChild className="mt-8">
                <Link href="/contato">Falar com a ZACON</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
