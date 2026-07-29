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
  Sparkles,
} from "lucide-react";
import { Button } from "../../_components/ui/button";
import { AnimatedSection } from "../../_components/AnimatedSection";
import { BreadcrumbDark } from "../../_components/Breadcrumb";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getServiceSchema, getFAQSchema, getHowToSchema } from "@/lib/schema";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Abertura de Empresas em Florianópolis",
  description:
    "Abertura de empresas em Florianópolis: MEI, ME, LTDA. CNPJ, alvará e Junta Comercial. Mais de 15 anos de experiência.",
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
      "O custo total varia de R$ 500 (MEI gratuito + honorários) a R$ 2.500 ou mais (LTDA com atividades especiais). Inclui taxas da Junta Comercial (~R$ 160), Receita Federal (gratuito), Prefeitura (~R$ 200-500) e honorários contábeis. Solicite um orçamento detalhado para sua atividade específica.",
  },
  {
    question: "Quanto tempo leva para abrir uma empresa?",
    answer:
      "MEI: 1 a 2 dias úteis. ME/LTDA no Simples Nacional: 7 a 15 dias úteis. Empresas com atividades reguladas (saúde, alimentos, etc.): 20 a 45 dias. O prazo depende da agilidade na entrega de documentos e da complexidade das licenças necessárias.",
  },
  {
    question: "Qual o melhor tipo de empresa para abrir?",
    answer:
      "MEI: faturamento até R$ 81.000/ano, sem sócios, atividades permitidas. ME Simples Nacional: até R$ 360.000/ano, impostos unificados. LTDA: a partir de 2 sócios ou SLU (unipessoal). Analisamos seu perfil, faturamento projetado e atividade para indicar a opção mais vantajosa tributariamente.",
  },
  {
    question: "Posso abrir empresa no meu endereço residencial?",
    answer:
      "Sim, para atividades de baixo impacto (consultoria, serviços digitais, etc.) em imóveis residenciais. Florianópolis permite desde que não haja circulação de clientes/funcionários. Atividades comerciais ou industriais precisam de ponto comercial. Oferecemos endereço fiscal se necessário.",
  },
  {
    question: "Quais documentos preciso para abrir uma empresa?",
    answer:
      "Pessoa física: RG, CPF, comprovante de residência, certidão de casamento (se aplicável). Para o imóvel: carnê IPTU, contrato de locação ou escritura. Dependendo da atividade: diplomas, certificados ou habilitações profissionais. Preparamos uma lista personalizada após a consulta inicial.",
  },
  {
    question: "MEI pode ter funcionário?",
    answer:
      "Sim, o MEI pode contratar até 1 funcionário que receba o salário mínimo ou o piso da categoria. O custo adicional é de aproximadamente 11% sobre o salário (3% INSS patronal + 8% FGTS). A ZACON cuida do registro e da folha de pagamento deste funcionário.",
  },
  {
    question: "Qual a diferença entre ME e EPP?",
    answer:
      "ME (Microempresa): faturamento até R$ 360.000/ano. EPP (Empresa de Pequeno Porte): de R$ 360.000 a R$ 4.800.000/ano. Ambas podem optar pelo Simples Nacional. A principal diferença está nos limites de faturamento e nas faixas de alíquotas aplicáveis.",
  },
  {
    question: "Vocês ajudam a escolher o regime tributário?",
    answer:
      "Sim, a análise do regime tributário (Simples Nacional, Lucro Presumido ou Lucro Real) faz parte do nosso serviço de abertura. Simulamos cenários para indicar a opção que resultará em menor carga tributária para sua atividade e faturamento projetado.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getHowToSchema({
              name: "Como abrir uma empresa em Florianópolis",
              description: "Passo a passo completo para abrir sua empresa em Florianópolis com a ZACON Contabilidade",
              totalTime: "P30D",
              steps: steps.map((step) => ({
                name: step.title,
                text: step.description,
              })),
            })
          ),
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
              {/* Breadcrumb */}
              <BreadcrumbDark
                items={[
                  { label: "Serviços", href: "/servicos" },
                  { label: "Abertura de Empresas", href: "/servicos/abertura-de-empresas" },
                ]}
                className="justify-center mb-8"
              />
              <div className="mb-6 inline-flex items-center rounded-full border border-zacon-corporate/30 bg-zacon-corporate/10 px-4 py-2 text-sm text-zacon-corporate-light">
                <Sparkles className="mr-2 h-4 w-4" />
                Serviço Especializado
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Abertura de Empresas em Florianópolis
              </h1>

              {/* Resposta direta AEO */}
              <div className="mt-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-left max-w-2xl mx-auto">
                <p className="text-lg text-white leading-relaxed">
                  <strong>O que é:</strong> Serviço completo de constituição de empresas, incluindo registro na Junta Comercial, CNPJ, inscrições estadual/municipal e alvará.
                </p>
                <p className="mt-3 text-lg text-zacon-silver-light leading-relaxed">
                  <strong>Para quem:</strong> Empreendedores, profissionais liberais e empresários que querem formalizar seu negócio em Florianópolis.
                </p>
                <p className="mt-3 text-lg text-zacon-silver-light leading-relaxed">
                  <strong>Investimento:</strong> A partir de R$ 500 (MEI) a R$ 2.500+ (LTDA), incluindo taxas e honorários.
                </p>
                <p className="mt-3 text-lg text-zacon-silver-light leading-relaxed">
                  <strong>Prazo:</strong> MEI em 1-2 dias. ME/LTDA em 7-15 dias úteis.
                </p>
              </div>

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
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">
                Por que abrir sua empresa com a ZACON?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zacon-graphite-light">
                Experiência, agilidade e segurança em todo o processo de
                abertura da sua empresa.
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 100}>
                <div className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-zacon-navy/10 text-zacon-navy">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-zacon-navy">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-zacon-graphite-light">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-zacon-light-soft py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-bold text-zacon-navy">
                  O que está incluso?
                </h2>
                <p className="mt-4 text-lg text-zacon-graphite-light">
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
                      <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-zacon-corporate" />
                      <span className="text-zacon-graphite-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-zacon-navy">
                  Tipos de Empresa
                </h3>
                <p className="mt-2 text-zacon-graphite-light">
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
                      <div className="font-semibold text-zacon-navy">
                        {item.type}
                      </div>
                      <div className="text-sm text-zacon-graphite-light">{item.desc}</div>
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
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">
                Como Funciona?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zacon-graphite-light">
                Um processo simples e organizado para você.
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 100}>
                <div className="relative text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zacon-navy text-xl font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-zacon-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-zacon-graphite-light">{step.description}</p>
                  {index < steps.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-8 hidden h-6 w-6 text-zacon-silver-light md:block" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zacon-light-soft py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">
                Dúvidas Frequentes
              </h2>
            </div>
          </AnimatedSection>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-zacon-navy">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-zacon-graphite-light">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Links internos */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">
                Serviços relacionados
              </h2>
              <p className="mt-4 text-lg text-zacon-graphite-light">
                Após abrir sua empresa, você vai precisar de contabilidade mensal e gestão de pessoal.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            <AnimatedSection delay={100}>
              <Link
                href="/servicos/contabilidade-empresarial"
                className="block rounded-xl border border-zacon-light p-6 hover:border-zacon-corporate hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-zacon-navy group-hover:text-zacon-corporate">
                  Contabilidade Empresarial
                </h3>
                <p className="mt-2 text-sm text-zacon-graphite-light">
                  Escrituração contábil e fiscal para sua empresa recém-aberta.
                </p>
                <span className="mt-4 inline-flex items-center text-sm text-zacon-corporate font-medium">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Link
                href="/servicos/planejamento-tributario"
                className="block rounded-xl border border-zacon-light p-6 hover:border-zacon-corporate hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-zacon-navy group-hover:text-zacon-corporate">
                  Planejamento Tributário
                </h3>
                <p className="mt-2 text-sm text-zacon-graphite-light">
                  Escolha do melhor regime tributário para pagar menos impostos.
                </p>
                <span className="mt-4 inline-flex items-center text-sm text-zacon-corporate font-medium">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Link
                href="/servicos/departamento-pessoal"
                className="block rounded-xl border border-zacon-light p-6 hover:border-zacon-corporate hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-zacon-navy group-hover:text-zacon-corporate">
                  Departamento Pessoal
                </h3>
                <p className="mt-2 text-sm text-zacon-graphite-light">
                  Quando contratar funcionários, cuidamos de toda a gestão de pessoal.
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
                Pronto para Abrir sua Empresa?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zacon-silver-light">
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
