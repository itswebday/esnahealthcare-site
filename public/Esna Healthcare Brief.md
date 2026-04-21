# Esna Healthcare / Esna Care — Website Project Brief

> **Purpose.** Single source of truth for the Esna Care website project. This brief captures what the client wants. Technical implementation choices (framework, form handler, hosting mechanics, analytics tool) are for the developer to decide separately. Where a section is marked `{TO CONFIRM}` or listed under §15, it's an open item requiring an answer before or during build.

---

## 1. Project Summary

Build a clean, professional, trust-building B2B website for **Esna Care B.V.**, a Dutch EU-licensed pharmaceutical wholesaler. The site must communicate regulatory credibility (GDP/WDA), explain Esna Care's sourcing and distribution activities, and generate qualified inbound leads (both buyers and suppliers) through an RFQ-style contact flow.

- **Client-facing company:** Esna Care B.V. (operational entity)
- **Primary audience:** B2B — pharmaceutical wholesalers, distributors, hospitals, pharmacies, healthcare institutions, and potential suppliers (internationally)
- **Primary goals, in order:**
  1. Build trust and demonstrate compliance (GDP + WDA)
  2. Explain clearly what Esna Care does (sourcing, distribution, export, supply-disruption support)
  3. Generate qualified RFQs and supplier contacts
  4. Present therapeutic capabilities credibly
- **Tone of voice:** Corporate, calm, factual, pharmaceutical-industry standard. No marketing fluff. No consumer-health language. No medical claims. No product efficacy claims.
- **Languages:** English + Dutch. See §15 for scope clarification — Dutch translation was not in the original €749 quote and requires commercial confirmation.

---

## 2. Company & Legal Structure

The client operates under two Dutch legal entities. Both must be referenced correctly on the website (especially footer and Compliance page).

| Entity | Role | KVK |
|---|---|---|
| **ESNA Healthcare B.V.** | Holding company | 74103830 |
| **ESNA Care B.V.** | Operational company — holds GDP + WDA, handles pharma trading | 78518563 |

**Addresses:**
- **Registered address (Esna Care):** Adriaen van Ostadelaan 165-4, 3583 AH Utrecht, The Netherlands
- **Office address (public-facing):** Newtonlaan 115, 3584 BH Utrecht, The Netherlands
- **Warehouse:** Cyberfreight Amsterdam, Markkaweg 1, 2153 NB, Nieuw-Vennep, The Netherlands

**Other registration data:**
- VAT: NL861433701B01
- EORI: NL861433701
- REX: NLREX7738

**Contact:**
- Email: `info@esnahealthcare.nl`
- Phone: `+31 6 15 3 69 208`

> **Public-facing address = Newtonlaan 115, 3584 BH Utrecht.** Do not display the warehouse address or bank details publicly anywhere on the site.

---

## 3. Licences & Compliance (critical)

This is the most important trust signal on the site. Present accurately; do not invent, embellish, or restate regulatory scope.

- **Wholesale Distribution Authorisation (WDA):** No. **16615 G** — granted 01/06/2021, yearly renewable. Issued by the Dutch Ministry of Health (Farmatec | CIBG).
- **Good Distribution Practice (GDP) Certificate:** No. **NL/G24/2053458** — issued 04/11/2024.

**Scope of WDA (from the authorisation document):**
- Medicinal products with a Marketing Authorisation in EEA country(s)
- Medicinal products without a Marketing Authorisation in the EEA and intended for exportation
- Authorised operations: Procurement, Supply, Export
- Additional requirements: Cold-chain products (requiring low-temperature handling)

**Regulatory framework to reference on the Compliance page:**
- EU Directive 2001/83/EC on medicinal products for human use
- EU GDP Guidelines (2013/C 343/01)
- Dutch Medicines Act (Geneesmiddelenwet)
- Regular inspections by the Dutch Health and Youth Care Inspectorate (IGJ)

**Downloadable compliance assets (must be linked from the Compliance page):**
1. Pharma Wholesale Licence PDF (Dutch "Groothandelsvergunning")
2. WDA — EudraGMDP (Union Format) PDF
3. GDP Certificate PDF
4. Supplier Qualification SOP (QA-014) — external version
5. Customer Qualification SOP (QA-015) — external version

All five are provided in the project assets folder. Link them from the Compliance page, open in new tab. Do not regenerate or edit these PDFs.

**Responsible Persons (from the WDA):** R.J. Bruinink and J.J.M. Koster. They are not named on the public site — they are already listed in the public EudraGMDP register.

---

## 4. What Esna Care Does (positioning)

Use this as the canonical description. Rewrite/shorten per page, but do not contradict it.

