import { ArrowRight } from "iconsax-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const WeCareCallout: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5" direction="up">
            <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
              <span className="bg-primary h-1.5 w-1.5 rounded-full" />
              We care — it is in our name
            </span>
            <h2 className="tracking-display text-foreground mt-5 text-[32px] leading-[1.1] font-semibold sm:text-[42px] lg:text-[48px]">
              Behind every shipment is a patient.
            </h2>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal delay={0.08} direction="up">
              <p className="text-muted text-[18px] leading-[1.55]">
                Behind every shipment is a patient waiting for treatment. We
                take that seriously — sourcing hard-to-find and shortage
                medicines with the same rigour and compliance as any other
                product in our portfolio.
              </p>
            </Reveal>
            <Reveal delay={0.16} direction="up">
              <CommitmentQuote />
            </Reveal>
            <Reveal delay={0.24} direction="up">
              <Link
                className="group text-primary-dark hover:text-primary-hover mt-10 inline-flex items-center gap-2 text-[15px] font-medium transition-colors"
                href="/about"
                prefetch
              >
                Read more about us
                <ArrowRight
                  className="duration-normal transition-transform group-hover:translate-x-0.5"
                  size={16}
                  variant="Linear"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

const CommitmentQuote: React.FC = () => {
  return (
    <div className="relative mt-10">
      <span
        aria-hidden="true"
        className="border-primary absolute -top-2 -left-2 h-5 w-5 rounded-tl-xl border-t-2 border-l-2"
      />
      <span
        aria-hidden="true"
        className="border-accent absolute -right-2 -bottom-2 h-5 w-5 rounded-br-xl border-r-2 border-b-2"
      />
      <blockquote className="border-border border-l-primary shadow-hint relative overflow-hidden rounded-3xl border border-l-4 bg-white p-7 sm:p-8">
        <p className="text-foreground text-[20px] leading-[1.45] font-medium tracking-tight sm:text-[22px]">
          &ldquo;GDP is not just a regulatory requirement for us. It is how we
          protect the integrity of every medicine we handle, from source to
          delivery.&rdquo;
        </p>
        <footer className="text-subtle mt-5 text-[12px] font-medium tracking-[0.14em] uppercase">
          Our commitment
        </footer>
      </blockquote>
    </div>
  );
};

export default WeCareCallout;
