import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { ArrowRight } from "iconsax-react";

const button = cva(
  "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap rounded-full leading-none transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-[var(--shadow-cta)] hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-cta-hover)]",
        secondary:
          "bg-[var(--color-foreground)] text-white hover:bg-[#1b2439] shadow-[var(--shadow-card)]",
        outline:
          "border border-[var(--color-border-strong)] bg-white text-[var(--color-foreground)] hover:bg-[var(--color-surface-1)] hover:border-[var(--color-foreground)]",
        ghost:
          "text-[var(--color-foreground)] hover:bg-[var(--color-surface-1)]",
        invert:
          "bg-white text-[var(--color-foreground)] hover:bg-[var(--color-surface-1)] shadow-[var(--shadow-lift)]",
        "invert-ghost":
          "border border-white/20 bg-white/5 text-white backdrop-blur hover:border-white/40 hover:bg-white/10",
        link:
          "text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] underline-offset-4 hover:underline rounded-none px-0",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-[0.95rem]",
        lg: "h-12 px-6 text-[0.95rem]",
        xl: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonBaseProps = VariantProps<typeof button> & {
  className?: string;
  withArrow?: boolean;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.ComponentProps<typeof Link>, "className" | "children"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const ARROW_SIZE_MAP = { sm: 14, md: 16, lg: 18, xl: 20 } as const;

export function Button(props: ButtonProps) {
  const { variant, size, className, withArrow, children, ...rest } = props;
  const classes = cn(button({ variant, size }), className);
  const arrowSize = ARROW_SIZE_MAP[size ?? "md"];

  /*
   * Content layout note: when `withArrow` is true we render an invisible
   * spacer of the same width as the arrow on the left. Combined with
   * `justify-center` on the container, this guarantees the *text* is
   * visually centered in the pill, with the arrow sitting opposite the
   * spacer. Without this trick, `justify-center` only centers the
   * text + arrow group, which reads as text-left-of-center.
   */
  const content = withArrow ? (
    <>
      <span
        aria-hidden="true"
        className="invisible shrink-0"
        style={{ width: arrowSize, height: arrowSize }}
      />
      <span className="leading-none">{children}</span>
      <ArrowRight
        size={arrowSize}
        variant="Linear"
        className="shrink-0 transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out)] group-hover:translate-x-0.5"
      />
    </>
  ) : (
    <span className="leading-none">{children}</span>
  );

  if ("href" in props && props.href) {
    return (
      <Link
        className={cn("group", classes)}
        {...(rest as React.ComponentProps<typeof Link>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn("group", classes)}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
