import Link from "next/link";
import {
  HelpCircle,
  Building2,
  Calculator,
  Users,
  FileText,
  TrendingUp,
  PiggyBank,
  AlertCircle,
  User,
  Phone,
  Search,
} from "lucide-react";
import { Button } from "../_components/ui/button";
import { AnimatedSection } from "../_components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../_components/ui/accordion";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/schema";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Perguntas Frequentes sobre Contabilidade | FAQ ZACON",
  description:
    "Tire suas dúvidas sobre contabilidade, abertura de empresas, MEI, impostos, folha de pagamento e muito mais. Respostas de contadores especializados.",
  keywords: [
    "perguntas frequentes contabilidade",
    "dúvidas contador",
    "faq contabilidade",
    "perguntas sobre impostos",
    "dúvidas MEI",
  ],
  pathname: "/perguntas-frequentes",
});

const WHATSAPP_NUMBER = "48988744359";

const faqCategories = [
  {
    id: "abertura",
    name: "Abertura de Empresas",
    icon: Building2,
    description: "Dúvidas sobre como abrir empresa, tipos societários e custos",
    faqs: [

      {
        question: "Quanto tempo leva para abrir uma empresa?",
        answer:
          "MEI: imediato (online). ME/EPP Simples Nacional: 7 a 15 dias úteis. LTDA: 15 a 30 dias úteis. O prazo pode variar conforme a atividade e necessidade de licenças especiais.",
      },
      {
        question: "Qual a diferença entre MEI, ME e LTDA?",
        answer:
          "MEI: faturamento até R$ 81.000/ano, 1 funcionário, tributação fixa. ME: faturamento até R$ 360.000/ano, Simples Nacional. LTDA: sem limite de faturamento, pode ter sócios, mais flexibilidade contratual.",
      },
      {
        question: "Preciso de contador para abrir empresa?",
        answer:
          "Para MEI, não é obrigatório. Para ME, EPP e LTDA, sim. O contador garante a escolha correta do regime tributário, evita erros que geram multas e cuida de toda a burocracia.",
      },
    ],
  },
  {
    id: "mei",
    name: "MEI",
    icon: User,
    description: "Dúvidas sobre Microempreendedor Individual",
    faqs: [
      {
        question: "Qual o limite de faturamento do MEI em 2026?",
        answer:
          "O limite anual é R$ 81.000,00 (média de R$ 6.750/mês). Há projetos de lei para aumentar para R$ 130.000, mas ainda não foram aprovados.",
      },
      {
        question: "O MEI precisa de contador?",
        answer:
          "Por lei, não é obrigatório. Porém, orientação contábil evita erros, multas e garante que você aproveite todos os benefícios. A maioria dos problemas que vemos são de MEIs sem orientação.",
      },
      {
        question: "O que acontece se ultrapassar o limite do MEI?",
        answer:
          "Até 20% acima (R$ 97.200): paga guia complementar e é desenquadrado no ano seguinte. Acima de 20%: desenquadramento retroativo ao início do ano, com impostos sobre todo faturamento.",
      },
      {
        question: "Quanto custa ser MEI por mês?",
        answer:
          "Em 2026: R$ 76,90 (comércio/indústria), R$ 80,90 (serviços) ou R$ 81,90 (comércio + serviços). Inclui INSS, ISS e/ou ICMS.",
      },
    ],
  },
  {
    id: "impostos",
    name: "Impostos e Tributação",
    icon: Calculator,
    description: "Dúvidas sobre regimes tributários e pagamento de impostos",
    faqs: [
      {
        question: "Qual o melhor regime tributário para minha empresa?",
        answer:
          "Depende do faturamento, atividade, margem de lucro e despesas. Simples Nacional é bom para faturamento até R$ 4,8M/ano. Lucro Presumido para margens altas. Lucro Real para despesas altas. Fazemos análise comparativa.",
      },
      {
        question: "Quando vale a pena sair do Simples Nacional?",
        answer:
          "Quando: faturamento ultrapassa R$ 4,8M/ano, folha de pagamento é baixa (Fator R desfavorável), margem de lucro é alta, ou há muitos créditos de PIS/COFINS para aproveitar.",
      },
      {
        question: "O que é planejamento tributário?",
        answer:
          "É a análise estratégica para reduzir impostos de forma legal (elisão fiscal). Inclui escolha de regime, aproveitamento de incentivos, estruturação societária e revisão de classificações fiscais.",
      },
      {
        question: "Quanto posso economizar com planejamento tributário?",
        answer:
          "Empresas economizam de 15% a 40% da carga tributária. O investimento na análise (a partir de R$ 1.500) costuma retornar de 3x a 10x em economia anual.",
      },
    ],
  },
  {
    id: "irpf",
    name: "Imposto de Renda PF",
    icon: FileText,
    description: "Dúvidas sobre declaração de Imposto de Renda Pessoa Física",
    faqs: [
      {
        question: "Quem precisa declarar Imposto de Renda em 2026?",
        answer:
          "Quem em 2025: recebeu rendimentos tributáveis acima de R$ 30.639,90; teve rendimentos isentos acima de R$ 200.000; possui bens acima de R$ 800.000; operou na bolsa; ou recebeu receita rural acima de R$ 153.199,50.",
      },
      {
        question: "Qual o prazo da declaração IRPF 2026?",
        answer:
          "De 17 de março a 30 de maio de 2026. Entregar nas primeiras semanas aumenta chances de restituição nos primeiros lotes.",
      },
      {
        question: "Quanto custa fazer a declaração com contador?",
        answer:
          "Declaração simples: R$ 150 a R$ 250. Completa (investimentos, imóveis): R$ 250 a R$ 450. Complexa (exterior, ganho de capital): R$ 450 a R$ 800.",
      },
      {
        question: "O que fazer se cair na malha fina?",
        answer:
          "Consulte o motivo no e-CAC. Na maioria dos casos, basta retificar a declaração com as informações corretas. Oferecemos suporte para análise e regularização.",
      },
    ],
  },
  {
    id: "dp",
    name: "Departamento Pessoal",
    icon: Users,
    description: "Dúvidas sobre folha de pagamento, eSocial e trabalhista",
    faqs: [
      {
        question: "Quanto custa terceirizar a folha de pagamento?",
        answer:
          "De R$ 50 a R$ 80 por funcionário/mês. Inclui cálculo de salários, eSocial, FGTS, férias, 13º, rescisões e todas as obrigações trabalhistas.",
      },
      {
        question: "O que é eSocial e minha empresa precisa?",
        answer:
          "eSocial é o sistema que unifica obrigações trabalhistas, previdenciárias e fiscais. Toda empresa com funcionários é obrigada. Multas por descumprimento vão de R$ 400 a R$ 180.000.",
      },
      {
        question: "Qual o prazo para enviar admissão no eSocial?",
        answer:
          "O evento de admissão deve ser enviado antes do início das atividades do funcionário. Não é possível retroagir. Desligamento: até 10 dias após.",
      },
      {
        question: "Como funciona o contrato de trabalho intermitente?",
        answer:
          "O trabalhador é convocado conforme demanda e recebe apenas pelas horas trabalhadas. Ideal para sazonalidade. Há regras específicas de convocação e pagamento que explicamos na contratação.",
      },
    ],
  },
  {
    id: "bpo",
    name: "BPO Financeiro",
    icon: PiggyBank,
    description: "Dúvidas sobre terceirização do setor financeiro",
    faqs: [
      {
        question: "O que é BPO Financeiro?",
        answer:
          "É a terceirização das rotinas financeiras: contas a pagar/receber, conciliação bancária, fluxo de caixa e relatórios. Você mantém controle total através de dashboards enquanto nós executamos.",
      },
      {
        question: "Quanto custa o BPO Financeiro?",
        answer:
          "Para empresas pequenas (até 100 lançamentos/mês): R$ 800 a R$ 1.500/mês. Médias (100-500 lançamentos): R$ 1.500 a R$ 3.500/mês. Inclui todas as rotinas financeiras.",
      },
      {
        question: "Vocês têm acesso à conta bancária?",
        answer:
          "Trabalhamos com perfil de operador com limites definidos ou apenas visualização. Pagamentos podem exigir sua aprovação final. Você define os limites de alçada.",
      },
      {
        question: "Qual a diferença entre BPO e contabilidade?",
        answer:
          "Contabilidade cuida de escrituração, impostos e obrigações fiscais (passado). BPO Financeiro cuida da operação do dia a dia: pagar, cobrar, controlar caixa (presente e futuro).",
      },
    ],
  },
  {
    id: "regularizacao",
    name: "Regularização",
    icon: AlertCircle,
    description: "Dúvidas sobre pendências fiscais e regularização de empresas",
    faqs: [
      {
        question: "Meu CNPJ está inapto. O que fazer?",
        answer:
          "CNPJ inapto significa obrigações acessórias não entregues. Identificamos quais declarações faltam, fazemos a entrega retroativa e solicitamos reativação. Prazo: 15 a 60 dias.",
      },
      {
        question: "O que é REFIS e como funciona?",
        answer:
          "REFIS são programas de parcelamento com condições especiais: desconto de até 100% em multas e juros, prazo de até 145 meses. Monitoramos programas federais, estaduais e municipais.",
      },
      {
        question: "Consigo parcelar dívidas tributárias?",
        answer:
          "Sim. Parcelamento ordinário: até 60 parcelas. REFIS/Transação: até 120-145 parcelas com descontos. FGTS: até 60 parcelas. Analisamos a melhor opção para seu caso.",
      },

    ],
  },
  {
    id: "geral",
    name: "Contabilidade Geral",
    icon: TrendingUp,
    description: "Dúvidas gerais sobre serviços contábeis",
    faqs: [
      {
        question: "Posso trocar de contador?",
        answer:
          "Sim. Solicitamos a documentação ao contador atual, fazemos análise e conciliação dos dados, e assumimos no mês seguinte. Todo o processo é conduzido por nós, sem burocracia.",
      },
      {
        question: "Vocês atendem empresas de qual região?",
        answer:
          "Nosso escritório fica em Ingleses, mas atendemos toda a Grande Florianópolis e, através de atendimento remoto, empresas de qualquer região do Brasil.",
      },
      {
        question: "Como funciona o atendimento da ZACON?",
        answer:
          "Atendimento presencial em Ingleses, suporte por WhatsApp em horário comercial, portal do cliente online, e reuniões por videoconferência. Resposta em até 24 horas úteis.",
      },
    ],
  },
];

