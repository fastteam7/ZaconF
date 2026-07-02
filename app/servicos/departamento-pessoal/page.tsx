import Link from "next/link";
import { Users, CheckCircle, Phone, FileText, Shield, Clock, Calculator } from "lucide-react";
import { Button } from "../../_components/ui/button";
import { AnimatedSection } from "../../_components/AnimatedSection";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Departamento Pessoal em Florianópolis",
  description:
    "Serviços de departamento pessoal em Florianópolis. Admissões, rescisões, férias, 13º salário, FGTS, INSS, eSocial e todas as obrigações trabalhistas.",
  keywords: [
    "departamento pessoal Florianópolis",
    "admissão de funcionários",
    "rescisão trabalhista",
    "eSocial",
    "obrigações trabalhistas",
  ],
  pathname: "/servicos/departamento-pessoal",
});

const benefits = [
  {
    title: "Gestão Completa",
    description: "Cuidamos de toda a rotina de pessoal da sua empresa.",
    icon: Users,
  },
  {
    title: "Conformidade Legal",
    description: "Todas as obrigações trabalhistas em dia, sem riscos.",
    icon: Shield,
  },
  {
    title: "eSocial em Dia",
    description: "Envio correto de todas as informações ao eSocial.",
    icon: FileText,
  },
  {
    title: "Agilidade",
    description: "Processos rápidos em admissões, férias e rescisões.",
    icon: Clock,
  },
];

const services = [
  "Admissão de funcionários",
  "Rescisão de contrato de trabalho",
  "Cálculo e controle de férias",
  "Cálculo de 13º salário",
  "Recolhimento de FGTS",
  "Recolhimento de INSS",
  "IRRF sobre salários",
  "eSocial completo",
  "RAIS e DIRF",
  "CAGED (admissões e demissões)",
  "Homologações",
  "Controle de ponto",
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
              { name: "Departamento Pessoal", url: "/servicos/departamento-pessoal" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getServiceSchema({
              name: "Departamento Pessoal em Florianópolis",
              description: "Gestão completa de rotinas trabalhistas.",
              url: "/servicos/departamento-pessoal",
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
                <Users className="mr-2 h-4 w-4" />
                Serviço Especializado
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Departamento Pessoal em Florianópolis
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Gestão completa das rotinas trabalhistas da sua empresa. Admissões,
                rescisões, férias, encargos e todas as obrigações em dia.
              </p>
              <div className="mt-8">
                <Button size="xl" variant="secondary" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Preciso de serviços de departamento pessoal.")}
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
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Todos os serviços de departamento pessoal para sua empresa.
              </p>
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
                Precisa de Departamento Pessoal?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                Terceirize as rotinas trabalhistas e foque no crescimento do seu negócio.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="whatsapp" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Quero terceirizar meu departamento pessoal.")}
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
