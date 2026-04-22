import Container from "@/components/ui/Container";
import { ComplianceCard, HeroCopy, HeroStats } from "../_theme-shared";
import PreviewBanner from "../_theme-banner";

/*
  Theme 8 — "European Pale"
  Off-white cream canvas with a restrained accent-blue vertical rule that
  "anchors" the compliance card — evokes Swiss pharma dossier aesthetics.
  Tight typography, generous whitespace, institutional warmth.
*/

const ThemeEightPage: React.FC = () => {
  return (
    <>
      <PreviewBanner label="Theme 8 · European Pale" />
      <section className="relative isolate overflow-hidden bg-[color-mix(in_oklab,var(--color-surface-1)_55%,white)] pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36">
        {/* Subtle warm wash */}
        <div
          aria-hidden="true"
          className="bg-accent/10 pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[520px] w-[520px] rounded-full blur-[150px]"
        />
        <div
          aria-hidden="true"
          className="bg-primary/10 pointer-events-none absolute -bottom-40 left-[-10%] -z-10 h-[480px] w-[480px] rounded-full blur-[150px]"
        />

        <Container size="xl">
          {/* Top-spanning hairline with accent cap */}
          <div className="relative mb-12 grid grid-cols-[auto_1fr_auto] items-center gap-5 lg:mb-16">
            <span className="text-foreground font-mono text-[11px] font-semibold tracking-[0.32em] uppercase">
              Esna Care
            </span>
            <span className="h-px w-full bg-[#0b162818]" />
            <span className="text-subtle font-mono text-[11px] font-semibold tracking-[0.24em] uppercase">
              Nederland · Utrecht
            </span>
          </div>

          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="relative flex flex-col gap-7 lg:col-span-7">
              <HeroCopy />
            </div>
            <div className="relative lg:col-span-5 lg:flex lg:items-center">
              {/* Accent-blue vertical anchor + paper card */}
              <div className="relative w-full pl-5 sm:pl-7">
                <span
                  aria-hidden="true"
                  className="bg-accent absolute top-2 bottom-2 left-0 w-[3px] rounded-full"
                />
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

export default ThemeEightPage;
