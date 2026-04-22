import Container from "@/components/ui/Container";
import { ComplianceCard, HeroCopy, HeroStats } from "../_theme-shared";
import PreviewBanner from "../_theme-banner";

/*
  Theme 7 — "Clinical Registry"
  White section with a subtle dot-grid ambient pattern (echoes the
  surface-grid utility used elsewhere in the app). Filing-tab masthead
  and a file-number reference give a case-file / registry feel.
*/

const ThemeSevenPage: React.FC = () => {
  return (
    <>
      <PreviewBanner label="Theme 7 · Clinical Registry" />
      <section className="relative isolate overflow-hidden bg-white pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36">
        {/* Dot-grid ambient pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(circle,rgba(11,22,40,0.07)_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.5]"
        />
        <div
          aria-hidden="true"
          className="from-primary-subtle pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 bg-linear-to-b to-transparent opacity-70"
        />

        <Container size="xl">
          {/* Filing-tab masthead */}
          <div className="relative mb-10 flex flex-wrap items-center gap-3 lg:mb-14">
            <span className="bg-primary shadow-hint inline-flex items-center gap-1.5 rounded-t-lg rounded-br-lg px-3 py-1.5 font-mono text-[11px] font-semibold tracking-[0.2em] text-white uppercase">
              File · 01
            </span>
            <span className="border-border bg-surface-1 text-subtle inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 font-mono text-[11px] font-semibold tracking-[0.2em] uppercase">
              Registry · ESNA-WDA-2021
            </span>
            <span className="h-px flex-1 bg-linear-to-r from-transparent via-[#0b162814] to-transparent" />
            <span className="text-subtle font-mono text-[11px] font-semibold tracking-[0.24em] uppercase">
              Utrecht · NL
            </span>
          </div>

          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
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

export default ThemeSevenPage;
