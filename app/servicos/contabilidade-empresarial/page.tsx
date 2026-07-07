import Link from "next/link";
import {
  Calculator,
  CheckCircle,
  Phone,
  FileText,
  BarChart3,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";
import { Button } from "../../_components/ui/button";
import { AnimatedSection } from "../../_components/AnimatedSection";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Contabilidade Empresarial em Florianópolis",
  description:
    "Serviços de contabilidade empresarial em Florianópolis. Escrituração contábil, balanços, demonstrações financeiras e obrigações acessórias para empresas de todos os portes.",
  keywords: [
    "contabilidade empresarial Florianópolis",
    "escritório de contabilidade",
    "balanço patrimonial",
    "demonstrações financeiras",
    "obrigações acessórias",
  ],
  pathname: "/servicos/contabilidade-empresarial",
});

const benefits = [
  {
    title: "Escrituração Completa",
    description: "Registro de todas as operações contábeis da sua empresa conforme normas vigentes.",
    icon: FileText,
  },
  {
    title: "Relatórios Gerenciais",
    description: "Informações precisas para tomada de decisões estratégicas.",
    icon: BarChart3,
  },
  {
    title: "Conformidade Fiscal",
    description: "Sua empresa sempre em dia com todas as obrigações fiscais e acessórias.",
    icon: Shield,
  },
  {
    title: "Entregas no Prazo",
    description: "Compromisso com prazos e qualidade em todas as entregas.",
    icon: Clock,
  },
];

const services = [
  "Escrituração contábil digital (ECD)",
  "Balanço patrimonial",
  "Demonstração de resultados (DRE)",
  "Demonstração de fluxo de caixa (DFC)",
  "Livros contábeis obrigatórios",
  "SPED Contábil",
  "EFD-Contribuições",
  "DCTF e DCTF-Web",
  "Certidões negativas",
  "Relatórios gerenciais personalizados",
];

const WHATSAPP_NUMBER = "48988744359";

export default function ContabilidadeEmpresarialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Serviços", url: "/servicos" },
              { name: "Contabilidade Empresarial", url: "/servicos/contabilidade-empresarial" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getServiceSchema({
              name: "Contabilidade Empresarial em Florianópolis",
              description: "Serviços completos de contabilidade empresarial para empresas de todos os portes.",
              url: "/servicos/contabilidade-empresarial",
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
              <div className="mb-6 inline-flex items-center rounded-full border border-zacon-corporate/30 bg-zacon-corporate/10 px-4 py-2 text-sm text-zacon-corporate-light">
                <Sparkles className="mr-2 h-4 w-4" />
                Serviço Especializado
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Contabilidade Empresarial em Florianópolis
              </h1>
              <p className="mt-6 text-lg text-zacon-silver-light">
                Contabilidade completa para sua empresa, com escrituração precisa,
                relatórios gerenciais e todas as obrigações em dia.
              </p>
              <div className="mt-8">
                <Button size="xl" variant="secondary" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Preciso de contabilidade para minha empresa.")}
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
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-zacon-navy/10 text-zacon-navy">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-zacon-navy">{benefit.title}</h3>
                  <p className="mt-2 text-zacon-graphite-light">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-zacon-light-soft py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zacon-navy sm:text-4xl">O que está incluso?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zacon-graphite-light">
                Nosso serviço de contabilidade empresarial abrange todas as necessidades da sua empresa.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="mx-auto mt-12 max-w-3xl">
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <div key={service} className="flex items-center rounded-lg bg-white p-4 shadow-sm">
                    <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-zacon-corporate" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zacon-navy py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Precisa de Contabilidade para sua Empresa?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zacon-silver-light">
                Entre em contato e receba uma proposta personalizada para as necessidades do seu negócio.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="whatsapp" asChild>
                  <a
                    href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Preciso de contabilidade empresarial.")}
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
