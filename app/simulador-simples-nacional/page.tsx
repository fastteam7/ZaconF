"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import {
  Calculator,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Info,
  Phone,
  AlertCircle,
  Building2,
  Percent,
  DollarSign,
  HelpCircle,
} from "lucide-react";
import { Button } from "../_components/ui/button";
import { AnimatedSection } from "../_components/AnimatedSection";
import { Card, CardContent } from "../_components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../_components/ui/accordion";
import { getWhatsAppLink } from "@/lib/utils";

const WHATSAPP_NUMBER = "48988744359";

// Tabelas do Simples Nacional 2026 - Anexo III (Serviços)
// [VERIFICAR] Valores devem ser confirmados com a legislação vigente
const simplesAnexoIII = [
  { limite: 180000, aliquota: 6.0, deducao: 0 },
  { limite: 360000, aliquota: 11.2, deducao: 9360 },
  { limite: 720000, aliquota: 13.5, deducao: 17640 },
  { limite: 1800000, aliquota: 16.0, deducao: 35640 },
  { limite: 3600000, aliquota: 21.0, deducao: 125640 },
  { limite: 4800000, aliquota: 33.0, deducao: 648000 },
];

// Tabelas do Simples Nacional 2026 - Anexo I (Comércio)
const simplesAnexoI = [
  { limite: 180000, aliquota: 4.0, deducao: 0 },
  { limite: 360000, aliquota: 7.3, deducao: 5940 },
  { limite: 720000, aliquota: 9.5, deducao: 13860 },
  { limite: 1800000, aliquota: 10.7, deducao: 22500 },
  { limite: 3600000, aliquota: 14.3, deducao: 87300 },
  { limite: 4800000, aliquota: 19.0, deducao: 378000 },
];

// Lucro Presumido
const lucroPresumido = {
  servicos: {
    presuncao: 32, // 32% para serviços
    irpj: 15,
    csll: 9,
    pis: 0.65,
    cofins: 3,
    iss: 5, // varia de 2% a 5%
  },
  comercio: {
    presuncao: 8, // 8% para comércio
    irpj: 15,
    csll: 9,
    pis: 0.65,
    cofins: 3,
    icms: 17, // varia por estado e produto
  },
};

type TipoAtividade = "servicos" | "comercio";

function calcularSimplesNacional(
  faturamentoAnual: number,
  tipo: TipoAtividade
): number {
  const tabela = tipo === "servicos" ? simplesAnexoIII : simplesAnexoI;

  for (const faixa of tabela) {
    if (faturamentoAnual <= faixa.limite) {
      const aliquotaEfetiva =
        (faturamentoAnual * (faixa.aliquota / 100) - faixa.deducao) /
        faturamentoAnual;
      return faturamentoAnual * aliquotaEfetiva;
    }
  }

  // Se ultrapassou o limite do Simples
  return -1;
}

function calcularLucroPresumido(
  faturamentoAnual: number,
  tipo: TipoAtividade
): number {
  const config = lucroPresumido[tipo];

  const baseCalculoIR = faturamentoAnual * (config.presuncao / 100);
  const irpj = baseCalculoIR * (config.irpj / 100);
  const adicionalIR = Math.max(0, baseCalculoIR - 240000) * 0.1; // Adicional de 10% sobre lucro > R$ 20k/mês
  const csll = baseCalculoIR * (config.csll / 100);
  const pis = faturamentoAnual * (config.pis / 100);
  const cofins = faturamentoAnual * (config.cofins / 100);

  let impostoAtividade = 0;
  if (tipo === "servicos") {
    const configServicos = lucroPresumido.servicos;
    impostoAtividade = faturamentoAnual * (configServicos.iss / 100);
  } else {
    // Para comércio, ICMS é mais complexo (créditos, ST, etc.)
    // Usando estimativa simplificada
    impostoAtividade = faturamentoAnual * 0.05; // Estimativa média líquida
  }

  return irpj + adicionalIR + csll + pis + cofins + impostoAtividade;
}

