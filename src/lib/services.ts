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
      "Supply of branded and generic medicines through a trusted global supplier network — serving wholesalers, distributors, hospitals, and pharmacies worldwide.",
    bullets: [
      "EU-sourced branded & generic medicines",
      "Wholesalers, distributors, hospitals & pharmacies",
      "Full documentation & batch traceability",
      "Supply-disruption and hard-to-source support",
    ],
    icon: "pharma-wholesale",
  },
  {
    slug: "global-sourcing",
    title: "Global Sourcing",
    summary:
      "Specialty, orphan, and hard-to-source treatments — including shortage medicines across EU markets.",
    description:
      "Specialty, orphan, and hard-to-source treatments — including shortage medicines across EU markets — sourced through a pre-qualified EU and international supplier network.",
    bullets: [
      "Pre-qualified EU supplier network",
      "Qualified international partners",
      "Specialty, oncology & orphan treatments on request",
      "Shortage medicines across EU markets",
    ],
    icon: "global-sourcing",
  },
  {
    slug: "international-distribution",
    title: "International Distribution",
    summary:
      "WDA-authorised procurement, supply, and export — including shipments outside the EEA.",
    description:
      "Operating under a Wholesale Distribution Authorisation (WDA), we coordinate procurement, supply, and export to qualified customers — including medicinal products intended for shipment outside the EEA, where permitted.",
    bullets: [
      "WDA authorisation: procurement, supply & export",
      "Export of medicines outside the EEA where permitted",
      "Qualified customer vetting under our SOPs",
      "Full export documentation & customs support",
    ],
    icon: "international-distribution",
  },
  {
    slug: "temperature-controlled",
    title: "Temperature-Controlled Storage and Handling",
    summary:
      "Validated 2–8 °C and 15–25 °C operations — continuously monitored and fully documented.",
    description:
      "Validated 2–8 °C and 15–25 °C operations — continuously monitored and fully documented from intake to delivery, in line with EU GDP Guidelines.",
    bullets: [
      "Cold-chain 2–8 °C and controlled-ambient 15–25 °C",
      "Continuous monitoring & validated excursions",
      "GDP-compliant qualified warehousing",
      "Biologics, injectables & specialty therapies",
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
      "Branded medicinal products sourced from authorised channels across the European Economic Area.",
    icon: "branded",
  },
  {
    slug: "generic-medicines",
    title: "Generic Medicines",
    summary: "High-quality alternatives for common and specialised treatments.",
    description:
      "A broad range of generics, supplied with full regulatory and batch documentation.",
    icon: "generic",
  },
  {
    slug: "hospital-injectables",
    title: "Hospital & Injectables",
    summary: "Injectable therapies and critical care products.",
    description:
      "Injectables, emergency and ICU medicines for hospital and institutional healthcare customers.",
    icon: "hospital",
  },
  {
    slug: "specialty-hard-to-source",
    title: "Specialty & Hard-to-Source",
    summary: "Oncology, orphan and complex therapies.",
    description:
      "Specialty and orphan treatments sourced through qualified international partners — including during supply disruptions.",
    icon: "specialty",
  },
  {
    slug: "temperature-sensitive",
    title: "Temperature-Sensitive Medicines",
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
      "Prescription-only medicines supplied exclusively to qualified customers.",
    icon: "prescription",
  },
];

export type TherapeuticArea = {
  slug: string;
  title: string;
  description: string;
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
    description: "Targeted therapies, immunotherapies and supportive care.",
    icon: "oncology",
  },
  {
    slug: "rare-orphan-diseases",
    title: "Rare & Orphan Diseases",
    description: "Hard-to-source treatments for rare conditions.",
    icon: "rare",
  },
  {
    slug: "cardiovascular",
    title: "Cardiovascular",
    description: "Antihypertensives, statins and cardiac therapies.",
    icon: "cardio",
  },
  {
    slug: "immunology-biologics",
    title: "Immunology & Biologics",
    description: "Monoclonal antibodies and immune modulators.",
    icon: "immunology",
  },
  {
    slug: "neurology-pain",
    title: "Neurology & Pain",
    description: "CNS therapies, migraine prevention and neuropathic care.",
    icon: "neurology",
  },
  {
    slug: "critical-hospital-care",
    title: "Critical & Hospital Care",
    description: "Injectable solutions, emergency and ICU medicines.",
    icon: "critical",
  },
  {
    slug: "temperature-sensitive-biologics",
    title: "Temperature-Sensitive Biologics",
    description: "Cold-chain managed biologics (2–8 °C).",
    icon: "cold-chain",
  },
  {
    slug: "vitamins-supplements",
    title: "Vitamins & Supplements",
    description: "Essential vitamins and nutritional support.",
    icon: "vitamins",
  },
];

export const MEDICAL_DEVICE_CATEGORIES = [
  "Diagnostics",
  "Wound Care",
  "Diabetes Care",
  "Clinical Nutrition",
  "Self-Diagnostics",
] as const;
