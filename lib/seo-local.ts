// Dados de SEO Local para bairros e nichos

export interface BairroData {
  slug: string;
  nome: string;
  nomeCompleto: string;
  descricao: string;
  caracteristicas: string[];
  servicos: string[];
}

export interface NichoData {
  slug: string;
  nome: string;
  nomePlural: string;
  descricao: string;
  beneficios: string[];
  servicos: string[];
  faqs: { question: string; answer: string }[];
}

export const bairros: BairroData[] = [
  {
    slug: "ingleses",
    nome: "Ingleses",
    nomeCompleto: "Ingleses do Rio Vermelho",
    descricao:
      "Ingleses é um dos bairros mais populosos de Florianópolis, com forte atividade comercial e turística. A ZACON Contabilidade está localizada nesta região, oferecendo atendimento próximo e personalizado para empresas e profissionais locais.",
    caracteristicas: [
      "Um dos maiores bairros de Florianópolis",
      "Forte comércio local",
      "Polo gastronômico e turístico",
      "Crescimento empresarial constante",
    ],
    servicos: [
      "Abertura de empresas",
      "Contabilidade para comércio",
      "MEI e microempresas",
      "Departamento pessoal",
    ],
  },
  {
    slug: "centro",
    nome: "Centro",
    nomeCompleto: "Centro de Florianópolis",
    descricao:
      "O Centro de Florianópolis concentra grande parte dos serviços, comércio e escritórios da cidade. Oferecemos atendimento especializado para empresas da região central, com fácil acesso e comunicação eficiente.",
    caracteristicas: [
      "Principal polo comercial da cidade",
      "Concentração de serviços",
      "Órgãos públicos e cartórios",
      "Facilidade de documentação",
    ],
    servicos: [
      "Contabilidade empresarial",
      "Planejamento tributário",
      "Regularização de empresas",
      "BPO financeiro",
    ],
  },
  {
    slug: "trindade",
    nome: "Trindade",
    nomeCompleto: "Trindade",
    descricao:
      "A Trindade é conhecida por abrigar a UFSC e ter um ambiente empreendedor vibrante, com muitas startups e empresas de tecnologia. Atendemos empresas inovadoras com soluções contábeis modernas.",
    caracteristicas: [
      "Proximidade com a UFSC",
      "Polo de startups e tecnologia",
      "Ambiente universitário empreendedor",
      "Empresas inovadoras",
    ],
    servicos: [
      "Contabilidade para startups",
      "Planejamento tributário para tech",
      "Abertura de empresas de tecnologia",
      "Consultoria para inovação",
    ],
  },
  {
    slug: "canasvieiras",
    nome: "Canasvieiras",
    nomeCompleto: "Canasvieiras",
    descricao:
      "Canasvieiras é um dos principais balneários de Florianópolis, com forte presença de empresas de turismo, hospedagem e alimentação. Oferecemos contabilidade especializada para o setor de turismo.",
    caracteristicas: [
      "Principal balneário do norte da ilha",
      "Forte setor de turismo",
      "Hotéis, pousadas e restaurantes",
      "Comércio sazonal intenso",
    ],
    servicos: [
      "Contabilidade para turismo",
      "Gestão de hotéis e pousadas",
      "Folha de pagamento sazonal",
      "Planejamento para alta temporada",
    ],
  },
  {
    slug: "jurere",
    nome: "Jurerê",
    nomeCompleto: "Jurerê Internacional",
    descricao:
      "Jurerê Internacional é sinônimo de alto padrão e exclusividade em Florianópolis. Atendemos empresas premium, profissionais liberais de alta renda e holdings familiares da região.",
    caracteristicas: [
      "Bairro de alto padrão",
      "Empresas premium",
      "Profissionais liberais de sucesso",
      "Holdings e patrimônio familiar",
    ],
    servicos: [
      "Planejamento patrimonial",
      "Holding familiar",
      "IRPF de alta complexidade",
      "Consultoria personalizada",
    ],
  },
];

