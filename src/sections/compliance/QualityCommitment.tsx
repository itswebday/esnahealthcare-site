import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const QualityCommitment: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <Reveal direction="up">
          <div className="border-border shadow-card relative overflow-hidden rounded-3xl border bg-white p-10 sm:p-14 lg:p-16">
            <QualityCommitmentBackdrop />

            <div className="relative max-w-3xl">
              <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
                <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                Our quality commitment
              </span>
              <h2 className="tracking-display text-foreground mt-5 text-[32px] leading-[1.1] font-semibold sm:text-[40px]">
                Continuous compliance, not an annual event.
              </h2>
              <p className="text-muted mt-5 text-[17px] leading-[1.6]">
                Our Quality Management System is documented, trained, and
                reviewed on a defined cadence. Deviations, CAPAs, and supplier
                qualification outcomes are captured and analysed; internal
                audits surface gaps before external inspections do. Regulators —
                including the Dutch Health and Youth Care Inspectorate (IGJ) —
                conduct regular inspections, and our approach is to welcome
                them, not prepare for them.
              </p>
              <p className="text-muted mt-5 text-[17px] leading-[1.6]">
                The result is a distribution operation where every batch has a
                traceable history, every decision is documented, and every
                commitment we make to a partner is backed by a system designed
                to keep it.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

const QualityCommitmentBackdrop: React.FC = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="bg-primary-subtle absolute -top-32 -right-32 h-[360px] w-[360px] rounded-full opacity-80 blur-3xl" />
      <div className="bg-accent-subtle absolute -bottom-32 -left-32 h-[360px] w-[360px] rounded-full opacity-80 blur-3xl" />
    </div>
  );
};

export default QualityCommitment;
