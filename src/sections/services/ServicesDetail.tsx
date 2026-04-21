import { Box, Global, Truck, TickCircle, ArrowRight } from "iconsax-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES, type Service } from "@/lib/services";

const ICON_MAP: Record<Service["icon"], typeof Box> = {
  "pharma-wholesale": Box,
  "global-sourcing": Global,
  "international-distribution": Truck,
  "temperature-controlled": Box,
};

export function ServicesDetail() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <div className="flex flex-col gap-20 lg:gap-28">
          {SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.icon] ?? Box;
            const reverse = idx % 2 === 1;
            return (
              <Reveal key={service.slug} direction="up">
                <article
                  id={service.slug}
                  className="grid items-start gap-10 scroll-mt-28 lg:grid-cols-12 lg:gap-16"
                >
                  <div
                    className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}
                  >
                    <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-[var(--color-surface-1)] p-10">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--color-primary-subtle)] blur-3xl"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-16 bottom-[-6rem] h-72 w-72 rounded-full bg-[var(--color-accent-subtle)] blur-3xl"
                      />
                      <div className="relative">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-[var(--radius-lg)] bg-white text-[var(--color-primary-dark)] shadow-[var(--shadow-card)]">
                          <Icon size={26} variant="Linear" />
                        </div>
                        <div className="mt-8 font-mono text-sm text-[var(--color-subtle)]">
                          0{idx + 1} / 0{SERVICES.length}
                        </div>
                        <div className="mt-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
                          Service
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}
                  >
                    <h2 className="text-[2rem] font-semibold leading-[1.1] tracking-[var(--tracking-display)] text-[var(--color-foreground)] sm:text-[2.4rem]">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-[1.1rem] leading-[1.6] text-[var(--color-muted)]">
                      {service.description}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-[0.98rem] leading-snug text-[var(--color-foreground)]"
                        >
                          <TickCircle
                            size={20}
                            variant="Bold"
                            className="mt-0.5 shrink-0 text-[var(--color-primary)]"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="group mt-8 inline-flex items-center gap-2 text-[0.95rem] font-medium text-[var(--color-foreground)] transition-colors hover:text-[var(--color-primary-dark)]"
                    >
                      Request a quote for {service.title.toLowerCase()}
                      <ArrowRight
                        size={16}
                        variant="Linear"
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
