import Link from "next/link";
import {
  FileText,
  CheckCircle,
  Phone,
  Shield,
  Clock,
  TrendingUp,
  AlertCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "../../_components/ui/button";
import { AnimatedSection } from "../../_components/AnimatedSection";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getServiceSchema, getFAQSchema } from "@/lib/schema";
import { getWhatsAppLink } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../_components/ui/accordion";

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
    question: "Quem precisa declarar Imposto de Renda em 2026?",
    answer:
      "Precisa declarar quem: recebeu rendimentos tributáveis acima de R$ 30.639,90 em 2025; teve rendimentos isentos acima de R$ 200.000; possui bens acima de R$ 800.000; realizou operações na bolsa acima de R$ 40.000 ou teve ganho líquido; obteve receita bruta rural acima de R$ 153.199,50; ou é residente no Brasil e possui bens no exterior.",
  },
  {
    question: "Qual o prazo para entregar a declaração IRPF 2026?",
    answer:
      "O prazo vai de 17 de março a 30 de maio de 2026. Quem entrega nas primeiras semanas tem prioridade na restituição. Recomendamos enviar até meados de abril para evitar congestionamento no sistema da Receita Federal.",
  },
  {
    question: "Quanto custa fazer a declaração com contador?",
    answer:
      "Declaração simples (CLT, poucos bens): R$ 150 a R$ 250. Declaração completa (investimentos, imóveis, autônomo): R$ 250 a R$ 450. Declarações complexas (ganho de capital, exterior, múltiplas fontes): R$ 450 a R$ 800. Inclui análise de deduções para maximizar restituição.",
  },
  {
    question: "O que acontece se cair na malha fina?",
    answer:
      "Se sua declaração ficar retida, a Receita aguarda documentação comprobatória ou correção. Podemos analisar o motivo no e-CAC, retificar a declaração e regularizar a situação. Na maioria dos casos, resolve-se com retificação, sem precisar ir à Receita.",
  },
  {
    question: "Quais documentos preciso enviar para a declaração?",
    answer:
      "Informe de rendimentos do empregador, informe de bancos e corretoras, recibos médicos e de dentista, comprovantes de educação, escrituras de imóveis, documentos de veículos, informe de previdência privada, e a declaração do ano anterior.",
  },
  {
    question: "MEI precisa declarar Imposto de Renda Pessoa Física?",
    answer:
      "Sim, se atingir os critérios de obrigatoriedade como pessoa física. O lucro do MEI (faturamento - despesas) deve ser informado, sendo parcialmente isento conforme atividade (32% comércio, 16% transporte, 32% serviços). Ajudamos a calcular corretamente.",
  },
  {
    question: "Como declaro investimentos e criptomoedas?",
    answer:
      "Investimentos em renda fixa, ações, FIIs e criptomoedas precisam ser declarados na ficha de Bens e Direitos. Rendimentos são informados conforme tributação (renda fixa: Rendimentos Sujeitos à Tributação Exclusiva; dividendos: Isentos). Criptomoedas acima de R$ 5.000 são obrigatórias.",
  },
  {
    question: "Posso retificar uma declaração antiga?",
    answer:
      "Sim. É possível retificar declarações dos últimos 5 anos. Se houver imposto a pagar, incide multa e juros. Se aumentar restituição, você recebe a diferença corrigida pela Selic. Fazemos a análise e retificação de anos anteriores.",
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
              {/* Resposta direta AEO */}
              <div className="mt-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-left max-w-2xl mx-auto">
                <p className="text-lg text-white leading-relaxed">
                  <strong>O que é:</strong> Declaração de IRPF completa com análise de todas as deduções, maximização de restituição e defesa em caso de malha fina.
                </p>
                <p className="mt-3 text-lg text-zacon-silver-light leading-relaxed">
                  <strong>Prazo 2026:</strong> 17 de março a 30 de maio. Entregar cedo = restituição nos primeiros lotes.
                </p>
                <p className="mt-3 text-lg text-zacon-silver-light leading-relaxed">
                  <strong>Investimento:</strong> A partir de R$ 150 (simples) a R$ 800 (complexa).
                </p>
              </div>
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">
                Perguntas frequentes sobre IRPF
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-zacon-light-soft rounded-xl border border-zacon-light px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-zacon-navy hover:text-zacon-corporate">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-zacon-graphite-light">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Links internos */}
      <section className="py-16 lg:py-24 bg-zacon-light-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">
                Outros serviços
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-3">
            <AnimatedSection delay={100}>
              <Link
                href="/servicos/planejamento-tributario"
                className="block rounded-xl border border-zacon-light bg-white p-6 hover:border-zacon-corporate hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-zacon-navy group-hover:text-zacon-corporate">
                  Planejamento Tributário
                </h3>
                <p className="mt-2 text-sm text-zacon-graphite-light">
                  Pague menos impostos de forma legal.
                </p>
                <span className="mt-4 inline-flex items-center text-sm text-zacon-corporate font-medium">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Link
                href="/servicos/contabilidade-mei"
                className="block rounded-xl border border-zacon-light bg-white p-6 hover:border-zacon-corporate hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-zacon-navy group-hover:text-zacon-corporate">
                  Contabilidade MEI
                </h3>
                <p className="mt-2 text-sm text-zacon-graphite-light">
                  É MEI? Fazemos DASN-SIMEI e IRPF juntos.
                </p>
                <span className="mt-4 inline-flex items-center text-sm text-zacon-corporate font-medium">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <Link
                href="/servicos/regularizacao-empresarial"
                className="block rounded-xl border border-zacon-light bg-white p-6 hover:border-zacon-corporate hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-zacon-navy group-hover:text-zacon-corporate">
                  Regularização
                </h3>
                <p className="mt-2 text-sm text-zacon-graphite-light">
                  Pendências com a Receita? Resolvemos.
                </p>
                <span className="mt-4 inline-flex items-center text-sm text-zacon-corporate font-medium">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </AnimatedSection>
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
