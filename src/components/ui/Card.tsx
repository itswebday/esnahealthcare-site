import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const card = cva(
  "relative transition-all duration-[var(--duration-slow)] ease-[var(--ease-out)]",
  {
    variants: {
      variant: {
        plain:
          "bg-background border border-border hover:border-border-strong hover:shadow-[var(--shadow-lift)]",
        subtle:
          "bg-surface-1 border border-border hover:bg-background hover:shadow-[var(--shadow-lift)]",
        island:
          "bg-background shadow-[var(--shadow-island)] border border-white/80",
        tint: "bg-primary-subtle border border-primary-subtle-strong",
        accent: "bg-accent-subtle border border-accent-subtle-strong",
        invert: "bg-surface-invert text-on-invert border border-border-invert",
        outline: "bg-transparent border border-border hover:border-foreground",
      },
      radius: {
        sm: "rounded-md",
        md: "rounded-lg",
        lg: "rounded-xl",
        xl: "rounded-2xl",
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

const Card: React.FC<CardProps> = ({
  variant,
  radius,
  padding,
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={cn(card({ variant, radius, padding }), className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
