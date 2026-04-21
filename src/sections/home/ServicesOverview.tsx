import Link from "next/link";
import {
  Box,
  Global,
  Truck,
  ArrowRight,
} from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, Stagger, StaggerChild } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/services";

const ICON_MAP = {
  "pharma-wholesale": Box,
  "global-sourcing": Global,
  "international-distribution": Truck,
  "temperature-controlled": Box,
} as const;

export function ServicesOverview() {
  return (
    <section className="bg-[var(--color-surface-1)] py-24 sm:py-28 lg:py-32">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="Our services"
            title="End-to-end pharmaceutical supply, built on compliance and reliability."
            description="Four disciplines that shape every partner relationship — from first enquiry to a qualified, temperature-controlled delivery."
            size="lg"
          />
        </Reveal>

        <Stagger
          as="ul"
          staggerChildren={0.08}
          delayChildren={0.1}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
        >
          {SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.icon] ?? Box;
            return (
              <StaggerChild
                key={service.slug}
                as="li"
                direction="up"
                className="h-full"
              >
                <Link
                  href="/services"
                  className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-7 transition-all duration-[var(--duration-slow)] ease-[var(--ease-out)] hover:border-[var(--color-primary-subtle-strong)] hover:shadow-[var(--shadow-lift)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
                >
                  <span className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-[var(--color-primary-subtle)] to-transparent opacity-0 transition-opacity duration-[var(--duration-slow)] group-hover:opacity-100" />
                  <div className="relative flex items-start justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary-subtle)] text-[var(--color-primary-dark)]">
                      <Icon size={22} variant="Linear" />
                    </div>
                    <span className="font-mono text-sm text-[var(--color-subtle)]">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="relative flex flex-1 flex-col">
                    <h3 className="text-[1.2rem] font-semibold tracking-[-0.015em] text-[var(--color-foreground)]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--color-muted)]">
                      {service.summary}
                    </p>
                  </div>
                  <span className="relative inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary-dark)]">
                    Learn more
                    <ArrowRight
                      size={14}
                      variant="Linear"
                      className="transition-transform duration-[var(--duration-normal)] group-hover:translate-x-0.5"
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
}
