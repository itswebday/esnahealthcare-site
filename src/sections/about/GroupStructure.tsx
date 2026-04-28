import { Building4, ShieldTick } from "iconsax-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

const GroupStructure: React.FC = () => {
  return (
    <section className="bg-surface-1 relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            description="ESNA Care B.V. holds all licences, signs all contracts, and manages all trading activity. ESNA Healthcare B.V. is the holding entity."
            eyebrow="Group structure"
            size="md"
            title="Two entities, one operation."
          />
        </Reveal>

        <div className="relative mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal delay={0.08} direction="up">
            <EntityCard
              body="The parent entity. Holds the group’s ownership structure and overarching corporate governance."
              icon={<Building4 size={22} variant="Bold" />}
              label="Holding"
              rows={[
                {
                  label: "KVK number",
                  value: SITE.registrations.kvkHealthcare,
                },
              ]}
              title={SITE.legalNameHolding}
              tone="accent"
            />
          </Reveal>

          <Reveal delay={0.16} direction="up">
            <EntityCard
              body="The operational entity. Holds the WDA and GDP certification, signs all customer and supplier contracts, and handles day-to-day pharma trading."
              icon={<ShieldTick size={22} variant="Bold" />}
              label="Operational · licence holder"
              rows={[
                { label: "KVK number", value: SITE.registrations.kvkCare },
                { label: "VAT", value: SITE.registrations.vat },
                { label: "WDA No.", value: SITE.licences.wda.number },
                { label: "GDP No.", value: SITE.licences.gdp.number },
              ]}
              title={SITE.legalNameOperational}
              tone="primary"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

type EntityCardProps = {
  body: string;
  icon: React.ReactNode;
  label: string;
  rows: { label: string; value: string }[];
  title: string;
  tone: "primary" | "accent";
};

const EntityCard: React.FC<EntityCardProps> = ({
  body,
  icon,
  label,
  rows,
  title,
  tone,
}) => {
  const cornerClass =
    tone === "primary"
      ? "bg-linear-to-br from-primary to-primary-dark"
      : "bg-linear-to-br from-accent to-accent-dark";
  const labelColor = tone === "primary" ? "text-primary-dark" : "text-accent";

  return (
    <div className="group duration-slow border-border shadow-hint hover:border-primary/40 hover:shadow-primary/10 relative h-full overflow-hidden rounded-3xl border bg-white p-8 transition-all hover:shadow-lg">
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-0 right-0",
          "h-24 w-24 rounded-bl-3xl",
          cornerClass,
        )}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-6 right-6 text-white"
      >
        {icon}
      </span>

      <div className="relative mt-16">
        <div
          className={cn(
            "font-mono text-[10px] font-semibold",
            "tracking-[0.18em] uppercase",
            labelColor,
          )}
        >
          {label}
        </div>
        <h3 className="text-foreground mt-2 text-[22px] leading-tight font-semibold tracking-tight">
          {title}
        </h3>
        <p className="text-muted mt-3 text-[15px] leading-relaxed">{body}</p>
        <dl className="border-border mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-t pt-5 text-[14px]">
          {rows.map((row) => (
            <div key={row.label}>
              <dt className="text-subtle">{row.label}</dt>
              <dd className="text-foreground mt-1 font-mono font-medium">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
export default GroupStructure;
