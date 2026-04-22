import { ArrowRight, Location, ShieldTick } from "iconsax-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

/*
  Hero variant 8 — "Flowing Ribbon"
  Two overlapping SVG curves sweep through the box with gradient fills,
  forming an organic, fluid visual. No text. On mobile the box acts as
  a soft backdrop wrapping the compliance card; on desktop it bleeds
  off to the right.
*/

const HeroEightPage: React.FC = () => {
  return (
    <>
      <PreviewBanner label="Hero 8 · Flowing Ribbon" />
      <Hero />
    </>
  );
};

const PreviewBanner: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="border-border/60 bg-surface-1 border-b py-3">
      <Container size="xl">
        <div className="text-foreground flex items-center justify-between text-[12px] font-medium tracking-[0.14em] uppercase">
          <span className="inline-flex items-center gap-2">
            <span className="bg-primary h-1.5 w-1.5 rounded-full" />
            Preview · {label}
          </span>
          <Link
            className="text-subtle hover:text-foreground inline-flex items-center gap-1.5"
            href="/preview"
          >
            ← Back to directions
          </Link>
        </div>
      </Container>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-28">
      <Container size="xl">
        <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-16 lg:py-16">
          {/* Left — copy + CTAs */}
          <div className="z-raised relative flex flex-col gap-7 lg:col-span-7">
            <HeroCopy />
          </div>

          {/* Right — box backdrop + centered compliance card */}
          <div className="relative lg:col-span-5 lg:flex lg:items-center">
            <BoxBackdrop />

            <div className="z-drawer relative w-full">
              <Reveal direction="up" delay={0.12}>
                <ComplianceCard />
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const BoxBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="from-primary-subtle/75 to-accent-subtle/55 pointer-events-none absolute -inset-x-3 -inset-y-6 overflow-hidden rounded-3xl bg-linear-to-br via-white/85 sm:-inset-x-6 sm:-inset-y-10 lg:inset-y-0 lg:right-[-45vw] lg:-left-[25%]"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="h8-ribbon-primary" x1="0" y1="0" x2="1" y2="1">
            <stop
              offset="0"
              stopColor="var(--color-primary)"
              stopOpacity="0.4"
            />
            <stop
              offset="1"
              stopColor="var(--color-primary)"
              stopOpacity="0.04"
            />
          </linearGradient>
          <linearGradient id="h8-ribbon-accent" x1="1" y1="0" x2="0" y2="1">
            <stop
              offset="0"
              stopColor="var(--color-accent)"
              stopOpacity="0.35"
            />
            <stop
              offset="1"
              stopColor="var(--color-accent)"
              stopOpacity="0.05"
            />
          </linearGradient>
        </defs>

        {/* Upper ribbon — primary gradient, wide sweeping curve */}
        <path
          d="M -80 180 C 180 60, 380 360, 620 180 S 900 260, 900 200 L 900 0 L -80 0 Z"
          fill="url(#h8-ribbon-primary)"
        />

        {/* Lower ribbon — accent gradient, opposing sweep */}
        <path
          d="M -80 440 C 160 520, 380 300, 620 460 S 900 380, 900 460 L 900 600 L -80 600 Z"
          fill="url(#h8-ribbon-accent)"
        />
      </svg>

      {/* Soft ambient glow for depth */}
      <span className="bg-primary/15 absolute top-1/2 -right-20 h-[240px] w-[240px] -translate-y-1/2 rounded-full blur-[100px]" />
    </div>
  );
};

const HeroCopy: React.FC = () => {
  return (
    <>
      <Reveal direction="up">
        <div className="flex flex-wrap items-center gap-3 text-[12px] font-medium tracking-[0.14em] uppercase">
          <span className="border-border text-foreground shadow-hint inline-flex items-center gap-1.5 rounded-xl border bg-white px-3 py-1">
            <Location className="text-primary" size={12} variant="Bold" />
            Utrecht · NL
          </span>
          <span className="border-primary/40 text-primary-dark inline-flex items-center gap-1.5 rounded-xl border bg-white/90 px-3 py-1 backdrop-blur">
            Established 2021
          </span>
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.08}>
        <h1 className="tracking-display text-foreground max-w-[18ch] text-[42px] leading-[1.02] font-semibold sm:text-[54px] lg:text-[64px]">
          Your{" "}
          <span className="text-primary relative inline-block italic">
            trusted
          </span>{" "}
          partner for{" "}
          <span className="from-primary to-accent bg-linear-to-r bg-clip-text text-transparent">
            medicines
          </span>{" "}
          &amp; medical devices.
        </h1>
      </Reveal>

      <Reveal direction="up" delay={0.14}>
        <p className="text-muted max-w-2xl text-[16px] leading-[1.65]">
          <span className="text-foreground font-semibold">{SITE.name}</span> is
          a Dutch EU-licensed wholesaler holding a Wholesale Distribution
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
          <Button href="/services" size="lg" variant="outline">
            View our services
          </Button>
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.28}>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="border-primary/40 text-primary-dark inline-flex items-center gap-1.5 rounded-lg border bg-white/90 px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wide backdrop-blur">
            WDA · {SITE.licences.wda.number}
          </span>
          <span className="border-accent/40 text-accent inline-flex items-center gap-1.5 rounded-lg border bg-white/90 px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wide backdrop-blur">
            GDP · {SITE.licences.gdp.number}
          </span>
          <Link
            className="group text-subtle hover:text-foreground ml-1 inline-flex items-center gap-1 text-[13px] font-medium transition-colors"
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
          {
            label: "Customer qualification SOP",
            value: "QA-015",
          },
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

export default HeroEightPage;