Esna Care is an EU-licensed pharmaceutical wholesaler based in the Netherlands, specializing in the sourcing and distribution of high-quality branded and generic medicines. Through a trusted international supplier and partner network, Esna Care provides licensed pharmaceutical supply to wholesalers, distributors, hospitals, and pharmacies worldwide — including procurement, supply, export, and temperature-controlled handling of cold-chain and ambient medicinal products.

**Core activities:**
- Sourcing medicines across Europe
- Supplying wholesalers and distributors
- Supporting partners during supply disruptions and hard-to-source requests
- Exporting medicinal products (including products intended for export outside the EEA, as permitted under the WDA)
- Cold-chain (2–8 °C) and controlled-ambient (15–25 °C) handling

**Mission statement (use verbatim or lightly edited):**
> "To supply high-quality pharmaceutical products through licensed distribution and trusted global networks, maintaining the highest standards of quality and compliance."

---

## 5. Site Map

Main nav: **Home · About · Services · Products · Compliance · Contact**. "We Buy Medicines" is a standalone supplier-facing page, linked from Home and Services but not a top-level nav item (optional: include in a secondary nav or footer column).

```
/                        Home
/about                   About Us
/services                Services
/products                Products / Therapeutic areas / Medical devices
/compliance              Compliance (GDP/WDA + downloadable SOPs & certificates)
/we-buy-medicines        Suppliers-focused page (supplier offer form + qualification info)
/contact                 Contact / RFQ form
/faq                     FAQ
/privacy                 Privacy Policy
/cookies                 Cookie Policy
/terms                   Terms / Legal Notice
```

Primary CTA across the site: **"Get in Touch"** (opens /contact).

---

## 6. Page-by-page Requirements

### 6.1 Home (`/`)

1. **Hero**
   - Badge: `EU Licensed & GDP Certified`
   - H1: `Global Pharmaceutical Supply & EU Wholesale`
   - Subheading: `Providing branded & generic medicines to distributors, pharmacies, and healthcare partners worldwide.`
   - CTAs: `Contact Us` (primary → /contact), `Learn More` (secondary → /services)
   - Background: warehouse / pharmaceutical imagery — see photo note in §9

2. **Who We Are** — short paragraph based on §4, ending on the mission statement.

3. **Our Services** (4 cards) — headline: `Our Services`, subhead: `End-to-end pharmaceutical supply solutions built on compliance and reliability.`
   - **Pharmaceutical Wholesale** — Supply of branded and generic medicines through a trusted global supplier network.
   - **Global Sourcing** — Access to a wide range of pharmaceutical products through established international partners.
   - **International Distribution** — Reliable and efficient delivery of pharmaceutical products across international markets.
   - **Temperature-Controlled Logistics** — Handling and distribution of medicines requiring controlled storage conditions (2–8 °C & 15–25 °C).

4. **Products We Supply** (6 cards) — headline: `Products We Supply`, subhead: `A broad portfolio of pharmaceutical products ensuring continuous availability.`
   - Branded Medicines — Trusted brands across multiple therapeutic areas
   - Generic Medicines — High-quality alternatives for common and specialized treatments
   - Hospital Medicines — Injectable therapies and critical care products
   - Specialty & Hard-to-Source — Oncology, orphan (rare disease), and complex therapies
   - Temperature-Sensitive — Stored and transported under strict conditions (2–8 °C & 15–25 °C)
   - Prescription Medicines — For healthcare providers and distributors worldwide

5. **Therapeutic Areas** — headline: `Therapeutic Areas`, subhead: `We supply over 200 pharmaceutical products across major therapeutic categories — from oncology and rare diseases to hospital care and biologics.` See §6.4 for the full grid.

6. **From Our Supply Chain** — photo gallery. Placeholder until better photos are available (see §9).

7. **Need Our Full Product Catalog?** CTA card — headline, short copy (`Our complete catalog with 200+ products, pricing and availability is available upon request for qualified healthcare distributors.`), button `Request Full Catalog` → /contact with subject prefilled.

8. **Why Choose Esna Care** — two-column block with a bullet list on the left and a "Our Licences" card on the right.
   - Bullets: Trusted pharmaceutical wholesale partner · Reliable global supply network · Commitment to product quality and compliance · Responsive and customer-focused service · Secure and efficient pharmaceutical supply chain
   - Licences card: `WDA Licence No.: 16615 G` and `GDP Licence No.: NL/G 24/2053458`

9. **Footer** — see §6.8.

### 6.2 About Us (`/about`)

- Expanded version of "Who We Are" (§4)
- `{TO CONFIRM — Eissa to provide 2–3 sentences on founding story / why Esna Care exists}`
- Group structure (Healthcare holding + Care operational) explained plainly
- Headquarters (Utrecht) + mention of warehouse partner in Nieuw-Vennep **without the full warehouse address**
- Short statement on quality culture, inspections, and ongoing audits

### 6.3 Services (`/services`)

