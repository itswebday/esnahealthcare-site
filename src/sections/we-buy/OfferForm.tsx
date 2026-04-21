import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";

export function OfferForm() {
  return (
    <section id="offer-form" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <Container size="lg">
        <Reveal direction="up">
          <div className="rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)] sm:p-10 lg:p-14">
            <span className="inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
              <span className="h-px w-6 bg-[var(--color-primary)]" />
              Supplier offer form
            </span>
            <h2 className="mt-4 text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.02em] text-[var(--color-foreground)] sm:text-[2.25rem]">
              Offer your stock to Esna Care.
            </h2>
            <p className="mt-3 max-w-2xl text-[1rem] leading-relaxed text-[var(--color-muted)]">
              Fill in the details below and attach your stock list. Our QA team will
              review and respond — typically within one business day.
            </p>
            <div className="mt-10">
              <ContactForm variant="supplier" source="we-buy-medicines" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
