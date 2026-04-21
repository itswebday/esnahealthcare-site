import Link from "next/link";
import { ArrowRight, Box, Global } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesCtaBand() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <Reveal direction="up">
          <div className="grid gap-4 lg:grid-cols-2">
            <Link
              href="/products#medical-devices"
              className="group relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-white p-10 transition-all duration-[var(--duration-slow)] hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-lift)]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--color-primary-subtle)] opacity-70 blur-3xl"
              />
              <div className="relative">
                <Box
                  size={28}
                  variant="Linear"
                  className="text-[var(--color-primary-dark)]"
                />
                <h3 className="mt-6 text-[1.6rem] font-semibold tracking-[-0.016em] text-[var(--color-foreground)]">
                  Medical devices &amp; diagnostics
                </h3>
                <p className="mt-3 max-w-md text-[1rem] leading-relaxed text-[var(--color-muted)]">
                  Beyond pharmaceuticals: a curated range of medical devices and
                  diagnostics supplied through registered distribution partners.
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary-dark)]">
                  Explore devices
                  <ArrowRight
                    size={14}
                    variant="Linear"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </Link>

            <Link
              href="/we-buy-medicines"
              className="group relative overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--color-surface-invert)] p-10 text-[var(--color-on-invert)] transition-all duration-[var(--duration-slow)] hover:shadow-[var(--shadow-lift)]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-accent)] opacity-25 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-[var(--color-primary)] opacity-20 blur-3xl"
              />
              <div className="relative">
                <Global size={28} variant="Linear" className="text-white/80" />
                <h3 className="mt-6 text-[1.6rem] font-semibold tracking-[-0.016em] text-white">
                  We buy medicines
                </h3>
                <p className="mt-3 max-w-md text-[1rem] leading-relaxed text-[var(--color-on-invert-muted)]">
                  Suppliers with EU-sourced stock, full documentation, and
                  appropriate shelf life are invited to submit an offer.
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                  Submit an offer
                  <ArrowRight
                    size={14}
                    variant="Linear"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
