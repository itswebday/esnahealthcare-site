import { DocumentDownload, DocumentText } from "iconsax-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerChild } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

const QualificationForms: React.FC = () => {
  return (
    <section className="bg-surface-1 relative overflow-hidden rounded-[48px] py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <QualificationBackdrop />

        <Reveal direction="up">
          <SectionHeader
            description="The external versions of our Standard Operating Procedures for qualifying drug suppliers and customers. Download, review, and share with your compliance team."
            eyebrow="Qualification SOPs"
            size="md"
            title="Supplier and customer qualification, in your hands."
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
              ? "bg-linear-to-br from-accent to-accent-dark"
              : "bg-linear-to-br from-primary to-primary-dark";
            const hoverClass = isAccent
              ? "hover:border-accent/40 hover:shadow-accent/10"
              : "hover:border-primary/40 hover:shadow-primary/10";
            const linkColorClass = isAccent
              ? "text-accent"
              : "text-primary-dark";

            return (
              <StaggerChild key={sop.title} as="li">
                <Link
                  className={cn(
                    "group relative flex h-full flex-col gap-6",
                    "overflow-hidden rounded-3xl p-8",
                    "border-border shadow-hint border bg-white",
                    "duration-slow transition-all hover:shadow-xl",
                    hoverClass,
                  )}
                  href={sop.href}
                  rel="noopener noreferrer"
                  target="_blank"
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
                    <DocumentText size={22} variant="Bold" />
                  </span>

                  <div className="mt-14 flex items-start justify-between">
                    <span className="bg-surface-2 text-subtle inline-flex h-7 items-center rounded-lg px-3 font-mono text-[11px] tracking-[0.14em] uppercase">
                      {sop.type}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-foreground text-[22px] leading-tight font-semibold tracking-tight">
                      {sop.title}
                    </h3>
                    <p className="text-muted mt-3 text-[15px] leading-relaxed">
                      {sop.description}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "mt-auto inline-flex items-center gap-2",
                      "text-[14px] font-medium",
                      linkColorClass,
                    )}
                  >
                    <DocumentDownload size={16} variant="Linear" />
                    Download external version
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

const QualificationBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-primary/10 absolute top-[20%] right-[-8%] h-[420px] w-[420px] rounded-full blur-[110px]" />
    </div>
  );
};

export default QualificationForms;
