import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "iconsax-react";
import { cn } from "@/lib/cn";

/*
  V5 "Corner Frame" button:
    - rounded-xl (soft, not pill)
    - 2px solid border on every non-link variant
    - Two L-bracket decorations (top-left + bottom-right) that grow on hover
    - Arrow slides right on hover when withArrow is set
    - Link variant stays as pure inline text with thick underline
*/

const button = cva(
  "group relative inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap leading-none transition-all duration-normal ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "rounded-xl border-2 border-primary bg-primary text-primary-foreground hover:border-primary-hover hover:bg-primary-hover",
        secondary:
          "rounded-xl border-2 border-foreground bg-foreground text-white hover:border-[#1b2439] hover:bg-[#1b2439]",
        accent:
          "rounded-xl border-2 border-accent bg-accent text-white hover:border-accent-hover hover:bg-accent-hover",
        outline:
          "rounded-xl border-2 border-foreground bg-white text-foreground hover:bg-foreground hover:text-white",
        ghost:
          "rounded-xl border-2 border-transparent text-foreground hover:bg-surface-1",
        invert:
          "rounded-xl border-2 border-white bg-white text-foreground hover:bg-surface-1 hover:border-surface-1",
        "invert-outline":
          "rounded-xl border-2 border-white bg-transparent text-white hover:bg-white hover:text-foreground",
        "invert-ghost":
          "rounded-xl border-2 border-white/30 bg-transparent text-white backdrop-blur hover:border-white/60 hover:bg-white/10",
        link: "border-0 px-0 text-foreground underline decoration-2 underline-offset-[6px] hover:text-accent hover:decoration-accent",
      },
      size: {
        sm: "h-10 px-5 text-[14px]",
        md: "h-12 px-6 text-[15px]",
        lg: "h-14 px-8 text-[15px]",
        xl: "h-16 px-10 text-[16px]",
      },
    },
    compoundVariants: [
      {
        variant: "link",
        size: "sm",
        class: "h-auto px-0",
      },
      {
        variant: "link",
        size: "md",
        class: "h-auto px-0",
      },
      {
        variant: "link",
        size: "lg",
        class: "h-auto px-0",
      },
      {
        variant: "link",
        size: "xl",
        class: "h-auto px-0",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonBaseProps = VariantProps<typeof button> & {
  children: React.ReactNode;
  className?: string;
  withArrow?: boolean;
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

const ARROW_SIZE_MAP = {
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
} as const;

const Button: React.FC<ButtonProps> = (props) => {
  const { variant, size, className, withArrow, children, ...rest } = props;
  const classes = cn(button({ variant, size }), className);
  const arrowSize = ARROW_SIZE_MAP[size ?? "md"];
  const isLinkVariant = variant === "link";

  const content = (
    <>
      {/* L-bracket decorations (skip on link variant) */}
      {!isLinkVariant && (
        <>
          <span
            aria-hidden="true"
            className="duration-normal pointer-events-none absolute top-1.5 left-1.5 h-2 w-2 border-t-2 border-l-2 border-current opacity-90 transition-all group-hover:h-2.5 group-hover:w-2.5"
          />
          <span
            aria-hidden="true"
            className="duration-normal pointer-events-none absolute right-1.5 bottom-1.5 h-2 w-2 border-r-2 border-b-2 border-current opacity-90 transition-all group-hover:h-2.5 group-hover:w-2.5"
          />
        </>
      )}

      {/* Label */}
      <span className="relative inline-flex items-center gap-1.5">
        {children}
      </span>

      {/* Trailing arrow */}
      {withArrow && !isLinkVariant && (
        <ArrowRight
          className="duration-normal relative shrink-0 transition-transform ease-out group-hover:translate-x-0.5"
          size={arrowSize}
          variant="Linear"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link
        className={classes}
        {...(rest as React.ComponentProps<typeof Link>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};

export default Button;