const faqs = [
  {
    question: "Este simulador é preciso?",
    answer:
      "Este simulador oferece uma estimativa simplificada para fins de comparação. Os valores reais dependem de diversos fatores como: atividade específica (CNAE), folha de pagamento (Fator R), localização (alíquota de ISS/ICMS), créditos tributários, e incentivos fiscais. Para uma análise precisa, consulte nossos contadores.",
  },
  {
    question: "Quando o Simples Nacional é mais vantajoso?",
    answer:
      "Geralmente o Simples Nacional é mais vantajoso para: faturamento até R$ 1-2 milhões/ano, empresas com folha de pagamento significativa (Fator R favorável), atividades de comércio com margens baixas, e empresas que valorizam simplicidade operacional.",
  },
  {
    question: "Quando o Lucro Presumido é mais vantajoso?",
    answer:
      "O Lucro Presumido costuma ser mais vantajoso para: empresas de serviços com faturamento acima de R$ 1-2 milhões/ano, atividades com margem de lucro alta (acima da presunção legal), empresas com poucos funcionários (Fator R desfavorável no Simples), e quando há créditos de PIS/COFINS a aproveitar.",
  },
  {
    question: "O que é o Fator R no Simples Nacional?",
    answer:
      "O Fator R é a relação entre a folha de pagamento (incluindo pró-labore e encargos) e a receita bruta dos últimos 12 meses. Se o Fator R for igual ou superior a 28%, empresas de serviços do Anexo V são tributadas pelo Anexo III (alíquotas menores). Isso pode representar economia de 5% a 10% do faturamento.",
  },
  {
    question: "Posso trocar de regime tributário?",
    answer:
      "A mudança de regime tributário é feita anualmente, em janeiro. Empresas do Simples podem optar pelo Lucro Presumido a qualquer momento (saindo do Simples). A volta ao Simples só é possível em janeiro, se atender aos requisitos. Planeje a mudança com antecedência.",
  },
];

