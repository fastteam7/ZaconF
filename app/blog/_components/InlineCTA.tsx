"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/app/_components/ui/button";

type CTAVariant = "primary" | "secondary" | "whatsapp" | "minimal";

interface InlineCTAProps {
  title: string;
  description?: string;
  href?: string;
  variant?: CTAVariant;
  icon?: "arrow" | "whatsapp" | "phone" | "calendar";
}

const variantStyles: Record<
  CTAVariant,
  {
    container: string;
    title: string;
    description: string;
    button: "default" | "premium" | "outline" | "ghost";
  }
> = {
  primary: {
    container:
      "bg-gradient-to-br from-zacon-navy to-zacon-corporate border-0 text-white",
    title: "text-white",
    description: "text-white/80",
    button: "premium",
  },
  secondary: {
    container: "bg-zacon-corporate/5 border border-zacon-corporate/20",
    title: "text-zacon-navy",
    description: "text-zacon-graphite",
    button: "default",
  },
  whatsapp: {
    container: "bg-green-50 border border-green-200",
    title: "text-green-800",
    description: "text-green-700",
    button: "default",
  },
  minimal: {
    container: "bg-gray-50 border border-gray-200",
    title: "text-zacon-navy",
    description: "text-zacon-graphite-light",
    button: "outline",
  },
};

const icons = {
  arrow: ArrowRight,
  whatsapp: MessageCircle,
  phone: Phone,
  calendar: Calendar,
};

export function InlineCTA({
  title,
  description,
  href = "/contato",
  variant = "secondary",
  icon = "arrow",
}: InlineCTAProps) {
  const styles = variantStyles[variant];
  const Icon = icons[icon];

  // Check if it's a WhatsApp link
  const isWhatsApp = href.includes("whatsapp") || href.includes("wa.me");
  const finalHref = isWhatsApp
    ? href
    : href.startsWith("/")
    ? href
    : `/${href}`;

  const content = (
    <div
      className={cn(
        "my-8 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 transition-all",
        styles.container,
        variant === "primary" && "relative overflow-hidden"
      )}
    >
      {variant === "primary" && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
      )}
      <div className="flex-1 relative">
        <h4 className={cn("font-semibold text-lg mb-1", styles.title)}>
          {title}
        </h4>
        {description && (
          <p className={cn("text-sm", styles.description)}>{description}</p>
        )}
      </div>
      <Button
        variant={styles.button}
        size="lg"
        className={cn(
          "flex-shrink-0 gap-2",
          variant === "whatsapp" &&
            "bg-green-600 hover:bg-green-700 text-white border-0"
        )}
      >
        {icon === "whatsapp" ? "Falar no WhatsApp" : "Fale Conosco"}
        <Icon className="h-4 w-4" />
      </Button>
    </div>
  );

  if (isWhatsApp || finalHref.startsWith("http")) {
    return (
      <a
        href={finalHref}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={finalHref} className="block no-underline">
      {content}
    </Link>
  );
}

// Compact version for mid-article CTAs
export function CompactCTA({
  text = "Precisa de ajuda? Fale com um contador",
  href = "/contato",
}: {
  text?: string;
  href?: string;
}) {
  return (
    <div className="my-6 p-4 bg-zacon-light-ultra rounded-lg border border-zacon-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <p className="text-sm text-zacon-graphite font-medium">{text}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-zacon-corporate hover:text-zacon-corporate-dark transition-colors"
      >
        Fale conosco
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
