import Container from "@/components/ui/Container";
import { ComplianceCard, HeroCopy, HeroStats } from "../_theme-shared";
import PreviewBanner from "../_theme-banner";

/*
  Theme 10 — "Minimalist Slate"
  Charcoal rounded-[48px] island — distinct from theme-2 (emerald) and
  theme-6 (navy). Compliance card is the `slate` variant: no border, no
  background, maximum restraint. Primary-green is the sole accent.
*/

const ThemeTenPage: React.FC = () => {
  return (
    <>
      <PreviewBanner label="Theme 10 · Minimalist Slate" />
      <section className="relative bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
        <Container size="xl">
          <div className="relative isolate overflow-hidden rounded-[48px] bg-[#171a21] px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            {/* Subtle vignette + primary glow */}
            <div
              aria-hidden="true"
              className="bg-primary/20 pointer-events-none absolute -top-40 -right-40 -z-10 h-[520px] w-[520px] rounded-full blur-[140px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:56px_56px]"
            />

            {/* Minimal masthead — no brackets, just rule */}
            <div className="relative mb-14 flex items-center gap-4 lg:mb-20">
              <span className="bg-primary h-1.5 w-1.5 rounded-full" />
              <span className="text-on-invert-muted font-mono text-[11px] font-semibold tracking-[0.3em] uppercase">
                Esna Care
              </span>
              <span className="h-px flex-1 bg-white/8" />
            </div>

            <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="flex flex-col gap-7 lg:col-span-7">
                <HeroCopy tone="dark" />
              </div>
              <div className="lg:col-span-5 lg:flex lg:items-center">
                <div className="w-full">
                  <ComplianceCard variant="slate" />
                </div>
              </div>
            </div>

            <div className="relative">
              <HeroStats tone="dark" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ThemeTenPage;