export default function SimuladorSimplesNacionalPage() {
  const [faturamentoMensal, setFaturamentoMensal] = useState<number>(0);
  const [tipoAtividade, setTipoAtividade] = useState<TipoAtividade>("servicos");
  const [showResults, setShowResults] = useState(false);

  const faturamentoAnual = faturamentoMensal * 12;

  const resultados = useMemo(() => {
    if (faturamentoAnual <= 0) return null;

    const simples = calcularSimplesNacional(faturamentoAnual, tipoAtividade);
    const presumido = calcularLucroPresumido(faturamentoAnual, tipoAtividade);

    const simplesValido = simples >= 0;
    const simplesAnual = simplesValido ? simples : 0;
    const presumidoAnual = presumido;

    const economia = Math.abs(simplesAnual - presumidoAnual);
    const melhorOpcao = simplesValido
      ? simplesAnual < presumidoAnual
        ? "simples"
        : "presumido"
      : "presumido";

    return {
      simplesAnual,
      simplesValido,
      simplesPercentual: simplesValido
        ? (simplesAnual / faturamentoAnual) * 100
        : 0,
      presumidoAnual,
      presumidoPercentual: (presumidoAnual / faturamentoAnual) * 100,
      economia,
      economiaPercentual: (economia / faturamentoAnual) * 100,
      melhorOpcao,
    };
  }, [faturamentoAnual, tipoAtividade]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleSimular = () => {
    if (faturamentoMensal > 0) {
      setShowResults(true);
    }
  };

  return (
    <>
      {/* Hero com resposta direta AEO */}
      <section className="relative overflow-hidden bg-zacon-navy py-16 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-zacon-corporate/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-zacon-accent/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full border border-zacon-corporate/30 bg-zacon-corporate/10 px-4 py-2 text-sm text-zacon-corporate-light">
                <Calculator className="mr-2 h-4 w-4" />
                Ferramenta
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Simulador Simples Nacional vs Lucro Presumido
              </h1>
              <p className="mt-6 text-lg text-zacon-silver-light leading-relaxed">
                Compare os regimes tributários e descubra qual é mais vantajoso
                para sua empresa. Simulação instantânea com base nas tabelas de 2026.
              </p>

              {/* Resposta direta AEO */}
              <div className="mt-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-left">
                <p className="text-lg text-white leading-relaxed">
                  <strong>Simples Nacional ou Lucro Presumido: qual escolher?</strong>
                </p>
                <p className="mt-3 text-zacon-silver-light leading-relaxed">
                  O Simples Nacional costuma ser mais vantajoso para empresas com
                  faturamento até <strong className="text-white">R$ 1-2 milhões/ano</strong> e
                  folha de pagamento significativa. O Lucro Presumido é melhor para
                  faturamentos maiores ou margens de lucro <strong className="text-white">acima de 32%</strong>.
                  Use nosso simulador abaixo para uma estimativa personalizada.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Calculadora */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="p-8 shadow-xl border-2 border-zacon-light">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-zacon-navy">
                  Calcule sua economia tributária
                </h2>
                <p className="mt-2 text-zacon-graphite-light">
                  Informe seu faturamento mensal e tipo de atividade
                </p>
              </div>

              <div className="space-y-6">
                {/* Tipo de atividade */}
                <div>
                  <label className="block text-sm font-semibold text-zacon-navy mb-3">
                    Tipo de Atividade
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setTipoAtividade("servicos")}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        tipoAtividade === "servicos"
                          ? "border-zacon-corporate bg-zacon-corporate/5"
                          : "border-zacon-light hover:border-zacon-corporate/50"
                      }`}
                    >
                      <Building2
                        className={`mx-auto h-8 w-8 mb-2 ${
                          tipoAtividade === "servicos"
                            ? "text-zacon-corporate"
                            : "text-zacon-graphite-muted"
                        }`}
                      />
                      <span
                        className={`font-semibold ${
                          tipoAtividade === "servicos"
                            ? "text-zacon-corporate"
                            : "text-zacon-navy"
                        }`}
                      >
                        Serviços
                      </span>
                      <p className="text-xs text-zacon-graphite-muted mt-1">
                        Consultoria, TI, saúde, etc.
                      </p>
                    </button>
                    <button
                      onClick={() => setTipoAtividade("comercio")}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        tipoAtividade === "comercio"
                          ? "border-zacon-corporate bg-zacon-corporate/5"
                          : "border-zacon-light hover:border-zacon-corporate/50"
                      }`}
                    >
                      <TrendingUp
                        className={`mx-auto h-8 w-8 mb-2 ${
                          tipoAtividade === "comercio"
                            ? "text-zacon-corporate"
                            : "text-zacon-graphite-muted"
                        }`}
                      />
                      <span
                        className={`font-semibold ${
                          tipoAtividade === "comercio"
                            ? "text-zacon-corporate"
                            : "text-zacon-navy"
                        }`}
                      >
                        Comércio
                      </span>
                      <p className="text-xs text-zacon-graphite-muted mt-1">
                        Loja, e-commerce, varejo
                      </p>
                    </button>
                  </div>
                </div>

                {/* Faturamento mensal */}
                <div>
                  <label className="block text-sm font-semibold text-zacon-navy mb-3">
                    Faturamento Mensal Médio
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zacon-graphite-muted" />
                    <input
                      type="number"
                      value={faturamentoMensal || ""}
                      onChange={(e) =>
                        setFaturamentoMensal(Number(e.target.value))
                      }
                      placeholder="Ex: 50000"
                      className="w-full pl-12 pr-4 py-4 text-lg border-2 border-zacon-light rounded-xl focus:outline-none focus:ring-2 focus:ring-zacon-corporate focus:border-transparent"
                    />
                  </div>
                  <p className="mt-2 text-sm text-zacon-graphite-muted">
                    Faturamento anual estimado:{" "}
                    <strong className="text-zacon-navy">
                      {formatCurrency(faturamentoAnual)}
                    </strong>
                  </p>
                </div>

                {/* Botão simular */}
                <Button
                  size="xl"
                  className="w-full"
                  onClick={handleSimular}
                  disabled={faturamentoMensal <= 0}
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Simular Agora
                </Button>
              </div>
            </Card>
          </AnimatedSection>

          {/* Resultados */}
          {showResults && resultados && (
            <AnimatedSection delay={200}>
              <div className="mt-12">
                {/* Alerta de limitação */}
                {!resultados.simplesValido && (
                  <div className="mb-6 rounded-xl bg-amber-50 border border-amber-200 p-4 flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-amber-800">
                        Faturamento acima do limite do Simples Nacional
                      </p>
                      <p className="text-sm text-amber-700">
                        Empresas com faturamento acima de R$ 4,8 milhões/ano não
                        podem optar pelo Simples Nacional.
                      </p>
                    </div>
                  </div>
                )}

                {/* Cards de comparação */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Simples Nacional */}
                  <Card
                    className={`p-6 ${
                      resultados.melhorOpcao === "simples" && resultados.simplesValido
                        ? "ring-2 ring-green-500 bg-green-50/50"
                        : ""
                    }`}
                  >
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-zacon-navy">
                          Simples Nacional
                        </h3>
                        {resultados.melhorOpcao === "simples" &&
                          resultados.simplesValido && (
                            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                              <CheckCircle className="mr-1 h-3 w-3" />
                              Mais Vantajoso
                            </span>
                          )}
                        {!resultados.simplesValido && (
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                            Não disponível
                          </span>
                        )}
                      </div>

                      {resultados.simplesValido ? (
                        <>
                          <div className="text-3xl font-bold text-zacon-navy">
                            {formatCurrency(resultados.simplesAnual)}
                            <span className="text-lg font-normal text-zacon-graphite-muted">
                              /ano
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <Percent className="h-4 w-4 text-zacon-graphite-muted" />
                            <span className="text-zacon-graphite-light">
                              Alíquota efetiva:{" "}
                              <strong>
                                {resultados.simplesPercentual.toFixed(2)}%
                              </strong>
                            </span>
                          </div>
                          <div className="text-sm text-zacon-graphite-muted mt-1">
                            ≈ {formatCurrency(resultados.simplesAnual / 12)}/mês
                          </div>
                        </>
                      ) : (
                        <p className="text-zacon-graphite-muted">
                          Faturamento acima do limite de R$ 4,8 milhões/ano
                        </p>
                      )}
                    </CardContent>
                  </Card>

                  {/* Lucro Presumido */}
                  <Card
                    className={`p-6 ${
                      resultados.melhorOpcao === "presumido"
                        ? "ring-2 ring-green-500 bg-green-50/50"
                        : ""
                    }`}
                  >
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-zacon-navy">
                          Lucro Presumido
                        </h3>
                        {resultados.melhorOpcao === "presumido" && (
                          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            Mais Vantajoso
                          </span>
                        )}
                      </div>

                      <div className="text-3xl font-bold text-zacon-navy">
                        {formatCurrency(resultados.presumidoAnual)}
                        <span className="text-lg font-normal text-zacon-graphite-muted">
                          /ano
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Percent className="h-4 w-4 text-zacon-graphite-muted" />
                        <span className="text-zacon-graphite-light">
                          Alíquota efetiva:{" "}
                          <strong>
                            {resultados.presumidoPercentual.toFixed(2)}%
                          </strong>
                        </span>
                      </div>
                      <div className="text-sm text-zacon-graphite-muted mt-1">
                        ≈ {formatCurrency(resultados.presumidoAnual / 12)}/mês
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Resumo da economia */}
                {resultados.simplesValido && (
                  <Card className="mt-6 p-6 bg-zacon-navy text-white">
                    <CardContent className="pt-0">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <p className="text-zacon-silver-light">
                            Economia potencial com{" "}
                            <strong className="text-white">
                              {resultados.melhorOpcao === "simples"
                                ? "Simples Nacional"
                                : "Lucro Presumido"}
                            </strong>
                          </p>
                          <div className="text-3xl font-bold text-zacon-accent-light mt-1">
                            {formatCurrency(resultados.economia)}/ano
                          </div>
                          <p className="text-sm text-zacon-silver">
                            {resultados.economiaPercentual.toFixed(1)}% do
                            faturamento
                          </p>
                        </div>
                        <Button size="lg" variant="premium" asChild>
                          <a
                            href={getWhatsAppLink(
                              WHATSAPP_NUMBER,
                              `Olá! Fiz uma simulação no site e gostaria de uma análise mais detalhada. Faturamento: ${formatCurrency(faturamentoAnual)}/ano. Atividade: ${tipoAtividade}.`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Phone className="mr-2 h-5 w-5" />
                            Falar com Contador
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Aviso */}
                <div className="mt-6 rounded-xl bg-zacon-light-soft border border-zacon-light p-4 flex items-start gap-3">
                  <Info className="h-5 w-5 text-zacon-corporate flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-zacon-graphite-light">
                    <strong className="text-zacon-navy">Importante:</strong> Esta
                    é uma estimativa simplificada. O cálculo real considera
                    fatores como Fator R (folha de pagamento), atividade
                    específica, localização, e benefícios fiscais. Para uma
                    análise precisa, consulte nossos contadores.
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Tabelas de referência */}
      <section className="py-16 lg:py-24 bg-zacon-light-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-zacon-navy">
                Tabelas do Simples Nacional 2026
              </h2>
              <p className="mt-4 text-zacon-graphite-light">
                Alíquotas e faixas de faturamento vigentes
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Anexo III - Serviços */}
            <AnimatedSection delay={100}>
              <Card className="overflow-hidden">
                <div className="bg-zacon-navy p-4">
                  <h3 className="text-lg font-bold text-white">
                    Anexo III — Serviços
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-zacon-light-soft">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-zacon-navy">
                          Faturamento (12 meses)
                        </th>
                        <th className="px-4 py-3 text-right font-semibold text-zacon-navy">
                          Alíquota
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {simplesAnexoIII.map((faixa, index) => (
                        <tr key={index} className="border-t border-zacon-light">
                          <td className="px-4 py-3 text-zacon-graphite-light">
                            Até {formatCurrency(faixa.limite)}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-zacon-navy">
                            {faixa.aliquota}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </AnimatedSection>

            {/* Anexo I - Comércio */}
            <AnimatedSection delay={200}>
              <Card className="overflow-hidden">
                <div className="bg-zacon-navy p-4">
                  <h3 className="text-lg font-bold text-white">
                    Anexo I — Comércio
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-zacon-light-soft">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-zacon-navy">
                          Faturamento (12 meses)
                        </th>
                        <th className="px-4 py-3 text-right font-semibold text-zacon-navy">
                          Alíquota
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {simplesAnexoI.map((faixa, index) => (
                        <tr key={index} className="border-t border-zacon-light">
                          <td className="px-4 py-3 text-zacon-graphite-light">
                            Até {formatCurrency(faixa.limite)}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-zacon-navy">
                            {faixa.aliquota}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-zacon-corporate/5 border border-zacon-corporate/10 px-4 py-2 mb-6">
                <HelpCircle className="h-4 w-4 text-zacon-corporate" />
                <span className="text-sm font-semibold text-zacon-corporate uppercase tracking-wider">
                  Dúvidas Frequentes
                </span>
              </div>
              <h2 className="text-3xl font-bold text-zacon-navy">
                Perguntas sobre Regimes Tributários
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="rounded-2xl border border-zacon-light bg-white shadow-sm overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-zacon-light last:border-0"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-zacon-navy hover:text-zacon-corporate">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-zacon-graphite-light">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-zacon-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Quer uma análise completa e personalizada?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zacon-silver-light">
                Nossos contadores avaliam sua situação específica, considerando
                todos os fatores que impactam a tributação da sua empresa.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="premium" asChild>
                  <a
                    href={getWhatsAppLink(
                      WHATSAPP_NUMBER,
                      "Olá! Gostaria de uma análise tributária completa para minha empresa."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Falar com Contador
                  </a>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-zacon-navy"
                  asChild
                >
                  <Link href="/servicos/planejamento-tributario">
                    Ver Planejamento Tributário
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
