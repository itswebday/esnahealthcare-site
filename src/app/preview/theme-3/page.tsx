import Container from "@/components/ui/Container";
import { ComplianceCard, HeroCopy, HeroStats } from "../_theme-shared";
import PreviewBanner from "../_theme-banner";

/*
  Theme 3 — "Editorial Serif"
  Minimal, oversized typographic hero. A giant mono "01" marker in the
  top-left, a thin horizontal hairline under the eyebrow, and the
  compliance card treated as a subdued paper-toned panel. Feels like
  the cover of an institutional report.
*/

const ThemeThreePage: React.FC = () => {
  return (
    <>
      <PreviewBanner label="Theme 3 · Editorial Serif" />
      <section className="relative bg-white pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36">
        <Container size="xl">
          {/* Masthead — giant mono dossier number + thin rule */}
          <div className="border-border/80 mb-12 flex items-end justify-between border-b pb-6 lg:mb-16 lg:pb-8">
            <span className="text-foreground/15 font-mono text-[48px] leading-none font-semibold tracking-[-0.04em] sm:text-[64px] lg:text-[84px]">
              /01
            </span>
            <span className="text-subtle font-mono text-[11px] font-semibold tracking-[0.28em] uppercase">
              Dossier · Utrecht · 2021
            </span>
          </div>

          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="flex flex-col gap-7 lg:col-span-7">
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

export default ThemeThreePage;
