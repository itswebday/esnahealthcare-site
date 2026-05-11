import { TickCircle } from "iconsax-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";

const STANDARDS = [
  {
    title: "Fully documented QMS",
    description:
      "Version-controlled SOPs covering all distribution activities, reviewed on a defined cadence.",
  },
  {
    title: "End-to-end traceability",
    description:
      "Across all products and shipments — every batch with a complete chain of custody.",
  },
  {
    title: "Designated Responsible Persons",
    description:
      "Named on the WDA licence and registered with the Dutch authorities.",
  },
  {
    title: "Documentation on request",
    description:
      "Full compliance package available privately to qualified partners after first contact.",
  },
];

const QualityCommitment: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            description="Continuous compliance, not an annual event."
            eyebrow="Our quality standards"
            size="md"
            title="What partners can expect, on every shipment."
          />
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {STANDARDS.map((standard, idx) => {
            const isAccent = idx % 2 === 1;
            const hoverClass = isAccent
              ? "hover:border-accent/40"
              : "hover:border-primary/40";
            const chipClass = isAccent
              ? "bg-accent-subtle text-accent ring-accent/25"
              : "bg-primary-subtle text-primary ring-primary/25";
            return (
              <Reveal key={standard.title} delay={0.06 * idx} direction="up">
                <li
                  className={cn(
                    "border-border shadow-hint hover:shadow-card",
                    "duration-slow flex h-full gap-4 rounded-2xl border",
                    "bg-white p-6 transition-all",
                    hoverClass,
                  )}
                >
                  <span
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center",
                      "rounded-xl ring-1",
                      chipClass,
                    )}
                  >
                    <TickCircle size={22} variant="Bold" />
                  </span>
                  <div>
                    <h3 className="text-foreground text-[17px] leading-tight font-semibold">
                      {standard.title}
                    </h3>
                    <p className="text-muted mt-2 text-[14px] leading-relaxed">
                      {standard.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default QualityCommitment;
