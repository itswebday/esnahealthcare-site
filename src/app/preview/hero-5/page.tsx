import { ArrowRight, Location, ShieldTick } from "iconsax-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

/*
  Hero variant 5 — "Radial Pulse"
  Concentric circles emanate from a focal point behind the compliance
  card, like a clinical radar or ripple. Soft gradient fill underneath,
  SVG rings on top. Calm, centered, medical-tech aesthetic.
*/

const HeroFivePage: React.FC = () => {
  return (
    <>
      <PreviewBanner label="Hero 5 · Radial Pulse" />
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
          {/* Partial background box — radial pulse */}
          <div
            aria-hidden="true"
            className="from-primary-subtle/80 to-accent-subtle/50 pointer-events-none absolute top-0 right-[-45vw] bottom-0 left-[45%] overflow-hidden rounded-3xl bg-linear-to-br via-white/90"
          >
            {/* Concentric SVG rings emanating from right-center */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 800 600"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
            >
              {/* Outer ring */}
              <circle
                cx="420"
                cy="300"
                r="360"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary/20"
              />
              <circle
                cx="420"
                cy="300"
                r="280"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary/30"
              />
              <circle
                cx="420"
                cy="300"
                r="200"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary/40"
              />
              <circle
                cx="420"
                cy="300"
                r="130"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-accent/40"
              />
              <circle
                cx="420"
                cy="300"
                r="70"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-accent/60"
              />
              {/* Central filled dot */}
              <circle cx="420" cy="300" r="5" className="fill-primary" />
            </svg>

            {/* Mono label top-left */}
            <span className="text-primary-dark/70 absolute top-6 left-7 inline-flex items-center gap-2 font-mono text-[10px] font-semibold tracking-[0.22em] uppercase">
              <span className="bg-primary h-1.5 w-1.5 rounded-full" />
              Sourcing network · EEA
            </span>

            {/* Mono coordinates bottom-right (inside the box, not in viewport) */}
            <span className="text-accent/70 absolute bottom-6 left-7 font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
              52.09° N · 5.12° E · Utrecht
            </span>
          </div>

          {/* Left — copy + CTAs */}
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

          {/* Right — compliance card (centered vertically) */}
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

export default HeroFivePage;
