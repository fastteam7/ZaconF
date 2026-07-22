import Link from "next/link";
import { Metadata } from "next";
import {
  MapPin,
  CheckCircle,
  Phone,
  MessageCircle,
  ArrowRight,
  Building2,
  Users,
  TrendingUp,
  Shield,
  Star,
  Clock,
  Award,
  Calculator,
  FileText,
  Briefcase,
  Heart,
  Zap,
} from "lucide-react";
import { Button } from "../_components/ui/button";
import { Card, CardContent } from "../_components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../_components/ui/accordion";
import { AnimatedSection } from "../_components/AnimatedSection";
import { Breadcrumb } from "../_components/Breadcrumb";
import { siteConfig } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/utils";

// Metadata otimizada para SEO Local - Ingleses
export const metadata: Metadata = {
  title: "Contabilidade em Ingleses Florianópolis | Contador em Ingleses | ZACON",
  description:
    "Escritório de contabilidade em Ingleses, Florianópolis. Abertura de empresas, MEI, imposto de renda, departamento pessoal e planejamento tributário. Atendimento presencial desde 2009. Ligue (48) 98874-4359.",
  keywords: [
    "contabilidade ingleses",
    "contabilidade em ingleses",
    "contador ingleses",
    "contador em ingleses",
    "contabilidade ingleses florianopolis",
    "contabilidade em ingleses florianopolis",
    "contador ingleses florianopolis",
    "escritório contabilidade ingleses",
    "abrir empresa ingleses",
    "abrir empresa em ingleses",
    "mei ingleses",
    "imposto de renda ingleses",
    "contabilidade ingleses do rio vermelho",
    "contador ingleses do rio vermelho",
    "zacon contabilidade ingleses",
  ],
  alternates: {
    canonical: `${siteConfig.url}/contabilidade-ingleses`,
  },
  openGraph: {
    title: "Contabilidade em Ingleses Florianópolis | ZACON Contabilidade",
    description:
      "Escritório de contabilidade localizado em Ingleses. Abertura de empresas, MEI, imposto de renda e planejamento tributário. Atendimento presencial desde 2009.",
    url: `${siteConfig.url}/contabilidade-ingleses`,
    siteName: "ZACON Contabilidade",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contabilidade em Ingleses | ZACON Contabilidade",
    description:
      "Escritório de contabilidade em Ingleses, Florianópolis. Atendimento presencial desde 2009.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "BR-SC",
    "geo.placename": "Ingleses do Rio Vermelho, Florianópolis",
    "geo.position": "-27.4492;-48.3989",
  },
};

const WHATSAPP_NUMBER = "48988744359";

// Serviços oferecidos em Ingleses
const servicos = [
  {
    title: "Abertura de Empresas",
    description: "MEI, ME, LTDA. Registro completo com CNPJ, alvará e inscrições.",
    icon: Building2,
    href: "/servicos/abertura-de-empresas",
  },
  {
    title: "Contabilidade Mensal",
    description: "Escrituração, balanços, demonstrações e análises gerenciais.",
    icon: Calculator,
    href: "/servicos/contabilidade-empresarial",
  },
  {
    title: "Departamento Pessoal",
    description: "Folha de pagamento, eSocial, admissões e rescisões.",
    icon: Users,
    href: "/servicos/departamento-pessoal",
  },
  {
    title: "Imposto de Renda",
    description: "Declaração PF completa, restituição e regularizações.",
    icon: FileText,
    href: "/servicos/imposto-de-renda",
  },
  {
    title: "Planejamento Tributário",
    description: "Estratégias legais para redução de impostos.",
    icon: TrendingUp,
    href: "/servicos/planejamento-tributario",
  },
  {
    title: "BPO Financeiro",
    description: "Terceirização do financeiro com gestão completa.",
    icon: Briefcase,
    href: "/servicos/bpo-financeiro",
  },
];

