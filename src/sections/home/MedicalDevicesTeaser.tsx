import { ArrowRight, Box } from "iconsax-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerChild } from "@/components/ui/Reveal";
import { MEDICAL_DEVICE_CATEGORIES } from "@/lib/services";

/*
 * Compact Medical Devices teaser for the home page. Surfaces the
 * categories + a single CTA, then links into the full section on
 * /products#medical-devices for the brand list, disclaimer, and
 * contact CTA.
 */
export function MedicalDevicesTeaser() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <Container size="xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal direction="up" className="lg:col-span-5">
            <SectionHeader
              eyebrow="Beyond pharmaceuticals"
              title="Medical devices & diagnostics."
              description="Reliable sourcing of high-quality medical devices and diagnostic solutions through our trusted global partner network — from Roche and Abbott to 3M and Mölnlycke."
              size="md"
            />
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                href="/products#medical-devices"
                variant="outline"
                size="md"
                withArrow
              >
                Explore medical devices
              </Button>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-[0.92rem] font-medium leading-none text-[var(--color-foreground)] underline decoration-2 underline-offset-[6px] transition-colors hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
              >
                Request a specific product
                <ArrowRight
                  size={14}
                  variant="Linear"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal direction="up" delay={0.1}>
              <div className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Product categories
              </div>
            </Reveal>
            <Stagger
              as="ul"
              staggerChildren={0.06}
              delayChildren={0.16}
              className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
            >
              {MEDICAL_DEVICE_CATEGORIES.map((category) => (
                <StaggerChild key={category} as="li">
                  <Link
                    href="/products#medical-devices"
                    className="group flex h-full items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-4 transition-all duration-[var(--duration-slow)] hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                      <Box size={16} variant="Linear" />
                    </span>
                    <span className="flex-1 text-[0.95rem] font-medium tracking-[-0.01em] text-[var(--color-foreground)]">
                      {category}
                    </span>
                    <ArrowRight
                      size={14}
                      variant="Linear"
                      className="text-[var(--color-subtle)] transition-all duration-[var(--duration-normal)] group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]"
                    />
                  </Link>
                </StaggerChild>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
