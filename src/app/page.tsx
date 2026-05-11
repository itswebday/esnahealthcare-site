import CatalogCta from "@/sections/home/CatalogCta";
// import FeaturedBlog from "@/sections/home/FeaturedBlog";
import Hero from "@/sections/home/Hero";
import TwoClearPaths from "@/sections/home/TwoClearPaths";
import WeCareCallout from "@/sections/home/WeCareCallout";
import WhatWeDo from "@/sections/home/WhatWeDo";
import WhyEsnaCare from "@/sections/home/WhyEsnaCare";

const HomePage: React.FC = () => (
  <>
    <Hero />
    <WeCareCallout />
    <WhatWeDo />
    <WhyEsnaCare />
    <TwoClearPaths />
    <CatalogCta />
    {/* <FeaturedBlog /> */}
  </>
);

export default HomePage;
