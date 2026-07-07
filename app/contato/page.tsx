"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "../_components/ui/button";
import { Card, CardContent } from "../_components/ui/card";
import { AnimatedSection } from "../_components/AnimatedSection";
import { getWhatsAppLink } from "@/lib/utils";

const WHATSAPP_NUMBER = "48988744359";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: [
      "Rod. Armando Calil Bulos, 5785",
      "Ingleses do Rio Vermelho",
      "Florianópolis - SC, 88058-001",
    ],
  },
  {
    icon: Phone,
    title: "Telefone / WhatsApp",
    content: ["(48) 98874-4359"],
    link: `tel:+5548988744359`,
  },
  {
    icon: Mail,
    title: "E-mail",
    content: ["contato@zacon.com.br"],
    link: "mailto:contato@zacon.com.br",
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    content: ["Segunda a Sexta", "08:00 - 18:00"],
  },
];

const subjects = [
  { value: "abertura", label: "Abertura de Empresa" },
  { value: "alteracao", label: "Alteração ou Baixa de Empresa" },
  { value: "contabilidade", label: "Contabilidade Geral" },
  { value: "fiscal", label: "Escrita Fiscal" },
  { value: "dp", label: "Departamento Pessoal" },
  { value: "irpf", label: "Imposto de Renda PF" },
  { value: "mei", label: "MEI" },
  { value: "regularizacao", label: "Regularização CPF/CNPJ" },
  { value: "tributario", label: "Planejamento Tributário" },
  { value: "saude", label: "Consultoria Área da Saúde" },
  { value: "bpo", label: "BPO Financeiro" },
  { value: "outros", label: "Outros Assuntos" },
];

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success message
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-zacon-black">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zacon-black via-zacon-navy to-zacon-corporate-deep" />
        <div className="absolute inset-0 dot-pattern-light opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zacon-corporate/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zacon-accent/10 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-36">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.1] px-5 py-2.5 mb-8">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-zacon-accent/20">
                  <MessageCircle className="h-3.5 w-3.5 text-zacon-accent-light" />
                </div>
                <span className="text-sm font-medium text-white/90 tracking-wide">
                  Atendimento humanizado e personalizado
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-white">Entre em</span>{" "}
                <span className="text-gradient-silver">Contato</span>
              </h1>
              <p className="mx-auto mt-8 text-lg sm:text-xl text-zacon-silver-light leading-relaxed max-w-2xl">
                Estamos prontos para atender você. Nossa equipe oferece
                atendimento personalizado para cada necessidade.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} delay={index * 100}>
                <Card className="h-full text-center">
                  <CardContent className="pt-8 pb-8">
                    <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-zacon-corporate/10 to-zacon-accent/5 text-zacon-corporate">
                      <info.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-bold text-zacon-navy">{info.title}</h3>
                    <div className="mt-3 space-y-1">
                      {info.content.map((line, i) =>
                        info.link && i === 0 ? (
                          <a
                            key={i}
                            href={info.link}
                            className="block text-zacon-graphite-light hover:text-zacon-corporate transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={i} className="text-zacon-graphite-light">
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map */}
      <section className="bg-zacon-light-ultra py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <AnimatedSection>
              <div className="rounded-2xl bg-white p-8 lg:p-10 shadow-card border border-zacon-light/80">
                <h2 className="text-2xl font-bold text-zacon-navy">
                  Envie uma Mensagem
                </h2>
                <p className="mt-3 text-zacon-graphite-light">
                  Preencha o formulário abaixo e nossa equipe entrará em contato
                  o mais breve possível.
                </p>

                {isSubmitted ? (
                  <div className="mt-10 flex flex-col items-center justify-center py-16 text-center">
                    <div className="mb-5 inline-flex h-18 w-18 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-zacon-navy">
                      Mensagem Enviada!
                    </h3>
                    <p className="mt-3 text-zacon-graphite-light">
                      Obrigado pelo contato. Retornaremos em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-zacon-graphite mb-2"
                        >
                          Nome completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="block w-full rounded-xl border border-zacon-light bg-white px-4 py-3.5 text-zacon-graphite transition-all duration-300 focus:border-zacon-corporate focus:outline-none focus:ring-2 focus:ring-zacon-corporate/20"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-zacon-graphite mb-2"
                        >
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full rounded-xl border border-zacon-light bg-white px-4 py-3.5 text-zacon-graphite transition-all duration-300 focus:border-zacon-corporate focus:outline-none focus:ring-2 focus:ring-zacon-corporate/20"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-zacon-graphite mb-2"
                        >
                          Telefone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="block w-full rounded-xl border border-zacon-light bg-white px-4 py-3.5 text-zacon-graphite transition-all duration-300 focus:border-zacon-corporate focus:outline-none focus:ring-2 focus:ring-zacon-corporate/20"
                          placeholder="(48) 99999-9999"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-semibold text-zacon-graphite mb-2"
                        >
                          Assunto *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="block w-full rounded-xl border border-zacon-light bg-white px-4 py-3.5 text-zacon-graphite transition-all duration-300 focus:border-zacon-corporate focus:outline-none focus:ring-2 focus:ring-zacon-corporate/20"
                        >
                          <option value="">Selecione um assunto...</option>
                          {subjects.map((subject) => (
                            <option key={subject.value} value={subject.value}>
                              {subject.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-zacon-graphite mb-2"
                      >
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="block w-full rounded-xl border border-zacon-light bg-white px-4 py-3.5 text-zacon-graphite transition-all duration-300 focus:border-zacon-corporate focus:outline-none focus:ring-2 focus:ring-zacon-corporate/20 resize-none"
                        placeholder="Como podemos ajudar você?"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      variant="premium"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Enviar Mensagem
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Map and WhatsApp */}
            <AnimatedSection delay={200}>
              <div className="space-y-6">
                {/* WhatsApp CTA */}
                <div className="rounded-2xl bg-gradient-to-br from-zacon-navy via-zacon-navy-medium to-zacon-corporate p-8 lg:p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-zacon-accent/10 rounded-full blur-2xl" />
                  <h3 className="text-2xl font-bold relative">Prefere WhatsApp?</h3>
                  <p className="mt-4 text-zacon-silver-light leading-relaxed relative">
                    Atendimento rápido e direto pelo WhatsApp. Nossa equipe está
                    pronta para ajudar você com atendimento humanizado e
                    verdadeiramente personalizado.
                  </p>
                  <Button
                    variant="whatsapp"
                    size="lg"
                    className="mt-6 w-full group relative"
                    asChild
                  >
                    <a
                      href={getWhatsAppLink(
                        WHATSAPP_NUMBER,
                        "Olá! Vim pelo site da ZACON e gostaria de mais informações."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Falar pelo WhatsApp
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>

                {/* Map */}
                <div className="overflow-hidden rounded-2xl shadow-card border border-zacon-light/80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.5!2d-48.394!3d-27.434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI2JzAyLjQiUyA0OMKwMjMnMzguNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização ZACON Contabilidade"
                    className="grayscale transition-all duration-500 hover:grayscale-0"
                  />
                </div>

                {/* Additional info */}
                <Card className="p-6">
                  <h4 className="font-bold text-zacon-navy">
                    Sobre a ZACON
                  </h4>
                  <p className="mt-3 text-sm text-zacon-graphite-light leading-relaxed">
                    Desde 2009 construindo relações de confiança. A ZACON
                    Contabilidade oferece atendimento humanizado e soluções
                    contábeis modernas para empresas e pessoas físicas em
                    Florianópolis e região.
                  </p>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
