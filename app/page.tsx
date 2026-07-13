import Link from "next/link";
import {
  Building2,
  Calculator,
  FileText,
  Users,
  TrendingUp,
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Heart,
  Handshake,
  Lightbulb,
  Eye,
  UserCheck,
  MessageCircle,
  Target,
  BarChart3,
  Wallet,
  Sparkles,
  ChevronRight,
  Briefcase,
  PieChart,
  Scale,
  Clock,
  Zap,
  LineChart,
} from "lucide-react";
import { Button } from "./_components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardGlass,
  CardFeature,
  CardStats,
} from "./_components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./_components/ui/accordion";
import { AnimatedSection } from "./_components/AnimatedSection";
import { constructMetadata } from "@/lib/seo";
import { getFAQSchema } from "@/lib/schema";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Contabilidade em Florianópolis | Escritório Premium desde 2009",
  description:
    "ZACON Contabilidade - Desde 2009 construindo relações de confiança. Tradição, atendimento humanizado e soluções contábeis modernas para empresas e pessoas físicas em Florianópolis.",
  pathname: "/",
});

const services = [
  {
    title: "Abertura de Empresas",
    description:
      "Constituição, alterações contratuais, encerramentos e regularizações empresariais com agilidade.",
    icon: Building2,
    href: "/servicos/abertura-de-empresas",
    highlight: "Mais procurado",
  },
  {
    title: "Contabilidade Geral",
    description:
      "Escrituração, demonstrações contábeis, balanços patrimoniais e análises gerenciais completas.",
    icon: Calculator,
    href: "/servicos/contabilidade-empresarial",
  },
  {
    title: "Departamento Pessoal",
    description:
      "Admissões, demissões, folha de pagamento, eSocial, FGTS e gestão completa de RH.",
    icon: Users,
    href: "/servicos/departamento-pessoal",
  },
  {
    title: "Imposto de Renda PF",
    description:
      "Declaração anual, regularizações junto à Receita, malha fina e retificações.",
    icon: FileText,
    href: "/servicos/imposto-de-renda",
  },
  {
    title: "Planejamento Tributário",
    description:
      "Consultoria estratégica para redução legal de impostos e otimização fiscal.",
    icon: TrendingUp,
    href: "/servicos/planejamento-tributario",
    highlight: "Economia garantida",
  },
  {
    title: "BPO Financeiro",
    description:
      "Terceirização do financeiro com controle total, relatórios e gestão de fluxo de caixa.",
    icon: Wallet,
    href: "/servicos/bpo-financeiro",
  },
];

const values = [
  {
    title: "Ética Profissional",
    description:
      "Conduzimos todas as nossas relações com integridade absoluta, transparência e respeito às normas contábeis.",
    icon: Scale,
  },
  {
    title: "Confiança Mútua",
    description:
      "Construímos relacionamentos sólidos baseados na honestidade e na entrega consistente de resultados.",
    icon: Handshake,
  },
  {
    title: "Responsabilidade Total",
    description:
      "Assumimos o compromisso com o sucesso de cada cliente como se fosse o nosso próprio negócio.",
    icon: Shield,
  },
  {
    title: "Atendimento Humanizado",
    description:
      "Cada cliente é único e merece um acompanhamento próximo, transparente e verdadeiramente personalizado.",
    icon: Heart,
  },
  {
    title: "Inovação Constante",
    description:
      "Unimos décadas de tradição com tecnologia de ponta para oferecer soluções modernas e eficientes.",
    icon: Zap,
  },
  {
    title: "Transparência Total",
    description:
      "Mantemos nossos clientes sempre informados, com clareza absoluta em cada processo e decisão.",
    icon: Eye,
  },
];

const differentials = [
  {
    title: "Atendimento Personalizado",
    description:
      "Cada cliente é tratado de forma única, com soluções sob medida para suas necessidades específicas.",
    icon: UserCheck,
  },
  {
    title: "Equipe Experiente",
    description:
      "Profissionais qualificados com mais de 15 anos de experiência no mercado contábil de Florianópolis.",
    icon: Award,
  },
  {
    title: "Tecnologia de Ponta",
    description:
      "Utilizamos as ferramentas mais modernas do mercado para agilizar processos e entregar resultados.",
    icon: LineChart,
  },
  {
    title: "Suporte Consultivo",
    description:
      "Mais que contabilidade: oferecemos orientação estratégica completa para seu negócio crescer.",
    icon: Target,
  },
  {
    title: "Economia Tributária",
    description:
      "Estratégias legais para otimização fiscal e redução significativa de custos com impostos.",
    icon: PieChart,
  },
  {
    title: "Parceria Duradoura",
    description:
      "Construímos parcerias de longo prazo baseadas na confiança e em resultados comprovados.",
    icon: Handshake,
  },
];

