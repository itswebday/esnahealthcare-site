import Link from "next/link";
import { ArrowRight } from "iconsax-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

const WhoWeAre: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <WhoWeAreBackdrop />

      <Container className="relative" size="xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5" direction="up">
            <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
              <span className="bg-primary h-1.5 w-1.5 rounded-full" />
              Who we are
            </span>
            <h2 className="tracking-display text-foreground mt-5 text-[32px] leading-[1.1] font-semibold sm:text-[42px] lg:text-[48px]">
              An EU-licensed wholesaler, built around compliance.
            </h2>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal delay={0.08} direction="up">
              <p className="text-muted text-[18px] leading-[1.55]">
                {SITE.name} is a Dutch EU-licensed pharmaceutical wholesaler,
                specialising in the sourcing and distribution of high-quality
                branded and generic medicines. Through a trusted international
                supplier and partner network, we provide licensed pharmaceutical
                supply to wholesalers, distributors, hospitals, and pharmacies
                worldwide — including procurement, supply, export, and
                temperature-controlled handling of cold-chain and ambient
                medicinal products.
              </p>
            </Reveal>
            <Reveal delay={0.16} direction="up">
              <MissionQuote />
            </Reveal>
            <Reveal delay={0.24} direction="up">
              <Link
                className="group text-primary-dark hover:text-primary-hover mt-10 inline-flex items-center gap-2 text-[15px] font-medium transition-colors"
                href="/about"
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

const WhoWeAreBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-primary/15 absolute top-[20%] right-[-10%] h-[480px] w-[480px] rounded-full blur-[110px]" />
    </div>
  );
};

const MissionQuote: React.FC = () => {
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
          &ldquo;{SITE.mission}&rdquo;
        </p>
        <footer className="text-subtle mt-5 text-[12px] font-medium tracking-[0.14em] uppercase">
          Our mission
        </footer>
      </blockquote>
    </div>
  );
};

export default WhoWeAre;
