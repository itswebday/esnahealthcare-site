import Link from "next/link";
import { ArrowRight, Box, Global } from "iconsax-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const ServicesCtaBand: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <ServicesCtaBackdrop />

      <Container className="relative" size="xl">
        <Reveal direction="up">
          <div className="grid gap-5 lg:grid-cols-2">
            <Link
              className="group duration-slow border-border shadow-hint hover:border-primary/40 hover:shadow-primary/10 relative overflow-hidden rounded-3xl border bg-white p-10 transition-all hover:shadow-xl"
              href="/products#medical-devices"
            >
              <span
                aria-hidden="true"
                className="from-primary to-primary-dark pointer-events-none absolute top-0 right-0 h-24 w-24 rounded-bl-3xl bg-linear-to-br"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-6 right-6 text-white"
              >
                <Box size={26} variant="Bold" />
              </span>

              <div className="relative mt-16">
                <h3 className="tracking-display text-foreground text-[26px] leading-tight font-semibold">
                  Medical devices &amp; diagnostics
                </h3>
                <p className="text-muted mt-3 max-w-md text-[15px] leading-relaxed">
                  Beyond pharmaceuticals: a curated range of medical devices and
                  diagnostics supplied through registered distribution partners.
                </p>
                <span className="text-primary-dark mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium">
                  Explore devices
                  <ArrowRight
                    className="duration-normal transition-transform group-hover:translate-x-0.5"
                    size={14}
                    variant="Linear"
                  />
                </span>
              </div>
            </Link>

            <Link
              className="group duration-slow bg-surface-invert text-on-invert hover:shadow-primary/20 relative overflow-hidden rounded-3xl p-10 transition-all hover:shadow-xl"
              href="/we-buy-medicines"
            >
              <span
                aria-hidden="true"
                className="bg-accent pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
              />
              <span
                aria-hidden="true"
                className="bg-primary pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full opacity-20 blur-3xl"
              />
              <div className="relative">
                <div className="bg-primary/15 text-primary ring-primary/30 relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ring-1">
                  <Global size={26} variant="Bold" />
                </div>
                <h3 className="tracking-display mt-6 text-[26px] leading-tight font-semibold text-white">
                  We buy medicines
                </h3>
                <p className="text-on-invert-muted mt-3 max-w-md text-[15px] leading-relaxed">
                  Suppliers with EU-sourced stock, full documentation, and
                  appropriate shelf life are invited to submit an offer.
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-white">
                  Submit an offer
                  <ArrowRight
                    className="duration-normal transition-transform group-hover:translate-x-0.5"
                    size={14}
                    variant="Linear"
                  />
                </span>
              </div>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

const ServicesCtaBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-primary/10 absolute top-[30%] right-[-10%] h-[420px] w-[420px] rounded-full blur-[110px]" />
    </div>
  );
};

export default ServicesCtaBand;
