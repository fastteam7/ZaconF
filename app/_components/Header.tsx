"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle, Mail, Clock, ChevronRight } from "lucide-react";
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

  // Bloqueia scroll do body quando menu está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-zacon-light/50 py-2"
            : "bg-transparent py-4",
          visible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 group-hover:scale-105",
                scrolled
                  ? "bg-gradient-to-br from-zacon-corporate to-zacon-corporate-light shadow-lg"
                  : "bg-white/10 backdrop-blur-sm border border-white/20"
              )}
            >
              <span className="text-lg font-bold text-white">Z</span>
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "text-xl font-bold tracking-tight leading-none transition-colors duration-300",
                  scrolled ? "text-zacon-navy" : "text-white"
                )}
              >
                ZACON
              </span>
              <span
                className={cn(
                  "text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-300",
                  scrolled ? "text-zacon-graphite-muted" : "text-white/70"
                )}
              >
                Contabilidade
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg group",
                  scrolled
                    ? "text-zacon-graphite hover:text-zacon-corporate hover:bg-zacon-corporate/5"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100",
                    scrolled ? "bg-zacon-corporate" : "bg-white"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-3">
            <a
              href="tel:+5548988744359"
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                scrolled
                  ? "text-zacon-graphite hover:text-zacon-corporate"
                  : "text-white/90 hover:text-white"
              )}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">(48) 98874-4359</span>
            </a>
            <Button variant="premium" size="sm" asChild>
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

          {/* Mobile menu button */}
          <button
            type="button"
            className={cn(
              "lg:hidden inline-flex items-center justify-center rounded-xl p-2.5 transition-all duration-300",
              scrolled
                ? "text-zacon-graphite hover:bg-zacon-light-soft"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu - Renderização condicional para garantir funcionamento */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[9999]">
          {/* Backdrop com blur */}
          <div
            className="absolute inset-0 bg-zacon-navy/60 backdrop-blur-sm"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col">
            {/* Header do Menu */}
            <div className="flex items-center justify-between p-5 border-b border-zacon-light">
              <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-zacon-corporate to-zacon-corporate-light shadow-lg">
                  <span className="text-lg font-bold text-white">Z</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-zacon-navy tracking-tight leading-none">
                    ZACON
                  </span>
                  <span className="text-[10px] font-medium text-zacon-graphite-muted tracking-[0.2em] uppercase">
                    Contabilidade
                  </span>
                </div>
              </Link>
              <button
                type="button"
                className="p-2.5 rounded-xl text-zacon-graphite hover:bg-zacon-light-soft transition-colors"
                onClick={closeMenu}
                aria-label="Fechar menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto p-5">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between p-4 rounded-xl text-base font-medium text-zacon-graphite hover:bg-gradient-to-r hover:from-zacon-corporate/5 hover:to-transparent hover:text-zacon-corporate transition-all duration-200 group"
                    onClick={closeMenu}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="h-5 w-5 text-zacon-silver group-hover:text-zacon-corporate group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                ))}
              </div>
            </nav>

            {/* CTA Section */}
            <div className="p-5 border-t border-zacon-light bg-zacon-light-ultra">
              <p className="text-xs text-zacon-graphite-muted uppercase tracking-wider font-semibold mb-4">
                Entre em contato
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+5548988744359"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 text-zacon-corporate font-semibold border-2 border-zacon-corporate rounded-xl hover:bg-zacon-corporate hover:text-white transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  (48) 98874-4359
                </a>
                <a
                  href={getWhatsAppLink(WHATSAPP_NUMBER)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 text-white font-semibold bg-gradient-to-r from-zacon-corporate via-zacon-corporate-light to-zacon-accent rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            {/* Footer Info */}
            <div className="p-5 border-t border-zacon-light">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="flex items-center gap-2 text-zacon-graphite-muted mb-1">
                    <Mail className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-wider font-semibold">E-mail</span>
                  </div>
                  <a
                    href="mailto:zaconcontabil@gmail.com"
                    className="text-zacon-corporate font-medium hover:underline"
                  >
                    zaconcontabil@gmail.com
                  </a>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-zacon-graphite-muted mb-1">
                    <Clock className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-wider font-semibold">Horário</span>
                  </div>
                  <p className="text-zacon-graphite">Seg - Sex: 8h - 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
