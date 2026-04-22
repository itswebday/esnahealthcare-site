import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { MEDICAL_DEVICE_CATEGORIES } from "@/lib/services";

const TAG_TONES = ["primary", "accent", "glass", "accent", "glass"] as const;

const MedicalDevicesTeaser: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32">
      <Container size="xl">
        <Reveal direction="up">
          <div className="bg-surface-invert relative overflow-hidden rounded-3xl p-10 sm:p-14">
            <MedicalDevicesBackdrop />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1 text-[12px] font-medium tracking-[0.14em] text-white uppercase ring-1 ring-white/20 backdrop-blur">
                  <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                  Beyond pharmaceuticals
                </span>
                <h2 className="tracking-display mt-5 text-[28px] leading-[1.15] font-semibold text-white sm:text-[36px] lg:text-[42px]">
                  Medical devices &amp; diagnostics — curated through our global
                  partner network.
                </h2>
                <p className="text-on-invert-muted mt-5 max-w-xl text-[16px] leading-relaxed">
                  From Roche and Abbott to 3M and Mölnlycke — reliable sourcing
                  of high-quality medical devices and diagnostic solutions.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button
                    href="/products#medical-devices"
                    size="md"
                    variant="invert"
                    withArrow
                  >
                    Explore medical devices
                  </Button>
                  <Button
                    href="/contact"
                    size="md"
                    variant="invert-outline"
                    withArrow
                  >
                    Request a specific product
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-3">
                  {MEDICAL_DEVICE_CATEGORIES.slice(0, 6).map(
                    (category, idx) => {
                      const tone = TAG_TONES[idx % TAG_TONES.length];
                      const toneClass =
                        tone === "primary"
                          ? "bg-primary text-white"
                          : tone === "accent"
                            ? "bg-accent text-white"
                            : "bg-white/10 text-white ring-1 ring-white/20 backdrop-blur";
                      return (
                        <div
                          key={category}
                          className={cn(
                            "rounded-2xl p-4",
                            "text-[13px] leading-snug font-medium",
                            toneClass,
                          )}
                        >
                          {category}
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

const MedicalDevicesBackdrop: React.FC = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="bg-primary/20 absolute top-[-4rem] left-[-4rem] h-56 w-56 rotate-12 rounded-3xl blur-xl" />
      <div className="bg-accent/20 absolute right-[-3rem] bottom-[-3rem] h-48 w-48 -rotate-6 rounded-3xl blur-xl" />
    </div>
  );
};

export default MedicalDevicesTeaser;
