import { Box, ShieldTick } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
            title="Beyond pharmaceuticals — a curated range of devices."
            description="Esna Care is an international pharmaceutical wholesaler specializing in the global distribution of medicinal products. In addition to our core pharmaceutical activities, we provide access to a carefully selected range of medical devices and diagnostic solutions through our trusted global partner network."
            size="md"
          />
        </Reveal>

        <Reveal direction="up" delay={0.08}>
          <div className="mt-14">
            <div className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Categories
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

        <Reveal direction="up" delay={0.16}>
          <div className="mt-14">
            <div className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Brands we source through partner channels
            </div>
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

        <Reveal direction="up" delay={0.2}>
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

        <Reveal direction="up" delay={0.26}>
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
