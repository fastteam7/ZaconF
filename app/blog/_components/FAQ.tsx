"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export function FAQ({ items, title = "Perguntas Frequentes" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-8">
      {title && (
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="h-5 w-5 text-zacon-corporate" />
          <h3 className="text-lg font-semibold text-zacon-navy">{title}</h3>
        </div>
      )}
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-zacon-corporate/30 transition-colors"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-zacon-corporate focus-visible:ring-inset"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-medium text-zacon-navy pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-zacon-graphite-muted flex-shrink-0 transition-transform duration-200",
                  openIndex === index && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 text-zacon-graphite-light leading-relaxed border-t border-gray-100 pt-3">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

// Single FAQ item component for inline use
interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQSingle({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4 border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-zacon-corporate/30 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-zacon-corporate focus-visible:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-zacon-navy pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-zacon-graphite-muted flex-shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 text-zacon-graphite-light leading-relaxed border-t border-gray-100 pt-3">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
