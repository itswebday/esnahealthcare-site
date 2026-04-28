export const SITE = {
  name: "Esna Care",
  legalNameOperational: "ESNA Care B.V.",
  legalNameHolding: "ESNA Healthcare B.V.",
  tagline: "Esna Care — because what we distribute matters.",
  description:
    "EU-licensed pharmaceutical wholesaler based in the Netherlands — supplying medicines and medical devices to qualified buyers.",
  mission:
    "Compliance, quality, and reliable access to medicines are not just business values. They are the reason we exist.",
  url: "https://esnahealthcare.nl",
  contact: {
    email: "info@esnahealthcare.nl",
    phone: "+31 6 15 3 69 208",
    phoneHref: "tel:+31615369208",
    whatsappHref: "https://wa.me/31615369208",
    officeAddress: {
      label: "Head Office",
      line1: "Newtonlaan 115",
      line2: "3584 BH Utrecht",
      country: "The Netherlands",
      full: "Newtonlaan 115, 3584 BH Utrecht, The Netherlands",
    },
    warehouseAddress: {
      label: "Warehouse",
      line1: "Markkaweg 1",
      line2: "2153 NB Nieuw-Vennep",
      country: "The Netherlands",
      full: "Markkaweg 1, 2153 NB Nieuw-Vennep, The Netherlands",
    },
  },
  registrations: {
    kvkCare: "78518563",
    kvkHealthcare: "74103830",
    vat: "NL861433701B01",
    eori: "NL861433701",
    rex: "NLREX7738",
  },
  licences: {
    wda: {
      number: "16615 G",
      issuedOn: "01/06/2021",
      issuer: "Dutch Ministry of Health (Farmatec | CIBG)",
      renewal: "Yearly renewable",
      scope: [
        "Medicinal products with a Marketing Authorisation in EEA country(s)",
        "Medicinal products without a Marketing Authorisation in the EEA and intended for exportation",
        "Authorised operations: Procurement, Supply, Export",
        "Cold-chain products (requiring low-temperature handling)",
      ],
    },
    gdp: {
      number: "NL/G24/2053458",
      issuedOn: "04/11/2024",
      issuer: "Dutch Health and Youth Care Inspectorate (IGJ)",
    },
  },
  regulatoryFramework: [
    "EU GDP compliant",
    "IGJ supervised",
    "EU regulatory aligned",
    "Formally audited and annually reviewed",
  ],
  qualificationSops: [
    {
      title: "Supplier Qualification SOP",
      description:
        "Standard operating procedure for the qualification of drug suppliers — provided privately to qualified partners after first contact.",
    },
    {
      title: "Customer Qualification SOP",
      description:
        "Standard operating procedure for the qualification of customers — provided privately to qualified partners after first contact.",
    },
  ],
  brands: {
    pharmaceuticals: [
      "Novartis",
      "Pfizer",
      "AstraZeneca",
      "Takeda",
      "Roche",
      "Sanofi",
    ],
    medicalDevices: [
      "Johnson & Johnson",
      "B. Braun",
      "Abbott",
      "Roche Diagnostics",
      "3M",
      "Mölnlycke",
    ],
    disclaimerPrefix:
      "Sourced through qualified channels — including manufacturers such as",
    disclaimerSuffix: "subject to availability and qualification.",
  },
} as const;

export type NavSubLink = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
  subLinks?: readonly NavSubLink[];
};

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Compliance", href: "/compliance" },
  {
    label: "Services & Products",
    href: "/services",
    subLinks: [
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "Medical Devices", href: "/products#medical-devices" },
      { label: "Procurement", href: "/we-buy-medicines" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
] as const;

export const FOOTER_UTILITY_LINKS = [
  { label: "Procurement", href: "/we-buy-medicines" },
] as const;
