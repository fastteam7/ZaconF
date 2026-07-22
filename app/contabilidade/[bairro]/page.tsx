import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  CheckCircle,
  Phone,
  MessageCircle,
  ArrowRight,
  Building2,
  Users,
  TrendingUp,
  Shield,
  Star,
  Clock,
  Award,
} from "lucide-react";
import { Button } from "../../_components/ui/button";
import { Card, CardContent } from "../../_components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../_components/ui/accordion";
import { AnimatedSection } from "../../_components/AnimatedSection";
import { Breadcrumb } from "../../_components/Breadcrumb";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getLocalPageSchema, getFAQSchema } from "@/lib/schema";
import { getWhatsAppLink } from "@/lib/utils";
import { bairros, getBairroBySlug } from "@/lib/seo-local";

interface BairroPageProps {
  params: Promise<{ bairro: string }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  return bairros.map((bairro) => ({
    bairro: bairro.slug,
  }));
}

export async function generateMetadata({ params }: BairroPageProps) {
  const resolvedParams = await params;
  const bairro = getBairroBySlug(resolvedParams.bairro);

  if (!bairro) {
    return constructMetadata({
      title: "Página não encontrada",
      noIndex: true,
    });
  }

  // Redirecionar Ingleses para a página dedicada
  if (bairro.slug === "ingleses") {
    return constructMetadata({
      title: "Contabilidade em Ingleses | ZACON",
      pathname: "/contabilidade-ingleses",
    });
  }

  return constructMetadata({
    title: `Contabilidade em ${bairro.nome} | Contador em ${bairro.nome} Florianópolis`,
    description: `Escritório de contabilidade em ${bairro.nome}, Florianópolis. ${bairro.descricao} Abertura de empresas, MEI, imposto de renda, departamento pessoal e planejamento tributário. Atendimento desde 2009.`,
    keywords: [
      `contabilidade ${bairro.nome.toLowerCase()}`,
      `contabilidade em ${bairro.nome.toLowerCase()}`,
      `contador ${bairro.nome.toLowerCase()}`,
      `contador em ${bairro.nome.toLowerCase()}`,
      `escritório contabilidade ${bairro.nome.toLowerCase()}`,
      `contabilidade ${bairro.nome.toLowerCase()} florianópolis`,
      `abrir empresa ${bairro.nome.toLowerCase()}`,
      `abrir empresa em ${bairro.nome.toLowerCase()}`,
      `contabilidade florianópolis ${bairro.nome.toLowerCase()}`,
      `mei ${bairro.nome.toLowerCase()}`,
    ],
    pathname: `/contabilidade/${bairro.slug}`,
  });
}

const WHATSAPP_NUMBER = "48988744359";

