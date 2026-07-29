"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Search, BookOpen, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "../_components/ui/button";
import { AnimatedSection } from "../_components/AnimatedSection";

// Dados do glossário organizados alfabeticamente
const glossaryTerms = [
  {
    term: "Abertura de Empresa",
    definition: "Processo de constituição legal de uma pessoa jurídica, que envolve registro na Junta Comercial, obtenção de CNPJ, inscrições estaduais e municipais, e alvarás de funcionamento.",
    related: ["CNPJ", "Contrato Social", "Junta Comercial"],
    category: "Empresarial",
  },
  {
    term: "Ativo",
    definition: "Conjunto de bens e direitos de uma empresa. Representa todos os recursos controlados pela entidade dos quais se espera benefícios econômicos futuros. Divide-se em Ativo Circulante (curto prazo) e Ativo Não Circulante (longo prazo).",
    related: ["Passivo", "Patrimônio Líquido", "Balanço Patrimonial"],
    category: "Contábil",
  },
  {
    term: "Balanço Patrimonial",
    definition: "Demonstração contábil que apresenta a posição financeira e patrimonial de uma empresa em determinada data. Mostra Ativos (bens e direitos), Passivos (obrigações) e Patrimônio Líquido.",
    related: ["Ativo", "Passivo", "DRE"],
    category: "Contábil",
  },
  {
    term: "BPO Financeiro",
    definition: "Business Process Outsourcing Financeiro. Terceirização de processos financeiros como contas a pagar, contas a receber, conciliação bancária e gestão de fluxo de caixa.",
    related: ["Fluxo de Caixa", "Conciliação Bancária"],
    category: "Serviços",
  },
  {
    term: "Carnê-Leão",
    definition: "Recolhimento mensal obrigatório do Imposto de Renda de pessoas físicas que recebem rendimentos de outras pessoas físicas ou do exterior. Calculado com base na tabela progressiva do IR.",
    related: ["IRPF", "DARF"],
    category: "Tributário",
  },
  {
    term: "CNPJ",
    definition: "Cadastro Nacional da Pessoa Jurídica. Número de identificação de empresas perante a Receita Federal do Brasil, equivalente ao CPF para pessoas físicas.",
    related: ["Receita Federal", "Abertura de Empresa"],
    category: "Empresarial",
  },
  {
    term: "Cofins",
    definition: "Contribuição para o Financiamento da Seguridade Social. Tributo federal que incide sobre o faturamento das empresas, destinado ao financiamento da seguridade social.",
    related: ["PIS", "Simples Nacional", "Lucro Presumido"],
    category: "Tributário",
  },
  {
    term: "Conciliação Bancária",
    definition: "Processo de comparação entre os registros contábeis da empresa e os extratos bancários para identificar divergências e garantir a exatidão das informações financeiras.",
    related: ["BPO Financeiro", "Fluxo de Caixa"],
    category: "Financeiro",
  },
  {
    term: "Contrato Social",
    definition: "Documento que formaliza a constituição de uma sociedade empresária, definindo regras de funcionamento, capital social, cotas dos sócios e objeto social da empresa.",
    related: ["Abertura de Empresa", "CNPJ", "Junta Comercial"],
    category: "Empresarial",
  },
  {
    term: "CSLL",
    definition: "Contribuição Social sobre o Lucro Líquido. Tributo federal que incide sobre o lucro das empresas, destinado ao financiamento da seguridade social.",
    related: ["IRPJ", "Lucro Real", "Lucro Presumido"],
    category: "Tributário",
  },
  {
    term: "DARF",
    definition: "Documento de Arrecadação de Receitas Federais. Guia utilizada para pagamento de tributos federais como IRPJ, CSLL, PIS, Cofins e contribuições previdenciárias.",
    related: ["Receita Federal", "IRPJ", "CSLL"],
    category: "Tributário",
  },
  {
    term: "DAS",
    definition: "Documento de Arrecadação do Simples Nacional. Guia única que reúne todos os impostos devidos por empresas optantes pelo Simples Nacional.",
    related: ["Simples Nacional", "MEI"],
    category: "Tributário",
  },
  {
    term: "Declaração de IR",
    definition: "Obrigação acessória anual de pessoas físicas (DIRPF) e jurídicas (DIPJ/ECF) de informar à Receita Federal seus rendimentos, bens, direitos e dívidas.",
    related: ["IRPF", "IRPJ", "Receita Federal"],
    category: "Tributário",
  },
  {
    term: "Departamento Pessoal",
    definition: "Área responsável pela administração de funcionários: admissões, demissões, folha de pagamento, férias, 13º salário, encargos trabalhistas e obrigações acessórias como eSocial.",
    related: ["eSocial", "FGTS", "INSS"],
    category: "Trabalhista",
  },
  {
    term: "Depreciação",
    definition: "Perda de valor de bens do ativo imobilizado pelo uso, obsolescência ou desgaste natural. Calculada sobre máquinas, veículos, móveis e imóveis conforme taxas definidas pela Receita Federal.",
    related: ["Ativo", "Imobilizado"],
    category: "Contábil",
  },
  {
    term: "DRE",
    definition: "Demonstração do Resultado do Exercício. Relatório contábil que apresenta receitas, custos, despesas e o resultado (lucro ou prejuízo) da empresa em determinado período.",
    related: ["Balanço Patrimonial", "Lucro", "Receita"],
    category: "Contábil",
  },
  {
    term: "eSocial",
    definition: "Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas. Unifica o envio de informações trabalhistas, previdenciárias e tributárias ao governo.",
    related: ["Departamento Pessoal", "FGTS", "INSS"],
    category: "Trabalhista",
  },
  {
    term: "Fator R",
    definition: "Cálculo que determina a alíquota do Simples Nacional para empresas de serviços do Anexo V. Se a folha de pagamento representa mais de 28% da receita bruta, a empresa é tributada pelo Anexo III (alíquotas menores).",
    related: ["Simples Nacional", "Planejamento Tributário"],
    category: "Tributário",
  },
  {
    term: "FGTS",
    definition: "Fundo de Garantia do Tempo de Serviço. Depósito mensal de 8% do salário do empregado em conta vinculada, destinado a formar reserva para demissão, aposentadoria ou outras situações previstas em lei.",
    related: ["CLT", "Departamento Pessoal", "eSocial"],
    category: "Trabalhista",
  },
  {
    term: "Fluxo de Caixa",
    definition: "Controle financeiro que registra todas as entradas e saídas de dinheiro da empresa, permitindo visualizar a disponibilidade de recursos e planejar pagamentos e investimentos.",
    related: ["BPO Financeiro", "Capital de Giro"],
    category: "Financeiro",
  },
  {
    term: "ICMS",
    definition: "Imposto sobre Circulação de Mercadorias e Serviços. Tributo estadual que incide sobre vendas de mercadorias, transporte interestadual e intermunicipal, e serviços de comunicação.",
    related: ["Substituição Tributária", "Nota Fiscal"],
    category: "Tributário",
  },
  {
    term: "INSS",
    definition: "Instituto Nacional do Seguro Social. Autarquia responsável pela previdência social no Brasil. Também se refere à contribuição previdenciária paga por empresas e trabalhadores.",
    related: ["GPS", "Departamento Pessoal", "eSocial"],
    category: "Trabalhista",
  },
  {
    term: "IRPF",
    definition: "Imposto de Renda Pessoa Física. Tributo federal sobre rendimentos de pessoas físicas, com alíquotas progressivas de 7,5% a 27,5%, declarado anualmente.",
    related: ["Declaração de IR", "Carnê-Leão", "DARF"],
    category: "Tributário",
  },
  {
    term: "IRPJ",
    definition: "Imposto de Renda Pessoa Jurídica. Tributo federal sobre o lucro das empresas. Alíquota de 15% + adicional de 10% sobre lucro excedente a R$ 20.000/mês.",
    related: ["CSLL", "Lucro Real", "Lucro Presumido"],
    category: "Tributário",
  },
  {
    term: "ISS",
    definition: "Imposto Sobre Serviços. Tributo municipal que incide sobre a prestação de serviços, com alíquotas que variam de 2% a 5% conforme o município e o tipo de serviço.",
    related: ["Nota Fiscal de Serviço", "Simples Nacional"],
    category: "Tributário",
  },
  {
    term: "Junta Comercial",
    definition: "Órgão estadual responsável pelo registro público de empresas mercantis. É onde se registra contratos sociais, alterações contratuais e demais atos empresariais.",
    related: ["Abertura de Empresa", "Contrato Social"],
    category: "Empresarial",
  },
  {
    term: "Livro Caixa",
    definition: "Registro contábil simplificado de entradas e saídas de recursos. Utilizado por profissionais autônomos e MEIs para controle financeiro e dedução de despesas no IR.",
    related: ["MEI", "IRPF", "Carnê-Leão"],
    category: "Contábil",
  },
  {
    term: "Lucro Presumido",
    definition: "Regime tributário onde o lucro é calculado por presunção (percentual sobre a receita), sem necessidade de contabilidade detalhada de custos. Indicado para empresas com lucro real superior ao presumido.",
    related: ["Lucro Real", "IRPJ", "CSLL"],
    category: "Tributário",
  },
  {
    term: "Lucro Real",
    definition: "Regime tributário onde IRPJ e CSLL são calculados sobre o lucro líquido efetivo, apurado pela contabilidade. Obrigatório para empresas com faturamento acima de R$ 78 milhões/ano.",
    related: ["Lucro Presumido", "IRPJ", "CSLL"],
    category: "Tributário",
  },
  {
    term: "MEI",
    definition: "Microempreendedor Individual. Regime simplificado para empreendedores com faturamento até R$ 81.000/ano, com tributação fixa mensal (DAS-MEI) e benefícios previdenciários.",
    related: ["DAS", "Simples Nacional", "CNPJ"],
    category: "Empresarial",
  },
  {
    term: "Nota Fiscal",
    definition: "Documento fiscal que comprova operações de venda de mercadorias ou prestação de serviços. Pode ser eletrônica (NF-e, NFS-e) e é obrigatória para fins tributários e comerciais.",
    related: ["ICMS", "ISS", "XML"],
    category: "Fiscal",
  },
  {
    term: "Obrigação Acessória",
    definition: "Declarações e documentos que empresas devem enviar ao governo além do pagamento de tributos: SPED, EFD, ECD, ECF, DCTF, DIRF, RAIS, entre outras.",
    related: ["SPED", "Receita Federal"],
    category: "Fiscal",
  },
  {
    term: "Passivo",
    definition: "Conjunto de obrigações e dívidas de uma empresa. Representa compromissos financeiros com terceiros. Divide-se em Passivo Circulante (curto prazo) e Passivo Não Circulante (longo prazo).",
    related: ["Ativo", "Patrimônio Líquido", "Balanço Patrimonial"],
    category: "Contábil",
  },
  {
    term: "Patrimônio Líquido",
    definition: "Diferença entre Ativo e Passivo de uma empresa. Representa o valor pertencente aos sócios: capital social, reservas e lucros ou prejuízos acumulados.",
    related: ["Ativo", "Passivo", "Capital Social"],
    category: "Contábil",
  },
  {
    term: "PIS",
    definition: "Programa de Integração Social. Contribuição federal que incide sobre o faturamento das empresas, destinada ao financiamento do seguro-desemprego e abono salarial.",
    related: ["Cofins", "Simples Nacional"],
    category: "Tributário",
  },
  {
    term: "Planejamento Tributário",
    definition: "Análise estratégica legal para reduzir a carga tributária de uma empresa, escolhendo o regime tributário mais vantajoso e aproveitando benefícios fiscais previstos em lei.",
    related: ["Simples Nacional", "Lucro Presumido", "Lucro Real"],
    category: "Tributário",
  },
  {
    term: "Pró-Labore",
    definition: "Remuneração dos sócios que trabalham na empresa. Diferente da distribuição de lucros, o pró-labore tem incidência de INSS (11%) e pode ser tributado no IR.",
    related: ["INSS", "Distribuição de Lucros", "IRPF"],
    category: "Trabalhista",
  },
  {
    term: "Receita Federal",
    definition: "Secretaria Especial da Receita Federal do Brasil. Órgão responsável pela administração dos tributos federais, fiscalização aduaneira e controle do comércio exterior.",
    related: ["CNPJ", "DARF", "IRPJ"],
    category: "Fiscal",
  },
  {
    term: "Regime de Caixa",
    definition: "Método contábil onde receitas e despesas são reconhecidas quando efetivamente recebidas ou pagas, independentemente da data de emissão da nota fiscal.",
    related: ["Regime de Competência", "Fluxo de Caixa"],
    category: "Contábil",
  },
  {
    term: "Regime de Competência",
    definition: "Método contábil onde receitas e despesas são reconhecidas na data do fato gerador (emissão da nota), independentemente do recebimento ou pagamento.",
    related: ["Regime de Caixa", "DRE"],
    category: "Contábil",
  },
  {
    term: "Regularização Empresarial",
    definition: "Processo de adequação de empresas com pendências fiscais, trabalhistas ou documentais. Inclui parcelamento de débitos, entrega de obrigações em atraso e atualização cadastral.",
    related: ["Receita Federal", "CNPJ"],
    category: "Empresarial",
  },
  {
    term: "Simples Nacional",
    definition: "Regime tributário simplificado para micro e pequenas empresas com faturamento até R$ 4,8 milhões/ano. Unifica 8 tributos em uma única guia (DAS) com alíquotas progressivas.",
    related: ["MEI", "DAS", "Fator R"],
    category: "Tributário",
  },
  {
    term: "SPED",
    definition: "Sistema Público de Escrituração Digital. Plataforma que unifica a recepção, validação e armazenamento de livros e documentos contábeis e fiscais em formato digital.",
    related: ["EFD", "ECD", "ECF"],
    category: "Fiscal",
  },
  {
    term: "Substituição Tributária",
    definition: "Regime onde a responsabilidade pelo recolhimento do ICMS é atribuída a um contribuinte diferente do que realizou a operação, geralmente o fabricante ou importador.",
    related: ["ICMS", "Nota Fiscal"],
    category: "Tributário",
  },
];

