import { ArrowRight, Health, Hospital, TickCircle } from "iconsax-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerChild } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const TILES = [
  {
    icon: Health,
    eyebrow: "Pharmaceuticals",
    title: "Branded, generic, OTC, specialty.",
    summary:
      "Access to branded, generic, OTC, specialty, and hard-to-source medicines — including shortage products across EU markets.",
    bullets: [
      "EU-sourced branded & generic medicines",
      "Specialty, orphan, and shortage support",
    ],
    href: "/products",
  },
  {
    icon: Hospital,
    eyebrow: "Medical Devices & Diagnostics",
    title: "Devices, diagnostics, clinical care.",
    summary:
      "Diagnostics, wound care, diabetes care, clinical nutrition, and self-diagnostics — sourced under the same qualification standards.",
    bullets: [
      "Sourced through global partner networks",
      "Same GDP-aligned qualification process",
    ],
    href: "/products#medical-devices",
  },
] as const;

const WhatWeDo: React.FC = () => {
  return (
    <section className="relative bg-white py-4 sm:py-7 lg:py-8">
      <Container className="max-w-[1520px] px-0 sm:px-8 lg:px-10" size="xl">
        <div className="bg-surface-invert-2 relative overflow-hidden rounded-3xl px-6 py-16 text-white sm:rounded-[40px] sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          <Reveal direction="up">
            <div className="relative flex max-w-3xl flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-xl bg-white/10 px-3 py-1 text-[12px] font-medium tracking-[0.14em] text-white uppercase ring-1 ring-white/20 sm:backdrop-blur">
                <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                What we do
              </span>
              <h2 className="tracking-display text-[32px] leading-[1.1] font-semibold text-white sm:text-[42px] lg:text-[48px]">
                Medicines and medical devices, supplied to qualified buyers.
              </h2>
              <p className="text-on-invert-muted max-w-2xl text-[16px] leading-relaxed">
                Two product families, one quality standard — sourced through
                qualified channels and distributed under EU GDP.
              </p>
            </div>
          </Reveal>

          <Stagger
            as="ul"
            className="relative mt-14 grid gap-5 lg:grid-cols-2 lg:gap-6"
            delayChildren={0.1}
            staggerChildren={0.08}
          >
            {TILES.map((tile, idx) => {
              const Icon = tile.icon;
              const isPrimary = idx === 0;
              return (
                <StaggerChild
                  key={tile.eyebrow}
                  as="li"
                  className="h-full"
                  direction="up"
                >
                  <Link
                    className={cn(
                      "group duration-slow focus-visible:ring-offset-surface-invert-2 relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-9 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:bg-linear-to-br sm:from-white/5 sm:to-white/[0.02] sm:backdrop-blur sm:transition-all",
                      isPrimary
                        ? "hover:border-primary/50 hover:shadow-primary/20 focus-visible:ring-primary hover:shadow-xl"
                        : "hover:border-accent/50 hover:shadow-accent/20 focus-visible:ring-accent hover:shadow-xl",
                    )}
                    href={tile.href}
                    prefetch
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "duration-slow pointer-events-none absolute -top-10 -right-10 hidden h-40 w-40 rounded-bl-full bg-linear-to-br to-transparent opacity-60 transition-opacity group-hover:opacity-100 sm:block",
                        isPrimary ? "from-primary/30" : "from-accent/30",
                      )}
                    />

                    <div
                      className={cn(
                        "relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ring-1",
                        isPrimary
                          ? "bg-primary/15 text-primary ring-primary/30"
                          : "bg-accent/20 text-accent ring-accent/40",
                      )}
                    >
                      <Icon size={26} variant="Bold" />
                    </div>

                    <div className="relative flex flex-1 flex-col gap-3">
                      <div
                        className={cn(
                          "font-mono text-[10px] font-semibold tracking-[0.22em] uppercase",
                          isPrimary ? "text-primary" : "text-accent",
                        )}
                      >
                        {tile.eyebrow}
                      </div>
                      <h3 className="tracking-display text-[24px] leading-[1.15] font-semibold text-white sm:text-[26px]">
                        {tile.title}
                      </h3>
                      <p className="text-on-invert-muted text-[15px] leading-relaxed">
                        {tile.summary}
                      </p>
                    </div>

                    <ul className="relative mt-auto flex flex-col gap-2">
                      {tile.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-[13px] leading-snug text-white/80"
                        >
                          <TickCircle
                            className={cn(
                              "mt-0.5 shrink-0",
                              isPrimary ? "text-primary" : "text-accent",
                            )}
                            size={14}
                            variant="Bold"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <span
                      className={cn(
                        "relative inline-flex items-center gap-1.5 text-[13px] font-medium",
                        isPrimary ? "text-primary" : "text-accent",
                      )}
                    >
                      Learn more
                      <ArrowRight
                        className="duration-normal transition-transform group-hover:translate-x-0.5"
                        size={14}
                        variant="Linear"
                      />
                    </span>
                  </Link>
                </StaggerChild>
              );
            })}
          </Stagger>
        </div>
      </Container>
    </section>
  );
};

export default WhatWeDo;
