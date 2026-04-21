import { Box, ShieldTick } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerChild } from "@/components/ui/Reveal";
import {
  MEDICAL_DEVICE_BRANDS,
  MEDICAL_DEVICE_CATEGORIES,
  MEDICAL_DEVICE_DISCLAIMER,
} from "@/lib/services";

export function MedicalDevices() {
  return (
    <section
      id="medical-devices"
      className="scroll-mt-24 bg-[var(--color-surface-1)] py-24 sm:py-28 lg:py-32"
    >
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="Medical devices & diagnostics"
            title="Reliable sourcing of high-quality medical devices through our global network."
            size="md"
          />
        </Reveal>

        <Reveal direction="up" delay={0.06}>
          <p className="mt-6 max-w-3xl text-[1.05rem] leading-relaxed text-[var(--color-muted)]">
            Esna Care is an international pharmaceutical wholesaler specializing
            in the global distribution of medicinal products. In addition to our
            core pharmaceutical activities, we provide access to a carefully
            selected range of medical devices and diagnostic solutions through
            our trusted global partner network.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.12}>
          <div className="mt-14">
            <div className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Product categories
            </div>
            <Stagger
              as="ul"
              staggerChildren={0.05}
              className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
            >
              {MEDICAL_DEVICE_CATEGORIES.map((category) => (
                <StaggerChild key={category} as="li">
                  <div className="group flex h-full flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-5 transition-colors duration-[var(--duration-slow)] hover:border-[var(--color-accent-subtle-strong)]">
                    <Box
                      size={20}
                      variant="Linear"
                      className="text-[var(--color-accent)]"
                    />
                    <span className="text-[1rem] font-medium tracking-[-0.01em] text-[var(--color-foreground)]">
                      {category}
                    </span>
                  </div>
                </StaggerChild>
              ))}
            </Stagger>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.18}>
          <div className="mt-14">
            <div className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Brands we source from
            </div>
            <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-[var(--color-muted)]">
              Through our established global network, Esna Care sources products
              from leading international manufacturers and brands. We are able
              to supply products originating from, but not limited to, the
              following companies:
            </p>
            <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-5">
              {MEDICAL_DEVICE_BRANDS.map((brand) => (
                <div
                  key={brand}
                  className="flex h-14 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-4 text-center text-[0.9rem] font-medium tracking-[-0.01em] text-[var(--color-foreground)] transition-colors hover:border-[var(--color-border-strong)]"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.24}>
          <div className="mt-10 flex items-start gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-5 text-[0.9rem] leading-relaxed text-[var(--color-muted)]">
            <ShieldTick
              size={20}
              variant="Linear"
              className="mt-0.5 shrink-0 text-[var(--color-accent)]"
            />
            <p>
              <span className="font-medium text-[var(--color-foreground)]">
                Disclaimer:
              </span>{" "}
              {MEDICAL_DEVICE_DISCLAIMER}
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <div className="mt-12 flex flex-col items-start gap-4 rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-white p-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-10">
            <div>
              <div className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Looking for a specific product?
              </div>
              <h3 className="mt-2 text-[1.4rem] font-semibold leading-[1.15] tracking-[-0.018em] text-[var(--color-foreground)] sm:text-[1.6rem]">
                Contact our team to discuss your requirements.
              </h3>
            </div>
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Contact us
            </Button>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.36}>
          <div className="mt-4 rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-2)]/60 p-5 font-mono text-[0.82rem] leading-relaxed text-[var(--color-subtle)]">
            {"{"}note for launch — Esna Care to confirm MDR-compliant distributor
            setup (EU 2017/745) or that devices are supplied only through
            appropriately registered partners. See brief §15 item 6.{"}"}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
