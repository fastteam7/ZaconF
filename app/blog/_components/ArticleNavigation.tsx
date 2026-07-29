import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BlogPost } from "../data";

interface ArticleNavigationProps {
  previous?: BlogPost | null;
  next?: BlogPost | null;
}

export function ArticleNavigation({
  previous,
  next,
}: ArticleNavigationProps) {
  if (!previous && !next) return null;

  return (
    <nav
      className="my-12 grid gap-4 md:grid-cols-2"
      aria-label="Navegação entre artigos"
    >
      {previous ? (
        <Link
          href={`/blog/${previous.slug}`}
          className="group flex items-start gap-3 p-4 rounded-xl border border-gray-200 hover:border-zacon-corporate/30 hover:bg-zacon-corporate/5 transition-all"
        >
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-zacon-corporate/10 transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-zacon-corporate" />
          </span>
          <div className="min-w-0">
            <span className="text-xs font-medium text-zacon-graphite-muted uppercase tracking-wider">
              Anterior
            </span>
            <p className="mt-0.5 font-medium text-zacon-navy group-hover:text-zacon-corporate transition-colors line-clamp-2">
              {previous.title}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="group flex items-start gap-3 p-4 rounded-xl border border-gray-200 hover:border-zacon-corporate/30 hover:bg-zacon-corporate/5 transition-all text-right md:flex-row-reverse"
        >
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-zacon-corporate/10 transition-colors">
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-zacon-corporate" />
          </span>
          <div className="min-w-0">
            <span className="text-xs font-medium text-zacon-graphite-muted uppercase tracking-wider">
              Próximo
            </span>
            <p className="mt-0.5 font-medium text-zacon-navy group-hover:text-zacon-corporate transition-colors line-clamp-2">
              {next.title}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
