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
  MessageCircle,
  Sparkles,
  CheckCircle,
  Award,
  Phone,
  Shield,
} from "lucide-react";
import { Button } from "../_components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../_components/ui/card";
import { AnimatedSection } from "../_components/AnimatedSection";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Serviços Contábeis | Soluções Completas",
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
      "Serviço completo para constituição de empresas, alterações contratuais, encerramentos e regularizações. Cuidamos de toda a documentação.",
    icon: Building2,
    href: "/servicos/abertura-de-empresas",
    features: [
      "Constituição de empresas (MEI, ME, LTDA, EIRELI)",
      "Alterações contratuais e societárias",
      "Encerramento de empresas",
      "Regularizações cadastrais",
    ],
    highlight: true,
  },
  {
    title: "Contabilidade Geral",
    description:
      "Escrituração contábil completa, demonstrações financeiras, balanços e análises gerenciais para tomada de decisões.",
    icon: Calculator,
    href: "/servicos/contabilidade-empresarial",
    features: [
      "Escrituração contábil",
      "Demonstrações contábeis",
      "Balanços patrimoniais",
      "Análises e relatórios gerenciais",
    ],
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
  },
  {
    title: "Departamento Pessoal",
    description:
      "Gestão completa do departamento pessoal, desde admissões até rescisões, incluindo folha de pagamento e eSocial.",
    icon: Users,
    href: "/servicos/departamento-pessoal",
    features: [
      "Admissões e demissões",
      "Folha de pagamento mensal",
      "eSocial e FGTS Digital",
      "Rescisões e homologações",
    ],
  },
  {
    title: "Contratos e Documentos Empresariais",
    description:
      "Elaboração e análise de contratos sociais, alterações societárias, atas de reuniões e documentação empresarial.",
    icon: ClipboardList,
    href: "/servicos/abertura-de-empresas",
    features: [
      "Contratos sociais",
      "Alterações societárias",
      "Atas de reuniões",
      "Documentação empresarial",
    ],
  },
  {
    title: "Imposto de Renda Pessoa Física",
    description:
      "Declaração completa de imposto de renda PF com segurança, incluindo regularizações, malha fina e retificações.",
    icon: FileCheck,
    href: "/servicos/imposto-de-renda",
    features: [
      "Declaração anual completa",
      "Regularização de pendências",
      "Resolução de malha fina",
      "Retificações e ajustes",
    ],
  },
  {
    title: "MEI - Microempreendedor Individual",
    description:
      "Serviços especializados para MEI: abertura, regularização, declaração anual e orientação para transição.",
    icon: User,
    href: "/servicos/contabilidade-mei",
    features: [
      "Abertura de MEI",
      "Regularização cadastral",
      "Declaração anual DASN-SIMEI",
      "Baixa e transição para ME",
    ],
  },
  {
    title: "Regularização de CPF e CNPJ",
    description:
      "Resolução de pendências fiscais e cadastrais, obtenção de certidões e regularização junto aos órgãos competentes.",
    icon: AlertCircle,
    href: "/servicos/regularizacao-empresarial",
    features: [
      "Resolução de pendências",
      "Obtenção de certidões",
      "Regularização cadastral",
      "Parcelamento de débitos",
    ],
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
    highlight: true,
  },
  {
    title: "Consultoria para Área da Saúde",
    description:
      "Assessoria especializada para profissionais e empresas da área da saúde, com conhecimento das particularidades.",
    icon: HeartPulse,
    href: "/servicos/planejamento-tributario",
    features: [
      "Clínicas e consultórios",
      "Profissionais liberais da saúde",
      "Laboratórios e hospitais",
      "Planejamento tributário específico",
    ],
  },
  {
    title: "BPO Financeiro",
    description:
      "Terceirização completa do setor financeiro, com gestão de contas, conciliação bancária e relatórios gerenciais.",
    icon: CreditCard,
    href: "/servicos/bpo-financeiro",
    features: [
      "Contas a pagar e receber",
      "Conciliação bancária",
      "Fluxo de caixa",
      "Relatórios financeiros",
    ],
  },
  {
    title: "Assessoria para Crescimento Sustentável",
    description:
      "Consultoria estratégica focada no crescimento sustentável, com análises financeiras e planejamento de longo prazo.",
    icon: Briefcase,
    href: "/servicos/bpo-financeiro",
    features: [
      "Análise de viabilidade",
      "Planejamento financeiro",
      "Gestão de custos",
      "Estratégias de crescimento",
    ],
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

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-zacon-black">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zacon-black via-zacon-navy to-zacon-corporate-deep" />
        <div className="absolute inset-0 dot-pattern-light opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zacon-corporate/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zacon-accent/10 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-36">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.1] px-5 py-2.5 mb-8">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-zacon-accent/20">
                  <Briefcase className="h-3.5 w-3.5 text-zacon-accent-light" />
                </div>
                <span className="text-sm font-medium text-white/90 tracking-wide">
                  Soluções completas para seu negócio
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-white">Nossos Serviços</span>{" "}
                <span className="text-gradient-silver">Contábeis</span>
              </h1>
              <p className="mx-auto mt-8 text-lg sm:text-xl text-zacon-silver-light leading-relaxed max-w-2xl">
                Soluções completas em contabilidade para empresas de todos os
                portes e pessoas físicas. Há mais de 15 anos oferecendo
                atendimento humanizado e resultados.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 50}>
                <Link href={service.href} className="group block h-full">
                  <Card className="h-full relative">
                    {service.highlight && (
                      <div className="absolute -top-3 right-6">
                        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-zacon-corporate to-zacon-accent px-3 py-1 text-xs font-semibold text-white shadow-glow-sm">
                          Destaque
                        </span>
                      </div>
                    )}
                    <CardHeader className="pt-8">
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-zacon-corporate/10 to-zacon-accent/5 text-zacon-corporate transition-all duration-500 group-hover:from-zacon-corporate group-hover:to-zacon-corporate-light group-hover:text-white group-hover:scale-110 group-hover:shadow-glow-sm">
                        <service.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl leading-tight">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zacon-graphite-light text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="mt-5 space-y-2.5">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start text-sm text-zacon-graphite-light"
                          >
                            <CheckCircle className="mr-2.5 mt-0.5 h-4 w-4 flex-shrink-0 text-zacon-corporate" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex items-center text-sm font-semibold text-zacon-corporate">
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
      <section className="bg-zacon-light-ultra py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-zacon-corporate/5 border border-zacon-corporate/10 px-4 py-2 mb-6">
                <Award className="h-4 w-4 text-zacon-corporate" />
                <span className="text-sm font-semibold text-zacon-corporate uppercase tracking-wider">
                  Diferenciais
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zacon-navy tracking-tight">
                Por Que Escolher a <span className="text-gradient">ZACON?</span>
              </h2>
              <p className="mx-auto mt-6 text-lg text-zacon-graphite-light leading-relaxed">
                Mais do que serviços contábeis, oferecemos uma parceria
                verdadeira para o crescimento do seu negócio.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <AnimatedSection delay={100}>
              <Card className="p-8 text-center h-full">
                <div className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-zacon-corporate/10 to-zacon-accent/5 flex items-center justify-center">
                  <Users className="h-8 w-8 text-zacon-corporate" />
                </div>
                <h3 className="text-xl font-bold text-zacon-navy">
                  Atendimento Humanizado
                </h3>
                <p className="mt-4 text-zacon-graphite-light leading-relaxed">
                  Cada cliente é tratado de forma única, com acompanhamento
                  próximo e soluções verdadeiramente personalizadas.
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card className="p-8 text-center h-full">
                <div className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-zacon-accent/10 to-zacon-corporate/5 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-zacon-accent" />
                </div>
                <h3 className="text-xl font-bold text-zacon-navy">
                  Foco em Resultados
                </h3>
                <p className="mt-4 text-zacon-graphite-light leading-relaxed">
                  Trabalhamos para gerar valor real ao seu negócio, com
                  estratégias que otimizam seus recursos e reduzem custos.
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <Card className="p-8 text-center h-full">
                <div className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-zacon-corporate/10 to-zacon-accent/5 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-zacon-corporate" />
                </div>
                <h3 className="text-xl font-bold text-zacon-navy">
                  Experiência Comprovada
                </h3>
                <p className="mt-4 text-zacon-graphite-light leading-relaxed">
                  Mais de 15 anos de mercado construindo relações de confiança
                  com empresas e pessoas físicas em Florianópolis.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-zacon-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zacon-black via-zacon-navy to-zacon-corporate-deep" />
        <div className="absolute inset-0 dot-pattern-light opacity-15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-zacon-corporate/15 rounded-full blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Precisa de Ajuda para{" "}
                <span className="text-gradient-silver">Escolher?</span>
              </h2>
              <p className="mx-auto mt-8 text-lg text-zacon-silver-light leading-relaxed max-w-2xl">
                Nossa equipe está pronta para entender suas necessidades e
                indicar os melhores serviços para sua situação específica.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="xl" variant="premium" className="group" asChild>
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
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button size="xl" variant="outline-light" asChild>
                  <Link href="/contato">
                    <Phone className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