// Flatten all FAQs for schema
const allFaqs = faqCategories.flatMap((cat) => cat.faqs);

export default function PerguntasFrequentesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Perguntas Frequentes", url: "/perguntas-frequentes" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema(allFaqs)),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-zacon-navy py-16 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-zacon-corporate/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full border border-zacon-corporate/30 bg-zacon-corporate/10 px-4 py-2 text-sm text-zacon-corporate-light">
                <HelpCircle className="mr-2 h-4 w-4" />
                Central de Ajuda
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Perguntas Frequentes
              </h1>
              <p className="mt-6 text-lg text-zacon-silver-light">
                Encontre respostas para as dúvidas mais comuns sobre contabilidade,
                impostos, abertura de empresas e muito mais.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white border-b border-zacon-light sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 pb-2 -mx-4 px-4 scrollbar-hide">
            {faqCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="flex-shrink-0 inline-flex items-center rounded-full bg-zacon-light-soft px-4 py-2 text-sm font-medium text-zacon-navy hover:bg-zacon-corporate hover:text-white transition-colors"
              >
                <category.icon className="mr-2 h-4 w-4" />
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 lg:py-24 bg-zacon-light-soft">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.id} delay={categoryIndex * 100}>
              <div id={category.id} className="mb-16 scroll-mt-32">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zacon-corporate/10 flex items-center justify-center mr-4">
                    <category.icon className="h-6 w-6 text-zacon-corporate" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-zacon-navy">
                      {category.name}
                    </h2>
                    <p className="text-sm text-zacon-graphite-light">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-zacon-light bg-white shadow-sm overflow-hidden">
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.id}-${index}`}
                        className="border-b border-zacon-light last:border-0"
                      >
                        <AccordionTrigger className="px-6 py-4 text-left font-semibold text-zacon-navy hover:text-zacon-corporate">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-zacon-graphite-light">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zacon-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Não encontrou sua resposta?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zacon-silver-light">
                Nossa equipe está pronta para ajudar. Entre em contato e tire
                suas dúvidas diretamente com nossos contadores.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="whatsapp" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Tenho uma dúvida sobre contabilidade.")}
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
