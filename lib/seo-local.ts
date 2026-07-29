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
      "O Centro de Florianópolis é o coração comercial e administrativo da capital catarinense, concentrando escritórios, lojas, bancos e órgãos públicos em um raio de poucos quilômetros. A região abriga milhares de empresas de diversos segmentos, desde o varejo tradicional na Rua Felipe Schmidt até prestadores de serviços especializados nos edifícios comerciais da Avenida Rio Branco. O Centro também é estratégico por sediar a Junta Comercial de SC, cartórios, Receita Federal e prefeitura, facilitando todos os trâmites empresariais. Mesmo com nosso escritório localizado em Ingleses, atendemos empresas do Centro de Florianópolis com a mesma qualidade e proximidade. Oferecemos atendimento presencial agendado no Centro, suporte completo por WhatsApp e e-mail, e acompanhamento de processos na Junta Comercial e órgãos públicos. Nossa equipe conhece profundamente a dinâmica do comércio central, as exigências do varejo e as particularidades dos prestadores de serviços que atuam na região.",
    caracteristicas: [
      "Principal polo comercial e financeiro de Florianópolis",
      "Sede da Junta Comercial, Receita Federal e Prefeitura",
      "Concentração de escritórios de advocacia, contabilidade e consultoria",
      "Varejo tradicional nas ruas Felipe Schmidt e Conselheiro Mafra",
      "Acesso facilitado por transporte público e terminais",
      "Centro histórico com mercado público e patrimônio cultural",
    ],
    servicos: [
      "Contabilidade empresarial",
      "Planejamento tributário",
      "Regularização de empresas",
      "BPO financeiro",
      "Abertura de empresas",
      "Alterações contratuais",
      "Departamento pessoal",
      "Imposto de renda pessoa física",
    ],
    diferenciais: [
      "Acompanhamento presencial de processos na Junta Comercial e cartórios",
      "Atendimento híbrido: presencial agendado no Centro ou remoto",
      "Experiência com varejo, comércio e prestadores de serviços",
      "Suporte para empresas com múltiplas filiais",
      "Consultoria para migração de regimes tributários",
    ],
    faqs: [
      {
        question: "A ZACON atende empresas do Centro de Florianópolis?",
        answer:
          "Sim! Embora nosso escritório esteja em Ingleses, atendemos empresas de todo o Centro de Florianópolis. Oferecemos atendimento presencial agendado na região central, acompanhamento de processos na Junta Comercial, e suporte remoto completo por WhatsApp, e-mail e videoconferência.",
      },
      {
        question: "Vocês acompanham processos na Junta Comercial?",
        answer:
          "Sim, realizamos todo o acompanhamento de processos na Junta Comercial de SC, localizada no Centro. Isso inclui abertura de empresas, alterações contratuais, transformação de tipo societário e baixa de empresas. Nosso protocolo é digital, mas acompanhamos presencialmente quando necessário.",
      },
      {
        question: "Quanto custa abrir uma empresa no Centro de Florianópolis?",
        answer:
          "Os custos variam conforme o tipo de empresa. MEI: gratuito. ME Simples: R$ 500 a R$ 1.200 (taxas + honorários). LTDA: R$ 800 a R$ 2.000. Inclui registro na Junta, CNPJ, Inscrição Municipal e orientação para alvará. Solicite orçamento personalizado.",
      },
      {
        question: "Atendem escritórios de advocacia e consultoria?",
        answer:
          "Sim, temos experiência com escritórios de advocacia (sociedade uniprofissional com ISS fixo), consultorias e prestadores de serviços. Conhecemos as particularidades tributárias de cada segmento e ajudamos na estruturação mais vantajosa.",
      },
      {
        question: "Como funciona o atendimento remoto para empresas do Centro?",
        answer:
          "Utilizamos ferramentas digitais para atendimento completo: envio de documentos por portal do cliente, reuniões por videoconferência, suporte por WhatsApp em horário comercial, e assinatura digital de documentos. Você tem a mesma qualidade de atendimento sem precisar se deslocar.",
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
      "A Trindade é o bairro que abriga a Universidade Federal de Santa Catarina (UFSC), criando um ecossistema único de inovação e empreendedorismo em Florianópolis. A região é o coração do polo tecnológico da cidade, com incubadoras como o CELTA (Centro Empresarial para Laboração de Tecnologias Avançadas), aceleradoras e dezenas de startups que nasceram no ambiente universitário. O bairro também concentra spin-offs da UFSC, empresas de software, fintechs e e-commerces que aproveitam a mão de obra qualificada formada pela universidade. A ZACON oferece contabilidade especializada para empresas de tecnologia e startups da Trindade. Conhecemos as particularidades do setor: rodadas de investimento, stock options, incentivos fiscais como Lei do Bem e Lei de Informática, regimes tributários otimizados para SaaS e licenciamento de software, e as exigências de compliance para empresas que buscam investidores institucionais. Nosso atendimento é 100% digital, com ferramentas modernas que se integram ao dia a dia de empresas inovadoras.",
    caracteristicas: [
      "Sede da UFSC - maior universidade de Santa Catarina",
      "CELTA: maior incubadora de empresas de tecnologia do sul do Brasil",
      "Polo de startups, SaaS e empresas de software",
      "Fintechs e empresas de tecnologia financeira",
      "E-commerces e marketplaces de nicho",
      "Spin-offs universitários e empresas de P&D",
    ],
    servicos: [
      "Contabilidade para startups em todas as fases",
      "Planejamento tributário para empresas de tecnologia",
      "Abertura de empresas de software e SaaS",
      "Consultoria para captação de investimentos",
      "Incentivos fiscais: Lei do Bem e Lei de Informática",
      "Contabilidade para e-commerce e marketplaces",
      "Gestão de stock options e vesting",
      "BPO financeiro para scale-ups",
    ],
    diferenciais: [
      "Experiência com mais de 50 startups e empresas de tecnologia",
      "Conhecimento em incentivos fiscais para inovação",
      "Suporte contábil para rodadas de investimento (seed, série A)",
      "Contabilidade 100% digital com integração a ERPs modernos",
      "Entendimento de métricas SaaS: MRR, churn, CAC, LTV",
    ],
    faqs: [
      {
        question: "Vocês atendem startups da Trindade e do CELTA?",
        answer:
          "Sim! Temos experiência com startups em todas as fases de crescimento, desde o MVP até scale-ups com investimento institucional. Conhecemos as particularidades contábeis de empresas de tecnologia, incluindo reconhecimento de receita de SaaS, gestão de stock options e compliance para investidores.",
      },
      {
        question: "Conhecem os incentivos fiscais para empresas de tecnologia?",
        answer:
          "Sim! Orientamos sobre Lei do Bem (dedução de até 60% em gastos com P&D no IRPJ/CSLL), Lei de Informática (redução de até 80% do IPI), e incentivos municipais de Florianópolis para empresas de tecnologia. Ajudamos a estruturar os projetos para aproveitamento dos benefícios.",
      },
      {
        question: "Qual o melhor regime tributário para startups de software?",
        answer:
          "Depende do modelo de negócio e faturamento. Startups em fase inicial geralmente optam pelo Simples Nacional (até R$ 4,8M/ano). Empresas de software com faturamento maior podem se beneficiar do Lucro Presumido com alíquota de ISS reduzida. Analisamos caso a caso para maximizar economia.",
      },
      {
        question: "Vocês ajudam na preparação para rodadas de investimento?",
        answer:
          "Sim! Preparamos a contabilidade e documentação para due diligence de investidores: balanços auditáveis, projeções financeiras, cap table organizado, compliance fiscal em dia. Também orientamos sobre estruturação societária para receber investimento (LTDA vs S/A).",
      },
      {
        question: "Como funciona a contabilidade para empresas com receita recorrente (SaaS)?",
        answer:
          "O modelo SaaS exige reconhecimento de receita apropriado (competência vs caixa), controle de MRR/ARR, gestão de inadimplência (churn), e tratamento contábil de upgrades/downgrades. Temos experiência com essas particularidades e entregamos relatórios que investidores e gestores entendem.",
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
      "Canasvieiras é um dos balneários mais tradicionais e movimentados de Florianópolis, conhecido por suas praias de águas calmas que atraem famílias e turistas argentinos durante todo o verão. O bairro possui infraestrutura turística completa: dezenas de hotéis e pousadas, centenas de restaurantes e bares, lojas de artesanato, agências de passeios e serviços de aluguel. A sazonalidade é a característica mais marcante do comércio local: no verão, a população pode quadruplicar; no inverno, muitos estabelecimentos reduzem operação ou fecham temporariamente. A ZACON Contabilidade está localizada em Ingleses, bairro vizinho a Canasvieiras, e atende dezenas de empresas da região. Nossa equipe conhece profundamente os desafios do setor de turismo: gestão de folha de pagamento sazonal com contratos temporários, otimização de custos na baixa temporada, planejamento tributário para maximizar lucros na alta, obrigações com a vigilância sanitária para restaurantes, e estratégias de formalização para quem aluga imóveis por temporada.",
    caracteristicas: [
      "Principal balneário do norte da ilha com praias de águas calmas",
      "Maior concentração de turistas argentinos de Florianópolis",
      "Dezenas de hotéis e pousadas de todos os portes",
      "Polo gastronômico com restaurantes, bares e quiosques de praia",
      "Comércio com sazonalidade intensa (verão x inverno)",
      "Aluguel de imóveis por temporada movimenta a economia local",
    ],
    servicos: [
      "Contabilidade para turismo e hotelaria",
      "Gestão contábil de hotéis e pousadas",
      "Folha de pagamento com contratos sazonais",
      "Planejamento tributário para alta e baixa temporada",
      "Contabilidade para restaurantes e bares",
      "Formalização de aluguel por temporada",
      "BPO financeiro para empresas sazonais",
      "Regularização com vigilância sanitária",
    ],
    diferenciais: [
      "Experiência com empresas de sazonalidade intensa",
      "Atendimento presencial fácil (estamos em Ingleses, bairro vizinho)",
      "Conhecimento das exigências de vigilância sanitária",
      "Planejamento de fluxo de caixa para baixa temporada",
      "Gestão de contratos temporários (CLT, intermitente)",
    ],
    faqs: [
      {
        question: "Vocês entendem a sazonalidade das empresas de Canasvieiras?",
        answer:
          "Sim! Somos especializados em empresas sazonais. Ajudamos a planejar o fluxo de caixa para atravessar a baixa temporada, gerenciar folha de pagamento com contratos temporários e intermitentes, e maximizar lucros no verão com regime tributário otimizado.",
      },
      {
        question: "Atendem pousadas e hotéis em Canasvieiras?",
        answer:
          "Sim! Oferecemos contabilidade completa para meios de hospedagem: escrituração contábil, folha de pagamento (incluindo funcionários sazonais), apuração de impostos, obrigações acessórias e relatórios gerenciais. Também orientamos sobre tributação de receitas de booking e OTAs.",
      },
      {
        question: "Como formalizar aluguel de imóvel por temporada?",
        answer:
          "O aluguel por temporada pode ser feito como pessoa física (IRPF com carnê-leão) ou PJ (administradora de imóveis). Para quem tem mais de 3 imóveis ou faturamento significativo, a PJ costuma ser mais vantajosa. Analisamos seu caso para indicar a melhor opção.",
      },
      {
        question: "Restaurantes precisam de alvará da vigilância sanitária?",
        answer:
          "Sim! Restaurantes, bares, lanchonetes e estabelecimentos de alimentação precisam de alvará sanitário da Vigilância de Florianópolis. Orientamos sobre os requisitos e ajudamos no processo de regularização para que você possa operar legalmente.",
      },
      {
        question: "Qual o melhor contrato para funcionários de temporada?",
        answer:
          "Existem várias opções: contrato por prazo determinado (até 2 anos), contrato de safra/temporada, ou trabalho intermitente. Cada modalidade tem vantagens e obrigações específicas. Indicamos a melhor opção conforme a previsibilidade da sua demanda.",
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
      "Jurerê Internacional é o bairro mais exclusivo de Florianópolis e um dos mais sofisticados do Brasil, conhecido mundialmente por suas mansões de alto padrão, beach clubs como P12 e Café de La Musique, gastronomia premiada e lifestyle premium. A região concentra empresários bem-sucedidos, executivos de grandes empresas, profissionais liberais de alta renda (médicos, advogados, empresários) e famílias com patrimônio significativo que buscam qualidade de vida aliada a discrição. O perfil dos moradores e empresários de Jurerê exige serviços contábeis diferenciados: planejamento patrimonial para proteger e perpetuar riqueza, estruturação de holdings familiares para sucessão organizada, declarações de imposto de renda de alta complexidade com múltiplas fontes de renda e investimentos no exterior, e gestão tributária sofisticada para maximizar preservação de patrimônio. A ZACON atende este público exigente com confidencialidade absoluta, atendimento personalizado e expertise em situações complexas que escritórios generalistas não dominam.",
    caracteristicas: [
      "Bairro mais exclusivo e valorizado de Florianópolis",
      "Concentração de empresários e executivos de alto patrimônio",
      "Beach clubs de referência nacional (P12, Café de La Musique)",
      "Gastronomia de alto padrão e comércio premium",
      "Famílias com patrimônio diversificado (imóveis, investimentos, empresas)",
      "Demanda por serviços sofisticados com discrição total",
    ],
    servicos: [
      "Planejamento patrimonial e sucessório",
      "Estruturação de holding familiar",
      "IRPF de alta complexidade (múltiplas fontes, exterior)",
      "Consultoria tributária personalizada",
      "Contabilidade para empresas premium e beach clubs",
      "Gestão de investimentos e participações societárias",
      "Declaração de bens no exterior (DCBE)",
      "Consultoria para expatriados e não-residentes",
    ],
    diferenciais: [
      "Experiência com patrimônio de alto valor (acima de R$ 10 milhões)",
      "Confidencialidade e discrição absolutas",
      "Atendimento personalizado com contador dedicado",
      "Conhecimento em planejamento sucessório e tributário avançado",
      "Relacionamento com family offices e gestores de fortunas",
    ],
    faqs: [
      {
        question: "Vocês fazem planejamento patrimonial para famílias de Jurerê?",
        answer:
          "Sim! Oferecemos consultoria completa em planejamento patrimonial e sucessório. Isso inclui estruturação de holdings familiares, definição de regras de governança, otimização tributária na transmissão de bens, e testamentos coordenados com a estrutura societária. Nosso objetivo é proteger o patrimônio e garantir transição organizada entre gerações.",
      },
      {
        question: "Atendem declarações de IRPF complexas?",
        answer:
          "Sim, somos especializados em declarações de alta complexidade: múltiplas fontes de renda (empresas, aluguéis, dividendos, pró-labore), investimentos no exterior (ações, fundos, imóveis), ganho de capital com bens de alto valor, carnê-leão de rendimentos internacionais, e declaração de bens no exterior (DCBE) para quem tem mais de US$ 100 mil fora do Brasil.",
      },
      {
        question: "O que é uma holding familiar e quando vale a pena?",
        answer:
          "Uma holding familiar é uma empresa que concentra o patrimônio da família (imóveis, participações em empresas, investimentos). Vale a pena quando: o patrimônio ultrapassa R$ 3-5 milhões, há imóveis alugados, a família possui empresas operacionais, ou se deseja organizar a sucessão. Benefícios: economia tributária (até 50% em aluguéis), proteção patrimonial e sucessão sem inventário.",
      },
      {
        question: "Vocês trabalham com confidencialidade?",
        answer:
          "Absoluta. Nosso atendimento é discreto e personalizado. Não divulgamos informações de clientes, utilizamos sistemas com criptografia, e o relacionamento é direto com sócios do escritório. A confidencialidade é premissa básica para quem atende patrimônios significativos.",
      },
      {
        question: "Como funciona o atendimento para clientes de Jurerê?",
        answer:
          "Oferecemos atendimento VIP: reuniões presenciais em local de sua preferência (residência, escritório ou nosso espaço), comunicação direta por WhatsApp com seu contador dedicado, e resposta prioritária. Também atendemos por videoconferência para quem viaja frequentemente.",
      },
    ],
  },
  {
    slug: "cachoeira-do-bom-jesus",
    nome: "Cachoeira do Bom Jesus",
    nomeCompleto: "Cachoeira do Bom Jesus",
    descricao:
      "Cachoeira do Bom Jesus é um bairro tranquilo e familiar no norte de Florianópolis, conhecido por sua praia de águas calmas e comunidade acolhedora. Atendemos empresas locais com a proximidade de quem conhece a região.",
    descricaoLonga:
      "Cachoeira do Bom Jesus é um dos bairros mais charmosos do norte de Florianópolis, localizado entre Canasvieiras e Ponta das Canas. A região combina tranquilidade residencial com uma economia local pujante, baseada em comércio de bairro, serviços, pequenas pousadas e restaurantes familiares. A praia de Cachoeira é conhecida por suas águas calmas e rasas, ideal para famílias, e atrai turistas que preferem um ambiente mais tranquilo que os balneários vizinhos. O bairro possui infraestrutura comercial própria com supermercados, farmácias, padarias e prestadores de serviços locais. Muitos empreendedores de Cachoeira do Bom Jesus são moradores que abriram negócios para atender a comunidade e os visitantes de temporada. A ZACON Contabilidade está localizada em Ingleses, a poucos minutos de Cachoeira, oferecendo atendimento presencial facilitado para empresários da região. Nossa equipe conhece as particularidades do comércio local, a sazonalidade do turismo e as necessidades de pequenas empresas familiares que são a base econômica do bairro.",
    caracteristicas: [
      "Bairro residencial tranquilo com forte senso de comunidade",
      "Praia de águas calmas ideal para famílias com crianças",
      "Economia baseada em comércio local e serviços de bairro",
      "Pousadas e restaurantes familiares de pequeno porte",
      "Localização estratégica entre Canasvieiras e Ponta das Canas",
      "Turismo de temporada com perfil familiar",
    ],
    servicos: [
      "Abertura de empresas e MEI",
      "Contabilidade para comércio local",
      "Contabilidade para pousadas familiares",
      "Departamento pessoal para pequenas empresas",
      "Imposto de renda pessoa física",
      "Regularização de empresas",
      "Planejamento tributário para pequenos negócios",
      "BPO financeiro para microempresas",
    ],
    diferenciais: [
      "Escritório em Ingleses, a poucos minutos de Cachoeira do Bom Jesus",
      "Atendimento personalizado para pequenas empresas familiares",
      "Conhecimento da economia local e sazonalidade",
      "Preços acessíveis para microempresas e MEI",
      "Suporte presencial e remoto conforme sua preferência",
    ],
    faqs: [
      {
        question: "A ZACON atende empresas de Cachoeira do Bom Jesus?",
        answer:
          "Sim! Nosso escritório em Ingleses fica a poucos minutos de Cachoeira do Bom Jesus. Atendemos empresas locais presencialmente ou por meios digitais, conforme sua preferência. Conhecemos bem a região e suas particularidades.",
      },
      {
        question: "Quanto custa abrir uma empresa em Cachoeira do Bom Jesus?",
        answer:
          "Os custos são os mesmos de Florianópolis: MEI gratuito, ME Simples Nacional de R$ 500 a R$ 1.200, LTDA de R$ 800 a R$ 2.000. Inclui todas as taxas e orientação completa. Solicite orçamento personalizado.",
      },
      {
        question: "Vocês atendem pousadas pequenas?",
        answer:
          "Sim! Temos experiência com pousadas familiares e meios de hospedagem de pequeno porte. Oferecemos contabilidade completa, gestão de temporada, folha de pagamento e orientação sobre tributação de reservas online.",
      },
      {
        question: "Como é o atendimento para quem mora em Cachoeira?",
        answer:
          "Oferecemos flexibilidade total: atendimento presencial em nosso escritório em Ingleses (10 minutos de Cachoeira), visitas ao seu estabelecimento quando necessário, ou atendimento 100% digital via WhatsApp, e-mail e videoconferência.",
      },
      {
        question: "Atendem MEI e microempresas?",
        answer:
          "Sim! Grande parte dos nossos clientes são MEIs e microempresas. Oferecemos planos acessíveis a partir de R$ 99/mês para MEI e R$ 399/mês para Simples Nacional, com atendimento completo e humanizado.",
      },
    ],
  },
  {
    slug: "rio-vermelho",
    nome: "Rio Vermelho",
    nomeCompleto: "Rio Vermelho",
    descricao:
      "O Rio Vermelho é um bairro histórico e multicultural de Florianópolis, berço da tradição açoriana e lar de uma comunidade artística vibrante. Atendemos empreendedores criativos e negócios locais da região.",
    descricaoLonga:
      "O Rio Vermelho é um dos bairros mais tradicionais e culturalmente ricos de Florianópolis, reconhecido como berço da tradição açoriana na ilha. A região preserva um patrimônio histórico valioso, com casarios antigos, igrejas centenárias e a famosa Festa do Divino, patrimônio imaterial de Santa Catarina. Nos últimos anos, o bairro se transformou em um polo de economia criativa, atraindo artistas, músicos, designers, produtores culturais e empreendedores de gastronomia artesanal. O Rio Vermelho abriga ateliês, estúdios de arte, cafeterias descoladas, restaurantes de culinária autoral e espaços de coworking. A comunidade local valoriza o consumo consciente, a produção artesanal e o empreendedorismo com propósito. A ZACON Contabilidade entende as particularidades deste ecossistema criativo e oferece serviços contábeis adaptados para artistas, produtores culturais, MEIs criativos e pequenas empresas de gastronomia. Nosso escritório em Ingleses está a 15 minutos do Rio Vermelho, permitindo atendimento presencial quando necessário, combinado com suporte digital para quem prefere praticidade.",
    caracteristicas: [
      "Berço da tradição açoriana em Florianópolis",
      "Polo de economia criativa e produção cultural",
      "Comunidade de artistas, músicos e designers",
      "Gastronomia artesanal e cafeterias especializadas",
      "Patrimônio histórico e arquitetônico preservado",
      "Empreendedorismo consciente e com propósito",
    ],
    servicos: [
      "Contabilidade para artistas e produtores culturais",
      "MEI para profissionais criativos",
      "Abertura de empresas de gastronomia artesanal",
      "Contabilidade para ateliês e estúdios",
      "Imposto de renda para profissionais autônomos",
      "Formalização de microempreendedores",
      "Planejamento tributário para economia criativa",
      "BPO financeiro para pequenos negócios",
    ],
    diferenciais: [
      "Entendimento da economia criativa e suas particularidades",
      "Experiência com artistas, músicos e produtores culturais",
      "Atendimento flexível para profissionais com horários alternativos",
      "Suporte para captação de editais e leis de incentivo",
      "Contabilidade simplificada para MEIs criativos",
    ],
    faqs: [
      {
        question: "Vocês entendem as necessidades de artistas e produtores culturais?",
        answer:
          "Sim! Atendemos músicos, artistas visuais, designers, produtores de eventos e profissionais da economia criativa. Conhecemos as particularidades: direitos autorais, cachês, captação por leis de incentivo (Rouanet, FIA, editais), e a melhor estrutura tributária para cada situação.",
      },
      {
        question: "Qual a melhor forma de formalização para artistas?",
        answer:
          "Depende do faturamento e atividades. MEI é ideal para quem fatura até R$ 81.000/ano em atividades permitidas. Para artistas com faturamento maior ou atividades não permitidas no MEI, avaliamos Simples Nacional ou estruturas específicas como sociedade uniprofissional.",
      },
      {
        question: "Vocês ajudam com leis de incentivo e editais?",
        answer:
          "Sim! Orientamos sobre enquadramento em leis de incentivo (Lei Rouanet, Lei do Audiovisual, editais estaduais e municipais), prestação de contas de projetos aprovados, e estruturação contábil para captação. Não fazemos a elaboração dos projetos, mas damos todo suporte contábil.",
      },
      {
        question: "Como é o atendimento para quem tem horários alternativos?",
        answer:
          "Entendemos que artistas e criativos nem sempre trabalham em horário comercial. Oferecemos atendimento por WhatsApp com resposta em até 24h, agendamento de reuniões em horários flexíveis, e documentação 100% digital para sua conveniência.",
      },
      {
        question: "Atendem pequenas cafeterias e restaurantes artesanais?",
        answer:
          "Sim! O Rio Vermelho tem uma cena gastronômica única e atendemos vários estabelecimentos da região. Oferecemos contabilidade completa, folha de pagamento, orientação sobre vigilância sanitária e planejamento para sazonalidade.",
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
