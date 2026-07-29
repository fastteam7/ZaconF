"use client";

import Link from "next/link";
import { ArrowRight, Building2, Calculator, FileText, Users, Wallet, Scale, Briefcase, ClipboardList } from "lucide-react";

const serviceIcons: Record<string, typeof Building2> = {
  "abertura-de-empresas": Building2,
  "contabilidade-empresarial": Calculator,
  "departamento-pessoal": Users,
  "imposto-de-renda": FileText,
  "bpo-financeiro": Wallet,
  "planejamento-tributario": Scale,
  "contabilidade-mei": Briefcase,
  "regularizacao-empresarial": ClipboardList,
};

interface ServiceCardProps {
  slug: string;
  title: string;
  description?: string;
}

export function ServiceCard({ slug, title, description }: ServiceCardProps) {
  const Icon = serviceIcons[slug] || Calculator;

  return (
    <Link
      href={`/servicos/${slug}`}
      className="group my-4 flex items-center gap-4 p-4 rounded-xl border border-zacon-corporate/20 bg-zacon-corporate/5 hover:bg-zacon-corporate/10 hover:border-zacon-corporate/40 transition-all no-underline"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-zacon-corporate/10 flex items-center justify-center text-zacon-corporate">
        <Icon className="w-6 h-6" aria-hidden="true" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-zacon-navy group-hover:text-zacon-corporate transition-colors">
          {title}
        </h4>
        {description && (
          <p className="text-sm text-zacon-graphite-light mt-0.5 truncate">{description}</p>
        )}
      </div>
      <ArrowRight className="w-5 h-5 text-zacon-corporate group-hover:translate-x-1 transition-transform flex-shrink-0" aria-hidden="true" />
    </Link>
  );
}
