import {
  ArrowRight,
  Box,
  Global,
  Location,
  ShieldTick,
  TickCircle,
  Timer1,
} from "iconsax-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

/*
  Shared bits for the theme previews. Each theme page imports these and
  wraps them in its own visual treatment. `tone` flips text colors when
  the surrounding section is dark.
*/

type Tone = "light" | "dark";

type HeroCopyProps = {
  tone?: Tone;
};

export const HeroCopy: React.FC<HeroCopyProps> = ({ tone = "light" }) => {
  const isDark = tone === "dark";

  return (
    <>
      <Reveal direction="up">
        <div className="flex flex-wrap items-center gap-3 text-[12px] font-medium tracking-[0.14em] uppercase">
          <span
            className={cn(
              "shadow-hint inline-flex items-center gap-1.5 rounded-xl border px-3 py-1",
              isDark
                ? "border-white/20 bg-white/10 text-white backdrop-blur"
                : "border-border text-foreground bg-white",
            )}
          >
            <Location
              className={isDark ? "text-primary" : "text-primary"}
              size={12}
              variant="Bold"
            />
            Utrecht · NL
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-xl border px-3 py-1",
              isDark
                ? "border-primary/50 bg-primary/20 text-primary"
                : "border-primary/40 bg-primary-subtle text-primary-dark",
            )}
          >
            Established 2021
          </span>
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.08}>
        <h1
          className={cn(
            "tracking-display max-w-[18ch] text-[42px] leading-[1.02] font-semibold sm:text-[54px] lg:text-[66px]",
            isDark ? "text-white" : "text-foreground",
          )}
        >
          Your{" "}
          <span
            className={cn(
              "relative inline-block",
              isDark ? "text-primary" : "text-primary",
            )}
          >
            trusted
            <span
              aria-hidden="true"
              className="bg-primary/15 absolute -inset-2 -z-10 rounded-xl"
            />
          </span>{" "}
          partner for <span className="text-primary">medicines</span> &amp;{" "}
          <span className="text-primary">medical devices</span>.
        </h1>
      </Reveal>

      <Reveal direction="up" delay={0.14}>
        <p
          className={cn(
            "max-w-2xl text-[16px] leading-[1.65]",
            isDark ? "text-on-invert-muted" : "text-muted",
          )}
        >
          <Link
            className={cn(
              "font-semibold underline-offset-[5px] transition-[text-decoration-color] hover:underline",
              isDark
                ? "decoration-primary/40 hover:decoration-primary text-white"
                : "decoration-primary/30 hover:decoration-primary text-foreground",
            )}
            href="/about"
          >
            {SITE.name}
          </Link>{" "}
          is a Dutch EU-licensed wholesaler holding a Wholesale Distribution
          Authorisation and GDP certification — supplying medicines and a
          curated range of medical devices and diagnostics to qualified
          distributors, hospitals, and pharmacies worldwide.
        </p>
      </Reveal>

      <Reveal direction="up" delay={0.2}>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <Button href="/contact" size="lg" variant="primary" withArrow>
            Get in Touch
          </Button>
          <Button
            href="/services"
            size="lg"
            variant={isDark ? "invert-outline" : "outline"}
          >
            View our services
          </Button>
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.28}>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wide",
              isDark
                ? "border-primary/50 bg-primary/15 text-primary"
                : "border-primary/40 bg-primary/10 text-primary-dark",
            )}
          >
            WDA · {SITE.licences.wda.number}
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wide",
              isDark
                ? "border-accent/60 bg-accent/20 text-accent"
                : "border-accent/40 bg-accent/10 text-accent",
            )}
          >
            GDP · {SITE.licences.gdp.number}
          </span>
          <Link
            className={cn(
              "group ml-1 inline-flex items-center gap-1 text-[13px] font-medium transition-colors",
              isDark
                ? "text-on-invert-muted hover:text-white"
                : "text-subtle hover:text-foreground",
            )}
            href="/compliance"
          >
            Verify
            <ArrowRight
              className="transition-transform group-hover:translate-x-0.5"
              size={12}
              variant="Linear"
            />
          </Link>
        </div>
      </Reveal>
    </>
  );
};

