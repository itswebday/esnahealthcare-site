import type { Metadata } from "next";
import PageHero from "@/sections/shared/PageHero";
import ProductCategoriesDetail from "@/sections/products/ProductCategoriesDetail";
import TherapeuticAreasGrid from "@/sections/home/TherapeuticAreasGrid";
import MedicalDevices from "@/sections/products/MedicalDevices";
import CatalogCta from "@/sections/home/CatalogCta";

export const metadata: Metadata = {
  title: "Products",
  description:
    "200+ products across oncology, rare & orphan, cardiovascular, immunology & biologics, neurology, critical & hospital care, temperature-sensitive, and vitamins. Medical devices sourced through registered partners.",
  alternates: { canonical: "/products" },
};

const ProductsPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="A broad portfolio, documented end-to-end."
        description="From branded and generic medicines to injectables and specialty biologics — sourced through qualified channels, supplied under our WDA and GDP."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />
      <ProductCategoriesDetail />
      <TherapeuticAreasGrid />
      <MedicalDevices />
      <CatalogCta />
    </>
  );
};

export default ProductsPage;