export const nichos: NichoData[] = [
  {
    slug: "medicos",
    nome: "Médicos",
    nomePlural: "Médicos",
    descricao:
      "A contabilidade para médicos exige conhecimento específico sobre tributação de profissionais da saúde, escolha entre PJ e CLT, e estratégias de planejamento fiscal. Oferecemos atendimento especializado para médicos em Florianópolis.",
    beneficios: [
      "Economia de até 40% em impostos",
      "Escolha ideal entre PJ e CLT",
      "Planejamento tributário especializado",
      "Gestão de múltiplas fontes de renda",
    ],
    servicos: [
      "Abertura de PJ para médicos",
      "Contabilidade mensal",
      "Planejamento tributário",
      "Declaração de IRPF",
    ],
    faqs: [
      {
        question: "Vale a pena médico ter CNPJ?",
        answer:
          "Na maioria dos casos, sim. Médicos com rendimentos acima de R$ 15.000/mês podem economizar significativamente atuando como PJ, especialmente no Lucro Presumido.",
      },
      {
        question: "Qual o melhor regime tributário para médicos?",
        answer:
          "Depende do faturamento e estrutura de custos. Geralmente, o Lucro Presumido é mais vantajoso para médicos com faturamento acima de R$ 15.000/mês.",
      },
    ],
  },
  {
    slug: "advogados",
    nome: "Advogados",
    nomePlural: "Advogados",
    descricao:
      "Advogados possuem características tributárias específicas, especialmente relacionadas à sociedade de advogados e ao ISS fixo. Oferecemos contabilidade especializada para escritórios de advocacia em Florianópolis.",
    beneficios: [
      "ISS fixo para sociedades de advogados",
      "Tributação otimizada",
      "Gestão de múltiplos clientes",
      "Compliance trabalhista",
    ],
    servicos: [
      "Abertura de sociedade de advogados",
      "Contabilidade para escritórios",
      "Planejamento tributário",
      "Gestão financeira",
    ],
    faqs: [
      {
        question: "Sociedade de advogados paga ISS fixo?",
        answer:
          "Sim, em muitas cidades a sociedade uniprofissional de advogados pode optar pelo ISS fixo por profissional, gerando economia significativa.",
      },
      {
        question: "Qual a melhor forma jurídica para advogados?",
        answer:
          "A Sociedade Simples de Advocacia é a forma mais comum, permitindo benefícios fiscais específicos da categoria.",
      },
    ],
  },
  {
    slug: "dentistas",
    nome: "Dentistas",
    nomePlural: "Dentistas",
    descricao:
      "Dentistas enfrentam desafios tributários semelhantes aos médicos, mas com particularidades próprias da odontologia. Oferecemos contabilidade especializada para consultórios odontológicos e clínicas em Florianópolis.",
    beneficios: [
      "Tributação otimizada para consultórios",
      "Gestão de equipamentos e insumos",
      "Planejamento para clínicas",
      "Economia fiscal comprovada",
    ],
    servicos: [
      "Abertura de consultório",
      "Contabilidade mensal",
      "Planejamento tributário",
      "Gestão financeira",
    ],
    faqs: [
      {
        question: "Dentista deve atuar como PJ?",
        answer:
          "Para rendimentos acima de R$ 10.000/mês, geralmente a PJ é mais vantajosa. Fazemos uma análise personalizada para cada caso.",
      },
      {
        question: "Como funciona a tributação de clínicas odontológicas?",
        answer:
          "Clínicas odontológicas podem optar pelo Simples Nacional, Lucro Presumido ou Lucro Real. A escolha depende do faturamento e estrutura de custos.",
      },
    ],
  },
  {
    slug: "engenheiros",
    nome: "Engenheiros",
    nomePlural: "Engenheiros",
    descricao:
      "Engenheiros que atuam como consultores, projetistas ou gestores de obras têm necessidades contábeis específicas. Oferecemos contabilidade especializada para profissionais de engenharia em Florianópolis.",
    beneficios: [
      "Tributação otimizada para projetos",
      "Gestão de contratos de obra",
      "ART e documentação técnica",
      "Planejamento para sazonalidade",
    ],
    servicos: [
      "Abertura de empresa de engenharia",
      "Contabilidade para projetos",
      "Planejamento tributário",
      "Gestão de contratos",
    ],
    faqs: [
      {
        question: "Engenheiro pode optar pelo Simples Nacional?",
        answer:
          "Sim, mas é preciso avaliar o Fator R. Se a folha de pagamento for inferior a 28% do faturamento, a tributação pode ser mais alta.",
      },
      {
        question: "Como tributar contratos de obra?",
        answer:
          "Depende do tipo de contrato (empreitada, prestação de serviços). Cada modalidade tem tributação específica que analisamos caso a caso.",
      },
    ],
  },
  {
    slug: "clinicas",
    nome: "Clínicas",
    nomePlural: "Clínicas e Consultórios",
    descricao:
      "Clínicas médicas, odontológicas e estéticas possuem obrigações específicas, desde vigilância sanitária até equiparação hospitalar. Oferecemos contabilidade completa para clínicas em Florianópolis.",
    beneficios: [
      "Equiparação hospitalar quando aplicável",
      "Tributação otimizada para clínicas",
      "Compliance com vigilância sanitária",
      "Gestão de equipe multidisciplinar",
    ],
    servicos: [
      "Abertura de clínicas",
      "Contabilidade especializada",
      "Departamento pessoal",
      "Consultoria regulatória",
    ],
    faqs: [
      {
        question: "O que é equiparação hospitalar?",
        answer:
          "É um benefício que permite a clínicas com determinada estrutura tributar com alíquotas reduzidas, similares às de hospitais.",
      },
      {
        question: "Clínica precisa de alvará sanitário?",
        answer:
          "Sim, clínicas de saúde precisam de alvará da Vigilância Sanitária. Orientamos todo o processo de regularização.",
      },
    ],
  },
];

export function getBairroBySlug(slug: string): BairroData | undefined {
  return bairros.find((b) => b.slug === slug);
}

export function getNichoBySlug(slug: string): NichoData | undefined {
  return nichos.find((n) => n.slug === slug);
}
