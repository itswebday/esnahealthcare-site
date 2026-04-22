import { Box, ShieldTick } from "iconsax-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerChild } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import {
  MEDICAL_DEVICE_BRANDS,
  MEDICAL_DEVICE_CATEGORIES,
  MEDICAL_DEVICE_DISCLAIMER,
} from "@/lib/services";

const MedicalDevices: React.FC = () => {
  return (
    <section
      id="medical-devices"
      className="bg-surface-1 relative scroll-mt-24 overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <MedicalDevicesBackdrop />

      <Container className="relative" size="xl">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="Medical devices & diagnostics"
            size="md"
            title="Reliable sourcing of high-quality medical devices through our global network."
          />
        </Reveal>

        <Reveal delay={0.06} direction="up">
          <p className="text-muted mt-6 max-w-3xl text-[17px] leading-relaxed">
            Esna Care is an international pharmaceutical wholesaler specializing
            in the global distribution of medicinal products. In addition to our
            core pharmaceutical activities, we provide access to a carefully
            selected range of medical devices and diagnostic solutions through
            our trusted global partner network.
          </p>
        </Reveal>

        <Reveal delay={0.12} direction="up">
          <div className="mt-14">
            <div className="text-accent text-[12px] font-medium tracking-[0.14em] uppercase">
              Product categories
            </div>
            <Stagger
              as="ul"
              className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
              staggerChildren={0.05}
            >
              {MEDICAL_DEVICE_CATEGORIES.map((category, idx) => {
                const isPrimary = idx % 2 === 0;
                return (
                  <StaggerChild key={category} as="li">
                    <article
                      className={cn(
                        "group duration-slow border-border hover:shadow-lift relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border bg-white p-5 transition-all",
                        isPrimary
                          ? "hover:border-primary/40"
                          : "hover:border-accent/40",
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-y-5 left-0 w-[3px] rounded-r-full",
                          isPrimary ? "bg-primary" : "bg-accent",
                        )}
                      />
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1",
                          isPrimary
                            ? "bg-primary-subtle text-primary-dark ring-primary/25"
                            : "bg-accent-subtle text-accent ring-accent/30",
                        )}
                      >
                        <Box size={20} variant="Bold" />
                      </span>
                      <span className="text-foreground text-[15px] font-medium tracking-tight">
                        {category}
                      </span>
                    </article>
                  </StaggerChild>
                );
              })}
            </Stagger>
          </div>
        </Reveal>

        <Reveal delay={0.18} direction="up">
          <div className="mt-14">
            <div className="text-accent text-[12px] font-medium tracking-[0.14em] uppercase">
              Brands we source from
            </div>
            <p className="text-muted mt-3 max-w-2xl text-[14px] leading-relaxed">
              Through our established global network, Esna Care sources products
              from leading international manufacturers and brands. We are able
              to supply products originating from, but not limited to, the
              following companies:
            </p>
            <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-5">
              {MEDICAL_DEVICE_BRANDS.map((brand) => (
                <div
                  key={brand}
                  className="duration-slow border-border text-foreground shadow-hint hover:border-primary/40 hover:shadow-primary/10 flex h-14 items-center justify-center rounded-xl border bg-white px-4 text-center text-[14px] font-medium tracking-tight transition-all"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.24} direction="up">
          <div className="border-border text-muted shadow-hint mt-10 flex items-start gap-3 rounded-2xl border bg-white p-5 text-[14px] leading-relaxed">
            <ShieldTick
              className="text-accent mt-0.5 shrink-0"
              size={20}
              variant="Bold"
            />
            <p>
              <span className="text-foreground font-medium">Disclaimer:</span>{" "}
              {MEDICAL_DEVICE_DISCLAIMER}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3} direction="up">
          <div className="border-border shadow-card relative mt-12 overflow-hidden rounded-3xl border bg-white p-8 sm:p-10">
            <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
              <div>
                <div className="text-primary-dark text-[12px] font-medium tracking-[0.14em] uppercase">
                  Looking for a specific product?
                </div>
                <h3 className="tracking-display text-foreground mt-2 text-[22px] leading-tight font-semibold sm:text-[26px]">
                  Contact our team to discuss your requirements.
                </h3>
              </div>
              <Button href="/contact" size="lg" variant="primary" withArrow>
                Contact us
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.36} direction="up">
          <div className="border-border-strong bg-surface-2/60 text-subtle mt-4 rounded-xl border border-dashed p-5 font-mono text-[12px] leading-relaxed">
            {"{"}note for launch — Esna Care to confirm MDR-compliant
            distributor setup (EU 2017/745) or that devices are supplied only
            through appropriately registered partners. See brief §15 item 6.
            {"}"}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

const MedicalDevicesBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-accent/10 absolute top-[20%] right-[-10%] h-[420px] w-[420px] rounded-full blur-[110px]" />
      <div className="bg-primary/10 absolute bottom-[10%] left-[-10%] h-[420px] w-[420px] rounded-full blur-[110px]" />
    </div>
  );
};

export default MedicalDevices;
