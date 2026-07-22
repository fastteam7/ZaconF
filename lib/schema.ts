import { siteConfig } from "./seo";

// Schema para Organization (AccountingService)
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: ["ZACON", "ZACON Contabilidade Ingleses", "ZACON Contabilidade Florianópolis"],
    description: siteConfig.description,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/opengraph-image`,
      width: 1200,
      height: 630,
    },
    image: `${siteConfig.url}/opengraph-image`,
    telephone: siteConfig.phoneInternational,
    email: siteConfig.email,
    foundingDate: siteConfig.foundingYear.toString(),
    founder: {
      "@type": "Person",
      name: "Jair Zanette",
      description: "Fundador da ZACON Contabilidade (in memoriam)",
    },
    employee: siteConfig.professionals.map((prof) => ({
      "@type": "Person",
      name: prof.name,
      jobTitle: prof.role,
      ...(prof.crc && {
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "professional license",
          name: prof.crc,
        },
      }),
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zipCode,
      addressCountry: siteConfig.address.countryCode,
      name: `${siteConfig.name} - ${siteConfig.address.neighborhood}`,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Florianópolis",
        "@id": "https://www.wikidata.org/wiki/Q40269",
      },
      {
        "@type": "State",
        name: "Santa Catarina",
        "@id": "https://www.wikidata.org/wiki/Q41115",
      },
      {
        "@type": "Neighborhood",
        name: "Ingleses",
        containedInPlace: {
          "@type": "City",
          name: "Florianópolis",
        },
      },
      {
        "@type": "Place",
        name: "Ingleses do Rio Vermelho",
        containedInPlace: {
          "@type": "City",
          name: "Florianópolis",
        },
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      geoRadius: "50000",
    },
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: ["Dinheiro", "PIX", "Transferência Bancária", "Boleto"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: siteConfig.openingHours.weekdays.open,
        closes: siteConfig.openingHours.weekdays.close,
      },
    ],
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneInternational,
        contactType: "customer service",
        availableLanguage: ["Portuguese"],
        areaServed: "BR",
      },
      {
        "@type": "ContactPoint",
        email: siteConfig.email,
        contactType: "customer service",
        availableLanguage: ["Portuguese"],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Contábeis",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Abertura de Empresas",
            description:
              "Constituição de empresas MEI, ME, LTDA. Registro na Junta Comercial, CNPJ, alvará e inscrições.",
            url: `${siteConfig.url}/servicos/abertura-de-empresas`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Contabilidade Empresarial",
            description:
              "Escrituração contábil, demonstrações financeiras, balanços e análises gerenciais.",
            url: `${siteConfig.url}/servicos/contabilidade-empresarial`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Departamento Pessoal",
            description:
              "Admissões, demissões, folha de pagamento, eSocial, FGTS e rescisões.",
            url: `${siteConfig.url}/servicos/departamento-pessoal`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Imposto de Renda Pessoa Física",
            description:
              "Declaração anual completa, regularizações, malha fina e retificações.",
            url: `${siteConfig.url}/servicos/imposto-de-renda`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Planejamento Tributário",
            description:
              "Consultoria estratégica para redução legal de impostos e otimização fiscal.",
            url: `${siteConfig.url}/servicos/planejamento-tributario`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "BPO Financeiro",
            description:
              "Terceirização do financeiro com gestão completa, contas a pagar e receber, fluxo de caixa.",
            url: `${siteConfig.url}/servicos/bpo-financeiro`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Contabilidade para MEI",
            description:
              "Abertura, regularização, declaração anual DASN-SIMEI e transição para ME.",
            url: `${siteConfig.url}/servicos/contabilidade-mei`,
          },
        },
      ],
    },
    knowsAbout: [
      "Contabilidade",
      "Abertura de Empresas",
      "Planejamento Tributário",
      "Departamento Pessoal",
      "Imposto de Renda",
      "BPO Financeiro",
      "MEI",
      "Simples Nacional",
      "Lucro Presumido",
      "Lucro Real",
    ],
    slogan: siteConfig.slogan,
  };
}

// Schema para LocalBusiness
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneInternational,
    email: siteConfig.email,
    image: `${siteConfig.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zipCode,
      addressCountry: siteConfig.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: {
      "@type": "City",
      name: "Florianópolis",
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: siteConfig.openingHours.weekdays.open,
        closes: siteConfig.openingHours.weekdays.close,
      },
    ],
  };
}

// Schema para Website
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "pt-BR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// Schema para Breadcrumb
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

// Schema para FAQ
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Schema para Service
export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  faqs?: { question: string; answer: string }[];
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}${service.url}/#service`,
    name: service.name,
    description: service.description,
    url: `${siteConfig.url}${service.url}`,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "City",
      name: "Florianópolis",
    },
    serviceType: "Accounting",
    category: "Serviços Contábeis",
  };

  return schema;
}

// Schema para Blog Post (Article)
export function getArticleSchema(post: {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteConfig.url}/blog/${post.slug}/#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    inLanguage: "pt-BR",
  };
}

// Schema para ContactPage
export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteConfig.url}/contato/#contactpage`,
    name: "Contato - ZACON Contabilidade",
    description:
      "Entre em contato com a ZACON Contabilidade. Atendimento personalizado em Florianópolis.",
    url: `${siteConfig.url}/contato`,
    mainEntity: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

// Schema para AboutPage
export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteConfig.url}/sobre/#aboutpage`,
    name: "Sobre a ZACON Contabilidade",
    description:
      "Conheça a história da ZACON Contabilidade, fundada em 2009 em Florianópolis.",
    url: `${siteConfig.url}/sobre`,
    mainEntity: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

// Schema para HowTo (processos)
export function getHowToSchema(howTo: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    ...(howTo.totalTime && { totalTime: howTo.totalTime }),
    step: howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

// Schema para página de bairro/local
export function getLocalPageSchema(local: {
  name: string;
  description: string;
  url: string;
  areaName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}${local.url}/#webpage`,
    name: local.name,
    description: local.description,
    url: `${siteConfig.url}${local.url}`,
    about: {
      "@type": "Service",
      name: `Contabilidade em ${local.areaName}`,
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: local.areaName,
        containedInPlace: {
          "@type": "City",
          name: "Florianópolis",
        },
      },
    },
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
  };
}
