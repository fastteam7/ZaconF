import { ImageResponse } from "next/og";
import { getPostBySlug } from "../data";

export const runtime = "edge";

export const alt = "ZACON Contabilidade - Blog";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #0A0A0A 0%, #0F172A 40%, #1E3A8A 100%)",
          }}
        >
          <span style={{ fontSize: 48, color: "white" }}>Post não encontrado</span>
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0A0A0A 0%, #0F172A 40%, #1E3A8A 100%)",
          fontFamily: "system-ui, sans-serif",
          padding: 60,
        }}
      >
        {/* Header com logo e categoria */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 60,
                height: 60,
                borderRadius: 12,
                background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)",
              }}
            >
              <span
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  color: "white",
                }}
              >
                Z
              </span>
            </div>
            <span
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "white",
              }}
            >
              ZACON
            </span>
          </div>

          {/* Categoria */}
          <div
            style={{
              display: "flex",
              padding: "12px 24px",
              borderRadius: 100,
              background: "rgba(59, 130, 246, 0.3)",
              border: "1px solid rgba(59, 130, 246, 0.5)",
            }}
          >
            <span
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: "#60A5FA",
              }}
            >
              {post.category}
            </span>
          </div>
        </div>

        {/* Titulo do Post */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 0",
          }}
        >
          <span
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              lineHeight: 1.2,
              maxWidth: "90%",
            }}
          >
            {post.title}
          </span>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            <span
              style={{
                fontSize: 18,
                color: "#9CA3AF",
              }}
            >
              {post.readingTime} de leitura
            </span>
            <span
              style={{
                fontSize: 18,
                color: "#9CA3AF",
              }}
            >
              •
            </span>
            <span
              style={{
                fontSize: 18,
                color: "#9CA3AF",
              }}
            >
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <span
            style={{
              fontSize: 18,
              color: "#60A5FA",
            }}
          >
            zacon.com.br/blog
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
