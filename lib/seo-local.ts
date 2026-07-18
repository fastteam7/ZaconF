// Dados de SEO Local para bairros e nichos

export interface BairroData {
  slug: string;
  nome: string;
  nomeCompleto: string;
  descricao: string;
  descricaoLonga: string;
  caracteristicas: string[];
  servicos: string[];
  diferenciais: string[];
  faqs: { question: string; answer: string }[];
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
    descricaoLonga:
      "Ingleses do Rio Vermelho é o bairro mais populoso de Florianópolis, com mais de 50 mil habitantes e uma economia vibrante baseada no turismo, gastronomia e comércio. A região concentra milhares de empresas, desde pequenos estabelecimentos familiares até redes de franquias, hotéis e pousadas. Com praias paradisíacas e infraestrutura completa, Ingleses atrai empreendedores de diversos segmentos durante todo o ano, especialmente no verão quando a população pode triplicar. A ZACON Contabilidade está estrategicamente localizada na Rod. Armando Calil Bulos, oferecendo atendimento presencial para empresários que valorizam o contato direto com seu contador. Nossa equipe conhece profundamente as particularidades do mercado local, incluindo a sazonalidade do turismo, as exigências da vigilância sanitária para estabelecimentos de alimentação, e as melhores práticas tributárias para o comércio da região norte da ilha.",
    caracteristicas: [
      "Maior bairro de Florianópolis com mais de 50 mil habitantes",
      "Polo gastronômico com centenas de restaurantes e bares",
      "Principal destino turístico da região norte da ilha",
      "Crescimento empresarial acelerado ano após ano",
      "Infraestrutura completa com bancos, cartórios e órgãos públicos",
      "Fácil acesso via SC-401 e SC-403",
    ],
    servicos: [
      "Abertura de empresas em Ingleses",
      "Contabilidade para restaurantes e bares",
      "Contabilidade para pousadas e hotéis",
      "MEI e microempresas locais",
      "Departamento pessoal com gestão de sazonalidade",
      "Planejamento tributário para comércio",
      "Regularização de empresas",
      "BPO financeiro para negócios locais",
    ],
    diferenciais: [
      "Escritório localizado no próprio bairro de Ingleses",
      "Atendimento presencial sem necessidade de deslocamento ao centro",
      "Conhecimento profundo do mercado local",
      "Experiência com empresas de turismo e gastronomia",
      "Suporte para alta e baixa temporada",
      "Parceria com mais de 15 anos de experiência",
    ],
    faqs: [
      {
        question: "Onde fica o escritório da ZACON em Ingleses?",
        answer:
          "A ZACON Contabilidade está localizada na Rod. Armando Calil Bulos, 5785, em Ingleses do Rio Vermelho, Florianópolis. Estamos próximos ao centrinho de Ingleses, com fácil acesso e estacionamento.",
      },
      {
        question: "A ZACON atende empresas de outros bairros além de Ingleses?",
        answer:
          "Sim! Embora nosso escritório esteja em Ingleses, atendemos empresas de toda a Grande Florianópolis, incluindo Centro, Canasvieiras, Jurerê, Trindade e outros bairros. Também oferecemos atendimento remoto para clientes de outras regiões.",
      },
      {
        question: "Quanto custa abrir uma empresa em Ingleses?",
        answer:
          "O custo para abertura de empresa varia conforme o tipo societário e atividades. Para MEI, o processo é gratuito. Para ME e LTDA, os custos incluem taxas de registro (Junta Comercial, CNPJ, alvará) e honorários contábeis. Entre em contato para um orçamento personalizado.",
      },
      {
        question: "Vocês fazem contabilidade para restaurantes em Ingleses?",
        answer:
          "Sim! Temos ampla experiência com restaurantes, bares, lanchonetes e estabelecimentos de alimentação em Ingleses. Conhecemos as particularidades do setor, como sazonalidade, gestão de estoque, e obrigações da vigilância sanitária.",
      },
      {
        question: "Como funciona o atendimento da ZACON para empresas de Ingleses?",
        answer:
          "Oferecemos atendimento presencial em nosso escritório em Ingleses, além de suporte por WhatsApp, e-mail e telefone. Nosso horário de funcionamento é de segunda a sexta, das 8h às 18h. Também realizamos visitas às empresas quando necessário.",
      },
    ],
  },
  {
    slug: "centro",
    nome: "Centro",
    nomeCompleto: "Centro de Florianópolis",
    descricao:
      "O Centro de Florianópolis concentra grande parte dos serviços, comércio e escritórios da cidade. Oferecemos atendimento especializado para empresas da região central, com fácil acesso e comunicação eficiente.",
    descricaoLonga:
      "O Centro de Florianópolis é o coração comercial e administrativo da capital catarinense, concentrando escritórios, lojas, bancos e órgãos públicos. A região abriga milhares de empresas de diversos segmentos, desde o varejo tradicional até prestadores de serviços especializados. Mesmo com nosso escritório em Ingleses, atendemos empresas do Centro com a mesma qualidade e proximidade, oferecendo suporte completo em contabilidade, fiscal e departamento pessoal.",
    caracteristicas: [
      "Principal polo comercial e financeiro da cidade",
      "Concentração de escritórios e serviços",
      "Órgãos públicos, cartórios e Junta Comercial",
      "Facilidade para documentação e registros",
      "Acesso a bancos e instituições financeiras",
      "Centro histórico com comércio tradicional",
    ],
    servicos: [
      "Contabilidade empresarial",
      "Planejamento tributário",
      "Regularização de empresas",
      "BPO financeiro",
      "Abertura de empresas",
      "Alterações contratuais",
    ],
    diferenciais: [
      "Acompanhamento de processos na Junta Comercial",
      "Suporte para documentação em cartórios",
      "Atendimento remoto eficiente",
      "Experiência com empresas do setor de serviços",
    ],
    faqs: [
      {
        question: "A ZACON atende empresas do Centro de Florianópolis?",
        answer:
          "Sim! Embora nosso escritório esteja em Ingleses, atendemos empresas de todo o Centro de Florianópolis com a mesma qualidade e eficiência, através de atendimento presencial agendado ou remoto.",
      },
      {
        question: "Vocês acompanham processos na Junta Comercial?",
        answer:
          "Sim, realizamos todo o acompanhamento de processos na Junta Comercial de SC, localizada no Centro, incluindo abertura, alteração e baixa de empresas.",
      },
    ],
  },
  {
    slug: "trindade",
    nome: "Trindade",
    nomeCompleto: "Trindade",
    descricao:
      "A Trindade é conhecida por abrigar a UFSC e ter um ambiente empreendedor vibrante, com muitas startups e empresas de tecnologia. Atendemos empresas inovadoras com soluções contábeis modernas.",
    descricaoLonga:
      "A Trindade é o bairro que abriga a Universidade Federal de Santa Catarina (UFSC), criando um ecossistema único de inovação e empreendedorismo em Florianópolis. A região concentra incubadoras, aceleradoras e empresas de tecnologia que nasceram no ambiente universitário. Oferecemos contabilidade especializada para startups e empresas de tecnologia, com conhecimento em incentivos fiscais, Lei do Bem, e regimes tributários otimizados para o setor.",
    caracteristicas: [
      "Sede da UFSC - Universidade Federal de Santa Catarina",
      "Polo de startups e empresas de tecnologia",
      "Ambiente universitário empreendedor",
      "Incubadoras e aceleradoras de negócios",
      "Empresas inovadoras de diversos setores",
      "Mão de obra qualificada disponível",
    ],
    servicos: [
      "Contabilidade para startups",
      "Planejamento tributário para tech",
      "Abertura de empresas de tecnologia",
      "Consultoria para inovação",
      "Incentivos fiscais e Lei do Bem",
      "Contabilidade para e-commerce",
    ],
    diferenciais: [
      "Experiência com empresas de tecnologia",
      "Conhecimento em incentivos fiscais para inovação",
      "Suporte para captação de investimentos",
      "Contabilidade digital e moderna",
    ],
    faqs: [
      {
        question: "Vocês atendem startups da Trindade?",
        answer:
          "Sim! Temos experiência com startups e empresas de tecnologia, oferecendo contabilidade adaptada às necessidades de empresas em crescimento acelerado.",
      },
      {
        question: "Conhecem os incentivos fiscais para empresas de tecnologia?",
        answer:
          "Sim, orientamos sobre a Lei do Bem, Lei de Informática e outros incentivos disponíveis para empresas de tecnologia e inovação.",
      },
    ],
  },
  {
    slug: "canasvieiras",
    nome: "Canasvieiras",
    nomeCompleto: "Canasvieiras",
    descricao:
      "Canasvieiras é um dos principais balneários de Florianópolis, com forte presença de empresas de turismo, hospedagem e alimentação. Oferecemos contabilidade especializada para o setor de turismo.",
    descricaoLonga:
      "Canasvieiras é um dos balneários mais tradicionais e movimentados de Florianópolis, conhecido por suas praias de águas calmas e infraestrutura turística completa. O bairro concentra dezenas de hotéis, pousadas, restaurantes e comércio voltado ao turismo. A sazonalidade é uma característica marcante, com movimentação intensa no verão e tranquilidade no inverno. Nossa contabilidade é especializada em ajudar empresas de Canasvieiras a gerenciar essa sazonalidade, otimizando custos na baixa temporada e maximizando lucros na alta.",
    caracteristicas: [
      "Principal balneário do norte da ilha",
      "Forte setor de turismo e hotelaria",
      "Hotéis, pousadas e restaurantes",
      "Comércio sazonal intenso",
      "Praias de águas calmas ideais para famílias",
      "Infraestrutura turística completa",
    ],
    servicos: [
      "Contabilidade para turismo e hotelaria",
      "Gestão de hotéis e pousadas",
      "Folha de pagamento sazonal",
      "Planejamento para alta temporada",
      "Contabilidade para restaurantes",
      "BPO financeiro para empresas sazonais",
    ],
    diferenciais: [
      "Experiência com gestão de sazonalidade",
      "Conhecimento do setor de turismo",
      "Planejamento tributário para alta e baixa temporada",
      "Proximidade geográfica (bairro vizinho)",
    ],
    faqs: [
      {
        question: "Vocês entendem a sazonalidade das empresas de Canasvieiras?",
        answer:
          "Sim! Temos ampla experiência com empresas de turismo e hotelaria, ajudando a gerenciar a folha de pagamento sazonal, otimizar custos na baixa temporada e maximizar lucros no verão.",
      },
      {
        question: "Atendem pousadas e hotéis em Canasvieiras?",
        answer:
          "Sim, oferecemos contabilidade especializada para meios de hospedagem, incluindo gestão de custos, folha de pagamento e obrigações fiscais específicas do setor.",
      },
    ],
  },
  {
    slug: "jurere",
    nome: "Jurerê",
    nomeCompleto: "Jurerê Internacional",
    descricao:
      "Jurerê Internacional é sinônimo de alto padrão e exclusividade em Florianópolis. Atendemos empresas premium, profissionais liberais de alta renda e holdings familiares da região.",
    descricaoLonga:
      "Jurerê Internacional é o bairro mais exclusivo de Florianópolis, conhecido mundialmente por suas casas de alto padrão, beach clubs sofisticados e lifestyle premium. A região concentra empresários bem-sucedidos, profissionais liberais de alta renda e famílias com patrimônio significativo. Oferecemos serviços de contabilidade e consultoria adaptados a este público exigente, incluindo planejamento patrimonial, estruturação de holdings familiares e declarações de imposto de renda de alta complexidade.",
    caracteristicas: [
      "Bairro mais exclusivo de Florianópolis",
      "Empresas e negócios premium",
      "Profissionais liberais de alta renda",
      "Holdings e gestão patrimonial familiar",
      "Beach clubs e gastronomia de alto padrão",
      "Público exigente e sofisticado",
    ],
    servicos: [
      "Planejamento patrimonial e sucessório",
      "Estruturação de holding familiar",
      "IRPF de alta complexidade",
      "Consultoria personalizada",
      "Contabilidade para empresas premium",
      "Gestão de múltiplas fontes de renda",
    ],
    diferenciais: [
      "Experiência com patrimônio de alto valor",
      "Discrição e confidencialidade",
      "Atendimento personalizado e exclusivo",
      "Conhecimento em planejamento sucessório",
    ],
    faqs: [
      {
        question: "Vocês fazem planejamento patrimonial para famílias de Jurerê?",
        answer:
          "Sim, oferecemos consultoria em planejamento patrimonial e sucessório, incluindo estruturação de holdings familiares para proteção e otimização do patrimônio.",
      },
      {
        question: "Atendem declarações de IRPF complexas?",
        answer:
          "Sim, temos experiência com declarações de imposto de renda de alta complexidade, incluindo múltiplas fontes de renda, investimentos no exterior, e patrimônio diversificado.",
      },
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
