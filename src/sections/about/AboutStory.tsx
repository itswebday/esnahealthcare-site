import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

const AboutStory: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <AboutStoryBackdrop />

      <Container className="relative" size="xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5" direction="up">
            <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex w-fit items-center gap-2 rounded-xl border px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
              <span className="bg-primary h-1.5 w-1.5 rounded-full" />
              Our story
            </span>
            <h2 className="tracking-display text-foreground mt-5 text-[32px] leading-[1.1] font-semibold sm:text-[40px]">
              Sourcing medicine where it&rsquo;s needed, on compliance terms.
            </h2>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={0.08} direction="up">
              <p className="text-muted text-[18px] leading-[1.6]">
                {SITE.name} is a Dutch EU-licensed pharmaceutical wholesaler
                based in Utrecht. Our work sits quietly behind the pharmacists,
                hospital procurement teams, and distribution partners who rely
                on us — sourcing branded and generic medicines across the
                European Economic Area and delivering them, documented and
                temperature-controlled, to qualified customers worldwide.
              </p>
              <p className="text-muted mt-5 text-[18px] leading-[1.6]">
                We specialise in situations where the easy answer doesn&rsquo;t
                exist: supply disruptions, hard-to-source orphan treatments,
                urgent hospital requests, and export shipments that need to
                clear both regulatory and customs scrutiny. The combination of a
                WDA covering procurement, supply, and export — plus GDP
                certification — is what makes those difficult cases workable.
              </p>
              <p className="text-muted mt-5 text-[18px] leading-[1.6]">
                <span className="text-faint font-mono text-[15px]">
                  {"{"}draft — Eissa to provide 2–3 sentences on the founding
                  story and why Esna Care exists{"}"}
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

const AboutStoryBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-primary/10 absolute top-[30%] right-[-8%] h-[420px] w-[420px] rounded-full blur-[110px]" />
    </div>
  );
};

export default AboutStory;
