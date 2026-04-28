import { Box } from "iconsax-react";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerChild } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { SITE } from "@/lib/site";
import { MEDICAL_DEVICE_CATEGORIES } from "@/lib/services";

const MedicalDevices: React.FC = () => {
  return (
    <section
      id="medical-devices"
      className="bg-surface-1 relative scroll-mt-24 py-24 sm:py-28 lg:py-32"
    >
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="Medical devices & diagnostics"
            size="md"
            title="Sourced under the same qualification standards as our pharmaceutical supply chain."
          />
        </Reveal>

        <Reveal delay={0.06} direction="up">
          <p className="text-muted mt-6 max-w-3xl text-[17px] leading-relaxed">
            Sourced and distributed through established global partner networks.
            Categories include diagnostics, wound care, diabetes care, clinical
            nutrition, and self-diagnostics.
          </p>
        </Reveal>

        <Reveal delay={0.12} direction="up">
          <div className="mt-12">
            <div className="text-primary-dark text-[12px] font-medium tracking-[0.14em] uppercase">
              Categories
            </div>
            <Stagger
              as="ul"
              className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
              staggerChildren={0.05}
            >
              {MEDICAL_DEVICE_CATEGORIES.map((category) => (
                <StaggerChild key={category} as="li">
                  <article className="border-border shadow-hint hover:border-primary/40 hover:shadow-card duration-slow flex h-full flex-col gap-3 rounded-2xl border bg-white p-5 transition-all">
                    <span className="bg-primary-subtle text-primary ring-primary/25 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1">
                      <Box size={20} variant="Bold" />
                    </span>
                    <span className="text-foreground text-[15px] font-medium tracking-tight">
                      {category}
                    </span>
                  </article>
                </StaggerChild>
              ))}
            </Stagger>
          </div>
        </Reveal>

        <Reveal delay={0.18} direction="up">
          <div className="border-border mt-12 rounded-3xl border bg-white p-8 sm:p-10">
            <div className="text-primary-dark text-[12px] font-medium tracking-[0.14em] uppercase">
              Brands within our sourced portfolio
            </div>
            <p className="text-foreground mt-4 max-w-3xl text-[16px] leading-relaxed">
              {SITE.brands.disclaimerPrefix}{" "}
              <span className="font-medium">
                {SITE.brands.medicalDevices.join(", ")}
              </span>{" "}
              and others — {SITE.brands.disclaimerSuffix}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default MedicalDevices;