const partners = [
  {
    name: "Jucélia Alves de Lima",
    role: "Contadora Consultiva e Sócia-Gerente Executiva",
    crc: "CRC/SC",
    description:
      "Contadora com ampla experiência em diversas áreas da contabilidade e visão estratégica da gestão empresarial. Responsável pela liderança da ZACON, planejamento estratégico, área societária, planejamento tributário e assessoria empresarial. Atua na constituição, alteração, regularização e baixa de empresas, além da gestão de orçamentos, relacionamento com clientes e desenvolvimento de novos negócios.",
    image: "/team/jucelia.jpg",
  },
  {
    name: "Adriano Schneider",
    role: "Departamento Pessoal",
    crc: "",
    description:
      "Bacharel em Administração de Empresas. Atua no Departamento Pessoal, apoiando as rotinas trabalhistas e administrativas com dedicação, responsabilidade e comprometimento, contribuindo para a organização dos processos e para um atendimento eficiente aos clientes.",
    image: "/team/adriano.jpg",
  },
  {
    name: "Heloisa Pinheiro Ventura",
    role: "Contadora | Especialista em Departamento Pessoal",
    crc: "CRC/SC",
    description:
      "Graduada em Ciências Contábeis, com ampla experiência na área contábil. Responsável pelas rotinas do Departamento Pessoal, assegurando a correta gestão das obrigações trabalhistas e previdenciárias. Atua com foco na excelência, oferecendo atendimento ágil, personalizado e humanizado.",
    image: "/team/heloisa.jpg",
  },
  {
    name: "Mario Torres",
    role: "Contador",
    crc: "",
    description:
      "Atua nas áreas Contábil e Fiscal, desenvolvendo rotinas contábeis, fiscais e tributárias, elaboração de demonstrações contábeis, apuração de tributos, cumprimento das obrigações acessórias e análise de informações gerenciais, sempre com foco na conformidade legal e na qualidade dos serviços prestados.",
    image: "/team/mario.jpg",
  },
];

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

const timeline: TimelineItem[] = [];

const faqs = [
  {
    question: "Quais serviços a ZACON Contabilidade oferece?",
    answer:
      "A ZACON oferece serviços completos de contabilidade: abertura, alteração e baixa de empresas, contabilidade geral, escrita contábil e fiscal, departamento pessoal, contratos empresariais, imposto de renda pessoa física, MEI, regularização de CPF e CNPJ, planejamento tributário, consultoria para área da saúde e BPO Financeiro.",
  },
  {
    question: "A ZACON atende pessoas físicas?",
    answer:
      "Sim! Além de empresas, atendemos pessoas físicas com serviços de declaração de imposto de renda, regularização de CPF, consultoria patrimonial e planejamento tributário pessoal.",
  },
  {
    question: "Qual a experiência da ZACON no mercado?",
    answer:
      "A ZACON Contabilidade atua desde 2009, acumulando mais de 15 anos de experiência no mercado contábil, mantendo a tradição de excelência, atendimento personalizado e compromisso com seus clientes.",
  },
  {
    question: "Como posso entrar em contato?",
    answer:
      "Você pode entrar em contato pelo WhatsApp (48) 98874-4359, pelo e-mail zaconcontabil@gmail.com ou através do formulário em nosso site. Estamos localizados na Rod. Armando Calil Bulos, 5785 - Ingleses do Rio Vermelho, Florianópolis.",
  },
  {
    question: "A ZACON trabalha com MEI?",
    answer:
      "Sim! Oferecemos serviços especializados para MEI incluindo abertura, regularização, declaração anual (DASN-SIMEI), orientação sobre limites de faturamento e transição para ME quando necessário.",
  },
];

