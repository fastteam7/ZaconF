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
} from "lucide-react";
import { AnimatedSection } from "../_components/AnimatedSection";
import { BreadcrumbDark } from "../_components/Breadcrumb";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getAboutPageSchema } from "@/lib/schema";
import { CardGlass, CardFeature, Card } from "../_components/ui/card";

export const metadata = constructMetadata({
  title: "Sobre Nós | Nossa História e Valores",
  description:
    "Conheça a história da ZACON Contabilidade, fundada em 2009 por Jair Zanette. Mais de 15 anos de tradição, ética e compromisso com nossos clientes em Florianópolis.",
  keywords: [
    "sobre zacon contabilidade",
    "história zacon",
    "contabilidade florianópolis",
    "escritório contábil florianópolis",
    "jair zanette",
    "jucelia alves de lima",
    // "fernando bressan zanette",
  ],
  pathname: "/sobre",
});

const timeline = [
  // {
  //   year: "2009",
  //   title: "Fundação da Zanette Contabilidade",
  //   description:
  //     "Jair Zanette (in memoriam) funda a Zanette Contabilidade com o propósito de oferecer um serviço contábil baseado na ética, na confiança e no compromisso com o crescimento de seus clientes.",
  //   highlight: true,
  // },
  // {
  //   year: "2012",
  //   title: "Nascimento da Marca ZACON",
  //   description:
  //     "A contadora Jucélia Alves de Lima passa a integrar a equipe. O escritório passa a se chamar ZACON Contabilidade, representando a evolução da marca e o fortalecimento de um projeto construído em parceria.",
  //   highlight: true,
  // },
  // {
  //   year: "2024",
  //   title: "Continuidade do Legado",
  //   description:
  //     "Após o falecimento do Sr. Jair, a ZACON é adquirida pela JF Contabilidade. Seu legado de honestidade e dedicação permanece vivo em cada decisão e atendimento.",
  //   highlight: true,
  // },
  // {
  //   year: "Hoje",
  //   title: "Nova Era de Excelência",
  //   description:
  //     "Jucélia Alves de Lima e Fernando Bressan Zanette dão continuidade ao sonho iniciado pelo Sr. Jair, unindo tradição, conhecimento, inovação e tecnologia de ponta.",
  //   highlight: false,
  // },
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
    role: "Contadora e Sócia-Diretora",
    crc: "CRC/SC",
    description:
      "Com formação em Ciências Contábeis e experiência de mais de uma década na ZACON, Jucélia é responsável pela gestão contábil e pelo relacionamento próximo com os clientes. Sua dedicação e expertise garantem um atendimento de excelência.",
    initials: "JL",
  },
  // {
  //   name: "Fernando Bressan Zanette",
  //   role: "Técnico em Contabilidade e Sócio",
  //   description:
  //     "Fernando traz uma visão moderna e inovadora para a gestão da empresa, unindo tecnologia e eficiência aos processos contábeis. Seu compromisso com a qualidade reflete os valores da ZACON.",
  //   initials: "FZ",
  // },
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
                Conheça os profissionais que dão continuidade ao legado de
                excelência da ZACON Contabilidade.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <AnimatedSection key={partner.name} delay={index * 200}>
                <Card className="p-8 h-full">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-zacon-corporate via-zacon-corporate-light to-zacon-navy shadow-glow overflow-hidden">
                        <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-white">
                          {partner.initials}
                        </div>
                      </div>
                    </div>
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

        </div>
      </section>
    </>
  );
}
