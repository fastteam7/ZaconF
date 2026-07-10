"use client";

import { useEffect, useRef, useState, memo } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale";
}

// Memoizado para evitar re-renders desnecessários
export const AnimatedSection = memo(function AnimatedSection({
  children,
  className,
  delay = 0,
  animation = "fade-up",
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for smoother animation triggering
          requestAnimationFrame(() => {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          });
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out will-change-transform";

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${baseClasses} translate-y-8 opacity-0`;
        case "fade-down":
          return `${baseClasses} -translate-y-8 opacity-0`;
        case "fade-left":
          return `${baseClasses} translate-x-8 opacity-0`;
        case "fade-right":
          return `${baseClasses} -translate-x-8 opacity-0`;
        case "scale":
          return `${baseClasses} scale-95 opacity-0`;
        default:
          return `${baseClasses} translate-y-8 opacity-0`;
      }
    }

    return `${baseClasses} translate-y-0 translate-x-0 scale-100 opacity-100`;
  };

  return (
    <div ref={ref} className={cn(getAnimationClasses(), className)}>
      {children}
    </div>
  );
});

// Versão estática (Server Component compatible) para uso onde animação não é necessária
export function StaticSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
