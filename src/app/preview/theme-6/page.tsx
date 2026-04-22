import Container from "@/components/ui/Container";
import { ComplianceCard, HeroCopy, HeroStats } from "../_theme-shared";
import PreviewBanner from "../_theme-banner";

/*
  Theme 6 — "Institutional Midnight"
  Matches the site's dark panel vocabulary (surface-invert-2 rounded-[48px]
  island) used elsewhere on the home page. Primary-green corner wedge echoes
  LicenceCards / ServicesCtaBand. Navy compliance card, dark-tone stats.
*/

const ThemeSixPage: React.FC = () => {
  return (
    <>
      <PreviewBanner label="Theme 6 · Institutional Midnight" />
      <section className="relative bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
        <Container className="max-w-[1440px]" size="xl">
          <div className="from-surface-invert to-surface-invert-2 relative isolate overflow-hidden rounded-[48px] bg-linear-to-br px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            {/* Corner wedge — site signature */}
            <div
              aria-hidden="true"
              className="from-primary to-primary-dark pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-bl-3xl bg-linear-to-br"
            />
            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className="bg-primary/25 pointer-events-none absolute -bottom-32 -left-24 -z-10 h-[440px] w-[440px] rounded-full blur-[140px]"
            />
            <div
              aria-hidden="true"
              className="bg-accent/20 pointer-events-none absolute top-[30%] right-[-12%] -z-10 h-[380px] w-[380px] rounded-full blur-[120px]"
            />

            {/* Masthead hairline */}
            <div className="relative mb-12 flex items-center gap-3 lg:mb-16">
              <span className="bg-primary h-1.5 w-1.5 rounded-full" />
              <span className="text-on-invert-muted font-mono text-[11px] font-semibold tracking-[0.28em] uppercase">
                Esna Care · Dossier · Utrecht · 2024
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="flex flex-col gap-7 lg:col-span-7">
                <HeroCopy tone="dark" />
              </div>
              <div className="lg:col-span-5 lg:flex lg:items-center">
                <div className="w-full">
                  <ComplianceCard variant="navy" />
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

export default ThemeSixPage;
