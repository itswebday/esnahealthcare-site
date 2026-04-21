import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const badge = cva(
  "inline-flex items-center gap-1.5 rounded-full font-medium leading-none tracking-[var(--tracking-normal)] whitespace-nowrap transition-colors duration-[var(--duration-normal)] ease-[var(--ease-out)]",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-primary-subtle)] text-[var(--color-primary-dark)] ring-1 ring-inset ring-[var(--color-primary-subtle-strong)]",
        accent:
          "bg-[var(--color-accent-subtle)] text-[var(--color-accent)] ring-1 ring-inset ring-[var(--color-accent-subtle-strong)]",
        neutral:
          "bg-[var(--color-surface-1)] text-[var(--color-muted)] ring-1 ring-inset ring-[var(--color-border)]",
        invert:
          "bg-white/10 text-white ring-1 ring-inset ring-white/20 backdrop-blur",
        solid:
          "bg-[var(--color-foreground)] text-white",
      },
      size: {
        sm: "h-6 px-2.5 text-xs",
        md: "h-7 px-3 text-[0.78rem]",
        lg: "h-8 px-3.5 text-[0.82rem]",
      },
      withDot: {
        true: "",
        false: "",
      },
    },
    defaultVariants: { variant: "primary", size: "md", withDot: false },
  },
);

type BadgeProps = VariantProps<typeof badge> &
  React.HTMLAttributes<HTMLSpanElement> & {
    withDot?: boolean;
  };

export function Badge({
  variant,
  size,
  withDot,
  className,
  children,
  ...rest
}: BadgeProps) {
  const dotColor =
    variant === "accent"
      ? "bg-[var(--color-accent)]"
      : variant === "invert"
        ? "bg-white"
        : variant === "solid"
          ? "bg-white"
          : variant === "neutral"
            ? "bg-[var(--color-subtle)]"
            : "bg-[var(--color-primary)]";

  return (
    <span className={cn(badge({ variant, size }), className)} {...rest}>
      {withDot && (
        <span
          className={cn(
            "inline-block h-1.5 w-1.5 rounded-full animate-pulse-dot",
            dotColor,
          )}
        />
      )}
      {children}
    </span>
  );
}
