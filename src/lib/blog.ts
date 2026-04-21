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
  draft?: boolean;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "gdp-in-practice-what-a-wholesaler-does-every-day",
    title: "GDP in practice: what a licensed wholesaler actually does every day",
    summary:
      "Good Distribution Practice isn't a binder on a shelf — it's a daily operating discipline. A plain-language tour of what it looks like inside a licensed EU wholesaler.",
    category: "Compliance",
    publishedOn: "2026-04-12",
    readingMinutes: 7,
    author: "Esna Care editorial team",
    heroEyebrow: "Compliance",
    body: [
      {
        type: "paragraph",
        text: "If you have ever asked a pharmaceutical wholesaler how they comply with Good Distribution Practice, the answer often arrives as a three-letter acronym and a PDF. That is accurate but incomplete. GDP — the EU Guidelines 2013/C 343/01 — is an operating discipline, not a document. It shapes how stock is received, how temperature is monitored, how partners are qualified, and how a shipment finds its way from an authorised manufacturer to a hospital pharmacy.",
      },
      {
        type: "heading",
        text: "The operating loop behind every shipment",
      },
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
      {
        type: "heading",
        text: "Why this matters to the receiving pharmacy",
      },
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
        text: "A short note on what GDP is not",
      },
      {
        type: "paragraph",
        text: "GDP is not a guarantee of availability, a statement about pricing, or a certificate that travels with a product across unrelated regulatory frameworks (for example, medical devices fall under MDR, not GDP). It is precisely what it claims to be: a standard for the distribution of medicinal products for human use. That precision is what makes it trustworthy.",
      },
    ],
    draft: true,
  },
  {
    slug: "sourcing-hard-to-find-medicines-without-compromising-compliance",
    title: "Sourcing hard-to-find medicines without compromising compliance",
    summary:
      "Drug shortages and orphan treatments demand creative sourcing — but creativity has to stay inside the lines. How we think about hard-to-source requests.",
    category: "Sourcing",
    publishedOn: "2026-03-28",
    readingMinutes: 6,
    author: "Esna Care editorial team",
    heroEyebrow: "Sourcing",
    body: [
      {
        type: "paragraph",
        text: "Hard-to-source requests — from a hospital searching for an orphan oncology treatment to a pharmacy chain navigating a shortage of a cardiovascular staple — are where sourcing becomes genuinely difficult. The work has two directions at once: expand the search radius, and narrow the compliance margin.",
      },
      {
        type: "heading",
        text: "Expand the search, narrow the margin",
      },
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
        ],
      },
      {
        type: "heading",
        text: "Why we sometimes say no",
      },
      {
        type: "paragraph",
        text: "There are requests we cannot fulfil — product lines without a compliant route, suppliers that cannot meet our qualification bar, timelines that would require shortcuts. Saying no is part of the service. A reliable wholesaler is one whose yes is credible, which requires that its no is used when needed.",
      },
    ],
    draft: true,
  },
  {
    slug: "cold-chain-handling-what-2-to-8-celsius-really-requires",
    title: "Cold-chain handling: what 2–8 °C really requires",
    summary:
      "Cold-chain is more than a fridge. A practical look at the controls that keep a 2–8 °C biologic viable from intake to delivery.",
    category: "Operations",
    publishedOn: "2026-03-10",
    readingMinutes: 5,
    author: "Esna Care editorial team",
    heroEyebrow: "Operations",
    body: [
      {
        type: "paragraph",
        text: "The 2–8 °C band looks like a simple number on a label, but maintaining it across a supply chain is anything but simple. A biologic can lose efficacy after a single extended excursion, which is why cold-chain handling is one of the most closely regulated areas of GDP.",
      },
      {
        type: "heading",
        text: "What continuous monitoring actually means",
      },
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
        ],
      },
      {
        type: "heading",
        text: "Why this matters for specialty medicines",
      },
      {
        type: "paragraph",
        text: "Many of the specialty and orphan treatments we source are cold-chain. That makes the discipline especially important — one warm afternoon in the wrong truck is the kind of avoidable failure that the monitoring regime is designed to prevent.",
      },
    ],
    draft: true,
  },
  {
    slug: "wda-scope-export-procurement-supply-in-plain-language",
    title: "WDA scope in plain language: procurement, supply, and export",
    summary:
      "A Wholesale Distribution Authorisation is more specific than people assume. A short guide to what our WDA actually authorises — and what it doesn't.",
    category: "Compliance",
    publishedOn: "2026-02-14",
    readingMinutes: 4,
    author: "Esna Care editorial team",
    heroEyebrow: "Compliance",
    body: [
      {
        type: "paragraph",
        text: "Our Wholesale Distribution Authorisation (WDA, No. 16615 G) is published in EudraGMDP. Anyone can read it. But the document uses compact regulatory language, so here is the plain version.",
      },
      {
        type: "heading",
        text: "What the WDA covers",
      },
      {
        type: "list",
        items: [
          "Medicinal products with a Marketing Authorisation in EEA country(s)",
          "Medicinal products without a Marketing Authorisation in the EEA and intended for exportation",
          "Authorised operations: Procurement, Supply, Export",
          "Cold-chain products (2–8 °C) and controlled-ambient (15–25 °C)",
        ],
      },
      {
        type: "heading",
        text: "What it doesn't cover",
      },
      {
        type: "paragraph",
        text: "The WDA covers medicinal products for human use. Medical devices are regulated under the Medical Device Regulation (EU 2017/745), which is a separate framework with its own obligations. Where we support customers with medical devices, that is handled through registered distribution partners, not under this WDA.",
      },
      {
        type: "paragraph",
        text: "If there is ever any doubt about whether a specific request is in scope, the answer is in the EudraGMDP entry and in our internal scope register — and we will tell you directly.",
      },
    ],
    draft: true,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug: string) {
  const idx = BLOG_POSTS.findIndex((p) => p.slug === slug);
  if (idx === -1) return { previous: undefined, next: undefined };
  return {
    previous: BLOG_POSTS[idx + 1],
    next: BLOG_POSTS[idx - 1],
  };
}