type ComplianceCardProps = {
  variant?: "white" | "navy" | "paper" | "slate";
};

export const ComplianceCard: React.FC<ComplianceCardProps> = ({
  variant = "white",
}) => {
  const styles = {
    white: {
      wrapper: "border-border bg-white shadow-lift",
      eyebrow: "text-subtle",
      title: "text-foreground",
      label: "text-muted",
      value: "bg-surface-1 text-foreground",
      divider: "border-border/60",
      iconChip: "bg-primary text-white shadow-lg shadow-primary/30",
    },
    navy: {
      wrapper:
        "border-white/10 bg-linear-to-br from-surface-invert to-surface-invert-2 shadow-[0_24px_60px_rgba(11,22,40,0.35)]",
      eyebrow: "text-on-invert-muted",
      title: "text-white",
      label: "text-on-invert-muted",
      value: "bg-white/10 text-white ring-1 ring-white/20",
      divider: "border-white/10",
      iconChip: "bg-primary text-white shadow-lg shadow-primary/40",
    },
    paper: {
      wrapper:
        "border-border/80 bg-[color-mix(in_oklab,var(--color-surface-1)_70%,white)] shadow-lift",
      eyebrow: "text-subtle",
      title: "text-foreground",
      label: "text-muted",
      value: "bg-white text-foreground border border-border",
      divider: "border-border/60",
      iconChip: "bg-primary text-white shadow-lg shadow-primary/30",
    },
    slate: {
      wrapper: "border-white/10 bg-transparent",
      eyebrow: "text-on-invert-muted",
      title: "text-white",
      label: "text-on-invert-muted",
      value: "text-white border border-white/15",
      divider: "border-white/10",
      iconChip: "bg-primary text-white",
    },
  } as const;

  const theme = styles[variant];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border p-8",
        theme.wrapper,
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-2xl",
            theme.iconChip,
          )}
        >
          <ShieldTick size={22} variant="Bold" />
        </div>
        <div>
          <div
            className={cn(
              "font-mono text-[10px] font-semibold tracking-[0.2em] uppercase",
              theme.eyebrow,
            )}
          >
            Active licences
          </div>
          <div className={cn("mt-0.5 text-[16px] font-semibold", theme.title)}>
            Fully compliant
          </div>
        </div>
      </div>

      <ul className="mt-6 flex flex-col gap-4">
        {[
          {
            label: "EU Wholesale Distribution Authorisation",
            value: SITE.licences.wda.number,
          },
          {
            label: "Good Distribution Practice",
            value: SITE.licences.gdp.number,
          },
          { label: "Customer qualification SOP", value: "QA-015" },
        ].map((row) => (
          <li
            key={row.label}
            className={cn(
              "flex items-start justify-between gap-4 border-t pt-4 first:border-0 first:pt-0",
              theme.divider,
            )}
          >
            <span className={cn("text-[13px] leading-snug", theme.label)}>
              {row.label}
            </span>
            <span
              className={cn(
                "rounded-md px-2 py-0.5 font-mono text-[11px] font-semibold tracking-wide",
                theme.value,
              )}
            >
              {row.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

type HeroStatsProps = {
  tone?: Tone;
};

const STATS = [
  { icon: Global, label: "Markets", value: "40+", sub: "countries served" },
  { icon: Box, label: "Catalog", value: "1,200+", sub: "product lines" },
  {
    icon: TickCircle,
    label: "Delivery",
    value: "99.5%",
    sub: "on-time rate",
  },
  {
    icon: Timer1,
    label: "Response",
    value: "<24h",
    sub: "qualified inquiry",
  },
] as const;

export const HeroStats: React.FC<HeroStatsProps> = ({ tone = "light" }) => {
  const isDark = tone === "dark";

  return (
    <Reveal direction="up" delay={0.32}>
      <div
        className={cn(
          "mt-14 grid grid-cols-2 border-t pt-10 sm:mt-16 sm:grid-cols-4 sm:pt-12",
          isDark ? "border-white/10" : "border-border/60",
        )}
      >
        {STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col gap-2 px-5 py-5 sm:px-6",
                i > 0 && "sm:border-l",
                i > 1 && "border-t sm:border-t-0",
                i === 1 && "sm:border-l",
                isDark
                  ? "border-white/10 sm:border-white/10"
                  : "border-border/60 sm:border-border/60",
              )}
            >
              <div className="flex items-center gap-2">
                <Icon
                  className={cn(isDark ? "text-primary" : "text-primary")}
                  size={14}
                  variant="Bold"
                />
                <span
                  className={cn(
                    "font-mono text-[10px] font-semibold tracking-[0.22em] uppercase",
                    isDark ? "text-on-invert-muted" : "text-subtle",
                  )}
                >
                  {stat.label}
                </span>
              </div>
              <div
                className={cn(
                  "tracking-display text-[34px] leading-[1.02] font-semibold sm:text-[38px] lg:text-[42px]",
                  isDark ? "text-white" : "text-foreground",
                )}
              >
                {stat.value}
              </div>
              <div
                className={cn(
                  "text-[12.5px] leading-snug",
                  isDark ? "text-on-invert-muted" : "text-muted",
                )}
              >
                {stat.sub}
              </div>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
};

type ComplianceLedgerProps = {
  tone?: Tone;
};

const LEDGER_ROWS = [
  { n: "01", label: "Wholesale Distribution Authorisation", value: "WDA" },
  { n: "02", label: "Good Distribution Practice Certificate", value: "GDP" },
  { n: "03", label: "Supplier Qualification SOP", value: "QA-014" },
  { n: "04", label: "Customer Qualification SOP", value: "QA-015" },
  { n: "05", label: "Batch traceability coverage", value: "100%" },
] as const;

export const ComplianceLedger: React.FC<ComplianceLedgerProps> = ({
  tone = "light",
}) => {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border p-0",
        isDark
          ? "border-white/10 bg-white/5 backdrop-blur"
          : "border-border shadow-lift bg-white",
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-0 right-0 h-24 w-24 rounded-bl-3xl bg-linear-to-br",
          "from-primary to-primary-dark",
        )}
      />

      <div
        className={cn(
          "relative flex items-center justify-between gap-3 border-b px-7 pt-6 pb-5",
          isDark ? "border-white/10" : "border-border/70",
        )}
      >
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-xl",
              "bg-primary-subtle text-primary-dark",
            )}
          >
            <ShieldTick size={18} variant="Bold" />
          </div>
          <div>
            <div
              className={cn(
                "font-mono text-[10px] font-semibold tracking-[0.24em] uppercase",
                isDark ? "text-on-invert-muted" : "text-subtle",
              )}
            >
              Compliance Ledger
            </div>
            <div
              className={cn(
                "mt-0.5 text-[15px] font-semibold",
                isDark ? "text-white" : "text-foreground",
              )}
            >
              Dossier · Utrecht · 2024
            </div>
          </div>
        </div>
      </div>

      <ul className="relative flex flex-col">
        {LEDGER_ROWS.map((row, i) => (
          <li
            key={row.n}
            className={cn(
              "grid grid-cols-[auto_1fr_auto] items-center gap-4 px-7 py-4",
              i > 0 && "border-t",
              isDark ? "border-white/10" : "border-border/60",
            )}
          >
            <span
              className={cn(
                "font-mono text-[11px] font-semibold tracking-[0.14em]",
                isDark ? "text-faint" : "text-faint",
              )}
            >
              {row.n}
            </span>
            <span
              className={cn(
                "text-[13.5px] leading-snug",
                isDark ? "text-on-invert-muted" : "text-muted",
              )}
            >
              {row.label}
            </span>
            <span
              className={cn(
                "rounded-md border px-2.5 py-0.5 font-mono text-[11px] font-semibold tracking-wide",
                isDark
                  ? "border-white/15 text-white"
                  : "border-border bg-surface-1 text-foreground",
              )}
            >
              {row.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
