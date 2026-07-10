import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getContactPageSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Contato | Fale Conosco",
  description:
    "Entre em contato com a ZACON Contabilidade. Atendimento humanizado e personalizado para empresas e pessoas físicas em Florianópolis. WhatsApp: (48) 98874-4359.",
  keywords: [
    "contato zacon",
    "contador florianópolis contato",
    "contabilidade florianópolis telefone",
    "whatsapp contador florianópolis",
    "endereço zacon contabilidade",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getContactPageSchema()),
        }}
      />
      {children}
    </>
  );
}
