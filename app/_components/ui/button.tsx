import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] relative overflow-hidden",
  {
    variants: {
      variant: {
        // Primary - Corporate Blue
        default:
          "bg-zacon-corporate text-white shadow-premium hover:bg-zacon-corporate-dark hover:shadow-premium-lg focus-visible:ring-zacon-corporate btn-shine",

        // Secondary - Navy
        secondary:
          "bg-zacon-navy text-white shadow-premium hover:bg-zacon-navy-light focus-visible:ring-zacon-navy btn-shine",

        // Outline Corporate
        outline:
          "border-2 border-zacon-corporate text-zacon-corporate bg-transparent hover:bg-zacon-corporate hover:text-white focus-visible:ring-zacon-corporate",

        // Outline Light (for dark backgrounds)
        "outline-light":
          "border-2 border-white/40 text-white bg-white/5 hover:bg-white hover:text-zacon-navy focus-visible:ring-white backdrop-blur-sm",

        // Ghost
        ghost:
          "text-zacon-graphite hover:bg-zacon-light-soft hover:text-zacon-corporate focus-visible:ring-zacon-corporate",

        // Link style
        link: "text-zacon-corporate underline-offset-4 hover:underline p-0 h-auto font-medium",

        // WhatsApp
        whatsapp:
          "bg-[#25D366] text-white shadow-premium hover:bg-[#128C7E] hover:shadow-premium-lg focus-visible:ring-[#25D366] btn-shine",

        // Premium Gradient
        premium:
          "bg-gradient-to-r from-zacon-corporate via-zacon-corporate-light to-zacon-accent text-white shadow-glow hover:shadow-glow-lg focus-visible:ring-zacon-accent btn-shine animate-gradient-shift bg-[length:200%_100%]",

        // Premium Dark
        "premium-dark":
          "bg-gradient-to-r from-zacon-navy via-zacon-corporate to-zacon-navy-light text-white shadow-premium-lg hover:shadow-premium-xl focus-visible:ring-zacon-corporate btn-shine",

        // Silver/Subtle
        silver:
          "bg-zacon-light-soft text-zacon-graphite border border-zacon-light hover:bg-zacon-light hover:border-zacon-silver-light focus-visible:ring-zacon-silver",

        // Subtle Corporate
        subtle:
          "bg-zacon-corporate/10 text-zacon-corporate hover:bg-zacon-corporate/20 focus-visible:ring-zacon-corporate",

        // Glass effect
        glass:
          "bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 hover:border-white/30 focus-visible:ring-white",
      },
      size: {
        xs: "h-8 px-3 text-xs",
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-6 py-2",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base font-semibold tracking-wide",
        "2xl": "h-16 px-12 text-lg font-semibold tracking-wide",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
