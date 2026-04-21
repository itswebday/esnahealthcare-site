import { Building4, ShieldTick } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

export function GroupStructure() {
  return (
    <section className="bg-[var(--color-surface-1)] py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="Group structure"
            title="Two entities, one operation."
            description="A clean separation between the holding company and the operational entity — designed so regulatory responsibility and commercial relationships are always unambiguous."
            size="md"
          />
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <Reveal direction="up" delay={0.08}>
            <div className="relative h-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--color-accent-subtle)] opacity-80 blur-2xl"
              />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                  <Building4 size={22} variant="Linear" />
                </div>
                <div className="mt-6 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  Holding
                </div>
                <h3 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.018em] text-[var(--color-foreground)]">
                  {SITE.legalNameHolding}
                </h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-[var(--color-muted)]">
                  The parent entity. Holds the group&rsquo;s ownership structure and
                  overarching corporate governance.
                </p>
                <dl className="mt-6 space-y-3 border-t border-[var(--color-border)] pt-5 text-sm">
                  <div className="flex items-center justify-between">
                    <dt className="text-[var(--color-subtle)]">KVK number</dt>
                    <dd className="font-mono font-medium text-[var(--color-foreground)]">
                      {SITE.registrations.kvkHealthcare}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.16}>
            <div className="relative h-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-primary-subtle-strong)] bg-[var(--color-primary-subtle)] p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--color-primary)] opacity-20 blur-2xl"
              />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-white text-[var(--color-primary-dark)]">
                  <ShieldTick size={22} variant="Linear" />
                </div>
                <div className="mt-6 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
                  Operational · licence holder
                </div>
                <h3 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.018em] text-[var(--color-foreground)]">
                  {SITE.legalNameOperational}
                </h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-[var(--color-muted)]">
                  The operational entity. Holds the WDA and GDP certification, signs
                  all customer and supplier contracts, and handles day-to-day pharma
                  trading.
                </p>
                <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-[var(--color-primary-subtle-strong)] pt-5 text-sm">
                  <div>
                    <dt className="text-[var(--color-subtle)]">KVK number</dt>
                    <dd className="mt-1 font-mono font-medium text-[var(--color-foreground)]">
                      {SITE.registrations.kvkCare}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[var(--color-subtle)]">VAT</dt>
                    <dd className="mt-1 font-mono font-medium text-[var(--color-foreground)]">
                      {SITE.registrations.vat}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[var(--color-subtle)]">WDA No.</dt>
                    <dd className="mt-1 font-mono font-medium text-[var(--color-foreground)]">
                      {SITE.licences.wda.number}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[var(--color-subtle)]">GDP No.</dt>
                    <dd className="mt-1 font-mono font-medium text-[var(--color-foreground)]">
                      {SITE.licences.gdp.number}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
