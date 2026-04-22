import type { Metadata } from "next";
import PageHero from "@/sections/shared/PageHero";
import HowItWorks from "@/sections/we-buy/HowItWorks";
import WhatWereLookingFor from "@/sections/we-buy/WhatWereLookingFor";
import OfferForm from "@/sections/we-buy/OfferForm";

export const metadata: Metadata = {
  title: "We Buy Medicines",
  description:
    "Esna Care sources branded and generic medicines across Europe. Suppliers with qualified EU stock are invited to submit an offer — documented, qualified, and reviewed within one business day.",
  alternates: { canonical: "/we-buy-medicines" },
};

const WeBuyMedicinesPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="We buy medicines"
        title="Offer your stock to Esna Care."
        description="Suppliers with EU-sourced stock, full documentation, and appropriate shelf life are invited to submit an offer — cold-chain and ambient products welcome."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "We Buy Medicines" },
        ]}
      />
      <HowItWorks />
      <WhatWereLookingFor />
      <OfferForm />
    </>
  );
};

export default WeBuyMedicinesPage;
