"use client";

import Image from "next/image";
import { useState } from "react";

interface CMSImageProps {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

/**
 * Componente de imagem otimizado para SEO do CMS
 *
 * - Data URLs (base64): renderiza com <img> nativo + lazy loading
 * - URLs do CMS: usa next/image para otimização automática (WebP)
 * - Sempre inclui alt text para SEO
 * - Suporta title para tooltip e SEO adicional
 */
export function CMSImage({
  src,
  alt,
  title,
  width = 800,
  height = 600,
  className = "",
  priority = false,
}: CMSImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Verificar se é data URL (base64)
  const isDataUrl = src.startsWith("data:");

  // Alt text obrigatório para SEO - usar título ou placeholder descritivo
  const seoAlt = alt || title || "Imagem do artigo";

  // Classe de loading para skeleton
  const loadingClass = isLoading
    ? "animate-pulse bg-gray-200"
    : "";

  // Se houver erro, mostrar placeholder
  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}
        style={{ width, height: "auto", aspectRatio: `${width}/${height}` }}
        role="img"
        aria-label={seoAlt}
      >
        <span className="text-gray-400 text-sm">Imagem indisponível</span>
      </div>
    );
  }

  // Para data URLs, usar img nativo com lazy loading
  // Next.js Image não suporta data URLs
  if (isDataUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={seoAlt}
        title={title}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`${className} ${loadingClass}`}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        style={{
          maxWidth: "100%",
          height: "auto",
          // Evitar CLS definindo aspect ratio
          aspectRatio: `${width}/${height}`,
        }}
      />
    );
  }

  // Para URLs normais, usar next/image com otimização
  // Next.js automaticamente converte para WebP quando possível
  return (
    <Image
      src={src}
      alt={seoAlt}
      title={title}
      width={width}
      height={height}
      priority={priority}
      quality={85}
      className={`${className} ${loadingClass}`}
      onLoad={() => setIsLoading(false)}
      onError={() => setHasError(true)}
      // Responsividade automática
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
      style={{
        maxWidth: "100%",
        height: "auto",
      }}
    />
  );
}

export default CMSImage;
