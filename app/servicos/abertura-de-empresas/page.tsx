import Link from "next/link";
import {
  Building2,
  CheckCircle,
  Phone,
  ArrowRight,
  FileText,
  Users,
  Shield,
  Clock,
} from "lucide-react";
import { Button } from "../../_components/ui/button";
import { AnimatedSection } from "../../_components/AnimatedSection";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getServiceSchema, getFAQSchema } from "@/lib/schema";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Abertura de Empresas em Florianópolis",
  description:
    "Serviço completo de abertura de empresas em Florianópolis. MEI, ME, LTDA, EIRELI. Registro na Junta Comercial, CNPJ, alvará e mais. Conte com mais de 15 anos de experiência.",
  keywords: [
    "abertura de empresa Florianópolis",
    "abrir empresa Florianópolis",
    "registro de empresa",
    "CNPJ Florianópolis",
    "MEI Florianópolis",
    "contador para abrir empresa",
  ],
  pathname: "/servicos/abertura-de-empresas",
});

const benefits = [
  {
    title: "Análise Personalizada",
    description:
      "Avaliamos seu perfil de negócio para definir o tipo societário e regime tributário mais vantajoso.",
    icon: Users,
  },
  {
    title: "Documentação Completa",
    description:
      "Cuidamos de toda a documentação necessária: contrato social, CNPJ, inscrições e alvarás.",
    icon: FileText,
  },
  {
    title: "Segurança Jurídica",
    description:
      "Sua empresa aberta de forma correta, evitando problemas futuros com órgãos fiscalizadores.",
    icon: Shield,
  },
  {
    title: "Agilidade no Processo",
    description:
      "Conhecemos os trâmites e prazos. Sua empresa pronta no menor tempo possível.",
    icon: Clock,
  },
];

const steps = [
  {
    number: "01",
    title: "Consulta Inicial",
    description:
      "Analisamos seu perfil, atividade e expectativas para definir a melhor estrutura.",
  },
  {
    number: "02",
    title: "Planejamento",
    description:
      "Definimos tipo societário, regime tributário e endereço fiscal adequados.",
  },
  {
    number: "03",
    title: "Documentação",
    description:
      "Elaboramos contrato social e coletamos todos os documentos necessários.",
  },
  {
    number: "04",
    title: "Registro",
    description:
      "Protocolo na Junta Comercial, Receita Federal, SEFAZ e Prefeitura.",
  },
  {
    number: "05",
    title: "Entrega",
    description:
      "Empresa pronta para operar com CNPJ, IE, IM e alvará de funcionamento.",
  },
];

const faqs = [
  {
    question: "Quanto custa para abrir uma empresa em Florianópolis?",
    answer:
      "O custo varia conforme o tipo de empresa e atividade. Inclui taxas de órgãos públicos e honorários contábeis. Entre em contato para um orçamento personalizado.",
  },
  {
    question: "Quanto tempo leva para abrir uma empresa?",
    answer:
      "O prazo médio é de 15 a 30 dias úteis, dependendo do tipo de empresa e da agilidade na entrega dos documentos necessários.",
  },
  {
    question: "Qual o melhor tipo de empresa para abrir?",
    answer:
      "Depende do seu perfil, faturamento esperado e se terá sócios. As opções incluem MEI, ME, EIRELI e LTDA. Fazemos uma análise completa para indicar a melhor opção.",
  },
  {
    question: "Posso abrir empresa no meu endereço residencial?",
    answer:
      "Depende da atividade e do zoneamento do imóvel. Para algumas atividades de baixo impacto, é possível. Caso contrário, oferecemos opções de endereço fiscal.",
  },
];

const WHATSAPP_NUMBER = "48988744359";

export default function AberturaEmpresasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Serviços", url: "/servicos" },
              { name: "Abertura de Empresas", url: "/servicos/abertura-de-empresas" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getServiceSchema({
              name: "Abertura de Empresas em Florianópolis",
              description:
                "Serviço completo de abertura de empresas em Florianópolis. MEI, ME, LTDA. Registro, CNPJ, alvará e mais.",
              url: "/servicos/abertura-de-empresas",
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
      <section className="bg-gradient-to-br from-zacon-primary to-zacon-primary-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full bg-zacon-secondary/20 px-4 py-2 text-sm text-zacon-secondary">
                <Building2 className="mr-2 h-4 w-4" />
                Serviço Especializado
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Abertura de Empresas em Florianópolis
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Abra sua empresa com quem tem mais de 15 anos de experiência.
                Cuidamos de toda a burocracia para você focar no seu negócio.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="secondary" asChild>
                  <a
                    href={getWhatsAppLink(
                      WHATSAPP_NUMBER,
                      "Olá! Quero abrir uma empresa em Florianópolis."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar Orçamento
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
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-primary sm:text-4xl">
                Por que abrir sua empresa com a ZACON?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Experiência, agilidade e segurança em todo o processo de
                abertura da sua empresa.
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 100}>
                <div className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-zacon-primary/10 text-zacon-primary">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-zacon-primary">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-bold text-zacon-primary">
                  O que está incluso?
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Nosso serviço de abertura de empresas é completo e inclui
                  todos os registros necessários para sua empresa começar a
                  operar legalmente em Florianópolis.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Elaboração do Contrato Social ou Requerimento de Empresário",
                    "Registro na Junta Comercial de Santa Catarina (JUCESC)",
                    "Obtenção do CNPJ junto à Receita Federal",
                    "Inscrição Estadual na SEFAZ/SC",
                    "Inscrição Municipal na Prefeitura de Florianópolis",
                    "Alvará de Funcionamento",
                    "Cadastro no INSS e Caixa Econômica (se necessário)",
                    "Orientação sobre obrigações fiscais e trabalhistas",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-zacon-secondary" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-zacon-primary">
                  Tipos de Empresa
                </h3>
                <p className="mt-2 text-gray-600">
                  Abrimos todos os tipos de empresa conforme sua necessidade:
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    {
                      type: "MEI",
                      desc: "Para autônomos com faturamento até R$ 81.000/ano",
                    },
                    {
                      type: "ME / EPP",
                      desc: "Microempresa e Empresa de Pequeno Porte",
                    },
                    {
                      type: "LTDA",
                      desc: "Sociedade Limitada com dois ou mais sócios",
                    },
                    {
                      type: "SLU",
                      desc: "Sociedade Limitada Unipessoal (antigo EIRELI)",
                    },
                    {
                      type: "S/A",
                      desc: "Sociedade Anônima para grandes empreendimentos",
                    },
                  ].map((item) => (
                    <div
                      key={item.type}
                      className="rounded-lg border border-gray-200 p-4"
                    >
                      <div className="font-semibold text-zacon-primary">
                        {item.type}
                      </div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-primary sm:text-4xl">
                Como Funciona?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Um processo simples e organizado para você.
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 100}>
                <div className="relative text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zacon-primary text-xl font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-zacon-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                  {index < steps.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-8 hidden h-6 w-6 text-gray-300 md:block" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-primary sm:text-4xl">
                Dúvidas Frequentes
              </h2>
            </div>
          </AnimatedSection>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-zacon-primary">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zacon-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Pronto para Abrir sua Empresa?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                Entre em contato agora e receba um orçamento personalizado para
                abertura da sua empresa em Florianópolis.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="whatsapp" asChild>
                  <a
                    href={getWhatsAppLink(
                      WHATSAPP_NUMBER,
                      "Olá! Quero abrir uma empresa em Florianópolis."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar Orçamento
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
