import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "outline" | "accent";
  size?: "sm" | "md" | "icon";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-2 border font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        variant === "primary" && "border-primary bg-primary text-primary-foreground hover:border-highlight hover:bg-highlight",
        variant === "accent" && "border-accent bg-accent text-accent-foreground hover:border-accent/80 hover:bg-accent/85",
        variant === "outline" && "border-border bg-transparent text-foreground hover:border-primary hover:text-primary",
        variant === "ghost" && "border-transparent bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground",
        size === "sm" && "h-8 px-3 text-xs",
        size === "md" && "h-10 px-4 text-sm",
        size === "icon" && "size-8 p-0",
        className,
      )}
      {...props}
    />
  ),
);
Button.displayName = "Button";
