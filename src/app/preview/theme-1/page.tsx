import Container from "@/components/ui/Container";
import { ComplianceCard, HeroCopy, HeroStats } from "../_theme-shared";
import PreviewBanner from "../_theme-banner";

/*
  Theme 1 — "Clinical White"
  Pure white section, zero background shapes, maximum breathing room.
  Only green accents (no blue-on-white ambient). Premium pharmaceutical-
  brand feel — confident through restraint.
*/

const ThemeOnePage: React.FC = () => {
  return (
    <>
      <PreviewBanner label="Theme 1 · Clinical White" />
      <section className="relative bg-white pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36">
        <Container size="xl">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20 lg:py-10">
            <div className="relative flex flex-col gap-7 lg:col-span-7">
              <HeroCopy />
            </div>
            <div className="relative lg:col-span-5 lg:flex lg:items-center">
              <div className="w-full">
                <ComplianceCard variant="white" />
              </div>
            </div>
          </div>
          <HeroStats />
        </Container>
      </section>
    </>
  );
};

export default ThemeOnePage;
