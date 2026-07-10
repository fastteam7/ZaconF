import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle,
  Phone,
  MessageCircle,
  ArrowRight,
  Award,
  Users,
  TrendingUp,
  Shield,
  HelpCircle,
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
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/schema";
import { getWhatsAppLink } from "@/lib/utils";
import { nichos, getNichoBySlug } from "@/lib/seo-local";

interface NichoPageProps {
  params: Promise<{ nicho: string }>;
}

// Permite renderização dinâmica para slugs não pré-gerados
export const dynamicParams = true;

export async function generateStaticParams() {
  return nichos.map((nicho) => ({
    nicho: nicho.slug,
  }));
}

export async function generateMetadata({ params }: NichoPageProps) {
  const resolvedParams = await params;
  const nicho = getNichoBySlug(resolvedParams.nicho);

  if (!nicho) {
    return constructMetadata({
      title: "Página não encontrada",
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `Contabilidade para ${nicho.nomePlural} | Contador Especializado em Florianópolis`,
    description: `Contabilidade especializada para ${nicho.nomePlural.toLowerCase()} em Florianópolis. ${nicho.beneficios[0]}. Planejamento tributário, abertura de empresa e consultoria personalizada.`,
    keywords: [
      `contabilidade para ${nicho.nome.toLowerCase()}`,
      `contador para ${nicho.nome.toLowerCase()}`,
      `${nicho.nome.toLowerCase()} pj`,
      `tributação ${nicho.nome.toLowerCase()}`,
      `contabilidade ${nicho.nome.toLowerCase()} florianópolis`,
    ],
    pathname: `/contabilidade-para-${nicho.slug}`,
  });
}

const WHATSAPP_NUMBER = "48988744359";

export default async function NichoPage({ params }: NichoPageProps) {
  const resolvedParams = await params;
  const nicho = getNichoBySlug(resolvedParams.nicho);

  if (!nicho) {
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
              { name: `Contabilidade para ${nicho.nomePlural}`, url: `/contabilidade-para-${nicho.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema(nicho.faqs)),
        }}
      />

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
                  { label: `Contabilidade para ${nicho.nomePlural}`, href: `/contabilidade-para-${nicho.slug}` },
                ]}
                className="text-zacon-silver-light mb-8"
              />
              <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.1] px-5 py-2.5 mb-8">
                <Award className="h-4 w-4 text-zacon-accent-light" />
                <span className="text-sm font-medium text-white/90">
                  Especialização em {nicho.nomePlural}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-white">Contabilidade para</span>{" "}
                <span className="text-gradient-silver">{nicho.nomePlural}</span>
              </h1>
              <p className="mt-8 text-lg sm:text-xl text-zacon-silver-light leading-relaxed max-w-2xl">
                {nicho.descricao}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="premium" asChild>
                  <a
                    href={getWhatsAppLink(
                      WHATSAPP_NUMBER,
                      `Olá! Sou ${nicho.nome.toLowerCase()} e preciso de contabilidade especializada.`
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
                    Solicitar Análise
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Benefícios */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-zacon-navy">
                Benefícios da Contabilidade Especializada para{" "}
                <span className="text-gradient">{nicho.nomePlural}</span>
              </h2>
              <p className="mt-4 text-lg text-zacon-graphite-light">
                Vantagens exclusivas de contar com um contador que entende seu segmento.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {nicho.beneficios.map((beneficio, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="h-full p-6 hover-lift">
                  <CardContent className="pt-4 text-center">
                    <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-zacon-corporate/10 flex items-center justify-center">
                      <TrendingUp className="h-7 w-7 text-zacon-corporate" />
                    </div>
                    <p className="font-medium text-zacon-navy">{beneficio}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 lg:py-32 bg-zacon-light-ultra">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-zacon-navy">
                  Serviços para {nicho.nomePlural}
                </h2>
                <p className="mt-6 text-lg text-zacon-graphite-light leading-relaxed">
                  Oferecemos um pacote completo de serviços pensados especificamente
                  para as necessidades de {nicho.nomePlural.toLowerCase()} em Florianópolis.
                </p>
                <ul className="mt-8 space-y-4">
                  {nicho.servicos.map((servico, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-zacon-corporate flex-shrink-0" />
                      <span className="text-zacon-graphite-light">{servico}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="/servicos">
                      Ver todos os serviços
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, label: "Profissionais Atendidos", value: "200+" },
                  { icon: TrendingUp, label: "Economia Média", value: "35%" },
                  { icon: Shield, label: "Anos de Experiência", value: "15+" },
                  { icon: Award, label: "Satisfação", value: "98%" },
                ].map((stat, index) => (
                  <Card key={index} className="p-6 text-center">
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

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-zacon-corporate/5 border border-zacon-corporate/10 px-4 py-2 mb-6">
                <HelpCircle className="h-4 w-4 text-zacon-corporate" />
                <span className="text-sm font-semibold text-zacon-corporate uppercase tracking-wider">
                  Dúvidas Frequentes
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-zacon-navy">
                Perguntas Frequentes sobre Contabilidade para {nicho.nomePlural}
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {nicho.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-zacon-light-ultra rounded-xl border-none px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-zacon-navy hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-zacon-graphite-light pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-zacon-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zacon-black via-zacon-navy to-zacon-corporate-deep" />
        <div className="absolute inset-0 dot-pattern-light opacity-15" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Pronto para otimizar sua{" "}
                <span className="text-gradient-silver">tributação?</span>
              </h2>
              <p className="mt-6 text-lg text-zacon-silver-light">
                Agende uma análise gratuita e descubra quanto você pode economizar
                com uma contabilidade especializada para {nicho.nomePlural.toLowerCase()}.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="xl" variant="premium" asChild>
                  <a
                    href={getWhatsAppLink(
                      WHATSAPP_NUMBER,
                      `Olá! Sou ${nicho.nome.toLowerCase()} e gostaria de uma análise tributária.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Solicitar Análise Gratuita
                  </a>
                </Button>
                <Button size="xl" variant="outline-light" asChild>
                  <Link href="/contato">Enviar Mensagem</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
