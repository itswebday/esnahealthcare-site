import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Esna Care B.V. cookie policy. We use only strictly necessary cookies by default. Optional analytics cookies are off until consent.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: true, follow: true },
};

const html = `<p>This Cookie Policy explains how <strong>ESNA Care B.V.</strong> uses cookies and similar technologies on this website.</p>

<h2>1. What are cookies?</h2>
<p>Cookies are small text files placed on your device when you visit a website. They allow the website to remember your actions and preferences over time.</p>

<h2>2. Cookies we use</h2>
<p>We use only the minimum cookies necessary to operate the site. We do not use advertising cookies, cross-site tracking, or social-media pixels.</p>
<ul>
<li><strong>Strictly necessary</strong> — essential site operation (remembering your cookie consent choice, language preference). Examples: <code>cookie_consent</code>, <code>lang</code>. Always on.</li>
<li><strong>Analytics (optional)</strong> — aggregate, privacy-friendly analysis of which pages are visited, so we can improve the site. Examples vary by provider — see the cookie banner for current details. Off by default.</li>
</ul>
<p>We do not use Google Analytics or similar cross-site tracking services. Any analytics cookies, if enabled, are served by a privacy-friendly provider that does not share data with advertisers.</p>

<h2>3. Managing your preferences</h2>
<p>You can accept or decline analytics cookies via the cookie banner shown on your first visit, or change your choice at any time via the cookie settings link in the footer. You can also delete cookies from your browser settings at any time.</p>

<h2>4. Third-party cookies</h2>
<p>This site does not embed third-party services (such as video players, social feeds, or chat widgets) that would set their own cookies.</p>

<h2>5. Changes to this policy</h2>
<p>We may update this Cookie Policy from time to time. Material changes will be reflected in the "Last updated" date at the top of this page.</p>

<h2>6. More information</h2>
<p>Questions about cookies? Email us at <a href="mailto:info@esnahealthcare.nl">info@esnahealthcare.nl</a>. For broader information on your rights, see our <a href="/privacy-policy">Privacy Policy</a>.</p>`;

const CookiesPage: React.FC = () => {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="May 2026">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </LegalLayout>
  );
};

export default CookiesPage;
