import { Metadata } from "next";

const siteConfig = {
  name: "ZACON Contabilidade",
  slogan: "Desde 2009 construindo relações de confiança.",
  description:
    "Escritório de contabilidade com mais de 15 anos de experiência. Tradição, atendimento humanizado, tecnologia e soluções estratégicas para empresas e pessoas físicas.",
  url: "https://zacon.com.br",
  ogImage: "/og-image.jpg",
  phone: "(48) 98874-4359",
  email: "contato@zacon.com.br",
  whatsapp: "48988744359",
  foundingYear: 2009,
  address: {
    street: "Rod. Armando Calil Bulos, 5785",
    neighborhood: "Ingleses do Rio Vermelho",
    city: "Florianópolis",
    state: "SC",
    zipCode: "88058-001",
    country: "BR",
  },
  keywords: [
    "contabilidade Florianópolis",
    "contador Florianópolis",
    "escritório de contabilidade",
    "abertura de empresa",
    "contabilidade para MEI",
    "planejamento tributário",
    "BPO financeiro",
    "imposto de renda pessoa física",
    "departamento pessoal",
    "folha de pagamento",
    "contabilidade empresarial",
    "assessoria contábil",
    "regularização de empresas",
    "consultoria contábil",
  ],
  social: {
    instagram: "https://instagram.com/zaconcontabilidade",
    facebook: "https://facebook.com/zaconcontabilidade",
    linkedin: "https://linkedin.com/company/zaconcontabilidade",
  },
};

export { siteConfig };

interface ConstructMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  pathname?: string;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  keywords = siteConfig.keywords,
  image = siteConfig.ogImage,
  noIndex = false,
  pathname = "",
}: ConstructMetadataProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - Contabilidade em Florianópolis há mais de 15 anos`;

  const url = `${siteConfig.url}${pathname}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
