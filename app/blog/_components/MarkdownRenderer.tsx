"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { Callout, CalloutType } from "./Callout";
import { FAQSingle } from "./FAQ";
import { InlineCTA, CompactCTA } from "./InlineCTA";
import { Timeline, Stepper } from "./Timeline";
import { Checklist } from "./Checklist";
import { Stats } from "./Stats";
import { ComparisonTable, ProsCons } from "./ComparisonTable";
import { LegislationBox } from "./LegislationBox";
import { ServiceCard } from "./ServiceCard";
import { slugify } from "./TableOfContents";
import type { Components } from "react-markdown";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

interface ContentSegment {
  type: "markdown" | "block";
  content: string;
  blockType?: string;
}

// Pre-process content to split into markdown sections and custom blocks
function splitContent(content: string): ContentSegment[] {
  const segments: ContentSegment[] = [];
  const blockRegex = /:::(\w+)\n([\s\S]*?):::/g;

  let lastIndex = 0;
  let match;

  while ((match = blockRegex.exec(content)) !== null) {
    // Add markdown content before this block
    if (match.index > lastIndex) {
      const markdownContent = content.slice(lastIndex, match.index).trim();
      if (markdownContent) {
        segments.push({ type: "markdown", content: markdownContent });
      }
    }

    // Add the block
    segments.push({
      type: "block",
      content: match[2].trim(),
      blockType: match[1].toLowerCase(),
    });

    lastIndex = match.index + match[0].length;
  }

  // Add remaining markdown content
  if (lastIndex < content.length) {
    const remainingContent = content.slice(lastIndex).trim();
    if (remainingContent) {
      segments.push({ type: "markdown", content: remainingContent });
    }
  }

  return segments;
}

// Render a custom block based on its type
function renderBlock(type: string, content: string): React.ReactNode {
  switch (type) {
    case "dica":
    case "atencao":
    case "importante":
    case "erro":
    case "sucesso":
    case "contador":
      return <Callout type={type as CalloutType}>{content}</Callout>;

    case "faq": {
      // FAQ format: question\n---\nanswer
      const parts = content.split(/\n---\n/);
      if (parts.length >= 2) {
        return (
          <FAQSingle
            question={parts[0].trim()}
            answer={parts.slice(1).join("\n").trim()}
          />
        );
      }
      return <Callout type="importante">{content}</Callout>;
    }

    case "cta": {
      // CTA format: title\n---\ndescription\n---\nhref
      const parts = content.split(/\n---\n/);
      if (parts.length >= 1) {
        return (
          <InlineCTA
            title={parts[0]?.trim() || "Fale Conosco"}
            description={parts[1]?.trim()}
            href={parts[2]?.trim() || "/contato"}
            variant={parts.length > 2 ? "primary" : "secondary"}
          />
        );
      }
      return <CompactCTA />;
    }

    case "ctacompacto":
      return <CompactCTA text={content} />;

    case "ctamid": {
      // Mid-article CTA format: text|href
      const parts = content.split("|");
      return (
        <CompactCTA
          text={parts[0]?.trim() || "Precisa de ajuda? Fale com um contador"}
          href={parts[1]?.trim() || "/contato"}
        />
      );
    }

    case "timeline": {
      // Format: item1\n---\nitem2\n---\nitem3
      // Each item: title|description|badge
      const items = content.split(/\n---\n/).map((item) => {
        const parts = item.split("|");
        return {
          title: parts[0]?.trim() || "",
          description: parts[1]?.trim(),
          badge: parts[2]?.trim(),
        };
      }).filter((item) => item.title);
      return <Timeline items={items} />;
    }

    case "stepper": {
      // Format: step1\nstep2\nstep3
      const steps = content
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);
      return <Stepper steps={steps} />;
    }

    case "stats": {
      // Format: value|label|trend|description per line
      const items = content
        .split("\n")
        .map((line) => {
          const parts = line.split("|");
          const trend = parts[2]?.trim();
          return {
            value: parts[0]?.trim() || "",
            label: parts[1]?.trim() || "",
            trend: (trend === "up" || trend === "down" || trend === "neutral" ? trend : undefined) as "up" | "down" | "neutral" | undefined,
            description: parts[3]?.trim(),
          };
        })
        .filter((item) => item.value && item.label);
      return <Stats items={items} />;
    }

    case "checklist": {
      // Format: [x] item1\n[ ] item2\n[x] item3
      const items = content
        .split("\n")
        .map((line) => {
          const match = line.match(/^\[(x| )\]\s*(.+)/i);
          if (match) {
            return {
              text: match[2].trim(),
              checked: match[1].toLowerCase() === "x",
            };
          }
          // If no checkbox format, treat as checked item
          const trimmed = line.trim();
          if (trimmed) {
            return { text: trimmed, checked: true };
          }
          return null;
        })
        .filter((item): item is { text: string; checked: boolean } => item !== null && item.text !== "");
      return <Checklist items={items} />;
    }

    case "proscons": {
      // Format: + pro item\n- con item
      const pros: string[] = [];
      const cons: string[] = [];
      content.split("\n").forEach((line) => {
        const trimmed = line.trim();
        if (trimmed.startsWith("+")) {
          pros.push(trimmed.slice(1).trim());
        } else if (trimmed.startsWith("-")) {
          cons.push(trimmed.slice(1).trim());
        }
      });
      return <ProsCons pros={pros} cons={cons} />;
    }

    case "comparacao": {
      // Format: Headers first line, then feature|value1|value2|... per line
      const lines = content.split("\n").filter((l) => l.trim());
      if (lines.length < 2) {
        return <div className="p-4 bg-gray-100 rounded-lg">{content}</div>;
      }
      const headers = lines[0].split("|").map((h) => h.trim());
      const rows = lines.slice(1).map((line) => {
        const parts = line.split("|");
        return {
          feature: parts[0]?.trim() || "",
          values: parts.slice(1).map((v) => {
            const trimmed = v.trim().toLowerCase();
            if (trimmed === "sim" || trimmed === "✓" || trimmed === "yes") return true;
            if (trimmed === "não" || trimmed === "nao" || trimmed === "✗" || trimmed === "no") return false;
            return v.trim();
          }),
        };
      });
      return <ComparisonTable headers={headers} rows={rows} />;
    }

    case "lei": {
      // Format: law|article|content|href
      const parts = content.split("|");
      return (
        <LegislationBox
          law={parts[0]?.trim() || ""}
          article={parts[1]?.trim()}
          content={parts[2]?.trim() || content}
          href={parts[3]?.trim()}
        />
      );
    }

    case "servico": {
      // Format: slug|title|description
      const parts = content.split("|");
      return (
        <ServiceCard
          slug={parts[0]?.trim() || ""}
          title={parts[1]?.trim() || ""}
          description={parts[2]?.trim()}
        />
      );
    }

    default:
      return <div className="p-4 bg-gray-100 rounded-lg">{content}</div>;
  }
}

