import Link from "next/link";
import {
  Building2,
  Calculator,
  FileText,
  Users,
  TrendingUp,
  FileCheck,
  User,
  CreditCard,
  ClipboardList,
  Briefcase,
  AlertCircle,
  HeartPulse,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "../_components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../_components/ui/card";
import { AnimatedSection } from "../_components/AnimatedSection";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Serviços Contábeis",
  description:
    "Conheça todos os serviços contábeis da ZACON: abertura de empresas, contabilidade geral, departamento pessoal, imposto de renda, MEI, planejamento tributário, BPO financeiro e mais.",
  keywords: [
    "serviços contábeis",
    "abertura de empresas",
    "contabilidade empresarial",
    "departamento pessoal",
    "imposto de renda pessoa física",
    "MEI",
    "planejamento tributário",
    "BPO financeiro",
    "regularização empresarial",
  ],
  pathname: "/servicos",
});

const services = [
  {
    title: "Abertura, Alteração e Baixa de Empresas",
    description:
      "Serviço completo para constituição de empresas, alterações contratuais, encerramentos e regularizações. Cuidamos de toda a documentação e registro em órgãos competentes.",
    icon: Building2,
    href: "/servicos/abertura-de-empresas",
    features: [
      "Constituição de empresas (MEI, ME, LTDA, EIRELI)",
      "Alterações contratuais e societárias",
      "Encerramento de empresas",
      "Regularizações cadastrais",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Contabilidade Geral",
    description:
      "Escrituração contábil completa, demonstrações financeiras, balanços e análises gerenciais para tomada de decisões estratégicas.",
    icon: Calculator,
    href: "/servicos/contabilidade-empresarial",
    features: [
      "Escrituração contábil",
      "Demonstrações contábeis",
      "Balanços patrimoniais",
      "Análises e relatórios gerenciais",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    title: "Escrita Contábil e Fiscal",
    description:
      "Escrituração fiscal completa, apuração de tributos, emissão de guias e cumprimento de todas as obrigações acessórias.",
    icon: FileText,
    href: "/servicos/contabilidade-empresarial",
    features: [
      "Escrituração fiscal",
      "Apuração de tributos",
      "Emissão de guias de recolhimento",
      "Obrigações acessórias (SPED, EFD, etc.)",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Departamento Pessoal",
    description:
      "Gestão completa do departamento pessoal da sua empresa, desde admissões até rescisões, incluindo folha de pagamento e eSocial.",
    icon: Users,
    href: "/servicos/departamento-pessoal",
    features: [
      "Admissões e demissões",
      "Folha de pagamento mensal",
      "eSocial e FGTS Digital",
      "Rescisões e homologações",
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Contratos e Documentos Empresariais",
    description:
      "Elaboração e análise de contratos sociais, alterações societárias, atas de reuniões e toda documentação empresarial necessária.",
    icon: ClipboardList,
    href: "/servicos/abertura-de-empresas",
    features: [
      "Contratos sociais",
      "Alterações societárias",
      "Atas de reuniões",
      "Documentação empresarial",
    ],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    title: "Imposto de Renda Pessoa Física",
    description:
      "Declaração completa de imposto de renda pessoa física com segurança, incluindo regularizações, malha fina e retificações.",
    icon: FileCheck,
    href: "/servicos/imposto-de-renda",
    features: [
      "Declaração anual completa",
      "Regularização de pendências",
      "Resolução de malha fina",
      "Retificações e ajustes",
    ],
    color: "from-red-500 to-red-600",
  },
  {
    title: "MEI - Microempreendedor Individual",
    description:
      "Serviços especializados para MEI: abertura, regularização, declaração anual (DASN-SIMEI) e orientação para transição quando necessário.",
    icon: User,
    href: "/servicos/contabilidade-mei",
    features: [
      "Abertura de MEI",
      "Regularização cadastral",
      "Declaração anual DASN-SIMEI",
      "Baixa e transição para ME",
    ],
    color: "from-cyan-500 to-cyan-600",
  },
  {
    title: "Regularização de CPF e CNPJ",
    description:
      "Resolução de pendências fiscais e cadastrais, obtenção de certidões e regularização completa junto aos órgãos competentes.",
    icon: AlertCircle,
    href: "/servicos/regularizacao-empresarial",
    features: [
      "Resolução de pendências",
      "Obtenção de certidões",
      "Regularização cadastral",
      "Parcelamento de débitos",
    ],
    color: "from-amber-500 to-amber-600",
  },
  {
    title: "Planejamento Tributário",
    description:
      "Análise estratégica para identificação de oportunidades de economia fiscal de forma legal e segura.",
    icon: TrendingUp,
    href: "/servicos/planejamento-tributario",
    features: [
      "Análise de regime tributário",
      "Identificação de benefícios fiscais",
      "Simulações de cenários",
      "Estratégias de redução de impostos",
    ],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Consultoria para Área da Saúde",
    description:
      "Assessoria especializada para profissionais e empresas da área da saúde, com conhecimento das particularidades do setor.",
    icon: HeartPulse,
    href: "/servicos/planejamento-tributario",
    features: [
      "Clínicas e consultórios",
      "Profissionais liberais da saúde",
      "Laboratórios e hospitais",
      "Planejamento tributário específico",
    ],
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "BPO Financeiro",
    description:
      "Terceirização completa do setor financeiro da sua empresa, com gestão de contas, conciliação bancária e relatórios gerenciais.",
    icon: CreditCard,
    href: "/servicos/bpo-financeiro",
    features: [
      "Contas a pagar e receber",
      "Conciliação bancária",
      "Fluxo de caixa",
      "Relatórios financeiros",
    ],
    color: "from-teal-500 to-teal-600",
  },
  {
    title: "Assessoria para Crescimento Sustentável",
    description:
      "Consultoria estratégica focada no crescimento sustentável do seu negócio, com análises financeiras e planejamento de longo prazo.",
    icon: Briefcase,
    href: "/servicos/bpo-financeiro",
    features: [
      "Análise de viabilidade",
      "Planejamento financeiro",
      "Gestão de custos",
      "Estratégias de crescimento",
    ],
    color: "from-violet-500 to-violet-600",
  },
];

const WHATSAPP_NUMBER = "48988744359";

export default function ServicosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Serviços", url: "/servicos" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-zacon-primary to-zacon-primary-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Nossos Serviços Contábeis
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
                Soluções completas em contabilidade para empresas de todos os
                portes e pessoas físicas. Há mais de 15 anos oferecendo
                atendimento humanizado e resultados.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 50}>
                <Link href={service.href} className="group block h-full">
                  <Card className="h-full transition-all duration-300 hover:border-zacon-primary hover:shadow-xl">
                    <CardHeader>
                      <div
                        className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg`}
                      >
                        <service.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl leading-tight group-hover:text-zacon-primary-light transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start text-sm text-gray-500"
                          >
                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zacon-secondary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex items-center text-sm font-semibold text-zacon-primary">
                        Saiba mais
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-primary sm:text-4xl">
                Por Que Escolher a ZACON?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Mais do que serviços contábeis, oferecemos uma parceria
                verdadeira para o crescimento do seu negócio.
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <AnimatedSection delay={100}>
              <div className="rounded-2xl bg-white p-8 shadow-sm text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-zacon-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-zacon-primary" />
                </div>
                <h3 className="text-xl font-bold text-zacon-primary">
                  Atendimento Humanizado
                </h3>
                <p className="mt-3 text-gray-600">
                  Cada cliente é tratado de forma única, com acompanhamento
                  próximo e soluções personalizadas.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="rounded-2xl bg-white p-8 shadow-sm text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-zacon-secondary/10 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-zacon-secondary" />
                </div>
                <h3 className="text-xl font-bold text-zacon-primary">
                  Foco em Resultados
                </h3>
                <p className="mt-3 text-gray-600">
                  Trabalhamos para gerar valor real ao seu negócio, com
                  estratégias que otimizam seus recursos.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="rounded-2xl bg-white p-8 shadow-sm text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-zacon-primary/10 flex items-center justify-center">
                  <FileCheck className="h-8 w-8 text-zacon-primary" />
                </div>
                <h3 className="text-xl font-bold text-zacon-primary">
                  Experiência Comprovada
                </h3>
                <p className="mt-3 text-gray-600">
                  Mais de 15 anos de mercado construindo relações de confiança
                  com empresas e pessoas físicas.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-zacon-primary to-zacon-primary-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Precisa de Ajuda para Escolher?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                Nossa equipe está pronta para entender suas necessidades e
                indicar os melhores serviços para sua situação.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="whatsapp" asChild>
                  <a
                    href={getWhatsAppLink(
                      WHATSAPP_NUMBER,
                      "Olá! Gostaria de saber mais sobre os serviços da ZACON."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
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
