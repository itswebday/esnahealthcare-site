import Link from "next/link";
import { ArrowRight } from "iconsax-react";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  align?: "left" | "center";
  badge?: { label: string; icon?: React.ReactNode };
  breadcrumbs?: { label: string; href?: string }[];
  description?: React.ReactNode;
  eyebrow?: string;
  size?: "sm" | "md" | "lg";
  title: React.ReactNode;
};

const SIZE: Record<NonNullable<PageHeroProps["size"]>, string> = {
  sm: "pt-14 pb-14 lg:pt-20 lg:pb-16",
  md: "pt-16 pb-20 lg:pt-24 lg:pb-24",
  lg: "pt-20 pb-24 lg:pt-28 lg:pb-32",
};

const TITLE: Record<NonNullable<PageHeroProps["size"]>, string> = {
  sm: "text-[36px] sm:text-[44px] lg:text-[52px]",
  md: "text-[40px] sm:text-[52px] lg:text-[60px]",
  lg: "text-[44px] sm:text-[60px] lg:text-[72px]",
};

const PageHero: React.FC<PageHeroProps> = ({
  align = "left",
  badge,
  breadcrumbs,
  description,
  eyebrow,
  size = "md",
  title,
}) => {
  return (
    <section className={cn("relative overflow-hidden bg-white", SIZE[size])}>
      <PageHeroBackdrop />

      <Container className="relative" size="xl">
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
                className="text-subtle flex flex-wrap items-center gap-1.5 text-[14px]"
              >
                {breadcrumbs.map((c, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5">
                    {c.href ? (
                      <Link
                        className="hover:text-foreground transition-colors"
                        href={c.href}
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
          {(eyebrow || badge) && (
            <Reveal delay={0.04} direction="up">
              {badge ? (
                <Badge size="lg" variant="primary" withDot>
                  {badge.icon}
                  {badge.label}
                </Badge>
              ) : (
                <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
                  <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                  {eyebrow}
                </span>
              )}
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
                  "text-muted max-w-2xl text-[18px] leading-[1.6] sm:text-[20px]",
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
};

const PageHeroBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-primary/15 absolute top-[20%] left-[30%] h-[520px] w-[520px] rounded-full blur-[110px]" />
      <div className="bg-accent/10 absolute top-[10%] right-[10%] h-[420px] w-[420px] rounded-full blur-[100px]" />
    </div>
  );
};

export default PageHero;