- Expand the four service cards from the homepage into full sections (2–3 paragraphs each)
- Include supply-disruption / hard-to-source capability as part of the sourcing narrative
- Teaser linking into the Medical Devices subsection on /products
- Teaser linking to /we-buy-medicines for potential suppliers
- Close with CTA to /contact

### 6.4 Products (`/products`)

**Therapeutic Areas grid (8 cards).** Descriptions and example products from the client's approved mockup.

> **⚠ CONFIRM WITH CLIENT BEFORE LAUNCH.** Listing specific branded medicines on a public EU pharma wholesaler site carries some risk (unauthorised trade-name use, parallel-trade signalling, regulator attention). The client's mockup lists them, so they are included below per client direction. Recommend explicit sign-off from Eissa or his Responsible Person (Bruinink / Koster) before production launch. Fallback: remove example-product columns and keep therapeutic-area descriptions only. See §15 item 1.

| Area | Description | Example products |
|---|---|---|
| Oncology | Targeted therapies, immunotherapies & supportive care | Vitrakvi, Pemazyre, Lysodren, Lenalidomide |
| Rare & Orphan Diseases | Hard-to-source treatments for rare conditions | Filspari, Voxzogo, Koselugo, Radicut |
| Cardiovascular | Antihypertensives, statins & cardiac therapies | Exforge, Tahor, Beloc, Vafseo |
| Immunology & Biologics | Monoclonal antibodies & immune modulators | Dupixent, Benlysta, Evenity, Emgality |
| Neurology & Pain | CNS therapies, migraine prevention & neuropathic care | Dantrium, Cinnarizine, Galcanezumab |
| Critical & Hospital Care | Injectable solutions, emergency & ICU medicines | Bactrim IV, Cyanokit, Tamiflu, Reblozyl |
| Temperature-Sensitive | Cold-chain managed biologics (2–8 °C) | Voxzogo, Reblozyl, Evenity, Benlysta |
| Vitamins & Supplements | Essential vitamins and nutritional support | Vitamin B12, Centrum, Nephrotrans |

**Medical Devices & Diagnostics subsection:**

> **⚠ CONFIRM WITH CLIENT BEFORE LAUNCH.** Wholesaling medical devices in the EU falls under the Medical Device Regulation (MDR, Regulation EU 2017/745), which is separate from the pharmaceutical WDA. Economic operators (including distributors) have specific obligations under MDR — EUDAMED registration, vigilance reporting, traceability. Before publishing this section, confirm with Eissa that Esna Care is set up as an MDR-compliant distributor or that supply is handled through appropriately registered partners. See §15 item 6.

- Intro: Esna Care is an international pharmaceutical wholesaler specializing in the global distribution of medicinal products. In addition to our core pharmaceutical activities, we provide access to a carefully selected range of medical devices and diagnostic solutions through our trusted global partner network.
- Categories: Medical Devices · Clinical Nutrition · Self-Diagnostics · Wound Care · Diabetes Care
- Brands sourced (grid): Roche, Abbott, LifeScan, Ascensia Diabetes Care, A. Menarini, Siemens Healthineers, Ypsomed, BD, Novo Nordisk, B. Braun, Coloplast, Convatec, Smith & Nephew, Mölnlycke Health Care, 3M
- **Required disclaimer (verbatim):** *"Esna Care is an independent wholesaler and is not an authorized distributor of the listed brands. Product availability depends on market conditions and regulatory requirements."*

**Catalog request CTA** at the bottom — same block as §6.1.7.

> Do not build a real product database, e-commerce, or pricing display. Catalog is requested via form only.

### 6.5 Compliance (`/compliance`)

Structure mirrors the approved mockup (in the assets folder).

1. **Hero / intro** — one-paragraph statement that Esna Care operates under full EU regulatory authorisation.
2. **Two licence cards side by side:**
   - **Wholesale Distribution Authorisation (WDA)** — No. 16615 G — short explanatory paragraph + buttons: `Wholesale Licence` (PDF) and `WDA — EudraGMDP` (PDF)
   - **Good Distribution Practice (GDP)** — No. NL/G 24/2053458 — short explanatory paragraph + button: `GDP Certificate` (PDF)
3. **Corporate Registration** block — list both KVK numbers and the registered address.
4. **Regulatory Framework** block — the 4 bullets listed in §3.
5. **Qualification Forms** — two download cards:
   - `Supplier Qualification SOP` — "Standard operating procedure for the qualification of drug suppliers." — button `View PDF`
   - `Customer Qualification SOP` — "Standard operating procedure for the qualification of customers." — button `View PDF`
6. **Our Quality Commitment** — short statement on QMS, audits, continuous improvement.
7. **Medcor-style licence strip:** a thin footer strip present on every page, displaying the licence numbers and linking to the official PDFs in a new tab.

### 6.6 We Buy Medicines (`/we-buy-medicines`)

Standalone supplier-focused page. Distinct audience from buyers, distinct CTA.

