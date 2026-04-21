import { DocumentText, ShieldTick, Bill } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, Stagger, StaggerChild } from "@/components/ui/Reveal";

const STEPS = [
  {
    step: "01",
    title: "Submit your offer",
    description:
      "Share your stock: product names, batch numbers, remaining shelf life, storage conditions, and quantities available. A spreadsheet attachment is welcome.",
    icon: DocumentText,
  },
  {
    step: "02",
    title: "Qualification check",
    description:
      "Our QA team reviews the offer against our Supplier Qualification SOP (QA-014) and requests any missing documentation.",
    icon: ShieldTick,
  },
  {
    step: "03",
    title: "Purchasing decision",
    description:
      "If the offer matches current demand and passes qualification, our commercial team confirms terms, pricing, and logistics.",
    icon: Bill,
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="How it works"
            title="Three steps — no surprises."
            description="From first email to confirmed purchase, the path is predictable and documented."
            size="md"
          />
        </Reveal>

        <Stagger
          as="ol"
          staggerChildren={0.1}
          delayChildren={0.08}
          className="mt-14 grid gap-3 lg:grid-cols-3 lg:gap-4"
        >
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerChild key={step.step} as="article">
                <div className="relative flex h-full flex-col gap-5 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-7">
                  <div className="flex items-start justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary-subtle)] text-[var(--color-primary-dark)]">
                      <Icon size={22} variant="Linear" />
                    </div>
                    <span className="font-mono text-[1.1rem] text-[var(--color-subtle)]">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[1.15rem] font-semibold tracking-[-0.014em] text-[var(--color-foreground)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--color-muted)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerChild>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
