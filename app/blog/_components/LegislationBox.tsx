"use client";

import { Scale, ExternalLink } from "lucide-react";

interface LegislationBoxProps {
  law: string;
  article?: string;
  content: string;
  href?: string;
}

export function LegislationBox({ law, article, content, href }: LegislationBoxProps) {
  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
      <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <Scale className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          <span>{law}</span>
          {article && <span className="text-slate-500">• {article}</span>}
        </div>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-500 hover:text-slate-700 flex items-center gap-1 transition-colors"
          >
            Fonte <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        )}
      </div>
      <div className="p-4 text-sm text-slate-700 leading-relaxed italic">
        &ldquo;{content}&rdquo;
      </div>
    </div>
  );
}