- Headline: `We Buy Medicines — Offer Your Stock to Esna Care`
- Short intro: Esna Care sources branded and generic medicines across Europe. Suppliers with available stock are invited to submit an offer.
- **How it works (3 steps):** submit offer → qualification check → purchasing decision
- **What we're looking for:** EU-sourced stock, full documentation, remaining shelf life, batch information, cold-chain and ambient products welcome
- **Qualification:** all suppliers are qualified against Esna Care's SOP (link to the Supplier Qualification SOP PDF from the Compliance page)
- **Supplier Offer Form:** same fields as the main RFQ form plus a file-upload slot for a stock list

### 6.7 Contact / RFQ (`/contact`)

**Fields:**
- Company Name
- Your Name *(required)*
- Telephone
- Email *(required)*
- Message
- **Attachment** (optional) — accepts spreadsheet and PDF formats; used for stock lists / RFQs. Max file size to be set to whatever the hosting environment supports sensibly (target ~10 MB, reduce if environment constraints require)
- Hidden field: source page (so we know whether the form came from /contact, /we-buy-medicines, or the "Request Full Catalog" CTA)

**Behaviour:**
- Form submits to `info@esnahealthcare.nl`
- Spam protection appropriate to the chosen handling method
- Success state: inline thank-you message, no page redirect
- GDPR: include a short consent checkbox `I agree to Esna Care processing my data to respond to this enquiry.` linking to the Privacy Policy

**Contact block on page (non-form side):**
- Address: Newtonlaan 115, 3584 BH Utrecht, The Netherlands
- Email: info@esnahealthcare.nl
- Registration: ESNA Healthcare B.V. (KVK 74103830) · ESNA Care B.V. (KVK 78518563)
- Phone: +31 6 15 3 69 208

### 6.8 Footer (global)

- Left: Esna Care logo + tagline `Part of the ESNA Healthcare group — international pharmaceutical supply and distribution.` + link `Compliance & Certifications →`
- Right: full contact / registration block:
  - `ESNA Healthcare B.V. (KVK 74103830) | ESNA Care B.V. (KVK 78518563)`
  - `Newtonlaan 115 | 3584 BH | Utrecht | The Netherlands`
  - `Licences: WDA No.: 16615 G | GDP No.: NL/G 24/2053458`
- Bottom bar: `© {current_year} Esna Care — All rights reserved.`
- Secondary links: Privacy Policy · Cookie Policy · Terms of Use · FAQ · We Buy Medicines
- Language switcher (EN / NL) — see §15 on Dutch scope

### 6.9 FAQ (`/faq`)

Short FAQ targeting typical supplier / buyer questions. Answers to be supplied by client (mark as `{TO CONFIRM — Eissa to provide}`). Suggested starting list:

- In which countries does Esna Care operate?
- What are your minimum order quantities?
- How quickly do you respond to an RFQ?
- Do you handle cold-chain products?
- How do I become a qualified supplier / customer?
- Can you supply products without a Marketing Authorisation in the EEA?
- Do you support export outside the EEA?
- Which therapeutic areas do you cover?

### 6.10 Privacy Policy (`/privacy`)

Full content to publish. Developer may edit only for phrasing; do not remove sections without client approval. Effective date should be the site launch date.

