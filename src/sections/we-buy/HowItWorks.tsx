import { Bill, DocumentText, ShieldTick } from "iconsax-react";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerChild } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";

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

const HowItWorks: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <HowItWorksBackdrop />

      <Container className="relative" size="xl">
        <Reveal direction="up">
          <SectionHeader
            description="From first email to confirmed purchase, the path is predictable and documented."
            eyebrow="How it works"
            size="md"
            title="Three steps — no surprises."
          />
        </Reveal>

        <Stagger
          as="ol"
          className="mt-14 grid gap-5 lg:grid-cols-3"
          delayChildren={0.08}
          staggerChildren={0.1}
        >
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isAccent = idx % 2 === 1;
            const cornerClass = isAccent
              ? "bg-linear-to-br from-accent to-accent-dark"
              : "bg-linear-to-br from-primary to-primary-dark";
            const hoverClass = isAccent
              ? "hover:border-accent/40 hover:shadow-accent/10"
              : "hover:border-primary/40 hover:shadow-primary/10";
            return (
              <StaggerChild key={step.step} as="article">
                <div
                  className={cn(
                    "group relative flex h-full flex-col gap-5",
                    "overflow-hidden rounded-3xl p-7",
                    "border-border shadow-hint border bg-white",
                    "duration-slow transition-all hover:shadow-xl",
                    hoverClass,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute top-0 right-0",
                      "h-20 w-20 rounded-bl-3xl",
                      cornerClass,
                    )}
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-5 right-5 text-white"
                  >
                    <Icon size={22} variant="Bold" />
                  </span>

                  <div className="mt-14">
                    <span className="text-subtle font-mono text-[13px]">
                      {step.step}
                    </span>
                    <h3 className="text-foreground mt-2 text-[18px] font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-muted mt-2 text-[14px] leading-relaxed">
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
};

const HowItWorksBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-primary/10 absolute top-[20%] right-[-10%] h-[420px] w-[420px] rounded-full blur-[110px]" />
    </div>
  );
};

export default HowItWorks;
