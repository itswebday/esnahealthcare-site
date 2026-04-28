import ContactForm from "@/components/forms/ContactForm";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const OfferForm: React.FC = () => {
  return (
    <section
      id="offer-form"
      className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <Container className="relative" size="lg">
        <Reveal direction="up">
          <div className="border-border shadow-card relative overflow-hidden rounded-3xl border bg-white p-8 sm:p-10 lg:p-14">
            <span
              aria-hidden="true"
              className="from-primary to-primary-dark pointer-events-none absolute top-0 right-0 h-24 w-24 rounded-bl-3xl bg-linear-to-br"
            />
            <span
              aria-hidden="true"
              className="from-accent to-accent-dark pointer-events-none absolute bottom-0 left-0 h-16 w-16 rounded-tr-3xl bg-linear-to-tr"
            />

            <div className="relative">
              <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
                <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                Supplier offer form
              </span>
              <h2 className="tracking-display text-foreground mt-4 text-[28px] leading-[1.12] font-semibold sm:text-[36px]">
                Offer your stock to Esna Care.
              </h2>
              <p className="text-muted mt-3 max-w-2xl text-[16px] leading-relaxed">
                Fill in the details below and attach your stock list. Our QA
                team will review and respond — typically within one business
                day.
              </p>
              <div className="mt-10">
                <ContactForm source="we-buy-medicines" variant="supplier" />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
export default OfferForm;
