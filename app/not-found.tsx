import Link from "next/link";
import { Home, ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { Button } from "./_components/ui/button";
import { constructMetadata } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Página não encontrada",
  description: "A página que você está procurando não foi encontrada. Confira nossos serviços de contabilidade em Florianópolis.",
  noIndex: true,
});

const WHATSAPP_NUMBER = "48988744359";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-zacon-light-ultra">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <span className="text-[150px] sm:text-[200px] font-bold text-zacon-corporate/10 leading-none select-none">
              404
            </span>
          </div>

          {/* Content */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zacon-navy tracking-tight -mt-16">
            Página não encontrada
          </h1>
          <p className="mt-6 text-lg text-zacon-graphite-light leading-relaxed">
            A página que você está procurando não existe ou foi movida.
            Não se preocupe, podemos ajudá-lo a encontrar o que precisa.
          </p>

          {/* Quick Links */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Voltar ao Início
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/servicos">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Ver Serviços
              </Link>
            </Button>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 p-8 rounded-2xl bg-white shadow-card border border-zacon-light">
            <p className="text-zacon-graphite font-medium mb-4">
              Precisa de ajuda? Fale conosco:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={getWhatsAppLink(WHATSAPP_NUMBER, "Olá! Preciso de ajuda.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-zacon-corporate hover:text-zacon-corporate-light transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                (48) 98874-4359
              </a>
              <span className="hidden sm:block text-zacon-light">|</span>
              <a
                href="mailto:zaconcontabil@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-zacon-corporate hover:text-zacon-corporate-light transition-colors"
              >
                zaconcontabil@gmail.com
              </a>
            </div>
          </div>

          {/* Popular Pages */}
          <div className="mt-12">
            <p className="text-sm text-zacon-graphite-muted mb-4">
              Páginas mais acessadas:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Abertura de Empresas", href: "/servicos/abertura-de-empresas" },
                { name: "Contabilidade MEI", href: "/servicos/contabilidade-mei" },
                { name: "Imposto de Renda", href: "/servicos/imposto-de-renda" },
                { name: "Planejamento Tributário", href: "/servicos/planejamento-tributario" },
                { name: "Contato", href: "/contato" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-zacon-graphite-light bg-white rounded-lg border border-zacon-light hover:border-zacon-corporate hover:text-zacon-corporate transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
