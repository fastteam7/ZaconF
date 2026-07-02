export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "como-abrir-empresa-florianopolis",
    title: "Como Abrir uma Empresa em Florianópolis: Guia Completo 2024",
    excerpt:
      "Passo a passo completo para abrir sua empresa em Florianópolis. Documentação necessária, custos envolvidos e prazos.",
    content: `
# Como Abrir uma Empresa em Florianópolis: Guia Completo 2024

Abrir uma empresa em Florianópolis é uma excelente decisão. A capital catarinense é conhecida por sua qualidade de vida, polo tecnológico em crescimento e ambiente favorável aos negócios.

## Passo 1: Defina o Tipo de Empresa

O primeiro passo é escolher o tipo societário mais adequado:

- **MEI (Microempreendedor Individual)**: Para faturamento até R$ 81.000/ano
- **ME (Microempresa)**: Para faturamento até R$ 360.000/ano
- **EPP (Empresa de Pequeno Porte)**: Faturamento até R$ 4,8 milhões/ano
- **LTDA**: Sociedade Limitada com dois ou mais sócios
- **SLU**: Sociedade Limitada Unipessoal (um único sócio)

## Passo 2: Escolha o Regime Tributário

As opções são:

- **Simples Nacional**: Ideal para pequenas empresas
- **Lucro Presumido**: Para empresas com margens de lucro elevadas
- **Lucro Real**: Para empresas com muitas despesas dedutíveis

## Passo 3: Documentação Necessária

- RG e CPF dos sócios
- Comprovante de residência
- Certidão de casamento (se aplicável)
- Comprovante do endereço comercial
- Contrato de locação ou escritura

## Passo 4: Registros Obrigatórios

1. Junta Comercial de Santa Catarina (JUCESC)
2. Receita Federal (CNPJ)
3. Secretaria da Fazenda (Inscrição Estadual)
4. Prefeitura de Florianópolis (Inscrição Municipal)
5. Alvará de Funcionamento

## Conte com a ZACON

A ZACON Contabilidade tem mais de 15 anos de experiência em abertura de empresas. Oferecemos atendimento humanizado e cuidamos de toda a burocracia para você. Entre em contato!
    `,
    date: "2024-01-15",
    author: "Equipe ZACON",
    category: "Abertura de Empresas",
  },
  {
    slug: "mei-tudo-que-voce-precisa-saber",
    title: "MEI: Tudo que Você Precisa Saber em 2024",
    excerpt:
      "Guia completo sobre MEI: o que é, quem pode ser, limites de faturamento, obrigações e quando migrar para ME.",
    content: `
# MEI: Tudo que Você Precisa Saber em 2024

O MEI (Microempreendedor Individual) é a porta de entrada para muitos brasileiros no mundo do empreendedorismo formal. Entenda tudo sobre essa categoria.

## O que é MEI?

O MEI é uma categoria empresarial criada para formalizar trabalhadores autônomos. Com ele, você obtém CNPJ, pode emitir notas fiscais e tem acesso a benefícios previdenciários.

## Quem pode ser MEI?

- Faturar até R$ 81.000 por ano
- Não participar como sócio ou titular de outra empresa
- Exercer atividade permitida para MEI
- Ter no máximo 1 funcionário

## Quanto custa ser MEI?

O MEI paga mensalmente um valor fixo (DAS):

- Comércio e Indústria: R$ 66,10
- Serviços: R$ 70,10
- Comércio e Serviços: R$ 71,10

## Obrigações do MEI

- Pagamento mensal do DAS
- Declaração Anual (DASN-SIMEI)
- Controle de faturamento

## Quando migrar para ME?

Se você ultrapassar o limite de R$ 81.000/ano ou precisar contratar mais funcionários, será necessário migrar para ME (Microempresa).

## Precisa de ajuda?

A ZACON oferece suporte completo para MEIs: abertura, regularização, declaração anual e transição para ME. Entre em contato para um atendimento personalizado!
    `,
    date: "2024-01-10",
    author: "Equipe ZACON",
    category: "MEI",
  },
  {
    slug: "planejamento-tributario-como-pagar-menos-impostos",
    title: "Planejamento Tributário: Como Pagar Menos Impostos Legalmente",
    excerpt:
      "Descubra como o planejamento tributário pode reduzir a carga fiscal da sua empresa de forma legal e segura.",
    content: `
# Planejamento Tributário: Como Pagar Menos Impostos Legalmente

O planejamento tributário é uma ferramenta estratégica que permite às empresas reduzirem sua carga tributária de forma legal. Entenda como funciona.

## O que é Planejamento Tributário?

É um conjunto de estratégias e ações que visam reduzir ou postergar o pagamento de tributos, sempre dentro da legalidade.

## Por que fazer Planejamento Tributário?

- Redução legal de impostos
- Maior competitividade no mercado
- Prevenção de problemas fiscais
- Melhor gestão do fluxo de caixa

## Principais Estratégias

### 1. Escolha do Regime Tributário

A escolha entre Simples Nacional, Lucro Presumido e Lucro Real pode fazer grande diferença na carga tributária.

### 2. Aproveitamento de Incentivos Fiscais

Existem diversos incentivos fiscais federais, estaduais e municipais que podem ser aproveitados.

### 3. Estruturação Societária

A forma como a empresa está estruturada pode impactar significativamente os impostos.

### 4. Revisão de Classificações Fiscais

Verificar se os produtos e serviços estão classificados corretamente para fins tributários.

## Quando fazer?

O ideal é fazer o planejamento tributário anualmente, preferencialmente antes do início do ano fiscal.

## Conte com especialistas

A ZACON tem mais de 15 anos de experiência em planejamento tributário. Nossa equipe oferece análise personalizada para identificar oportunidades de economia para o seu negócio. Solicite uma consulta!
    `,
    date: "2024-01-05",
    author: "Equipe ZACON",
    category: "Planejamento Tributário",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