> **Privacy Policy**
>
> *Last updated: {launch date}*
>
> Esna Care B.V. respects your privacy and handles personal data in accordance with the EU General Data Protection Regulation (GDPR) and the Dutch Implementation Act (UAVG). This Privacy Policy explains what personal data we collect through this website, why we collect it, how we use it, and what rights you have.
>
> **1. Who we are (Data Controller)**
>
> - **ESNA Care B.V.** (KVK 78518563) — operational entity and data controller for website enquiries
> - **ESNA Healthcare B.V.** (KVK 74103830) — holding company
> - Address: Newtonlaan 115, 3584 BH Utrecht, The Netherlands
> - Email: info@esnahealthcare.nl
> - Phone: +31 6 15 3 69 208
>
> **2. What personal data we collect**
>
> Through this website we collect only the data you choose to provide via our contact and supplier offer forms:
>
> - Company name
> - Your name
> - Email address
> - Telephone number (optional)
> - The content of your message
> - Any file you choose to attach (for example, a stock list or product request)
>
> We do not collect sensitive categories of personal data (such as health data, political opinions, or biometric data) through this website.
>
> **3. How we use your data (Purposes & Legal Bases)**
>
> | Purpose | Legal basis (GDPR) |
> |---|---|
> | Responding to your enquiry or offer | Art. 6(1)(b) — pre-contractual steps at your request |
> | Qualifying you as a supplier or customer under our GDP obligations | Art. 6(1)(c) — legal obligation (EU GDP Guidelines, Dutch Medicines Act) |
> | Ongoing business correspondence after initial contact | Art. 6(1)(f) — legitimate business interest |
>
> We do not use your data for marketing, profiling, or automated decision-making.
>
> **4. Who we share your data with (Recipients & Processors)**
>
> We share personal data only with service providers necessary to operate the business:
>
> - **Microsoft (Microsoft 365 / Outlook)** — email hosting provider, processes messages you send to `info@esnahealthcare.nl`
> - **TransIP B.V.** — website hosting provider (Netherlands-based)
> - **Our warehouse and logistics partners** — only where relevant to fulfilling a specific contract
>
> All processors are bound by appropriate data processing agreements. We do not sell personal data to third parties. Where personal data is transferred outside the European Economic Area (for example, via Microsoft's global infrastructure), such transfers are covered by EU Standard Contractual Clauses or equivalent safeguards.
>
> **5. How long we keep your data (Retention)**
>
> - Website enquiry messages: retained for up to 24 months after the last meaningful contact, then deleted.
> - Files you attach (stock lists, product requests): handled as part of the enquiry and retained under the same period unless they form part of an active business relationship.
> - Supplier and customer qualification records: retained for the periods required under EU GDP Guidelines and the Dutch Medicines Act (typically at least 5 years after the business relationship ends).
>
> **6. Your rights**
>
> Under the GDPR you have the right to:
>
> - Access the personal data we hold about you
> - Request correction of inaccurate data
> - Request deletion of your data (where applicable)
> - Restrict or object to processing
> - Data portability
> - Withdraw consent at any time (where processing is based on consent)
> - Lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens, autoriteitpersoonsgegevens.nl)
>
> To exercise any of these rights, contact us at `info@esnahealthcare.nl`. We will respond within one month.
>
> **7. Cookies**
>
> This website uses a minimal set of cookies. See our [Cookie Policy](/cookies) for full details.
>
> **8. Security**
>
> We use technical and organisational measures appropriate to the nature of the data processed, including encrypted connections (HTTPS), access controls, and vetted hosting providers. No system is completely secure, but we take reasonable steps to protect your data.
>
> **9. Changes to this policy**
>
> We may update this Privacy Policy from time to time. Material changes will be reflected in the "Last updated" date at the top of this page.
>
> **10. Contact**
>
> Questions about this policy? Email us at `info@esnahealthcare.nl`.

`{DRAFT — Eissa and/or his legal advisor to review, in particular: retention periods, confirmation of which hosting/email providers should be named, and any additional processors not listed above.}`

### 6.11 Cookie Policy (`/cookies`)

Full content to publish.

> **Cookie Policy**
>
> *Last updated: {launch date}*
>
> This Cookie Policy explains how ESNA Care B.V. uses cookies and similar technologies on this website.
>
> **1. What are cookies?**
>
> Cookies are small text files placed on your device when you visit a website. They allow the website to remember your actions and preferences over time.
>
> **2. Cookies we use**
>
> We use only the minimum cookies necessary to operate the site. We do not use advertising cookies, cross-site tracking, or social-media pixels.
>
> | Category | Purpose | Examples | Consent required |
> |---|---|---|---|
> | Strictly necessary | Essential site operation (e.g., remembering your cookie consent choice, language preference) | `cookie_consent`, `lang` | No — these are always on |
> | Analytics (optional) | Aggregate, privacy-friendly analysis of which pages are visited, so we can improve the site | Varies by provider — see the cookie banner for current details | Yes — off by default, enabled only with your consent |
>
> We do not use Google Analytics or similar cross-site tracking services. Any analytics cookies, if enabled, are served by a privacy-friendly provider that does not share data with advertisers.
>
> **3. Managing your preferences**
>
> You can accept or decline analytics cookies via the cookie banner shown on your first visit, or change your choice at any time via the cookie settings link in the footer. You can also delete cookies from your browser settings at any time.
>
> **4. Third-party cookies**
>
> This site does not embed third-party services (such as video players, social feeds, or chat widgets) that would set their own cookies.
>
> **5. Changes to this policy**
>
> We may update this Cookie Policy from time to time. Material changes will be reflected in the "Last updated" date at the top of this page.
>
> **6. More information**
>
> Questions about cookies? Email us at `info@esnahealthcare.nl`. For broader information on your rights, see our [Privacy Policy](/privacy).

`{DRAFT — Eissa to review. Update the "Examples" column with the actual cookie names once the analytics tool is chosen. If no analytics tool is deployed at launch, remove the Analytics row entirely.}`

### 6.12 Terms of Use / Legal Notice (`/terms`)

Full content to publish. Fulfils Dutch legal information disclosure requirements (Article 3:15d Dutch Civil Code and the E-Commerce Directive).