const stats = [
  { value: "2009", label: "Fundação", sublabel: "Tradição desde" },
  { value: "+15", label: "Anos", sublabel: "De experiência" },
  { value: "100%", label: "Dedicação", sublabel: "Ao seu sucesso" },
];

const trustIndicators = [
  { icon: Shield, text: "Dados protegidos com total segurança" },
  { icon: Clock, text: "Resposta em até 24 horas úteis" },
  { icon: Award, text: "Mais de 15 anos de mercado" },
];

const WHATSAPP_NUMBER = "48988744359";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema(faqs)),
        }}
      />

      {/* ==========================================
          HERO SECTION - Premium Corporate Design
          ========================================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-zacon-black">
        {/* Background Layers */}
        <div className="absolute inset-0">
          {/* Main gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-zacon-black via-zacon-navy to-zacon-corporate-deep" />

          {/* Mesh pattern */}
          <div className="absolute inset-0 bg-mesh-dark opacity-60" />

          {/* Grid pattern */}
          <div className="absolute inset-0 dot-pattern-light opacity-30" />

          {/* Radial glows */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-zacon-corporate/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zacon-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-zacon-corporate/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />

          {/* Subtle noise overlay */}
          <div className="absolute inset-0 opacity-[0.015] bg-noise" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 hidden lg:block">
          <div className="w-24 h-24 border border-white/5 rounded-2xl rotate-12 animate-float-slow" />
        </div>
        <div className="absolute bottom-32 right-32 hidden lg:block">
          <div className="w-16 h-16 border border-zacon-corporate/20 rounded-xl -rotate-12 animate-float" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <AnimatedSection>
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.1] px-5 py-2.5 mb-8">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-zacon-accent/20">
                    <Sparkles className="h-3.5 w-3.5 text-zacon-accent-light" />
                  </div>
                  <span className="text-sm font-medium text-white/90 tracking-wide">
                    Desde 2009 construindo relações de confiança
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                  <span className="text-white">Sua empresa merece</span>
                  <br />
                  <span className="text-white">uma contabilidade</span>
                  <br />
                  <span className="text-gradient-silver inline-block mt-2">
                    de excelência
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-8 text-lg sm:text-xl text-zacon-silver-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Há mais de 15 anos ajudando empresas e empreendedores a crescer
                  com segurança, conformidade e estratégia tributária inteligente.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="xl" variant="premium" className="group" asChild>
                    <a
                      href={getWhatsAppLink(
                        WHATSAPP_NUMBER,
                        "Olá! Gostaria de solicitar um orçamento para minha empresa."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button size="xl" variant="outline-light" asChild>
                    <Link href="/contato">
                      <Phone className="mr-2 h-5 w-5" />
                      Falar com Especialista
                    </Link>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
                  {trustIndicators.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-zacon-silver"
                    >
                      <item.icon className="h-4 w-4 text-zacon-accent-light" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column - Stats Grid */}
            <div className="lg:col-span-5 hidden lg:block">
              <AnimatedSection delay={200}>
                <div className="grid grid-cols-2 gap-5">
                  {stats.map((stat, index) => (
                    <CardGlass
                      key={index}
                      className="p-8 text-center hover:-translate-y-1 transition-all duration-500"
                    >
                      <div className="text-4xl xl:text-5xl font-bold text-white mb-2 tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-zacon-accent-light">
                        {stat.label}
                      </div>
                      <div className="text-xs text-zacon-silver mt-1.5">
                        {stat.sublabel}
                      </div>
                    </CardGlass>
                  ))}

                  {/* Feature Card */}
                  <CardGlass className="p-8 col-span-2 hover:-translate-y-1 transition-all duration-500">
                    <div className="flex items-center gap-5">
                      <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-zacon-corporate/30 to-zacon-accent/20 border border-white/10">
                        <BarChart3 className="h-8 w-8 text-zacon-accent-light" />
                      </div>
                      <div className="text-left">
                        <div className="text-lg font-bold text-white">
                          Gestão Empresarial Completa
                        </div>
                        <div className="text-sm text-zacon-silver mt-1">
                          Contabilidade, fiscal, pessoal e financeiro integrados
                        </div>
                      </div>
                    </div>
                  </CardGlass>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Mobile Stats */}
          <AnimatedSection delay={300}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 lg:hidden">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zacon-silver mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ==========================================
          TIMELINE SECTION - História Premium
          ========================================== */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-zacon-light-ultra/30 to-white" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-zacon-corporate/5 border border-zacon-corporate/10 px-4 py-2 mb-6">
                <Clock className="h-4 w-4 text-zacon-corporate" />
                <span className="text-sm font-semibold text-zacon-corporate uppercase tracking-wider">
                  Nossa Trajetória
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zacon-navy tracking-tight">
                Uma história de{" "}
                <span className="text-gradient">dedicação e confiança</span>
              </h2>
              <p className="mt-6 text-lg text-zacon-graphite-light leading-relaxed">
                Desde 2009, construindo relações sólidas com ética, compromisso
                inabalável e excelência no atendimento contábil.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>



      {/* ==========================================
          VALUES SECTION
          ========================================== */}
      <section className="py-24 lg:py-32 bg-zacon-light-ultra relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-zacon-corporate/5 border border-zacon-corporate/10 px-4 py-2 mb-6">
                <Heart className="h-4 w-4 text-zacon-corporate" />
                <span className="text-sm font-semibold text-zacon-corporate uppercase tracking-wider">
                  O que nos guia
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zacon-navy tracking-tight">
                Nossos <span className="text-gradient">Valores</span>
              </h2>
              <p className="mt-6 text-lg text-zacon-graphite-light leading-relaxed">
                Os princípios que orientam cada decisão e cada atendimento na
                ZACON Contabilidade.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <CardFeature className="h-full">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-zacon-corporate/10 to-zacon-accent/5 text-zacon-corporate transition-all duration-500 group-hover:from-zacon-corporate group-hover:to-zacon-corporate-light group-hover:text-white group-hover:scale-110 group-hover:shadow-glow-sm">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-zacon-navy group-hover:text-zacon-corporate transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-zacon-graphite-light leading-relaxed">
                    {value.description}
                  </p>
                </CardFeature>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SERVICES SECTION
          ========================================== */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-zacon-corporate/5 border border-zacon-corporate/10 px-4 py-2 mb-6">
                <Briefcase className="h-4 w-4 text-zacon-corporate" />
                <span className="text-sm font-semibold text-zacon-corporate uppercase tracking-wider">
                  Soluções Completas
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zacon-navy tracking-tight">
                Nossos <span className="text-gradient">Serviços</span>
              </h2>
              <p className="mt-6 text-lg text-zacon-graphite-light leading-relaxed">
                Soluções contábeis completas para empresas de todos os portes e
                pessoas físicas.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <Link href={service.href} className="group block h-full">
                  <Card className="h-full relative">
                    {service.highlight && (
                      <div className="absolute -top-3 right-6">
                        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-zacon-corporate to-zacon-accent px-3 py-1 text-xs font-semibold text-white shadow-glow-sm">
                          {service.highlight}
                        </span>
                      </div>
                    )}
                    <CardHeader className="pt-8">
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-zacon-corporate/10 to-zacon-accent/5 text-zacon-corporate transition-all duration-500 group-hover:from-zacon-corporate group-hover:to-zacon-corporate-light group-hover:text-white group-hover:scale-110 group-hover:shadow-glow-sm">
                        <service.icon className="h-7 w-7" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zacon-graphite-light leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-6 flex items-center text-sm font-semibold text-zacon-corporate">
                        Saiba mais
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={600}>
            <div className="mt-16 text-center">
              <Button size="lg" className="group" asChild>
                <Link href="/servicos">
                  Ver Todos os Serviços
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==========================================
          DIFFERENTIALS SECTION - Dark Premium
          ========================================== */}
      <section className="py-24 lg:py-32 bg-zacon-navy relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zacon-black via-zacon-navy to-zacon-corporate-deep" />
        <div className="absolute inset-0 dot-pattern-light opacity-20" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-zacon-corporate/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-zacon-accent/10 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] border border-white/[0.1] px-4 py-2 mb-6">
                <Award className="h-4 w-4 text-zacon-accent-light" />
                <span className="text-sm font-semibold text-zacon-accent-light uppercase tracking-wider">
                  Diferenciais
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Por Que Escolher a{" "}
                <span className="text-gradient-silver">ZACON?</span>
              </h2>
              <p className="mt-6 text-lg text-zacon-silver-light leading-relaxed">
                Diferenciais que fazem da ZACON a escolha certa para a contabilidade
                da sua empresa.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentials.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                <CardGlass className="p-8 h-full text-center">
                  <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 text-zacon-accent-light border border-white/10">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-zacon-silver-light leading-relaxed">
                    {item.description}
                  </p>
                </CardGlass>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          TEAM SECTION
          ========================================== */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-zacon-light-ultra/20 to-white" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-zacon-corporate/5 border border-zacon-corporate/10 px-4 py-2 mb-6">
                <Users className="h-4 w-4 text-zacon-corporate" />
                <span className="text-sm font-semibold text-zacon-corporate uppercase tracking-wider">
                  Quem Somos
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zacon-navy tracking-tight">
                Nossa <span className="text-gradient">Equipe</span>
              </h2>
              <p className="mt-6 text-lg text-zacon-graphite-light leading-relaxed">
                Conheça a profissional responsável pelo atendimento contábil de excelência da ZACON.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <AnimatedSection key={partner.name} delay={index * 200}>
                <Card className="p-8 h-full">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-zacon-corporate via-zacon-corporate-light to-zacon-navy shadow-glow overflow-hidden">
                        <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-white">
                          {partner.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                      </div>
                    </div>
                    {/* Info */}
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-bold text-zacon-navy group-hover:text-zacon-corporate transition-colors">
                        {partner.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-zacon-corporate">
                        {partner.role}
                      </p>
                      {partner.crc && (
                        <p className="mt-1 text-xs text-zacon-graphite-muted">
                          {partner.crc}
                        </p>
                      )}
                      <p className="mt-4 text-zacon-graphite-light leading-relaxed text-sm">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="rounded-2xl bg-gradient-to-r from-zacon-light-ultra via-white to-zacon-light-ultra border border-zacon-light p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zacon-corporate/10 text-zacon-corporate mb-4">
                  <Heart className="h-6 w-6" />
                </div>

              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==========================================
          FAQ SECTION
          ========================================== */}
      <section className="py-24 lg:py-32 bg-zacon-light-ultra relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-zacon-corporate/5 border border-zacon-corporate/10 px-4 py-2 mb-6">
                <MessageCircle className="h-4 w-4 text-zacon-corporate" />
                <span className="text-sm font-semibold text-zacon-corporate uppercase tracking-wider">
                  Dúvidas Frequentes
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zacon-navy tracking-tight">
                Perguntas <span className="text-gradient">Frequentes</span>
              </h2>
              <p className="mt-6 text-lg text-zacon-graphite-light leading-relaxed">
                Tire suas dúvidas sobre nossos serviços e funcionamento.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="rounded-2xl border border-zacon-light/80 bg-white shadow-card p-2">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="px-4 border-b border-zacon-light/50 last:border-0"
                    >
                      <AccordionTrigger className="text-left py-5 text-base font-semibold text-zacon-navy hover:text-zacon-corporate">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-zacon-graphite-light leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==========================================
          CTA SECTION - Final Premium
          ========================================== */}
      <section className="py-24 lg:py-32 bg-zacon-navy relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zacon-black via-zacon-navy to-zacon-corporate-deep" />
        <div className="absolute inset-0 dot-pattern-light opacity-15" />

        {/* Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-zacon-corporate/15 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zacon-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-zacon-corporate/20 rounded-full blur-[80px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
                Vamos cuidar da contabilidade enquanto você cuida do{" "}
                <span className="text-gradient-silver">
                  crescimento do seu negócio
                </span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-lg text-zacon-silver-light leading-relaxed">
                Entre em contato agora mesmo e descubra como podemos ajudar sua
                empresa a crescer com segurança, conformidade e estratégia tributária
                inteligente.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="xl" variant="premium" className="group" asChild>
                  <a
                    href={getWhatsAppLink(
                      WHATSAPP_NUMBER,
                      "Olá! Gostaria de solicitar uma proposta para minha empresa."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Solicitar Proposta
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button size="xl" variant="outline-light" asChild>
                  <Link href="/contato">
                    <Phone className="mr-2 h-5 w-5" />
                    Agendar Reunião
                  </Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-zacon-silver">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-zacon-accent-light" />
                  Dados protegidos
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-zacon-accent-light" />
                  +15 anos de mercado
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-zacon-accent-light" />
                  Resposta em 24h
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}