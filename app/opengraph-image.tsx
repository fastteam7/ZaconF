import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "ZACON Contabilidade - Escritório de Contabilidade em Florianópolis";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A0A0A 0%, #0F172A 40%, #1E3A8A 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo Container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 120,
              height: 120,
              borderRadius: 24,
              background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)",
              boxShadow: "0 0 60px rgba(59, 130, 246, 0.4)",
            }}
          >
            <span
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: "white",
              }}
            >
              Z
            </span>
          </div>
        </div>

        {/* Brand Name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "white",
              letterSpacing: "-2px",
            }}
          >
            ZACON
          </span>
          <span
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: "#9CA3AF",
              letterSpacing: "8px",
              textTransform: "uppercase",
              marginTop: 8,
            }}
          >
            Contabilidade
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 48,
            padding: "16px 32px",
            borderRadius: 100,
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <span
            style={{
              fontSize: 24,
              color: "#D1D5DB",
            }}
          >
            Desde 2009 construindo relações de confiança
          </span>
        </div>

        {/* Location */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 32,
          }}
        >
          <span
            style={{
              fontSize: 20,
              color: "#60A5FA",
            }}
          >
            Florianópolis - SC
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
