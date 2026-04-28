import { ShieldTick, TickCircle, Verify } from "iconsax-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { SITE } from "@/lib/site";

const LicenceCards: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <Container className="relative" size="xl">
        <Reveal direction="up">
          <SectionHeader
            description="The Wholesale Distribution Authorisation and GDP Certificate below are the operational backbone of every transaction we run."
            eyebrow="Authorisations"
            size="md"
            title="Two licences, both verifiable."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal delay={0.08} direction="up">
            <div className="group duration-slow border-border shadow-card hover:border-primary/40 hover:shadow-primary/10 relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-8 transition-all hover:shadow-xl sm:p-10">
              <span
                aria-hidden="true"
                className="from-primary to-primary-dark pointer-events-none absolute top-0 right-0 h-20 w-20 rounded-bl-3xl bg-linear-to-br sm:h-28 sm:w-28"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-6 right-6 text-white sm:top-8 sm:right-8"
              >
                <ShieldTick size={22} variant="Bold" />
              </span>

              <div className="relative mt-14 sm:mt-20">
                <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex w-fit items-center gap-2 rounded-xl border px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
                  <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                  Wholesale Distribution Authorisation
                </span>

                <h3 className="tracking-display text-foreground mt-5 text-[28px] leading-tight font-semibold sm:text-[32px]">
                  WDA Licence
                </h3>
                <div className="text-foreground mt-2 font-mono text-[16px]">
                  No. {SITE.licences.wda.number}
                </div>

                <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-[14px]">
                  <div>
                    <dt className="text-subtle">Issued on</dt>
                    <dd className="text-foreground mt-0.5 font-mono font-medium">
                      {SITE.licences.wda.issuedOn}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-subtle">Renewal</dt>
                    <dd className="text-foreground mt-0.5 font-medium">
                      {SITE.licences.wda.renewal}
                    </dd>
                  </div>
                </dl>

                <p className="text-muted mt-6 text-[15px] leading-relaxed">
                  Issued by the {SITE.licences.wda.issuer}. Authorises
                  procurement, supply, and export operations — including
                  medicinal products without a Marketing Authorisation in the
                  EEA intended for export, plus cold-chain handling.
                </p>

                <ul className="mt-6 space-y-2.5">
                  {SITE.licences.wda.scope.map((item) => (
                    <li
                      key={item}
                      className="text-foreground flex items-start gap-2.5 text-[14px] leading-snug"
                    >
                      <TickCircle
                        className="text-primary mt-0.5 shrink-0"
                        size={18}
                        variant="Bold"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="border-border bg-surface-1 text-muted mt-8 rounded-2xl border p-4 text-[13px] leading-relaxed">
                  Licence verification, qualification documents, and the full
                  compliance package are available privately to qualified
                  partners on request.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16} direction="up">
            <div className="group duration-slow border-border shadow-card hover:border-accent/40 hover:shadow-accent/10 relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-8 transition-all hover:shadow-xl sm:p-10">
              <span
                aria-hidden="true"
                className="from-accent to-accent-dark pointer-events-none absolute top-0 right-0 h-20 w-20 rounded-bl-3xl bg-linear-to-br sm:h-28 sm:w-28"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-6 right-6 text-white sm:top-8 sm:right-8"
              >
                <Verify size={22} variant="Bold" />
              </span>

              <div className="relative mt-14 sm:mt-20">
                <span className="border-accent/40 bg-accent-subtle text-accent inline-flex w-fit items-center gap-2 rounded-xl border px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
                  <span className="bg-accent h-1.5 w-1.5 rounded-full" />
                  Good Distribution Practice
                </span>

                <h3 className="tracking-display text-foreground mt-5 text-[28px] leading-tight font-semibold sm:text-[32px]">
                  GDP Certificate
                </h3>
                <div className="text-foreground mt-2 font-mono text-[16px]">
                  {SITE.licences.gdp.number}
                </div>

                <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-[14px]">
                  <div>
                    <dt className="text-subtle">Issued on</dt>
                    <dd className="text-foreground mt-0.5 font-mono font-medium">
                      {SITE.licences.gdp.issuedOn}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-subtle">Issued by</dt>
                    <dd className="text-foreground mt-0.5 font-medium">IGJ</dd>
                  </div>
                </dl>

                <p className="text-muted mt-6 text-[15px] leading-relaxed">
                  Good Distribution Practice certification issued by the{" "}
                  {SITE.licences.gdp.issuer} confirms that our distribution
                  operation meets the EU GDP Guidelines (2013/C 343/01) — the
                  quality framework for handling medicinal products for human
                  use.
                </p>

                <ul className="mt-6 space-y-2.5">
                  {[
                    "Documented Quality Management System",
                    "Continuous temperature-monitored storage",
                    "Qualified personnel and validated equipment",
                    "Traceable batch documentation end-to-end",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-foreground flex items-start gap-2.5 text-[14px] leading-snug"
                    >
                      <TickCircle
                        className="text-accent mt-0.5 shrink-0"
                        size={18}
                        variant="Bold"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};
export default LicenceCards;
