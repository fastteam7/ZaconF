import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { BlogPost } from "../data";

interface RelatedPostsProps {
  posts: BlogPost[];
  title?: string;
}

export function RelatedPosts({
  posts,
  title = "Artigos Relacionados",
}: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="my-12">
      <h3 className="text-xl font-semibold text-zacon-navy mb-6">{title}</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-zacon-corporate/30 hover:shadow-md transition-all"
          >
            <div className="mb-3 inline-flex rounded-full bg-zacon-corporate/10 px-2.5 py-0.5 text-xs font-semibold text-zacon-corporate">
              {post.category}
            </div>
            <h4 className="font-medium text-zacon-navy group-hover:text-zacon-corporate transition-colors line-clamp-2 mb-2">
              {post.title}
            </h4>
            <p className="text-sm text-zacon-graphite-light line-clamp-2 mb-3">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-zacon-graphite-muted">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "short",
                })}
              </span>
              <span className="flex items-center gap-1 text-zacon-corporate font-medium group-hover:translate-x-1 transition-transform">
                Ler
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
