import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

const ROWS = [
  {
    label: "Operational entity",
    value: `${SITE.legalNameOperational} · KVK ${SITE.registrations.kvkCare}`,
  },
  {
    label: "Holding entity",
    value: `${SITE.legalNameHolding} · KVK ${SITE.registrations.kvkHealthcare}`,
  },
  {
    label: "VAT number",
    value: SITE.registrations.vat,
  },
  {
    label: "EORI number",
    value: SITE.registrations.eori,
  },
  {
    label: "REX number",
    value: SITE.registrations.rex,
  },
  {
    label: "Registered address",
    value: SITE.contact.registeredAddress.full,
  },
  {
    label: "Office address",
    value: SITE.contact.officeAddress.full,
  },
];

export function CorporateRegistration() {
  return (
    <section className="bg-[var(--color-surface-1)] py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="Corporate registration"
            title="Legal, fiscal, and customs identifiers."
            description="Every identifier that a partner, bank, or customs authority may request is listed in one place."
            size="md"
          />
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white">
            <dl className="divide-y divide-[var(--color-border)]">
              {ROWS.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-2 px-6 py-5 sm:grid-cols-[220px_1fr] sm:items-center sm:gap-8 sm:px-8 sm:py-6"
                >
                  <dt className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                    {row.label}
                  </dt>
                  <dd className="font-mono text-[0.98rem] text-[var(--color-foreground)]">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
