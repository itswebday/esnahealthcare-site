import Container from "@/components/ui/Container";
import { ComplianceCard, HeroCopy, HeroStats } from "../_theme-shared";
import PreviewBanner from "../_theme-banner";

/*
  Theme 2 — "Emerald Panel"
  A bold primary-green rounded-[48px] panel fills the hero section.
  Content lives ON green — white headings, green-on-green accents,
  compliance card stands out as white. Confident, pharmacy-led, bold.
*/

const ThemeTwoPage: React.FC = () => {
  return (
    <>
      <PreviewBanner label="Theme 2 · Emerald Panel" />
      <section className="relative bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
        <Container size="xl">
          <div className="from-primary-dark via-primary to-primary-dark relative overflow-hidden rounded-[48px] bg-linear-to-br px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            {/* Decorative rings in corners */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-40 -right-40 h-[460px] w-[460px] rounded-full border-[36px] border-white/8"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full border-[32px] border-white/8"
            />

            <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="flex flex-col gap-7 lg:col-span-7">
                <HeroCopy tone="dark" />
              </div>
              <div className="lg:col-span-5 lg:flex lg:items-center">
                <div className="w-full">
                  <ComplianceCard variant="white" />
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

export default ThemeTwoPage;
