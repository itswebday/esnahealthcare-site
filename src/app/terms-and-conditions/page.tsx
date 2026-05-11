import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions, mandatory disclosures, and legal notice for Esna Care B.V. — governed by the laws of the Netherlands.",
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: true, follow: true },
};

const html = `<h2>1. Legal Information (Mandatory Disclosure)</h2>
<p>This website is operated by:</p>
<ul>
<li><strong>ESNA Care B.V.</strong> — Chamber of Commerce (KVK) No. 78518563</li>
<li><strong>ESNA Healthcare B.V.</strong> — Chamber of Commerce (KVK) No. 74103830</li>
<li>Head office: Newtonlaan 115, 3584 BH Utrecht, The Netherlands</li>
<li>Warehouse: Markkaweg 1, 2153 NB Nieuw-Vennep, The Netherlands</li>
<li>VAT Number: NL861433701B01</li>
<li>Email: <a href="mailto:info@esnahealthcare.nl">info@esnahealthcare.nl</a></li>
<li>Phone: +31 6 15 3 69 208</li>
</ul>

<p><strong>Licences held by ESNA Care B.V.:</strong></p>
<ul>
<li>Wholesale Distribution Authorisation (WDA) No. 16615 G, issued by the Dutch Ministry of Health (Farmatec | CIBG)</li>
<li>Good Distribution Practice (GDP) Certificate No. NL/G24/2053458</li>
</ul>

<p><strong>Supervisory authority:</strong> Dutch Health and Youth Care Inspectorate (Inspectie Gezondheidszorg en Jeugd — IGJ), Stadsplateau 1, 3521 AZ Utrecht, The Netherlands.</p>

<h2>2. Purpose of this website</h2>
<p>This website provides general information about the activities, licences, and services of ESNA Care B.V. It is intended for business-to-business (B2B) audiences — licensed pharmaceutical wholesalers, distributors, hospitals, pharmacies, and other qualified healthcare organisations. It is not intended for patients or the general public, and contains no medical advice.</p>

<h2>3. No medical or purchasing advice</h2>
<p>Information on this website is provided for general informational purposes only. It does not constitute medical advice, professional advice, or an offer to sell any product. Prescription medicines are supplied only to qualified partners through a licensed distribution process, in accordance with Esna Care's SOPs for supplier and customer qualification.</p>

<h2>4. Product information</h2>
<p>Where specific brand names, products, or therapeutic categories are mentioned, this is for the purpose of describing Esna Care's sourcing capabilities. Esna Care is an independent wholesaler and is not an authorised distributor of the brands listed, unless explicitly stated. Product availability depends on market conditions and regulatory requirements.</p>

<h2>5. Intellectual property</h2>
<p>All content on this website — including text, images, logos, and graphics — is the property of ESNA Care B.V., ESNA Healthcare B.V., or their respective owners, and is protected by Dutch and international copyright and trademark law. You may not reproduce, redistribute, or commercially use any content from this website without prior written permission. Third-party brand names and logos are the property of their respective owners and are used only for identification purposes.</p>

<h2>6. Use of the website</h2>
<p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, this website by any third party. You agree not to:</p>
<ul>
<li>Submit false, misleading, or fraudulent information via the contact or supplier forms</li>
<li>Attempt to gain unauthorised access to the website, its servers, or connected systems</li>
<li>Introduce malware, viruses, or other harmful code</li>
<li>Use any automated means (scrapers, bots) to extract data from the website</li>
</ul>

<h2>7. Links to third-party websites</h2>
<p>This website may contain links to external websites. Esna Care is not responsible for the content, accuracy, or privacy practices of external sites.</p>

<h2>8. Liability</h2>
<p>Esna Care takes reasonable care to ensure that information on this website is accurate and up to date, but makes no warranty or representation, express or implied, as to the completeness, accuracy, or reliability of any information. To the extent permitted by law, Esna Care excludes liability for any direct, indirect, or consequential loss arising from use of this website.</p>

<h2>9. Privacy and cookies</h2>
<p>Your use of this website is also governed by our <a href="/privacy-policy">Privacy Policy</a> and <a href="/cookie-policy">Cookie Policy</a>.</p>

<h2>10. Governing law and jurisdiction</h2>
<p>These terms, and any dispute arising from use of this website, are governed by the laws of the Netherlands. The competent court in Utrecht has exclusive jurisdiction, without prejudice to mandatory consumer-protection provisions where applicable.</p>

<h2>11. Changes to these terms</h2>
<p>We may update these Terms &amp; Conditions from time to time. Material changes will be reflected in the "Last updated" date at the top of this page.</p>

<h2>12. Contact</h2>
<p>Questions about these terms? Email us at <a href="mailto:info@esnahealthcare.nl">info@esnahealthcare.nl</a>.</p>`;

const TermsPage: React.FC = () => {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="May 2026">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </LegalLayout>
  );
};

export default TermsPage;
