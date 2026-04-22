export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  bullets: string[];
  icon:
    | "pharma-wholesale"
    | "global-sourcing"
    | "international-distribution"
    | "temperature-controlled";
};

export const SERVICES: Service[] = [
  {
    slug: "pharmaceutical-wholesale",
    title: "Pharmaceutical Wholesale",
    summary:
      "Supply of branded and generic medicines through a trusted global supplier network.",
    description:
      "We operate as an EU-licensed wholesaler for a broad catalogue of branded and generic medicinal products — sourced from authorised manufacturers and distributors across Europe and delivered to wholesalers, hospitals, and pharmacies internationally.",
    bullets: [
      "EU-sourced branded & generic medicines",
      "Serving wholesalers, distributors, hospitals & pharmacies",
      "Full documentation & batch traceability on every shipment",
      "Supply-disruption and hard-to-source support",
    ],
    icon: "pharma-wholesale",
  },
  {
    slug: "global-sourcing",
    title: "Global Sourcing",
    summary:
      "Access to a wide range of pharmaceutical products through established international partners.",
    description:
      "Our sourcing network spans licensed wholesalers across the EU and qualified international partners, giving our customers access to a broad portfolio of products — including specialty, orphan, and hard-to-source treatments that are otherwise difficult to procure.",
    bullets: [
      "Established network across EU member states",
      "Qualified international supplier partners",
      "Specialty, oncology, and orphan treatments on request",
      "Dedicated handling for urgent and short-shelf-life requests",
    ],
    icon: "global-sourcing",
  },
  {
    slug: "international-distribution",
    title: "International Distribution",
    summary:
      "Reliable and efficient delivery of pharmaceutical products across international markets.",
    description:
      "Operating under a Wholesale Distribution Authorisation (WDA) for procurement, supply, and export, we coordinate shipments to qualified customers worldwide — including medicinal products intended for export outside the EEA, as permitted under the WDA.",
    bullets: [
      "WDA authorisation for procurement, supply & export",
      "Export of medicines outside the EEA where permitted",
      "Qualified customer vetting under GDP SOPs",
      "Full export documentation & customs support",
    ],
    icon: "international-distribution",
  },
  {
    slug: "temperature-controlled-logistics",
    title: "Temperature-Controlled Logistics",
    summary:
      "Handling and distribution of medicines requiring controlled storage conditions (2–8 °C & 15–25 °C).",
    description:
      "Through our qualified warehousing partner, we handle cold-chain products (2–8 °C) and controlled-ambient products (15–25 °C) with continuous temperature monitoring — from intake through outbound shipment, in line with EU GDP Guidelines.",
    bullets: [
      "Cold-chain 2–8 °C and controlled-ambient 15–25 °C",
      "Continuous monitoring & validated excursions",
      "GDP-compliant qualified warehousing",
      "Biologics, injectables, and specialty therapies handled",
    ],
    icon: "temperature-controlled",
  },
];

export type ProductCategory = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon:
    | "branded"
    | "generic"
    | "hospital"
    | "specialty"
    | "cold-chain"
    | "prescription";
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: "branded-medicines",
    title: "Branded Medicines",
    summary: "Trusted brands across multiple therapeutic areas.",
    description:
      "Access to a broad catalogue of branded medicinal products sourced from authorised channels across the European Economic Area.",
    icon: "branded",
  },
  {
    slug: "generic-medicines",
    title: "Generic Medicines",
    summary: "High-quality alternatives for common and specialized treatments.",
    description:
      "A wide range of generics — including specialized treatments — supplied with full regulatory and batch documentation.",
    icon: "generic",
  },
  {
    slug: "hospital-medicines",
    title: "Hospital Medicines",
    summary: "Injectable therapies and critical care products.",
    description:
      "Injectables, emergency and ICU medicines for hospital and institutional healthcare customers.",
    icon: "hospital",
  },
  {
    slug: "specialty-hard-to-source",
    title: "Specialty & Hard-to-Source",
    summary: "Oncology, orphan (rare disease), and complex therapies.",
    description:
      "Rare, specialty, and orphan treatments sourced through qualified international partners — including during supply disruptions.",
    icon: "specialty",
  },
  {
    slug: "temperature-sensitive",
    title: "Temperature-Sensitive",
    summary:
      "Stored and transported under strict conditions (2–8 °C & 15–25 °C).",
    description:
      "Biologics and thermolabile products handled under validated cold-chain or ambient conditions, end-to-end.",
    icon: "cold-chain",
  },
  {
    slug: "prescription-medicines",
    title: "Prescription Medicines",
    summary: "For healthcare providers and distributors worldwide.",
    description:
      "Prescription-only medicines supplied to qualified customers under our Customer Qualification SOP.",
    icon: "prescription",
  },
];

