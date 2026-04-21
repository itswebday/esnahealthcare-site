import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Esna Care B.V. privacy policy — what we collect, how we use it, and your rights under GDPR. Data controller: ESNA Care B.V., Utrecht, The Netherlands.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="Launch date placeholder"
      draftNote="draft — Eissa and/or his legal advisor to review before launch, in particular: retention periods, hosting/email providers named below, and any additional processors."
    >
      <p>
        <strong>{SITE.legalNameOperational}</strong> respects your privacy and handles
        personal data in accordance with the EU General Data Protection Regulation
        (GDPR) and the Dutch Implementation Act (UAVG). This Privacy Policy explains
        what personal data we collect through this website, why we collect it, how we
        use it, and what rights you have.
      </p>

      <h2>1. Who we are (Data Controller)</h2>
      <ul>
        <li>
          <strong>{SITE.legalNameOperational}</strong> (KVK {SITE.registrations.kvkCare}) —
          operational entity and data controller for website enquiries
        </li>
        <li>
          <strong>{SITE.legalNameHolding}</strong> (KVK {SITE.registrations.kvkHealthcare}) —
          holding company
        </li>
        <li>Address: {SITE.contact.officeAddress.full}</li>
        <li>
          Email:{" "}
          <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
        </li>
        <li>Phone: {SITE.contact.phone}</li>
      </ul>

      <h2>2. What personal data we collect</h2>
      <p>
        Through this website we collect only the data you choose to provide via our
        contact and supplier offer forms:
      </p>
      <ul>
        <li>Company name</li>
        <li>Your name</li>
        <li>Email address</li>
        <li>Telephone number (optional)</li>
        <li>The content of your message</li>
        <li>Any file you choose to attach (for example, a stock list or product request)</li>
      </ul>
      <p>
        We do not collect sensitive categories of personal data (such as health data,
        political opinions, or biometric data) through this website.
      </p>

      <h2>3. How we use your data (Purposes &amp; Legal Bases)</h2>
      <div className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)]">
        <table className="w-full border-collapse text-left">
          <thead className="bg-[var(--color-surface-1)]">
            <tr>
              <th className="px-5 py-3 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                Purpose
              </th>
              <th className="px-5 py-3 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                Legal basis (GDPR)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border)] text-[0.95rem]">
            <tr>
              <td className="px-5 py-3">Responding to your enquiry or offer</td>
              <td className="px-5 py-3 font-mono text-[0.88rem]">
                Art. 6(1)(b) — pre-contractual steps at your request
              </td>
            </tr>
            <tr>
              <td className="px-5 py-3">
                Qualifying you as a supplier or customer under our GDP obligations
              </td>
              <td className="px-5 py-3 font-mono text-[0.88rem]">
                Art. 6(1)(c) — legal obligation (EU GDP Guidelines, Dutch Medicines Act)
              </td>
            </tr>
            <tr>
              <td className="px-5 py-3">
                Ongoing business correspondence after initial contact
              </td>
              <td className="px-5 py-3 font-mono text-[0.88rem]">
                Art. 6(1)(f) — legitimate business interest
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        We do not use your data for marketing, profiling, or automated
        decision-making.
      </p>

      <h2>4. Who we share your data with (Recipients &amp; Processors)</h2>
      <p>We share personal data only with service providers necessary to operate the business:</p>
      <ul>
        <li>
          <strong>Microsoft (Microsoft 365 / Outlook)</strong> — email hosting provider,
          processes messages you send to{" "}
          <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
        </li>
        <li>
          <strong>TransIP B.V.</strong> — website hosting provider (Netherlands-based)
        </li>
        <li>
          <strong>Our warehouse and logistics partners</strong> — only where relevant
          to fulfilling a specific contract
        </li>
      </ul>
      <p>
        All processors are bound by appropriate data processing agreements. We do not
        sell personal data to third parties. Where personal data is transferred
        outside the European Economic Area (for example, via Microsoft&rsquo;s global
        infrastructure), such transfers are covered by EU Standard Contractual
        Clauses or equivalent safeguards.
      </p>

      <h2>5. How long we keep your data (Retention)</h2>
      <ul>
        <li>
          Website enquiry messages: retained for up to 24 months after the last
          meaningful contact, then deleted.
        </li>
        <li>
          Files you attach (stock lists, product requests): handled as part of the
          enquiry and retained under the same period unless they form part of an
          active business relationship.
        </li>
        <li>
          Supplier and customer qualification records: retained for the periods
          required under EU GDP Guidelines and the Dutch Medicines Act (typically at
          least 5 years after the business relationship ends).
        </li>
      </ul>

      <h2>6. Your rights</h2>
      <p>Under the GDPR you have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data (where applicable)</li>
        <li>Restrict or object to processing</li>
        <li>Data portability</li>
        <li>Withdraw consent at any time (where processing is based on consent)</li>
        <li>
          Lodge a complaint with the Dutch Data Protection Authority (Autoriteit
          Persoonsgegevens, autoriteitpersoonsgegevens.nl)
        </li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>. We will
        respond within one month.
      </p>

      <h2>7. Cookies</h2>
      <p>
        This website uses a minimal set of cookies. See our{" "}
        <Link href="/cookies">Cookie Policy</Link> for full details.
      </p>

      <h2>8. Security</h2>
      <p>
        We use technical and organisational measures appropriate to the nature of the
        data processed, including encrypted connections (HTTPS), access controls, and
        vetted hosting providers. No system is completely secure, but we take
        reasonable steps to protect your data.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be
        reflected in the &ldquo;Last updated&rdquo; date at the top of this page.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about this policy? Email us at{" "}
        <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>.
      </p>
    </LegalLayout>
  );
}
