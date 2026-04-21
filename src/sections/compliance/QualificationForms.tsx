import Link from "next/link";
import { DocumentText, DocumentDownload } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, Stagger, StaggerChild } from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

export function QualificationForms() {
  return (
    <section className="bg-[var(--color-surface-1)] py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="Qualification SOPs"
            title="Supplier and customer qualification, in your hands."
            description="The external versions of our Standard Operating Procedures for qualifying drug suppliers and customers. Download, review, and share with your compliance team."
            size="md"
          />
        </Reveal>

        <Stagger
          as="ul"
          staggerChildren={0.08}
          delayChildren={0.08}
          className="mt-12 grid gap-4 lg:grid-cols-2"
        >
          {SITE.qualificationSops.map((sop) => (
            <StaggerChild key={sop.title} as="li">
              <Link
                href={sop.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-6 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-8 transition-all duration-[var(--duration-slow)] hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-lift)]"
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary-subtle)] text-[var(--color-primary-dark)]">
                    <DocumentText size={22} variant="Linear" />
                  </div>
                  <span className="inline-flex h-7 items-center rounded-full bg-[var(--color-surface-2)] px-3 text-[0.72rem] font-mono uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                    {sop.type}
                  </span>
                </div>
                <div>
                  <h3 className="text-[1.35rem] font-semibold tracking-[-0.016em] text-[var(--color-foreground)]">
                    {sop.title}
                  </h3>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-[var(--color-muted)]">
                    {sop.description}
                  </p>
                </div>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary-dark)]">
                  <DocumentDownload size={16} variant="Linear" />
                  Download external version
                </span>
              </Link>
            </StaggerChild>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
