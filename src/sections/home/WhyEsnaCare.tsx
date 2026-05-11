import { TickCircle } from "iconsax-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

const FEATURES = [
  "Licensed & compliant operations — EU WDA, GDP, IGJ supervised",
  "Quality & traceability across every product and shipment",
  "Global sourcing — branded, generic, OTC, specialty, shortage",
  "GDP-compliant storage & transportation — temperature-controlled (2–8 °C | 15–25 °C)",
] as const;

const WhyEsnaCare: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-6" direction="up">
            <WhyImagePanel />
          </Reveal>

          <Reveal className="lg:col-span-6" delay={0.12} direction="up">
            <div className="flex flex-col gap-5">
              <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex w-fit items-center gap-2 rounded-xl border px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
                <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                Why {SITE.name}
              </span>
              <h2 className="tracking-display text-foreground text-[32px] leading-[1.1] font-semibold sm:text-[42px] lg:text-[48px]">
                Compliant by default. Quality by design.
              </h2>
              <p className="text-muted max-w-2xl text-[16px] leading-relaxed">
                Four operating commitments that shape every engagement — from
                first enquiry to a qualified, temperature-controlled delivery.
              </p>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {FEATURES.map((item, idx) => {
                const isPrimary = idx % 2 === 0;
                return (
                  <li
                    key={item}
                    className={cn(
                      "group duration-slow border-border hover:shadow-lift relative flex items-center gap-3 overflow-hidden rounded-2xl border bg-white p-4 transition-all",
                      isPrimary
                        ? "hover:border-primary/40"
                        : "hover:border-accent/40",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-y-4 left-0 w-[3px] rounded-r-full",
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
                      <TickCircle size={18} variant="Bold" />
                    </span>
                    <span className="text-foreground text-[14px] leading-snug">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

const WhyImagePanel: React.FC = () => {
  return (
    <div className="border-border shadow-card relative aspect-square overflow-hidden rounded-3xl border bg-white">
      <Image
        alt="Pharmaceutical jars, blister packs, stethoscope, thermometer, and pulse oximeter laid out on a wooden surface"
        src="/images/pharma-flatlay.webp"
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
};

export default WhyEsnaCare;
