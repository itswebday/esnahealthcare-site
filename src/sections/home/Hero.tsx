import Link from "next/link";
import { ArrowRight, ShieldTick, Verify } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

/*
 * I-SEC-inspired hero. Two columns of text (headline left, body right) over
 * a single perfectly smooth filled light-gray ribbon J-hook.
 *
 * Reference: https://www.i-sec.com/
 */

const SERVICE_PILLS = [
  { label: "Pharmaceutical Wholesale", href: "/services#pharmaceutical-wholesale" },
  { label: "Global Sourcing", href: "/services#global-sourcing" },
  { label: "International Distribution", href: "/services#international-distribution" },
  { label: "Cold-chain Logistics", href: "/services#temperature-controlled-logistics" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-20 sm:pb-28 lg:pb-36">
      {/* Abstract light-gray ribbon backdrop — single clean stroke, no border */}
      <HeroRibbon />

      <Container size="xl" className="relative">
        <div className="grid gap-14 pt-16 sm:pt-24 lg:grid-cols-12 lg:gap-16 lg:pt-32 xl:pt-36">
          {/* Left — eyebrow + headline + pills */}
          <div className="flex flex-col gap-8 lg:col-span-7">
            <Reveal direction="up">
              <div className="flex items-center gap-2.5 text-[1rem] font-medium leading-none text-[var(--color-accent)]">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                </span>
                We are {SITE.name}
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.06}>
              <h1 className="max-w-[14ch] text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.03em] text-[var(--color-foreground)] sm:text-[3.75rem] lg:text-[4.5rem] xl:text-[5.25rem]">
                Your{" "}
                <span className="text-[var(--color-primary)]">trusted</span>{" "}
                pharmaceutical wholesaler.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.18} className="mt-2">
              <div className="flex flex-wrap gap-2.5">
                {SERVICE_PILLS.map((pill) => (
                  <Link
                    key={pill.href}
                    href={pill.href}
                    className="group inline-flex h-11 items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 text-[0.92rem] font-medium leading-none text-[var(--color-foreground)] shadow-[var(--shadow-sm)] transition-all duration-[var(--duration-normal)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[var(--shadow-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
                  >
                    {pill.label}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — body text + CTAs + licence chips */}
          <div className="flex flex-col gap-7 lg:col-span-5 lg:pl-4">
            <Reveal direction="up" delay={0.1}>
              <p className="text-[1.075rem] leading-[1.65] text-[var(--color-muted)]">
                {SITE.name} is a Dutch EU-licensed wholesaler holding a Wholesale
                Distribution Authorisation and GDP certification. We supply branded
                and generic medicines to qualified distributors, hospitals, and
                pharmacies worldwide.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.16}>
              <p className="text-[1.075rem] leading-[1.65] text-[var(--color-muted)]">
                With a trusted international supplier and partner network, we provide
                licensed pharmaceutical supply — including procurement, supply,
                export, and temperature-controlled handling of cold-chain and
                ambient medicinal products.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.24}>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <Button href="/contact" variant="primary" size="lg" withArrow>
                  Get in Touch
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  View our services
                </Button>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.32}>
              <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-[var(--color-border)] pt-5">
                <LicenceChip
                  icon={<ShieldTick size={14} variant="Linear" />}
                  label="WDA"
                  value={SITE.licences.wda.number}
                  tone="accent"
                />
                <LicenceChip
                  icon={<Verify size={14} variant="Linear" />}
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
      </Container>
    </section>
  );
}

/*
 * Single solid-fill light-gray J-hook. One stroked path with a true
 * quarter-circle arc at the corner — no hairline border, no overlay.
 */
function HeroRibbon() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <svg
        className="absolute -left-[6%] -top-[8%] h-[130%] w-[110%] sm:-left-[4%] lg:left-[2%] lg:w-[92%]"
        viewBox="0 0 1200 1100"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M 360 -120 L 360 700 A 200 200 0 0 0 560 900 L 1320 900"
          stroke="#eef0f4"
          strokeWidth="220"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

function LicenceChip({
  icon,
  label,
  value,
  tone,
}: {
  icon: React.ReactNode;
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
      className={`inline-flex h-7 items-center gap-1.5 rounded-full border px-3 text-[0.78rem] font-medium leading-none ${wrapperClass}`}
    >
      {icon}
      <span className="font-mono uppercase tracking-[0.06em]">
        {label} {value}
      </span>
    </span>
  );
}
