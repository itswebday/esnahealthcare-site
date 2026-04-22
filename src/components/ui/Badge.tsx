import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const badge = cva(
  "inline-flex items-center gap-1.5 rounded-full font-medium leading-none tracking-[var(--tracking-normal)] whitespace-nowrap transition-colors duration-[var(--duration-normal)] ease-[var(--ease-out)]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-subtle text-primary-dark ring-1 ring-inset ring-primary-subtle-strong",
        accent:
          "bg-accent-subtle text-accent ring-1 ring-inset ring-accent-subtle-strong",
        neutral: "bg-surface-1 text-muted ring-1 ring-inset ring-border",
        invert:
          "bg-white/10 text-white ring-1 ring-inset ring-white/20 backdrop-blur",
        solid: "bg-foreground text-white",
      },
      size: {
        sm: "h-6 px-2.5 text-[12px]",
        md: "h-7 px-3 text-[12.5px]",
        lg: "h-8 px-3.5 text-[13px]",
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

const Badge: React.FC<BadgeProps> = ({
  variant,
  size,
  withDot,
  className,
  children,
  ...rest
}) => {
  const dotColor =
    variant === "accent"
      ? "bg-accent"
      : variant === "invert"
        ? "bg-white"
        : variant === "solid"
          ? "bg-white"
          : variant === "neutral"
            ? "bg-subtle"
            : "bg-primary";

  return (
    <span className={cn(badge({ variant, size }), className)} {...rest}>
      {withDot && (
        <span
          className={cn(
            "animate-pulse-dot inline-block h-1.5 w-1.5 rounded-full",
            dotColor,
          )}
        />
      )}
      {children}
    </span>
  );
};

export default Badge;
