import type { Metadata } from "next";
import { PageHero } from "@/sections/shared/PageHero";
import { FaqSection } from "@/sections/faq/FaqSection";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about working with Esna Care — operating countries, MOQs, RFQ response times, cold-chain handling, qualification, and WDA scope.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently asked questions"
        title="Answers, not sales pitches."
        description="The questions buyers and suppliers ask us most often — answered honestly. If your question isn't here, send it to info@esnahealthcare.nl."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        size="sm"
      />
      <FaqSection />
    </>
  );
}
