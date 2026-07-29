import Link from "next/link";
import Image from "next/image";
import { Award, BookOpen, Linkedin } from "lucide-react";

interface AuthorCardProps {
  name: string;
  role?: string;
  bio?: string;
  slug?: string;
  image?: string;
  credentials?: string[];
  articlesCount?: number;
}

export function AuthorCard({
  name,
  role,
  bio,
  slug,
  image,
  credentials = [],
  articlesCount,
}: AuthorCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const content = (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
      {/* Avatar */}
      <div className="flex-shrink-0">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-lg"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-zacon-corporate to-zacon-corporate-light flex items-center justify-center text-white text-xl font-bold ring-4 ring-white shadow-lg">
            {initials}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h4 className="font-semibold text-zacon-navy text-lg">{name}</h4>
          {slug && (
            <span className="text-zacon-corporate text-sm hover:underline">
              Ver perfil →
            </span>
          )}
        </div>

        {role && (
          <p className="text-sm text-zacon-corporate font-medium mb-2 flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            {role}
          </p>
        )}

        {credentials.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {credentials.map((cred, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-zacon-corporate/10 px-2.5 py-0.5 text-xs font-medium text-zacon-corporate"
              >
                {cred}
              </span>
            ))}
          </div>
        )}

        {bio && (
          <p className="text-sm text-zacon-graphite-light leading-relaxed mb-3">
            {bio}
          </p>
        )}

        {articlesCount !== undefined && (
          <p className="text-xs text-zacon-graphite-muted flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            {articlesCount} artigos publicados
          </p>
        )}
      </div>
    </div>
  );

  const containerClass =
    "my-8 p-5 sm:p-6 bg-gradient-to-br from-zacon-light-ultra to-white rounded-xl border border-zacon-light transition-all";

  if (slug) {
    return (
      <Link
        href={`/equipe/${slug}`}
        className={`${containerClass} hover:border-zacon-corporate/30 hover:shadow-sm block`}
      >
        {content}
      </Link>
    );
  }

  return <div className={containerClass}>{content}</div>;
}

// Compact version for article header
export function AuthorBadge({
  name,
  role,
  slug,
}: {
  name: string;
  role?: string;
  slug?: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const content = (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zacon-corporate to-zacon-corporate-light flex items-center justify-center text-white text-sm font-bold">
        {initials}
      </div>
      <div>
        <p className="font-medium text-zacon-navy text-sm">{name}</p>
        {role && (
          <p className="text-xs text-zacon-graphite-muted">{role}</p>
        )}
      </div>
    </div>
  );

  if (slug) {
    return (
      <Link
        href={`/equipe/${slug}`}
        className="hover:opacity-80 transition-opacity"
      >
        {content}
      </Link>
    );
  }

  return content;
}
