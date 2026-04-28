import type { Metadata } from "next";
import CorporateRegistration from "@/sections/compliance/CorporateRegistration";
import LicenceCards from "@/sections/compliance/LicenceCards";
import QualificationForms from "@/sections/compliance/QualificationForms";
import QualityCommitment from "@/sections/compliance/QualityCommitment";
import RegulatoryFramework from "@/sections/compliance/RegulatoryFramework";
import PageHero from "@/sections/shared/PageHero";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "EU Wholesale Distribution Authorisation No. 16615 G · GDP Certificate No. NL/G24/2053458 — issued by Dutch authorities and supervised by the IGJ (Dutch Health & Youth Care Inspectorate).",
  alternates: { canonical: "/compliance" },
};

const CompliancePage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="EU Licensed · GDP Certified"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Compliance" }]}
        description="EU GDP compliant · IGJ supervised · EU regulatory aligned · Formally audited and annually reviewed. Licence numbers shown as plain text — verification documents shared privately with qualified partners."
        size="sm"
        title="Verifiable compliance, by the licence number."
      />
      <LicenceCards />
      <RegulatoryFramework />
      <QualificationForms />
      <QualityCommitment />
      <CorporateRegistration />
    </>
  );
};

export default CompliancePage;
