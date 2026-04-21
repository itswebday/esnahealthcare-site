import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const card = cva(
  "relative transition-all duration-[var(--duration-slow)] ease-[var(--ease-out)]",
  {
    variants: {
      variant: {
        plain:
          "bg-white border border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-lift)]",
        subtle:
          "bg-[var(--color-surface-1)] border border-[var(--color-border)] hover:bg-white hover:shadow-[var(--shadow-lift)]",
        island:
          "bg-white shadow-[var(--shadow-island)] border border-white/80",
        tint:
          "bg-[var(--color-primary-subtle)] border border-[var(--color-primary-subtle-strong)]",
        accent:
          "bg-[var(--color-accent-subtle)] border border-[var(--color-accent-subtle-strong)]",
        invert:
          "bg-[var(--color-surface-invert)] text-[var(--color-on-invert)] border border-[var(--color-border-invert)]",
        outline:
          "bg-transparent border border-[var(--color-border)] hover:border-[var(--color-foreground)]",
      },
      radius: {
        sm: "rounded-[var(--radius-md)]",
        md: "rounded-[var(--radius-lg)]",
        lg: "rounded-[var(--radius-xl)]",
        xl: "rounded-[var(--radius-2xl)]",
      },
      padding: {
        none: "",
        sm: "p-5",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
    },
    defaultVariants: { variant: "plain", radius: "md", padding: "md" },
  },
);

type CardProps = VariantProps<typeof card> &
  React.HTMLAttributes<HTMLDivElement>;

export function Card({
  variant,
  radius,
  padding,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div className={cn(card({ variant, radius, padding }), className)} {...rest}>
      {children}
    </div>
  );
}
