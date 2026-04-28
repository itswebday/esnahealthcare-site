import { ArrowRight, Box, Buildings2 } from "iconsax-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const ServicesCtaBand: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <Reveal direction="up">
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            <Link
              href="/products#medical-devices"
              className="group border-border shadow-hint hover:border-primary/40 hover:shadow-card duration-slow flex h-full flex-col gap-5 overflow-hidden rounded-3xl border bg-white p-9 transition-all"
              prefetch
            >
              <span className="bg-primary-subtle text-primary inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                <Box size={22} variant="Bold" />
              </span>
              <span className="text-subtle font-mono text-[11px] font-semibold tracking-[0.22em] uppercase">
                Medical Devices &amp; Diagnostics
              </span>
              <h3 className="tracking-display text-foreground text-[24px] leading-tight font-semibold sm:text-[26px]">
                Sourced under the same standards.
              </h3>
              <p className="text-muted text-[15px] leading-relaxed">
                Diagnostics, wound care, diabetes care, clinical nutrition and
                self-diagnostics — sourced through established global partner
                networks.
              </p>
              <span className="text-primary-dark group-hover:text-primary mt-auto inline-flex items-center gap-2 text-[14px] font-medium">
                Explore devices
                <ArrowRight
                  className="duration-normal transition-transform group-hover:translate-x-0.5"
                  size={16}
                  variant="Linear"
                />
              </span>
            </Link>

            <Link
              href="/contact?enquiry=partnership"
              className="group bg-surface-invert text-on-invert hover:shadow-lift duration-slow relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl p-9 transition-all"
              prefetch
            >
              <span
                aria-hidden="true"
                className="bg-primary/15 pointer-events-none absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full blur-[140px]"
              />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur">
                <Buildings2 size={22} variant="Bold" />
              </span>
              <span className="text-on-invert-muted font-mono text-[11px] font-semibold tracking-[0.22em] uppercase">
                For Manufacturers &amp; MAHs
              </span>
              <h3 className="tracking-display relative text-[24px] leading-tight font-semibold text-white sm:text-[26px]">
                Looking for an EU-licensed distribution partner?
              </h3>
              <p className="text-on-invert-muted relative text-[15px] leading-relaxed">
                Esna Care offers compliant, qualified, and documented
                distribution across European and international markets — with
                full GDP oversight and a formal partner qualification process.
              </p>
              <span className="relative mt-auto inline-flex items-center gap-2 text-[14px] font-medium text-white">
                Let’s talk
                <ArrowRight
                  className="duration-normal transition-transform group-hover:translate-x-0.5"
                  size={16}
                  variant="Linear"
                />
              </span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default ServicesCtaBand;
