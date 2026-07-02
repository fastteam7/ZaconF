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
      {/* Hero */}
      <section className="bg-gradient-to-br from-zacon-primary to-zacon-primary-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Entre em Contato
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
                Estamos prontos para atender você. Nossa equipe oferece
                atendimento humanizado e personalizado para cada necessidade.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} delay={index * 100}>
                <Card className="h-full text-center transition-all hover:shadow-lg hover:border-zacon-primary">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-zacon-primary/10 text-zacon-primary">
                      <info.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-semibold text-zacon-primary">
                      {info.title}
                    </h3>
                    <div className="mt-2 space-y-1">
                      {info.content.map((line, i) =>
                        info.link && i === 0 ? (
                          <a
                            key={i}
                            href={info.link}
                            className="block text-gray-600 hover:text-zacon-primary transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={i} className="text-gray-600">
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
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <AnimatedSection>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-zacon-primary">
                  Envie uma Mensagem
                </h2>
                <p className="mt-2 text-gray-600">
                  Preencha o formulário abaixo e nossa equipe entrará em contato
                  o mais breve possível.
                </p>

                {isSubmitted ? (
                  <div className="mt-8 flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Mensagem Enviada!
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Obrigado pelo contato. Retornaremos em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
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
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-zacon-primary focus:outline-none focus:ring-2 focus:ring-zacon-primary/20"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
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
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-zacon-primary focus:outline-none focus:ring-2 focus:ring-zacon-primary/20"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Telefone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-zacon-primary focus:outline-none focus:ring-2 focus:ring-zacon-primary/20"
                          placeholder="(48) 99999-9999"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Assunto *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-zacon-primary focus:outline-none focus:ring-2 focus:ring-zacon-primary/20"
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
                        className="block text-sm font-medium text-gray-700"
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
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-zacon-primary focus:outline-none focus:ring-2 focus:ring-zacon-primary/20 resize-none"
                        placeholder="Como podemos ajudar você?"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Enviar Mensagem
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
                <div className="rounded-2xl bg-gradient-to-r from-zacon-primary to-zacon-primary-dark p-8 text-white">
                  <h3 className="text-2xl font-bold">Prefere WhatsApp?</h3>
                  <p className="mt-3 text-gray-300">
                    Atendimento rápido e direto pelo WhatsApp. Nossa equipe está
                    pronta para ajudar você com atendimento humanizado e
                    personalizado.
                  </p>
                  <Button
                    variant="whatsapp"
                    size="lg"
                    className="mt-6 w-full"
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
                    </a>
                  </Button>
                </div>

                {/* Map */}
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.5!2d-48.394!3d-27.434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI2JzAyLjQiUyA0OMKwMjMnMzguNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização ZACON Contabilidade"
                    className="grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </div>

                {/* Additional info */}
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h4 className="font-semibold text-zacon-primary">
                    Sobre a ZACON
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Desde 2009 construindo relações de confiança. A ZACON
                    Contabilidade oferece atendimento humanizado e soluções
                    contábeis modernas para empresas e pessoas físicas.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
