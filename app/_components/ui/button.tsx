import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-zacon-primary text-white hover:bg-zacon-primary-dark focus-visible:ring-zacon-primary",
        secondary:
          "bg-zacon-secondary text-zacon-primary-dark hover:bg-zacon-secondary/90 focus-visible:ring-zacon-secondary",
        outline:
          "border-2 border-zacon-primary text-zacon-primary hover:bg-zacon-primary hover:text-white focus-visible:ring-zacon-primary",
        ghost:
          "text-zacon-primary hover:bg-zacon-primary/10 focus-visible:ring-zacon-primary",
        link: "text-zacon-primary underline-offset-4 hover:underline",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#128C7E] focus-visible:ring-[#25D366]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
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
