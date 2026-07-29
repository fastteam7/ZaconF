"use client";

import { cn } from "@/lib/utils";
import {
  Lightbulb,
  AlertTriangle,
  Info,
  XCircle,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { ReactNode } from "react";

export type CalloutType =
  | "dica"
  | "atencao"
  | "importante"
  | "erro"
  | "sucesso"
  | "contador";

interface CalloutProps {
  type: CalloutType;
  children: ReactNode;
  title?: string;
}

const calloutConfig: Record<
  CalloutType,
  {
    icon: typeof Lightbulb;
    title: string;
    bgColor: string;
    borderColor: string;
    iconColor: string;
    titleColor: string;
  }
> = {
  dica: {
    icon: Lightbulb,
    title: "Dica",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    iconColor: "text-emerald-600",
    titleColor: "text-emerald-800",
  },
  atencao: {
    icon: AlertTriangle,
    title: "Atenção",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    iconColor: "text-amber-600",
    titleColor: "text-amber-800",
  },
  importante: {
    icon: Info,
    title: "Importante",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    titleColor: "text-blue-800",
  },
  erro: {
    icon: XCircle,
    title: "Erro Comum",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
    titleColor: "text-red-800",
  },
  sucesso: {
    icon: CheckCircle,
    title: "Sucesso",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconColor: "text-green-600",
    titleColor: "text-green-800",
  },
  contador: {
    icon: MessageSquare,
    title: "Dica do Contador",
    bgColor: "bg-zacon-corporate/5",
    borderColor: "border-zacon-corporate/20",
    iconColor: "text-zacon-corporate",
    titleColor: "text-zacon-corporate",
  },
};

export function Callout({ type, children, title }: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;
  const displayTitle = title || config.title;

  return (
    <div
      className={cn(
        "my-6 rounded-xl border-l-4 p-4 sm:p-5",
        config.bgColor,
        config.borderColor
      )}
      role="note"
      aria-label={displayTitle}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "flex-shrink-0 mt-0.5",
            config.iconColor
          )}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <p
            className={cn(
              "font-semibold text-sm mb-1",
              config.titleColor
            )}
          >
            {displayTitle}
          </p>
          <div className="text-sm text-gray-700 leading-relaxed prose prose-sm max-w-none prose-p:my-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
