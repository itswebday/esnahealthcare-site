import type { Metadata } from "next";
import { ShieldTick } from "iconsax-react";
import { PageHero } from "@/sections/shared/PageHero";
import { LicenceCards } from "@/sections/compliance/LicenceCards";
import { CorporateRegistration } from "@/sections/compliance/CorporateRegistration";
import { RegulatoryFramework } from "@/sections/compliance/RegulatoryFramework";
import { QualificationForms } from "@/sections/compliance/QualificationForms";
import { QualityCommitment } from "@/sections/compliance/QualityCommitment";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "Esna Care operates under a Dutch Wholesale Distribution Authorisation (WDA) No. 16615 G and a GDP Certificate No. NL/G24/2053458. Downloadable licences, SOPs, and regulatory framework.",
  alternates: { canonical: "/compliance" },
};

export default function CompliancePage() {
  return (
    <>
      <PageHero
        badge={{
          label: "EU Licensed · GDP Certified",
          icon: (
            <ShieldTick size={14} variant="Linear" className="mr-0.5" />
          ),
        }}
        title="Verifiable compliance, by the document."
        description="Every licence, certification, and qualification SOP is listed — with downloadable PDFs. What you'd check in any due diligence, already on the page."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Compliance" }]}
      />
      <LicenceCards />
      <CorporateRegistration />
      <RegulatoryFramework />
      <QualificationForms />
      <QualityCommitment />
    </>
  );
}
