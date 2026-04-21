import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Esna Care B.V. cookie policy. We use only strictly necessary cookies by default. Optional analytics cookies are off until consent.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      lastUpdated="Launch date placeholder"
      draftNote="draft — Eissa to review. Update the &quot;Examples&quot; column with actual cookie names once analytics tool is chosen. If no analytics tool deploys at launch, remove the Analytics row."
    >
      <p>
        This Cookie Policy explains how{" "}
        <strong>{SITE.legalNameOperational}</strong> uses cookies and similar
        technologies on this website.
      </p>

      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website.
        They allow the website to remember your actions and preferences over time.
      </p>

      <h2>2. Cookies we use</h2>
      <p>
        We use only the minimum cookies necessary to operate the site. We do not use
        advertising cookies, cross-site tracking, or social-media pixels.
      </p>
      <div className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)]">
        <table className="w-full border-collapse text-left">
          <thead className="bg-[var(--color-surface-1)]">
            <tr>
              <th className="px-5 py-3 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                Category
              </th>
              <th className="px-5 py-3 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                Purpose
              </th>
              <th className="px-5 py-3 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                Examples
              </th>
              <th className="px-5 py-3 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                Consent
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border)] text-[0.9rem]">
            <tr>
              <td className="px-5 py-3 font-medium">Strictly necessary</td>
              <td className="px-5 py-3">
                Essential site operation (remembering your cookie consent choice,
                language preference)
              </td>
              <td className="px-5 py-3 font-mono text-[0.85rem]">
                cookie_consent, lang
              </td>
              <td className="px-5 py-3 text-[var(--color-subtle)]">
                No — always on
              </td>
            </tr>
            <tr>
              <td className="px-5 py-3 font-medium">Analytics (optional)</td>
              <td className="px-5 py-3">
                Aggregate, privacy-friendly analysis of which pages are visited, so we
                can improve the site
              </td>
              <td className="px-5 py-3 font-mono text-[0.85rem]">
                Varies by provider — see the cookie banner for current details
              </td>
              <td className="px-5 py-3 text-[var(--color-subtle)]">
                Yes — off by default
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        We do not use Google Analytics or similar cross-site tracking services. Any
        analytics cookies, if enabled, are served by a privacy-friendly provider that
        does not share data with advertisers.
      </p>

      <h2>3. Managing your preferences</h2>
      <p>
        You can accept or decline analytics cookies via the cookie banner shown on
        your first visit, or change your choice at any time via the cookie settings
        link in the footer. You can also delete cookies from your browser settings at
        any time.
      </p>

      <h2>4. Third-party cookies</h2>
      <p>
        This site does not embed third-party services (such as video players, social
        feeds, or chat widgets) that would set their own cookies.
      </p>

      <h2>5. Changes to this policy</h2>
      <p>
        We may update this Cookie Policy from time to time. Material changes will be
        reflected in the &ldquo;Last updated&rdquo; date at the top of this page.
      </p>

      <h2>6. More information</h2>
      <p>
        Questions about cookies? Email us at{" "}
        <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>. For
        broader information on your rights, see our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalLayout>
  );
}