// Diferenciais do escritório em Ingleses
const diferenciais = [
  {
    icon: MapPin,
    title: "Localização Privilegiada",
    description: "Escritório no coração de Ingleses, sem necessidade de ir ao centro.",
  },
  {
    icon: Clock,
    title: "+15 Anos de Experiência",
    description: "Desde 2009 atendendo empresas e pessoas físicas em Florianópolis.",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cada cliente é único, com soluções personalizadas para seu negócio.",
  },
  {
    icon: Zap,
    title: "Tecnologia + Tradição",
    description: "Ferramentas modernas com o cuidado de uma contabilidade tradicional.",
  },
  {
    icon: Shield,
    title: "Segurança e Confiança",
    description: "Dados protegidos e relação de confiança construída ao longo dos anos.",
  },
  {
    icon: Award,
    title: "Equipe Qualificada",
    description: "Contadores registrados no CRC/SC com especialização em diversas áreas.",
  },
];

// FAQs específicas para Ingleses (otimizadas para SEO)
const faqs = [
  {
    question: "Onde fica o escritório de contabilidade da ZACON em Ingleses?",
    answer:
      "A ZACON Contabilidade está localizada na Rod. Armando Calil Bulos, 5785, em Ingleses do Rio Vermelho, Florianópolis - SC, CEP 88058-001. Estamos próximos ao centrinho de Ingleses, com fácil acesso e estacionamento disponível. Nosso horário de funcionamento é de segunda a sexta, das 8h às 18h.",
  },
  {
    question: "Quanto custa abrir uma empresa em Ingleses?",
    answer:
      "O custo para abertura de empresa em Ingleses varia conforme o tipo societário. Para MEI, o processo é gratuito. Para ME e LTDA, os custos incluem taxas de registro (Junta Comercial, CNPJ, alvará municipal) e honorários contábeis. Na ZACON, oferecemos um orçamento transparente e personalizado. Entre em contato pelo WhatsApp (48) 98874-4359 para uma consulta gratuita.",
  },
  {
    question: "A ZACON faz contabilidade para restaurantes em Ingleses?",
    answer:
      "Sim! Temos ampla experiência com restaurantes, bares, lanchonetes e estabelecimentos de alimentação em Ingleses. Conhecemos as particularidades do setor, como gestão de sazonalidade (alta temporada de verão), controle de estoque, obrigações da vigilância sanitária e melhores práticas tributárias para o ramo gastronômico.",
  },
  {
    question: "Vocês fazem imposto de renda em Ingleses?",
    answer:
      "Sim, fazemos declaração de imposto de renda pessoa física (IRPF) para moradores de Ingleses e região. Oferecemos atendimento presencial em nosso escritório ou remoto, conforme sua preferência. Também auxiliamos em casos de malha fina, retificações e regularizações junto à Receita Federal.",
  },
  {
    question: "A ZACON atende empresas de outros bairros além de Ingleses?",
    answer:
      "Sim! Embora nosso escritório esteja localizado em Ingleses, atendemos empresas e pessoas físicas de toda a Grande Florianópolis, incluindo Canasvieiras, Jurerê, Centro, Trindade, Lagoa da Conceição e outros bairros. Também oferecemos atendimento remoto para clientes de outras regiões de Santa Catarina.",
  },
  {
    question: "Qual o diferencial da ZACON em relação a outras contabilidades em Ingleses?",
    answer:
      "A ZACON se diferencia por estar localizada no próprio bairro de Ingleses há mais de 15 anos, oferecendo atendimento presencial sem necessidade de deslocamento ao centro. Nossa equipe conhece profundamente o mercado local, incluindo as particularidades do turismo e comércio sazonal. Além disso, prezamos pelo atendimento humanizado, onde cada cliente recebe atenção personalizada.",
  },
  {
    question: "Como funciona o atendimento da ZACON para empresas de Ingleses?",
    answer:
      "Oferecemos atendimento presencial em nosso escritório na Rod. Armando Calil Bulos, além de suporte por WhatsApp, e-mail e telefone. Nosso horário é de segunda a sexta, das 8h às 18h. Para novos clientes, oferecemos uma consulta inicial gratuita para entender suas necessidades e apresentar as melhores soluções.",
  },
  {
    question: "Vocês atendem MEI em Ingleses?",
    answer:
      "Sim! Oferecemos serviços completos para MEI em Ingleses, incluindo abertura gratuita, regularização, declaração anual (DASN-SIMEI), orientação sobre limites de faturamento e transição para ME quando necessário. Muitos dos nossos clientes MEI são comerciantes, prestadores de serviços e profissionais autônomos de Ingleses.",
  },
];

