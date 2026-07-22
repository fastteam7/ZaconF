import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowUpRight,
  Linkedin,
  Instagram,
  Facebook,
  ArrowRight,
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";
import { Button } from "./ui/button";
import { CurrentYear } from "./CurrentYear";

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

const localLinks = [
  { name: "Contabilidade em Ingleses", href: "/contabilidade-ingleses" },
  { name: "Contabilidade no Centro", href: "/contabilidade-centro" },
  { name: "Contabilidade em Canasvieiras", href: "/contabilidade-canasvieiras" },
];

const WHATSAPP_NUMBER = "48988744359";

export function Footer() {
  return (
    <footer className="bg-zacon-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-zacon-navy/50 to-transparent" />
      <div className="absolute inset-0 dot-pattern-light opacity-10" />

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zacon-corporate/40 to-transparent" />

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zacon-corporate/5 rounded-full blur-[120px]" />

      {/* CTA Section */}
      <div className="relative border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <div className="text-center lg:text-left max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Pronto para transformar sua{" "}
                <span className="text-gradient-silver">gestão contábil?</span>
              </h3>
              <p className="mt-4 text-zacon-silver-light leading-relaxed">
                Entre em contato conosco e descubra como podemos ajudar sua empresa
                a crescer com segurança.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="lg" className="group" asChild>
                <a
                  href={getWhatsAppLink(
                    WHATSAPP_NUMBER,
                    "Olá! Gostaria de falar com a ZACON Contabilidade."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link href="/contato">
                  <Phone className="mr-2 h-5 w-5" />
                  Solicitar Contato
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                {/* Logo Mark */}
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-zacon-corporate to-zacon-corporate-light shadow-glow-sm">
                  <span className="text-lg font-bold text-white">Z</span>
                </div>
                {/* Logo Text */}
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white tracking-tight leading-none">
                    ZACON
                  </span>
                  <span className="text-[10px] font-medium text-zacon-silver tracking-[0.2em] uppercase">
                    Contabilidade
                  </span>
                </div>
              </div>
            </Link>

            <p className="mt-6 text-sm text-zacon-silver-light leading-relaxed max-w-sm">
              Desde 2009 construindo relações de confiança. Tradição, atendimento
              humanizado e soluções contábeis modernas para empresas e pessoas
              físicas em Florianópolis e região.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://instagram.com/zaconcontabilidade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] text-zacon-silver border border-white/[0.08] hover:bg-white/[0.1] hover:text-white hover:border-white/[0.15] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/zaconcontabilidade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] text-zacon-silver border border-white/[0.08] hover:bg-white/[0.1] hover:text-white hover:border-white/[0.15] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/zaconcontabilidade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] text-zacon-silver border border-white/[0.08] hover:bg-white/[0.1] hover:text-white hover:border-white/[0.15] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em] mb-6">
              Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group flex items-center text-sm text-zacon-silver-light transition-colors hover:text-white"
                  >
                    <span>{service.name}</span>
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em] mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-zacon-silver-light transition-colors hover:text-white"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Local SEO Links */}
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em] mb-4 mt-8">
              Áreas de Atuação
            </h4>
            <ul className="space-y-3">
              {localLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-zacon-silver-light transition-colors hover:text-white"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em] mb-6">
              Contato
            </h4>

            {/* Company Info */}
            <div className="mb-6 p-4 rounded-xl border border-zacon-corporate/20 bg-zacon-corporate/5">
              <h5 className="text-sm font-semibold text-white leading-relaxed">
                JF Contabilidade e Assessoria Ltda
              </h5>
              <p className="mt-1 text-xs text-zacon-silver break-all sm:break-normal">
                CNPJ: 53.865.831/0001-92
              </p>
            </div>

            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Rod.+Armando+Calil+Bulos,+5785,+Ingleses+do+Rio+Vermelho,+Florianópolis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start text-sm text-zacon-silver-light hover:text-white transition-colors"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-zacon-corporate/10 border border-zacon-corporate/20 mr-3 flex-shrink-0 group-hover:bg-zacon-corporate/20 transition-colors">
                    <MapPin className="h-4 w-4 text-zacon-corporate" />
                  </div>
                  <div className="pt-1.5">
                    <span className="block leading-relaxed">
                      Rod. Armando Calil Bulos, 5785
                    </span>
                    <span className="block text-xs text-zacon-silver mt-0.5">
                      Ingleses do Rio Vermelho, Florianópolis - SC
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+5548988744359"
                  className="group flex items-center text-sm text-zacon-silver-light hover:text-white transition-colors"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-zacon-corporate/10 border border-zacon-corporate/20 mr-3 flex-shrink-0 group-hover:bg-zacon-corporate/20 transition-colors">
                    <Phone className="h-4 w-4 text-zacon-corporate" />
                  </div>
                  <span>(48) 98874-4359</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:zaconcontabil@gmail.com"
                  className="group flex items-center text-sm text-zacon-silver-light hover:text-white transition-colors"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-zacon-corporate/10 border border-zacon-corporate/20 mr-3 flex-shrink-0 group-hover:bg-zacon-corporate/20 transition-colors">
                    <Mail className="h-4 w-4 text-zacon-corporate" />
                  </div>
                  <span>zaconcontabil@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center text-sm text-zacon-silver-light">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-zacon-corporate/10 border border-zacon-corporate/20 mr-3 flex-shrink-0">
                  <Clock className="h-4 w-4 text-zacon-corporate" />
                </div>
                <span>Seg - Sex: 08:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-zacon-silver">
              &copy; <CurrentYear /> ZACON Contabilidade. Todos os direitos
              reservados.
            </p>
            <div className="flex items-center gap-6">
              <p className="text-xs text-zacon-graphite-muted">
                Desde 2009 construindo relações de confiança
              </p>
              <div className="h-3 w-px bg-white/10 hidden sm:block" />
              <p className="text-xs text-zacon-graphite-muted hidden sm:block">
                Florianópolis - SC
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
