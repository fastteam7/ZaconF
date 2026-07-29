import Link from "next/link";
import {
  User,
  CheckCircle,
  Phone,
  TrendingUp,
  FileText,
  Shield,
  HelpCircle,
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
    question: "Qual o limite de faturamento do MEI em 2026?",
    answer:
      "O limite anual de faturamento do MEI é de R$ 81.000,00 (oitenta e um mil reais), o que equivale a uma média de R$ 6.750,00 por mês. Há projetos de lei para aumentar para R$ 130.000, mas ainda não foram aprovados.",
  },
  {
    question: "O MEI precisa de contador?",
    answer:
      "Por lei, o MEI não é obrigado a ter contador. Porém, contar com orientação contábil evita erros, multas e garante que você aproveite todos os benefícios do regime. A maioria das dúvidas que recebemos são de MEIs que fizeram algo errado por falta de orientação.",
  },
  {
    question: "O que acontece se ultrapassar o limite do MEI?",
    answer:
      "Se ultrapassar o limite em até 20% (até R$ 97.200), você deverá pagar uma guia complementar de impostos e será desenquadrado para ME no ano seguinte. Se ultrapassar mais de 20%, o desenquadramento é retroativo ao início do ano, com impostos sobre todo o faturamento.",
  },
  {
    question: "Quanto custa a contabilidade para MEI?",
    answer:
      "Os serviços para MEI são acessíveis: declaração anual DASN-SIMEI de R$ 99 a R$ 150, acompanhamento mensal de R$ 99 a R$ 199/mês. A transição para ME, quando necessária, é cobrada à parte.",
  },
  {
    question: "Qual o prazo da declaração anual do MEI (DASN-SIMEI)?",
    answer:
      "O prazo vai até 31 de maio de cada ano, referente ao ano anterior. A multa por atraso é de no mínimo R$ 50 ou 2% por mês sobre o valor dos tributos. Fazemos a declaração em até 48 horas após receber as informações.",
  },
  {
    question: "MEI pode ter funcionário?",
    answer:
      "Sim, o MEI pode contratar 1 (um) funcionário que receba o salário mínimo ou o piso da categoria. É necessário cumprir todas as obrigações trabalhistas: eSocial, FGTS, férias, 13º. Nós cuidamos de toda a parte trabalhista.",
  },
  {
    question: "Como faço para migrar de MEI para ME?",
    answer:
      "Quando o faturamento ultrapassa o limite ou você precisa de um segundo funcionário, é necessário migrar para ME. Fazemos todo o processo: solicitação de desenquadramento, alteração na Junta Comercial, Receita Federal, e escolha do melhor regime tributário.",
  },
  {
    question: "MEI pode emitir nota fiscal?",
    answer:
      "Sim. MEI pode emitir NF-e (produtos) e NFS-e (serviços). Para venda a pessoa física não é obrigatório, mas para pessoa jurídica sim. Ajudamos na configuração do emissor de notas fiscais e no cadastro municipal.",
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
                Contabilidade para MEI em Florianópolis
              </h1>
              {/* Resposta direta AEO */}
              <div className="mt-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-left max-w-2xl mx-auto">
                <p className="text-lg text-white leading-relaxed">
                  <strong>O que é:</strong> Suporte contábil especializado para MEI: declaração anual, controle de faturamento, orientação sobre limites e migração para ME.
                </p>
                <p className="mt-3 text-lg text-zacon-silver-light leading-relaxed">
                  <strong>Limite MEI:</strong> R$ 81.000/ano (média de R$ 6.750/mês). Ultrapassou? Migramos para ME.
                </p>
                <p className="mt-3 text-lg text-zacon-silver-light leading-relaxed">
                  <strong>Investimento:</strong> Declaração anual a partir de R$ 99. Acompanhamento mensal a partir de R$ 99/mês.
                </p>
              </div>
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
                Serviços para MEI
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="mx-auto mt-12 max-w-2xl">
              <div className="grid gap-4">
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
                Perguntas frequentes sobre MEI
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
                Próximos passos para seu negócio
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-3">
            <AnimatedSection delay={100}>
              <Link
                href="/servicos/abertura-de-empresas"
                className="block rounded-xl border border-zacon-light bg-white p-6 hover:border-zacon-corporate hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-zacon-navy group-hover:text-zacon-corporate">
                  Abrir MEI
                </h3>
                <p className="mt-2 text-sm text-zacon-graphite-light">
                  Ainda não é MEI? Abrimos para você em até 24h.
                </p>
                <span className="mt-4 inline-flex items-center text-sm text-zacon-corporate font-medium">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Link
                href="/servicos/contabilidade-empresarial"
                className="block rounded-xl border border-zacon-light bg-white p-6 hover:border-zacon-corporate hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-zacon-navy group-hover:text-zacon-corporate">
                  Migrar para ME
                </h3>
                <p className="mt-2 text-sm text-zacon-graphite-light">
                  Ultrapassou o limite? Fazemos a transição completa.
                </p>
                <span className="mt-4 inline-flex items-center text-sm text-zacon-corporate font-medium">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <Link
                href="/servicos/imposto-de-renda"
                className="block rounded-xl border border-zacon-light bg-white p-6 hover:border-zacon-corporate hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-zacon-navy group-hover:text-zacon-corporate">
                  Imposto de Renda PF
                </h3>
                <p className="mt-2 text-sm text-zacon-graphite-light">
                  MEI também declara IRPF. Fazemos para você.
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
                É MEI e Precisa de Suporte?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zacon-silver-light">
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
