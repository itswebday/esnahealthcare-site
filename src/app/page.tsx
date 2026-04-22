import CatalogCta from "@/sections/home/CatalogCta";
import FeaturedBlog from "@/sections/home/FeaturedBlog";
import Hero from "@/sections/home/Hero";
import MedicalDevicesTeaser from "@/sections/home/MedicalDevicesTeaser";
import ProductsOverview from "@/sections/home/ProductsOverview";
import ServicesOverview from "@/sections/home/ServicesOverview";
import SupplyChainGallery from "@/sections/home/SupplyChainGallery";
import TherapeuticAreasGrid from "@/sections/home/TherapeuticAreasGrid";
import WhoWeAre from "@/sections/home/WhoWeAre";
import WhyChoose from "@/sections/home/WhyChoose";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <ServicesOverview />
      <ProductsOverview />
      <MedicalDevicesTeaser />
      <TherapeuticAreasGrid />
      <SupplyChainGallery />
      <FeaturedBlog />
      <CatalogCta />
      <WhyChoose />
    </>
  );
};

export default HomePage;
