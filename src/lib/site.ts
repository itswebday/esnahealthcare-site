export const SITE = {
  name: "Esna Care",
  legalNameOperational: "ESNA Care B.V.",
  legalNameHolding: "ESNA Healthcare B.V.",
  tagline:
    "Part of the ESNA Healthcare group — international pharmaceutical supply and distribution.",
  description:
    "EU-licensed pharmaceutical wholesaler. Sourcing and distribution of branded and generic medicines to wholesalers, distributors, hospitals, and pharmacies worldwide.",
  mission:
    "To supply high-quality pharmaceutical products through licensed distribution and trusted global networks, maintaining the highest standards of quality and compliance.",
  url: "https://esnahealthcare.nl",
  contact: {
    email: "info@esnahealthcare.nl",
    phone: "+31 6 15 3 69 208",
    phoneHref: "tel:+31615369208",
    officeAddress: {
      line1: "Newtonlaan 115",
      line2: "3584 BH Utrecht",
      country: "The Netherlands",
      full: "Newtonlaan 115, 3584 BH Utrecht, The Netherlands",
    },
    registeredAddress: {
      line1: "Adriaen van Ostadelaan 165-4",
      line2: "3583 AH Utrecht",
      country: "The Netherlands",
      full: "Adriaen van Ostadelaan 165-4, 3583 AH Utrecht, The Netherlands",
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
      pdf: "/Esna Healthcare/02-Info and licenses-certificates-permits/ESNA Care-WholeSaleLicense.pdf",
      eudraGmdpPdf:
        "/Esna Healthcare/02-Info and licenses-certificates-permits/ESNACARE-WDA-EUDRAGMDP.pdf",
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
      pdf: "/Esna Healthcare/02-Info and licenses-certificates-permits/GDP certificaat Esna Care Utrecht.pdf",
    },
  },
  regulatoryFramework: [
    "EU Directive 2001/83/EC on medicinal products for human use",
    "EU GDP Guidelines (2013/C 343/01)",
    "Dutch Medicines Act (Geneesmiddelenwet)",
    "Regular inspections by the Dutch Health and Youth Care Inspectorate (IGJ)",
  ],
  qualificationSops: [
    {
      title: "Supplier Qualification SOP",
      description:
        "Standard operating procedure for the qualification of drug suppliers.",
      href: "/Esna Healthcare/03-Qualifications Forms/Esna Care  SOP Qualification of drug suppliers version 4.0.  April 2025 - External.docx",
      type: "DOCX",
    },
    {
      title: "Customer Qualification SOP",
      description:
        "Standard operating procedure for the qualification of customers.",
      href: "/Esna Healthcare/03-Qualifications Forms/Esna Care SOP   Qualification of customers v 4.0  April 2025 -External.docx",
      type: "DOCX",
    },
  ],
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
  { label: "Services", href: "/services" },
  {
    label: "Products",
    href: "/products",
    subLinks: [
      { label: "Medicines", href: "/products#medicines" },
      { label: "Medical Devices", href: "/products#medical-devices" },
    ],
  },
  { label: "Compliance", href: "/compliance" },
];

export const FOOTER_SECONDARY_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Terms of Use", href: "/terms" },
  { label: "FAQ", href: "/faq" },
  { label: "We Buy Medicines", href: "/we-buy-medicines" },
] as const;
