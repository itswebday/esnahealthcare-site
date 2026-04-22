import {
  ArrowRight,
  Box,
  Calendar,
  Category,
  Location,
  ShieldTick,
} from "iconsax-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-10 pb-8 sm:pt-14 sm:pb-10 lg:pt-16 lg:pb-14">
      <Container className="max-w-[1520px] px-0 sm:px-8 lg:px-10" size="xl">
        <div className="bg-surface-2 relative isolate overflow-hidden rounded-3xl px-6 py-16 sm:rounded-[48px] sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-10 right-10 hidden -rotate-[6deg] lg:block"
          >
            <div className="border-primary/45 shadow-hint rounded-sm border-2 border-dashed bg-white/80 px-5 py-3 backdrop-blur">
              <div className="text-primary-dark text-center font-mono text-[10px] leading-tight font-bold tracking-[0.22em] uppercase">
                EU · Wholesale
                <br />
                Licensed · 2021
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="bg-primary/15 pointer-events-none absolute -bottom-32 -left-24 -z-10 h-[440px] w-[440px] rounded-full blur-[140px]"
          />
          <div
            aria-hidden="true"
            className="bg-accent/12 pointer-events-none absolute top-[30%] right-[-12%] -z-10 h-[380px] w-[380px] rounded-full blur-[120px]"
          />

          {/* Accent blue fade — top-left corner */}
          <div
            aria-hidden="true"
            className="bg-accent/10 pointer-events-none absolute -top-40 -left-32 -z-10 h-[520px] w-[520px] rounded-full blur-[150px]"
          />

          {/* Network node constellation — subtle institutional overlay */}
          <HeroNetworkPattern />

          <div className="relative mb-12 flex items-center gap-3 lg:mb-16">
            <span className="bg-primary h-1.5 w-1.5 rounded-full" />
            <span className="text-subtle font-mono text-[11px] font-semibold tracking-[0.28em] uppercase">
              Esna Care · Utrecht
            </span>
          </div>

          <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-7 lg:col-span-7">
              <Reveal direction="up">
                <div className="flex flex-wrap items-center gap-3 text-[12px] font-medium tracking-[0.14em] uppercase">
                  <span className="border-border text-foreground shadow-hint inline-flex items-center gap-1.5 rounded-xl border bg-white px-3 py-1">
                    <Location
                      className="text-primary"
                      size={12}
                      variant="Bold"
                    />
                    Utrecht · NL
                  </span>
                  <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex items-center gap-1.5 rounded-xl border px-3 py-1">
                    Established 2021
                  </span>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.08}>
                <h1 className="tracking-display text-foreground max-w-[18ch] text-[42px] leading-[1.02] font-semibold sm:text-[54px] lg:text-[66px]">
                  Your{" "}
                  <span className="text-primary relative inline-block">
                    trusted
                    <span
                      aria-hidden="true"
                      className="bg-primary/15 absolute -inset-2 -z-10 rounded-xl"
                    />
                  </span>{" "}
                  partner for <span className="text-primary">medicines</span>{" "}
                  &amp; <span className="text-primary">medical devices</span>.
                </h1>
              </Reveal>

              <Reveal direction="up" delay={0.14}>
                <p className="text-muted max-w-2xl text-[16px] leading-[1.65]">
                  <Link
                    className="decoration-primary/30 hover:decoration-primary text-foreground font-semibold underline-offset-[5px] transition-[text-decoration-color] hover:underline"
                    href="/about"
                  >
                    {SITE.name}
                  </Link>{" "}
                  is a Dutch EU-licensed wholesaler holding a Wholesale
                  Distribution Authorisation and GDP certification — supplying
                  medicines and a curated range of medical devices and
                  diagnostics to qualified distributors, hospitals, and
                  pharmacies worldwide.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <Button href="/contact" size="lg" variant="primary" withArrow>
                    Get in Touch
                  </Button>
                  <Button href="/services" size="lg" variant="outline">
                    View our services
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:flex lg:flex-col lg:justify-center">
              <Reveal direction="up" delay={0.12}>
                <ComplianceCard />
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <div className="mt-4 flex justify-end">
                  <Link
                    className="group text-subtle hover:text-foreground inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors"
                    href="/compliance"
                  >
                    Verify compliance
                    <ArrowRight
                      className="transition-transform group-hover:translate-x-0.5"
                      size={14}
                      variant="Linear"
                    />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="relative">
            <HeroStats />
          </div>
        </div>
      </Container>
    </section>
  );
};

