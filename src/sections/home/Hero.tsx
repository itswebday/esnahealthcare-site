import Link from "next/link";
import { ArrowRight } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

/*
 * I-SEC-inspired hero. Two columns of text (headline left, body right) over
 * a massive filled light-gray "ribbon" J-hook that anchors the section.
 * No photography, no compliance card, no chips — just type, pills, and the
 * ribbon shape.
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
    <section className="relative isolate overflow-hidden bg-white">
      {/* Abstract light-gray ribbon backdrop */}
      <HeroRibbon />

      <Container size="xl" className="relative">
        <div className="grid gap-14 py-16 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-32 xl:py-36">
          {/* Left — eyebrow + headline + pills */}
          <div className="flex flex-col gap-8 lg:col-span-7">
            <Reveal direction="up">
              <div className="text-[1rem] font-medium leading-none text-[var(--color-accent)]">
                We are {SITE.name}
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.06}>
              <h1 className="max-w-[14ch] text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.03em] text-[var(--color-foreground)] sm:text-[3.75rem] lg:text-[4.5rem] xl:text-[5.25rem]">
                Your trusted pharmaceutical wholesaler.
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

          {/* Right — body text + CTAs */}
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

            <Reveal direction="up" delay={0.22}>
              <p className="text-[1.075rem] leading-[1.65] text-[var(--color-muted)]">
                Our commitment is straightforward: to supply high-quality medicines
                through licensed distribution and trusted networks, maintaining the
                highest standards of quality and compliance.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="mt-2 flex flex-wrap items-center gap-5">
                <Button href="/services" variant="outline" size="lg">
                  View our services
                </Button>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-[0.95rem] font-medium leading-none text-[var(--color-foreground)] underline underline-offset-4 transition-colors hover:text-[var(--color-accent)]"
                >
                  Get in touch
                  <ArrowRight
                    size={14}
                    variant="Linear"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      {/* Bottom navy strip — connects to next section like I-SEC's "Scroll to explore" band */}
      <ScrollIndicator />
    </section>
  );
}

/*
 * The big J-hook ribbon — a thick rounded-corner band drawn as a stroked SVG
 * path. Sized very large so the corners hook off the viewport edges, exactly
 * how I-SEC anchors its hero. Two layers: a wide light-gray fill stroke, and
 * a thin hairline at its outer edge for definition.
 */
function HeroRibbon() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <svg
        className="absolute -left-[8%] -top-[10%] h-[140%] w-[110%] sm:-left-[6%] lg:left-[3%] lg:w-[88%]"
        viewBox="0 0 1200 1100"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <clipPath id="esna-ribbon-clip">
            <rect x="0" y="0" width="1200" height="1100" />
          </clipPath>
        </defs>
        <g clipPath="url(#esna-ribbon-clip)">
          {/* Wide light-gray ribbon — main visual mass */}
          <path
            d="M 360 -100 L 360 760 Q 360 880 480 880 L 1320 880"
            stroke="#eef0f4"
            strokeWidth="180"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Hairline outer edge for definition */}
          <path
            d="M 270 -100 L 270 760 Q 270 970 480 970 L 1320 970"
            stroke="#e3e6ec"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 450 -100 L 450 760 Q 450 790 480 790 L 1320 790"
            stroke="#e3e6ec"
            strokeWidth="1.5"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div className="relative">
      <div className="relative bg-[var(--color-surface-invert)] py-6 text-[var(--color-on-invert)]">
        <Container size="xl">
          <div className="flex items-center justify-between text-[0.82rem]">
            <span className="font-mono uppercase tracking-[0.16em] text-[var(--color-on-invert-muted)]">
              EU Licensed · WDA {SITE.licences.wda.number} · GDP{" "}
              {SITE.licences.gdp.number}
            </span>
            <span className="hidden items-center gap-2 font-mono uppercase tracking-[0.16em] text-[var(--color-on-invert-muted)] sm:inline-flex">
              Scroll to explore
              <span aria-hidden="true" className="inline-block animate-bounce">
                ↓
              </span>
            </span>
          </div>
        </Container>
      </div>
    </div>
  );
}
