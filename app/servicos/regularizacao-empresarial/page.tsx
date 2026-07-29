import Link from "next/link";
import {
  FileCheck,
  CheckCircle,
  Phone,
  Shield,
  AlertCircle,
  FileText,
  Clock,
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
  title: "Regularização Empresarial em Florianópolis",
  description:
    "Regularização de empresas em Florianópolis. Pendências fiscais, trabalhistas, parcelamento de débitos, certidões negativas e atualização cadastral.",
  keywords: [
    "regularização empresarial Florianópolis",
    "regularizar empresa",
    "parcelamento débitos",
    "certidão negativa",
    "pendências fiscais",
  ],
  pathname: "/servicos/regularizacao-empresarial",
});

const benefits = [
  {
    title: "Diagnóstico Completo",
    description: "Levantamento de todas as pendências da sua empresa.",
    icon: AlertCircle,
  },
  {
    title: "Regularização Total",
    description: "Resolvemos pendências fiscais, trabalhistas e cadastrais.",
    icon: Shield,
  },
  {
    title: "Parcelamentos",
    description: "Negociação de parcelamentos com condições especiais.",
    icon: FileText,
  },
  {
    title: "Agilidade",
    description: "Processos rápidos para sua empresa voltar a operar normalmente.",
    icon: Clock,
  },
];

const services = [
  "Levantamento de pendências fiscais",
  "Regularização de débitos federais",
  "Regularização de débitos estaduais",
  "Regularização de débitos municipais",
  "Parcelamento REFIS e similares",
  "Atualização cadastral (CNPJ, IE, IM)",
  "Certidões negativas",
  "Regularização no eSocial",
  "Regularização de FGTS em atraso",
  "Baixa de empresas inativas",
];

const faqs = [
  {
    question: "Quanto custa regularizar uma empresa?",
    answer:
      "Depende da situação. Diagnóstico inicial: gratuito ou a partir de R$ 200. Regularização de débitos simples: R$ 500 a R$ 1.500. Parcelamento REFIS/Transação: R$ 1.000 a R$ 3.000. Baixa de empresa inativa: R$ 800 a R$ 2.000. Cada caso é único.",
  },
  {
    question: "Minha empresa está com CNPJ inapto. O que fazer?",
    answer:
      "CNPJ inapto significa que há obrigações acessórias não entregues. Identificamos quais declarações faltam (DCTF, EFD, GFIP, RAIS, DEFIS), fazemos a entrega retroativa e solicitamos a reativação. O prazo varia de 15 a 60 dias conforme a quantidade de pendências.",
  },
  {
    question: "O que é REFIS e como funciona?",
    answer:
      "REFIS são programas de parcelamento de débitos fiscais com condições especiais: desconto em multas e juros (até 100% em alguns casos) e prazo estendido (até 145 meses). Monitoramos os programas federais, estaduais e municipais e avisamos quando sua empresa pode se beneficiar.",
  },
  {
    question: "Posso negociar débitos tributários diretamente?",
    answer:
      "Sim. Além do REFIS, existem Transações Tributárias na PGFN com desconto de até 65% e prazo de até 120 meses. Para débitos estaduais e municipais, cada ente tem programas próprios. Analisamos qual modalidade é mais vantajosa para seu caso.",
  },
  {
    question: "O que acontece se eu não regularizar a empresa?",
    answer:
      "Consequências: CNPJ inaptidão (não pode emitir NF), exclusão do Simples Nacional, inscrição em dívida ativa, protesto, restrição de crédito, impossibilidade de certidões negativas, e responsabilização pessoal dos sócios em alguns casos.",
  },
  {
    question: "Como obter certidão negativa de débitos?",
    answer:
      "A CND (Certidão Negativa de Débitos) é emitida quando não há pendências. Se houver débitos, pode-se obter CPEND (Certidão Positiva com Efeitos de Negativa) mediante parcelamento. Fazemos o levantamento completo e indicamos o caminho mais rápido.",
  },
  {
    question: "Consigo parcelar dívidas de FGTS?",
    answer:
      "Sim. O FGTS em atraso pode ser parcelado em até 60 meses através do SEFIP/Conectividade Social. Multas podem ser parceladas na Caixa Econômica. Fazemos todo o processo de regularização junto à Caixa.",
  },
  {
    question: "Quanto tempo leva para regularizar uma empresa?",
    answer:
      "Casos simples (poucas pendências): 15 a 30 dias. Casos moderados (múltiplos débitos, parcelamentos): 30 a 60 dias. Casos complexos (execuções fiscais, dívida ativa): 60 a 120 dias. Damos o diagnóstico completo já na primeira análise.",
  },
];

const WHATSAPP_NUMBER = "48988744359";

export default function RegularizacaoEmpresarialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Serviços", url: "/servicos" },
              { name: "Regularização Empresarial", url: "/servicos/regularizacao-empresarial" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getServiceSchema({
              name: "Regularização Empresarial em Florianópolis",
              description: "Regularização de pendências fiscais e cadastrais.",
              url: "/servicos/regularizacao-empresarial",
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
                Regularização Empresarial em Florianópolis
              </h1>
              {/* Resposta direta AEO */}
              <div className="mt-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-left max-w-2xl mx-auto">
                <p className="text-lg text-white leading-relaxed">
                  <strong>O que é:</strong> Diagnóstico e resolução de pendências fiscais, trabalhistas e cadastrais: débitos tributários, CNPJ inapto, exclusão do Simples, parcelamentos.
                </p>
                <p className="mt-3 text-lg text-zacon-silver-light leading-relaxed">
                  <strong>Benefícios:</strong> Parcelamento com desconto de até 100% em multas via REFIS/Transação. CNPJ reativado em 15-60 dias.
                </p>
                <p className="mt-3 text-lg text-zacon-silver-light leading-relaxed">
                  <strong>Diagnóstico:</strong> Gratuito. Investimento a partir de R$ 500 conforme complexidade.
                </p>
              </div>
              <div className="mt-8">
                <Button size="xl" variant="secondary" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Preciso regularizar minha empresa.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar Diagnóstico
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
                O que resolvemos?
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
                  Mantenha sua empresa sempre em dia.
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
                  Regularização de FGTS e eSocial.
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
                  Evite novos problemas fiscais.
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
                Sua Empresa Precisa de Regularização?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zacon-silver-light">
                Solicite um diagnóstico gratuito e saiba exatamente o que precisa ser resolvido.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="whatsapp" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Quero regularizar minha empresa.")}
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
