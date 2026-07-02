import Link from "next/link";
import { TrendingUp, CheckCircle, Phone, Calculator, BarChart3, Shield, Target } from "lucide-react";
import { Button } from "../../_components/ui/button";
import { AnimatedSection } from "../../_components/AnimatedSection";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Planejamento Tributário em Florianópolis",
  description:
    "Planejamento tributário estratégico em Florianópolis. Reduza legalmente seus impostos com análise personalizada. Simples Nacional, Lucro Presumido e Lucro Real.",
  keywords: [
    "planejamento tributário Florianópolis",
    "redução de impostos",
    "consultoria tributária",
    "regime tributário",
    "elisão fiscal",
  ],
  pathname: "/servicos/planejamento-tributario",
});

const benefits = [
  {
    title: "Análise Completa",
    description: "Estudo detalhado da sua empresa para identificar oportunidades de economia.",
    icon: BarChart3,
  },
  {
    title: "Simulações de Cenários",
    description: "Comparativo entre regimes tributários para escolher o mais vantajoso.",
    icon: Calculator,
  },
  {
    title: "Economia Legal",
    description: "Redução de impostos dentro da lei, sem riscos para sua empresa.",
    icon: Shield,
  },
  {
    title: "Estratégia Personalizada",
    description: "Plano tributário feito sob medida para seu negócio.",
    icon: Target,
  },
];

const services = [
  "Análise do regime tributário atual",
  "Simulação Simples Nacional x Lucro Presumido x Lucro Real",
  "Identificação de créditos tributários",
  "Revisão de enquadramento fiscal",
  "Análise de benefícios fiscais estaduais e municipais",
  "Planejamento de distribuição de lucros",
  "Estruturação societária otimizada",
  "Acompanhamento de mudanças na legislação",
];

const WHATSAPP_NUMBER = "48988744359";

export default function PlanejamentoTributarioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Serviços", url: "/servicos" },
              { name: "Planejamento Tributário", url: "/servicos/planejamento-tributario" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getServiceSchema({
              name: "Planejamento Tributário em Florianópolis",
              description: "Estratégias legais para redução de impostos.",
              url: "/servicos/planejamento-tributario",
            })
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-zacon-primary to-zacon-primary-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full bg-zacon-secondary/20 px-4 py-2 text-sm text-zacon-secondary">
                <TrendingUp className="mr-2 h-4 w-4" />
                Serviço Especializado
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Planejamento Tributário em Florianópolis
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Pague menos impostos de forma legal. Análise estratégica para identificar
                o melhor regime tributário e oportunidades de economia para sua empresa.
              </p>
              <div className="mt-8">
                <Button size="xl" variant="secondary" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Quero fazer um planejamento tributário para minha empresa.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar Análise
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 100}>
                <div className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-zacon-primary/10 text-zacon-primary">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-zacon-primary">{benefit.title}</h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-primary sm:text-4xl">
                O que analisamos?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Um planejamento tributário completo para otimizar a carga fiscal da sua empresa.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="mx-auto mt-12 max-w-3xl">
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <div key={service} className="flex items-center rounded-lg bg-white p-4 shadow-sm">
                    <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-zacon-secondary" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-zacon-primary">
                Por que fazer planejamento tributário?
              </h2>
              <div className="mt-6 space-y-4 text-gray-600">
                <p>
                  O planejamento tributário é uma ferramenta estratégica que permite às empresas
                  reduzirem legalmente sua carga tributária, escolhendo o regime mais adequado
                  e aproveitando benefícios fiscais disponíveis.
                </p>
                <p>
                  Com mais de 15 anos de experiência, a ZACON realiza uma análise detalhada
                  do seu negócio para identificar oportunidades de economia que você pode
                  estar deixando passar.
                </p>
                <p>
                  Muitas empresas pagam mais impostos do que deveriam simplesmente por
                  estarem no regime tributário errado ou por desconhecerem benefícios
                  fiscais aos quais têm direito.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="rounded-2xl bg-zacon-primary p-8 text-white">
                <h3 className="text-xl font-semibold">Regimes Tributários</h3>
                <p className="mt-2 text-gray-300">
                  Analisamos qual é o mais vantajoso para sua empresa:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="rounded-lg bg-white/10 p-4">
                    <div className="font-semibold">Simples Nacional</div>
                    <div className="mt-1 text-sm text-gray-300">
                      Para empresas com faturamento até R$ 4,8 milhões/ano
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4">
                    <div className="font-semibold">Lucro Presumido</div>
                    <div className="mt-1 text-sm text-gray-300">
                      Para empresas com faturamento até R$ 78 milhões/ano
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4">
                    <div className="font-semibold">Lucro Real</div>
                    <div className="mt-1 text-sm text-gray-300">
                      Para empresas com alta margem de despesas dedutíveis
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zacon-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Quer Pagar Menos Impostos?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                Solicite uma análise tributária e descubra quanto sua empresa pode economizar.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="whatsapp" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Quero analisar os impostos da minha empresa.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar Análise
                  </a>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-zacon-primary"
                  asChild
                >
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
