import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Crown,
  Drop,
  Health,
  Heart,
  Hospital,
  Microscope,
  ShieldTick,
} from "iconsax-react";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerChild } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { THERAPEUTIC_AREAS, type TherapeuticArea } from "@/lib/services";

type TherapeuticAreasGridProps = {
  showExamples?: boolean;
};

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

const TherapeuticAreasGrid: React.FC<TherapeuticAreasGridProps> = ({
  showExamples = true,
}) => {
  return (
    <section className="bg-surface-1 relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <Container size="xl">
        <TherapeuticBackdrop />

        <Reveal direction="up">
          <SectionHeader
            description="From oncology and rare diseases to hospital care and biologics — handled under GDP by a dedicated commercial and quality team."
            eyebrow="Therapeutic areas"
            size="lg"
            title="200+ products across major therapeutic categories."
          />
        </Reveal>

        <Stagger
          as="ul"
          className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          delayChildren={0.08}
          staggerChildren={0.05}
        >
          {THERAPEUTIC_AREAS.map((area, idx) => {
            const Icon = ICON_MAP[area.icon] ?? Health;
            const isPrimary = idx % 2 === 0;
            return (
              <StaggerChild key={area.slug} as="li" direction="up">
                <article
                  className={cn(
                    "group duration-slow border-border hover:shadow-lift relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border bg-white p-6 transition-all",
                    isPrimary
                      ? "hover:border-primary/40"
                      : "hover:border-accent/40",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-y-6 left-0 w-[3px] rounded-r-full",
                      isPrimary ? "bg-primary" : "bg-accent",
                    )}
                  />
                  <div className="flex items-start justify-between">
                    <div
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1",
                        isPrimary
                          ? "bg-primary-subtle text-primary-dark ring-primary/25"
                          : "bg-accent-subtle text-accent ring-accent/30",
                      )}
                    >
                      <Icon size={22} variant="Bold" />
                    </div>
                    <span className="border-border text-subtle inline-flex h-7 min-w-7 items-center justify-center rounded-lg border bg-white px-2 font-mono text-[10px] font-semibold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-foreground text-[17px] leading-tight font-semibold">
                      {area.title}
                    </h3>
                    <p className="text-muted mt-2 text-[13px] leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                  {showExamples && area.examples.length > 0 && (
                    <div className="border-border mt-auto border-t pt-3">
                      <div className="text-subtle font-mono text-[10px] font-medium tracking-[0.14em] uppercase">
                        Example products
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {area.examples.slice(0, 3).map((ex) => (
                          <span
                            key={ex}
                            className="border-border bg-surface-1 text-muted rounded-md border px-2 py-0.5 font-mono text-[11px] tracking-tight"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              </StaggerChild>
            );
          })}
        </Stagger>

        <Reveal delay={0.1} direction="up">
          <div className="relative mt-12 flex justify-center">
            <Link
              className="group text-foreground hover:text-primary-dark inline-flex items-center gap-2 text-[15px] font-medium transition-colors"
              href="/products"
            >
              View the complete therapeutic catalog
              <ArrowRight
                className="duration-normal transition-transform group-hover:translate-x-0.5"
                size={16}
                variant="Linear"
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

const TherapeuticBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-primary/5 absolute top-[20%] right-[-5%] h-[420px] w-[420px] rounded-full blur-[110px]" />
      <div className="bg-accent/5 absolute bottom-[10%] left-[-8%] h-[380px] w-[380px] rounded-full blur-[110px]" />
    </div>
  );
};

export default TherapeuticAreasGrid;
