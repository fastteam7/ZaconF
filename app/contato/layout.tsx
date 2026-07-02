import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Contato",
  description:
    "Entre em contato com a ZACON Contabilidade. Atendimento humanizado e personalizado para empresas e pessoas físicas em Florianópolis. WhatsApp: (48) 98874-4359.",
  keywords: [
    "contato zacon",
    "contador florianópolis",
    "contabilidade florianópolis contato",
    "whatsapp contador",
  ],
  pathname: "/contato",
});

export default function ContatoLayout({
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
              { name: "Contato", url: "/contato" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
