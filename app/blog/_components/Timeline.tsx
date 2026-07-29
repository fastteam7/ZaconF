"use client";

import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface TimelineItem {
  title: string;
  description?: string;
  badge?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  title?: string;
}

export function Timeline({ items, title }: TimelineProps) {
  return (
    <div className="my-8">
      {title && (
        <h3 className="text-lg font-semibold text-zacon-navy mb-6">{title}</h3>
      )}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-zacon-corporate via-zacon-corporate/50 to-zacon-corporate/20" />

        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="relative pl-12">
              {/* Step number circle */}
              <div className="absolute left-0 w-8 h-8 rounded-full bg-zacon-corporate flex items-center justify-center text-white font-semibold text-sm shadow-md">
                {index + 1}
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-zacon-corporate/30 hover:shadow-sm transition-all">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-medium text-zacon-navy">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="mt-1 text-sm text-zacon-graphite-light leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.badge && (
                    <span className="flex-shrink-0 inline-flex items-center rounded-full bg-zacon-corporate/10 px-2.5 py-0.5 text-xs font-medium text-zacon-corporate">
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Horizontal stepper variant for simple processes
interface StepperProps {
  steps: string[];
  currentStep?: number;
}

export function Stepper({ steps, currentStep = -1 }: StepperProps) {
  return (
    <div className="my-6 overflow-x-auto pb-2">
      <div className="flex items-center min-w-max">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                  index <= currentStep
                    ? "bg-zacon-corporate text-white"
                    : "bg-gray-100 text-gray-500 border border-gray-200"
                )}
              >
                {index < currentStep ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  index + 1
                )}
              </div>
              <span
                className={cn(
                  "mt-2 text-xs font-medium text-center max-w-[80px]",
                  index <= currentStep
                    ? "text-zacon-corporate"
                    : "text-gray-500"
                )}
              >
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "w-12 h-0.5 mx-2",
                  index < currentStep ? "bg-zacon-corporate" : "bg-gray-200"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