// Schema.org para página local
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": `${siteConfig.url}/contabilidade-ingleses#business`,
  name: "ZACON Contabilidade - Ingleses",
  alternateName: "ZACON Contabilidade Ingleses Florianópolis",
  description:
    "Escritório de contabilidade em Ingleses, Florianópolis. Abertura de empresas, MEI, imposto de renda, departamento pessoal e planejamento tributário. Atendimento presencial desde 2009.",
  url: `${siteConfig.url}/contabilidade-ingleses`,
  telephone: siteConfig.phoneInternational,
  email: siteConfig.email,
  foundingDate: "2009",
  priceRange: "$$",
  image: `${siteConfig.url}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: "Florianópolis",
    addressRegion: "SC",
    postalCode: siteConfig.address.zipCode,
    addressCountry: "BR",
    name: "Ingleses do Rio Vermelho",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.4492,
    longitude: -48.3989,
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Ingleses do Rio Vermelho",
      containedInPlace: {
        "@type": "City",
        name: "Florianópolis",
      },
    },
    {
      "@type": "City",
      name: "Florianópolis",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.linkedin,
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Contabilidade em Ingleses",
    itemListElement: servicos.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
      },
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contabilidade em Ingleses",
      item: `${siteConfig.url}/contabilidade-ingleses`,
    },
  ],
};

export default function ContabilidadeInglesesPage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ==========================================
          HERO SECTION - Contabilidade em Ingleses
          ========================================== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-zacon-black">
        <div className="absolute inset-0 bg-gradient-to-br from-zacon-black via-zacon-navy to-zacon-corporate-deep" />
        <div className="absolute inset-0 dot-pattern-light opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zacon-corporate/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zacon-accent/10 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <AnimatedSection>
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: "Contabilidade Ingleses", href: "/contabilidade-ingleses" },
                ]}
                className="text-zacon-silver-light mb-8"
              />

              {/* Badge de localização */}
              <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.1] px-5 py-2.5 mb-8">
                <MapPin className="h-4 w-4 text-zacon-accent-light" />
                <span className="text-sm font-medium text-white/90">
                  Ingleses do Rio Vermelho, Florianópolis - SC
                </span>
              </div>

              {/* H1 otimizado para SEO */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-white">Contabilidade em</span>{" "}
                <span className="text-gradient-silver">Ingleses</span>
                <span className="text-white block mt-2 text-3xl sm:text-4xl lg:text-5xl">
                  Florianópolis
                </span>
              </h1>

              {/* Subtítulo com keywords */}
              <p className="mt-8 text-lg sm:text-xl text-zacon-silver-light leading-relaxed max-w-2xl">
                Escritório de contabilidade localizado em Ingleses desde 2009.
                Abertura de empresas, MEI, imposto de renda, departamento pessoal
                e planejamento tributário com atendimento presencial e personalizado.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="premium" asChild>
                  <a
                    href={getWhatsAppLink(
                      WHATSAPP_NUMBER,
                      "Olá! Estou em Ingleses e preciso de contabilidade."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="xl" variant="outline-light" asChild>
                  <Link href="/contato">
                    <Phone className="mr-2 h-5 w-5" />
                    (48) 98874-4359
                  </Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-zacon-silver">
                  <Shield className="h-4 w-4 text-zacon-accent-light" />
                  <span>Dados protegidos</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zacon-silver">
                  <Award className="h-4 w-4 text-zacon-accent-light" />
                  <span>+15 anos em Ingleses</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zacon-silver">
                  <CheckCircle className="h-4 w-4 text-zacon-accent-light" />
                  <span>Resposta em 24h</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ==========================================
          SOBRE O ESCRITÓRIO EM INGLESES
          ========================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-zacon-navy mb-8">
                Escritório de Contabilidade em Ingleses: Conheça a ZACON
              </h2>
              <div className="prose prose-lg max-w-none text-zacon-graphite-light leading-relaxed space-y-6">
                <p>
                  A <strong>ZACON Contabilidade</strong> está localizada em <strong>Ingleses do Rio Vermelho</strong>,
                  o bairro mais populoso de Florianópolis com mais de 50 mil habitantes. Desde 2009,
                  oferecemos serviços contábeis completos para empresas e pessoas físicas da região,
                  com atendimento presencial e personalizado.
                </p>
                <p>
                  Nossa localização na <strong>Rod. Armando Calil Bulos, 5785</strong> permite que
                  empresários e profissionais de Ingleses tenham acesso a uma contabilidade de qualidade
                  sem precisar se deslocar até o centro de Florianópolis. Conhecemos profundamente o
                  mercado local, incluindo as particularidades do <strong>turismo</strong>,
                  <strong> gastronomia</strong> e <strong>comércio sazonal</strong> que caracterizam
                  a região norte da ilha.
                </p>
                <p>
                  Atendemos desde <strong>MEIs</strong> e pequenos comerciantes até <strong>restaurantes</strong>,
                  <strong> pousadas</strong>, <strong>profissionais liberais</strong> e
                  <strong> prestadores de serviços</strong>. Nossa equipe é formada por contadores
                  registrados no CRC/SC com especialização em diversas áreas da contabilidade.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==========================================
          SERVIÇOS EM INGLESES
          ========================================== */}
      <section className="py-20 lg:py-28 bg-zacon-light-ultra">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-zacon-navy">
                Serviços de Contabilidade em{" "}
                <span className="text-gradient">Ingleses</span>
              </h2>
              <p className="mt-4 text-lg text-zacon-graphite-light">
                Soluções contábeis completas para empresas e pessoas físicas de Ingleses e região.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicos.map((servico, index) => (
              <AnimatedSection key={servico.title} delay={index * 100}>
                <Link href={servico.href} className="group block h-full">
                  <Card className="h-full p-6 hover-lift">
                    <CardContent className="pt-2">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zacon-corporate/10 text-zacon-corporate transition-all duration-300 group-hover:bg-zacon-corporate group-hover:text-white">
                        <servico.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-zacon-navy group-hover:text-zacon-corporate transition-colors">
                        {servico.title}
                      </h3>
                      <p className="mt-2 text-zacon-graphite-light text-sm leading-relaxed">
                        {servico.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={600}>
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/servicos">
                  Ver Todos os Serviços
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==========================================
          DIFERENCIAIS
          ========================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-zacon-navy">
                  Por que escolher a ZACON para sua empresa em Ingleses?
                </h2>
                <p className="mt-6 text-lg text-zacon-graphite-light leading-relaxed">
                  Nosso escritório está localizado no próprio bairro de Ingleses,
                  oferecendo atendimento presencial sem necessidade de deslocamento
                  para outras regiões. Conhecemos profundamente o mercado local e
                  suas particularidades.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Escritório localizado em Ingleses desde 2009",
                    "Atendimento presencial e remoto",
                    "Equipe especializada em turismo e gastronomia",
                    "Preços justos e transparentes",
                    "Suporte para alta e baixa temporada",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-zacon-corporate flex-shrink-0" />
                      <span className="text-zacon-graphite-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Building2, label: "Empresas Atendidas", value: "500+" },
                  { icon: Clock, label: "Anos em Ingleses", value: "15+" },
                  { icon: TrendingUp, label: "Economia Gerada", value: "R$ 2M+" },
                  { icon: Star, label: "Satisfação", value: "98%" },
                ].map((stat, index) => (
                  <Card key={index} className="p-6 text-center hover-lift">
                    <stat.icon className="mx-auto h-8 w-8 text-zacon-corporate mb-3" />
                    <div className="text-3xl font-bold text-zacon-navy">{stat.value}</div>
                    <div className="text-sm text-zacon-graphite-muted">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==========================================
          DIFERENCIAIS GRID
          ========================================== */}
      <section className="py-20 lg:py-28 bg-zacon-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zacon-black via-zacon-navy to-zacon-corporate-deep" />
        <div className="absolute inset-0 dot-pattern-light opacity-15" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Diferenciais da ZACON em{" "}
                <span className="text-gradient-silver">Ingleses</span>
              </h2>
              <p className="mt-4 text-lg text-zacon-silver-light">
                O que nos torna a escolha certa para sua contabilidade em Ingleses.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {diferenciais.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                <Card className="p-6 h-full bg-white/[0.05] backdrop-blur-sm border-white/10 hover:bg-white/[0.08] transition-all">
                  <CardContent className="pt-2 text-center">
                    <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-zacon-accent-light">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-zacon-silver-light text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          FAQ - Perguntas Frequentes
          ========================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-zacon-corporate/5 border border-zacon-corporate/10 px-4 py-2 mb-6">
                <MessageCircle className="h-4 w-4 text-zacon-corporate" />
                <span className="text-sm font-semibold text-zacon-corporate uppercase tracking-wider">
                  Dúvidas Frequentes
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-zacon-navy">
                Perguntas sobre Contabilidade em Ingleses
              </h2>
              <p className="mt-4 text-lg text-zacon-graphite-light">
                Tire suas dúvidas sobre nossos serviços contábeis em Ingleses.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="mx-auto max-w-3xl">
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
          LOCALIZAÇÃO
          ========================================== */}
      <section className="py-20 lg:py-28 bg-zacon-light-ultra">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-zacon-navy">
                Localização do Escritório em{" "}
                <span className="text-gradient">Ingleses</span>
              </h2>
              <p className="mt-4 text-lg text-zacon-graphite-light">
                Venha nos visitar! Estamos no coração de Ingleses.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-bold text-zacon-navy mb-6">
                  ZACON Contabilidade - Ingleses
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-zacon-corporate mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-zacon-navy">Endereço</p>
                      <p className="text-zacon-graphite-light">
                        {siteConfig.address.street}
                        <br />
                        Ingleses do Rio Vermelho
                        <br />
                        Florianópolis - SC, {siteConfig.address.zipCode}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-zacon-corporate mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-zacon-navy">Horário</p>
                      <p className="text-zacon-graphite-light">
                        Segunda a Sexta: 8h às 18h
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-zacon-corporate mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-zacon-navy">Telefone / WhatsApp</p>
                      <p className="text-zacon-graphite-light">{siteConfig.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button size="lg" className="w-full" asChild>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${siteConfig.geo.latitude},${siteConfig.geo.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Ver no Google Maps
                    </a>
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-card h-[400px]">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.8!2d${siteConfig.geo.longitude}!3d${siteConfig.geo.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI2JzU3LjEiUyA0OMKwMjMnNTYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1625000000000!5m2!1spt-BR!2sbr`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização ZACON Contabilidade em Ingleses"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==========================================
          CTA FINAL
          ========================================== */}
      <section className="py-20 lg:py-28 bg-zacon-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zacon-black via-zacon-navy to-zacon-corporate-deep" />
        <div className="absolute inset-0 dot-pattern-light opacity-15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zacon-corporate/15 rounded-full blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Precisa de um contador em{" "}
                <span className="text-gradient-silver">Ingleses?</span>
              </h2>
              <p className="mt-6 text-lg text-zacon-silver-light">
                Entre em contato agora e receba um atendimento personalizado
                para sua empresa ou situação profissional em Ingleses.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="xl" variant="premium" asChild>
                  <a
                    href={getWhatsAppLink(
                      WHATSAPP_NUMBER,
                      "Olá! Estou em Ingleses e preciso de contabilidade. Gostaria de agendar uma consulta."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="xl" variant="outline-light" asChild>
                  <Link href="/contato">Enviar Mensagem</Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-zacon-silver">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-zacon-accent-light" />
                  Dados protegidos
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-zacon-accent-light" />
                  +15 anos em Ingleses
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
