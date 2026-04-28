import type { Metadata } from "next";
import ServicesCtaBand from "@/sections/services/ServicesCtaBand";
import ServicesDetail from "@/sections/services/ServicesDetail";
import PageHero from "@/sections/shared/PageHero";

export const metadata: Metadata = {
  title: "Services & Products",
  description:
    "Pharmaceutical wholesale, global sourcing, international distribution, and validated temperature-controlled handling — supplied to qualified buyers under EU WDA and GDP.",
  alternates: { canonical: "/services" },
};

const ServicesPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Services & products"
        title="End-to-end pharmaceutical supply, under EU GDP."
        description="Four disciplines that shape every partner relationship — from first enquiry to a qualified, temperature-controlled delivery."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services & Products" },
        ]}
      />
      <ServicesDetail />
      <ServicesCtaBand />
    </>
  );
};

export default ServicesPage;
