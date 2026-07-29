import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Users,
  Target,
  Eye,
  Heart,
  Shield,
  Handshake,
  Lightbulb,
  UserCheck,
  Quote,
  Sparkles,
  Clock,
  Scale,
  Zap,
  BadgeCheck,
  Star,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection } from "../_components/AnimatedSection";
import { BreadcrumbDark } from "../_components/Breadcrumb";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getAboutPageSchema, getTeamSchema } from "@/lib/schema";
import { CardGlass, CardFeature, Card } from "../_components/ui/card";

export const metadata = constructMetadata({
  title: "Sobre Nós | Nossa História e Valores",
  description:
    "Conheça a história da ZACON Contabilidade. Mais de 15 anos de tradição, ética e compromisso com nossos clientes em Florianópolis.",
  keywords: [
    "sobre zacon contabilidade",
    "história zacon",
    "contabilidade florianópolis",
    "escritório contábil florianópolis",
        "jucelia alves de lima",
  ],
  pathname: "/sobre",
});

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  highlight: boolean;
};

const timeline: TimelineItem[] = [
  {
    year: "2009",
    title: "Fundação da ZACON",
    description:
      "Jair Zanette funda a ZACON Contabilidade em Ingleses, Florianópolis, com a missão de oferecer serviços contábeis baseados na ética, confiança e atendimento humanizado.",
    highlight: true,
  },
  {
    year: "2012",
    title: "Consolidação no Mercado Local",
    description:
      "A ZACON se consolida como referência em contabilidade na região norte de Florianópolis, atendendo empresas de diversos segmentos.",
    highlight: false,
  },
  {
    year: "2015",
    title: "Expansão dos Serviços",
    description:
      "Ampliação do portfólio com serviços de BPO Financeiro e planejamento tributário avançado, atendendo demandas mais complexas dos clientes.",
    highlight: false,
  },
  {
    year: "2018",
    title: "Modernização Digital",
    description:
      "Implementação de tecnologias de ponta para atendimento remoto e gestão digital, mantendo a proximidade com os clientes.",
    highlight: false,
  },
  {
    year: "2020",
    title: "Transição de Liderança",
    description:
      "Jucélia Alves de Lima assume a gestão executiva, dando continuidade ao legado de excelência e inovando com visão estratégica de gestão empresarial.",
    highlight: true,
  },
  {
    year: "2024",
    title: "+500 Empresas Atendidas",
    description:
      "Marca de mais de 500 empresas atendidas ao longo da história, com índice de satisfação superior a 98%.",
    highlight: false,
  },
];

// [FORNECER] Substituir por depoimentos reais de clientes
const testimonials = [
  {
    name: "[DEPOIMENTO_REAL_AQUI]",
    company: "[EMPRESA_CLIENTE]",
    role: "[CARGO]",
    content:
      "[INSERIR DEPOIMENTO REAL DO CLIENTE - Texto de 2-3 frases sobre a experiência com a ZACON]",
    // image: "/images/testimonials/cliente-1.webp",
  },
  {
    name: "[DEPOIMENTO_REAL_AQUI]",
    company: "[EMPRESA_CLIENTE]",
    role: "[CARGO]",
    content:
      "[INSERIR DEPOIMENTO REAL DO CLIENTE - Texto de 2-3 frases sobre a experiência com a ZACON]",
    // image: "/images/testimonials/cliente-2.webp",
  },
  {
    name: "[DEPOIMENTO_REAL_AQUI]",
    company: "[EMPRESA_CLIENTE]",
    role: "[CARGO]",
    content:
      "[INSERIR DEPOIMENTO REAL DO CLIENTE - Texto de 2-3 frases sobre a experiência com a ZACON]",
    // image: "/images/testimonials/cliente-3.webp",
  },
];

// Números da empresa
const stats = [
  { value: "2009", label: "Ano de Fundação" },
  { value: "500+", label: "Empresas Atendidas" },
  { value: "15+", label: "Anos de Experiência" },
  { value: "98%", label: "Satisfação dos Clientes" },
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
      "Assumimos o compromisso com o sucesso de cada cliente como se fosse nosso próprio negócio.",
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
      "Unimos tradição com tecnologia de ponta para oferecer soluções modernas e eficientes.",
    icon: Zap,
  },
  {
    title: "Transparência Total",
    description:
      "Mantemos nossos clientes sempre informados, com clareza absoluta em cada processo e decisão.",
    icon: Eye,
  },
];

