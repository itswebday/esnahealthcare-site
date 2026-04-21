import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function QualityCommitment() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-white p-10 sm:p-14 lg:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-[360px] w-[360px] rounded-full bg-[var(--color-primary-subtle)] opacity-80 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-32 -bottom-32 h-[360px] w-[360px] rounded-full bg-[var(--color-accent-subtle)] opacity-80 blur-3xl"
            />
            <div className="relative max-w-3xl">
              <span className="inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
                <span className="h-px w-6 bg-[var(--color-primary)]" />
                Our quality commitment
              </span>
              <h2 className="mt-5 text-[2rem] font-semibold leading-[1.1] tracking-[var(--tracking-display)] text-[var(--color-foreground)] sm:text-[2.5rem]">
                Continuous compliance, not an annual event.
              </h2>
              <p className="mt-5 text-[1.075rem] leading-[1.6] text-[var(--color-muted)]">
                Our Quality Management System is documented, trained, and reviewed on
                a defined cadence. Deviations, CAPAs, and supplier qualification
                outcomes are captured and analysed; internal audits surface gaps
                before external inspections do. Regulators — including the Dutch
                Health and Youth Care Inspectorate (IGJ) — conduct regular
                inspections, and our approach is to welcome them, not prepare for
                them.
              </p>
              <p className="mt-5 text-[1.075rem] leading-[1.6] text-[var(--color-muted)]">
                The result is a distribution operation where every batch has
                a traceable history, every decision is documented, and every
                commitment we make to a partner is backed by a system designed to
                keep it.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
