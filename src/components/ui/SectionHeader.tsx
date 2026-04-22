import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  align?: "left" | "center";
  className?: string;
  description?: React.ReactNode;
  eyebrow?: string;
  size?: "md" | "lg" | "xl";
  title: React.ReactNode;
  tone?: "light" | "invert";
};

const TITLE_SIZE = {
  md: "text-[32px] sm:text-[38px] lg:text-[42px]",
  lg: "text-[32px] sm:text-[42px] lg:text-[48px]",
  xl: "text-[40px] sm:text-[52px] lg:text-[60px]",
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  align = "left",
  className,
  description,
  eyebrow,
  size = "lg",
  title,
  tone = "light",
}) => {
  const isInvert = tone === "invert";
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "mx-auto max-w-3xl items-center text-center",
        align === "left" && "max-w-3xl",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex w-fit items-center gap-2 rounded-xl px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase",
            isInvert
              ? "bg-white/10 text-white ring-1 ring-white/20 backdrop-blur"
              : "border-primary/40 bg-primary-subtle text-primary-dark border",
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              isInvert ? "bg-primary" : "bg-primary",
            )}
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "tracking-display leading-[1.1] font-semibold",
          TITLE_SIZE[size],
          isInvert ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-[16px] leading-relaxed sm:text-[18px]",
            align === "center" && "mx-auto",
            isInvert ? "text-on-invert-muted" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