// Markdown components for ReactMarkdown
const markdownComponents: Components = {
  // Headings with IDs for TOC
  h1: ({ children }) => {
    const text = String(children);
    const id = slugify(text);
    return (
      <h2
        id={id}
        className="scroll-mt-24 text-2xl sm:text-3xl font-bold text-zacon-navy mt-10 mb-4 pb-2 border-b border-gray-100"
      >
        {children}
      </h2>
    );
  },
  h2: ({ children }) => {
    const text = String(children);
    const id = slugify(text);
    return (
      <h2
        id={id}
        className="scroll-mt-24 text-xl sm:text-2xl font-bold text-zacon-navy mt-10 mb-4"
      >
        {children}
      </h2>
    );
  },
  h3: ({ children }) => {
    const text = String(children);
    const id = slugify(text);
    return (
      <h3
        id={id}
        className="scroll-mt-24 text-lg sm:text-xl font-semibold text-zacon-navy mt-8 mb-3"
      >
        {children}
      </h3>
    );
  },
  h4: ({ children }) => (
    <h4 className="text-base sm:text-lg font-semibold text-zacon-navy mt-6 mb-2">
      {children}
    </h4>
  ),

  // Paragraphs
  p: ({ children }) => (
    <p className="text-zacon-graphite leading-relaxed my-4">
      {children}
    </p>
  ),

  // Links
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    const isInternal = href?.startsWith("/");

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zacon-corporate font-medium hover:text-zacon-corporate-dark underline underline-offset-2 inline-flex items-center gap-1"
        >
          {children}
          <ExternalLink className="w-3 h-3 flex-shrink-0" />
        </a>
      );
    }

    if (isInternal) {
      return (
        <Link
          href={href || "/"}
          className="text-zacon-corporate font-medium hover:text-zacon-corporate-dark underline underline-offset-2"
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className="text-zacon-corporate font-medium hover:text-zacon-corporate-dark underline underline-offset-2"
      >
        {children}
      </a>
    );
  },

  // Lists
  ul: ({ children }) => (
    <ul className="my-4 space-y-2 list-none">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 space-y-2 list-decimal list-inside marker:text-zacon-corporate marker:font-semibold">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="flex items-start gap-2 text-zacon-graphite leading-relaxed">
      <span className="text-zacon-corporate mt-1.5 text-sm">•</span>
      <span className="flex-1">{children}</span>
    </li>
  ),

  // Blockquotes
  blockquote: ({ children }) => (
    <blockquote className="my-6 pl-4 border-l-4 border-zacon-corporate/30 bg-zacon-corporate/5 py-3 pr-4 rounded-r-lg italic text-zacon-graphite">
      {children}
    </blockquote>
  ),

  // Code
  code: ({ className, children }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="px-1.5 py-0.5 bg-gray-100 text-zacon-corporate text-sm rounded font-mono">
          {children}
        </code>
      );
    }
    return (
      <code className={cn("font-mono text-sm", className)}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="my-6 p-4 bg-gray-900 text-gray-100 rounded-xl overflow-x-auto text-sm">
      {children}
    </pre>
  ),

  // Tables
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-full divide-y divide-gray-200">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-gray-50">{children}</thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-gray-100 bg-white">{children}</tbody>
  ),
  tr: ({ children }) => (
    <tr className="hover:bg-gray-50/50 transition-colors">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left text-sm font-semibold text-zacon-navy">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-sm text-zacon-graphite whitespace-nowrap">
      {children}
    </td>
  ),

  // Horizontal Rule
  hr: () => (
    <hr className="my-8 border-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
  ),

  // Strong and emphasis
  strong: ({ children }) => (
    <strong className="font-semibold text-zacon-navy">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-zacon-graphite">{children}</em>
  ),
};

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  // Split content into segments (markdown and blocks)
  const segments = splitContent(content);

  return (
    <div className={cn("markdown-content", className)}>
      {segments.map((segment, index) => {
        if (segment.type === "block" && segment.blockType) {
          return (
            <div key={index}>
              {renderBlock(segment.blockType, segment.content)}
            </div>
          );
        }

        return (
          <ReactMarkdown
            key={index}
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {segment.content}
          </ReactMarkdown>
        );
      })}
    </div>
  );
}
