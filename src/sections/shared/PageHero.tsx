import Link from "next/link";
import { ArrowRight } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  badge?: { label: string; icon?: React.ReactNode };
  breadcrumbs?: { label: string; href?: string }[];
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
};

const SIZE: Record<NonNullable<PageHeroProps["size"]>, string> = {
  sm: "pt-14 pb-14 lg:pt-20 lg:pb-16",
  md: "pt-16 pb-20 lg:pt-24 lg:pb-24",
  lg: "pt-20 pb-24 lg:pt-28 lg:pb-32",
};

const TITLE: Record<NonNullable<PageHeroProps["size"]>, string> = {
  sm: "text-[2.2rem] sm:text-[2.75rem] lg:text-[3.25rem]",
  md: "text-[2.5rem] sm:text-[3.25rem] lg:text-[3.75rem]",
  lg: "text-[2.75rem] sm:text-[3.75rem] lg:text-[4.5rem]",
};

export function PageHero({
  eyebrow,
  title,
  description,
  badge,
  breadcrumbs,
  align = "left",
  size = "md",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-[var(--color-border)]",
        SIZE[size],
      )}
    >
      <Container size="xl">
        <div
          className={cn(
            "flex flex-col gap-6",
            align === "center" && "items-center text-center",
          )}
        >
          {breadcrumbs && (
            <Reveal direction="up">
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--color-subtle)]"
              >
                {breadcrumbs.map((c, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5">
                    {c.href ? (
                      <Link
                        href={c.href}
                        className="transition-colors hover:text-[var(--color-foreground)]"
                      >
                        {c.label}
                      </Link>
                    ) : (
                      <span className="text-[var(--color-muted)]">{c.label}</span>
                    )}
                    {i < breadcrumbs.length - 1 && (
                      <ArrowRight
                        size={12}
                        variant="Linear"
                        className="text-[var(--color-faint)]"
                      />
                    )}
                  </span>
                ))}
              </nav>
            </Reveal>
          )}
          {(eyebrow || badge) && (
            <Reveal direction="up" delay={0.04}>
              {badge ? (
                <Badge variant="primary" size="lg" withDot>
                  {badge.icon}
                  {badge.label}
                </Badge>
              ) : (
                <span className="inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
                  <span className="h-px w-6 bg-[var(--color-primary)]" />
                  {eyebrow}
                </span>
              )}
            </Reveal>
          )}
          <Reveal direction="up" delay={0.08}>
            <h1
              className={cn(
                "max-w-4xl font-semibold leading-[1.04] tracking-[var(--tracking-display)] text-[var(--color-foreground)]",
                TITLE[size],
                align === "center" && "mx-auto",
              )}
            >
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal direction="up" delay={0.14}>
              <p
                className={cn(
                  "max-w-2xl text-lg leading-[1.6] text-[var(--color-muted)] sm:text-xl",
                  align === "center" && "mx-auto",
                )}
              >
                {description}
              </p>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
