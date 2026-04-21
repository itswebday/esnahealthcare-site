import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "invert";
  size?: "md" | "lg" | "xl";
  className?: string;
};

const TITLE_SIZE = {
  md: "text-[2rem] sm:text-[2.4rem] lg:text-[2.75rem]",
  lg: "text-[2.4rem] sm:text-[3rem] lg:text-[3.5rem]",
  xl: "text-[2.75rem] sm:text-[3.5rem] lg:text-[4.25rem]",
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  size = "lg",
  className,
}: SectionHeaderProps) {
  const isInvert = tone === "invert";
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center mx-auto max-w-3xl",
        align === "left" && "max-w-3xl",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.14em]",
            isInvert
              ? "text-[var(--color-on-invert-muted)]"
              : "text-[var(--color-primary-dark)]",
          )}
        >
          <span
            className={cn(
              "h-px w-6",
              isInvert ? "bg-white/30" : "bg-[var(--color-primary)]",
            )}
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-semibold leading-[var(--leading-heading)] tracking-[var(--tracking-display)]",
          TITLE_SIZE[size],
          isInvert ? "text-white" : "text-[var(--color-foreground)]",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            isInvert
              ? "text-[var(--color-on-invert-muted)]"
              : "text-[var(--color-muted)]",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
