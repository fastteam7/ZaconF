import Link from "next/link";
import { User, CheckCircle, Phone, TrendingUp, FileText, Shield, HelpCircle } from "lucide-react";
import { Button } from "../../_components/ui/button";
import { AnimatedSection } from "../../_components/AnimatedSection";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getServiceSchema, getFAQSchema } from "@/lib/schema";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Contabilidade para MEI em Florianópolis",
  description:
    "Contabilidade especializada para MEI em Florianópolis. Declaração anual DASN-SIMEI, controle de faturamento, orientação sobre limites e transição para ME.",
  keywords: [
    "contabilidade MEI Florianópolis",
    "contador MEI",
    "DASN-SIMEI",
    "microempreendedor individual",
    "MEI Florianópolis",
  ],
  pathname: "/servicos/contabilidade-mei",
});

const benefits = [
  {
    title: "Declaração Anual",
    description: "Fazemos sua DASN-SIMEI com segurança e dentro do prazo.",
    icon: FileText,
  },
  {
    title: "Controle de Faturamento",
    description: "Acompanhamento do seu faturamento para não ultrapassar limites.",
    icon: TrendingUp,
  },
  {
    title: "Orientação Completa",
    description: "Tiramos todas as suas dúvidas sobre obrigações do MEI.",
    icon: HelpCircle,
  },
  {
    title: "Transição Segura",
    description: "Quando crescer, migramos seu MEI para ME sem complicações.",
    icon: Shield,
  },
];

const services = [
  "Abertura de MEI",
  "Declaração Anual DASN-SIMEI",
  "Emissão de guias DAS",
  "Controle de faturamento mensal",
  "Orientação sobre limites (R$ 81.000/ano)",
  "Transição de MEI para ME",
  "Regularização de pendências",
  "Baixa de MEI",
];

const faqs = [
  {
    question: "Qual o limite de faturamento do MEI?",
    answer:
      "O limite anual de faturamento do MEI é de R$ 81.000,00 (oitenta e um mil reais), o que equivale a uma média de R$ 6.750,00 por mês.",
  },
  {
    question: "O MEI precisa de contador?",
    answer:
      "Por lei, o MEI não é obrigado a ter contador. Porém, contar com orientação contábil evita erros, multas e garante que você aproveite todos os benefícios do regime.",
  },
  {
    question: "O que acontece se ultrapassar o limite do MEI?",
    answer:
      "Se ultrapassar o limite em até 20%, você deverá pagar uma guia complementar e será desenquadrado para ME no ano seguinte. Se ultrapassar mais de 20%, o desenquadramento é retroativo.",
  },
];

const WHATSAPP_NUMBER = "48988744359";

export default function ContabilidadeMEIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Serviços", url: "/servicos" },
              { name: "Contabilidade MEI", url: "/servicos/contabilidade-mei" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getServiceSchema({
              name: "Contabilidade para MEI em Florianópolis",
              description: "Suporte especializado para Microempreendedores Individuais.",
              url: "/servicos/contabilidade-mei",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-zacon-primary to-zacon-primary-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full bg-zacon-secondary/20 px-4 py-2 text-sm text-zacon-secondary">
                <User className="mr-2 h-4 w-4" />
                Serviço Especializado
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Contabilidade para MEI em Florianópolis
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Suporte completo para Microempreendedores Individuais. Declaração anual,
                controle de faturamento e orientação especializada.
              </p>
              <div className="mt-8">
                <Button size="xl" variant="secondary" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Sou MEI e preciso de suporte contábil.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Falar com Contador
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
                Serviços para MEI
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="mx-auto mt-12 max-w-2xl">
              <div className="grid gap-4">
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

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-primary sm:text-4xl">
                Dúvidas sobre MEI
              </h2>
            </div>
          </AnimatedSection>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="rounded-xl bg-gray-50 p-6">
                  <h3 className="font-semibold text-zacon-primary">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zacon-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                É MEI e Precisa de Suporte?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                Conte com nossa experiência para manter seu MEI regularizado e crescer com segurança.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="whatsapp" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Sou MEI e preciso de ajuda.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Falar pelo WhatsApp
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
