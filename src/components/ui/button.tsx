import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 border font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary text-primary-foreground hover:border-highlight hover:bg-highlight",
        primary: "border-primary bg-primary text-primary-foreground hover:border-highlight hover:bg-highlight",
        accent: "border-accent bg-accent text-accent-foreground hover:border-accent/80 hover:bg-accent/85",
        outline: "border-border bg-transparent text-foreground hover:border-primary hover:text-primary",
        ghost: "border-transparent bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground",
        link: "border-transparent bg-transparent text-primary underline-offset-4 hover:underline",
        destructive: "border-destructive bg-destructive text-destructive-foreground",
        secondary: "border-secondary bg-secondary text-secondary-foreground",
      },
      size: {
        default: "h-10 px-4 text-sm",
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-6 text-sm",
        icon: "size-8 p-0",
        "icon-sm": "size-7 p-0",
        "icon-lg": "size-10 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";
