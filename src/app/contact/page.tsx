import type { Metadata } from "next";
import { ENQUIRY_TYPES, type EnquiryType } from "@/lib/enquiry-types";
import PageHero from "@/sections/shared/PageHero";
import ContactSection from "@/sections/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Esna Care — sourcing enquiries, partner qualification, export requests, medical devices, or procurement. Our commercial team replies within one business day.",
  alternates: { canonical: "/contact" },
};

type ContactPageProps = {
  searchParams: Promise<{
    enquiry?: string;
    request?: string;
  }>;
};

const isValidEnquiryType = (value: string | undefined): value is EnquiryType =>
  ENQUIRY_TYPES.some((option) => option.value === value);

const ContactPage = async ({ searchParams }: ContactPageProps) => {
  const params = await searchParams;
  const enquiryType = isValidEnquiryType(params.enquiry)
    ? params.enquiry
    : undefined;
  const isCatalog = params.request === "catalog";

  const prefilledMessage = isCatalog
    ? "Subject: Portfolio request\n\nPlease share the relevant pharmaceutical portfolio details for our qualification review."
    : undefined;

  return (
    <>
      <PageHero
        eyebrow={isCatalog ? "Portfolio request" : "Contact"}
        title="Discuss your requirements with our team."
        description="Whether you’re sourcing medicines, evaluating a distribution partner, or submitting stock for procurement, our team will reply from info@esnahealthcare.nl within one business day."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        size="sm"
      />
      <ContactSection
        enquiryType={enquiryType}
        prefilledMessage={prefilledMessage}
        variant={isCatalog ? "catalog" : "contact"}
      />
    </>
  );
};

export default ContactPage;
