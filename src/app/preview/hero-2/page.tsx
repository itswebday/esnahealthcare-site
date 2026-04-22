import { ArrowRight, Location, ShieldTick } from "iconsax-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

/*
  Hero variant 2 — "Partial Panel" (fundamentpartners TextImage style)
  The tinted box sits BEHIND the left copy column only, extending off the
  left edge of the screen. The right compliance card sits on top and
  overlaps the box's right edge, creating the signature partial-panel
  layering. A rounded corner accent + thin bottom rule dress the box.
*/

const HeroTwoPage: React.FC = () => {
  return (
    <>
      <PreviewBanner label="Hero 2 · Partial Panel" />
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
          {/* Partial background box — architectural / technical feel */}
          <div
            aria-hidden="true"
            className="from-primary-subtle/85 to-accent-subtle/55 pointer-events-none absolute top-0 right-[-45vw] bottom-0 left-[45%] overflow-hidden rounded-3xl bg-linear-to-br via-white/75"
          >
            {/* Subtle grid overlay — institutional / blueprint feel */}
            <div
              className="absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(11,22,40,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(11,22,40,0.08) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />

            {/* Soft radial glows — ambient depth */}
            <span className="bg-primary/18 absolute -right-32 -bottom-32 h-[320px] w-[320px] rounded-full blur-[90px]" />
            <span className="bg-accent/15 absolute -top-24 left-[20%] h-[240px] w-[240px] rounded-full blur-[80px]" />

            {/* Four tick-cross corner markers — technical measurement vocabulary */}
            <TickCross position="top-5 left-5" tone="primary" />
            <TickCross position="top-5 right-6" tone="accent" />
            <TickCross position="bottom-5 left-5" tone="accent" />
            <TickCross position="right-6 bottom-5" tone="primary" />

            {/* Horizontal reference line — near the top */}
            <div className="absolute top-[60px] right-8 left-20 flex items-center gap-3">
              <span className="bg-primary h-1.5 w-1.5 shrink-0 rounded-full" />
              <span className="from-primary/60 via-primary/30 to-accent/50 h-[2px] flex-1 bg-linear-to-r" />
              <span className="text-primary-dark/60 font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
                Est · 2021
              </span>
            </div>

            {/* Vertical signature strip — rotated mono label on the left inner edge */}
            <span className="text-primary-dark/40 absolute bottom-12 left-2 origin-bottom-left -rotate-90 font-mono text-[10px] font-semibold tracking-[0.28em] whitespace-nowrap uppercase">
              Esna · NL · Pharmaceuticals
            </span>

            {/* Bottom horizontal accent with ID-style label */}
            <div className="absolute right-8 bottom-[60px] left-20 flex items-center gap-3">
              <span className="text-accent/70 font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
                WDA · 16615 G
              </span>
              <span className="from-accent/45 via-primary/25 to-primary/55 h-[2px] flex-1 bg-linear-to-r" />
              <span className="bg-accent h-1.5 w-1.5 shrink-0 rounded-full" />
            </div>
          </div>

          {/* Left — copy + CTAs (sits on top of the box) */}
          <div className="z-raised relative flex flex-col gap-7 lg:col-span-7">
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
                <span className="text-foreground font-semibold">
                  {SITE.name}
                </span>{" "}
                is a Dutch EU-licensed wholesaler holding a Wholesale
                Distribution Authorisation and GDP certification — supplying
                medicines and a curated range of medical devices and diagnostics
                to qualified distributors, hospitals, and pharmacies worldwide.
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
          </div>

          {/* Right — compliance card (sits on top, overlaps box's right edge) */}
          <div className="z-drawer relative lg:col-span-5 lg:self-center">
            <Reveal direction="up" delay={0.12}>
              <ComplianceCard />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

type TickCrossProps = {
  position: string;
  tone: "primary" | "accent";
};

const TickCross: React.FC<TickCrossProps> = ({ position, tone }) => {
  const color = tone === "primary" ? "bg-primary" : "bg-accent";

  return (
    <span className={cn("absolute block h-3 w-3", position)}>
      <span
        className={cn(
          "absolute top-1/2 right-0 left-0 h-[1.5px]",
          "-translate-y-1/2 rounded-full",
          color,
        )}
      />
      <span
        className={cn(
          "absolute top-0 bottom-0 left-1/2 w-[1.5px]",
          "-translate-x-1/2 rounded-full",
          color,
        )}
      />
    </span>
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

export default HeroTwoPage;
