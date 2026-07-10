"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RotateCcw, MessageCircle } from "lucide-react";
import { Button } from "./_components/ui/button";
import { getWhatsAppLink } from "@/lib/utils";

const WHATSAPP_NUMBER = "48988744359";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    console.error("Application error:", error);
  }, [error]);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-zacon-light-ultra">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="mx-auto w-24 h-24 rounded-2xl bg-red-100 flex items-center justify-center">
              <span className="text-5xl">⚠️</span>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zacon-navy tracking-tight">
            Algo deu errado
          </h1>
          <p className="mt-6 text-lg text-zacon-graphite-light leading-relaxed">
            Ocorreu um erro inesperado. Nossa equipe já foi notificada e está
            trabalhando para resolver o problema.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={() => reset()}>
              <RotateCcw className="mr-2 h-5 w-5" />
              Tentar Novamente
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Voltar ao Início
              </Link>
            </Button>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 p-8 rounded-2xl bg-white shadow-card border border-zacon-light">
            <p className="text-zacon-graphite font-medium mb-4">
              Se o problema persistir, entre em contato:
            </p>
            <Button variant="whatsapp" asChild>
              <a
                href={getWhatsAppLink(
                  WHATSAPP_NUMBER,
                  "Olá! Estou tendo problemas para acessar o site."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
