import Link from "next/link";
import {
  Check,
  Phone,
  MessageCircle,
  Building2,
  User,
  Users,
  Briefcase,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { Button } from "../_components/ui/button";
import { AnimatedSection } from "../_components/AnimatedSection";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Preços de Contabilidade em Florianópolis | Tabela de Honorários",
  description:
    "Tabela de preços de serviços contábeis em Florianópolis. MEI a partir de R$ 99/mês, ME de R$ 300/mês, Lucro Presumido de R$ 800/mês. Orçamento personalizado.",
  keywords: [
    "preços contabilidade florianópolis",
    "quanto custa contador",
    "honorários contábeis",
    "tabela preços contabilidade",
    "valor contabilidade MEI",
  ],
  pathname: "/precos",
});

const WHATSAPP_NUMBER = "48988744359";

// [FORNECER] Atualizar valores conforme política de preços atual
const pricingPlans = [
  {
    name: "MEI",
    description: "Para Microempreendedores Individuais",
    icon: User,
    price: "99",
    period: "/mês",
    highlight: false,
    features: [
      "Declaração anual DASN-SIMEI",
      "Emissão de guias DAS",
      "Controle de faturamento",
      "Orientação sobre limites",
      "Suporte por WhatsApp",
      "Transição para ME (quando necessário)",
    ],
    cta: "Contratar MEI",
    message: "Olá! Quero contratar o plano MEI.",
  },
  {
    name: "Simples Nacional",
    description: "Para Microempresas e EPPs",
    icon: Building2,
    price: "399",
    priceRange: "399 a 799",
    period: "/mês",
    highlight: true,
    popular: true,
    features: [
      "Contabilidade mensal completa",
      "Apuração de impostos (DAS)",
      "Folha de pagamento (até 3 func.)",
      "Obrigações acessórias",
      "Balanço e DRE",
      "Certidões negativas",
      "Suporte prioritário",
      "Reuniões mensais",
    ],
    cta: "Solicitar Orçamento",
    message: "Olá! Quero um orçamento para contabilidade Simples Nacional.",
  },
  {
    name: "Lucro Presumido",
    description: "Para empresas de médio porte",
    icon: Briefcase,
    price: "899",
    priceRange: "899 a 1.999",
    period: "/mês",
    highlight: false,
    features: [
      "Contabilidade mensal completa",
      "Apuração IRPJ, CSLL, PIS, COFINS",
      "Folha de pagamento (até 10 func.)",
      "SPED Fiscal e Contábil",
      "Relatórios gerenciais",
      "Planejamento tributário básico",
      "Contador dedicado",
      "Reuniões quinzenais",
    ],
    cta: "Solicitar Orçamento",
    message: "Olá! Quero um orçamento para contabilidade Lucro Presumido.",
  },
  {
    name: "Lucro Real",
    description: "Para grandes empresas",
    icon: Users,
    price: "Sob consulta",
    period: "",
    highlight: false,
    features: [
      "Contabilidade completa",
      "Apuração trimestral/anual",
      "Folha de pagamento ilimitada",
      "Todas as obrigações acessórias",
      "Planejamento tributário avançado",
      "Auditoria interna",
      "Equipe dedicada",
      "Atendimento presencial",
    ],
    cta: "Falar com Consultor",
    message: "Olá! Preciso de contabilidade para empresa Lucro Real.",
  },
];

const additionalServices = [
  {
    name: "Abertura de Empresa",
    price: "A partir de R$ 500",
    description: "MEI, MEe LTDA inclui taxas e honorários.",
  },
  {
    name: "Imposto de Renda PF",
    price: "A partir de R$ 150",
    description: "Valor varia conforme complexidade da declaração.",
  },
  {
    name: "Planejamento Tributário",
    price: "A partir de R$ 1.500",
    description: "Análise completa com simulações de cenários.",
  },
  {
    name: "BPO Financeiro",
    price: "A partir de R$ 800/mês",
    description: "Contas a pagar/receber, conciliação, relatórios.",
  },
  {
    name: "Departamento Pessoal",
    price: "R$ 50-80/funcionário",
    description: "Folha, eSocial, FGTS, férias, rescisões.",
  },

];

const faqs = [
  {
    question: "Os preços incluem todas as obrigações?",
    answer:
      "Sim. Os planos mensais incluem todas as obrigações fiscais e acessórias do regime. Serviços extraordinários como alterações contratuais, certidões especiais ou defesas fiscais são cobrados à parte.",
  },
  {
    question: "Posso trocar de plano depois?",
    answer:
      "Sim. Se sua empresa mudar de regime tributário ou crescer, ajustamos o plano. A transição é feita sem burocracia, aproveitando todo o histórico contábil.",
  },
  {
    question: "Existe fidelidade ou contrato mínimo?",
    answer:
      "Não trabalhamos com fidelidade. O contrato é mensal e pode ser cancelado a qualquer momento com aviso prévio de 30 dias.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Os honorários são pagos mensalmente via boleto ou PIX, com vencimento no dia 10. Aceitamos cartão de crédito com acréscimo da taxa.",
  },
];

