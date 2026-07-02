"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

const WHATSAPP_NUMBER = "48988744359";
const DEFAULT_MESSAGE =
  "Olá! Gostaria de saber mais sobre os serviços da ZACON Contabilidade.";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink(WHATSAPP_NUMBER, DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
