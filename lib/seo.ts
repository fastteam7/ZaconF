import { Metadata } from "next";

export const siteConfig = {
  name: "ZACON Contabilidade",
  shortName: "ZACON",
  slogan: "Desde 2009 construindo relações de confiança em Ingleses.",
  description:
    "Escritório de contabilidade em Ingleses, Florianópolis, com mais de 15 anos de experiência. Abertura de empresas, MEI, imposto de renda, BPO financeiro, departamento pessoal e planejamento tributário. Atendimento presencial em Ingleses. (48) 98874-4359.",
  url: "https://zacon.com.br",
  phone: "(48) 98874-4359",
  phoneInternational: "+5548988744359",
  email: "zaconcontabil@gmail.com",
  whatsapp: "48988744359",
  foundingYear: 2009,
  // Coordenadas reais do escritório em Ingleses
  geo: {
    latitude: -27.4492,
    longitude: -48.3989,
  },
  address: {
    street: "Rod. Armando Calil Bulos, 5785",
    neighborhood: "Ingleses do Rio Vermelho",
    city: "Florianópolis",
    state: "SC",
    stateCode: "SC",
    zipCode: "88058-001",
    country: "Brasil",
    countryCode: "BR",
  },
  openingHours: {
    weekdays: { open: "08:00", close: "18:00" },
    saturday: null, // Fechado
    sunday: null, // Fechado
  },
  // Serviços principais (para keywords e schema)
  services: [
    "contabilidade",
    "abertura de empresas",
    "MEI",
    "imposto de renda",
    "departamento pessoal",
    "folha de pagamento",
    "planejamento tributário",
    "BPO financeiro",
    "regularização empresarial",
  ],
  // Nichos atendidos
  niches: [
    "médicos",
    "advogados",
    "dentistas",
    "engenheiros",
    "clínicas",
    "startups",
    "e-commerce",
    "prestadores de serviço",
  ],
  // Bairros de atuação
  bairros: [
    "Ingleses",
    "Centro",
    "Trindade",
    "Canasvieiras",
    "Jurerê",
    "Lagoa da Conceição",
    "Campeche",
    "Coqueiros",
  ],
  keywords: [
    // BRAND - Prioridade máxima
    "zacon contabilidade",
    "zacon",
    "zacon contabilidade florianópolis",
    "zacon contabilidade ingleses",

    // Região Ingleses (PRIORIDADE ALTA - sede do escritório)
    "contabilidade ingleses",
    "contabilidade em ingleses",
    "contador ingleses",
    "contador em ingleses",
    "contabilidade ingleses florianópolis",
    "contabilidade em ingleses florianópolis",
    "contador ingleses florianópolis",
    "escritório contabilidade ingleses",
    "contabilidade ingleses do rio vermelho",
    "abrir empresa ingleses",
    "abrir empresa em ingleses",
    "mei ingleses",
    "imposto de renda ingleses",
    "contabilidade para restaurantes ingleses",

    // Florianópolis geral
    "contabilidade florianópolis",
    "contador florianópolis",
    "escritório de contabilidade florianópolis",
    "contabilidade em florianópolis",
    "contador em florianópolis",
    "contabilidade sc",
    "contador sc",

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
    "contabilidade para advogados florianópolis",
    "contabilidade para startups florianópolis",
    "contabilidade para e-commerce florianópolis",
    "contabilidade simples nacional florianópolis",
    "contabilidade lucro presumido florianópolis",
    "contabilidade lucro real florianópolis",

    // Long tail
    "melhor contador florianópolis",
    "melhor contador ingleses",
    "contador de confiança florianópolis",
    "contador barato florianópolis",
    "contabilidade preço acessível florianópolis",
    "contabilidade humanizada florianópolis",
    "contador atendimento personalizado",
  ],
  social: {
    instagram: "https://instagram.com/zaconcontabilidade",
    facebook: "https://facebook.com/zaconcontabilidade",
    linkedin: "https://linkedin.com/company/zaconcontabilidade",
  },
  // CRC dos profissionais (importante para E-E-A-T)
  professionals: [
    {
      name: "Jucélia Alves de Lima",
      role: "Contadora e Sócia-Diretora",
      crc: "CRC/SC",
    },
    // {
    //   name: "Fernando Bressan Zanette",
    //   role: "Técnico em Contabilidade e Sócio",
    // },
  ],
};

export interface ConstructMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  noIndex?: boolean;
  pathname?: string;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  keywords = siteConfig.keywords,
  noIndex = false,
  pathname = "",
}: ConstructMetadataProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - Contabilidade em Ingleses Florianópolis | Contador desde 2009`;

  const url = `${siteConfig.url}${pathname}`;

  return {
    title: fullTitle,
    description,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
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
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
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
      // Adicionar quando tiver os códigos
      // google: 'seu-codigo-google',
      // yandex: 'seu-codigo-yandex',
    },
    other: {
      "geo.region": `BR-${siteConfig.address.stateCode}`,
      "geo.placename": siteConfig.address.city,
      "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
      ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
      "revisit-after": "7 days",
      rating: "general",
      distribution: "global",
      "format-detection": "telephone=no",
    },
  };
}
