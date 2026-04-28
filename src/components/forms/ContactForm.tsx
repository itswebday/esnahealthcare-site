"use client";

import {
  ArrowDown2,
  ArrowRight,
  CloseCircle,
  DocumentUpload,
  ShieldTick,
  TickCircle,
} from "iconsax-react";
import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { ENQUIRY_TYPES, type EnquiryType } from "@/lib/enquiry-types";

export type { EnquiryType };

type Variant = "contact" | "supplier" | "catalog";

type ContactFormProps = {
  enquiryType?: EnquiryType;
  prefilledMessage?: string;
  source: "contact" | "we-buy-medicines" | "catalog-request";
  variant?: Variant;
};

const COPY: Record<
  Variant,
  {
    attachmentHint: string;
    attachmentLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    successBody: string;
    successTitle: string;
  }
> = {
  contact: {
    attachmentHint:
      "Accepts spreadsheet or PDF. Max ~10 MB — used for RFQs or stock lists.",
    attachmentLabel: "Attachment",
    messageLabel: "Message",
    messagePlaceholder:
      "Describe your request — product, quantity, target country, any time constraints.",
    submitLabel: "Send enquiry",
    successBody:
      "Our commercial team will reply from info@esnahealthcare.nl within one business day.",
    successTitle: "Thank you — message received.",
  },
  supplier: {
    attachmentHint:
      "Attach a spreadsheet or PDF stock list — batch, quantity, expiry, packaging. Max ~10 MB.",
    attachmentLabel: "Stock list",
    messageLabel: "Offer details",
    messagePlaceholder:
      "Product names, batch numbers, shelf life, storage conditions, quantities available.",
    submitLabel: "Submit offer",
    successBody:
      "Our QA team will review your submission and follow up on qualification next steps.",
    successTitle: "Thank you — your offer has been received.",
  },
  catalog: {
    attachmentHint:
      "Accepts spreadsheet or PDF. Max ~10 MB — add a product wishlist if you have one.",
    attachmentLabel: "Attachment",
    messageLabel: "Anything specific you need?",
    messagePlaceholder:
      "Therapeutic areas of interest, countries of supply, any urgent requests.",
    submitLabel: "Request portfolio",
    successBody:
      "After a brief qualification check, our team will share the relevant portfolio details.",
    successTitle: "Thank you — your request is in.",
  },
};