> **Terms of Use & Legal Notice**
>
> *Last updated: {launch date}*
>
> **1. Legal Information (Mandatory Disclosure)**
>
> This website is operated by:
>
> - **ESNA Care B.V.** — Chamber of Commerce (KVK) No. 78518563
> - **ESNA Healthcare B.V.** — Chamber of Commerce (KVK) No. 74103830
> - Registered address: Adriaen van Ostadelaan 165-4, 3583 AH Utrecht, The Netherlands
> - Office address: Newtonlaan 115, 3584 BH Utrecht, The Netherlands
> - VAT Number: NL861433701B01
> - Email: `info@esnahealthcare.nl`
> - Phone: +31 6 15 3 69 208
>
> **Licences held by ESNA Care B.V.:**
>
> - Wholesale Distribution Authorisation (WDA) No. 16615 G, issued by the Dutch Ministry of Health (Farmatec | CIBG)
> - Good Distribution Practice (GDP) Certificate No. NL/G24/2053458
>
> **Supervisory authority:** Dutch Health and Youth Care Inspectorate (Inspectie Gezondheidszorg en Jeugd — IGJ), Stadsplateau 1, 3521 AZ Utrecht, The Netherlands.
>
> **2. Purpose of this website**
>
> This website provides general information about the activities, licences, and services of ESNA Care B.V. It is intended for business-to-business (B2B) audiences — licensed pharmaceutical wholesalers, distributors, hospitals, pharmacies, and other qualified healthcare organisations. It is not intended for patients or the general public, and contains no medical advice.
>
> **3. No medical or purchasing advice**
>
> Information on this website is provided for general informational purposes only. It does not constitute medical advice, professional advice, or an offer to sell any product. Prescription medicines are supplied only to qualified partners through a licensed distribution process, in accordance with Esna Care's SOPs for supplier and customer qualification.
>
> **4. Product information**
>
> Where specific brand names, products, or therapeutic categories are mentioned, this is for the purpose of describing Esna Care's sourcing capabilities. Esna Care is an independent wholesaler and is not an authorised distributor of the brands listed, unless explicitly stated. Product availability depends on market conditions and regulatory requirements.
>
> **5. Intellectual property**
>
> All content on this website — including text, images, logos, and graphics — is the property of ESNA Care B.V., ESNA Healthcare B.V., or their respective owners, and is protected by Dutch and international copyright and trademark law. You may not reproduce, redistribute, or commercially use any content from this website without prior written permission. Third-party brand names and logos are the property of their respective owners and are used only for identification purposes.
>
> **6. Use of the website**
>
> You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, this website by any third party. You agree not to:
>
> - Submit false, misleading, or fraudulent information via the contact or supplier forms
> - Attempt to gain unauthorised access to the website, its servers, or connected systems
> - Introduce malware, viruses, or other harmful code
> - Use any automated means (scrapers, bots) to extract data from the website
>
> **7. Links to third-party websites**
>
> This website may contain links to external websites (for example, to the Dutch medicines regulator or the EudraGMDP register). Esna Care is not responsible for the content, accuracy, or privacy practices of external sites.
>
> **8. Liability**
>
> Esna Care takes reasonable care to ensure that information on this website is accurate and up to date, but makes no warranty or representation, express or implied, as to the completeness, accuracy, or reliability of any information. To the extent permitted by law, Esna Care excludes liability for any direct, indirect, or consequential loss arising from use of this website.
>
> **9. Privacy and cookies**
>
> Your use of this website is also governed by our [Privacy Policy](/privacy) and [Cookie Policy](/cookies).
>
> **10. Governing law and jurisdiction**
>
> These terms, and any dispute arising from use of this website, are governed by the laws of the Netherlands. The competent court in Utrecht has exclusive jurisdiction, without prejudice to mandatory consumer-protection provisions where applicable.
>
> **11. Changes to these terms**
>
> We may update these Terms of Use from time to time. Material changes will be reflected in the "Last updated" date at the top of this page.
>
> **12. Contact**
>
> Questions about these terms? Email us at `info@esnahealthcare.nl`.

`{DRAFT — Eissa and/or his legal advisor to review. Written to reflect Dutch law and the specific B2B pharmaceutical wholesale context of this site, but not a substitute for legal review.}`

---

## 7. Features & Functionality

### 7.1 RFQ / Contact form
One shared form component, reused on /contact and /we-buy-medicines with field-level variations (supplier version emphasises file attachment and stock-offer framing).

### 7.2 Stock list upload
- Attachment field on the RFQ form and the supplier offer form
- Accepts spreadsheet and PDF formats
- Files are forwarded by email to `info@esnahealthcare.nl` and not stored long-term on the server. **No persistent database of uploads.**

### 7.3 Licence documents prominently visible
- Compliance page is the main hub
- Footer includes licence numbers on every page
- Medcor-style clickable licence strip at the bottom of key pages (Home, About, Services, Products) linking to the official PDFs

### 7.4 FAQ page
See §6.9.