// Categorias disponíveis
const categories = [
  { id: "all", name: "Todos" },
  { id: "Tributário", name: "Tributário" },
  { id: "Contábil", name: "Contábil" },
  { id: "Empresarial", name: "Empresarial" },
  { id: "Trabalhista", name: "Trabalhista" },
  { id: "Fiscal", name: "Fiscal" },
  { id: "Financeiro", name: "Financeiro" },
  { id: "Serviços", name: "Serviços" },
];

// Alfabeto para navegação
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossarioPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  // Filtrar termos
  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter((item) => {
      const matchesSearch =
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Agrupar por letra
  const groupedTerms = useMemo(() => {
    const groups: Record<string, typeof glossaryTerms> = {};
    filteredTerms.forEach((term) => {
      const letter = term.term[0].toUpperCase();
      if (!groups[letter]) {
        groups[letter] = [];
      }
      groups[letter].push(term);
    });
    return groups;
  }, [filteredTerms]);

  // Letras disponíveis
  const availableLetters = Object.keys(groupedTerms).sort();

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            name: "Glossário Contábil ZACON",
            description:
              "Glossário completo de termos contábeis, tributários e empresariais para empreendedores brasileiros.",
            url: "https://zacon.com.br/glossario",
            inDefinedTermSet: glossaryTerms.map((item) => ({
              "@type": "DefinedTerm",
              name: item.term,
              description: item.definition,
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://zacon.com.br",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Glossário Contábil",
                item: "https://zacon.com.br/glossario",
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-zacon-navy py-16 lg:py-24">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-zacon-corporate/20 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 text-sm font-medium text-zacon-accent-light">
                <BookOpen className="mr-2 h-4 w-4" />
                Aprenda com a ZACON
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                Glossário Contábil
              </h1>
              <p className="mt-6 text-lg text-zacon-silver-light leading-relaxed">
                Entenda os principais termos de contabilidade, impostos e
                gestão empresarial. Mais de 40 conceitos explicados de forma
                simples e objetiva.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar termo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zacon-corporate focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-zacon-corporate text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Alphabet Navigation */}
          <div className="mt-4 flex flex-wrap gap-1 justify-center">
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => scrollToLetter(letter)}
                disabled={!availableLetters.includes(letter)}
                className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                  availableLetters.includes(letter)
                    ? "bg-zacon-navy/10 text-zacon-navy hover:bg-zacon-corporate hover:text-white"
                    : "bg-gray-100 text-gray-300 cursor-not-allowed"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Content */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Nenhum termo encontrado para &ldquo;{searchQuery}&rdquo;
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                Limpar filtros
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {availableLetters.map((letter) => (
                <div key={letter} id={`letter-${letter}`} className="scroll-mt-40">
                  <AnimatedSection>
                    <h2 className="text-3xl font-bold text-zacon-navy mb-4 pb-2 border-b-2 border-zacon-corporate">
                      {letter}
                    </h2>
                    <div className="space-y-3">
                      {groupedTerms[letter].map((item) => (
                        <div
                          key={item.term}
                          className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                        >
                          <button
                            onClick={() =>
                              setExpandedTerm(
                                expandedTerm === item.term ? null : item.term
                              )
                            }
                            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-lg font-semibold text-zacon-navy">
                                {item.term}
                              </span>
                              <span className="px-2 py-0.5 bg-zacon-navy/10 text-zacon-navy text-xs rounded-full">
                                {item.category}
                              </span>
                            </div>
                            <ChevronDown
                              className={`h-5 w-5 text-gray-400 transition-transform ${
                                expandedTerm === item.term ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {expandedTerm === item.term && (
                            <div className="px-5 pb-4 border-t border-gray-100">
                              <p className="mt-3 text-gray-700 leading-relaxed">
                                {item.definition}
                              </p>
                              {item.related.length > 0 && (
                                <div className="mt-4">
                                  <span className="text-sm text-gray-500">
                                    Termos relacionados:{" "}
                                  </span>
                                  <div className="inline-flex flex-wrap gap-2 mt-1">
                                    {item.related.map((related) => (
                                      <button
                                        key={related}
                                        onClick={() => {
                                          setSearchQuery(related);
                                          setSelectedCategory("all");
                                        }}
                                        className="text-sm text-zacon-corporate hover:underline"
                                      >
                                        {related}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl bg-gradient-to-br from-zacon-navy to-zacon-corporate p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <h2 className="relative text-2xl lg:text-3xl font-bold text-white">
                Ainda tem dúvidas sobre contabilidade?
              </h2>
              <p className="relative mt-4 text-zacon-silver-light max-w-xl mx-auto">
                Nossa equipe de contadores está pronta para esclarecer suas
                dúvidas e ajudar sua empresa a crescer com segurança.
              </p>
              <div className="relative mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="premium" size="lg" asChild>
                  <Link href="/contato">
                    Falar com um Contador
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  asChild
                >
                  <Link href="/perguntas-frequentes">Ver Perguntas Frequentes</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
