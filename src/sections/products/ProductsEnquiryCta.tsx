import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const ProductsEnquiryCta: React.FC = () => {
  return (
    <section className="relative bg-white py-4 sm:py-7 lg:py-8">
      <Container className="max-w-[1520px] px-0 sm:px-8 lg:px-10" size="xl">
        <div className="bg-surface-1 relative overflow-hidden rounded-3xl px-6 py-12 sm:rounded-[40px] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <Reveal direction="up">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
              <div className="inline-flex items-center gap-2">
                <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                <span className="text-subtle font-mono text-[11px] font-semibold tracking-[0.28em] uppercase">
                  For qualified buyers
                </span>
              </div>
              <p className="text-foreground text-[22px] leading-[1.45] font-medium tracking-tight sm:text-[24px] lg:text-[26px]">
                We supply a broad range of pharmaceutical products and medical
                devices across multiple therapeutic areas — including branded,
                generic, specialty, orphan, and temperature-sensitive medicines.
              </p>
              <p className="text-muted text-[16px] leading-[1.6]">
                To discuss your specific requirements, contact our team
                directly.
              </p>
              <Button href="/contact" size="lg" variant="primary" withArrow>
                Send an Enquiry
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default ProductsEnquiryCta;