const ContactForm: React.FC<ContactFormProps> = ({
  enquiryType,
  prefilledMessage,
  source,
  variant = "contact",
}) => {
  const copy = COPY[variant];
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [fileName, setFileName] = useState<string | null>(null);
  const [hasAgreed, setHasAgreed] = useState(false);
  const formId = useId();

  const initialMessage = useMemo(
    () => prefilledMessage ?? "",
    [prefilledMessage],
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!hasAgreed || status === "submitting") {
      return;
    }

    setStatus("submitting");
    setTimeout(() => setStatus("success"), 700);
  };

  if (status === "success") {
    return (
      <div className="border-border relative overflow-hidden rounded-3xl border bg-white p-8 sm:p-10">
        <div className="relative flex flex-col items-start gap-4">
          <div className="bg-primary-subtle text-primary-dark inline-flex h-11 w-11 items-center justify-center rounded-xl">
            <TickCircle size={22} variant="Bold" />
          </div>
          <div>
            <h3 className="tracking-display text-foreground text-[22px] leading-[1.15] font-semibold sm:text-[26px]">
              {copy.successTitle}
            </h3>
            <p className="text-muted mt-2 text-[15px] leading-relaxed">
              {copy.successBody}
            </p>
          </div>
          <button
            className="group text-primary-dark hover:text-primary-hover mt-2 inline-flex items-center gap-1.5 text-[14px] leading-none font-medium transition-colors"
            type="button"
            onClick={() => {
              setStatus("idle");
              setFileName(null);
              setHasAgreed(false);
            }}
          >
            Send another
            <ArrowRight
              className="transition-transform group-hover:translate-x-0.5"
              size={14}
              variant="Linear"
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-6"
      id={formId}
      noValidate
      onSubmit={handleSubmit}
    >
      <input name="source" type="hidden" value={source} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${formId}-company`} label="Company name" name="company" />
        <Field
          autoComplete="name"
          id={`${formId}-name`}
          label="Your name"
          name="name"
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          autoComplete="email"
          id={`${formId}-email`}
          label="Email"
          name="email"
          required
          type="email"
        />
        <Field
          autoComplete="tel"
          id={`${formId}-phone`}
          label="Phone"
          name="phone"
          type="tel"
        />
      </div>

      <SelectField
        defaultValue={enquiryType ?? ""}
        id={`${formId}-enquiry-type`}
        label="Enquiry type"
        name="enquiryType"
        options={ENQUIRY_TYPES}
        placeholder="Select an enquiry type…"
      />

      <Field
        as="textarea"
        defaultValue={initialMessage}
        id={`${formId}-message`}
        label={copy.messageLabel}
        name="message"
        placeholder={copy.messagePlaceholder}
        rows={5}
      />

      <FileField
        fileName={fileName}
        hint={copy.attachmentHint}
        id={`${formId}-attachment`}
        label={copy.attachmentLabel}
        onChange={setFileName}
        onClear={() => setFileName(null)}
      />

      <ConsentCheckbox isChecked={hasAgreed} onChange={setHasAgreed} />

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
        <button
          className={cn(
            "group bg-primary hover:bg-primary-hover focus-visible:ring-primary/30 duration-normal inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-[15px] leading-none font-medium text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60",
          )}
          disabled={!hasAgreed || status === "submitting"}
          type="submit"
        >
          {status === "submitting" ? "Sending…" : copy.submitLabel}
          {status !== "submitting" && (
            <ArrowRight
              className="duration-normal transition-transform group-hover:translate-x-0.5"
              size={16}
              variant="Linear"
            />
          )}
        </button>
        <span className="text-subtle inline-flex items-center gap-1.5 text-[13px] leading-snug">
          <ShieldTick className="text-primary" size={14} variant="Bold" />
          Replies from{" "}
          <span className="text-foreground font-mono">
            info@esnahealthcare.nl
          </span>
          {" · "}within one business day
        </span>
      </div>
    </form>
  );
};

type FieldProps = {
  as?: "input" | "textarea";
  autoComplete?: string;
  defaultValue?: string;
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  type?: string;
};

const Field: React.FC<FieldProps> = ({
  as = "input",
  autoComplete,
  defaultValue,
  id,
  label,
  name,
  placeholder,
  required,
  rows,
  type = "text",
}) => {
  const fieldClass =
    "border-border text-foreground placeholder:text-faint hover:border-border-strong focus:border-foreground duration-normal w-full rounded-xl border bg-white px-4 py-3 text-[16px] transition-colors focus:outline-none";

  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-foreground inline-flex items-center gap-1.5 text-[13px] font-medium"
        htmlFor={id}
      >
        {label}
        {required && (
          <span aria-hidden="true" className="text-primary">
            *
          </span>
        )}
      </label>
      {as === "textarea" ? (
        <textarea
          className={cn(fieldClass, "min-h-[140px] resize-y leading-[1.6]")}
          defaultValue={defaultValue}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={rows ?? 5}
        />
      ) : (
        <input
          autoComplete={autoComplete}
          className={cn(fieldClass, "h-12")}
          defaultValue={defaultValue}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          type={type}
        />
      )}
    </div>
  );
};

type SelectFieldProps = {
  defaultValue?: string;
  id: string;
  label: string;
  name: string;
  options: readonly { value: string; label: string }[];
  placeholder?: string;
};

const SelectField: React.FC<SelectFieldProps> = ({
  defaultValue,
  id,
  label,
  name,
  options,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-foreground inline-flex items-center gap-1.5 text-[13px] font-medium"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <select
          className="border-border text-foreground hover:border-border-strong focus:border-foreground duration-normal h-12 w-full appearance-none rounded-xl border bg-white px-4 pr-12 text-[16px] transition-colors focus:outline-none"
          defaultValue={defaultValue}
          id={id}
          name={name}
        >
          {placeholder && (
            <option disabled value="">
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ArrowDown2
          aria-hidden="true"
          className="text-subtle pointer-events-none absolute top-1/2 right-4 -translate-y-1/2"
          size={16}
          variant="Linear"
        />
      </div>
    </div>
  );
};

type FileFieldProps = {
  fileName: string | null;
  hint: string;
  id: string;
  label: string;
  onChange: (name: string | null) => void;
  onClear: () => void;
};

const FileField: React.FC<FileFieldProps> = ({
  fileName,
  hint,
  id,
  label,
  onChange,
  onClear,
}) => {
  const hasFile = fileName !== null;

  return (
    <div className="flex flex-col gap-2">
      <span className="text-foreground text-[13px] font-medium">
        {label}
        <span className="text-subtle ml-1.5 font-normal">(optional)</span>
      </span>
      <label
        className={cn(
          "group duration-normal relative flex cursor-pointer items-center gap-4 rounded-xl border border-dashed p-5 transition-colors",
          hasFile
            ? "border-primary/40 bg-primary-subtle/40"
            : "border-border-strong bg-surface-1 hover:border-primary/50 hover:bg-primary-subtle/30",
        )}
        htmlFor={id}
      >
        <div
          className={cn(
            "duration-normal inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
            hasFile
              ? "bg-primary text-white"
              : "bg-primary-subtle text-primary-dark group-hover:bg-primary group-hover:text-white",
          )}
        >
          {hasFile ? (
            <TickCircle size={20} variant="Bold" />
          ) : (
            <DocumentUpload size={20} variant="Linear" />
          )}
        </div>
        <div className="flex-1">
          <div className="text-foreground text-[14px] font-medium">
            {hasFile ? (
              <span className="font-mono break-all">{fileName}</span>
            ) : (
              <>
                Click to upload{" "}
                <span className="text-subtle font-normal">
                  or drag a file here
                </span>
              </>
            )}
          </div>
          <div className="text-subtle mt-0.5 text-[12px] leading-snug">
            {hint}
          </div>
        </div>
        {hasFile && (
          <button
            aria-label="Remove file"
            className="text-subtle hover:text-foreground duration-normal inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-white"
            type="button"
            onClick={(event) => {
              event.preventDefault();
              onClear();
            }}
          >
            <CloseCircle size={16} variant="Linear" />
          </button>
        )}
        <input
          accept=".pdf,.xls,.xlsx,.csv"
          className="sr-only"
          id={id}
          name="attachment"
          type="file"
          onChange={(event) => onChange(event.target.files?.[0]?.name ?? null)}
        />
      </label>
    </div>
  );
};

type ConsentCheckboxProps = {
  isChecked: boolean;
  onChange: (next: boolean) => void;
};

const ConsentCheckbox: React.FC<ConsentCheckboxProps> = ({
  isChecked,
  onChange,
}) => {
  return (
    <label className="text-muted flex items-start gap-3 text-[14px] leading-[1.55]">
      <span className="relative mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center">
        <input
          checked={isChecked}
          className="peer absolute inset-0 h-full w-full cursor-pointer opacity-0"
          required
          type="checkbox"
          onChange={(event) => onChange(event.target.checked)}
        />
        <span className="border-border-strong peer-checked:border-primary peer-checked:bg-primary peer-focus-visible:ring-primary/30 duration-normal h-5 w-5 rounded-md border bg-white transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2" />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 m-auto h-3.5 w-3.5 text-white opacity-0 transition-opacity peer-checked:opacity-100"
          viewBox="0 0 20 20"
        >
          <path
            d="M5 10l3.5 3.5L15 6.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.25"
          />
        </svg>
      </span>
      <span>
        I agree to Esna Care processing my data to respond to this enquiry. See
        our{" "}
        <Link
          className="decoration-primary/40 hover:decoration-primary text-foreground font-medium underline underline-offset-[3px] transition-[text-decoration-color]"
          href="/privacy-policy"
          prefetch
        >
          Privacy Policy
        </Link>
        .
      </span>
    </label>
  );
};

export default ContactForm;
