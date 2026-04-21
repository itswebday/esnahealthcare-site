import { Book, ShieldTick, Hospital, Verify } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, Stagger, StaggerChild } from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

const ICONS = [Book, ShieldTick, Hospital, Verify];

export function RegulatoryFramework() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="Regulatory framework"
            title="The rulebook we operate under."
            description="Four instruments shape how we procure, store, and distribute medicinal products. We refer to them directly rather than summarising them."
            size="md"
          />
        </Reveal>

        <Stagger
          as="ul"
          staggerChildren={0.07}
          delayChildren={0.08}
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SITE.regulatoryFramework.map((item, idx) => {
            const Icon = ICONS[idx] ?? Book;
            return (
              <StaggerChild key={item} as="li">
                <div className="flex h-full flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6">
                  <Icon
                    size={22}
                    variant="Linear"
                    className="text-[var(--color-accent)]"
                  />
                  <p className="text-[0.95rem] leading-relaxed text-[var(--color-foreground)]">
                    {item}
                  </p>
                </div>
              </StaggerChild>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
