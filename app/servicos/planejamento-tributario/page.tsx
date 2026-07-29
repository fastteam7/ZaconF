import Link from "next/link";
import {
  TrendingUp,
  CheckCircle,
  Phone,
  Calculator,
  BarChart3,
  Shield,
  Target,
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

const faqs = [
  {
    question: "Quanto custa um planejamento tributário?",
    answer:
      "O investimento varia conforme a complexidade do negócio. Para empresas menores, a partir de R$ 1.500. Para empresas de médio porte, de R$ 3.000 a R$ 8.000. O retorno costuma ser de 3 a 10 vezes o valor investido em economia tributária anual.",
  },
  {
    question: "Qual a diferença entre Simples Nacional, Lucro Presumido e Lucro Real?",
    answer:
      "Simples Nacional: regime simplificado com alíquotas de 4% a 33%, para faturamento até R$ 4,8 milhões/ano. Lucro Presumido: base de cálculo presumida (8% a 32% do faturamento), para até R$ 78 milhões/ano. Lucro Real: tributos calculados sobre o lucro efetivo, obrigatório para grandes empresas ou com margem baixa.",
  },
  {
    question: "Quando devo trocar de regime tributário?",
    answer:
      "Avalie a troca quando: seu faturamento se aproxima do limite do regime atual, sua margem de lucro muda significativamente, você contrata ou demite muitos funcionários, ou quando despesas dedutíveis aumentam. O ideal é analisar anualmente, preferencialmente em outubro/novembro para o ano seguinte.",
  },
  {
    question: "O planejamento tributário é legal?",
    answer:
      "Sim, é 100% legal. O planejamento tributário (elisão fiscal) usa recursos previstos em lei para reduzir a carga tributária. Diferente da evasão fiscal (crime), que envolve fraude, omissão ou falsificação de informações.",
  },
  {
    question: "Quanto tempo leva para fazer um planejamento tributário?",
    answer:
      "Para empresas menores, de 5 a 10 dias úteis. Para empresas maiores com múltiplas atividades, de 15 a 30 dias. O prazo inclui coleta de dados, análise, simulações e entrega do relatório com recomendações.",
  },
  {
    question: "Quais documentos preciso enviar para análise?",
    answer:
      "Balancete dos últimos 12 meses, DRE, folha de pagamento, notas fiscais de compras e vendas, contratos vigentes, e certidões de regularidade fiscal. Se houver, também precisamos dos incentivos fiscais já utilizados.",
  },
  {
    question: "Empresa do Simples pode fazer planejamento tributário?",
    answer:
      "Sim. Muitas empresas no Simples Nacional pagam mais imposto do que deveriam. Analisamos se o Lucro Presumido seria mais vantajoso, especialmente para prestadores de serviços com poucos funcionários ou empresas com margens altas.",
  },
  {
    question: "Vocês implementam as mudanças após o planejamento?",
    answer:
      "Sim. Além do relatório com recomendações, fazemos toda a implementação: mudança de regime tributário, reenquadramento de atividades, solicitação de benefícios fiscais, e acompanhamento para garantir a economia projetada.",
  },
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
                Planejamento Tributário em Florianópolis
              </h1>
              {/* Resposta direta AEO */}
              <div className="mt-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-left max-w-2xl mx-auto">
                <p className="text-lg text-white leading-relaxed">
                  <strong>O que é:</strong> Análise estratégica completa para identificar o regime tributário mais vantajoso e oportunidades de economia fiscal.
                </p>
                <p className="mt-3 text-lg text-zacon-silver-light leading-relaxed">
                  <strong>Economia típica:</strong> Empresas economizam de 15% a 40% em impostos após o planejamento.
                </p>
                <p className="mt-3 text-lg text-zacon-silver-light leading-relaxed">
                  <strong>Investimento:</strong> A partir de R$ 1.500 (retorno médio de 3x a 10x em economia anual).
                </p>
              </div>
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
                O que analisamos?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zacon-graphite-light">
                Um planejamento tributário completo para otimizar a carga fiscal da sua empresa.
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

      {/* Info Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-zacon-navy">
                Por que fazer planejamento tributário?
              </h2>
              <div className="mt-6 space-y-4 text-zacon-graphite-light">
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
              <div className="rounded-2xl bg-zacon-navy p-8 text-white">
                <h3 className="text-xl font-semibold">Regimes Tributários</h3>
                <p className="mt-2 text-zacon-silver-light">
                  Analisamos qual é o mais vantajoso para sua empresa:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="rounded-lg bg-white/10 p-4">
                    <div className="font-semibold">Simples Nacional</div>
                    <div className="mt-1 text-sm text-zacon-silver-light">
                      Para empresas com faturamento até R$ 4,8 milhões/ano
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4">
                    <div className="font-semibold">Lucro Presumido</div>
                    <div className="mt-1 text-sm text-zacon-silver-light">
                      Para empresas com faturamento até R$ 78 milhões/ano
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4">
                    <div className="font-semibold">Lucro Real</div>
                    <div className="mt-1 text-sm text-zacon-silver-light">
                      Para empresas com alta margem de despesas dedutíveis
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
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
                href="/servicos/abertura-de-empresas"
                className="block rounded-xl border border-zacon-light bg-white p-6 hover:border-zacon-corporate hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-zacon-navy group-hover:text-zacon-corporate">
                  Abertura de Empresas
                </h3>
                <p className="mt-2 text-sm text-zacon-graphite-light">
                  Abra sua empresa já no regime tributário ideal.
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
                  Regularização Empresarial
                </h3>
                <p className="mt-2 text-sm text-zacon-graphite-light">
                  Resolva pendências fiscais e evite multas.
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
                Quer Pagar Menos Impostos?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zacon-silver-light">
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
