import type { Metadata } from "next";
import PageHero from "@/sections/shared/PageHero";
import AboutStory from "@/sections/about/AboutStory";
import GroupStructure from "@/sections/about/GroupStructure";
import Headquarters from "@/sections/about/Headquarters";
import QualityCulture from "@/sections/about/QualityCulture";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "An EU-licensed Dutch pharmaceutical wholesaler based in Utrecht. Two entities, one operation — designed so regulatory responsibility and commercial relationships are always unambiguous.",
  alternates: { canonical: "/about" },
};

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A licensed wholesaler, built around compliance."
        description="We source and distribute branded and generic medicines across Europe and beyond — through a trusted supplier network, under a Dutch WDA and GDP certification."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <AboutStory />
      <GroupStructure />
      <Headquarters />
      <QualityCulture />
    </>
  );
};

export default AboutPage;