### 7.5 Cookie banner
Minimal, GDPR-compliant. Categories: Strictly Necessary (always on), Analytics (opt-in). Default state: analytics off until consent. Wording and categories must match §6.11.

### 7.6 Analytics
Privacy-friendly (no cross-site tracking). Specific tool choice is the developer's call, subject to the no-paid-subscriptions constraint in §10. If no analytics tool is deployed at launch, remove the Analytics row from §6.11.

### 7.7 Language switcher
Visible in header and footer, EN / NL. See §15 on scope.

---

## 8. Design Direction

- **Style:** clean, corporate, pharmaceutical. Reliable, institutional, modern but not trendy.
- **Reference:** the mockup PDFs in the assets folder represent the client-approved visual direction. Use as a baseline; do not copy pixel-for-pixel. Refine typography, spacing, and hierarchy as needed.
- **Color palette (from the approved mockup — verify exact values against the mockup source):**
  - Primary: deep navy
  - Accent / CTA: teal-green gradient into navy
  - Neutrals: white, light gray, text gray
- **Typography:** a modern, professional sans-serif. One family, two weights maximum.
- **Imagery:** warehouse, packaging, and product photography. Avoid generic "handshake" or "pills in hands" stock photography. See §9 re: quality.
- **Iconography:** simple line icons. No heavy illustration.
- **Accessibility:** WCAG 2.1 AA — sufficient color contrast, focus states, semantic HTML, alt text on all meaningful images.
- **Responsive:** mobile-first. Must work well on phone, tablet, and desktop.

**Logo.** The existing Esna Care logo (green "E" + `ESNA CARE` wordmark) is confirmed for this build. No redesign in scope.

---

## 9. Content Assets (in the shared project folder)