export type TherapeuticArea = {
  slug: string;
  title: string;
  description: string;
  examples: string[];
  icon:
    | "oncology"
    | "rare"
    | "cardio"
    | "immunology"
    | "neurology"
    | "critical"
    | "cold-chain"
    | "vitamins";
};

export const THERAPEUTIC_AREAS: TherapeuticArea[] = [
  {
    slug: "oncology",
    title: "Oncology",
    description: "Targeted therapies, immunotherapies & supportive care.",
    examples: ["Vitrakvi", "Pemazyre", "Lysodren", "Lenalidomide"],
    icon: "oncology",
  },
  {
    slug: "rare-orphan-diseases",
    title: "Rare & Orphan Diseases",
    description: "Hard-to-source treatments for rare conditions.",
    examples: ["Filspari", "Voxzogo", "Koselugo", "Radicut"],
    icon: "rare",
  },
  {
    slug: "cardiovascular",
    title: "Cardiovascular",
    description: "Antihypertensives, statins & cardiac therapies.",
    examples: ["Exforge", "Tahor", "Beloc", "Vafseo"],
    icon: "cardio",
  },
  {
    slug: "immunology-biologics",
    title: "Immunology & Biologics",
    description: "Monoclonal antibodies & immune modulators.",
    examples: ["Dupixent", "Benlysta", "Evenity", "Emgality"],
    icon: "immunology",
  },
  {
    slug: "neurology-pain",
    title: "Neurology & Pain",
    description: "CNS therapies, migraine prevention & neuropathic care.",
    examples: ["Dantrium", "Cinnarizine", "Galcanezumab"],
    icon: "neurology",
  },
  {
    slug: "critical-hospital-care",
    title: "Critical & Hospital Care",
    description: "Injectable solutions, emergency & ICU medicines.",
    examples: ["Bactrim IV", "Cyanokit", "Tamiflu", "Reblozyl"],
    icon: "critical",
  },
  {
    slug: "temperature-sensitive",
    title: "Temperature-Sensitive",
    description: "Cold-chain managed biologics (2–8 °C).",
    examples: ["Voxzogo", "Reblozyl", "Evenity", "Benlysta"],
    icon: "cold-chain",
  },
  {
    slug: "vitamins-supplements",
    title: "Vitamins & Supplements",
    description: "Essential vitamins and nutritional support.",
    examples: ["Vitamin B12", "Centrum", "Nephrotrans"],
    icon: "vitamins",
  },
];

export const MEDICAL_DEVICE_CATEGORIES = [
  "Medical Devices",
  "Clinical Nutrition",
  "Self-Diagnostics",
  "Wound Care",
  "Diabetes Care",
] as const;

export const MEDICAL_DEVICE_BRANDS = [
  "Roche",
  "Abbott",
  "LifeScan",
  "Ascensia Diabetes Care",
  "A. Menarini",
  "Siemens Healthineers",
  "Ypsomed",
  "BD",
  "Novo Nordisk",
  "B. Braun",
  "Coloplast",
  "Convatec",
  "Smith & Nephew",
  "Mölnlycke Health Care",
  "3M",
] as const;

export const MEDICAL_DEVICE_DISCLAIMER =
  "Esna Care is an independent wholesaler and is not an authorized distributor of the listed brands. Product availability depends on market conditions and regulatory requirements.";

export const WHY_CHOOSE_US = [
  "Trusted pharmaceutical wholesale partner",
  "Reliable global supply network",
  "Commitment to product quality and compliance",
  "Responsive and customer-focused service",
  "Secure and efficient pharmaceutical supply chain",
];
