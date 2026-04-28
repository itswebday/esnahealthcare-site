import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/legal/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions, mandatory disclosures, and legal notice for Esna Care B.V. — governed by the laws of the Netherlands.",
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: true, follow: true },
};

const TermsPage: React.FC = () => {
  return (
    <LegalLayout
      title="Terms & Conditions"
      lastUpdated="April 2026"
      draftNote="Draft — to be reviewed by Esna Care’s legal advisor before launch. Written to reflect Dutch law and the specific B2B pharmaceutical wholesale context, but not a substitute for formal legal review."
    >
      <h2>1. Legal Information (Mandatory Disclosure)</h2>
      <p>This website is operated by:</p>
      <ul>
        <li>
          <strong>{SITE.legalNameOperational}</strong> — Chamber of Commerce
          (KVK) No. {SITE.registrations.kvkCare}
        </li>
        <li>
          <strong>{SITE.legalNameHolding}</strong> — Chamber of Commerce (KVK)
          No. {SITE.registrations.kvkHealthcare}
        </li>
        <li>Head office: {SITE.contact.officeAddress.full}</li>
        <li>Warehouse: {SITE.contact.warehouseAddress.full}</li>
        <li>VAT Number: {SITE.registrations.vat}</li>
        <li>
          Email:{" "}
          <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
        </li>
        <li>Phone: {SITE.contact.phone}</li>
      </ul>

      <p>
        <strong>Licences held by {SITE.legalNameOperational}:</strong>
      </p>
      <ul>
        <li>
          Wholesale Distribution Authorisation (WDA) No.{" "}
          {SITE.licences.wda.number}, issued by the {SITE.licences.wda.issuer}
        </li>
        <li>
          Good Distribution Practice (GDP) Certificate No.{" "}
          {SITE.licences.gdp.number}
        </li>
      </ul>

      <p>
        <strong>Supervisory authority:</strong> Dutch Health and Youth Care
        Inspectorate (Inspectie Gezondheidszorg en Jeugd — IGJ), Stadsplateau 1,
        3521 AZ Utrecht, The Netherlands.
      </p>

      <h2>2. Purpose of this website</h2>
      <p>
        This website provides general information about the activities,
        licences, and services of {SITE.legalNameOperational}. It is intended
        for business-to-business (B2B) audiences — licensed pharmaceutical
        wholesalers, distributors, hospitals, pharmacies, and other qualified
        healthcare organisations. It is not intended for patients or the general
        public, and contains no medical advice.
      </p>

      <h2>3. No medical or purchasing advice</h2>
      <p>
        Information on this website is provided for general informational
        purposes only. It does not constitute medical advice, professional
        advice, or an offer to sell any product. Prescription medicines are
        supplied only to qualified partners through a licensed distribution
        process, in accordance with Esna Care&rsquo;s SOPs for supplier and
        customer qualification.
      </p>

      <h2>4. Product information</h2>
      <p>
        Where specific brand names, products, or therapeutic categories are
        mentioned, this is for the purpose of describing Esna Care&rsquo;s
        sourcing capabilities. Esna Care is an independent wholesaler and is not
        an authorised distributor of the brands listed, unless explicitly
        stated. Product availability depends on market conditions and regulatory
        requirements.
      </p>

      <h2>5. Intellectual property</h2>
      <p>
        All content on this website — including text, images, logos, and
        graphics — is the property of {SITE.legalNameOperational},{" "}
        {SITE.legalNameHolding}, or their respective owners, and is protected by
        Dutch and international copyright and trademark law. You may not
        reproduce, redistribute, or commercially use any content from this
        website without prior written permission. Third-party brand names and
        logos are the property of their respective owners and are used only for
        identification purposes.
      </p>

      <h2>6. Use of the website</h2>
      <p>
        You agree to use this website only for lawful purposes and in a manner
        that does not infringe the rights of, or restrict or inhibit the use and
        enjoyment of, this website by any third party. You agree not to:
      </p>
      <ul>
        <li>
          Submit false, misleading, or fraudulent information via the contact or
          supplier forms
        </li>
        <li>
          Attempt to gain unauthorised access to the website, its servers, or
          connected systems
        </li>
        <li>Introduce malware, viruses, or other harmful code</li>
        <li>
          Use any automated means (scrapers, bots) to extract data from the
          website
        </li>
      </ul>

      <h2>7. Links to third-party websites</h2>
      <p>
        This website may contain links to external websites. Esna Care is not
        responsible for the content, accuracy, or privacy practices of external
        sites.
      </p>

      <h2>8. Liability</h2>
      <p>
        Esna Care takes reasonable care to ensure that information on this
        website is accurate and up to date, but makes no warranty or
        representation, express or implied, as to the completeness, accuracy, or
        reliability of any information. To the extent permitted by law, Esna
        Care excludes liability for any direct, indirect, or consequential loss
        arising from use of this website.
      </p>

      <h2>9. Privacy and cookies</h2>
      <p>
        Your use of this website is also governed by our{" "}
        <Link href="/privacy-policy" prefetch>
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/cookie-policy" prefetch>
          Cookie Policy
        </Link>
        .
      </p>

      <h2>10. Governing law and jurisdiction</h2>
      <p>
        These terms, and any dispute arising from use of this website, are
        governed by the laws of the Netherlands. The competent court in Utrecht
        has exclusive jurisdiction, without prejudice to mandatory
        consumer-protection provisions where applicable.
      </p>

      <h2>11. Changes to these terms</h2>
      <p>
        We may update these Terms &amp; Conditions from time to time. Material
        changes will be reflected in the &ldquo;Last updated&rdquo; date at the
        top of this page.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these terms? Email us at{" "}
        <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>.
      </p>
    </LegalLayout>
  );
};

export default TermsPage;
