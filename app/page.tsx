import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Calculator,
  FileText,
  Users,
  TrendingUp,
  Shield,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Heart,
  Handshake,
  Lightbulb,
  Eye,
  UserCheck,
  Briefcase,
  FileCheck,
  CreditCard,
  User,
  MessageCircle,
  Star,
  Target,
} from "lucide-react";
import { Button } from "./_components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./_components/ui/card";
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
  title: "Contabilidade em Florianópolis há mais de 15 anos",
  description:
    "ZACON Contabilidade - Desde 2009 construindo relações de confiança. Tradição, atendimento humanizado e soluções contábeis modernas para empresas e pessoas físicas.",
  pathname: "/",
});

const services = [
  {
    title: "Abertura de Empresas",
    description:
      "Constituição, alterações contratuais, encerramentos e regularizações.",
    icon: Building2,
    href: "/servicos/abertura-de-empresas",
  },
  {
    title: "Contabilidade Geral",
    description:
      "Escrituração, demonstrações contábeis, balanços e análises gerenciais.",
    icon: Calculator,
    href: "/servicos/contabilidade-empresarial",
  },
  {
    title: "Departamento Pessoal",
    description:
      "Admissões, demissões, folha de pagamento, eSocial e FGTS.",
    icon: Users,
    href: "/servicos/departamento-pessoal",
  },
  {
    title: "Imposto de Renda PF",
    description:
      "Declaração, regularizações, malha fina e retificações.",
    icon: FileText,
    href: "/servicos/imposto-de-renda",
  },
  {
    title: "Planejamento Tributário",
    description:
      "Consultoria estratégica para redução legal de impostos.",
    icon: TrendingUp,
    href: "/servicos/planejamento-tributario",
  },
  {
    title: "BPO Financeiro",
    description:
      "Terceirização do financeiro com controle total e relatórios.",
    icon: Shield,
    href: "/servicos/bpo-financeiro",
  },
];

const values = [
  {
    title: "Ética",
    description:
      "Conduzimos todas as nossas relações com integridade, transparência e respeito às normas.",
    icon: Heart,
  },
  {
    title: "Confiança",
    description:
      "Construímos relacionamentos sólidos baseados na honestidade e na entrega consistente.",
    icon: Handshake,
  },
  {
    title: "Responsabilidade",
    description:
      "Assumimos o compromisso com o sucesso de cada cliente como se fosse nosso próprio.",
    icon: Shield,
  },
  {
    title: "Atendimento Humanizado",
    description:
      "Cada cliente é único e merece um acompanhamento próximo, transparente e personalizado.",
    icon: UserCheck,
  },
  {
    title: "Inovação",
    description:
      "Unimos tradição com tecnologia para oferecer soluções modernas e eficientes.",
    icon: Lightbulb,
  },
  {
    title: "Transparência",
    description:
      "Mantemos nossos clientes sempre informados, com clareza em cada processo.",
    icon: Eye,
  },
];

const differentials = [
  {
    title: "Atendimento Personalizado",
    description:
      "Cada cliente é tratado de forma única, com soluções sob medida para suas necessidades.",
    icon: UserCheck,
  },
  {
    title: "Equipe Experiente",
    description:
      "Profissionais qualificados com mais de 15 anos de experiência no mercado contábil.",
    icon: Award,
  },
  {
    title: "Tecnologia Aplicada",
    description:
      "Utilizamos ferramentas modernas para agilizar processos e entregar resultados.",
    icon: Lightbulb,
  },
  {
    title: "Suporte Consultivo",
    description:
      "Mais que contabilidade, oferecemos orientação estratégica para seu negócio.",
    icon: Target,
  },
  {
    title: "Planejamento Tributário",
    description:
      "Estratégias legais para otimização fiscal e redução de custos.",
    icon: TrendingUp,
  },
  {
    title: "Relacionamento de Longo Prazo",
    description:
      "Construímos parcerias duradouras baseadas na confiança e resultados.",
    icon: Handshake,
  },
];

const partners = [
  {
    name: "Jucélia Alves de Lima",
    role: "Contadora e Sócia",
    description:
      "Desde 2012 na ZACON, Jucélia é responsável pela gestão contábil e pelo relacionamento com clientes. Sua experiência e dedicação garantem um atendimento de excelência.",
    image: "/team/jucelia.jpg",
  },
  {
    name: "Fernando Bressan Zanette",
    role: "Técnico em Contabilidade e Sócio",
    description:
      "Fernando traz uma visão moderna e inovadora para a gestão da empresa, unindo tecnologia e eficiência aos processos contábeis.",
    image: "/team/fernando.jpg",
  },
];

