import Link from "next/link";
import {
  PiggyBank,
  CheckCircle,
  Phone,
  BarChart3,
  Shield,
  TrendingUp,
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
  title: "BPO Financeiro em Florianópolis",
  description:
    "Terceirização financeira (BPO) em Florianópolis. Contas a pagar e receber, conciliação bancária, fluxo de caixa e relatórios. Foque no seu negócio.",
  keywords: [
    "BPO financeiro Florianópolis",
    "terceirização financeira",
    "contas a pagar",
    "contas a receber",
    "fluxo de caixa",
  ],
  pathname: "/servicos/bpo-financeiro",
});

const benefits = [
  {
    title: "Controle Total",
    description: "Visão completa das finanças da sua empresa em tempo real.",
    icon: BarChart3,
  },
  {
    title: "Redução de Custos",
    description: "Economize com estrutura e pessoal de setor financeiro.",
    icon: PiggyBank,
  },
  {
    title: "Segurança",
    description: "Processos padronizados e conferências constantes.",
    icon: Shield,
  },
  {
    title: "Foco no Negócio",
    description: "Dedique seu tempo ao que realmente importa: crescer.",
    icon: TrendingUp,
  },
];

const services = [
  "Contas a pagar",
  "Contas a receber",
  "Conciliação bancária diária",
  "Fluxo de caixa",
  "Relatórios financeiros mensais",
  "Controle de inadimplência",
  "Emissão de boletos e cobranças",
  "Gestão de contratos recorrentes",
  "DRE gerencial mensal",
];

const faqs = [
  {
    question: "Quanto custa o BPO Financeiro?",
    answer:
      "O valor varia conforme o volume de transações e complexidade. Para empresas pequenas (até 100 lançamentos/mês): R$ 800 a R$ 1.500/mês. Empresas médias (100-500 lançamentos): R$ 1.500 a R$ 3.500/mês. Inclui contas a pagar/receber, conciliação e relatórios.",
  },
  {
    question: "O que é BPO Financeiro e como funciona?",
    answer:
      "BPO (Business Process Outsourcing) Financeiro é a terceirização das rotinas financeiras para uma equipe especializada externa. Você mantém total controle através de relatórios e dashboards, enquanto nós executamos pagamentos, cobranças, conciliações e gestão do fluxo de caixa.",
  },
  {
    question: "Vocês têm acesso à conta bancária da empresa?",
    answer:
      "Trabalhamos com perfil de operador com limites definidos ou apenas com visualização, conforme sua preferência. Pagamentos podem exigir sua aprovação final. A segurança e o controle são prioridade: você define os limites de alçada.",
  },
  {
    question: "Qual a diferença entre BPO Financeiro e contabilidade?",
    answer:
      "Contabilidade cuida da escrituração contábil, impostos e obrigações fiscais (olha para o passado). BPO Financeiro cuida da operação financeira do dia a dia: pagar fornecedores, cobrar clientes, controlar caixa e projetar cenários (olha para presente e futuro).",
  },
  {
    question: "Em quanto tempo vocês assumem o financeiro?",
    answer:
      "A transição leva de 15 a 30 dias. Inclui mapeamento dos processos atuais, integração com sistemas, treinamento sobre particularidades do negócio e estabilização das rotinas. Após esse período, operamos de forma autônoma.",
  },
  {
    question: "Posso contratar apenas parte do serviço?",
    answer:
      "Sim. Oferecemos módulos separados: apenas contas a pagar, apenas contas a receber, apenas conciliação bancária, ou combinações. Você contrata conforme sua necessidade e pode ampliar depois.",
  },
  {
    question: "Como acompanho o trabalho de vocês?",
    answer:
      "Você recebe relatórios semanais de fluxo de caixa, posição de contas a pagar/receber e inadimplência. Mensalmente, entregamos DRE gerencial, análise de variações e projeções. Acesso a dashboard online em tempo real também disponível.",
  },
  {
    question: "Vocês atendem empresas de qual porte?",
    answer:
      "Atendemos desde startups e pequenas empresas até médias empresas. Para empresas muito grandes (acima de 2.000 transações/mês), avaliamos caso a caso e podemos alocar equipe dedicada.",
  },
];

