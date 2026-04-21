import Link from "next/link";
import { ShieldTick, Verify, ArrowRight } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

/*
 * Text-forward hero with abstract light-gray "ribbon" shapes behind the
 * content as the visual anchor (no photography, no compliance card).
 * Reference: I-SEC's hero — an oversized rounded-rectangle outline drawn
 * in a couple of parallel light strokes that sits softly behind the text.
 */

const SERVICE_PILLS = [
  { label: "Pharmaceutical Wholesale", href: "/services#pharmaceutical-wholesale" },
  { label: "Global Sourcing", href: "/services#global-sourcing" },
  { label: "International Distribution", href: "/services#international-distribution" },
  { label: "Temperature-Controlled", href: "/services#temperature-controlled-logistics" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--color-border)] bg-white">
      {/* Abstract light-gray ribbon shapes — sit behind everything */}
      <HeroBackdrop />

      <Container size="xl" className="relative">
        <div className="flex flex-col items-start gap-7 py-16 sm:py-24 lg:gap-9 lg:py-32 xl:py-36">
          <Reveal direction="up">
            <div className="flex items-center gap-2 text-[0.78rem] font-medium uppercase leading-none tracking-[0.16em] text-[var(--color-accent)]">
              <span className="h-px w-8 bg-[var(--color-accent)]" />
              EU Licensed Pharmaceutical Wholesaler
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.06}>
            <h1 className="max-w-5xl text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.03em] text-[var(--color-foreground)] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem]">
              Sourcing the medicines{" "}
              <br className="hidden sm:inline" />
              that healthcare needs.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.12}>
            <p className="max-w-2xl text-[1.075rem] leading-[1.6] text-[var(--color-muted)] sm:text-[1.175rem]">
              {SITE.name} is a Dutch wholesaler holding a Wholesale Distribution
              Authorisation and GDP certification. We supply branded and generic
              medicines to qualified distributors, hospitals, and pharmacies across
              Europe and beyond — sourced through a trusted partner network.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.18}>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/contact" variant="primary" size="xl" withArrow>
                Get in Touch
              </Button>
              <Button href="/services" variant="outline" size="xl">
                Our services
              </Button>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.26} className="mt-2 w-full">
            <div className="flex flex-wrap gap-2">
              {SERVICE_PILLS.map((pill) => (
                <Link
                  key={pill.href}
                  href={pill.href}
                  className="group inline-flex h-11 items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 text-[0.88rem] font-medium leading-none text-[var(--color-foreground)] shadow-[var(--shadow-sm)] transition-all duration-[var(--duration-normal)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[var(--shadow-card)]"
                >
                  {pill.label}
                  <ArrowRight
                    size={14}
                    variant="Linear"
                    className="text-[var(--color-subtle)] transition-all duration-[var(--duration-normal)] group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]"
                  />
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.34} className="mt-8 w-full">
            <div className="flex flex-col gap-5 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-start sm:gap-12">
              <CredentialItem
                icon={
                  <ShieldTick
                    size={18}
                    variant="Linear"
                    className="text-[var(--color-accent)]"
                  />
                }
                label="WDA Licence"
                value={`No. ${SITE.licences.wda.number}`}
                caption="Procurement · Supply · Export"
              />
              <CredentialItem
                icon={
                  <Verify
                    size={18}
                    variant="Linear"
                    className="text-[var(--color-primary)]"
                  />
                }
                label="GDP Certified"
                value={SITE.licences.gdp.number}
                caption="Issued 04/11/2024 · IGJ"
              />
              <CredentialItem
                icon={
                  <ShieldTick
                    size={18}
                    variant="Linear"
                    className="text-[var(--color-subtle)]"
                  />
                }
                label="Inspected by"
                value="IGJ"
                caption="Dutch Health & Youth Inspectorate"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/*
 * Two oversized rounded shapes drawn as outline strokes in light-gray.
 * Sized to span the hero, positioned to flow behind the headline + CTAs.
 * Decorative only; aria-hidden.
 */
function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Right side: large rounded "J/hook" outline */}
      <svg
        className="absolute right-[-6%] top-[-6%] h-[140%] w-[80%] sm:right-[-4%]"
        viewBox="0 0 800 900"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M 220 -40 L 220 720 Q 220 820 320 820 L 800 820"
          stroke="#eef0f4"
          strokeWidth="160"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 220 -40 L 220 720 Q 220 820 320 820 L 800 820"
          stroke="#e4e7ec"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Left side: secondary thin parallel strip, slightly offset */}
      <svg
        className="absolute left-[-12%] top-[10%] hidden h-[120%] w-[60%] lg:block"
        viewBox="0 0 600 800"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M 80 0 L 80 540 Q 80 620 160 620 L 600 620"
          stroke="#f4f5f8"
          strokeWidth="120"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
      </svg>

      {/* Bottom edge wash to soften where strips meet content below */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-white/60" />
    </div>
  );
}

function CredentialItem({
  icon,
  label,
  value,
  caption,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  caption: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--color-surface-1)]">
        {icon}
      </span>
      <div>
        <div className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
          {label}
        </div>
        <div className="mt-0.5 font-mono text-[0.95rem] font-semibold tracking-tight text-[var(--color-foreground)]">
          {value}
        </div>
        <div className="mt-0.5 text-[0.78rem] text-[var(--color-muted)]">
          {caption}
        </div>
      </div>
    </div>
  );
}
