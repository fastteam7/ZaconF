import Link from "next/link";
import { PiggyBank, CheckCircle, Phone, BarChart3, CreditCard, Shield, TrendingUp } from "lucide-react";
import { Button } from "../../_components/ui/button";
import { AnimatedSection } from "../../_components/AnimatedSection";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "BPO Financeiro em Florianópolis",
  description:
    "Terceirização financeira (BPO) em Florianópolis. Contas a pagar e receber, conciliação bancária, fluxo de caixa e relatórios. Foque no seu negócio.",
  keywords: [
    "BPO financeiro Florianópolis",
    "terceirização financeira",
    "contas a pagar",
    "contas a receber",
    "fluxo de caixa",
  ],
  pathname: "/servicos/bpo-financeiro",
});

const benefits = [
  {
    title: "Controle Total",
    description: "Visão completa das finanças da sua empresa em tempo real.",
    icon: BarChart3,
  },
  {
    title: "Redução de Custos",
    description: "Economize com estrutura e pessoal de setor financeiro.",
    icon: PiggyBank,
  },
  {
    title: "Segurança",
    description: "Processos padronizados e conferências constantes.",
    icon: Shield,
  },
  {
    title: "Foco no Negócio",
    description: "Dedique seu tempo ao que realmente importa: crescer.",
    icon: TrendingUp,
  },
];

const services = [
  "Contas a pagar",
  "Contas a receber",
  "Conciliação bancária diária",
  "Fluxo de caixa",
  "Relatórios financeiros mensais",
  "Controle de inadimplência",
  "Emissão de boletos e cobranças",
  "Pagamento de fornecedores",
  "Gestão de contratos recorrentes",
  "DRE gerencial mensal",
];

const WHATSAPP_NUMBER = "48988744359";

export default function BPOFinanceiroPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Serviços", url: "/servicos" },
              { name: "BPO Financeiro", url: "/servicos/bpo-financeiro" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getServiceSchema({
              name: "BPO Financeiro em Florianópolis",
              description: "Terceirização completa do setor financeiro.",
              url: "/servicos/bpo-financeiro",
            })
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-zacon-primary to-zacon-primary-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full bg-zacon-secondary/20 px-4 py-2 text-sm text-zacon-secondary">
                <PiggyBank className="mr-2 h-4 w-4" />
                Serviço Especializado
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                BPO Financeiro em Florianópolis
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Terceirize o setor financeiro da sua empresa. Contas a pagar e receber,
                conciliação bancária, fluxo de caixa e relatórios gerenciais.
              </p>
              <div className="mt-8">
                <Button size="xl" variant="secondary" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Quero saber mais sobre BPO Financeiro.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar Proposta
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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 100}>
                <div className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-zacon-primary/10 text-zacon-primary">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-zacon-primary">{benefit.title}</h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What is BPO */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-zacon-primary">
                O que é BPO Financeiro?
              </h2>
              <div className="mt-6 space-y-4 text-gray-600">
                <p>
                  <strong>BPO (Business Process Outsourcing)</strong> Financeiro é a
                  terceirização das rotinas do setor financeiro da sua empresa para
                  uma equipe especializada.
                </p>
                <p>
                  Ao invés de manter uma estrutura interna com funcionários, sistemas
                  e processos, você delega todas as atividades financeiras para a ZACON,
                  mantendo total controle através de relatórios e dashboards.
                </p>
                <p>
                  É a solução ideal para empresas que querem profissionalizar a gestão
                  financeira sem aumentar custos fixos, tendo acesso a uma equipe
                  experiente e processos consolidados.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-zacon-primary">
                  O que está incluso?
                </h3>
                <div className="mt-6 space-y-3">
                  {services.map((service) => (
                    <div key={service} className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-zacon-secondary" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* For Who */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-primary sm:text-4xl">
                Para quem é o BPO Financeiro?
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Empresas em crescimento",
                "Startups e scale-ups",
                "Empresas sem setor financeiro estruturado",
                "Empresas que querem reduzir custos",
                "Gestores que querem focar no core business",
                "Empresas que precisam de controle profissional",
              ].map((item) => (
                <div key={item} className="rounded-lg bg-gray-50 p-6 text-center">
                  <CheckCircle className="mx-auto h-8 w-8 text-zacon-secondary" />
                  <p className="mt-3 font-medium text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zacon-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Quer Terceirizar seu Financeiro?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                Solicite uma proposta personalizada e descubra como o BPO Financeiro
                pode transformar a gestão da sua empresa.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="whatsapp" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Quero uma proposta de BPO Financeiro.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar Proposta
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
