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
  },
  {
    question: "Do you publish a product catalog?",
    answer:
      "No. Our pharmaceutical portfolio and pricing are shared privately with qualified buyers after a brief qualification check. To start a request, send us a message via the Contact page.",
  },
  {
    question: "How quickly do you respond to an enquiry?",
    answer:
      "Standard enquiries are answered within one business day. Hard-to-source or specialty requests may take longer while we verify sourcing and documentation; you will receive an acknowledgement with an expected timeline on the same day.",
  },
  {
    question: "Do you handle cold-chain products?",
    answer:
      "Yes. Our operations include validated 2–8 °C cold-chain and 15–25 °C controlled-ambient logistics, with continuous temperature monitoring documented from intake to delivery.",
  },
  {
    question: "How do I become a qualified supplier or customer?",
    answer:
      "All partners undergo a formal qualification process before any first transaction. Start the process via our Contact form; our QA team will follow up with the qualification questionnaire and the relevant SOP excerpts privately.",
  },
  {
    question:
      "Can you supply products without a Marketing Authorisation in the EEA?",
    answer:
      "Our WDA covers medicinal products without a Marketing Authorisation in the EEA where they are intended for export. Supply within the EEA is limited to authorised products; we can advise on compliant routes for specific requests.",
  },
  {
    question: "Do you support export outside the EEA?",
    answer:
      "Yes — export is an authorised operation under our WDA. We handle the documentation, customs paperwork, and temperature management required for international shipments.",
  },
  {
    question: "Are you supervised by a regulator?",
    answer:
      "Yes. Esna Care is supervised by the IGJ (Dutch Health & Youth Care Inspectorate), with regular inspections and an annually reviewed Quality Management System.",
  },
  {
    question: "Which therapeutic areas do you cover?",
    answer:
      "Our portfolio spans oncology, rare & orphan diseases, cardiovascular, immunology & biologics, neurology & pain, critical & hospital care, temperature-sensitive biologics, and vitamins & supplements.",
  },
];
