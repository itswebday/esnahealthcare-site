import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const CatalogCta: React.FC = () => {
  return (
    <section className="bg-primary relative overflow-hidden rounded-3xl py-24 sm:py-28 lg:py-32">
      <Container size="xl">
        <CatalogBackdrop />

        <Reveal direction="up">
          <div className="relative flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-3 py-1 text-[12px] font-medium tracking-[0.14em] text-white uppercase ring-1 ring-white/20 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              For qualified distributors
            </span>
            <h2 className="tracking-display max-w-3xl text-[36px] leading-[1.05] font-semibold text-white sm:text-[48px] lg:text-[56px]">
              Need our full product catalog?
            </h2>
            <p className="max-w-xl text-[16px] leading-relaxed text-white/85">
              The complete catalog with 200+ products, pricing, and current
              availability is shared upon request with qualified healthcare
              distributors. Our commercial team replies within one business day.
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Button
                href="/contact?request=catalog"
                size="lg"
                variant="invert"
                withArrow
              >
                Request Full Catalog
              </Button>
              <Button href="/compliance" size="lg" variant="invert-outline">
                Verify our licences
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

const CatalogBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-0"
    >
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full border-[40px] border-white/10" />
      <div className="absolute -bottom-32 -left-20 h-[360px] w-[360px] rounded-full border-[32px] border-white/10" />
    </div>
  );
};

export default CatalogCta;
