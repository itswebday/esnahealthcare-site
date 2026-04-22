import { Book, Hospital, ShieldTick, Verify } from "iconsax-react";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerChild } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

const ICONS = [Book, ShieldTick, Hospital, Verify];

const RegulatoryFramework: React.FC = () => {
  return (
    <section className="bg-surface-1 relative overflow-hidden rounded-[48px] py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <RegulatoryBackdrop />

        <Reveal direction="up">
          <SectionHeader
            description="Four instruments shape how we procure, store, and distribute medicinal products. We refer to them directly rather than summarising them."
            eyebrow="Regulatory framework"
            size="md"
            title="The rulebook we operate under."
          />
        </Reveal>

        <Stagger
          as="ul"
          className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          delayChildren={0.08}
          staggerChildren={0.07}
        >
          {SITE.regulatoryFramework.map((item, idx) => {
            const Icon = ICONS[idx] ?? Book;
            const isPrimary = idx % 2 === 0;
            return (
              <StaggerChild key={item} as="li">
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
                  <p className="text-foreground text-[14px] leading-relaxed">
                    {item}
                  </p>
                </article>
              </StaggerChild>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
};

const RegulatoryBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-primary/5 absolute top-[30%] left-[-10%] h-[420px] w-[420px] rounded-full blur-[110px]" />
      <div className="bg-accent/5 absolute right-[-8%] bottom-[10%] h-[380px] w-[380px] rounded-full blur-[110px]" />
    </div>
  );
};

export default RegulatoryFramework;
