import type { Metadata } from "next";
import AboutStory from "@/sections/about/AboutStory";
import GroupStructure from "@/sections/about/GroupStructure";
import PageHero from "@/sections/shared/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Established 2021 in Utrecht — an EU-licensed pharmaceutical wholesaler active across European and international markets. Two entities, one operation, one quality standard.",
  alternates: { canonical: "/about" },
};

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A licensed wholesaler, built around compliance."
        description="Established 2021 · Utrecht, Netherlands · EU-licensed pharmaceutical wholesaler active across EU and international markets."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <AboutStory />
      <GroupStructure />
    </>
  );
};

export default AboutPage;
