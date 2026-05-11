import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const CatalogCta: React.FC = () => {
  return (
    <section className="relative bg-white py-4 sm:py-7 lg:py-8">
      <Container className="max-w-[1520px] px-4 sm:px-8 lg:px-10" size="xl">
        <div className="bg-primary relative rounded-3xl px-6 py-16 sm:rounded-[40px] sm:px-12 sm:py-20 lg:px-16 lg:py-24">
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
                  hasArrow
                >
                  Request portfolio
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default CatalogCta;
