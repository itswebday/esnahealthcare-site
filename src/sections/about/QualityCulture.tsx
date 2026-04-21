import { TickCircle } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const COMMITMENTS = [
  {
    title: "Quality Management System",
    description:
      "A documented QMS governs every process from supplier qualification to outbound dispatch. SOPs are version-controlled, reviewed, and auditable.",
  },
  {
    title: "Supplier & customer qualification",
    description:
      "Every trading partner is qualified against our SOPs (QA-014 suppliers, QA-015 customers) before the first transaction.",
  },
  {
    title: "Continuous improvement",
    description:
      "Deviations, CAPAs, and trend reviews feed into an annual management review. Nothing escapes the loop, and nothing is reviewed once and forgotten.",
  },
  {
    title: "Designated Responsible Persons",
    description:
      "The WDA names two Responsible Persons who sign off release decisions and liaise with authorities. Their names are public in the EudraGMDP register.",
  },
];

export function QualityCulture() {
  return (
    <section className="bg-[var(--color-surface-1)] py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="Quality culture"
            title="Compliance isn't an audit response."
            description="It is the way the work is done every day between audits. Four commitments that keep the standard high, predictably."
            size="md"
          />
        </Reveal>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:gap-4">
          {COMMITMENTS.map((c, i) => (
            <Reveal key={c.title} direction="up" delay={0.05 + i * 0.06}>
              <div className="flex h-full gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6">
                <TickCircle
                  size={24}
                  variant="Bold"
                  className="mt-0.5 shrink-0 text-[var(--color-primary)]"
                />
                <div>
                  <h3 className="text-[1.05rem] font-semibold tracking-[-0.012em] text-[var(--color-foreground)]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--color-muted)]">
                    {c.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
