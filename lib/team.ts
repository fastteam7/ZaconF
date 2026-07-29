// Dados da equipe ZACON para páginas de biografia

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  crc?: string;
  description: string;
  fullBio: string;
  specialties: string[];
  education: string[];
  experience: string[];
  // [FORNECER] Substituir por fotos reais
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "jucelia-alves-de-lima",
    name: "Jucélia Alves de Lima",
    role: "Contadora Consultiva e Sócia-Gerente Executiva",
    crc: "CRC/SC",
    description:
      "Contadora com ampla experiência em diversas áreas da contabilidade e visão estratégica da gestão empresarial. Responsável pela liderança da ZACON.",
    fullBio:
      "Jucélia Alves de Lima é a Sócia-Gerente Executiva da ZACON Contabilidade, liderando a empresa com uma combinação única de expertise técnica e visão estratégica de negócios. Com formação em Ciências Contábeis e especializações em Gestão e Auditoria em Sistemas de Saúde e Direito Tributário, Jucélia traz uma perspectiva multidisciplinar para o atendimento de cada cliente.\n\nAo longo de sua carreira, desenvolveu profundo conhecimento em planejamento tributário, permitindo que empresas economizem significativamente em impostos dentro da legalidade. Sua experiência em área societária a torna referência na constituição, alteração e regularização de empresas, sempre buscando a estrutura mais eficiente para cada negócio.\n\nNa ZACON, Jucélia é responsável pelo planejamento estratégico, relacionamento com clientes e desenvolvimento de novos negócios, garantindo que cada empresa atendida receba soluções personalizadas e um atendimento verdadeiramente humanizado.",
    specialties: [
      "Planejamento Tributário",
      "Consultoria Empresarial",
      "Área Societária",
      "Gestão Estratégica",
      "Constituição e Regularização de Empresas",
    ],
    education: [
      "Bacharel em Ciências Contábeis",
      "MBA em Gestão e Auditoria em Sistemas de Saúde",
      "Especialização em Direito Tributário",
    ],
    experience: [
      "Mais de 15 anos de experiência em contabilidade",
      "Sócia-Gerente da ZACON Contabilidade desde 2009",
      "Centenas de empresas assessoradas em planejamento tributário",
      "Especialista em estruturação societária",
    ],
    image: "/images/team/placeholder-avatar.svg",
  },
  {
    slug: "luciane-moraes",
    name: "Luciane Moraes",
    role: "Departamento Fiscal | Agente de Registro de Certificado Digital",
    description:
      "Bacharel em Ciências Contábeis, atua no Departamento Fiscal e como Agente de Registro de Certificado Digital da ZACON Contabilidade.",
    fullBio:
      "Luciane Moraes é responsável pelo Departamento Fiscal da ZACON Contabilidade, garantindo que todas as obrigações tributárias dos clientes sejam cumpridas com precisão e pontualidade. Sua atuação abrange desde a apuração de impostos até o acompanhamento das constantes atualizações na legislação tributária brasileira.\n\nAlém de suas funções fiscais, Luciane é Agente de Registro de Certificado Digital, sendo responsável pelos processos de emissão e validação de certificados que garantem segurança e agilidade nas operações digitais dos clientes. Esta dupla função permite que ela ofereça um atendimento integrado, facilitando a vida dos empresários que precisam de ambos os serviços.\n\nSeu comprometimento, organização e atenção aos detalhes são características reconhecidas por clientes e colegas, contribuindo para a excelência dos serviços prestados pela ZACON.",
    specialties: [
      "Apuração de Tributos",
      "Obrigações Acessórias",
      "SPED Fiscal e Contribuições",
      "Certificado Digital",
      "Legislação Tributária",
    ],
    education: [
      "Bacharel em Ciências Contábeis",
      "Certificação como Agente de Registro de Certificado Digital",
    ],
    experience: [
      "Experiência em rotinas fiscais e tributárias",
      "Especialista em SPED e obrigações acessórias",
      "Agente de Registro de Certificado Digital",
      "Acompanhamento contínuo de atualizações fiscais",
    ],
    image: "/images/team/placeholder-avatar.svg",
  },
  {
    slug: "heloisa-pinheiro-ventura",
    name: "Heloisa Pinheiro Ventura",
    role: "Contadora | Especialista em Departamento Pessoal",
    crc: "CRC/SC",
    description:
      "Graduada em Ciências Contábeis, com ampla experiência na área contábil. Responsável pelas rotinas do Departamento Pessoal.",
    fullBio:
      "Heloisa Pinheiro Ventura é Contadora e Especialista em Departamento Pessoal na ZACON Contabilidade. Com registro ativo no CRC/SC, ela combina conhecimento técnico contábil com expertise aprofundada em legislação trabalhista e previdenciária.\n\nNo Departamento Pessoal, Heloisa é responsável por toda a gestão das obrigações trabalhistas dos clientes: admissões, demissões, folha de pagamento, férias, 13º salário, rescisões e todas as obrigações acessórias como eSocial, FGTS Digital e DIRF. Sua atuação garante que as empresas estejam sempre em conformidade com a legislação, evitando multas e passivos trabalhistas.\n\nSeu diferencial está no atendimento humanizado que oferece tanto aos empresários quanto aos funcionários das empresas atendidas, sempre disponível para esclarecer dúvidas e orientar sobre as melhores práticas trabalhistas.",
    specialties: [
      "Departamento Pessoal",
      "eSocial",
      "Folha de Pagamento",
      "Legislação Trabalhista",
      "FGTS e Obrigações Previdenciárias",
    ],
    education: [
      "Graduação em Ciências Contábeis",
      "Registro ativo no CRC/SC",
    ],
    experience: [
      "Ampla experiência em Departamento Pessoal",
      "Especialista em eSocial e obrigações trabalhistas",
      "Gestão de folha de pagamento para empresas de diversos portes",
      "Atendimento humanizado a empresários e funcionários",
    ],
    image: "/images/team/placeholder-avatar.svg",
  },
  {
    slug: "mario-torres",
    name: "Mario Torres",
    role: "Contador",
    description:
      "Atua nas áreas Contábil e Fiscal, desenvolvendo rotinas contábeis, fiscais e tributárias com foco na conformidade legal.",
    fullBio:
      "Mario Torres é Contador na ZACON Contabilidade, atuando nas áreas Contábil e Fiscal com um olhar integrado sobre as necessidades de cada empresa. Sua função abrange desde as rotinas contábeis diárias até a elaboração de demonstrações contábeis completas que apoiam a tomada de decisão dos gestores.\n\nNa área fiscal, Mario é responsável pela apuração correta de tributos, cumprimento de obrigações acessórias e análise de informações gerenciais que permitem identificar oportunidades de economia tributária. Seu trabalho é fundamental para manter as empresas em conformidade legal e evitar contingências fiscais.\n\nA qualidade técnica de Mario, combinada com sua capacidade de traduzir informações contábeis complexas em insights práticos, faz dele um parceiro valioso para os clientes da ZACON que buscam mais do que um contador — buscam um consultor de confiança.",
    specialties: [
      "Escrituração Contábil",
      "Demonstrações Contábeis",
      "Apuração de Tributos",
      "Análise Gerencial",
      "SPED Contábil",
    ],
    education: [
      "Formação em Ciências Contábeis",
    ],
    experience: [
      "Experiência em rotinas contábeis e fiscais",
      "Elaboração de demonstrações contábeis",
      "Análise de informações gerenciais",
      "Conformidade fiscal e tributária",
    ],
    image: "/images/team/placeholder-avatar.svg",
  },
  {
    slug: "adriano-schneider",
    name: "Adriano Schneider",
    role: "Departamento Pessoal",
    description:
      "Bacharel em Administração de Empresas. Atua no Departamento Pessoal, apoiando as rotinas trabalhistas e administrativas.",
    fullBio:
      "Adriano Schneider integra a equipe do Departamento Pessoal da ZACON Contabilidade, trazendo sua formação em Administração de Empresas para agregar valor às rotinas trabalhistas e administrativas. Sua visão de gestão complementa o trabalho técnico do departamento, contribuindo para processos mais eficientes e organizados.\n\nNo dia a dia, Adriano apoia todas as rotinas trabalhistas: desde o preparo de documentação de admissão até o acompanhamento de processos de rescisão, sempre com atenção aos prazos e à organização documental que são essenciais na área. Sua dedicação e comprometimento garantem que os clientes recebam um atendimento ágil e confiável.\n\nA responsabilidade e o foco em resultados são marcas do trabalho de Adriano, que contribui diariamente para a excelência do atendimento oferecido pela ZACON aos seus clientes.",
    specialties: [
      "Rotinas Trabalhistas",
      "Documentação de Admissão e Demissão",
      "Organização Administrativa",
      "Atendimento ao Cliente",
      "Processos de Departamento Pessoal",
    ],
    education: [
      "Bacharel em Administração de Empresas",
    ],
    experience: [
      "Atuação em Departamento Pessoal",
      "Experiência em rotinas administrativas",
      "Organização de processos e documentação",
      "Atendimento a clientes empresariais",
    ],
    image: "/images/team/placeholder-avatar.svg",
  },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((member) => member.slug === slug);
}
