"use client";

import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  trend?: "up" | "down" | "neutral";
  description?: string;
}

interface StatsProps {
  items: StatItem[];
  title?: string;
  columns?: 2 | 3 | 4;
}

export function Stats({ items, title, columns = 3 }: StatsProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  return (
    <div className="my-8">
      {title && (
        <h3 className="text-lg font-semibold text-zacon-navy mb-4">{title}</h3>
      )}
      <div
        className={cn(
          "grid gap-4",
          gridCols[columns]
        )}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-5 text-center hover:border-zacon-corporate/30 hover:shadow-sm transition-all"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-zacon-navy">
                {item.value}
              </span>
              {item.trend && (
                <TrendIndicator trend={item.trend} />
              )}
            </div>
            <p className="mt-1 text-sm font-medium text-zacon-graphite">
              {item.label}
            </p>
            {item.description && (
              <p className="mt-1 text-xs text-zacon-graphite-muted">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TrendIndicator({ trend }: { trend: "up" | "down" | "neutral" }) {
  const config = {
    up: {
      icon: TrendingUp,
      color: "text-green-500",
    },
    down: {
      icon: TrendingDown,
      color: "text-red-500",
    },
    neutral: {
      icon: Minus,
      color: "text-gray-400",
    },
  };

  const { icon: Icon, color } = config[trend];

  return <Icon className={cn("w-5 h-5", color)} />;
}

// Single highlight stat for inline use
interface HighlightStatProps {
  value: string;
  label: string;
  variant?: "primary" | "secondary";
}

export function HighlightStat({
  value,
  label,
  variant = "primary",
}: HighlightStatProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-lg",
        variant === "primary"
          ? "bg-zacon-corporate/10 text-zacon-corporate"
          : "bg-gray-100 text-zacon-navy"
      )}
    >
      <span className="font-bold text-lg">{value}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
