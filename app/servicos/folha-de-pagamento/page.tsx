import Link from "next/link";
import { CreditCard, CheckCircle, Phone, Calculator, Clock, Shield, FileText } from "lucide-react";
import { Button } from "../../_components/ui/button";
import { AnimatedSection } from "../../_components/AnimatedSection";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Folha de Pagamento em Florianópolis",
  description:
    "Processamento de folha de pagamento em Florianópolis. Cálculos precisos, holerites, encargos sociais e guias de recolhimento. Entrega garantida no prazo.",
  keywords: [
    "folha de pagamento Florianópolis",
    "processamento de folha",
    "holerite",
    "encargos sociais",
    "cálculo de salários",
  ],
  pathname: "/servicos/folha-de-pagamento",
});

const benefits = [
  {
    title: "Cálculos Precisos",
    description: "Processamento com sistema atualizado e conferência rigorosa.",
    icon: Calculator,
  },
  {
    title: "Prazo Garantido",
    description: "Folha pronta sempre no prazo para pagamento dos funcionários.",
    icon: Clock,
  },
  {
    title: "Conformidade",
    description: "Todos os encargos calculados conforme legislação vigente.",
    icon: Shield,
  },
  {
    title: "Documentação",
    description: "Holerites, recibos e relatórios organizados mensalmente.",
    icon: FileText,
  },
];

const services = [
  "Cálculo de salários e horas extras",
  "Adicional noturno e insalubridade",
  "Descontos legais (INSS, IRRF, faltas)",
  "Benefícios (VT, VR, plano de saúde)",
  "Emissão de holerites",
  "Guias de FGTS e GPS",
  "DARF de IRRF",
  "Relatórios gerenciais de folha",
  "Provisão de férias e 13º",
  "Integração com eSocial",
];

const WHATSAPP_NUMBER = "48988744359";

export default function FolhaPagamentoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Serviços", url: "/servicos" },
              { name: "Folha de Pagamento", url: "/servicos/folha-de-pagamento" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getServiceSchema({
              name: "Folha de Pagamento em Florianópolis",
              description: "Processamento mensal de folha de pagamento.",
              url: "/servicos/folha-de-pagamento",
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
                <CreditCard className="mr-2 h-4 w-4" />
                Serviço Especializado
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Folha de Pagamento em Florianópolis
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Processamento mensal da folha de pagamento com cálculos precisos,
                holerites, encargos e guias de recolhimento. Sempre no prazo.
              </p>
              <div className="mt-8">
                <Button size="xl" variant="secondary" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Preciso de processamento de folha de pagamento.")}
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

      {/* Services */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-primary sm:text-4xl">
                O que está incluso?
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="mx-auto mt-12 max-w-3xl">
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <div key={service} className="flex items-center rounded-lg bg-white p-4 shadow-sm">
                    <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-zacon-secondary" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
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
                Precisa Processar sua Folha?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                Terceirize o processamento da folha de pagamento e tenha tranquilidade.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="whatsapp" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Quero terceirizar minha folha de pagamento.")}
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
