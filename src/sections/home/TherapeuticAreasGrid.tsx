import Link from "next/link";
import {
  Health,
  Microscope,
  Heart,
  ShieldTick,
  Hospital,
  Crown,
  Cpu,
  Drop,
  ArrowRight,
} from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, Stagger, StaggerChild } from "@/components/ui/Reveal";
import { THERAPEUTIC_AREAS, type TherapeuticArea } from "@/lib/services";

const ICON_MAP: Record<TherapeuticArea["icon"], typeof Health> = {
  oncology: Microscope,
  rare: Crown,
  cardio: Heart,
  immunology: ShieldTick,
  neurology: Cpu,
  critical: Hospital,
  "cold-chain": Drop,
  vitamins: Health,
};

export function TherapeuticAreasGrid({
  showExamples = true,
}: {
  showExamples?: boolean;
}) {
  return (
    <section className="bg-[var(--color-surface-1)] py-24 sm:py-28 lg:py-32">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="Therapeutic areas"
            title="200+ products across major therapeutic categories."
            description="From oncology and rare diseases to hospital care and biologics — handled under GDP by a dedicated commercial and quality team."
            size="lg"
          />
        </Reveal>

        <Stagger
          as="ul"
          staggerChildren={0.05}
          delayChildren={0.08}
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {THERAPEUTIC_AREAS.map((area) => {
            const Icon = ICON_MAP[area.icon] ?? Health;
            return (
              <StaggerChild key={area.slug} as="li" direction="up">
                <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 transition-all duration-[var(--duration-slow)] ease-[var(--ease-out)] hover:border-[var(--color-primary-subtle-strong)] hover:shadow-[var(--shadow-lift)]">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-subtle)] text-[var(--color-primary-dark)]">
                    <Icon size={18} variant="Linear" />
                  </div>
                  <div>
                    <h3 className="text-[1rem] font-semibold tracking-[-0.012em] text-[var(--color-foreground)]">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-[0.88rem] leading-relaxed text-[var(--color-muted)]">
                      {area.description}
                    </p>
                  </div>
                  {showExamples && area.examples.length > 0 && (
                    <div className="mt-auto border-t border-[var(--color-border)] pt-3">
                      <div className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                        Example products
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {area.examples.map((ex) => (
                          <span
                            key={ex}
                            className="rounded-full bg-[var(--color-surface-2)] px-2.5 py-1 font-mono text-[0.72rem] tracking-tight text-[var(--color-muted)]"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </StaggerChild>
            );
          })}
        </Stagger>

        <Reveal direction="up" delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-[0.95rem] font-medium text-[var(--color-foreground)] transition-colors hover:text-[var(--color-primary-dark)]"
            >
              View the complete therapeutic catalog
              <ArrowRight
                size={16}
                variant="Linear"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
