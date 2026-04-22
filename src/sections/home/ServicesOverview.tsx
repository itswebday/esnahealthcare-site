import Link from "next/link";
import { ArrowRight, Box, Global, TickCircle, Truck } from "iconsax-react";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerChild } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { SERVICES } from "@/lib/services";

const ICON_MAP = {
  "pharma-wholesale": Box,
  "global-sourcing": Global,
  "international-distribution": Truck,
  "temperature-controlled": Box,
} as const;

const ServicesOverview: React.FC = () => {
  return (
    <section className="bg-surface-invert-2 relative overflow-hidden rounded-3xl py-24 text-white sm:py-28 lg:py-32">
      <Container size="xl">
        <ServicesBackdrop />

        <Reveal direction="up">
          <div className="relative flex max-w-3xl flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-xl bg-white/10 px-3 py-1 text-[12px] font-medium tracking-[0.14em] text-white uppercase ring-1 ring-white/20 backdrop-blur">
              <span className="bg-primary h-1.5 w-1.5 rounded-full" />
              Our services
            </span>
            <h2 className="tracking-display text-[32px] leading-[1.1] font-semibold text-white sm:text-[42px] lg:text-[48px]">
              End-to-end pharmaceutical supply, built on compliance and
              reliability.
            </h2>
            <p className="text-on-invert-muted max-w-2xl text-[16px] leading-relaxed">
              Four disciplines that shape every partner relationship — from
              first enquiry to a qualified, temperature-controlled delivery.
            </p>
          </div>
        </Reveal>

        <Stagger
          as="ul"
          className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          delayChildren={0.1}
          staggerChildren={0.08}
        >
          {SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.icon] ?? Box;
            const isPrimary = idx % 2 === 0;
            return (
              <StaggerChild
                key={service.slug}
                as="li"
                className="h-full"
                direction="up"
              >
                <Link
                  className={cn(
                    "group duration-slow focus-visible:ring-offset-surface-invert-2 relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/5 to-white/[0.02] p-7 backdrop-blur transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                    isPrimary
                      ? "hover:border-primary/50 hover:shadow-primary/20 focus-visible:ring-primary hover:shadow-xl"
                      : "hover:border-accent/50 hover:shadow-accent/20 focus-visible:ring-accent hover:shadow-xl",
                  )}
                  href="/services"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "duration-slow pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-bl-full bg-linear-to-br to-transparent opacity-60 transition-opacity group-hover:opacity-100",
                      isPrimary ? "from-primary/30" : "from-accent/30",
                    )}
                  />

                  <div className="relative flex items-start justify-between">
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
                    <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-white/50 uppercase">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="relative flex flex-1 flex-col gap-2">
                    <div
                      className={cn(
                        "font-mono text-[10px] font-semibold tracking-[0.2em] uppercase",
                        isPrimary ? "text-primary" : "text-accent",
                      )}
                    >
                      Service
                    </div>
                    <h3 className="text-[18px] leading-tight font-semibold tracking-tight text-white">
                      {service.title}
                    </h3>
                    <p className="text-on-invert-muted text-[14px] leading-relaxed">
                      {service.summary}
                    </p>
                  </div>

                  <ul className="relative mt-auto flex flex-col gap-2">
                    {service.bullets.slice(0, 2).map((bullet) => (
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
      </Container>
    </section>
  );
};

const ServicesBackdrop: React.FC = () => {
  return null;
};

export default ServicesOverview;
