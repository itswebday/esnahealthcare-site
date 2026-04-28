import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
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
  { label: "VAT number", value: SITE.registrations.vat },
  { label: "EORI number", value: SITE.registrations.eori },
  { label: "REX number", value: SITE.registrations.rex },
  { label: "Head Office", value: SITE.contact.officeAddress.full },
  { label: "Warehouse", value: SITE.contact.warehouseAddress.full },
];

const CorporateRegistration: React.FC = () => {
  return (
    <section className="bg-surface-1 relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            description="Every identifier that a partner, bank, or customs authority may request is listed in one place."
            eyebrow="Corporate registration"
            size="md"
            title="Legal, fiscal, and customs identifiers."
          />
        </Reveal>

        <Reveal delay={0.1} direction="up">
          <div className="border-border shadow-hint relative mt-12 overflow-hidden rounded-3xl border bg-white">
            <dl className="divide-border divide-y">
              {ROWS.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-2 px-6 py-5 sm:grid-cols-[220px_1fr] sm:items-center sm:gap-8 sm:px-8 sm:py-6"
                >
                  <dt className="text-subtle text-[11px] font-medium tracking-[0.14em] uppercase">
                    {row.label}
                  </dt>
                  <dd className="text-foreground font-mono text-[15px]">
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
};
export default CorporateRegistration;
