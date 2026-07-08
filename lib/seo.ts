import { Metadata } from "next";

const siteConfig = {
  name: "ZACON Contabilidade",
  slogan: "Desde 2009 construindo relações de confiança.",
  description:
    "Escritório de contabilidade em Florianópolis com mais de 15 anos de experiência. Abertura de empresas, MEI, imposto de renda, BPO financeiro, departamento pessoal e planejamento tributário. Atendimento personalizado e preços justos.",
  url: "https://zacon.com.br",
  ogImage: "/og-image.jpg",
  phone: "(48) 98874-4359",
  email: "zaconcontabil@gmail.com",
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
    // Principais termos de busca
    "contabilidade florianópolis",
    "contador florianópolis",
    "escritório de contabilidade florianópolis",
    "contabilidade em florianópolis",
    "contador em florianópolis",

    // Serviços específicos
    "abertura de empresa florianópolis",
    "abrir empresa florianópolis",
    "abrir cnpj florianópolis",
    "como abrir empresa florianópolis",
    "contabilidade para mei florianópolis",
    "mei florianópolis",
    "declaração imposto de renda florianópolis",
    "imposto de renda pessoa física florianópolis",
    "irpf florianópolis",
    "planejamento tributário florianópolis",
    "bpo financeiro florianópolis",
    "terceirização financeira florianópolis",
    "departamento pessoal florianópolis",
    "folha de pagamento florianópolis",
    "esocial florianópolis",

    // Região Ingleses
    "contabilidade ingleses florianópolis",
    "contador ingleses",
    "escritório contabilidade ingleses",

    // Termos genéricos importantes
    "contabilidade online florianópolis",
    "contabilidade empresarial",
    "assessoria contábil florianópolis",
    "consultoria contábil florianópolis",
    "regularização de empresas florianópolis",
    "baixa de empresa florianópolis",
    "alteração contrato social florianópolis",

    // Nichos específicos
    "contabilidade para médicos florianópolis",
    "contabilidade para dentistas florianópolis",
    "contabilidade área da saúde florianópolis",
    "contabilidade para startups florianópolis",
    "contabilidade para e-commerce florianópolis",
    "contabilidade simples nacional florianópolis",
    "contabilidade lucro presumido florianópolis",

    // Long tail
    "melhor contador florianópolis",
    "contador de confiança florianópolis",
    "contador barato florianópolis",
    "contabilidade preço acessível florianópolis",
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
    : `${siteConfig.name} - Contabilidade em Florianópolis | Contador desde 2009`;

  const url = `${siteConfig.url}${pathname}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    category: "Contabilidade",
    classification: "Serviços Contábeis",
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
          alt: `${siteConfig.name} - Escritório de Contabilidade em Florianópolis`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@zaconcontabilidade",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: false,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // Adicionar quando tiver
      // google: 'seu-codigo-google',
      // yandex: 'seu-codigo-yandex',
    },
    other: {
      "geo.region": "BR-SC",
      "geo.placename": "Florianópolis",
      "geo.position": "-27.4344;-48.3944",
      "ICBM": "-27.4344, -48.3944",
      "revisit-after": "7 days",
      "rating": "general",
      "distribution": "global",
    },
  };
}
