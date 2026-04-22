import Container from "@/components/ui/Container";
import { ComplianceLedger, HeroCopy, HeroStats } from "../_theme-shared";
import PreviewBanner from "../_theme-banner";

/*
  Theme 9 — "Dual-Column Ledger"
  Replaces the stacked compliance card with a multi-row audit-trail ledger.
  Numbered rows, mono values, corner wedge. Matches LicenceCards / Quality
  Commitment vocabulary and reads like an official inventory.
*/

const ThemeNinePage: React.FC = () => {
  return (
    <>
      <PreviewBanner label="Theme 9 · Dual-Column Ledger" />
      <section className="relative bg-white pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36">
        <Container size="xl">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="relative flex flex-col gap-7 lg:col-span-7">
              <HeroCopy />
            </div>
            <div className="relative lg:col-span-5 lg:flex lg:items-center">
              <div className="w-full">
                <ComplianceLedger />
              </div>
            </div>
          </div>

          <HeroStats />
        </Container>
      </section>
    </>
  );
};

export default ThemeNinePage;
