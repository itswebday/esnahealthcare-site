import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

const PharmaBrands: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <Container size="lg">
        <Reveal direction="up">
          <div className="border-border rounded-3xl border bg-white p-8 sm:p-10">
            <div className="text-primary-dark text-[12px] font-medium tracking-[0.14em] uppercase">
              Brands within our sourced portfolio — Pharmaceuticals
            </div>
            <p className="text-foreground mt-4 max-w-3xl text-[16px] leading-relaxed">
              {SITE.brands.disclaimerPrefix}{" "}
              <span className="font-medium">
                {SITE.brands.pharmaceuticals.join(", ")}
              </span>{" "}
              and others — {SITE.brands.disclaimerSuffix}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default PharmaBrands;
