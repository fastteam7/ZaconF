import * as React from "react";
import { cn } from "@/lib/utils";

// Standard Card
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group relative rounded-2xl border border-zacon-light/80 bg-white shadow-card transition-all duration-500",
      "hover:shadow-card-hover hover:border-zacon-corporate/15 hover:-translate-y-1",
      "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-zacon-corporate/[0.02] before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 p-6 pb-4", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-bold leading-tight tracking-tight text-zacon-navy transition-colors duration-300 group-hover:text-zacon-corporate",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-zacon-graphite-light leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Premium Card - With gradient overlay and enhanced effects
const CardPremium = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group relative rounded-2xl border border-zacon-light/60 bg-gradient-to-br from-white via-white to-zacon-light-ultra/50 shadow-card transition-all duration-500 overflow-hidden",
      "hover:shadow-card-elevated hover:border-zacon-corporate/20 hover:-translate-y-1",
      "before:absolute before:inset-0 before:bg-gradient-to-br before:from-zacon-corporate/[0.03] before:via-transparent before:to-zacon-accent/[0.02] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
      "after:absolute after:inset-0 after:bg-gradient-to-t after:from-transparent after:via-transparent after:to-white/50 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100",
      className
    )}
    {...props}
  />
));
CardPremium.displayName = "CardPremium";

// Glass Card - For dark backgrounds
const CardGlass = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group relative rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-premium transition-all duration-500",
      "hover:bg-white/[0.12] hover:border-white/[0.2] hover:shadow-premium-lg",
      "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/[0.08] before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
      className
    )}
    {...props}
  />
));
CardGlass.displayName = "CardGlass";

// Elevated Card - Stronger shadow and lift effect
const CardElevated = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group relative rounded-2xl border border-zacon-light/50 bg-white shadow-premium-md transition-all duration-500",
      "hover:shadow-premium-xl hover:border-zacon-corporate/10 hover:-translate-y-2",
      className
    )}
    {...props}
  />
));
CardElevated.displayName = "CardElevated";

// Feature Card - For highlighting features with icon
const CardFeature = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group relative rounded-2xl border border-zacon-light/70 bg-white p-8 shadow-card transition-all duration-500",
      "hover:shadow-card-hover hover:border-zacon-corporate/15 hover:-translate-y-1",
      "before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-l-2xl before:bg-gradient-to-b before:from-zacon-corporate before:to-zacon-accent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
      className
    )}
    {...props}
  />
));
CardFeature.displayName = "CardFeature";

// Stats Card - For displaying numbers/metrics
const CardStats = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group relative rounded-2xl bg-gradient-to-br from-zacon-navy via-zacon-navy-medium to-zacon-corporate/30 p-8 text-center shadow-premium-lg transition-all duration-500 overflow-hidden",
      "hover:shadow-glow-corporate",
      "before:absolute before:inset-0 before:bg-gradient-to-t before:from-zacon-corporate/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
      className
    )}
    {...props}
  />
));
CardStats.displayName = "CardStats";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardPremium,
  CardGlass,
  CardElevated,
  CardFeature,
  CardStats,
};
