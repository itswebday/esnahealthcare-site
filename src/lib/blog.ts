export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedOn: string;
  readingMinutes: number;
  author: string;
  heroEyebrow: string;
  body: Array<
    | { type: "paragraph"; text: string }
    | { type: "heading"; text: string }
    | { type: "list"; items: string[] }
    | { type: "quote"; text: string; attribution?: string }
  >;
  isDraft?: boolean;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "gdp-in-practice-what-a-wholesaler-does-every-day",
    title:
      "GDP in practice: what a licensed wholesaler actually does every day",
    summary:
      "Good Distribution Practice isn't a binder on a shelf — it's a daily operating discipline. A plain-language tour of what it looks like inside a licensed EU wholesaler.",
    category: "Compliance",
    publishedOn: "2026-04-12",
    readingMinutes: 8,
    author: "Esna Care editorial team",
    heroEyebrow: "Compliance",
    body: [
      {
        type: "paragraph",
        text: "If you have ever asked a pharmaceutical wholesaler how they comply with Good Distribution Practice, the answer often arrives as a three-letter acronym and a PDF. That is accurate but incomplete. GDP — the EU Guidelines 2013/C 343/01 — is an operating discipline, not a document. It shapes how stock is received, how temperature is monitored, how partners are qualified, and how a shipment finds its way from an authorised manufacturer to a hospital pharmacy.",
      },
      { type: "heading", text: "The operating loop behind every shipment" },
      {
        type: "paragraph",
        text: "Every inbound shipment enters a controlled loop: qualification, documentation, quarantine, release, storage under the correct conditions, and — when the order is placed — outbound handling against a qualified customer. Each step is logged. Each step has an owner. The reason is simple: medicinal products are trust-sensitive assets, and an audit trail is the only thing that scales trust.",
      },
      {
        type: "list",
        items: [
          "Qualification of suppliers before any first purchase order",
          "Qualification of customers before any first dispatch",
          "Continuous temperature monitoring for cold-chain (2–8 °C) and controlled-ambient (15–25 °C) products",
          "Documented deviation handling with a root-cause review",
          "Annual review of the quality system, procedures, and training records",
        ],
      },
      { type: "heading", text: "Why this matters to the receiving pharmacy" },
      {
        type: "paragraph",
        text: "When a hospital pharmacist receives a box, they need to know three things immediately: that the product is what the label says, that it has been handled under the right conditions throughout the chain, and that the batch is traceable in both directions. GDP is the framework that makes all three verifiable, not merely claimed. For us, that translates into discipline on our side so partners do not have to spend theirs auditing us.",
      },
      {
        type: "quote",
        text: "Compliance isn't an audit response. It's the way the work is done every day between audits.",
      },
      {
        type: "heading",
        text: "The Responsible Person and what the role actually does",
      },
      {
        type: "paragraph",
        text: "Every WDA holder names a Responsible Person (RP). The role is sometimes mistaken for an internal auditor or a compliance officer in name only. In practice the RP signs off on supplier and customer qualification, decides whether deviations are recoverable, blocks releases when documentation is incomplete, and personally reviews any complaint or recall. It is a working role, not a credential, and it is the most consequential signature on most days.",
      },
      { type: "heading", text: "Documentation that travels with the product" },
      {
        type: "paragraph",
        text: "Every shipment leaves with documentation that mirrors what we keep on file: a packing list, a delivery note, batch numbers and expiry dates, and — for cold-chain products — the temperature log of the transport leg. Receiving pharmacies need that evidence at the dock, not on request days later. We treat outbound paperwork as part of the product, not as administration.",
      },
      {
        type: "list",
        items: [
          "Batch number and expiry on every line item",
          "Temperature monitoring data for cold-chain consignments",
          "WDA reference and Responsible Person contact",
          "Shipment-specific deviation log if any excursion was recorded",
        ],
      },
      { type: "heading", text: "A short note on what GDP is not" },
      {
        type: "paragraph",
        text: "GDP is not a guarantee of availability, a statement about pricing, or a certificate that travels with a product across unrelated regulatory frameworks (for example, medical devices fall under MDR, not GDP). It is precisely what it claims to be: a standard for the distribution of medicinal products for human use. That precision is what makes it trustworthy.",
      },
      { type: "heading", text: "What this looks like to a partner" },
      {
        type: "paragraph",
        text: "If you place an enquiry with us, the first response will look conservative: a qualification questionnaire, a request for proof of authorisation on your side, and a written confirmation of scope. That conservatism is by design. By the time the first order ships, the audit trail on both sides is complete, and the operational tempo can move quickly without leaving questions behind.",
      },
    ],
  },
  {
    slug: "sourcing-hard-to-find-medicines-without-compromising-compliance",
    title: "Sourcing hard-to-find medicines without compromising compliance",
    summary:
      "Drug shortages and orphan treatments demand creative sourcing — but creativity has to stay inside the lines. How we think about hard-to-source requests.",
    category: "Sourcing",
    publishedOn: "2026-03-28",
    readingMinutes: 7,
    author: "Esna Care editorial team",
    heroEyebrow: "Sourcing",
    body: [
      {
        type: "paragraph",
        text: "Hard-to-source requests — from a hospital searching for an orphan oncology treatment to a pharmacy chain navigating a shortage of a cardiovascular staple — are where sourcing becomes genuinely difficult. The work has two directions at once: expand the search radius, and narrow the compliance margin.",
      },
      { type: "heading", text: "Expand the search, narrow the margin" },
      {
        type: "paragraph",
        text: "Expanding the search means drawing on a qualified network across the EEA and qualified international partners. Narrowing the compliance margin means the opposite discipline: every supplier that enters the search has to already be qualified under our SOP, every batch has to come with complete documentation, and every product has to match the authorisation route we intend to use. A broad search with loose paperwork is not an option.",
      },
      {
        type: "list",
        items: [
          "Qualified supplier network across the EEA",
          "Partner channels for specialty and orphan treatments",
          "Documented batch provenance on every offer",
          "Route check against WDA scope before commitment",
          "Pricing transparency separated from sourcing decisions",
        ],
      },
      { type: "heading", text: "What a hard-to-source request looks like" },
      {
        type: "paragraph",
        text: "A typical request comes in three forms. A hospital looking for a specific oncology product that is in temporary shortage on their domestic market. A pharmacy chain trying to maintain continuity on a chronic-disease line during a manufacturer pause. A treating physician asking, through their hospital pharmacy, for a named-patient supply of an unauthorised product. Each has a different compliance route — and the work begins with identifying which route applies before any supplier is contacted.",
      },
      {
        type: "quote",
        text: "Speed and compliance are not opposing forces. The fastest sourcing is the kind that doesn't have to be redone.",
      },
      { type: "heading", text: "Documentation we ask for upfront" },
      {
        type: "paragraph",
        text: "Before we begin a hard-to-source search, we ask the requesting partner for three pieces of information: the exact product description (active substance, strength, presentation, manufacturer if known), the regulatory route they intend to use on their side (compassionate use, named-patient, parallel import, etc.), and confirmation of their own authorisation. With those three items, the search converges quickly. Without them, it does not converge at all.",
      },
      {
        type: "list",
        items: [
          "Active substance, strength, presentation, manufacturer",
          "Quantity needed and timeline",
          "Regulatory route on the receiving side",
          "Receiving authorisation reference",
        ],
      },
      { type: "heading", text: "Why we sometimes say no" },
      {
        type: "paragraph",
        text: "There are requests we cannot fulfil — product lines without a compliant route, suppliers that cannot meet our qualification bar, timelines that would require shortcuts. Saying no is part of the service. A reliable wholesaler is one whose yes is credible, which requires that its no is used when needed.",
      },
      { type: "heading", text: "Where we add the most value" },
      {
        type: "paragraph",
        text: "We are most useful when a request is unusual but routable. Common-and-easy requests are well-served by larger generalist distributors; impossible requests should be declined directly. The middle ground — a specialty oncology product available in three EEA markets, a cold-chain biologic in shortage, a niche route requiring named-patient documentation — is where the combination of network depth and compliance discipline produces something neither a pure broker nor a pure compliance consultancy can.",
      },
    ],
  },
  {
    slug: "cold-chain-handling-what-2-to-8-celsius-really-requires",
    title: "Cold-chain handling: what 2–8 °C really requires",
    summary:
      "Cold-chain is more than a fridge. A practical look at the controls that keep a 2–8 °C biologic viable from intake to delivery.",
    category: "Operations",
    publishedOn: "2026-03-10",
    readingMinutes: 6,
    author: "Esna Care editorial team",
    heroEyebrow: "Operations",
    body: [
      {
        type: "paragraph",
        text: "The 2–8 °C band looks like a simple number on a label, but maintaining it across a supply chain is anything but simple. A biologic can lose efficacy after a single extended excursion, which is why cold-chain handling is one of the most closely regulated areas of GDP.",
      },
      { type: "heading", text: "What continuous monitoring actually means" },
      {
        type: "paragraph",
        text: "Continuous means continuous: the temperature is logged throughout intake, storage, picking, packing, and outbound transit — not just at the bookends. When an excursion occurs, it is documented, assessed, and either released or quarantined depending on the validated tolerance for that specific product.",
      },
      {
        type: "list",
        items: [
          "Calibrated data loggers on storage areas and shipping containers",
          "Validated excursion tolerances per product family",
          "Root-cause review and corrective action after every deviation",
          "Annual requalification of warehousing and transport lanes",
          "Pre-conditioned packaging for every cold-chain consignment",
        ],
      },
      { type: "heading", text: "The handover problem" },
      {
        type: "paragraph",
        text: "Most cold-chain failures do not happen in the warehouse. They happen at handovers — between transport carrier and receiving dock, between courier and pharmacy fridge, between dispatch and intake systems that don't talk to each other. We treat every handover as a controlled event with a recorded temperature, a signed acceptance, and a defined window for response.",
      },
      {
        type: "quote",
        text: "A cold-chain product that arrives on time but unmonitored has not actually arrived. It has only travelled.",
      },
      {
        type: "heading",
        text: "Excursion tolerances are product-specific, not facility-wide",
      },
      {
        type: "paragraph",
        text: "It is tempting to set a single excursion tolerance for the whole warehouse — say, no more than two hours above 8 °C — and apply it uniformly. That is not how the regulation works. Every product family has its own validated stability data, often different by manufacturer and presentation. A vaccine and a biologic injectable that share a fridge can have very different recovery windows. Our deviation log records the per-product tolerance, not just the excursion.",
      },
      { type: "heading", text: "Why this matters for specialty medicines" },
      {
        type: "paragraph",
        text: "Many of the specialty and orphan treatments we source are cold-chain. That makes the discipline especially important — one warm afternoon in the wrong truck is the kind of avoidable failure that the monitoring regime is designed to prevent.",
      },
      { type: "heading", text: "How partners can help" },
      {
        type: "paragraph",
        text: "Receiving partners contribute to the chain by accepting at the dock, checking the data logger before signing, and storing immediately. We supply the equipment and the documentation; the receiving side controls the last 30 minutes, which is the most common point of failure. The clearer the handover protocol on both sides, the smaller the residual risk.",
      },
    ],
  },
  {
    slug: "wda-scope-export-procurement-supply-in-plain-language",
    title: "WDA scope in plain language: procurement, supply, and export",
    summary:
      "A Wholesale Distribution Authorisation is more specific than people assume. A short guide to what our WDA actually authorises — and what it doesn't.",
    category: "Compliance",
    publishedOn: "2026-02-14",
    readingMinutes: 5,
    author: "Esna Care editorial team",
    heroEyebrow: "Compliance",
    body: [
      {
        type: "paragraph",
        text: "Our Wholesale Distribution Authorisation (WDA, No. 16615 G) is published in EudraGMDP. Anyone can read it. But the document uses compact regulatory language, so here is the plain version.",
      },
      { type: "heading", text: "What the WDA covers" },
      {
        type: "list",
        items: [
          "Medicinal products with a Marketing Authorisation in EEA country(s)",
          "Medicinal products without a Marketing Authorisation in the EEA and intended for exportation",
          "Authorised operations: Procurement, Supply, Export",
          "Cold-chain products (2–8 °C) and controlled-ambient (15–25 °C)",
        ],
      },
      { type: "heading", text: "Reading the three operations literally" },
      {
        type: "paragraph",
        text: "Procurement, Supply, and Export are not interchangeable. Procurement is the act of acquiring stock from authorised manufacturers and other licensed wholesalers. Supply is the dispatch of stock to qualified customers, typically pharmacies and hospitals, within the EEA. Export covers shipments to recipients outside the EEA. A given consignment falls under exactly one of these activities, and the documentation that accompanies it is shaped by which one applies.",
      },
      {
        type: "quote",
        text: "Compliance documents work as constraints, not promises. The WDA tells you what we are authorised to do — not everything we are willing to do for every partner on every day.",
      },
      { type: "heading", text: "What it doesn't cover" },
      {
        type: "paragraph",
        text: "The WDA covers medicinal products for human use. Medical devices are regulated under the Medical Device Regulation (EU 2017/745), which is a separate framework with its own obligations. Where we support customers with medical devices, that is handled through registered distribution partners, not under this WDA.",
      },
      { type: "heading", text: "Verifying it for yourself" },
      {
        type: "paragraph",
        text: "If you are qualifying us as a supplier, you should not rely on a screenshot or a PDF we forward. The authoritative source is EudraGMDP — every EU/EEA WDA is published there, with the holder, the scope, the operations authorised, and the issuing authority. Search for the WDA number directly. Cross-check against the GDP certificate (NL/G24/2053458, issued by IGJ on 04/11/2024). If the two agree, the licence chain is valid.",
      },
      {
        type: "list",
        items: [
          "WDA number 16615 G — searchable on EudraGMDP",
          "GDP certificate NL/G24/2053458 — issued by IGJ",
          "Issued by Farmatec | CIBG, Dutch Ministry of Health",
          "Annual renewal cycle — confirm the current expiry on EudraGMDP",
        ],
      },
      {
        type: "paragraph",
        text: "If there is ever any doubt about whether a specific request is in scope, the answer is in the EudraGMDP entry and in our internal scope register — and we will tell you directly.",
      },
    ],
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find((p) => p.slug === slug);
};

export const getAdjacentPosts = (slug: string) => {
  const idx = BLOG_POSTS.findIndex((p) => p.slug === slug);
  if (idx === -1) {
    return { previous: undefined, next: undefined };
  }
  return {
    previous: BLOG_POSTS[idx + 1],
    next: BLOG_POSTS[idx - 1],
  };
};