| File | Use |
|---|---|
| `Esna_Care_info-2025-stamp.pdf` | Internal reference (addresses, reg numbers, bank details). **Do NOT publish bank details.** |
| `ESNA_Care-WholeSaleLicense.pdf` | Downloadable from Compliance page |
| `ESNACARE-WDA-EUDRAGMDP.pdf` | Downloadable from Compliance page |
| `GDP_certificaat_Esna_Care_Utrecht.pdf` | Downloadable from Compliance page |
| `Supplier-Client_Account_Form_ESNACARE-2021-ACC-003.docx` | Internal reference; **do not publish** |
| `Esna_Care___Home_section.pdf` | Design reference — home mockup |
| `ESNA_Care___Services_section.pdf` | Design reference — services mockup |
| `Esna_Care_Medical_Devices_Mockup.pdf` | Content for the Medical Devices subsection on /products |
| `ESNA_Care___Compliance_section-.pdf` | Design reference — compliance mockup |
| Supplier Qualification SOP (external) | Downloadable from Compliance page (convert to PDF if a clean PDF isn't already in the folder) |
| Customer Qualification SOP (external) | Downloadable from Compliance page (same) |

> **Do not publish:** bank details, internal SOPs, supplier/client account form, warehouse address, any document marked "Controlled Document" that isn't the explicit external SOP.

**Photography — open item.** The product and warehouse photos currently provided by the client are **low quality** and will need replacements before launch. Build the site with placeholder positions for these images and a clear swap-in plan. See §15 item 3.

---

## 10. Constraints (client-facing, non-technical)

These are fixed by the client. The developer decides the technical implementation that satisfies them.

- **Ongoing costs must stay close to the client's current TransIP hosting (~€12/month incl. BTW).** No new recurring costs may be introduced by this project.
- **No paid monthly SaaS subscriptions** (no paid CMS, no paid form tools, no paid analytics).
- **Hosting stays on TransIP.** Domain unchanged. No migration planned.
- **Email stays on Microsoft 365** (Outlook / OneDrive). Unchanged by this project.
- **The current WordPress + Divi site is to be replaced**, not migrated. There is no existing content worth preserving.

---

## 11. SEO Requirements (basic)

- Per-page unique `<title>` and `<meta description>` — write defaults for every page
- Open Graph + Twitter Card tags
- Proper semantic HTML (one H1 per page, logical heading hierarchy)
- Sitemap.xml generated at build time
- Robots.txt (allow all)
- JSON-LD structured data: `Organization` on homepage (legalName, vatID, address, contactPoint) and `BreadcrumbList` where relevant
- Canonical URLs on every page
- Descriptive alt text on all content images
- Keyword focus (baseline — client to refine):
  - "EU pharmaceutical wholesaler"
  - "GDP certified wholesaler Netherlands"
  - "pharmaceutical sourcing Europe"
  - "medicine export EU"

No paid SEO tooling. No tracking scripts beyond privacy-friendly analytics.

---

## 12. Legal / Compliance Requirements on the Site

- **Privacy Policy, Cookie Policy, Terms / Legal Notice:** full content drafted in §6.10 / §6.11 / §6.12. Client reviews and approves before launch.
- **No medical claims** anywhere on the site. No product efficacy claims. No disease-cure claims. Strictly wholesale / distribution language.
- **No price information** published.
- **No brand endorsements.** Always include the "independent wholesaler, not authorised distributor" disclaimer where third-party brands are listed (§6.4).

---

## 13. Out of Scope

Not included in the agreed price:

- E-commerce / cart / checkout
- Real-time stock database
- User accounts / login / customer portal
- Paid advertising setup
- Advanced SEO / ongoing SEO retainer
- Email marketing / newsletter system
- Third-party CRM integration
- Ongoing content creation after launch
- Monthly maintenance (can be offered separately)
- Logo redesign (client declined the €150 add-on)
- **Dutch translation content (see §15).** The original quote covered English; Dutch as a second language was added during briefing and needs commercial confirmation with the client.

---

## 14. Timeline, Pricing & Commercials

- **Price:** €749 excl. VAT
- **Deadline:** ready by the **3rd week of April 2026**
- **Hosting:** remains on TransIP (client's account); no new recurring cost
- **Domains & email:** unchanged; no migration
- **Review:** staging URL provided to client (Eissa) for review and sign-off before production launch

---

## 15. Open Items / Decisions Pending

| # | Item | Owner | Status |
|---|---|---|---|
| 1 | **Branded medicine names on /products** — listing specific brands (Dupixent, Vitrakvi, Voxzogo, etc.) publicly carries regulatory/commercial risk. Client's mockup lists them; brief currently includes them per client direction. Confirm with Eissa (and ideally his Responsible Person) before launch. Fallback option: keep therapeutic-area descriptions, remove example-product column. | Client (Eissa) | **Action required before launch** |
| 2 | Dutch as a second language — confirm scope and commercial arrangement (translation work was not included in the original €749 quote) | Developer to discuss with client | **Action required before build starts** |
| 3 | About Us — client to provide 2–3 sentences on founding story / why Esna Care exists | Client (Eissa) | Pending |
| 4 | Replacement product / warehouse photos (current photos are low quality) | Client (Eissa) | Pending — placeholders in build, swap before launch |
| 5 | FAQ answers — factual answers to the questions in §6.9 | Client (Eissa) | Pending |
| 6 | **Medical Devices & Diagnostics section** — confirm Esna Care is set up as an MDR-compliant distributor (or that medical devices are supplied only through appropriately registered partners). Client confirmed publishing the section; regulatory basis to be verified. | Client (Eissa) | **Action required before launch** |
| 7 | Confirm which contact email receives RFQ submissions (currently `info@esnahealthcare.nl` — confirm OK or create dedicated `rfq@esnahealthcare.nl`) | Client (Eissa) | Pending |
| 8 | Privacy / Cookie / Terms content drafted in §6.10–§6.12; client to review (ideally with legal advisor) before launch | Client (Eissa) | Pending |

---

## 16. Definition of Done

The project is delivered when all of the following are true:

- [ ] All pages listed in §5 are built, populated per §6, and responsive on mobile, tablet, and desktop
- [ ] All compliance PDFs in §3 are accessible and downloadable from the Compliance page
- [ ] RFQ and Supplier Offer forms submit successfully to `info@esnahealthcare.nl` with attachments working
- [ ] Legal pages (Privacy, Cookies, Terms) are published with the content in §6.10–§6.12, reviewed and approved by the client
- [ ] No console errors on any page
- [ ] Basic SEO requirements in §11 are met
- [ ] Accessibility targets in §8 are met
- [ ] No paid services or subscriptions have been introduced
- [ ] Open items §15 items 1 and 6 have been explicitly resolved with the client before production launch
- [ ] Client has reviewed the staging URL and signed off
- [ ] Site is deployed to production on TransIP

---

## 17. Notes for Claude Code

- **Always confirm before publishing any brand name, regulatory claim, or licence scope that isn't explicitly in this brief.** Regulatory copy matters; get it right or leave it out.
- **Never invent numbers** (licence numbers, KVK numbers, inspection dates, product counts). If missing, use a `{TO CONFIRM}` placeholder.
- When generating FAQ answers, or any copy not supplied in this brief, mark it `{DRAFT — review with client}` so it's easy to find before launch.
- **Two sections are flagged for explicit client confirmation before production launch**: the branded-medicine list on /products (§6.4, §15 item 1), and the Medical Devices & Diagnostics section (§6.4, §15 item 6). Build both as written, but do not launch without resolving these.
- **Responsible Persons (Bruinink, Koster) are not named on the public site.**
- **Warehouse address and bank details are never published.**
- Prefer fewer dependencies over more. Client is cost-sensitive and long-term maintenance-sensitive.
- When in doubt, ask — a quick clarifying question is cheaper than rework.
