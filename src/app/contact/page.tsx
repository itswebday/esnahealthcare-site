import type { Metadata } from "next";
import { PageHero } from "@/sections/shared/PageHero";
import { ContactSection } from "@/sections/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Esna Care — our commercial team replies to enquiries from info@esnahealthcare.nl within one business day. Utrecht, The Netherlands.",
  alternates: { canonical: "/contact" },
};

type ContactPageProps = {
  searchParams: Promise<{ request?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { request } = await searchParams;
  const isCatalog = request === "catalog";

  const prefilledMessage = isCatalog
    ? "Subject: Catalog request\n\nPlease share your full product catalog with current availability for our qualification review."
    : undefined;

  return (
    <>
      <PageHero
        eyebrow={isCatalog ? "Catalog request" : "Get in touch"}
        title={
          isCatalog
            ? "Request our full product catalog."
            : "Let's talk about your next shipment."
        }
        description={
          isCatalog
            ? "Share your company details and we'll send you the complete catalog with 200+ products, pricing, and availability after qualification."
            : "Whether you need to source a specialty treatment, qualify as a supplier, or request our full catalog, our team replies within one business day."
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactSection
        variant={isCatalog ? "catalog" : "contact"}
        prefilledMessage={prefilledMessage}
      />
    </>
  );
}
