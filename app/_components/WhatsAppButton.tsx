"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "48988744359";
const DEFAULT_MESSAGE =
  "Olá! Gostaria de saber mais sobre os serviços da ZACON Contabilidade.";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Show button after a short delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={getWhatsAppLink(WHATSAPP_NUMBER, DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl text-white transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2",
        // Background and shadow
        "bg-gradient-to-r from-[#25D366] to-[#128C7E] shadow-lg shadow-[#25D366]/20",
        // Hover effects
        "hover:shadow-xl hover:shadow-[#25D366]/30 hover:scale-105",
        // Visibility animation
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        // Padding
        isHovered ? "px-6 py-4" : "px-4 py-4 md:px-5"
      )}
      aria-label="Fale conosco pelo WhatsApp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="relative flex items-center justify-center">
        <MessageCircle className="h-6 w-6 relative z-10" />
        {/* Pulse ring */}
        <span className="absolute inset-0 animate-ping rounded-full bg-white opacity-20" />
      </div>

      {/* Text - Shows on hover on mobile, always on desktop */}
      <span
        className={cn(
          "text-sm font-semibold whitespace-nowrap transition-all duration-300",
          isHovered ? "opacity-100 max-w-40" : "opacity-0 max-w-0 md:opacity-100 md:max-w-40",
          "overflow-hidden"
        )}
      >
        Fale Conosco
      </span>

      {/* Arrow on hover */}
      <ArrowRight
        className={cn(
          "h-4 w-4 transition-all duration-300",
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
        )}
      />

      {/* Glow effect on hover */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl transition-opacity duration-500",
          "bg-gradient-to-r from-[#25D366]/50 to-[#128C7E]/50 blur-xl",
          isHovered ? "opacity-60" : "opacity-0"
        )}
        style={{ zIndex: -1 }}
      />

      {/* Border glow animation */}
      <div className="absolute inset-0 rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  );
}
