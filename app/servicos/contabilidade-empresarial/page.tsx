import Link from "next/link";
import {
  Calculator,
  CheckCircle,
  Phone,
  FileText,
  BarChart3,
  Shield,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "../../_components/ui/button";
import { AnimatedSection } from "../../_components/AnimatedSection";
import { BreadcrumbDark } from "../../_components/Breadcrumb";
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
  title: "Contabilidade Empresarial em Florianópolis",
  description:
    "Contabilidade empresarial em Florianópolis. Escrituração contábil, balanços e demonstrações financeiras para sua empresa.",
  keywords: [
    "contabilidade empresarial Florianópolis",
    "escritório de contabilidade",
    "balanço patrimonial",
    "demonstrações financeiras",
    "obrigações acessórias",
  ],
  pathname: "/servicos/contabilidade-empresarial",
});

const benefits = [
  {
    title: "Escrituração Completa",
    description: "Registro de todas as operações contábeis da sua empresa conforme normas vigentes.",
    icon: FileText,
  },
  {
    title: "Relatórios Gerenciais",
    description: "Informações precisas para tomada de decisões estratégicas.",
    icon: BarChart3,
  },
  {
    title: "Conformidade Fiscal",
    description: "Sua empresa sempre em dia com todas as obrigações fiscais e acessórias.",
    icon: Shield,
  },
  {
    title: "Entregas no Prazo",
    description: "Compromisso com prazos e qualidade em todas as entregas.",
    icon: Clock,
  },
];

const services = [
  "Escrituração contábil digital (ECD)",
  "Balanço patrimonial",
  "Demonstração de resultados (DRE)",
  "Demonstração de fluxo de caixa (DFC)",
  "Livros contábeis obrigatórios",
  "SPED Contábil",
  "EFD-Contribuições",
  "DCTF e DCTF-Web",
  "Certidões negativas",
  "Relatórios gerenciais personalizados",
];

const faqs = [
  {
    question: "Quanto custa a contabilidade empresarial mensal?",
    answer:
      "O valor varia conforme o porte e regime tributário da empresa. Em média, em Florianópolis: MEI a partir de R$ 99/mês, ME Simples Nacional de R$ 300 a R$ 800/mês, Lucro Presumido de R$ 800 a R$ 2.000/mês. Solicite um orçamento personalizado.",
  },
  {
    question: "O que está incluso no serviço de contabilidade?",
    answer:
      "Escrituração contábil completa, apuração de impostos, envio de obrigações acessórias (SPED, EFD, DCTF), emissão de guias, balanço patrimonial, DRE, relatórios gerenciais e atendimento para dúvidas. Tudo que sua empresa precisa para estar em dia.",
  },
  {
    question: "Com que frequência recebo relatórios?",
    answer:
      "Enviamos relatórios mensais com apuração de impostos e guias de pagamento. Balanço patrimonial e DRE são disponibilizados mensalmente ou trimestralmente, conforme sua preferência. Relatórios gerenciais sob demanda.",
  },
  {
    question: "Vocês atendem empresas de qual regime tributário?",
    answer:
      "Atendemos empresas de todos os regimes: Simples Nacional, Lucro Presumido e Lucro Real. Também fazemos a análise para determinar qual regime é mais vantajoso para sua empresa.",
  },
  {
    question: "Como funciona a transição de contador?",
    answer:
      "Solicitamos a documentação ao contador atual, fazemos a análise e conciliação dos dados, e assumimos a contabilidade no mês seguinte. Todo o processo é conduzido por nós, sem burocracia para você.",
  },
  {
    question: "Quais são os prazos das obrigações contábeis?",
    answer:
      "DCTF-Web: dia 15 do mês seguinte. EFD-Contribuições: dia 15 do 2º mês subsequente. SPED Contábil: último dia útil de maio. Cuidamos de todos os prazos para você não se preocupar.",
  },
];

const WHATSAPP_NUMBER = "48988744359";

export default function ContabilidadeEmpresarialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Serviços", url: "/servicos" },
              { name: "Contabilidade Empresarial", url: "/servicos/contabilidade-empresarial" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getServiceSchema({
              name: "Contabilidade Empresarial em Florianópolis",
              description: "Serviços completos de contabilidade empresarial para empresas de todos os portes.",
              url: "/servicos/contabilidade-empresarial",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema(faqs)),
        }}
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
                Contabilidade Empresarial em Florianópolis
              </h1>

              {/* Resposta direta AEO */}
              <div className="mt-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-left max-w-2xl mx-auto">
                <p className="text-lg text-white leading-relaxed">
                  <strong>O que é:</strong> Serviço completo de escrituração contábil, apuração de impostos, obrigações acessórias e relatórios gerenciais.
                </p>
                <p className="mt-3 text-lg text-zacon-silver-light leading-relaxed">
                  <strong>Para quem:</strong> Empresas de todos os portes e regimes tributários em Florianópolis.
                </p>
                <p className="mt-3 text-lg text-zacon-silver-light leading-relaxed">
                  <strong>Investimento:</strong> A partir de R$ 99/mês (MEI) a R$ 2.000+/mês (Lucro Presumido/Real).
                </p>
              </div>

              <div className="mt-8">
                <Button size="xl" variant="secondary" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Preciso de contabilidade para minha empresa.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar Orçamento
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

      {/* Services List */}
      <section className="bg-zacon-light-soft py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">O que está incluso?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zacon-graphite-light">
                Nosso serviço de contabilidade empresarial abrange todas as necessidades da sua empresa.
              </p>
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
                Perguntas frequentes
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
                Serviços relacionados
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
                  Análise para pagar menos impostos legalmente.
                </p>
                <span className="mt-4 inline-flex items-center text-sm text-zacon-corporate font-medium">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Link
                href="/servicos/departamento-pessoal"
                className="block rounded-xl border border-zacon-light bg-white p-6 hover:border-zacon-corporate hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-zacon-navy group-hover:text-zacon-corporate">
                  Departamento Pessoal
                </h3>
                <p className="mt-2 text-sm text-zacon-graphite-light">
                  Gestão completa de funcionários e folha de pagamento.
                </p>
                <span className="mt-4 inline-flex items-center text-sm text-zacon-corporate font-medium">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <Link
                href="/servicos/bpo-financeiro"
                className="block rounded-xl border border-zacon-light bg-white p-6 hover:border-zacon-corporate hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-zacon-navy group-hover:text-zacon-corporate">
                  BPO Financeiro
                </h3>
                <p className="mt-2 text-sm text-zacon-graphite-light">
                  Terceirização do financeiro da sua empresa.
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
                Precisa de Contabilidade para sua Empresa?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zacon-silver-light">
                Entre em contato e receba uma proposta personalizada para as necessidades do seu negócio.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="whatsapp" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Preciso de contabilidade empresarial.")}
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
