import {
  Award,
  Users,
  Target,
  Eye,
  Heart,
  CheckCircle,
  Shield,
  Handshake,
  Lightbulb,
  UserCheck,
  Quote,
} from "lucide-react";
import { AnimatedSection } from "../_components/AnimatedSection";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Sobre Nós",
  description:
    "Conheça a história da ZACON Contabilidade, fundada em 2009 por Jair Zanette. Mais de 15 anos de tradição, ética e compromisso com nossos clientes.",
  keywords: [
    "sobre zacon contabilidade",
    "história zacon",
    "contabilidade florianópolis",
    "escritório contábil florianópolis",
    "jair zanette",
    "jucelia alves de lima",
    "fernando bressan zanette",
  ],
  pathname: "/sobre",
});

const timeline = [
  {
    year: "2009",
    title: "Fundação da Zanette Contabilidade",
    description:
      "Jair Zanette (in memoriam) funda a Zanette Contabilidade com o propósito de oferecer um serviço contábil baseado na ética, na confiança e no compromisso com o crescimento de seus clientes. Os primeiros passos foram dados em um escritório montado na residência de seu fundador.",
    highlight: true,
  },
  {
    year: "2012",
    title: "Nascimento da Marca ZACON",
    description:
      "A contadora Jucélia Alves de Lima passa a integrar a equipe, trabalhando ao lado de Jair Zanette. A união de conhecimentos, experiência e valores marca uma nova fase da empresa. O escritório passa a se chamar ZACON Contabilidade, representando a evolução da marca e o fortalecimento de um projeto construído em parceria.",
    highlight: true,
  },
  {
    year: "2024",
    title: "Continuidade do Legado",
    description:
      "Após o falecimento do Sr. Jair, a ZACON é adquirida pela JF Contabilidade. Seu legado de honestidade, dedicação e respeito às pessoas permanece vivo em cada decisão, em cada atendimento e nos valores que continuam guiando a empresa.",
    highlight: true,
  },
  {
    year: "Hoje",
    title: "Nova Gestão, Mesmos Valores",
    description:
      "A contadora Jucélia Alves de Lima e o técnico em contabilidade Fernando Bressan Zanette, sócios da JF Contabilidade e proprietários da marca ZACON, dão continuidade ao sonho iniciado pelo Sr. Jair, unindo tradição, conhecimento, inovação e tecnologia.",
    highlight: false,
  },
];

const values = [
  {
    title: "Ética",
    description:
      "Conduzimos todas as nossas relações com integridade, transparência e respeito às normas e à legislação vigente.",
    icon: Heart,
  },
  {
    title: "Confiança",
    description:
      "Construímos relacionamentos sólidos baseados na honestidade e na entrega consistente de resultados.",
    icon: Handshake,
  },
  {
    title: "Responsabilidade",
    description:
      "Assumimos o compromisso com o sucesso de cada cliente como se fosse nosso próprio negócio.",
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
      "Unimos tradição com tecnologia para oferecer soluções modernas, eficientes e estratégicas.",
    icon: Lightbulb,
  },
  {
    title: "Transparência",
    description:
      "Mantemos nossos clientes sempre informados, com clareza em cada processo e decisão.",
    icon: Eye,
  },
];