export default function PrecosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Preços", url: "/precos" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-zacon-navy py-16 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-zacon-corporate/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-zacon-accent/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Preços Transparentes
              </h1>
              <p className="mt-6 text-lg text-zacon-silver-light">
                Honorários justos e sem surpresas. Escolha o plano ideal para
                sua empresa ou solicite um orçamento personalizado.
              </p>

              {/* Resposta direta AEO */}
              <div className="mt-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-left max-w-2xl mx-auto">
                <p className="text-lg text-white leading-relaxed">
                  <strong>Quanto custa um contador em Florianópolis?</strong>
                </p>
                <p className="mt-3 text-zacon-silver-light leading-relaxed">
                  MEI: a partir de <strong className="text-white">R$ 99/mês</strong>.
                  Simples Nacional: <strong className="text-white">R$ 399 a R$ 799/mês</strong>.
                  Lucro Presumido: <strong className="text-white">R$ 899 a R$ 1.999/mês</strong>.
                  Valores variam conforme faturamento e número de funcionários.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-24 bg-zacon-light-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pricingPlans.map((plan, index) => (
              <AnimatedSection key={plan.name} delay={index * 100}>
                <div
                  className={`relative rounded-2xl p-6 h-full flex flex-col ${
                    plan.highlight
                      ? "bg-zacon-navy text-white ring-2 ring-zacon-corporate"
                      : "bg-white"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex rounded-full bg-zacon-corporate px-4 py-1 text-xs font-semibold text-white">
                        Mais Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-4">
                    <plan.icon
                      className={`h-10 w-10 ${
                        plan.highlight ? "text-zacon-corporate-light" : "text-zacon-corporate"
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-xl font-bold ${
                      plan.highlight ? "text-white" : "text-zacon-navy"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`mt-1 text-sm ${
                      plan.highlight ? "text-zacon-silver-light" : "text-zacon-graphite-light"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mt-4 mb-6">
                    {plan.priceRange ? (
                      <div>
                        <span
                          className={`text-sm ${
                            plan.highlight ? "text-zacon-silver-light" : "text-zacon-graphite-light"
                          }`}
                        >
                          A partir de
                        </span>
                        <div className="flex items-baseline">
                          <span className="text-sm">R$</span>
                          <span
                            className={`text-4xl font-bold ${
                              plan.highlight ? "text-white" : "text-zacon-navy"
                            }`}
                          >
                            {plan.price}
                          </span>
                          <span
                            className={`ml-1 ${
                              plan.highlight ? "text-zacon-silver-light" : "text-zacon-graphite-light"
                            }`}
                          >
                            {plan.period}
                          </span>
                        </div>
                      </div>
                    ) : typeof plan.price === "string" && plan.price.includes("consulta") ? (
                      <span
                        className={`text-2xl font-bold ${
                          plan.highlight ? "text-white" : "text-zacon-navy"
                        }`}
                      >
                        {plan.price}
                      </span>
                    ) : (
                      <div className="flex items-baseline">
                        <span className="text-sm">R$</span>
                        <span
                          className={`text-4xl font-bold ${
                            plan.highlight ? "text-white" : "text-zacon-navy"
                          }`}
                        >
                          {plan.price}
                        </span>
                        <span
                          className={`ml-1 ${
                            plan.highlight ? "text-zacon-silver-light" : "text-zacon-graphite-light"
                          }`}
                        >
                          {plan.period}
                        </span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check
                          className={`mr-2 h-5 w-5 flex-shrink-0 ${
                            plan.highlight ? "text-zacon-corporate-light" : "text-zacon-corporate"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            plan.highlight ? "text-zacon-silver-light" : "text-zacon-graphite-light"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Button
                      className="w-full"
                      variant={plan.highlight ? "secondary" : "default"}
                      asChild
                    >
                      <a
                        href={getWhatsAppLink(WHATSAPP_NUMBER, plan.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        {plan.cta}
                      </a>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">
                Serviços Avulsos
              </h2>
              <p className="mt-4 text-lg text-zacon-graphite-light">
                Precisa de um serviço específico? Confira os valores de referência.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service, index) => (
              <AnimatedSection key={service.name} delay={index * 50}>
                <div className="rounded-xl border border-zacon-light bg-zacon-light-soft p-6">
                  <h3 className="font-bold text-zacon-navy">{service.name}</h3>
                  <p className="mt-2 text-xl font-semibold text-zacon-corporate">
                    {service.price}
                  </p>
                  <p className="mt-2 text-sm text-zacon-graphite-light">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <div className="mt-12 text-center">
              <p className="text-zacon-graphite-light mb-4">
                Valores de referência. Orçamento final depende da análise do caso.
              </p>
              <Button size="lg" asChild>
                <a
                  href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Gostaria de um orçamento personalizado.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Solicitar Orçamento Personalizado
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-zacon-light-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">
                Dúvidas sobre preços
              </h2>
            </div>
          </AnimatedSection>

          <div className="mx-auto max-w-3xl space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="flex items-start">
                    <HelpCircle className="mr-3 h-5 w-5 flex-shrink-0 text-zacon-corporate mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-zacon-navy">
                        {faq.question}
                      </h3>
                      <p className="mt-2 text-zacon-graphite-light">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
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
                Ainda tem dúvidas sobre valores?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zacon-silver-light">
                Entre em contato para um orçamento personalizado. Analisamos sua
                situação e apresentamos a melhor proposta.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="whatsapp" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Quero um orçamento para contabilidade.")}
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
