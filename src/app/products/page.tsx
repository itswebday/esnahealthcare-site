import type { Metadata } from "next";
import TherapeuticAreasGrid from "@/sections/home/TherapeuticAreasGrid";
import MedicalDevices from "@/sections/products/MedicalDevices";
import PharmaBrands from "@/sections/products/PharmaBrands";
import ProductCategoriesDetail from "@/sections/products/ProductCategoriesDetail";
import ProductsEnquiryCta from "@/sections/products/ProductsEnquiryCta";
import PageHero from "@/sections/shared/PageHero";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Branded, generic, OTC, specialty, hospital, and temperature-sensitive medicines across eight therapeutic areas — plus medical devices and diagnostics. Sourced through qualified channels.",
  alternates: { canonical: "/products" },
};

const ProductsPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="A broad portfolio, sourced under qualification."
        description="From branded and generic medicines to injectables, specialty biologics, and medical devices — supplied under our WDA and GDP."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />
      <ProductCategoriesDetail />
      <TherapeuticAreasGrid />
      <PharmaBrands />
      <MedicalDevices />
      <ProductsEnquiryCta />
    </>
  );
};

export default ProductsPage;
