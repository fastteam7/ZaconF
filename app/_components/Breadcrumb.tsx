import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  // Sempre inclui Home como primeiro item
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center text-sm text-zacon-graphite-muted",
        className
      )}
    >
      <ol
        className="flex items-center flex-wrap gap-1"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          const isFirst = index === 0;

          return (
            <li
              key={item.href}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {!isFirst && (
                <ChevronRight
                  className="mx-2 h-4 w-4 text-zacon-silver flex-shrink-0"
                  aria-hidden="true"
                />
              )}

              {isLast ? (
                <span
                  className="font-medium text-zacon-navy"
                  itemProp="name"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="inline-flex items-center hover:text-zacon-corporate transition-colors"
                  itemProp="item"
                >
                  {isFirst && (
                    <Home className="mr-1 h-4 w-4" aria-hidden="true" />
                  )}
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}

              <meta itemProp="position" content={String(index + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// Versão escura para usar em fundos escuros (hero sections)
export function BreadcrumbDark({ items, className }: BreadcrumbProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center text-sm text-zacon-silver-light",
        className
      )}
    >
      <ol
        className="flex items-center flex-wrap gap-1"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          const isFirst = index === 0;

          return (
            <li
              key={item.href}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {!isFirst && (
                <ChevronRight
                  className="mx-2 h-4 w-4 text-zacon-silver/50 flex-shrink-0"
                  aria-hidden="true"
                />
              )}

              {isLast ? (
                <span
                  className="font-medium text-white"
                  itemProp="name"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="inline-flex items-center hover:text-white transition-colors"
                  itemProp="item"
                >
                  {isFirst && (
                    <Home className="mr-1 h-4 w-4" aria-hidden="true" />
                  )}
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}

              <meta itemProp="position" content={String(index + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