const partners = [
  {
    name: "Jucélia Alves de Lima",
    role: "Contadora Consultiva e Sócia-Gerente Executiva",
    crc: "CRC/SC",
    description:
      "Contadora com ampla experiência em diversas áreas da contabilidade e visão estratégica da gestão empresarial. Possui MBA em Gestão e Auditoria em Sistemas de Saúde e especialização em Direito Tributário. Responsável pela liderança da ZACON, planejamento estratégico, área societária, planejamento tributário e assessoria empresarial. Atua na constituição, alteração, regularização e baixa de empresas, além da gestão de orçamentos, relacionamento com clientes e desenvolvimento de novos negócios.",
    // [FORNECER] Substituir por: /images/team/jucelia-alves-de-lima.webp (400x400px)
    image: "/images/team/placeholder-avatar.svg",
  },
  {
    name: "Luciane Moraes",
    role: "Departamento Fiscal | Agente de Registro de Certificado Digital",
    crc: "",
    description:
      "Bacharel em Ciências Contábeis, atua no Departamento Fiscal e como Agente de Registro de Certificado Digital da ZACON Contabilidade. Possui experiência em rotinas fiscais, apuração de tributos, obrigações acessórias e acompanhamento das atualizações da legislação tributária. Também é responsável pelos processos de emissão e validação de certificados digitais, garantindo segurança, confiabilidade e agilidade aos clientes. Destaca-se pelo comprometimento, organização e responsabilidade, contribuindo para a excelência dos serviços prestados.",
    // [FORNECER] Substituir por: /images/team/luciane-moraes.webp (400x400px)
    image: "/images/team/placeholder-avatar.svg",
  },
  {
    name: "Heloisa Pinheiro Ventura",
    role: "Contadora | Especialista em Departamento Pessoal",
    crc: "CRC/SC",
    description:
      "Graduada em Ciências Contábeis, com ampla experiência na área contábil. Responsável pelas rotinas do Departamento Pessoal, assegurando a correta gestão das obrigações trabalhistas e previdenciárias. Atua com foco na excelência, oferecendo atendimento ágil, personalizado e humanizado.",
    // [FORNECER] Substituir por: /images/team/heloisa-pinheiro-ventura.webp (400x400px)
    image: "/images/team/placeholder-avatar.svg",
  },
  {
    name: "Mario Torres",
    role: "Contador",
    crc: "",
    description:
      "Atua nas áreas Contábil e Fiscal, desenvolvendo rotinas contábeis, fiscais e tributárias, elaboração de demonstrações contábeis, apuração de tributos, cumprimento das obrigações acessórias e análise de informações gerenciais, sempre com foco na conformidade legal e na qualidade dos serviços prestados.",
    // [FORNECER] Substituir por: /images/team/mario-torres.webp (400x400px)
    image: "/images/team/placeholder-avatar.svg",
  },
  {
    name: "Adriano Schneider",
    role: "Departamento Pessoal",
    crc: "",
    description:
      "Bacharel em Administração de Empresas. Atua no Departamento Pessoal, apoiando as rotinas trabalhistas e administrativas com dedicação, responsabilidade e comprometimento, contribuindo para a organização dos processos e para um atendimento eficiente aos clientes.",
    // [FORNECER] Substituir por: /images/team/adriano-schneider.webp (400x400px)
    image: "/images/team/placeholder-avatar.svg",
  },
];

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Sobre", url: "/sobre" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getAboutPageSchema()),
        }}
      />
      {/* Schema Person para cada membro da equipe (EEAT) */}
      {getTeamSchema(partners).map((personSchema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      ))}

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-zacon-black">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zacon-black via-zacon-navy to-zacon-corporate-deep" />
        <div className="absolute inset-0 dot-pattern-light opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zacon-corporate/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zacon-accent/10 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <BreadcrumbDark
                items={[{ label: "Sobre", href: "/sobre" }]}
                className="justify-center mb-8"
              />
              <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.1] px-5 py-2.5 mb-8">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-zacon-accent/20">
                  <Clock className="h-3.5 w-3.5 text-zacon-accent-light" />
                </div>
                <span className="text-sm font-medium text-white/90 tracking-wide">
                  Desde 2009 construindo relações de confiança
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                <span className="text-white">Nossa</span>{" "}
                <span className="text-gradient-silver">História</span>
              </h1>
              <p className="mx-auto mt-8 text-lg sm:text-xl text-zacon-silver-light leading-relaxed max-w-2xl">
                Mais de 15 anos construindo relações de confiança com nossos
                clientes. Conheça a trajetória da ZACON Contabilidade.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* About Content */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-zacon-corporate/5 border border-zacon-corporate/10 px-4 py-2 mb-6">
                  <Users className="h-4 w-4 text-zacon-corporate" />
                  <span className="text-sm font-semibold text-zacon-corporate uppercase tracking-wider">
                    Quem Somos
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zacon-navy tracking-tight">
                  Uma empresa construída com{" "}
                  <span className="text-gradient">valores sólidos</span>
                </h2>
                <div className="mt-8 space-y-5 text-zacon-graphite-light leading-relaxed text-lg">
                  <p>
                    A <strong className="text-zacon-navy">ZACON Contabilidade</strong> é
                    uma empresa contábil que une tradição, atendimento humanizado,
                    tecnologia e soluções estratégicas para empresas e pessoas físicas.
                  </p>
                  <p>
                    Nossa história começou em 2009, com o propósito de oferecer um serviço contábil
                    baseado na ética, na confiança e no compromisso com o
                    crescimento de seus clientes.
                  </p>
                  <p>
                    Acreditamos que cada cliente é único e merece um
                    acompanhamento próximo, transparente e personalizado,
                    construindo relações de confiança que vão além da
                    contabilidade.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="rounded-3xl bg-gradient-to-br from-zacon-navy via-zacon-navy-medium to-zacon-corporate p-10 lg:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-zacon-accent/10 rounded-full blur-2xl" />
                <Quote className="h-14 w-14 text-zacon-accent-light/30" />
                <blockquote className="mt-6 text-xl lg:text-2xl font-medium italic leading-relaxed relative">
                  "Mais do que oferecer serviços contábeis, acreditamos em
                  construir relacionamentos duradouros, gerar segurança para a
                  tomada de decisões e contribuir para o crescimento sustentável
                  de nossos clientes."
                </blockquote>
                <div className="mt-10 border-t border-white/10 pt-10">
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <div>
                      <div className="text-5xl font-bold text-white tracking-tight">2009</div>
                      <div className="mt-2 text-sm text-zacon-silver-light font-medium">Fundação</div>
                    </div>
                    <div>
                      <div className="text-5xl font-bold text-white tracking-tight">+15</div>
                      <div className="mt-2 text-sm text-zacon-silver-light font-medium">Anos de História</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-zacon-light-ultra py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />

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
                Os marcos que definiram{" "}
                <span className="text-gradient">nossa história</span>
              </h2>
              <p className="mx-auto mt-6 text-lg text-zacon-graphite-light leading-relaxed">
                Uma jornada de dedicação, ética e compromisso com nossos clientes.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative mt-20">
            <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-zacon-corporate via-zacon-accent to-zacon-corporate md:block" />
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <AnimatedSection key={item.year} delay={index * 150}>
                  <div
                    className={`flex flex-col items-center md:flex-row ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-full md:w-5/12 ${
                        index % 2 === 0
                          ? "md:text-right md:pr-16"
                          : "md:text-left md:pl-16"
                      }`}
                    >
                      <CardFeature className="text-left">
                        <div
                          className={`inline-flex items-center rounded-lg px-4 py-2 text-sm font-bold text-white shadow-glow-sm ${
                            item.highlight
                              ? "bg-gradient-to-r from-zacon-corporate to-zacon-corporate-light"
                              : "bg-zacon-graphite"
                          }`}
                        >
                          {item.year}
                        </div>
                        <h3 className="mt-5 text-xl font-bold text-zacon-navy">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-zacon-graphite-light leading-relaxed">
                          {item.description}
                        </p>
                      </CardFeature>
                    </div>

                    <div
                      className={`z-10 my-6 flex h-14 w-14 items-center justify-center rounded-full shadow-glow md:my-0 border-4 border-white ${
                        item.highlight
                          ? "bg-gradient-to-br from-zacon-corporate to-zacon-corporate-light"
                          : "bg-zacon-graphite"
                      }`}
                    >
                      <div className="h-4 w-4 rounded-full bg-white" />
                    </div>

                    <div className="hidden w-5/12 md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <AnimatedSection>
              <Card className="p-10 lg:p-12 text-center h-full">
                <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-zacon-corporate/10 to-zacon-accent/5 text-zacon-corporate">
                  <Target className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-zacon-navy">
                  Nossa Missão
                </h3>
                <p className="mt-6 text-zacon-graphite-light text-lg leading-relaxed">
                  Oferecer serviços contábeis de excelência com atendimento
                  humanizado, contribuindo para o sucesso e crescimento
                  sustentável dos nossos clientes através de soluções
                  personalizadas, éticas e inovadoras.
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <Card className="p-10 lg:p-12 text-center h-full">
                <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-zacon-accent/10 to-zacon-corporate/5 text-zacon-accent">
                  <Eye className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-zacon-navy">
                  Nossa Visão
                </h3>
                <p className="mt-6 text-zacon-graphite-light text-lg leading-relaxed">
                  Ser reconhecida como referência em contabilidade pela
                  qualidade dos serviços, tradição construída ao longo dos anos
                  e inovação constante no atendimento ao cliente, mantendo
                  sempre o legado de confiança e ética.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-zacon-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zacon-black via-zacon-navy to-zacon-corporate-deep" />
        <div className="absolute inset-0 dot-pattern-light opacity-20" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-zacon-corporate/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-zacon-accent/10 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] border border-white/[0.1] px-4 py-2 mb-6">
                <Heart className="h-4 w-4 text-zacon-accent-light" />
                <span className="text-sm font-semibold text-zacon-accent-light uppercase tracking-wider">
                  O que nos guia
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Nossos <span className="text-gradient-silver">Valores</span>
              </h2>
              <p className="mx-auto mt-6 text-lg text-zacon-silver-light leading-relaxed">
                Os princípios que guiam nossa atuação todos os dias.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <CardGlass className="p-8 text-center h-full">
                  <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 text-zacon-accent-light border border-white/10">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{value.title}</h3>
                  <p className="mt-3 text-zacon-silver-light leading-relaxed">
                    {value.description}
                  </p>
                </CardGlass>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-zacon-light-ultra/20 to-white" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-zacon-corporate/5 border border-zacon-corporate/10 px-4 py-2 mb-6">
                <Users className="h-4 w-4 text-zacon-corporate" />
                <span className="text-sm font-semibold text-zacon-corporate uppercase tracking-wider">
                  Liderança
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zacon-navy tracking-tight">
                Nossa <span className="text-gradient">Equipe</span>
              </h2>
              <p className="mx-auto mt-6 text-lg text-zacon-graphite-light leading-relaxed">
                Conheça a profissional responsável pelo atendimento de excelência da ZACON Contabilidade.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {partners.map((partner, index) => {
              const slug = partner.name
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, "-");
              return (
                <AnimatedSection key={partner.name} delay={index * 200}>
                  <Link href={`/equipe/${slug}`} className="block h-full">
                    <Card className="p-8 h-full hover-lift cursor-pointer group">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-zacon-corporate via-zacon-corporate-light to-zacon-navy shadow-glow overflow-hidden relative">
                            {partner.image ? (
                              <Image
                                src={partner.image}
                                alt={`${partner.name} - ${partner.role} na ZACON Contabilidade`}
                                width={112}
                                height={112}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-white">
                                {partner.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")
                                  .slice(0, 2)}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-center sm:text-left flex-1">
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
                          <p className="mt-4 text-zacon-graphite-light leading-relaxed text-sm line-clamp-3">
                            {partner.description}
                          </p>
                          <p className="mt-3 text-sm font-medium text-zacon-corporate group-hover:underline inline-flex items-center">
                            Ver perfil completo
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Foto da Equipe Coletiva */}
          <AnimatedSection delay={400}>
            <div className="mt-16 relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <Image
                src="/images/team/placeholder-equipe.svg"
                alt="Equipe completa da ZACON Contabilidade em Ingleses, Florianópolis"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                // [FORNECER] Substituir por: /images/team/equipe-zacon.webp (1200x800px)
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Credenciais e Certificações */}
      <section className="py-24 lg:py-32 bg-zacon-light-ultra relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-zacon-corporate/5 border border-zacon-corporate/10 px-4 py-2 mb-6">
                <BadgeCheck className="h-4 w-4 text-zacon-corporate" />
                <span className="text-sm font-semibold text-zacon-corporate uppercase tracking-wider">
                  Credenciais
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zacon-navy tracking-tight">
                Registro e <span className="text-gradient">Certificações</span>
              </h2>
              <p className="mx-auto mt-6 text-lg text-zacon-graphite-light leading-relaxed">
                Profissionais registrados e habilitados pelo Conselho Regional de Contabilidade de Santa Catarina.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <AnimatedSection delay={100}>
              <Card className="p-8 text-center h-full">
                <div className="mx-auto mb-6 w-48 h-36 rounded-xl bg-zacon-light overflow-hidden relative">
                  <Image
                    src="/images/team/placeholder-avatar.svg"
                    alt="Certificado CRC/SC - Conselho Regional de Contabilidade de Santa Catarina"
                    width={192}
                    height={144}
                    className="w-full h-full object-contain p-4"
                    // [FORNECER] Substituir por: /images/certificates/crc-sc-jucelia.webp (800x600px)
                  />
                </div>
                <h3 className="text-xl font-bold text-zacon-navy">CRC/SC</h3>
                <p className="mt-2 text-zacon-graphite-light">
                  Registro ativo no Conselho Regional de Contabilidade de Santa Catarina
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card className="p-8 text-center h-full">
                <div className="mx-auto mb-6 w-48 h-36 rounded-xl bg-zacon-light overflow-hidden relative flex items-center justify-center">
                  <Award className="h-16 w-16 text-zacon-corporate" />
                </div>
                <h3 className="text-xl font-bold text-zacon-navy">+15 Anos de Experiência</h3>
                <p className="mt-2 text-zacon-graphite-light">
                  Desde 2009 oferecendo serviços contábeis de qualidade em Florianópolis
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Seção do Fundador */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zacon-light">
                  <Image
                    src="/images/team/placeholder-avatar.svg"
                    alt="Jair Zanette - Fundador da ZACON Contabilidade"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                    // [FORNECER] Substituir por: /images/team/jair-zanette.webp (600x450px)
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-zacon-corporate rounded-xl p-4 shadow-lg">
                  <p className="text-white font-bold text-2xl">2009</p>
                  <p className="text-zacon-silver-light text-sm">Fundação</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-zacon-corporate/5 border border-zacon-corporate/10 px-4 py-2 mb-6">
                  <Star className="h-4 w-4 text-zacon-corporate" />
                  <span className="text-sm font-semibold text-zacon-corporate uppercase tracking-wider">
                    Nosso Fundador
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-zacon-navy">
                  Jair Zanette
                </h2>
                <p className="mt-2 text-lg text-zacon-corporate font-semibold">
                  Fundador da ZACON Contabilidade
                </p>
                <div className="mt-6 space-y-4 text-zacon-graphite-light leading-relaxed">
                  <p>
                    Em 2009, Jair Zanette fundou a ZACON Contabilidade com uma visão clara:
                    oferecer serviços contábeis que fossem além dos números, construindo
                    relacionamentos de confiança baseados na ética e no compromisso com o
                    sucesso de cada cliente.
                  </p>
                  <p>
                    Sua experiência e dedicação estabeleceram os pilares que guiam a ZACON
                    até hoje: atendimento humanizado, transparência absoluta e busca
                    constante pela excelência. O legado de Jair continua presente em cada
                    atendimento realizado pela equipe.
                  </p>
                  <p>
                    Hoje, sob a liderança de Jucélia Alves de Lima, a ZACON honra essa
                    tradição enquanto inova para atender às demandas do mercado moderno,
                    combinando a confiança construída ao longo de mais de 15 anos com
                    soluções tecnológicas de ponta.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Números da Empresa */}
      <section className="py-16 bg-zacon-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white">{stat.value}</div>
                  <div className="mt-2 text-zacon-silver-light">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 lg:py-32 bg-zacon-light-ultra">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-zacon-corporate/5 border border-zacon-corporate/10 px-4 py-2 mb-6">
                <Quote className="h-4 w-4 text-zacon-corporate" />
                <span className="text-sm font-semibold text-zacon-corporate uppercase tracking-wider">
                  O que dizem nossos clientes
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zacon-navy tracking-tight">
                Depoimentos de <span className="text-gradient">Clientes</span>
              </h2>
              <p className="mx-auto mt-6 text-lg text-zacon-graphite-light leading-relaxed">
                A satisfação dos nossos clientes é nossa maior motivação.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="p-8 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-zacon-corporate/20 mb-4" />
                  <p className="text-zacon-graphite-light leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-6 pt-6 border-t border-zacon-light">
                    <p className="font-bold text-zacon-navy">{testimonial.name}</p>
                    <p className="text-sm text-zacon-corporate">{testimonial.role}</p>
                    <p className="text-sm text-zacon-graphite-muted">{testimonial.company}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Aviso sobre depoimentos placeholder */}
          <AnimatedSection delay={400}>
            <div className="mt-12 text-center">
              <p className="text-sm text-zacon-graphite-muted">
                [FORNECER] Substituir pelos depoimentos reais dos clientes
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}