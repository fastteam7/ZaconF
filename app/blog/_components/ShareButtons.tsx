"use client";

import { useState, useEffect } from "react";
import {
  Share2,
  Link,
  Check,
  Linkedin,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ShareButtonsProps {
  title: string;
  url?: string;
  variant?: "floating" | "inline" | "compact";
}

export function ShareButtons({
  title,
  url,
  variant = "inline",
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only render with actual URL after client mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Use prop URL if provided, otherwise use window.location after mount
  const shareUrl = url || (mounted ? window.location.href : "");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodeURIComponent(title + " " + shareUrl)}`,
      color: "hover:bg-green-100 hover:text-green-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-blue-100 hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-sky-100 hover:text-sky-500",
    },
  ];

  if (variant === "floating") {
    return (
      <div className="fixed left-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2 z-40">
        <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-2 space-y-1">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-lg text-gray-500 transition-colors",
                link.color
              )}
              title={`Compartilhar no ${link.name}`}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
          <button
            onClick={copyToClipboard}
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-lg transition-colors",
              copied
                ? "bg-green-100 text-green-600"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            )}
            title="Copiar link"
          >
            {copied ? (
              <Check className="w-5 h-5" />
            ) : (
              <Link className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-1">
        <span className="text-sm text-zacon-graphite-muted mr-2">
          Compartilhar:
        </span>
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "p-2 rounded-lg text-gray-500 transition-colors",
              link.color
            )}
            title={`Compartilhar no ${link.name}`}
          >
            <link.icon className="w-4 h-4" />
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          className={cn(
            "p-2 rounded-lg transition-colors",
            copied
              ? "bg-green-100 text-green-600"
              : "text-gray-500 hover:bg-gray-100"
          )}
          title="Copiar link"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Link className="w-4 h-4" />
          )}
        </button>
      </div>
    );
  }

  // Inline variant (default)
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="flex items-center gap-1.5 text-sm text-zacon-graphite">
        <Share2 className="w-4 h-4" />
        Compartilhar:
      </span>
      <div className="flex items-center gap-2">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 transition-colors",
              link.color
            )}
          >
            <link.icon className="w-4 h-4" />
            <span className="hidden sm:inline">{link.name}</span>
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors",
            copied
              ? "bg-green-50 text-green-600 border-green-200"
              : "text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-100"
          )}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span className="hidden sm:inline">Copiado!</span>
            </>
          ) : (
            <>
              <Link className="w-4 h-4" />
              <span className="hidden sm:inline">Copiar link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
