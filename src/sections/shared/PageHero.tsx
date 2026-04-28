import { ArrowRight } from "iconsax-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  align?: "left" | "center";
  breadcrumbs?: { label: string; href?: string }[];
  description?: React.ReactNode;
  eyebrow?: string;
  size?: "sm" | "md" | "lg";
  title: React.ReactNode;
};

const TITLE: Record<NonNullable<PageHeroProps["size"]>, string> = {
  sm: "text-[34px] sm:text-[44px] lg:text-[52px]",
  md: "text-[40px] sm:text-[52px] lg:text-[60px]",
  lg: "text-[44px] sm:text-[60px] lg:text-[68px]",
};

const PageHero: React.FC<PageHeroProps> = ({
  align = "left",
  breadcrumbs,
  description,
  eyebrow,
  size = "md",
  title,
}) => {
  return (
    <section className="relative bg-white pt-10 pb-4 sm:pt-14 sm:pb-7 lg:pt-16 lg:pb-8">
      <Container className="max-w-[1520px] px-0 sm:px-8 lg:px-10" size="xl">
        <div className="bg-surface-1 relative isolate overflow-hidden rounded-3xl px-6 py-14 sm:rounded-[40px] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
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
                  className="text-subtle flex flex-wrap items-center gap-1.5 text-[13px]"
                >
                  {breadcrumbs.map((c, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5">
                      {c.href ? (
                        <Link
                          className="hover:text-foreground transition-colors"
                          href={c.href}
                          prefetch
                        >
                          {c.label}
                        </Link>
                      ) : (
                        <span className="text-muted">{c.label}</span>
                      )}
                      {i < breadcrumbs.length - 1 && (
                        <ArrowRight
                          className="text-faint"
                          size={12}
                          variant="Linear"
                        />
                      )}
                    </span>
                  ))}
                </nav>
              </Reveal>
            )}
            {eyebrow && (
              <Reveal delay={0.04} direction="up">
                <div
                  className={cn(
                    "inline-flex items-center gap-2",
                    align === "center" && "justify-center",
                  )}
                >
                  <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                  <span className="text-subtle font-mono text-[11px] font-semibold tracking-[0.28em] uppercase">
                    {eyebrow}
                  </span>
                </div>
              </Reveal>
            )}
            <Reveal delay={0.08} direction="up">
              <h1
                className={cn(
                  "tracking-display text-foreground max-w-4xl leading-[1.04] font-semibold",
                  TITLE[size],
                  align === "center" && "mx-auto",
                )}
              >
                {title}
              </h1>
            </Reveal>
            {description && (
              <Reveal delay={0.14} direction="up">
                <p
                  className={cn(
                    "text-muted max-w-2xl text-[17px] leading-[1.6] sm:text-[19px]",
                    align === "center" && "mx-auto",
                  )}
                >
                  {description}
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PageHero;
