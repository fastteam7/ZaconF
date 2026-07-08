import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zacon: {
          // Paleta Premium Corporativa - Inspiração Big 4
          black: "#0A0A0A",
          "black-soft": "#111111",

          // Navy - Principal para backgrounds escuros
          navy: "#0F172A",
          "navy-light": "#1E293B",
          "navy-medium": "#162033",

          // Azul Corporativo - Cor principal de marca
          corporate: "#1E3A8A",
          "corporate-light": "#2563EB",
          "corporate-dark": "#1E40AF",
          "corporate-deep": "#172554",

          // Prata/Cinza - Tons neutros premium
          silver: "#9CA3AF",
          "silver-light": "#D1D5DB",
          "silver-dark": "#6B7280",

          // Grafite - Textos
          graphite: "#1F2937",
          "graphite-light": "#374151",
          "graphite-muted": "#4B5563",

          // Tons claros
          light: "#E5E7EB",
          "light-soft": "#F3F4F6",
          "light-ultra": "#F9FAFB",
          white: "#FFFFFF",

          // Accent - Destaques e CTAs
          accent: "#3B82F6",
          "accent-light": "#60A5FA",
          "accent-dark": "#2563EB",
          "accent-glow": "#93C5FD",

          // Gold sutil para premium touch
          gold: "#D4A574",
          "gold-light": "#E8C9A8",
          "gold-dark": "#B8956A",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        // Sombras Premium
        "premium-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "premium": "0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
        "premium-md": "0 6px 12px -2px rgba(0, 0, 0, 0.08), 0 3px 6px -3px rgba(0, 0, 0, 0.06)",
        "premium-lg": "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.06)",
        "premium-xl": "0 20px 40px -8px rgba(0, 0, 0, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.08)",
        "premium-2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 25px -15px rgba(0, 0, 0, 0.1)",

        // Sombras para cards
        "card": "0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 12px 40px -8px rgba(30, 58, 138, 0.12), 0 4px 12px -4px rgba(0, 0, 0, 0.06)",
        "card-elevated": "0 8px 30px -6px rgba(30, 58, 138, 0.15), 0 4px 8px -4px rgba(0, 0, 0, 0.08)",

        // Glow effects
        "glow-sm": "0 0 15px rgba(59, 130, 246, 0.25)",
        "glow": "0 0 25px rgba(59, 130, 246, 0.3)",
        "glow-lg": "0 0 40px rgba(59, 130, 246, 0.35)",
        "glow-xl": "0 0 60px rgba(59, 130, 246, 0.4)",
        "glow-corporate": "0 0 40px rgba(30, 58, 138, 0.3)",

        // Inner shadows
        "inner-light": "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "inner-dark": "inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        // Gradientes Premium
        "gradient-premium": "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #0F172A 100%)",
        "gradient-corporate": "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)",
        "gradient-corporate-subtle": "linear-gradient(135deg, #1E3A8A 0%, #1E40AF 50%, #2563EB 100%)",
        "gradient-dark": "linear-gradient(180deg, #0A0A0A 0%, #0F172A 100%)",
        "gradient-navy": "linear-gradient(180deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
        "gradient-subtle": "linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 50%, #E5E7EB 100%)",
        "gradient-hero": "linear-gradient(145deg, #0A0A0A 0%, #0F172A 30%, #162033 60%, #1E3A8A 100%)",
        "gradient-hero-alt": "linear-gradient(160deg, #0F172A 0%, #172554 40%, #1E3A8A 80%, #2563EB 100%)",

        // Radial gradients
        "radial-corporate": "radial-gradient(ellipse at center, rgba(30, 58, 138, 0.15) 0%, transparent 70%)",
        "radial-accent": "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
        "radial-glow": "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",

        // Mesh patterns
        "mesh-premium": "radial-gradient(at 40% 20%, rgba(30, 58, 138, 0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(59, 130, 246, 0.06) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(30, 58, 138, 0.04) 0px, transparent 50%), radial-gradient(at 80% 100%, rgba(37, 99, 235, 0.06) 0px, transparent 50%)",
        "mesh-dark": "radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.1) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(30, 58, 138, 0.1) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(59, 130, 246, 0.05) 0px, transparent 50%)",

        // Noise texture (subtle)
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in-down": "fade-in-down 0.6s ease-out",
        "fade-in-left": "fade-in-left 0.6s ease-out",
        "fade-in-right": "fade-in-right 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in": "scale-in 0.3s ease-out",
        "scale-in-center": "scale-in-center 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "border-glow": "border-glow 3s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "scale-in-center": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.5)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(59, 130, 246, 0.3)" },
          "50%": { borderColor: "rgba(59, 130, 246, 0.6)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.4, 0, 0.2, 1)",
        "smooth": "cubic-bezier(0.16, 1, 0.3, 1)",
        "bounce-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
