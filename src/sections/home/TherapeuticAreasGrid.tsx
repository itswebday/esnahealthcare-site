import {
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

const TherapeuticAreasGrid: React.FC = () => {
  return (
    <section className="bg-surface-1 relative py-24 sm:py-28 lg:py-32">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            description="Eight therapeutic areas in our active portfolio — from oncology and rare diseases to hospital care and biologics."
            eyebrow="Therapeutic areas"
            size="md"
            title="Eight therapeutic areas across the portfolio."
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
            return (
              <StaggerChild key={area.slug} as="li" direction="up">
                <article className="border-border shadow-hint hover:border-primary/40 hover:shadow-card duration-slow flex h-full flex-col gap-4 rounded-2xl border bg-white p-6 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="bg-primary-subtle text-primary ring-primary/25 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1">
                      <Icon size={22} variant="Bold" />
                    </div>
                    <span className="border-border text-subtle inline-flex h-7 min-w-7 items-center justify-center rounded-lg border bg-white px-2 font-mono text-[10px] font-semibold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3
                      className={cn(
                        "text-foreground text-[17px] leading-tight font-semibold",
                      )}
                    >
                      {area.title}
                    </h3>
                    <p className="text-muted mt-2 text-[13px] leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </article>
              </StaggerChild>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
};

export default TherapeuticAreasGrid;
