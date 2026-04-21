import Link from "next/link";
import { ArrowRight, Location } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

/*
 * I-SEC-inspired hero. Two columns of text (headline left, body right) over a
 * single perfectly smooth filled light-gray ribbon J-hook. Refined with a
 * meta-row above the eyebrow, an italic accent on the headline, a stat strip
 * at the foot of the right column, and a thin scroll cue.
 *
 * Reference: https://www.i-sec.com/
 */

const SERVICE_PILLS = [
  { label: "Pharmaceutical Wholesale", href: "/services#pharmaceutical-wholesale" },
  { label: "Global Sourcing", href: "/services#global-sourcing" },
  { label: "International Distribution", href: "/services#international-distribution" },
  { label: "Cold-chain Logistics", href: "/services#temperature-controlled-logistics" },
] as const;

const STATS = [
  { value: "200+", label: "Pharmaceutical products" },
  { value: "8", label: "Therapeutic areas" },
  { value: "24h", label: "Average RFQ response" },
  { value: "EEA", label: "Sourcing network" },
] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-24 sm:pb-32 lg:pb-40">
      {/* Abstract light-gray ribbon backdrop — single clean stroke, no border */}
      <HeroRibbon />

      <Container size="xl" className="relative">
        <div className="grid gap-14 pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-16 lg:pt-28 xl:pt-32">
          {/* Left — meta + eyebrow + headline + pills */}
          <div className="flex flex-col gap-8 lg:col-span-7">
            <Reveal direction="up">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.78rem] font-medium uppercase leading-none tracking-[0.16em] text-[var(--color-subtle)]">
                <span className="inline-flex items-center gap-1.5 text-[var(--color-foreground)]">
                  <Location size={12} variant="Bold" className="text-[var(--color-accent)]" />
                  Utrecht · NL
                </span>
                <span className="h-3 w-px bg-[var(--color-border-strong)]" />
                <span>Established 2021</span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.04}>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--color-accent)]" />
                <span className="inline-flex items-center gap-2.5 text-[1rem] font-medium leading-none text-[var(--color-accent)]">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                  </span>
                  We are {SITE.name}
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h1 className="max-w-[14ch] text-[2.75rem] font-semibold leading-[1.0] tracking-[-0.034em] text-[var(--color-foreground)] sm:text-[3.75rem] lg:text-[4.5rem] xl:text-[5.25rem]">
                Your{" "}
                <span className="relative inline-block italic text-[var(--color-primary)]">
                  trusted
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 220 12"
                    className="absolute -bottom-1 left-0 right-0 h-2.5 w-full text-[var(--color-primary)]/55"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8 Q 55 0 110 6 T 218 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                pharmaceutical wholesaler.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.2} className="mt-2">
              <div className="flex flex-wrap gap-2.5">
                {SERVICE_PILLS.map((pill) => (
                  <Link
                    key={pill.href}
                    href={pill.href}
                    className="group inline-flex h-11 items-center justify-center rounded-full border-2 border-[var(--color-border)] bg-white px-5 text-center text-[0.92rem] font-medium leading-none text-[var(--color-foreground)] transition-all duration-[var(--duration-normal)] hover:border-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
                  >
                    {pill.label}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — body text + CTAs + licence chips */}
          <div className="flex flex-col gap-7 lg:col-span-5 lg:pl-4">
            <Reveal direction="up" delay={0.14}>
              <p className="text-[1.075rem] leading-[1.65] text-[var(--color-muted)]">
                <span className="font-semibold text-[var(--color-foreground)]">
                  {SITE.name}
                </span>{" "}
                is a Dutch EU-licensed wholesaler holding a Wholesale Distribution
                Authorisation and GDP certification. We supply branded and generic
                medicines to qualified distributors, hospitals, and pharmacies
                worldwide.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="text-[1.075rem] leading-[1.65] text-[var(--color-muted)]">
                With a trusted international supplier and partner network, we
                provide licensed pharmaceutical supply — including procurement,
                supply, export, and temperature-controlled handling of cold-chain
                and ambient medicinal products.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.28}>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <Button href="/contact" variant="primary" size="lg" withArrow>
                  Get in Touch
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  View our services
                </Button>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.36}>
              <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-[var(--color-border)] pt-5">
                <LicenceChip
                  label="WDA"
                  value={SITE.licences.wda.number}
                  tone="accent"
                />
                <LicenceChip
                  label="GDP"
                  value={SITE.licences.gdp.number}
                  tone="primary"
                />
                <Link
                  href="/compliance"
                  className="group ml-1 inline-flex items-center gap-1 text-[0.82rem] font-medium leading-none text-[var(--color-subtle)] transition-colors hover:text-[var(--color-foreground)]"
                >
                  Verify
                  <ArrowRight
                    size={12}
                    variant="Linear"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stat strip — full width, bottom of hero */}
        <Reveal direction="up" delay={0.4}>
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-4 lg:mt-28">
            {STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className="flex flex-col items-start gap-1.5 bg-white p-6 sm:p-7"
              >
                <div className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="font-display text-[2.25rem] font-semibold leading-none tracking-[-0.025em] text-[var(--color-foreground)] sm:text-[2.5rem]">
                  {stat.value}
                </div>
                <div className="text-[0.88rem] leading-snug text-[var(--color-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/*
 * Single light-gray rail that hooks down-then-RIGHT, sitting around the
 * mid-section of the hero. Extends off-canvas via overflow="visible" + the
 * parent's overflow-hidden, so no rounded caps appear inside the viewport.
 */
function HeroRibbon() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <svg
        className="absolute left-0 top-0 h-full w-full"
        viewBox="0 0 1200 900"
        fill="none"
        overflow="visible"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Single stroked path — uniform 76px thickness for a perfectly
            smooth ribbon. Stroked paths can't taper while still using
            non-scaling-stroke (the only way to keep thickness constant
            across viewports), so we trade asymmetry for smoothness. */}
        <path
          d="M 460 -260 L 460 290 A 100 100 0 0 0 560 390 L 1900 390"
          stroke="#eef0f5"
          strokeWidth="120"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
        />
      </svg>
    </div>
  );
}

function LicenceChip({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "primary" | "accent";
}) {
  const wrapperClass =
    tone === "primary"
      ? "border-[var(--color-primary-subtle-strong)] bg-[var(--color-primary-subtle)] text-[var(--color-primary-dark)]"
      : "border-[var(--color-accent-subtle-strong)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)]";
  return (
    <span
      className={`inline-flex h-7 items-center justify-center rounded-full border px-3 text-center font-mono text-[0.78rem] font-medium uppercase leading-none tracking-[0.06em] ${wrapperClass}`}
    >
      {label} {value}
    </span>
  );
}
