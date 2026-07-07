"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { getWhatsAppLink } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
];

const WHATSAPP_NUMBER = "48988744359";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-nav shadow-premium-md py-2"
          : "bg-transparent py-4 border-b border-transparent",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="group -m-1.5 p-1.5 flex items-center gap-3 transition-all duration-300 hover:opacity-90"
          >
            <div className="flex items-center">
              {/* Logo Mark */}
              <div className={cn(
                "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300",
                scrolled
                  ? "bg-gradient-to-br from-zacon-corporate to-zacon-corporate-light shadow-glow-sm"
                  : "bg-white/10 backdrop-blur-sm border border-white/20"
              )}>
                <span className={cn(
                  "text-lg font-bold",
                  scrolled ? "text-white" : "text-white"
                )}>Z</span>
              </div>
              {/* Logo Text */}
              <div className="ml-3 flex flex-col">
                <span className={cn(
                  "text-xl font-bold tracking-tight leading-none transition-colors duration-300",
                  scrolled ? "text-zacon-navy" : "text-white"
                )}>
                  ZACON
                </span>
                <span className={cn(
                  "text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-300",
                  scrolled ? "text-zacon-graphite-muted" : "text-white/70"
                )}>
                  Contabilidade
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className={cn(
              "inline-flex items-center justify-center rounded-xl p-2.5 transition-all duration-300",
              scrolled
                ? "text-zacon-graphite hover:bg-zacon-light-soft"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg group",
                scrolled
                  ? "text-zacon-graphite hover:text-zacon-corporate hover:bg-zacon-light-soft/50"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100",
                scrolled ? "bg-zacon-corporate" : "bg-white"
              )} />
            </Link>
          ))}
        </div>

        {/* Desktop CTA buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
          <Button
            variant={scrolled ? "ghost" : "glass"}
            size="sm"
            asChild
            className={cn(
              scrolled ? "" : "text-white"
            )}
          >
            <a href="tel:+5548988744359">
              <Phone className="mr-2 h-4 w-4" />
              (48) 98874-4359
            </a>
          </Button>
          <Button
            variant={scrolled ? "default" : "outline-light"}
            size="sm"
            asChild
          >
            <a
              href={getWhatsAppLink(WHATSAPP_NUMBER)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Fale Conosco
            </a>
          </Button>
        </div>
      </nav>

      {/* Mobile menu overlay - z-index corrigido para funcionar corretamente */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[60] transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "fixed inset-0 z-[65] bg-zacon-navy/60 backdrop-blur-md transition-opacity duration-300",
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu panel */}
        <div
          className={cn(
            "fixed inset-y-0 right-0 z-[70] w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-zacon-light shadow-premium-2xl transition-transform duration-500 ease-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-zacon-light">
            <Link
              href="/"
              className="-m-1.5 p-1.5 flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-zacon-corporate to-zacon-corporate-light shadow-glow-sm">
                <span className="text-base font-bold text-white">Z</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-zacon-navy tracking-tight leading-none">
                  ZACON
                </span>
                <span className="text-[9px] font-medium text-zacon-graphite-muted tracking-[0.15em] uppercase">
                  Contabilidade
                </span>
              </div>
            </Link>
            <button
              type="button"
              className="rounded-xl p-2.5 text-zacon-graphite hover:bg-zacon-light-soft transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Navigation links */}
          <div className="px-6 py-6">
            <div className="space-y-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium text-zacon-graphite transition-all duration-300",
                    "hover:bg-gradient-to-r hover:from-zacon-corporate/5 hover:to-transparent hover:text-zacon-corporate",
                    "animate-fade-in-up"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  <ArrowRight className="h-4 w-4 text-zacon-silver opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA section */}
          <div className="px-6 py-6 border-t border-zacon-light bg-zacon-light-ultra">
            <p className="text-xs text-zacon-graphite-muted uppercase tracking-wider font-semibold mb-4">
              Entre em contato
            </p>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-center h-12" asChild>
                <a href="tel:+5548988744359">
                  <Phone className="mr-2 h-4 w-4" />
                  (48) 98874-4359
                </a>
              </Button>
              <Button variant="premium" className="w-full justify-center h-12" asChild>
                <a
                  href={getWhatsAppLink(WHATSAPP_NUMBER)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Contact info footer */}
          <div className="px-6 py-6 border-t border-zacon-light">
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-zacon-graphite-muted text-xs uppercase tracking-wider font-semibold mb-1">
                  E-mail
                </p>
                <a href="mailto:contato@zacon.com.br" className="text-zacon-corporate font-medium">
                  contato@zacon.com.br
                </a>
              </div>
              <div>
                <p className="text-zacon-graphite-muted text-xs uppercase tracking-wider font-semibold mb-1">
                  Horário
                </p>
                <p className="text-zacon-graphite">
                  Seg - Sex: 08:00 - 18:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
