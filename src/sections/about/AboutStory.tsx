import { Calendar, Heart, ShieldTick } from "iconsax-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

const AboutStory: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5" direction="up">
            <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex w-fit items-center gap-2 rounded-xl border px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
              <span className="bg-primary h-1.5 w-1.5 rounded-full" />
              Who we are
            </span>
            <h2 className="tracking-display text-foreground mt-5 text-[32px] leading-[1.1] font-semibold sm:text-[40px]">
              Established 2021. Utrecht. EU-licensed.
            </h2>
            <ul className="mt-8 flex flex-col gap-3 text-[14px]">
              <li className="text-muted inline-flex items-center gap-2">
                <Calendar className="text-primary" size={16} variant="Bold" />
                Founded 2021
              </li>
              <li className="text-muted inline-flex items-center gap-2">
                <ShieldTick className="text-primary" size={16} variant="Bold" />
                EU WDA · GDP · IGJ supervised
              </li>
            </ul>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={0.08} direction="up">
              <p className="text-muted text-[18px] leading-[1.6]">
                {SITE.name} is an EU-licensed pharmaceutical wholesaler active
                across European and international markets. We source and
                distribute medicines and medical devices to qualified buyers
                across Europe and beyond — and serve as a trusted distribution
                partner for manufacturers and Marketing Authorisation Holders
                (MAHs).
              </p>
            </Reveal>

            <Reveal delay={0.16} direction="up">
              <div className="border-border-strong border-l-primary bg-surface-1 mt-10 rounded-2xl border border-l-4 p-7">
                <div className="flex items-center gap-2 text-[12px] font-medium tracking-[0.14em] uppercase">
                  <span className="bg-primary inline-flex h-6 w-6 items-center justify-center rounded-md text-white">
                    <Heart size={12} variant="Bold" />
                  </span>
                  <span className="text-primary-dark">
                    We care — our responsibility
                  </span>
                </div>
                <p className="text-foreground mt-4 text-[18px] leading-[1.55] font-medium">
                  The name Esna Care reflects a genuine commitment — to the
                  standards we operate under and to the patients who depend on
                  the medicines we distribute.
                </p>
                <p className="text-muted mt-3 text-[16px] leading-[1.6]">
                  {SITE.mission}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.24} direction="up">
              <div className="mt-10">
                <h3 className="text-foreground text-[20px] font-semibold tracking-tight">
                  How we operate
                </h3>
                <ul className="text-muted mt-4 flex flex-col gap-3 text-[16px] leading-[1.6]">
                  <li>
                    We operate as a lean, specialist company supported by
                    qualified Responsible Persons.
                  </li>
                  <li>
                    We work exclusively with qualified suppliers and customers —
                    a formal qualification process applies before any first
                    transaction.
                  </li>
                  <li>
                    Quality agreements are in place with all outsourced activity
                    partners in accordance with EU GDP guidelines. Commercial
                    terms and responsibility agreements are provided to
                    qualified trading partners on request.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutStory;
