import Container from "@/components/ui/Container";
import { ComplianceCard, HeroCopy, HeroStats } from "../_theme-shared";
import PreviewBanner from "../_theme-banner";

/*
  Theme 4 — "Soft Aura"
  White section with a single oversized soft primary radial glow
  centred behind the headline. No hard boxes, no brackets, no
  decorations — just a warm ambient halo. Apple / Stripe / Vision
  aesthetic.
*/

const ThemeFourPage: React.FC = () => {
  return (
    <>
      <PreviewBanner label="Theme 4 · Soft Aura" />
      <section className="relative isolate overflow-hidden bg-white pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36">
        {/* Single centred ambient glow */}
        <div
          aria-hidden="true"
          className="bg-primary/20 pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] sm:h-[920px] sm:w-[920px] sm:blur-[160px] lg:h-[1100px] lg:w-[1100px]"
        />
        {/* Subtle secondary accent glow */}
        <div
          aria-hidden="true"
          className="bg-accent/15 pointer-events-none absolute top-[20%] right-[-8%] -z-10 h-[440px] w-[440px] rounded-full blur-[120px]"
        />

        <Container size="xl">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20 lg:py-10">
            <div className="z-raised relative flex flex-col gap-7 lg:col-span-7">
              <HeroCopy />
            </div>
            <div className="z-raised relative lg:col-span-5 lg:flex lg:items-center">
              <div className="w-full">
                <ComplianceCard variant="white" />
              </div>
            </div>
          </div>
          <div className="z-raised relative">
            <HeroStats />
          </div>
        </Container>
      </section>
    </>
  );
};

export default ThemeFourPage;
