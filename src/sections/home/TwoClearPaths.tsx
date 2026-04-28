import { ArrowRight, Bag2, Buildings2 } from "iconsax-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerChild } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";

const PATHS = [
  {
    icon: Bag2,
    eyebrow: "Sourcing",
    title: "Looking to source products?",
    description:
      "Broad portfolio across multiple therapeutic areas — including specialty and shortage medicines.",
    href: "/contact?enquiry=sourcing",
    cta: "Send an enquiry",
  },
  {
    icon: Buildings2,
    eyebrow: "Partnership",
    title: "Looking for a distribution partner?",
    description:
      "EU-licensed, GDP-certified, IGJ-supervised — a qualified partner for manufacturers and MAHs.",
    href: "/contact?enquiry=partnership",
    cta: "Let’s talk",
  },
] as const;

const TwoClearPaths: React.FC = () => {
  return (
    <section className="bg-surface-1 relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <TwoClearPathsBackdrop />

        <Reveal direction="up">
          <SectionHeader
            description="Whether you are sourcing medicines or evaluating a distribution partner, we make the next step clear."
            eyebrow="Two clear paths"
            size="md"
            title="Pick the door that fits your role."
          />
        </Reveal>

        <Stagger
          as="ul"
          className="relative mt-14 grid gap-5 md:grid-cols-2 lg:gap-6"
          delayChildren={0.08}
          staggerChildren={0.06}
        >
          {PATHS.map((path, idx) => {
            const Icon = path.icon;
            const isPrimary = idx === 0;
            return (
              <StaggerChild key={path.eyebrow} as="li" direction="up">
                <Link
                  href={path.href}
                  className={cn(
                    "group duration-slow border-border hover:shadow-lift relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border bg-white p-7 transition-all",
                    isPrimary
                      ? "hover:border-primary/40"
                      : "hover:border-accent/40",
                  )}
                  prefetch
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
                    <div
                      className={cn(
                        "font-mono text-[10px] font-semibold tracking-[0.18em] uppercase",
                        isPrimary ? "text-primary-dark" : "text-accent",
                      )}
                    >
                      {path.eyebrow}
                    </div>
                    <h3 className="text-foreground mt-2 text-[18px] leading-tight font-semibold tracking-tight">
                      {path.title}
                    </h3>
                    <p className="text-muted mt-2 text-[14px] leading-relaxed">
                      {path.description}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "border-border mt-auto inline-flex items-center gap-2 border-t pt-4 text-[14px] font-medium",
                      isPrimary ? "text-primary-dark" : "text-accent",
                    )}
                  >
                    {path.cta}
                    <ArrowRight
                      className="duration-normal transition-transform group-hover:translate-x-0.5"
                      size={14}
                      variant="Linear"
                    />
                  </span>
                </Link>
              </StaggerChild>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
};

const TwoClearPathsBackdrop: React.FC = () => {
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

export default TwoClearPaths;
