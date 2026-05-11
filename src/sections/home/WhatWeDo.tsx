import { ArrowRight, Health, Hospital, TickCircle } from "iconsax-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerChild } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const TILES = [
  {
    icon: Health,
    title: "Pharmaceuticals",
    summary:
      "Branded, generic, OTC, specialty, and hard-to-source medicines — including shortage products across EU markets.",
    bullets: ["EU-sourced supplier network", "Shortage & specialty support"],
    href: "/products",
  },
  {
    icon: Hospital,
    title: "Medical Devices",
    summary:
      "Diagnostics, wound care, diabetes care, clinical nutrition, and self-diagnostics — sourced under the same qualification standards.",
    bullets: ["Global partner network", "GDP-aligned qualification"],
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
              <div className="inline-flex w-fit items-center gap-2">
                <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                <span className="font-mono text-[11px] font-semibold tracking-[0.28em] text-white/70 uppercase">
                  What we do
                </span>
              </div>
              <h2 className="tracking-display text-[32px] leading-[1.1] font-semibold text-white sm:text-[42px] lg:text-[48px]">
                Medicines and medical devices, supplied to qualified buyers.
              </h2>
            </div>
          </Reveal>

          <Stagger
            as="ul"
            className="relative mt-14 grid gap-5 lg:grid-cols-2 lg:gap-6"
            delayChildren={0.1}
            staggerChildren={0.08}
          >
            {TILES.map((tile) => {
              const Icon = tile.icon;
              return (
                <StaggerChild
                  key={tile.title}
                  as="li"
                  className="h-full"
                  direction="up"
                >
                  <Link
                    className="group duration-slow focus-visible:ring-offset-surface-invert-2 hover:border-primary/50 hover:shadow-primary/20 focus-visible:ring-primary relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-white/20 bg-white/[0.12] p-9 transition-colors hover:shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:transition-all"
                    href={tile.href}
                    prefetch
                  >
                    <div className="bg-primary shadow-primary/30 relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-lg">
                      <Icon size={22} variant="Bold" />
                    </div>

                    <h3 className="text-[22px] leading-[1.15] font-semibold tracking-tight text-white sm:text-[26px] lg:text-[28px]">
                      {tile.title}
                    </h3>

                    <p className="text-[15px] leading-relaxed text-white/95">
                      {tile.summary}
                    </p>

                    <ul className="relative mt-auto flex flex-col gap-2 border-t border-white/15 pt-5">
                      {tile.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-[14px] leading-snug text-white"
                        >
                          <TickCircle
                            className="text-primary mt-0.5 shrink-0"
                            size={14}
                            variant="Bold"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <span className="relative inline-flex items-center gap-1.5 text-[13px] font-medium text-white">
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
