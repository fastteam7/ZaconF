import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Glossário Contábil | Termos de Contabilidade e Impostos",
  description:
    "Glossário completo com mais de 40 termos contábeis, tributários e empresariais explicados de forma simples. MEI, Simples Nacional, IRPF, ICMS, eSocial e mais.",
  keywords: [
    "glossário contábil",
    "termos contábeis",
    "dicionário tributário",
    "termos de contabilidade",
    "Simples Nacional",
    "MEI",
    "IRPF",
    "impostos Brasil",
    "contabilidade para leigos",
    "ZACON",
  ],
  pathname: "/glossario",
});

export default function GlossarioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