const timeline = [
  {
    year: "2009",
    title: "Fundação",
    description:
      "Jair Zanette (in memoriam) funda a Zanette Contabilidade com propósito de oferecer serviço contábil baseado na ética, confiança e compromisso.",
  },
  {
    year: "2012",
    title: "Nascimento da ZACON",
    description:
      "Jucélia Alves de Lima integra a equipe e nasce a marca ZACON Contabilidade, representando a evolução e fortalecimento do projeto.",
  },
  {
    year: "2024",
    title: "Continuidade do Legado",
    description:
      "Após o falecimento do Sr. Jair, a ZACON é adquirida pela JF Contabilidade, mantendo vivo seu legado de honestidade e dedicação.",
  },
  {
    year: "Hoje",
    title: "Nova Gestão",
    description:
      "Jucélia Alves de Lima e Fernando Bressan Zanette lideram a empresa, unindo tradição, inovação e tecnologia.",
  },
];

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
      "A ZACON Contabilidade foi fundada em 2009 por Jair Zanette, tendo mais de 15 anos de experiência no mercado contábil. Hoje é gerida por Jucélia Alves de Lima e Fernando Bressan Zanette, mantendo a tradição de excelência.",
  },
  {
    question: "Como posso entrar em contato?",
    answer:
      "Você pode entrar em contato pelo WhatsApp (48) 98874-4359, pelo e-mail contato@zacon.com.br ou através do formulário em nosso site. Estamos localizados na Rod. Armando Calil Bulos, 5785 - Ingleses do Rio Vermelho, Florianópolis.",
  },
  {
    question: "A ZACON trabalha com MEI?",
    answer:
      "Sim! Oferecemos serviços especializados para MEI incluindo abertura, regularização, declaração anual (DASN-SIMEI), orientação sobre limites de faturamento e transição para ME quando necessário.",
  },
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zacon-primary via-zacon-primary-dark to-zacon-primary py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zacon-primary-dark/50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div className="text-center lg:text-left">
                <div className="mb-6 inline-flex items-center rounded-full bg-zacon-secondary/20 px-4 py-2 text-sm font-medium text-zacon-secondary">
                  <Award className="mr-2 h-4 w-4" />
                  Desde 2009 construindo relações de confiança
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Há mais de 15 anos ajudando{" "}
                  <span className="text-zacon-secondary">empresas e pessoas</span>{" "}
                  a crescer com segurança.
                </h1>
                <p className="mt-6 text-lg text-gray-300 lg:text-xl">
                  Tradição, confiança, atendimento humanizado e soluções
                  contábeis modernas para o seu negócio.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <Button size="xl" variant="whatsapp" asChild>
                    <a
                      href={getWhatsAppLink(
                        WHATSAPP_NUMBER,
                        "Olá! Gostaria de falar com um contador da ZACON."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Falar no WhatsApp
                    </a>
                  </Button>
                  <Button
                    size="xl"
                    variant="secondary"
                    asChild
                  >
                    <Link href="/contato">
                      <Phone className="mr-2 h-5 w-5" />
                      Solicitar Atendimento
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-center">
                    <div className="text-4xl font-bold text-zacon-secondary">
                      2009
                    </div>
                    <div className="mt-2 text-sm text-gray-300">Desde</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-center">
                    <div className="text-4xl font-bold text-zacon-secondary">
                      +15
                    </div>
                    <div className="mt-2 text-sm text-gray-300">Anos de Experiência</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-center">
                    <div className="text-4xl font-bold text-zacon-secondary">
                      <UserCheck className="mx-auto h-10 w-10" />
                    </div>
                    <div className="mt-2 text-sm text-gray-300">Atendimento Humanizado</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-center">
                    <div className="text-4xl font-bold text-zacon-secondary">
                      <Briefcase className="mx-auto h-10 w-10" />
                    </div>
                    <div className="mt-2 text-sm text-gray-300">Empresas e PF</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          {/* Mobile indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:hidden">
            <div className="text-center">
              <div className="text-2xl font-bold text-zacon-secondary">
                2009
              </div>
              <div className="text-xs text-gray-300">Desde</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-zacon-secondary">
                +15 anos
              </div>
              <div className="text-xs text-gray-300">Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-zacon-secondary">
                <UserCheck className="mx-auto h-6 w-6" />
              </div>
              <div className="text-xs text-gray-300">Humanizado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - História */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-primary sm:text-4xl">
                Nossa História
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
                Uma trajetória construída com dedicação, ética e compromisso.
                Conheça os marcos que definiram a ZACON Contabilidade.
              </p>
            </div>
          </AnimatedSection>
          <div className="relative mt-16">
            <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-zacon-primary via-zacon-secondary to-zacon-primary md:block" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection key={item.year} delay={index * 150}>
                  <div
                    className={`flex flex-col items-center md:flex-row ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-full md:w-5/12 ${
                        index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                      }`}
                    >
                      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
                        <div className="inline-flex items-center rounded-full bg-gradient-to-r from-zacon-primary to-zacon-primary-light px-4 py-1.5 text-sm font-bold text-white">
                          {item.year}
                        </div>
                        <h3 className="mt-4 text-xl font-bold text-zacon-primary">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="z-10 my-6 flex h-10 w-10 items-center justify-center rounded-full bg-zacon-secondary shadow-lg md:my-0">
                      <div className="h-4 w-4 rounded-full bg-white" />
                    </div>
                    <div className="hidden w-5/12 md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <AnimatedSection delay={600}>
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/sobre">
                  Conheça Nossa História Completa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-primary sm:text-4xl">
                Nossos Valores
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Os princípios que guiam cada decisão e cada atendimento na ZACON.
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:border-zacon-primary hover:shadow-lg">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-zacon-primary/10 text-zacon-primary transition-colors group-hover:bg-zacon-primary group-hover:text-white">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-zacon-primary">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-gray-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-primary sm:text-4xl">
                Nossos Serviços
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Soluções contábeis completas para empresas de todos os portes e
                pessoas físicas.
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <Link href={service.href} className="group block h-full">
                  <Card className="h-full transition-all hover:border-zacon-primary hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-zacon-primary/10 text-zacon-primary transition-colors group-hover:bg-zacon-primary group-hover:text-white">
                        <service.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="group-hover:text-zacon-primary-light">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{service.description}</p>
                      <div className="mt-4 flex items-center text-sm font-medium text-zacon-primary">
                        Saiba mais
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={600}>
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/servicos">Ver Todos os Serviços</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="bg-zacon-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Por Que Escolher a ZACON?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                Diferenciais que fazem da ZACON a escolha certa para sua
                contabilidade.
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {differentials.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 text-center transition-all hover:bg-white/20">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-zacon-secondary/20 text-zacon-secondary">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-300">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners/Team Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-primary sm:text-4xl">
                Nossa Equipe
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Conheça os profissionais que dão continuidade ao legado de
                excelência da ZACON.
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {partners.map((partner, index) => (
              <AnimatedSection key={partner.name} delay={index * 200}>
                <div className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 shadow-lg sm:flex-row sm:items-start">
                  <div className="mb-6 h-32 w-32 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-zacon-primary to-zacon-primary-light sm:mb-0 sm:mr-6">
                    <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-white">
                      {partner.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-zacon-primary">
                      {partner.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-zacon-secondary">
                      {partner.role}
                    </p>
                    <p className="mt-4 text-gray-600">{partner.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={400}>
            <div className="mt-12 rounded-2xl bg-gray-50 p-8 text-center">
              <p className="text-lg text-gray-600">
                <span className="font-semibold text-zacon-primary">
                  Continuidade do Legado:
                </span>{" "}
                O legado de honestidade, dedicação e respeito às pessoas deixado
                por Jair Zanette (in memoriam) permanece vivo em cada decisão e
                em cada atendimento da ZACON.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-primary sm:text-4xl">
                Perguntas Frequentes
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Tire suas dúvidas sobre nossos serviços e funcionamento.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="mx-auto mt-12 max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-zacon-primary to-zacon-primary-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Vamos cuidar da contabilidade enquanto você cuida do crescimento
                do seu negócio.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
                Entre em contato agora mesmo e descubra como podemos ajudar sua
                empresa a crescer com segurança e tranquilidade.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="whatsapp" asChild>
                  <a
                    href={getWhatsAppLink(
                      WHATSAPP_NUMBER,
                      "Olá! Gostaria de solicitar uma proposta."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-zacon-primary"
                  asChild
                >
                  <Link href="/contato">Solicitar Proposta</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
