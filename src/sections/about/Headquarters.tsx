import { Box, Location, ShieldTick } from "iconsax-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

const Headquarters: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <HeadquartersBackdrop />

      <Container className="relative" size="xl">
        <Reveal direction="up">
          <SectionHeader
            description="Commercial and quality operations from our Utrecht office, with qualified warehousing handled through a dedicated logistics partner."
            eyebrow="Headquarters"
            size="md"
            title="Based in Utrecht, operating across Europe."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Reveal delay={0.12} direction="up">
            <InfoCard
              body={
                <>
                  {SITE.contact.officeAddress.line2}
                  <br />
                  {SITE.contact.officeAddress.country}
                </>
              }
              caption="Public-facing address · open by appointment"
              icon={<Location size={20} variant="Bold" />}
              label="Office"
              title={SITE.contact.officeAddress.line1}
              tone="primary"
            />
          </Reveal>

          <Reveal delay={0.18} direction="up">
            <InfoCard
              body="Nieuw-Vennep, The Netherlands — GDP-compliant warehousing with validated cold-chain and controlled-ambient zones."
              caption="Warehouse address withheld from public pages"
              icon={<Box size={20} variant="Bold" />}
              label="Warehousing"
              title="Qualified logistics partner"
              tone="accent"
            />
          </Reveal>

          <Reveal delay={0.24} direction="up">
            <InfoCard
              body="Regular inspections by the Dutch Health and Youth Care Inspectorate (IGJ). Internal audits, CAPA tracking, and SOP reviews run continuously."
              caption="Continuous compliance · not an annual event"
              icon={<ShieldTick size={20} variant="Bold" />}
              label="Inspections & audits"
              title="IGJ-inspected operation"
              tone="primary"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

type InfoCardProps = {
  body: React.ReactNode;
  caption: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  tone: "primary" | "accent";
};

const InfoCard: React.FC<InfoCardProps> = ({
  body,
  caption,
  icon,
  label,
  title,
  tone,
}) => {
  const cornerClass =
    tone === "primary"
      ? "bg-linear-to-br from-primary to-primary-dark"
      : "bg-linear-to-br from-accent to-accent-dark";
  const labelColor = tone === "primary" ? "text-primary-dark" : "text-accent";
  const hoverClass =
    tone === "primary"
      ? "hover:border-primary/40 hover:shadow-primary/10"
      : "hover:border-accent/40 hover:shadow-accent/10";

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden",
        "rounded-3xl p-7",
        "border-border shadow-hint border bg-white",
        "duration-slow transition-all hover:shadow-lg",
        hoverClass,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-0 right-0",
          "h-20 w-20 rounded-bl-3xl",
          cornerClass,
        )}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-5 right-5 text-white"
      >
        {icon}
      </span>

      <div className="relative mt-14 flex flex-1 flex-col">
        <div
          className={cn(
            "font-mono text-[10px] font-semibold",
            "tracking-[0.18em] uppercase",
            labelColor,
          )}
        >
          {label}
        </div>
        <h3 className="text-foreground mt-2 text-[18px] leading-tight font-semibold tracking-tight">
          {title}
        </h3>
        <p className="text-muted mt-2 text-[14px] leading-relaxed">{body}</p>
        <span className="text-subtle mt-auto pt-4 text-[12px]">{caption}</span>
      </div>
    </div>
  );
};

const HeadquartersBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-primary/10 absolute top-[30%] left-[-8%] h-[420px] w-[420px] rounded-full blur-[110px]" />
    </div>
  );
};

export default Headquarters;
