import Link from "next/link";
import { FileText, CheckCircle, Phone, Shield, Clock, TrendingUp, AlertCircle, Sparkles } from "lucide-react";
import { Button } from "../../_components/ui/button";
import { AnimatedSection } from "../../_components/AnimatedSection";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getServiceSchema, getFAQSchema } from "@/lib/schema";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Declaração de Imposto de Renda em Florianópolis",
  description:
    "Declaração de Imposto de Renda Pessoa Física em Florianópolis. Maximize sua restituição com segurança. Profissionais experientes, entregas no prazo.",
  keywords: [
    "imposto de renda Florianópolis",
    "declaração IRPF",
    "restituição imposto de renda",
    "contador imposto de renda",
    "IRPF Florianópolis",
  ],
  pathname: "/servicos/imposto-de-renda",
});

const benefits = [
  {
    title: "Maximizar Restituição",
    description: "Identificamos todas as deduções possíveis para aumentar sua restituição.",
    icon: TrendingUp,
  },
  {
    title: "Segurança Total",
    description: "Declaração feita por profissionais experientes, evitando malha fina.",
    icon: Shield,
  },
  {
    title: "Prazo Garantido",
    description: "Entrega dentro do prazo para você não pagar multa.",
    icon: Clock,
  },
  {
    title: "Regularização",
    description: "Resolvemos pendências de anos anteriores junto à Receita Federal.",
    icon: AlertCircle,
  },
];

const services = [
  "Declaração de Imposto de Renda Pessoa Física (IRPF)",
  "Análise de todas as deduções permitidas",
  "Declaração de bens e direitos",
  "Declaração de rendimentos de aluguel",
  "Declaração de investimentos e aplicações",
  "Ganho de capital (venda de imóveis, ações)",
  "Regularização de declarações anteriores",
  "Acompanhamento de restituição",
  "Defesa em caso de malha fina",
];

const faqs = [
  {
    question: "Quem precisa declarar Imposto de Renda?",
    answer:
      "Precisa declarar quem recebeu rendimentos tributáveis acima do limite estabelecido pela Receita Federal, teve rendimentos isentos acima de R$ 40.000, possui bens acima de R$ 300.000, realizou operações na bolsa, entre outros critérios.",
  },
  {
    question: "Qual o prazo para entregar a declaração?",
    answer:
      "O prazo geralmente vai de março a maio de cada ano. A data exata é divulgada pela Receita Federal no início do ano. Entregar antes aumenta as chances de receber a restituição nos primeiros lotes.",
  },
  {
    question: "O que acontece se cair na malha fina?",
    answer:
      "Se sua declaração ficar retida, podemos analisar o motivo e fazer a correção necessária. Na maioria dos casos, basta retificar a declaração com as informações corretas.",
  },
];

const WHATSAPP_NUMBER = "48988744359";

export default function ImpostoRendaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Serviços", url: "/servicos" },
              { name: "Imposto de Renda", url: "/servicos/imposto-de-renda" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getServiceSchema({
              name: "Declaração de Imposto de Renda em Florianópolis",
              description: "Declaração de IRPF com segurança e maximização de restituição.",
              url: "/servicos/imposto-de-renda",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-zacon-navy py-16 lg:py-24">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        {/* Decorative blur elements */}
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-zacon-corporate/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-zacon-accent/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full border border-zacon-corporate/30 bg-zacon-corporate/10 px-4 py-2 text-sm text-zacon-corporate-light">
                <Sparkles className="mr-2 h-4 w-4" />
                Serviço Especializado
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Imposto de Renda em Florianópolis
              </h1>
              <p className="mt-6 text-lg text-zacon-silver-light">
                Declaração de Imposto de Renda Pessoa Física com segurança e tranquilidade.
                Maximize sua restituição com quem tem mais de 15 anos de experiência.
              </p>
              <div className="mt-8">
                <Button size="xl" variant="secondary" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Preciso fazer minha declaração de Imposto de Renda.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Agendar Declaração
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
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-zacon-navy/10 text-zacon-navy">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-zacon-navy">{benefit.title}</h3>
                  <p className="mt-2 text-zacon-graphite-light">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-zacon-light-soft py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">
                O que está incluso?
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="mx-auto mt-12 max-w-3xl">
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <div key={service} className="flex items-center rounded-lg bg-white p-4 shadow-sm">
                    <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-zacon-corporate" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">
                Dúvidas Frequentes
              </h2>
            </div>
          </AnimatedSection>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="rounded-xl bg-zacon-light-soft p-6">
                  <h3 className="font-semibold text-zacon-navy">{faq.question}</h3>
                  <p className="mt-2 text-zacon-graphite-light">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zacon-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Precisa Declarar seu Imposto de Renda?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zacon-silver-light">
                Entre em contato e agende sua declaração. Atendimento presencial ou online.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="whatsapp" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Quero agendar minha declaração de IR.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Agendar pelo WhatsApp
                  </a>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-zacon-navy"
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
