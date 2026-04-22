import Container from "@/components/ui/Container";
import { ComplianceCard, HeroCopy, HeroStats } from "../_theme-shared";
import PreviewBanner from "../_theme-banner";

/*
  Theme 5 — "Paper Duotone"
  Warm cream / off-white section that reads like document paper, with
  a thin primary→accent duotone rule underlining the headline block.
  Compliance card uses the paper variant for quiet cohesion. Editorial,
  document-like, understated.
*/

const ThemeFivePage: React.FC = () => {
  return (
    <>
      <PreviewBanner label="Theme 5 · Paper Duotone" />
      <section className="relative isolate overflow-hidden bg-[color-mix(in_oklab,var(--color-surface-1)_80%,white)] pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36">
        {/* Ambient soft glows in paper tones */}
        <div
          aria-hidden="true"
          className="bg-primary/12 pointer-events-none absolute -top-40 -right-40 -z-10 h-[520px] w-[520px] rounded-full blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="bg-accent/10 pointer-events-none absolute bottom-[-10%] left-[-8%] -z-10 h-[480px] w-[480px] rounded-full blur-[130px]"
        />

        <Container size="xl">
          {/* Top hairline with duotone accent */}
          <div className="relative mb-10 flex items-center gap-4 lg:mb-14">
            <span className="bg-primary h-1.5 w-1.5 rounded-full" />
            <span className="from-primary/60 via-primary/30 to-accent/60 h-[2px] flex-1 bg-linear-to-r" />
            <span className="bg-accent h-1.5 w-1.5 rounded-full" />
            <span className="text-subtle font-mono text-[11px] font-semibold tracking-[0.28em] uppercase">
              Dossier · Utrecht · 2021
            </span>
          </div>

          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="relative flex flex-col gap-7 lg:col-span-7">
              <HeroCopy />
            </div>
            <div className="relative lg:col-span-5 lg:flex lg:items-center">
              <div className="w-full">
                <ComplianceCard variant="paper" />
              </div>
            </div>
          </div>
          <HeroStats />
        </Container>
      </section>
    </>
  );
};

export default ThemeFivePage;
