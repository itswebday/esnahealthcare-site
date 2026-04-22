import { TickCircle } from "iconsax-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";

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

const QualityCulture: React.FC = () => {
  return (
    <section className="bg-surface-1 relative overflow-hidden rounded-[48px] py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <QualityBackdrop />

        <Reveal direction="up">
          <SectionHeader
            description="It is the way the work is done every day between audits. Four commitments that keep the standard high, predictably."
            eyebrow="Quality culture"
            size="md"
            title="Compliance isn't an audit response."
          />
        </Reveal>

        <div className="relative mt-14 grid gap-4 sm:grid-cols-2">
          {COMMITMENTS.map((commitment, idx) => {
            const isPrimary = idx % 2 === 0;
            return (
              <Reveal
                key={commitment.title}
                delay={0.05 + idx * 0.06}
                direction="up"
              >
                <article
                  className={cn(
                    "group duration-slow border-border hover:shadow-lift relative flex h-full gap-4 overflow-hidden rounded-2xl border bg-white p-6 transition-all",
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
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1",
                      isPrimary
                        ? "bg-primary-subtle text-primary-dark ring-primary/25"
                        : "bg-accent-subtle text-accent ring-accent/30",
                    )}
                  >
                    <TickCircle size={22} variant="Bold" />
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5">
                    <h3 className="text-foreground text-[17px] leading-tight font-semibold">
                      {commitment.title}
                    </h3>
                    <p className="text-muted text-[14px] leading-relaxed">
                      {commitment.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

const QualityBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-primary/5 absolute top-[20%] right-[-8%] h-[420px] w-[420px] rounded-full blur-[110px]" />
      <div className="bg-accent/5 absolute bottom-[10%] left-[-8%] h-[380px] w-[380px] rounded-full blur-[110px]" />
    </div>
  );
};

export default QualityCulture;
