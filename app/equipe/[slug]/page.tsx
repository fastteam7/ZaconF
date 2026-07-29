import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Award,
  BookOpen,
  Briefcase,
  ArrowLeft,
  Phone,
  Mail,
  CheckCircle,
} from "lucide-react";
import { Button } from "../../_components/ui/button";
import { AnimatedSection } from "../../_components/AnimatedSection";
import { Card, CardContent } from "../../_components/ui/card";
import { Breadcrumb } from "../../_components/Breadcrumb";
import { constructMetadata } from "@/lib/seo";
import { teamMembers, getTeamMemberBySlug } from "@/lib/team";
import { getWhatsAppLink } from "@/lib/utils";
import { siteConfig } from "@/lib/seo";

interface TeamMemberPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: TeamMemberPageProps) {
  const resolvedParams = await params;
  const member = getTeamMemberBySlug(resolvedParams.slug);

  if (!member) {
    return constructMetadata({
      title: "Profissional não encontrado",
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${member.name} | ${member.role}`,
    description: `Conheça ${member.name}, ${member.role} na ZACON Contabilidade. ${member.description}`,
    keywords: [
      member.name.toLowerCase(),
      member.role.toLowerCase(),
      "contador florianópolis",
      "equipe zacon",
      ...(member.crc ? ["contador crc"] : []),
    ],
    pathname: `/equipe/${member.slug}`,
  });
}

const WHATSAPP_NUMBER = "48988744359";

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const resolvedParams = await params;
  const member = getTeamMemberBySlug(resolvedParams.slug);

  if (!member) {
    notFound();
  }

  // Outros membros da equipe para sugestão
  const otherMembers = teamMembers.filter((m) => m.slug !== member.slug).slice(0, 3);

  return (
    <>
      {/* Schema Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": `${siteConfig.url}/equipe/${member.slug}`,
            name: member.name,
            jobTitle: member.role,
            description: member.description,
            worksFor: {
              "@type": "AccountingService",
              name: "ZACON Contabilidade",
              url: siteConfig.url,
            },
            ...(member.crc && {
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "professional license",
                name: member.crc,
                recognizedBy: {
                  "@type": "Organization",
                  name: "Conselho Regional de Contabilidade de Santa Catarina",
                },
              },
            }),
            knowsAbout: member.specialties,
            ...(member.image &&
              !member.image.includes("placeholder") && {
                image: `${siteConfig.url}${member.image}`,
              }),
          }),
        }}
      />

      {/* Schema BreadcrumbList */}
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
                item: siteConfig.url,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Sobre",
                item: `${siteConfig.url}/sobre`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: member.name,
                item: `${siteConfig.url}/equipe/${member.slug}`,
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-zacon-navy py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-zacon-black via-zacon-navy to-zacon-corporate-deep" />
        <div className="absolute inset-0 dot-pattern-light opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zacon-corporate/15 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Breadcrumb
              items={[
                { label: "Sobre", href: "/sobre" },
                { label: member.name, href: `/equipe/${member.slug}` },
              ]}
              className="text-zacon-silver-light mb-8"
            />

            <div className="grid gap-12 lg:grid-cols-3 lg:items-center">
              {/* Foto */}
              <div className="lg:col-span-1">
                <div className="relative mx-auto w-64 h-64 lg:w-full lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} na ZACON Contabilidade`}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zacon-navy/50 to-transparent" />
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-2 text-center lg:text-left">
                {member.crc && (
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] border border-white/[0.1] px-4 py-2 mb-6">
                    <Award className="h-4 w-4 text-zacon-accent-light" />
                    <span className="text-sm font-medium text-white/90">
                      {member.crc}
                    </span>
                  </div>
                )}
                <h1 className="text-4xl sm:text-5xl font-bold text-white">
                  {member.name}
                </h1>
                <p className="mt-4 text-xl text-zacon-corporate-light font-semibold">
                  {member.role}
                </p>
                <p className="mt-6 text-lg text-zacon-silver-light leading-relaxed max-w-2xl">
                  {member.description}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" variant="premium" asChild>
                    <a
                      href={getWhatsAppLink(
                        WHATSAPP_NUMBER,
                        `Olá! Gostaria de falar com ${member.name.split(" ")[0]}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Entrar em Contato
                    </a>
                  </Button>
                  <Button size="lg" variant="outline-light" asChild>
                    <Link href="/sobre">
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Ver Equipe Completa
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Biografia */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-zacon-navy mb-6">
                Sobre {member.name.split(" ")[0]}
              </h2>
              {member.fullBio.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-zacon-graphite-light leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Especialidades, Formação e Experiência */}
      <section className="py-16 lg:py-24 bg-zacon-light-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Especialidades */}
            <AnimatedSection>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zacon-corporate/10 flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-zacon-corporate" />
                    </div>
                    <h3 className="text-xl font-bold text-zacon-navy">
                      Especialidades
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {member.specialties.map((specialty, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-zacon-corporate flex-shrink-0 mt-0.5" />
                        <span className="text-zacon-graphite-light">{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Formação */}
            <AnimatedSection delay={100}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zacon-corporate/10 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-zacon-corporate" />
                    </div>
                    <h3 className="text-xl font-bold text-zacon-navy">
                      Formação
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {member.education.map((edu, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-zacon-corporate flex-shrink-0 mt-0.5" />
                        <span className="text-zacon-graphite-light">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Experiência */}
            <AnimatedSection delay={200}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zacon-corporate/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-zacon-corporate" />
                    </div>
                    <h3 className="text-xl font-bold text-zacon-navy">
                      Experiência
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {member.experience.map((exp, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-zacon-corporate flex-shrink-0 mt-0.5" />
                        <span className="text-zacon-graphite-light">{exp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Outros membros da equipe */}
      {otherMembers.length > 0 && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-zacon-navy">
                  Conheça também
                </h2>
                <p className="mt-4 text-zacon-graphite-light">
                  Outros profissionais da nossa equipe
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-3">
              {otherMembers.map((otherMember, index) => (
                <AnimatedSection key={otherMember.slug} delay={index * 100}>
                  <Link href={`/equipe/${otherMember.slug}`}>
                    <Card className="h-full hover-lift cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                            <Image
                              src={otherMember.image}
                              alt={otherMember.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-zacon-navy">
                              {otherMember.name}
                            </h3>
                            <p className="text-sm text-zacon-corporate">
                              {otherMember.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-zacon-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Quer falar com nossa equipe?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zacon-silver-light">
                Entre em contato e receba atendimento personalizado de
                profissionais qualificados.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="xl" variant="premium" asChild>
                  <a
                    href={getWhatsAppLink(
                      WHATSAPP_NUMBER,
                      "Olá! Gostaria de falar com a equipe da ZACON."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Falar pelo WhatsApp
                  </a>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-zacon-navy"
                  asChild
                >
                  <Link href="/contato">Enviar Mensagem</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
