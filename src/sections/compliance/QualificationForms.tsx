import { DocumentText } from "iconsax-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerChild } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

const QualificationForms: React.FC = () => {
  return (
    <section className="bg-surface-1 relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            description="All trading partners — suppliers and customers — undergo a formal qualification process before any first transaction."
            eyebrow="Qualification"
            size="md"
            title="Standard operating procedures, shared privately."
          />
        </Reveal>

        <Stagger
          as="ul"
          className="relative mt-12 grid gap-5 lg:grid-cols-2"
          delayChildren={0.08}
          staggerChildren={0.08}
        >
          {SITE.qualificationSops.map((sop, idx) => {
            const isAccent = idx % 2 === 1;
            const cornerClass = isAccent
              ? "from-accent to-accent-dark"
              : "from-primary to-primary-dark";
            return (
              <StaggerChild key={sop.title} as="li">
                <div className="border-border shadow-hint relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border bg-white p-8">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute top-0 right-0",
                      "flex h-16 w-16 items-center justify-center",
                      "rounded-bl-2xl bg-linear-to-br text-white",
                      cornerClass,
                    )}
                  >
                    <DocumentText size={22} variant="Bold" />
                  </span>

                  <div className="mt-12">
                    <h3 className="text-foreground text-[22px] leading-tight font-semibold tracking-tight">
                      {sop.title}
                    </h3>
                    <p className="text-muted mt-3 text-[15px] leading-relaxed">
                      {sop.description}
                    </p>
                  </div>
                </div>
              </StaggerChild>
            );
          })}
        </Stagger>

        <Reveal delay={0.24} direction="up">
          <div className="mt-10 flex justify-center">
            <Button href="/contact" size="lg" variant="primary" hasArrow>
              Request Compliance Package
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
export default QualificationForms;
