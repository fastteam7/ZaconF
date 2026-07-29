import Link from "next/link";
import {
  Users,
  CheckCircle,
  Phone,
  FileText,
  Shield,
  Clock,
  Sparkles,
  Calculator,
  AlertTriangle,
  TrendingUp,
  Calendar,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import { Button } from "../../_components/ui/button";
import { AnimatedSection } from "../../_components/AnimatedSection";
import { BreadcrumbDark } from "../../_components/Breadcrumb";
import { constructMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
  getHowToSchema,
} from "@/lib/schema";
import { getWhatsAppLink } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../_components/ui/accordion";

export const metadata = constructMetadata({
  title: "Departamento Pessoal e Folha de Pagamento em Florianópolis | ZACON",
  description:
    "Departamento pessoal e folha de pagamento em Florianópolis. Admissões, rescisões, eSocial, FGTS e encargos. Desde 2009.",
  keywords: [
    "departamento pessoal Florianópolis",
    "folha de pagamento Florianópolis",
    "terceirização DP",
    "eSocial",
    "FGTS",
    "admissão funcionários",
    "rescisão trabalhista",
    "holerite",
    "encargos sociais",
  ],
  pathname: "/servicos/departamento-pessoal",
});

const benefits = [
  {
    title: "Gestão Completa",
    description:
      "Toda a rotina trabalhista da sua empresa em um só lugar: admissões, folha, férias, rescisões e encargos.",
    icon: Users,
  },
  {
    title: "eSocial em Dia",
    description:
      "Envio correto e pontual de todas as obrigações ao eSocial, evitando multas que podem chegar a R$ 42.564,00.",
    icon: FileText,
  },
  {
    title: "Conformidade Legal",
    description:
      "Cálculos precisos de INSS, FGTS, IRRF e demais encargos conforme legislação vigente (CLT e convenções coletivas).",
    icon: Shield,
  },
  {
    title: "Prazo Garantido",
    description:
      "Folha processada e disponível até o dia 25 de cada mês, guias de recolhimento prontas para pagamento no prazo.",
    icon: Clock,
  },
];

const dpServices = [
  "Registro e admissão de funcionários",
  "Elaboração de contratos de trabalho",
  "Rescisão contratual (cálculos e homologação)",
  "Controle e cálculo de férias individuais e coletivas",
  "Cálculo de 13º salário (1ª e 2ª parcela)",
  "Gestão de afastamentos (INSS, licenças)",
  "Controle de exames admissionais e periódicos",
  "Emissão de declarações e documentos trabalhistas",
];

const folhaServices = [
  "Processamento mensal da folha de pagamento",
  "Cálculo de horas extras, adicionais e DSR",
  "Adicional noturno, insalubridade e periculosidade",
  "Descontos legais (INSS, IRRF, VT, faltas, atrasos)",
  "Emissão de holerites digitais",
  "Guias de recolhimento (GPS, DARF, FGTS)",
  "Provisão contábil de férias e 13º",
  "Relatórios gerenciais de custos com pessoal",
];

const esocialObrigacoes = [
  "S-2200 - Admissão de trabalhador",
  "S-2206 - Alteração de contrato",
  "S-2230 - Afastamento temporário",
  "S-2299 - Desligamento",
  "S-1200 - Remuneração mensal",
  "S-1210 - Pagamentos diversos",
  "DCTF Web mensal",
  "RAIS e DIRF anuais",
];

const faqs = [
  {
    question: "Quanto custa terceirizar o departamento pessoal?",
    answer:
      "O valor varia conforme o número de funcionários e a complexidade da folha. Em média, empresas em Florianópolis pagam entre R$ 50 e R$ 80 por funcionário/mês para uma gestão completa de DP. Solicite um orçamento personalizado para sua empresa.",
  },
  {
    question: "Qual o prazo para processar admissões e rescisões?",
    answer:
      "Admissões devem ser comunicadas ao eSocial até 1 dia antes do início do trabalho. Rescisões têm prazo de até 10 dias para pagamento das verbas. Na ZACON, processamos admissões em até 24 horas úteis e rescisões em até 48 horas, garantindo conformidade com os prazos legais.",
  },
  {
    question: "O que acontece se atrasar o eSocial?",
    answer:
      "O atraso no envio de eventos ao eSocial pode gerar multas significativas: até R$ 3.000 por evento não enviado para empresas do Lucro Real/Presumido, e R$ 600 para Simples Nacional. Além disso, eventos trabalhistas como admissão e desligamento têm multas específicas que podem chegar a R$ 42.564,00.",
  },
  {
    question: "A ZACON cuida das obrigações anuais também?",
    answer:
      "Sim. Além das obrigações mensais, cuidamos da RAIS (Relação Anual de Informações Sociais), DIRF (Declaração do Imposto de Renda Retido na Fonte), informe de rendimentos dos funcionários e todas as obrigações acessórias trabalhistas.",
  },
  {
    question: "Como funciona a transição do DP para a ZACON?",
    answer:
      "O processo é simples: 1) Recebemos a documentação atual dos funcionários; 2) Importamos os dados para nosso sistema; 3) Fazemos a conciliação com o eSocial; 4) Assumimos a gestão no mês seguinte. Todo o processo leva em média 5 a 10 dias úteis.",
  },
  {
    question: "Vocês atendem empresas de qual porte?",
    answer:
      "Atendemos desde MEIs que estão contratando o primeiro funcionário até empresas com dezenas de colaboradores. Nossa estrutura permite escalar o atendimento conforme o crescimento da sua empresa, mantendo a mesma qualidade e atenção personalizada.",
  },
  {
    question: "Como recebo os holerites e relatórios?",
    answer:
      "Os holerites são enviados digitalmente por e-mail ou disponibilizados em portal online até o dia 25 de cada mês. Relatórios gerenciais (custo de pessoal, provisões, encargos) são enviados junto com a folha processada para acompanhamento da gestão.",
  },
  {
    question: "E se eu tiver dúvidas trabalhistas durante o mês?",
    answer:
      "Você tem acesso direto à nossa equipe de DP por WhatsApp e e-mail para tirar dúvidas sobre férias, rescisões, adicional de hora extra, convenção coletiva e qualquer outra questão trabalhista. Respondemos em até 4 horas úteis.",
  },
];

const howToSteps = [
  {
    name: "Envio de informações",
    text: "Você nos envia as informações de ponto, admissões, férias e eventos do mês até o dia 20.",
  },
  {
    name: "Processamento da folha",
    text: "Nossa equipe processa a folha com todos os cálculos, descontos e encargos até o dia 23.",
  },
  {
    name: "Conferência e aprovação",
    text: "Você recebe a prévia da folha para conferência e aprovação até o dia 24.",
  },
  {
    name: "Geração de documentos",
    text: "Após aprovação, geramos holerites, guias de recolhimento e relatórios até o dia 25.",
  },
  {
    name: "Envio ao eSocial",
    text: "Transmitimos todos os eventos obrigatórios ao eSocial dentro dos prazos legais.",
  },
];

const WHATSAPP_NUMBER = "48988744359";

export default function DepartamentoPessoalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Serviços", url: "/servicos" },
              {
                name: "Departamento Pessoal",
                url: "/servicos/departamento-pessoal",
              },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getServiceSchema({
              name: "Departamento Pessoal e Folha de Pagamento em Florianópolis",
              description:
                "Gestão completa de rotinas trabalhistas: admissões, folha de pagamento, férias, rescisões, eSocial e encargos sociais para empresas em Florianópolis.",
              url: "/servicos/departamento-pessoal",
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
              name: "Como funciona o processamento de folha de pagamento",
              description:
                "Passo a passo do processamento mensal de folha de pagamento na ZACON Contabilidade",
              steps: howToSteps,
            })
          ),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-zacon-navy py-20 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-zacon-corporate/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-zacon-accent/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BreadcrumbDark
            items={[
              { label: "Serviços", href: "/servicos" },
              { label: "Departamento Pessoal", href: "/servicos/departamento-pessoal" },
            ]}
            className="mb-8"
          />

          <AnimatedSection>
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-zacon-corporate/30 bg-zacon-corporate/10 px-4 py-2 text-sm text-zacon-corporate-light">
                <Sparkles className="mr-2 h-4 w-4" />
                Departamento Pessoal + Folha de Pagamento
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                Departamento Pessoal e Folha de Pagamento em Florianópolis
              </h1>

              {/* Resposta direta AEO */}
              <div className="mt-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                <p className="text-lg text-white leading-relaxed">
                  <strong>O que é:</strong> Terceirização completa das rotinas trabalhistas da sua empresa, incluindo admissões, processamento de folha, férias, rescisões e todas as obrigações do eSocial.
                </p>
                <p className="mt-4 text-lg text-zacon-silver-light leading-relaxed">
                  <strong>Para quem:</strong> Empresas de todos os portes em Florianópolis que precisam de gestão profissional de funcionários CLT.
                </p>
                <p className="mt-4 text-lg text-zacon-silver-light leading-relaxed">
                  <strong>Investimento:</strong> A partir de R$ 50/funcionário por mês (varia conforme complexidade).
                </p>
                <p className="mt-4 text-lg text-zacon-silver-light leading-relaxed">
                  <strong>Prazo:</strong> Assumimos a gestão em até 10 dias úteis após contratação.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="secondary" asChild>
                  <a
                    href={getWhatsAppLink(
                      WHATSAPP_NUMBER,
                      "Olá! Preciso de orçamento para departamento pessoal e folha de pagamento."
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
                  <Link href="/contato">
                    Falar com Especialista
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Dores do público */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">
                Os desafios que resolvemos para você
              </h2>
              <p className="mt-4 text-lg text-zacon-graphite-light">
                Gerir funcionários exige conhecimento técnico, atenção aos prazos e atualização constante da legislação.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={100}>
              <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                <AlertTriangle className="h-8 w-8 text-red-500 mb-4" />
                <h3 className="font-bold text-zacon-navy">Multas do eSocial</h3>
                <p className="mt-2 text-zacon-graphite-light text-sm">
                  Atrasos ou erros no eSocial geram multas de até R$ 42.564,00. Assumimos essa responsabilidade com processos validados.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
                <Clock className="h-8 w-8 text-amber-500 mb-4" />
                <h3 className="font-bold text-zacon-navy">Prazos apertados</h3>
                <p className="mt-2 text-zacon-graphite-light text-sm">
                  Admissão em 24h, rescisão em 10 dias, folha até dia 5... Garantimos todos os prazos com margem de segurança.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                <Calculator className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="font-bold text-zacon-navy">Cálculos complexos</h3>
                <p className="mt-2 text-zacon-graphite-light text-sm">
                  Horas extras, adicional noturno, insalubridade, DSR... Cada cálculo tem regras específicas que dominamos.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-zacon-light-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">
                Por que terceirizar com a ZACON?
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 100}>
                <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-zacon-corporate/10 text-zacon-corporate">
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-zacon-navy">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-zacon-graphite-light text-sm">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">
                O que está incluso no serviço
              </h2>
              <p className="mt-4 text-lg text-zacon-graphite-light">
                Gestão completa de departamento pessoal e folha de pagamento em um único pacote.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* DP Services */}
            <AnimatedSection delay={100}>
              <div className="rounded-xl border border-zacon-light p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-zacon-corporate/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-zacon-corporate" />
                  </div>
                  <h3 className="text-xl font-bold text-zacon-navy">
                    Departamento Pessoal
                  </h3>
                </div>
                <div className="space-y-3">
                  {dpServices.map((service) => (
                    <div key={service} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-zacon-corporate mt-0.5" />
                      <span className="text-zacon-graphite">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Folha Services */}
            <AnimatedSection delay={200}>
              <div className="rounded-xl border border-zacon-light p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-zacon-accent/10 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-zacon-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-zacon-navy">
                    Folha de Pagamento
                  </h3>
                </div>
                <div className="space-y-3">
                  {folhaServices.map((service) => (
                    <div key={service} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-zacon-accent mt-0.5" />
                      <span className="text-zacon-graphite">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* eSocial */}
          <AnimatedSection delay={300}>
            <div className="mt-8 rounded-xl bg-zacon-navy p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Obrigações do eSocial
                </h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {esocialObrigacoes.map((obrigacao) => (
                  <div
                    key={obrigacao}
                    className="flex items-center gap-2 text-zacon-silver-light"
                  >
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-zacon-corporate-light" />
                    <span className="text-sm">{obrigacao}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24 bg-zacon-light-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">
                Como funciona o processamento mensal
              </h2>
              <p className="mt-4 text-lg text-zacon-graphite-light">
                Processo organizado para garantir que sua folha esteja pronta no prazo, todo mês.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-zacon-corporate/20 hidden md:block" />

              {howToSteps.map((step, index) => (
                <AnimatedSection key={step.name} delay={index * 100}>
                  <div className="relative flex gap-6 pb-8 last:pb-0">
                    {/* Step number */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zacon-corporate text-white flex items-center justify-center font-bold text-lg z-10">
                      {index + 1}
                    </div>
                    {/* Content */}
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="font-bold text-zacon-navy">{step.name}</h3>
                      <p className="mt-2 text-zacon-graphite-light">{step.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dados verificáveis */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">
                Prazos e valores de referência
              </h2>
              <p className="mt-4 text-lg text-zacon-graphite-light">
                Informações atualizadas conforme legislação trabalhista vigente em 2026.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={100}>
              <div className="rounded-xl border border-zacon-light p-6 text-center">
                <Calendar className="h-8 w-8 text-zacon-corporate mx-auto mb-4" />
                <h3 className="font-bold text-zacon-navy">Prazos legais</h3>
                <ul className="mt-4 text-sm text-zacon-graphite-light text-left space-y-2">
                  <li>• Admissão: até 1 dia antes do início</li>
                  <li>• Rescisão: até 10 dias para pagamento</li>
                  <li>• FGTS: até dia 7 do mês seguinte</li>
                  <li>• GPS: até dia 20 do mês seguinte</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="rounded-xl border border-zacon-light p-6 text-center">
                <TrendingUp className="h-8 w-8 text-zacon-accent mx-auto mb-4" />
                <h3 className="font-bold text-zacon-navy">Encargos médios</h3>
                <ul className="mt-4 text-sm text-zacon-graphite-light text-left space-y-2">
                  <li>• INSS patronal: 20% + RAT</li>
                  <li>• FGTS: 8% sobre remuneração</li>
                  <li>• Férias + 1/3: 11,11%</li>
                  <li>• 13º salário: 8,33%</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
                <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-4" />
                <h3 className="font-bold text-zacon-navy">Multas por atraso</h3>
                <ul className="mt-4 text-sm text-zacon-graphite-light text-left space-y-2">
                  <li>• eSocial: até R$ 42.564,00</li>
                  <li>• FGTS em atraso: 5% + 0,5%/mês</li>
                  <li>• RAIS: R$ 425,64 a R$ 42.564,00</li>
                  <li>• CAGED: R$ 4,47 a R$ 4.025,33</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-zacon-light-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">
                Perguntas frequentes
              </h2>
              <p className="mt-4 text-lg text-zacon-graphite-light">
                Dúvidas comuns sobre departamento pessoal e folha de pagamento.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-xl border border-zacon-light px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-zacon-navy hover:text-zacon-corporate">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-zacon-graphite-light">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
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
                  Escrituração contábil completa para sua empresa.
                </p>
                <span className="mt-4 inline-flex items-center text-sm text-zacon-corporate font-medium">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Link
                href="/servicos/abertura-de-empresas"
                className="block rounded-xl border border-zacon-light p-6 hover:border-zacon-corporate hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-zacon-navy group-hover:text-zacon-corporate">
                  Abertura de Empresas
                </h3>
                <p className="mt-2 text-sm text-zacon-graphite-light">
                  Formalize seu negócio com suporte completo.
                </p>
                <span className="mt-4 inline-flex items-center text-sm text-zacon-corporate font-medium">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Link
                href="/servicos/bpo-financeiro"
                className="block rounded-xl border border-zacon-light p-6 hover:border-zacon-corporate hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-zacon-navy group-hover:text-zacon-corporate">
                  BPO Financeiro
                </h3>
                <p className="mt-2 text-sm text-zacon-graphite-light">
                  Terceirize também o financeiro da sua empresa.
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
                Terceirize o DP e foque no seu negócio
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zacon-silver-light">
                Mais de 15 anos cuidando das rotinas trabalhistas de empresas em Florianópolis.
                Conheça nosso trabalho.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="whatsapp" asChild>
                  <a
                    href={getWhatsAppLink(
                      WHATSAPP_NUMBER,
                      "Olá! Quero terceirizar meu departamento pessoal e folha de pagamento."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Falar pelo WhatsApp
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