const ComplianceCard: React.FC = () => {
  return (
    <div className="border-border shadow-lift relative overflow-hidden rounded-3xl border bg-white p-8">
      <div className="flex items-center gap-3">
        <div className="bg-primary shadow-primary/30 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg">
          <ShieldTick size={22} variant="Bold" />
        </div>
        <div>
          <div className="text-subtle font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
            Active licences
          </div>
          <div className="text-foreground mt-0.5 text-[16px] font-semibold">
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
            className="border-border/60 flex items-start justify-between gap-4 border-t pt-4 first:border-0 first:pt-0"
          >
            <span className="text-muted text-[13px] leading-snug">
              {row.label}
            </span>
            <span className="bg-surface-1 text-foreground rounded-md px-2 py-0.5 font-mono text-[11px] font-semibold tracking-wide">
              {row.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const STATS = [
  { icon: Calendar, label: "Since", value: "2021", sub: "EU-licensed" },
  {
    icon: Box,
    label: "Catalog",
    value: "200+",
    sub: "pharmaceutical products",
  },
  {
    icon: Category,
    label: "Coverage",
    value: "8",
    sub: "therapeutic areas",
  },
  { icon: ShieldTick, label: "Licences", value: "2", sub: "WDA + GDP" },
] as const;

const HeroStats: React.FC = () => {
  return (
    <Reveal direction="up" delay={0.32}>
      <div className="border-border/60 mt-14 grid grid-cols-2 border-t pt-10 sm:mt-16 sm:grid-cols-4 sm:pt-12">
        {STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col gap-2 px-5 py-5 sm:px-6",
                i > 0 && "sm:border-border/60 sm:border-l",
                i > 1 && "border-border/60 border-t sm:border-t-0",
                i === 1 && "sm:border-border/60 sm:border-l",
              )}
            >
              <div className="flex items-center gap-2">
                <Icon className="text-primary" size={14} variant="Bold" />
                <span className="text-subtle font-mono text-[10px] font-semibold tracking-[0.22em] uppercase">
                  {stat.label}
                </span>
              </div>
              <div className="tracking-display text-foreground text-[34px] leading-[1.02] font-semibold sm:text-[38px] lg:text-[42px]">
                {stat.value}
              </div>
              <div className="text-muted text-[12.5px] leading-snug">
                {stat.sub}
              </div>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
};

const NETWORK_NODES: readonly [number, number, number, number][] = [
  [100, 140, 4, 0.55],
  [180, 100, 6, 0.9],
  [220, 170, 3, 0.45],
  [260, 130, 5, 0.7],
  [300, 180, 4, 0.55],
  [340, 110, 4, 0.6],
  [380, 160, 6, 0.9],
  [420, 200, 3, 0.45],
  [460, 140, 4, 0.6],
  [500, 170, 4, 0.55],
  [150, 220, 3, 0.4],
  [250, 250, 4, 0.55],
  [320, 230, 3, 0.45],
  [400, 250, 3, 0.4],
  [480, 220, 4, 0.55],
  [200, 280, 3, 0.4],
  [280, 300, 4, 0.55],
  [360, 290, 3, 0.45],
  [440, 300, 3, 0.4],
];

const NETWORK_PATHS = [
  "M 180 100 L 260 130 L 340 110 L 420 200 L 500 170",
  "M 100 140 L 220 170 L 300 180 L 380 160 L 460 140",
  "M 180 100 L 200 280 L 360 290 L 440 300",
  "M 220 170 L 280 300 L 400 250",
];

const HeroNetworkPattern: React.FC = () => {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute top-[-20px] right-[-30px] -z-10 h-[420px] w-[640px] opacity-[0.3] sm:top-[-30px] sm:right-[-40px] sm:h-[560px] sm:w-[860px] lg:top-[-40px] lg:right-[-60px] lg:h-[720px] lg:w-[1100px]"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 600 420"
    >
      <defs>
        <radialGradient cx="50%" cy="50%" id="hero-node-halo" r="50%">
          <stop offset="0%" stopColor="#2e8b35" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#2e8b35" stopOpacity="0" />
        </radialGradient>
      </defs>
      {NETWORK_NODES.map(([x, y, r, dim], i) => (
        <g key={i}>
          <circle cx={x} cy={y} fill="#2e8b35" fillOpacity={dim} r={r} />
          <circle cx={x} cy={y} fill="url(#hero-node-halo)" r={r + 6} />
        </g>
      ))}
      <g fill="none" stroke="#2e8b35" strokeOpacity="0.22" strokeWidth="0.75">
        {NETWORK_PATHS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
    </svg>
  );
};

export default Hero;
