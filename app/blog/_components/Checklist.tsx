"use client";

import { Check, Square } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChecklistItem {
  text: string;
  checked?: boolean;
}

interface ChecklistProps {
  items: ChecklistItem[];
  title?: string;
  variant?: "default" | "success" | "todo";
}

export function Checklist({
  items,
  title,
  variant = "default",
}: ChecklistProps) {
  const variantStyles = {
    default: {
      container: "bg-gray-50 border-gray-200",
      icon: "bg-zacon-corporate text-white",
      uncheckedIcon: "bg-gray-200 text-gray-400",
    },
    success: {
      container: "bg-green-50 border-green-200",
      icon: "bg-green-500 text-white",
      uncheckedIcon: "bg-green-100 text-green-300",
    },
    todo: {
      container: "bg-amber-50 border-amber-200",
      icon: "bg-amber-500 text-white",
      uncheckedIcon: "bg-amber-100 text-amber-300",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        "my-6 rounded-xl border p-5",
        styles.container
      )}
    >
      {title && (
        <h4 className="font-semibold text-zacon-navy mb-4">{title}</h4>
      )}
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div
              className={cn(
                "flex-shrink-0 w-5 h-5 rounded flex items-center justify-center mt-0.5",
                item.checked !== false ? styles.icon : styles.uncheckedIcon
              )}
            >
              {item.checked !== false ? (
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
              ) : (
                <Square className="w-3 h-3" />
              )}
            </div>
            <span
              className={cn(
                "text-sm leading-relaxed",
                item.checked === false
                  ? "text-gray-400"
                  : "text-zacon-graphite"
              )}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Simple inline checklist for quick lists
export function QuickChecklist({ items }: { items: string[] }) {
  return (
    <ul className="my-4 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
          <span className="text-sm text-zacon-graphite">{item}</span>
        </li>
      ))}
    </ul>
  );
}