const WHATSAPP_NUMBER = "48988744359";

export default function BPOFinanceiroPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Serviços", url: "/servicos" },
              { name: "BPO Financeiro", url: "/servicos/bpo-financeiro" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getServiceSchema({
              name: "BPO Financeiro em Florianópolis",
              description: "Terceirização completa do setor financeiro.",
              url: "/servicos/bpo-financeiro",
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
                BPO Financeiro em Florianópolis
              </h1>
              {/* Resposta direta AEO */}
              <div className="mt-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-left max-w-2xl mx-auto">
                <p className="text-lg text-white leading-relaxed">
                  <strong>O que é:</strong> Terceirização completa das rotinas financeiras: contas a pagar/receber, conciliação bancária, fluxo de caixa e relatórios gerenciais.
                </p>
                <p className="mt-3 text-lg text-zacon-silver-light leading-relaxed">
                  <strong>Para quem:</strong> Empresas que querem profissionalizar o financeiro sem aumentar custos fixos com equipe interna.
                </p>
                <p className="mt-3 text-lg text-zacon-silver-light leading-relaxed">
                  <strong>Investimento:</strong> A partir de R$ 800/mês para empresas pequenas.
                </p>
              </div>
              <div className="mt-8">
                <Button size="xl" variant="secondary" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Quero saber mais sobre BPO Financeiro.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar Proposta
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

      {/* What is BPO */}
      <section className="bg-zacon-light-soft py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-zacon-navy">
                O que é BPO Financeiro?
              </h2>
              <div className="mt-6 space-y-4 text-zacon-graphite-light">
                <p>
                  <strong>BPO (Business Process Outsourcing)</strong> Financeiro é a
                  terceirização das rotinas do setor financeiro da sua empresa para
                  uma equipe especializada.
                </p>
                <p>
                  Ao invés de manter uma estrutura interna com funcionários, sistemas
                  e processos, você delega todas as atividades financeiras para a ZACON,
                  mantendo total controle através de relatórios e dashboards.
                </p>
                <p>
                  É a solução ideal para empresas que querem profissionalizar a gestão
                  financeira sem aumentar custos fixos, tendo acesso a uma equipe
                  experiente e processos consolidados.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-zacon-navy">
                  O que está incluso?
                </h3>
                <div className="mt-6 space-y-3">
                  {services.map((service) => (
                    <div key={service} className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-zacon-corporate" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* For Who */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">
                Para quem é o BPO Financeiro?
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Empresas em crescimento",
                "Startups e scale-ups",
                "Empresas sem setor financeiro estruturado",
                "Empresas que querem reduzir custos",
                "Gestores que querem focar no core business",
                "Empresas que precisam de controle profissional",
              ].map((item) => (
                <div key={item} className="rounded-lg bg-zacon-light-soft p-6 text-center">
                  <CheckCircle className="mx-auto h-8 w-8 text-zacon-corporate" />
                  <p className="mt-3 font-medium text-gray-700">{item}</p>
                </div>
              ))}
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
                href="/servicos/contabilidade-empresarial"
                className="block rounded-xl border border-zacon-light bg-white p-6 hover:border-zacon-corporate hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-zacon-navy group-hover:text-zacon-corporate">
                  Contabilidade Empresarial
                </h3>
                <p className="mt-2 text-sm text-zacon-graphite-light">
                  Escrituração contábil e obrigações fiscais completas.
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
                  Folha de pagamento e gestão de funcionários.
                </p>
                <span className="mt-4 inline-flex items-center text-sm text-zacon-corporate font-medium">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={300}>
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zacon-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Quer Terceirizar seu Financeiro?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zacon-silver-light">
                Solicite uma proposta personalizada e descubra como o BPO Financeiro
                pode transformar a gestão da sua empresa.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="whatsapp" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Quero uma proposta de BPO Financeiro.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar Proposta
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
