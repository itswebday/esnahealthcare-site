import { Hero } from "@/sections/home/Hero";
import { WhoWeAre } from "@/sections/home/WhoWeAre";
import { ServicesOverview } from "@/sections/home/ServicesOverview";
import { ProductsOverview } from "@/sections/home/ProductsOverview";
import { TherapeuticAreasGrid } from "@/sections/home/TherapeuticAreasGrid";
import { MedicalDevicesTeaser } from "@/sections/home/MedicalDevicesTeaser";
import { SupplyChainGallery } from "@/sections/home/SupplyChainGallery";
import { CatalogCta } from "@/sections/home/CatalogCta";
import { WhyChoose } from "@/sections/home/WhyChoose";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <ServicesOverview />
      <ProductsOverview />
      <TherapeuticAreasGrid />
      <MedicalDevicesTeaser />
      <SupplyChainGallery />
      <CatalogCta />
      <WhyChoose />
    </>
  );
}
