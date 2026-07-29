"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  // Extract headings from markdown content
  useEffect(() => {
    const extractedHeadings: TOCItem[] = [];
    const lines = content.split("\n");

    lines.forEach((line) => {
      const h2Match = line.match(/^## (.+)/);
      const h3Match = line.match(/^### (.+)/);

      if (h2Match) {
        const text = h2Match[1].trim();
        const id = slugify(text);
        extractedHeadings.push({ id, text, level: 2 });
      } else if (h3Match) {
        const text = h3Match[1].trim();
        const id = slugify(text);
        extractedHeadings.push({ id, text, level: 3 });
      }
    });

    setHeadings(extractedHeadings);
  }, [content]);

  // Track active heading on scroll
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -35% 0%",
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 3) {
    return null; // Don't show TOC for very short articles
  }

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className="hidden lg:block sticky top-24 self-start w-64 flex-shrink-0"
      aria-label="Índice do artigo"
    >
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100">
          <List className="w-4 h-4 text-zacon-corporate" />
          <span className="text-sm font-semibold text-zacon-navy">
            Neste artigo
          </span>
        </div>
        <ul className="space-y-1 max-h-[60vh] overflow-y-auto">
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={cn(
                  "w-full text-left text-sm py-1.5 px-2 rounded transition-colors hover:bg-gray-50",
                  heading.level === 3 && "pl-4",
                  activeId === heading.id
                    ? "text-zacon-corporate font-medium bg-zacon-corporate/5"
                    : "text-zacon-graphite-light hover:text-zacon-graphite"
                )}
              >
                <span className="line-clamp-2">{heading.text}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Mobile TOC dropdown
export function MobileTableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const extractedHeadings: TOCItem[] = [];
    const lines = content.split("\n");

    lines.forEach((line) => {
      const h2Match = line.match(/^## (.+)/);
      if (h2Match) {
        const text = h2Match[1].trim();
        const id = slugify(text);
        extractedHeadings.push({ id, text, level: 2 });
      }
    });

    setHeadings(extractedHeadings);
  }, [content]);

  if (headings.length < 3) return null;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className="lg:hidden mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm font-medium text-zacon-navy"
      >
        <span className="flex items-center gap-2">
          <List className="w-4 h-4" />
          Índice do artigo
        </span>
        <span className="text-zacon-graphite-muted">
          {isOpen ? "Fechar" : "Abrir"}
        </span>
      </button>
      {isOpen && (
        <ul className="mt-2 p-3 bg-white rounded-lg border border-gray-200 space-y-1">
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                onClick={() => scrollToHeading(heading.id)}
                className="w-full text-left text-sm py-2 px-2 rounded text-zacon-graphite hover:bg-gray-50 hover:text-zacon-corporate transition-colors"
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Utility function to create URL-friendly slugs
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^\w\s-]/g, "") // Remove non-word chars
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/--+/g, "-") // Replace multiple - with single -
    .trim();
}
