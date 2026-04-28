export const ENQUIRY_TYPES = [
  { value: "sourcing", label: "Sourcing enquiry" },
  { value: "partnership", label: "Supplier / MAH partnership" },
  { value: "customer-qualification", label: "Customer qualification" },
  { value: "export", label: "Export request" },
  { value: "medical-devices", label: "Medical devices" },
  { value: "procurement", label: "Procurement (we buy medicines)" },
  { value: "other", label: "Other" },
] as const;

export type EnquiryType = (typeof ENQUIRY_TYPES)[number]["value"];
