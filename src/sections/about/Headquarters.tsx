import { Location, Box, ShieldTick } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

export function Headquarters() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="Headquarters"
            title="Based in Utrecht, operating across Europe."
            description="Commercial and quality operations from our Utrecht office, with qualified warehousing handled through a dedicated logistics partner."
            size="md"
          />
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <Reveal direction="up" delay={0.08}>
            <div className="flex h-full flex-col gap-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-7">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary-subtle)] text-[var(--color-primary-dark)]">
                <Location size={20} variant="Linear" />
              </div>
              <div>
                <div className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                  Office
                </div>
                <h3 className="mt-2 text-[1.2rem] font-semibold tracking-[-0.014em] text-[var(--color-foreground)]">
                  {SITE.contact.officeAddress.line1}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--color-muted)]">
                  {SITE.contact.officeAddress.line2}
                  <br />
                  {SITE.contact.officeAddress.country}
                </p>
              </div>
              <span className="mt-auto text-[0.82rem] text-[var(--color-subtle)]">
                Public-facing address · open by appointment
              </span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.16}>
            <div className="flex h-full flex-col gap-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-1)] p-7">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-white text-[var(--color-foreground)]">
                <Box size={20} variant="Linear" />
              </div>
              <div>
                <div className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                  Warehousing
                </div>
                <h3 className="mt-2 text-[1.2rem] font-semibold tracking-[-0.014em] text-[var(--color-foreground)]">
                  Qualified logistics partner
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--color-muted)]">
                  Nieuw-Vennep, The Netherlands — GDP-compliant warehousing with
                  validated cold-chain and controlled-ambient zones.
                </p>
              </div>
              <span className="mt-auto text-[0.82rem] text-[var(--color-subtle)]">
                Warehouse address withheld from public pages
              </span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.24}>
            <div className="flex h-full flex-col gap-4 rounded-[var(--radius-xl)] border border-[var(--color-accent-subtle-strong)] bg-[var(--color-accent-subtle)] p-7">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-white text-[var(--color-accent)]">
                <ShieldTick size={20} variant="Linear" />
              </div>
              <div>
                <div className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  Inspections &amp; audits
                </div>
                <h3 className="mt-2 text-[1.2rem] font-semibold tracking-[-0.014em] text-[var(--color-foreground)]">
                  IGJ-inspected operation
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--color-muted)]">
                  Regular inspections by the Dutch Health and Youth Care Inspectorate
                  (IGJ). Internal audits, CAPA tracking, and SOP reviews run
                  continuously.
                </p>
              </div>
              <span className="mt-auto text-[0.82rem] text-[var(--color-subtle)]">
                Continuous compliance · not an annual event
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