export default async function BairroPage({ params }: BairroPageProps) {
  const resolvedParams = await params;
  const bairro = getBairroBySlug(resolvedParams.bairro);

  if (!bairro) {
    notFound();
  }

  // Redirecionar Ingleses para a página dedicada (SEO otimizada)
  if (bairro.slug === "ingleses") {
    redirect("/contabilidade-ingleses");
  }

  // URL correta para este bairro
  const bairroUrl = `/contabilidade/${bairro.slug}`;

  return (
    <>
      {/* Schema: Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: `Contabilidade ${bairro.nome}`, url: bairroUrl },
            ])
          ),
        }}
      />

      {/* Schema: LocalPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getLocalPageSchema({
              name: `Contabilidade em ${bairro.nome} - ZACON`,
              description: bairro.descricao,
              url: bairroUrl,
              areaName: bairro.nome,
            })
          ),
        }}
      />

      {/* Schema: FAQ */}
      {bairro.faqs && bairro.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getFAQSchema(bairro.faqs)),
          }}
        />
      )}

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-zacon-black">
        <div className="absolute inset-0 bg-gradient-to-br from-zacon-black via-zacon-navy to-zacon-corporate-deep" />
        <div className="absolute inset-0 dot-pattern-light opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zacon-corporate/15 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-36">
          <AnimatedSection>
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: `Contabilidade ${bairro.nome}`, href: bairroUrl },
                ]}
                className="text-zacon-silver-light mb-8"
              />
              <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.1] px-5 py-2.5 mb-8">
                <MapPin className="h-4 w-4 text-zacon-accent-light" />
                <span className="text-sm font-medium text-white/90">
                  {bairro.nomeCompleto}, Florianópolis - SC
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-white">Contabilidade em</span>{" "}
                <span className="text-gradient-silver">{bairro.nome}</span>
              </h1>
              <p className="mt-8 text-lg sm:text-xl text-zacon-silver-light leading-relaxed max-w-2xl">
                {bairro.descricao}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="premium" asChild>
                  <a
                    href={getWhatsAppLink(
                      WHATSAPP_NUMBER,
                      `Olá! Preciso de contabilidade em ${bairro.nome}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="xl" variant="outline-light" asChild>
                  <Link href="/contato">
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar Contato
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Seção de Descrição Longa / Sobre o Bairro */}
      {bairro.descricaoLonga && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-zacon-navy mb-8">
                  Contabilidade em {bairro.nome}: Conheça Nossa Atuação
                </h2>
                <div className="prose prose-lg max-w-none text-zacon-graphite-light leading-relaxed">
                  <p>{bairro.descricaoLonga}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Características do Bairro */}
      <section className="py-20 lg:py-28 bg-zacon-light-ultra">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-zacon-navy">
                Por que {bairro.nome} precisa de uma{" "}
                <span className="text-gradient">contabilidade especializada?</span>
              </h2>
              <p className="mt-4 text-lg text-zacon-graphite-light">
                Conheça as características que fazem de {bairro.nome} um mercado único.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bairro.caracteristicas.map((caracteristica, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="h-full p-6 hover-lift">
                  <CardContent className="flex items-start gap-4 pt-2">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-zacon-corporate/10 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-zacon-corporate" />
                    </div>
                    <p className="text-zacon-graphite-light leading-relaxed">{caracteristica}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços para o Bairro */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-zacon-navy">
                Serviços de Contabilidade em {bairro.nome}
              </h2>
              <p className="mt-4 text-lg text-zacon-graphite-light">
                Soluções completas para empresas e profissionais da região.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {bairro.servicos.map((servico, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <Card className="h-full p-5 hover-lift text-center">
                  <CardContent className="pt-2">
                    <div className="mx-auto w-12 h-12 rounded-xl bg-zacon-corporate/10 flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-zacon-corporate" />
                    </div>
                    <span className="text-base font-medium text-zacon-navy">
                      {servico}
                    </span>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/servicos">
                  Ver todos os serviços
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 lg:py-28 bg-zacon-light-ultra">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-zacon-navy">
                  Por que escolher a ZACON para sua empresa em {bairro.nome}?
                </h2>
                <p className="mt-6 text-lg text-zacon-graphite-light leading-relaxed">
                  {bairro.slug === "ingleses"
                    ? "Nosso escritório está localizado em Ingleses, oferecendo atendimento presencial sem necessidade de deslocamento para outras regiões. Conhecemos profundamente o mercado local e suas particularidades."
                    : `Estamos localizados em Ingleses, região norte de Florianópolis, com fácil acesso para atender empresas de ${bairro.nome} e região. Nosso atendimento é personalizado e focado nas necessidades específicas de cada cliente.`
                  }
                </p>
                <ul className="mt-8 space-y-4">
                  {(bairro.diferenciais || [
                    "Mais de 15 anos de experiência",
                    "Atendimento presencial e online",
                    "Preços justos e transparentes",
                    "Equipe especializada e dedicada",
                  ]).map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-zacon-corporate flex-shrink-0" />
                      <span className="text-zacon-graphite-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Building2, label: "Empresas Atendidas", value: "500+" },
                  { icon: Clock, label: "Anos de Experiência", value: "15+" },
                  { icon: TrendingUp, label: "Economia Gerada", value: "R$ 2M+" },
                  { icon: Star, label: "Satisfação", value: "98%" },
                ].map((stat, index) => (
                  <Card key={index} className="p-6 text-center hover-lift">
                    <stat.icon className="mx-auto h-8 w-8 text-zacon-corporate mb-3" />
                    <div className="text-3xl font-bold text-zacon-navy">{stat.value}</div>
                    <div className="text-sm text-zacon-graphite-muted">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {bairro.faqs && bairro.faqs.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 rounded-full bg-zacon-corporate/5 border border-zacon-corporate/10 px-4 py-2 mb-6">
                  <MessageCircle className="h-4 w-4 text-zacon-corporate" />
                  <span className="text-sm font-semibold text-zacon-corporate uppercase tracking-wider">
                    Dúvidas Frequentes
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-zacon-navy">
                  Perguntas sobre Contabilidade em {bairro.nome}
                </h2>
                <p className="mt-4 text-lg text-zacon-graphite-light">
                  Tire suas dúvidas sobre nossos serviços contábeis na região.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="mx-auto max-w-3xl">
                <div className="rounded-2xl border border-zacon-light/80 bg-white shadow-card p-2">
                  <Accordion type="single" collapsible className="w-full">
                    {bairro.faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="px-4 border-b border-zacon-light/50 last:border-0"
                      >
                        <AccordionTrigger className="text-left py-5 text-base font-semibold text-zacon-navy hover:text-zacon-corporate">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-zacon-graphite-light leading-relaxed pb-5">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-zacon-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zacon-black via-zacon-navy to-zacon-corporate-deep" />
        <div className="absolute inset-0 dot-pattern-light opacity-15" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Precisa de um contador em{" "}
                <span className="text-gradient-silver">{bairro.nome}?</span>
              </h2>
              <p className="mt-6 text-lg text-zacon-silver-light">
                Entre em contato agora e receba um atendimento personalizado
                para sua empresa ou situação profissional em {bairro.nome}.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="xl" variant="premium" asChild>
                  <a
                    href={getWhatsAppLink(
                      WHATSAPP_NUMBER,
                      `Olá! Estou em ${bairro.nome} e preciso de contabilidade.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button size="xl" variant="outline-light" asChild>
                  <Link href="/contato">Enviar Mensagem</Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-zacon-silver">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-zacon-accent-light" />
                  Dados protegidos
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-zacon-accent-light" />
                  +15 anos de mercado
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-zacon-accent-light" />
                  Resposta em 24h
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
