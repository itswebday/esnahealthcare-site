import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { ArrowRight } from "iconsax-react";

/*
 * Button design ported from i-sec.com:
 *  - Generous rounded-rectangle corners (28-32px), readable as a soft pill.
 *  - 2px solid border on every variant. Solid CTAs use a same-color border so
 *    they read as filled; outline variants use a contrasting 2px border.
 *  - Roomy vertical padding so the click target feels institutional, not snug.
 *  - Link variant is a pure text-with-thick-underline pattern, matching
 *    I-SEC's "View our locations"-style secondary action.
 */

const button = cva(
  "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap leading-none transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "rounded-[var(--radius-2xl)] border-2 border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:border-[var(--color-primary-hover)] hover:bg-[var(--color-primary-hover)]",
        secondary:
          "rounded-[var(--radius-2xl)] border-2 border-[var(--color-foreground)] bg-[var(--color-foreground)] text-white hover:border-[#1b2439] hover:bg-[#1b2439]",
        accent:
          "rounded-[var(--radius-2xl)] border-2 border-[var(--color-accent)] bg-[var(--color-accent)] text-white hover:border-[var(--color-accent-hover)] hover:bg-[var(--color-accent-hover)]",
        outline:
          "rounded-[var(--radius-2xl)] border-2 border-[var(--color-foreground)] bg-white text-[var(--color-foreground)] hover:bg-[var(--color-surface-1)]",
        ghost:
          "rounded-[var(--radius-2xl)] border-2 border-transparent text-[var(--color-foreground)] hover:bg-[var(--color-surface-1)]",
        invert:
          "rounded-[var(--radius-2xl)] border-2 border-white bg-white text-[var(--color-foreground)] hover:bg-[var(--color-surface-1)] hover:border-[var(--color-surface-1)]",
        "invert-outline":
          "rounded-[var(--radius-2xl)] border-2 border-white bg-transparent text-white hover:bg-white hover:text-[var(--color-foreground)]",
        "invert-ghost":
          "rounded-[var(--radius-2xl)] border-2 border-white/30 bg-transparent text-white backdrop-blur hover:border-white/60 hover:bg-white/10",
        link:
          "border-0 px-0 text-[var(--color-foreground)] underline decoration-2 underline-offset-[6px] hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]",
      },
      size: {
        sm: "h-10 px-5 text-[0.88rem]",
        md: "h-12 px-6 text-[0.92rem]",
        lg: "h-14 px-8 text-[0.95rem]",
        xl: "h-16 px-10 text-[1rem]",
      },
    },
    compoundVariants: [
      // Link variant ignores size padding/height — it's pure inline text.
      { variant: "link", size: "sm", class: "h-auto px-0" },
      { variant: "link", size: "md", class: "h-auto px-0" },
      { variant: "link", size: "lg", class: "h-auto px-0" },
      { variant: "link", size: "xl", class: "h-auto px-0" },
    ],
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
  const isLink = variant === "link";

  /*
   * Content layout: text + arrow render as flex children, centered as a
   * single visible group via `justify-center` on the parent. No invisible
   * spacer — that read as off-axis to the right because the spacer pushed
   * the visible content past the geometric center.
   */
  const content = withArrow ? (
    <>
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
