import { ArrowRight } from "iconsax-react";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ContactSection from "@/sections/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Esna Care — our commercial team replies to enquiries from info@esnahealthcare.nl within one business day. Utrecht, The Netherlands.",
  alternates: { canonical: "/contact" },
};

type ContactPageProps = {
  searchParams: Promise<{ request?: string }>;
};

const ContactPage = async ({ searchParams }: ContactPageProps) => {
  const { request } = await searchParams;
  const isCatalog = request === "catalog";

  const prefilledMessage = isCatalog
    ? "Subject: Catalog request\n\nPlease share your full product catalog with current availability for our qualification review."
    : undefined;

  return (
    <>
      <section className="bg-white pt-10 lg:pt-14">
        <Container size="xl">
          <div className="flex flex-col items-start gap-5">
            <nav
              aria-label="Breadcrumb"
              className="text-subtle flex flex-wrap items-center gap-1.5 text-[14px]"
            >
              <Link
                className="hover:text-foreground transition-colors"
                href="/"
              >
                Home
              </Link>
              <ArrowRight className="text-faint" size={12} variant="Linear" />
              <span className="text-muted">Contact</span>
            </nav>
            <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
              <span className="bg-primary h-1.5 w-1.5 rounded-full" />
              {isCatalog ? "Catalog request" : "Get in touch"}
            </span>
          </div>
        </Container>
      </section>
      <ContactSection
        variant={isCatalog ? "catalog" : "contact"}
        prefilledMessage={prefilledMessage}
      />
    </>
  );
};

export default ContactPage;
