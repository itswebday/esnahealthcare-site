import type { Metadata } from "next";
import PageHero from "@/sections/shared/PageHero";
import ServicesDetail from "@/sections/services/ServicesDetail";
import ServicesCtaBand from "@/sections/services/ServicesCtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Pharmaceutical wholesale, global sourcing, international distribution, and temperature-controlled logistics — the four disciplines behind every Esna Care shipment.",
  alternates: { canonical: "/services" },
};

const ServicesPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="End-to-end pharmaceutical supply."
        description="Four disciplines that shape every partner relationship — from first enquiry to a qualified, temperature-controlled delivery."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <ServicesDetail />
      <ServicesCtaBand />
    </>
  );
};

export default ServicesPage;
