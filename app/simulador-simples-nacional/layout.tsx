import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Simulador Simples Nacional vs Lucro Presumido | Calculadora Gratuita",
  description:
    "Compare Simples Nacional e Lucro Presumido com nosso simulador gratuito. Calcule qual regime tributário é mais vantajoso para sua empresa em 2026.",
  keywords: [
    "simulador simples nacional",
    "calculadora simples nacional",
    "simples nacional vs lucro presumido",
    "comparar regimes tributários",
    "qual regime tributário escolher",
    "calculadora tributária",
    "simples nacional 2026",
    "lucro presumido 2026",
  ],
  pathname: "/simulador-simples-nacional",
});

const faqs = [
  {
    question: "Este simulador é preciso?",
    answer:
      "Este simulador oferece uma estimativa simplificada para fins de comparação. Os valores reais dependem de diversos fatores como atividade específica, folha de pagamento, localização e incentivos fiscais.",
  },
  {
    question: "Quando o Simples Nacional é mais vantajoso?",
    answer:
      "Geralmente o Simples Nacional é mais vantajoso para faturamento até R$ 1-2 milhões/ano, empresas com folha de pagamento significativa, e atividades de comércio com margens baixas.",
  },
  {
    question: "Quando o Lucro Presumido é mais vantajoso?",
    answer:
      "O Lucro Presumido costuma ser mais vantajoso para empresas de serviços com faturamento acima de R$ 1-2 milhões/ano e atividades com margem de lucro alta.",
  },
  {
    question: "O que é o Fator R no Simples Nacional?",
    answer:
      "O Fator R é a relação entre a folha de pagamento e a receita bruta. Se for igual ou superior a 28%, empresas de serviços são tributadas com alíquotas menores.",
  },
  {
    question: "Posso trocar de regime tributário?",
    answer:
      "A mudança de regime tributário é feita anualmente, em janeiro. A volta ao Simples só é possível em janeiro, se atender aos requisitos.",
  },
];

export default function SimuladorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Simulador Simples Nacional", url: "/simulador-simples-nacional" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema(faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Simulador Simples Nacional vs Lucro Presumido",
            description:
              "Calculadora gratuita para comparar regimes tributários brasileiros",
            url: "https://zacon.com.br/simulador-simples-nacional",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "BRL",
            },
            provider: {
              "@type": "AccountingService",
              name: "ZACON Contabilidade",
              url: "https://zacon.com.br",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
