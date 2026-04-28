import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const CatalogCta: React.FC = () => {
  return (
    <section className="relative bg-white py-4 sm:py-7 lg:py-8">
      <Container className="max-w-[1520px] px-0 sm:px-8 lg:px-10" size="xl">
        <div className="bg-primary relative overflow-hidden rounded-3xl px-6 py-16 sm:rounded-[40px] sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          <CatalogBackdrop />

          <Reveal direction="up">
            <div className="relative flex flex-col items-start gap-6">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-3 py-1 text-[12px] font-medium tracking-[0.14em] text-white uppercase ring-1 ring-white/20 sm:backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                For qualified buyers
              </span>
              <h2 className="tracking-display max-w-3xl text-[36px] leading-[1.05] font-semibold text-white sm:text-[48px] lg:text-[56px]">
                Need our pharmaceutical portfolio?
              </h2>
              <p className="max-w-xl text-[16px] leading-relaxed text-white/85">
                Our portfolio — branded, generic, OTC, specialty, and
                temperature-sensitive medicines across multiple therapeutic
                areas — is shared privately with qualified buyers after a brief
                qualification check.
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <Button
                  href="/contact?request=catalog"
                  size="lg"
                  variant="invert"
                  withArrow
                >
                  Request portfolio
                </Button>
                <Button href="/compliance" size="lg" variant="invert-outline">
                  Verify our licences
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
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
      <div className="absolute -top-40 -right-40 hidden h-[500px] w-[500px] rounded-full border-[40px] border-white/10 sm:block" />
      <div className="absolute -bottom-32 -left-20 hidden h-[360px] w-[360px] rounded-full border-[32px] border-white/10 sm:block" />
    </div>
  );
};

export default CatalogCta;
