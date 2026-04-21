export type FaqEntry = {
  question: string;
  answer: string;
  draft?: boolean;
};

export const FAQ: FaqEntry[] = [
  {
    question: "In which countries does Esna Care operate?",
    answer:
      "As an EU-licensed wholesaler based in Utrecht, the Netherlands, we source primarily across the European Economic Area and supply qualified wholesalers, distributors, hospitals, and pharmacies internationally — including export to countries outside the EEA where permitted under our WDA.",
    draft: true,
  },
  {
    question: "What are your minimum order quantities?",
    answer:
      "Minimum order quantities vary by product and therapeutic area. Please contact our commercial team with your request and we will confirm availability, packaging, and lead times within one business day.",
    draft: true,
  },
  {
    question: "How quickly do you respond to an RFQ?",
    answer:
      "Standard RFQs are answered within one business day. Hard-to-source or specialty requests may take longer while we verify sourcing and documentation; you will receive an acknowledgement with an expected timeline on the same day.",
    draft: true,
  },
  {
    question: "Do you handle cold-chain products?",
    answer:
      "Yes. Our WDA includes cold-chain handling (2–8 °C) and we also handle controlled-ambient products (15–25 °C) through a qualified warehousing partner with continuous temperature monitoring.",
    draft: true,
  },
  {
    question: "How do I become a qualified supplier or customer?",
    answer:
      "All partners are qualified against our SOPs for supplier and customer qualification (QA-014 and QA-015). Start the process by sending your company details and licence documentation via our Contact form; our QA team will follow up with the formal qualification questionnaire.",
    draft: true,
  },
  {
    question: "Can you supply products without a Marketing Authorisation in the EEA?",
    answer:
      "Our WDA covers medicinal products without a Marketing Authorisation in the EEA where they are intended for export. Supply within the EEA is limited to authorised products; we can advise on compliant routes for specific requests.",
    draft: true,
  },
  {
    question: "Do you support export outside the EEA?",
    answer:
      "Yes — export is an authorised operation under our WDA. We handle the documentation, customs paperwork, and temperature management required for international shipments.",
    draft: true,
  },
  {
    question: "Which therapeutic areas do you cover?",
    answer:
      "Our portfolio spans oncology, rare & orphan diseases, cardiovascular, immunology & biologics, neurology & pain, critical & hospital care, temperature-sensitive biologics, and vitamins & supplements. See the Products page for the full breakdown.",
    draft: true,
  },
];
