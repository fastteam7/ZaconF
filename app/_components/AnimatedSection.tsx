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
  const [hasMounted, setHasMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasMounted(true);

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    // Fallback: garante visibilidade após 1.5s mesmo se observer falhar
    const fallbackTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallbackTimeout);
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.01, // Mais sensível
        rootMargin: "50px 0px 50px 0px", // Margem positiva para detectar antes
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      clearTimeout(fallbackTimeout);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  // SSR: renderiza visível (sem animação)
  if (!hasMounted) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const baseClasses = "transition-all duration-700 ease-out";

  const getInitialClasses = () => {
    switch (animation) {
      case "fade-up":
        return "translate-y-6 opacity-0";
      case "fade-down":
        return "-translate-y-6 opacity-0";
      case "fade-left":
        return "translate-x-6 opacity-0";
      case "fade-right":
        return "-translate-x-6 opacity-0";
      case "scale":
        return "scale-95 opacity-0";
      default:
        return "translate-y-6 opacity-0";
    }
  };

  const animationClasses = isVisible
    ? `${baseClasses} translate-y-0 translate-x-0 scale-100 opacity-100`
    : `${baseClasses} ${getInitialClasses()}`;

  return (
    <div ref={ref} className={cn(animationClasses, className)}>
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