const partners = [
  {
    name: "Jucélia Alves de Lima",
    role: "Contadora e Sócia",
    description:
      "Com formação em Ciências Contábeis e experiência de mais de uma década na ZACON, Jucélia é responsável pela gestão contábil e pelo relacionamento próximo com os clientes. Sua dedicação e expertise garantem um atendimento de excelência e soluções personalizadas para cada necessidade.",
    initials: "JL",
  },
  {
    name: "Fernando Bressan Zanette",
    role: "Técnico em Contabilidade e Sócio",
    description:
      "Fernando traz uma visão moderna e inovadora para a gestão da empresa, unindo tecnologia e eficiência aos processos contábeis. Seu compromisso com a qualidade e a satisfação dos clientes reflete os valores que sempre guiaram a ZACON.",
    initials: "FZ",
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

      {/* Hero */}
      <section className="bg-gradient-to-br from-zacon-primary to-zacon-primary-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Nossa História
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
                Desde 2009 construindo relações de confiança com nossos clientes.
                Conheça a trajetória da ZACON Contabilidade.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-bold text-zacon-primary">
                  Quem Somos
                </h2>
                <div className="mt-6 space-y-4 text-gray-600">
                  <p>
                    A <strong className="text-zacon-primary">ZACON Contabilidade</strong> é
                    uma empresa contábil que une tradição, atendimento humanizado,
                    tecnologia e soluções estratégicas para empresas e pessoas físicas.
                  </p>
                  <p>
                    Nossa história começou em 2009, quando{" "}
                    <strong>Jair Zanette (in memoriam)</strong> fundou a Zanette
                    Contabilidade com o propósito de oferecer um serviço contábil
                    baseado na ética, na confiança e no compromisso com o
                    crescimento de seus clientes.
                  </p>
                  <p>
                    Com muito trabalho, dedicação e um atendimento próximo e
                    personalizado, o Sr. Jair conquistou a confiança de
                    empresários da região, fazendo com que a empresa crescesse de
                    forma sólida.
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
              <div className="rounded-2xl bg-gradient-to-br from-zacon-primary to-zacon-primary-dark p-8 text-white">
                <Quote className="h-12 w-12 text-zacon-secondary opacity-50" />
                <blockquote className="mt-4 text-xl font-medium italic">
                  "Mais do que oferecer serviços contábeis, acreditamos em
                  construir relacionamentos duradouros, gerar segurança para a
                  tomada de decisões e contribuir para o crescimento sustentável
                  de nossos clientes."
                </blockquote>
                <div className="mt-6 border-t border-white/20 pt-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-zacon-secondary">
                        2009
                      </div>
                      <div className="mt-1 text-sm text-gray-300">Fundação</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-zacon-secondary">
                        +15
                      </div>
                      <div className="mt-1 text-sm text-gray-300">Anos de História</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-primary sm:text-4xl">
                Nossa Trajetória
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Os marcos que definiram a história da ZACON Contabilidade.
              </p>
            </div>
          </AnimatedSection>
          <div className="relative mt-16">
            <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-zacon-primary via-zacon-secondary to-zacon-primary rounded-full md:block" />
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
                      <div
                        className={`rounded-2xl border bg-white p-8 shadow-lg transition-all hover:shadow-xl ${
                          item.highlight
                            ? "border-zacon-secondary"
                            : "border-gray-100"
                        }`}
                      >
                        <div
                          className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-bold text-white ${
                            item.highlight
                              ? "bg-gradient-to-r from-zacon-secondary to-yellow-500"
                              : "bg-gradient-to-r from-zacon-primary to-zacon-primary-light"
                          }`}
                        >
                          {item.year}
                        </div>
                        <h3 className="mt-4 text-xl font-bold text-zacon-primary">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`z-10 my-6 flex h-12 w-12 items-center justify-center rounded-full shadow-lg md:my-0 ${
                        item.highlight
                          ? "bg-zacon-secondary"
                          : "bg-zacon-primary"
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

      {/* Mission, Vision */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <AnimatedSection>
              <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm h-full">
                <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-zacon-primary/10 text-zacon-primary">
                  <Target className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-zacon-primary">
                  Nossa Missão
                </h3>
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                  Oferecer serviços contábeis de excelência com atendimento
                  humanizado, contribuindo para o sucesso e crescimento
                  sustentável dos nossos clientes através de soluções
                  personalizadas, éticas e inovadoras.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm h-full">
                <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-zacon-secondary/10 text-zacon-secondary">
                  <Eye className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-zacon-primary">
                  Nossa Visão
                </h3>
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                  Ser reconhecida como referência em contabilidade pela
                  qualidade dos serviços, tradição construída ao longo dos anos
                  e inovação constante no atendimento ao cliente, mantendo
                  sempre o legado de confiança e ética.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-zacon-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Nossos Valores
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                Os princípios que guiam nossa atuação todos os dias.
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 text-center transition-all hover:bg-white/20">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-zacon-secondary/20 text-zacon-secondary">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-gray-300">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-primary sm:text-4xl">
                Nossa Equipe
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Conheça os profissionais que dão continuidade ao legado de
                excelência da ZACON Contabilidade.
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {partners.map((partner, index) => (
              <AnimatedSection key={partner.name} delay={index * 200}>
                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
                  <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
                    <div className="mb-6 h-28 w-28 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-zacon-primary to-zacon-primary-light sm:mb-0 sm:mr-6">
                      <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-white">
                        {partner.initials}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zacon-primary">
                        {partner.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-zacon-secondary">
                        {partner.role}
                      </p>
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={400}>
            <div className="mt-12 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 p-8">
              <div className="flex flex-col items-center text-center md:flex-row md:text-left">
                <div className="mb-6 flex-shrink-0 md:mb-0 md:mr-8">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-zacon-primary/10 text-zacon-primary">
                    <Heart className="h-10 w-10" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zacon-primary">
                    Em Memória de Jair Zanette
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    O legado de honestidade, dedicação e respeito às pessoas
                    deixado pelo fundador Jair Zanette permanece vivo em cada
                    decisão, em cada atendimento e nos valores que continuam
                    guiando a ZACON Contabilidade. Seu sonho de construir uma
                    empresa baseada na confiança e no compromisso com o
                    crescimento dos clientes segue sendo nossa maior inspiração.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
