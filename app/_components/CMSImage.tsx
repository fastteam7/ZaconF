import Image from "next/image";

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
  // Verificar se é data URL (base64)
  const isDataUrl = src.startsWith("data:");

  // Alt text obrigatório para SEO - usar título ou placeholder descritivo
  const seoAlt = alt || title || "Imagem do artigo";

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
        className={className}
        style={{
          maxWidth: "100%",
          height: "auto",
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
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
      style={{
        maxWidth: "100%",
        height: "auto",
      }}
    />
  );
}

export default CMSImage;
