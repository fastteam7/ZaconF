import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

const services = [
  { name: "Abertura de Empresas", href: "/servicos/abertura-de-empresas" },
  { name: "Contabilidade Geral", href: "/servicos/contabilidade-empresarial" },
  { name: "Departamento Pessoal", href: "/servicos/departamento-pessoal" },
  { name: "Imposto de Renda PF", href: "/servicos/imposto-de-renda" },
  { name: "MEI", href: "/servicos/contabilidade-mei" },
  { name: "Planejamento Tributário", href: "/servicos/planejamento-tributario" },
  { name: "BPO Financeiro", href: "/servicos/bpo-financeiro" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Sobre Nós", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
];

const WHATSAPP_NUMBER = "48988744359";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-zacon-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold tracking-tight">
              ZACON <span className="font-normal text-gray-400">Contabilidade</span>
            </h3>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Desde 2009 construindo relações de confiança. Tradição, atendimento
              humanizado e soluções contábeis modernas para empresas e pessoas
              físicas.
            </p>
            <div className="mt-6">
              <a
                href={getWhatsAppLink(
                  WHATSAPP_NUMBER,
                  "Olá! Gostaria de falar com a ZACON Contabilidade."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-zacon-secondary">Serviços</h3>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white hover:underline"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-zacon-secondary">Links Rápidos</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-zacon-secondary">Contato</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-zacon-secondary" />
                <span className="text-sm text-gray-300">
                  Rod. Armando Calil Bulos, 5785
                  <br />
                  Ingleses do Rio Vermelho
                  <br />
                  Florianópolis - SC, 88058-001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 flex-shrink-0 text-zacon-secondary" />
                <a
                  href="tel:+5548988744359"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  (48) 98874-4359
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 flex-shrink-0 text-zacon-secondary" />
                <a
                  href="mailto:contato@zacon.com.br"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  contato@zacon.com.br
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 h-5 w-5 flex-shrink-0 text-zacon-secondary" />
                <span className="text-sm text-gray-300">
                  Seg - Sex: 08:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} ZACON Contabilidade. Todos os
              direitos reservados.
            </p>
            <p className="text-xs text-gray-500">
              Desde 2009 construindo relações de confiança.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
