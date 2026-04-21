import Link from "next/link";
import {
  ShieldTick,
  Verify,
  ArrowRight,
  Global,
  Flag,
  TickCircle,
  Location,
  Scan,
} from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { SITE } from "@/lib/site";
import { HeroComplianceCard } from "./HeroComplianceCard";

const TRUST_STRIP = [
  { icon: Flag, label: "Utrecht · Netherlands" },
  { icon: Global, label: "EEA sourcing network" },
  { icon: ShieldTick, label: "WDA 16615 G" },
  { icon: Verify, label: "GDP NL/G24/2053458" },
  { icon: Scan, label: "EudraGMDP verifiable" },
  { icon: Location, label: "IGJ inspected" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-10 pb-20 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Base wash — soft radial gradients that evoke silk-wave background without WebGL */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_20%,rgba(46,139,53,0.14)_0%,transparent_60%),radial-gradient(ellipse_60%_50%_at_85%_0%,rgba(13,79,140,0.18)_0%,transparent_55%),radial-gradient(ellipse_70%_50%_at_70%_90%,rgba(46,139,53,0.08)_0%,transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-[var(--color-surface-1)] to-transparent" />
      </div>

      {/* Dot grid mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(11,22,40,0.09) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <Container size="xl" className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          {/* Left column — content */}
          <div className="flex flex-col gap-7 lg:col-span-7 xl:col-span-7">
            <Reveal direction="up">
              <div className="inline-flex h-9 items-center gap-2 self-start rounded-full border border-[var(--color-primary-subtle-strong)] bg-white/70 px-3 leading-none backdrop-blur-sm">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                </span>
                <ShieldTick
                  size={14}
                  variant="Linear"
                  className="shrink-0 text-[var(--color-primary-dark)]"
                />
                <span className="text-[0.78rem] font-medium leading-none tracking-[-0.005em] text-[var(--color-primary-dark)]">
                  EU Licensed
                </span>
                <span className="h-3 w-px shrink-0 bg-[var(--color-primary-subtle-strong)]" />
                <Verify
                  size={14}
                  variant="Linear"
                  className="shrink-0 text-[var(--color-accent)]"
                />
                <span className="text-[0.78rem] font-medium leading-none tracking-[-0.005em] text-[var(--color-accent)]">
                  GDP Certified
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.06}>
              <h1 className="text-[2.5rem] font-semibold leading-[1.02] tracking-[var(--tracking-display)] text-[var(--color-foreground)] sm:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.5rem]">
                Medicine,{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-gradient-brand">
                    delivered
                  </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 180 12"
                    className="absolute left-0 right-0 top-full -mt-1 h-2.5 w-full text-[var(--color-primary)]/50"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 6 Q 45 0 90 6 T 178 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                on compliance.
                <br className="hidden sm:inline" />
                Sourced across the EEA.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.12}>
              <p className="max-w-xl text-lg leading-[1.6] text-[var(--color-muted)] sm:text-[1.175rem]">
                {SITE.name} is a Dutch EU-licensed pharmaceutical wholesaler.
                We source branded and generic medicines across Europe and supply
                qualified distributors, hospitals, and pharmacies worldwide — under a
                Wholesale Distribution Authorisation for procurement, supply, and
                export.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.18}>
              <div className="flex flex-wrap items-center gap-3">
                <Button href="/contact" variant="primary" size="xl" withArrow>
                  Get in Touch
                </Button>
                <Button href="/services" variant="outline" size="xl">
                  Explore our services
                </Button>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.26}>
              <div className="mt-2 flex flex-col gap-3 text-[0.88rem] text-[var(--color-muted)] sm:flex-row sm:items-center sm:gap-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-1.5">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-primary-subtle)] ring-2 ring-white">
                      <ShieldTick
                        size={12}
                        variant="Bold"
                        className="text-[var(--color-primary-dark)]"
                      />
                    </span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent-subtle)] ring-2 ring-white">
                      <Verify
                        size={12}
                        variant="Bold"
                        className="text-[var(--color-accent)]"
                      />
                    </span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-surface-2)] ring-2 ring-white">
                      <Scan
                        size={12}
                        variant="Linear"
                        className="text-[var(--color-foreground)]"
                      />
                    </span>
                  </div>
                  <span className="text-[var(--color-foreground)]">
                    Licences verifiable in{" "}
                    <span className="font-mono font-medium">EudraGMDP</span>
                  </span>
                </div>
                <span className="hidden h-4 w-px bg-[var(--color-border-strong)] sm:block" />
                <div className="flex items-center gap-2">
                  <TickCircle
                    size={16}
                    variant="Bold"
                    className="text-[var(--color-primary)]"
                  />
                  <span>
                    <span className="font-mono font-medium text-[var(--color-foreground)]">
                      200+ products
                    </span>{" "}
                    across 8 therapeutic areas
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right column — compliance card */}
          <div className="lg:col-span-5 xl:col-span-5">
            <HeroComplianceCard />
          </div>
        </div>

        {/* Bottom: supplier / regulator trust marquee */}
        <Reveal direction="up" delay={0.4}>
          <div className="mt-20 sm:mt-24">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-6 text-sm">
                <span className="text-[var(--color-subtle)]">
                  Operating under the EU pharmaceutical regulatory framework
                </span>
                <Link
                  href="/compliance"
                  className="group hidden items-center gap-1.5 font-medium text-[var(--color-foreground)] transition-colors hover:text-[var(--color-primary-dark)] sm:inline-flex"
                >
                  Verify our licences
                  <ArrowRight
                    size={14}
                    variant="Linear"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
              <Marquee
                speed={55}
                items={TRUST_STRIP.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-2 text-[0.95rem] font-medium tracking-[-0.008em] text-[var(--color-muted)]"
                    >
                      <Icon
                        size={18}
                        variant="Linear"
                        className="text-[var(--color-primary-dark)]"
                      />
                      {item.label}
                    </span>
                  );
                })}
                separator={
                  <span className="text-[var(--color-faint)]">·</span>
                }
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
