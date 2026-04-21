import {
  ShieldTick,
  Verify,
  DocumentDownload,
  Export,
  TickCircle,
} from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export function LicenceCards() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="Authorisations"
            title="Two licences, both verifiable."
            description="The Wholesale Distribution Authorisation and GDP Certificate below are the operational backbone of every transaction we run."
            size="md"
          />
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-2 lg:gap-5">
          <Reveal direction="up" delay={0.08}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-primary-subtle-strong)] bg-[var(--color-primary-subtle)] p-8 sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white opacity-70 blur-3xl"
              />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-white text-[var(--color-primary-dark)] shadow-[var(--shadow-card)]">
                    <ShieldTick size={22} variant="Linear" />
                  </div>
                  <span className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
                    Wholesale Distribution Authorisation
                  </span>
                </div>

                <h3 className="mt-6 text-[1.75rem] font-semibold tracking-[-0.018em] text-[var(--color-foreground)] sm:text-[2rem]">
                  WDA Licence
                </h3>
                <div className="mt-2 font-mono text-[1.05rem] text-[var(--color-foreground)]">
                  No. {SITE.licences.wda.number}
                </div>

                <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  <div>
                    <dt className="text-[var(--color-subtle)]">Issued on</dt>
                    <dd className="mt-0.5 font-mono font-medium text-[var(--color-foreground)]">
                      {SITE.licences.wda.issuedOn}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[var(--color-subtle)]">Renewal</dt>
                    <dd className="mt-0.5 font-medium text-[var(--color-foreground)]">
                      {SITE.licences.wda.renewal}
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-[0.95rem] leading-relaxed text-[var(--color-muted)]">
                  Issued by the {SITE.licences.wda.issuer}. Authorises procurement,
                  supply, and export operations — including medicinal products
                  without a Marketing Authorisation in the EEA intended for export,
                  plus cold-chain handling.
                </p>

                <ul className="mt-6 space-y-2.5">
                  {SITE.licences.wda.scope.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[0.92rem] leading-snug text-[var(--color-foreground)]"
                    >
                      <TickCircle
                        size={18}
                        variant="Bold"
                        className="mt-0.5 shrink-0 text-[var(--color-primary)]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    href={SITE.licences.wda.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="md"
                  >
                    <DocumentDownload size={16} variant="Linear" className="mr-1 shrink-0" />
                    Wholesale Licence PDF
                  </Button>
                  <Button
                    href={SITE.licences.wda.eudraGmdpPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="md"
                  >
                    <Export size={16} variant="Linear" className="mr-1 shrink-0" />
                    WDA · EudraGMDP
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.16}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-accent-subtle-strong)] bg-[var(--color-accent-subtle)] p-8 sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white opacity-70 blur-3xl"
              />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-white text-[var(--color-accent)] shadow-[var(--shadow-card)]">
                    <Verify size={22} variant="Linear" />
                  </div>
                  <span className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
                    Good Distribution Practice
                  </span>
                </div>

                <h3 className="mt-6 text-[1.75rem] font-semibold tracking-[-0.018em] text-[var(--color-foreground)] sm:text-[2rem]">
                  GDP Certificate
                </h3>
                <div className="mt-2 font-mono text-[1.05rem] text-[var(--color-foreground)]">
                  {SITE.licences.gdp.number}
                </div>

                <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  <div>
                    <dt className="text-[var(--color-subtle)]">Issued on</dt>
                    <dd className="mt-0.5 font-mono font-medium text-[var(--color-foreground)]">
                      {SITE.licences.gdp.issuedOn}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[var(--color-subtle)]">Issued by</dt>
                    <dd className="mt-0.5 font-medium text-[var(--color-foreground)]">
                      IGJ
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-[0.95rem] leading-relaxed text-[var(--color-muted)]">
                  Good Distribution Practice certification issued by the{" "}
                  {SITE.licences.gdp.issuer} confirms that our distribution operation
                  meets the EU GDP Guidelines (2013/C 343/01) — the quality framework
                  for handling medicinal products for human use.
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
                      className="flex items-start gap-2.5 text-[0.92rem] leading-snug text-[var(--color-foreground)]"
                    >
                      <TickCircle
                        size={18}
                        variant="Bold"
                        className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href={SITE.licences.gdp.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="md"
                  >
                    <DocumentDownload size={16} variant="Linear" className="mr-1 shrink-0" />
                    GDP Certificate PDF
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
