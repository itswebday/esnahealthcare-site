"use client";

import { useState, useId, useMemo } from "react";
import Link from "next/link";
import {
  DocumentUpload,
  TickCircle,
  ArrowRight,
  CloseCircle,
} from "iconsax-react";
import { cn } from "@/lib/cn";

type Variant = "contact" | "supplier" | "catalog";

type ContactFormProps = {
  variant?: Variant;
  /** `source` hidden-field value submitted with the form. */
  source: "contact" | "we-buy-medicines" | "catalog-request";
  /** Optional prefilled message, e.g. when arriving from the catalog CTA. */
  prefilledMessage?: string;
};

const COPY: Record<Variant, {
  submitLabel: string;
  successTitle: string;
  successBody: string;
  messageLabel: string;
  messagePlaceholder: string;
  attachmentLabel: string;
  attachmentHint: string;
}> = {
  contact: {
    submitLabel: "Send enquiry",
    successTitle: "Thank you — message received.",
    successBody:
      "Our commercial team will reply from info@esnahealthcare.nl within one business day.",
    messageLabel: "How can we help?",
    messagePlaceholder:
      "Describe your request — product, quantity, target country, any time constraints.",
    attachmentLabel: "Attachment (optional)",
    attachmentHint:
      "Accepts spreadsheet or PDF. Max ~10 MB — used for RFQs or stock lists.",
  },
  supplier: {
    submitLabel: "Submit offer",
    successTitle: "Thank you — your offer has been received.",
    successBody:
      "Our QA team will review your submission and follow up on qualification next steps.",
    messageLabel: "Offer details",
    messagePlaceholder:
      "Product names, batch numbers, shelf life, storage conditions, quantities available.",
    attachmentLabel: "Stock list (optional but preferred)",
    attachmentHint:
      "Attach a spreadsheet or PDF stock list — batch, quantity, expiry, packaging. Max ~10 MB.",
  },
  catalog: {
    submitLabel: "Request catalog",
    successTitle: "Thank you — your catalog request is in.",
    successBody:
      "After a brief qualification check, our team will share the current catalog and availability.",
    messageLabel: "Anything specific you need?",
    messagePlaceholder:
      "Therapeutic areas of interest, countries of supply, any urgent requests.",
    attachmentLabel: "Attachment (optional)",
    attachmentHint:
      "Accepts spreadsheet or PDF. Max ~10 MB — add a product wishlist if you have one.",
  },
};

export function ContactForm({
  variant = "contact",
  source,
  prefilledMessage,
}: ContactFormProps) {
  const copy = COPY[variant];
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [fileName, setFileName] = useState<string | null>(null);
  const [agree, setAgree] = useState(false);
  const formId = useId();

  const initialMessage = useMemo(() => prefilledMessage ?? "", [prefilledMessage]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!agree || status === "submitting") return;
    setStatus("submitting");
    // Preview stub: no network, no email send.
    // Production wiring will POST this to the mail handler chosen at launch.
    setTimeout(() => setStatus("success"), 700);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-[var(--radius-xl)] border border-[var(--color-primary-subtle-strong)] bg-[var(--color-primary-subtle)] p-8">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--color-primary-dark)]">
          <TickCircle size={24} variant="Bold" />
        </div>
        <div>
          <h3 className="text-[1.4rem] font-semibold tracking-[-0.016em] text-[var(--color-foreground)]">
            {copy.successTitle}
          </h3>
          <p className="mt-2 text-[0.98rem] leading-relaxed text-[var(--color-muted)]">
            {copy.successBody}
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFileName(null);
            setAgree(false);
          }}
          className="group mt-2 inline-flex items-center gap-1.5 text-[0.9rem] font-medium leading-none text-[var(--color-primary-dark)] hover:text-[var(--color-primary-hover)]"
        >
          Send another
          <ArrowRight
            size={14}
            variant="Linear"
            className="transition-transform group-hover:translate-x-0.5"
          />
        </button>
      </div>
    );
  }

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
      noValidate
    >
      <input type="hidden" name="source" value={source} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company name" name="company" id={`${formId}-company`} />
        <Field
          label="Your name"
          name="name"
          id={`${formId}-name`}
          required
          autoComplete="name"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Email"
          name="email"
          id={`${formId}-email`}
          type="email"
          required
          autoComplete="email"
        />
        <Field
          label="Telephone"
          name="phone"
          id={`${formId}-phone`}
          type="tel"
          autoComplete="tel"
        />
      </div>

      <Field
        label={copy.messageLabel}
        name="message"
        id={`${formId}-message`}
        as="textarea"
        rows={5}
        placeholder={copy.messagePlaceholder}
        defaultValue={initialMessage}
      />

      <div>
        <label
          htmlFor={`${formId}-attachment`}
          className="block text-[0.85rem] font-medium text-[var(--color-foreground)]"
        >
          {copy.attachmentLabel}
        </label>
        <div className="mt-2">
          <label
            htmlFor={`${formId}-attachment`}
            className="group flex cursor-pointer items-center gap-4 rounded-[var(--radius-md)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-1)] p-5 transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-subtle)]/40"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-white text-[var(--color-primary-dark)]">
              <DocumentUpload size={20} variant="Linear" />
            </div>
            <div className="flex-1 text-sm">
              <div className="font-medium text-[var(--color-foreground)]">
                {fileName ? (
                  <span className="font-mono">{fileName}</span>
                ) : (
                  <>
                    Click to upload{" "}
                    <span className="font-normal text-[var(--color-subtle)]">
                      or drag a file here
                    </span>
                  </>
                )}
              </div>
              <div className="mt-0.5 text-[0.82rem] text-[var(--color-subtle)]">
                {copy.attachmentHint}
              </div>
            </div>
            {fileName && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setFileName(null);
                }}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-subtle)] transition-colors hover:bg-white hover:text-[var(--color-foreground)]"
                aria-label="Remove file"
              >
                <CloseCircle size={16} variant="Linear" />
              </button>
            )}
            <input
              id={`${formId}-attachment`}
              name="attachment"
              type="file"
              accept=".pdf,.xls,.xlsx,.csv"
              className="sr-only"
              onChange={(e) =>
                setFileName(e.target.files?.[0]?.name ?? null)
              }
            />
          </label>
        </div>
      </div>

      <label className="mt-1 flex items-start gap-3 text-[0.9rem] leading-relaxed text-[var(--color-muted)]">
        <span className="relative mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center">
          <input
            type="checkbox"
            required
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="peer absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
          <span className="h-5 w-5 rounded-[6px] border border-[var(--color-border-strong)] bg-white transition-all peer-checked:border-[var(--color-primary)] peer-checked:bg-[var(--color-primary)] peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-primary)]/40 peer-focus-visible:ring-offset-2" />
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 m-auto h-3.5 w-3.5 text-white opacity-0 transition-opacity peer-checked:opacity-100"
          >
            <path
              d="M5 10l3.5 3.5L15 6.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        I agree to Esna Care processing my data to respond to this enquiry. See
        our{" "}
        <Link
          href="/privacy"
          className="text-[var(--color-primary-dark)] underline underline-offset-2 hover:text-[var(--color-primary-hover)]"
        >
          Privacy Policy
        </Link>
        .
      </label>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={!agree || status === "submitting"}
          className={cn(
            "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-medium leading-none transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)]",
            !agree || status === "submitting"
              ? "cursor-not-allowed bg-[var(--color-surface-2)] text-[var(--color-subtle)]"
              : "bg-[var(--color-primary)] text-white shadow-[var(--shadow-cta)] hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-cta-hover)]",
          )}
        >
          {status !== "submitting" && (
            <span
              aria-hidden="true"
              className="invisible shrink-0"
              style={{ width: 16, height: 16 }}
            />
          )}
          <span>{status === "submitting" ? "Sending…" : copy.submitLabel}</span>
          {status !== "submitting" && (
            <ArrowRight
              size={16}
              variant="Linear"
              className="shrink-0 transition-transform group-hover:translate-x-0.5"
            />
          )}
        </button>
        <span className="text-[0.82rem] text-[var(--color-subtle)]">
          Replies from{" "}
          <span className="font-mono">info@esnahealthcare.nl</span> · within one
          business day
        </span>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  id: string;
  name: string;
  required?: boolean;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
  placeholder?: string;
  autoComplete?: string;
  defaultValue?: string;
};

function Field({
  label,
  id,
  name,
  required,
  type = "text",
  as = "input",
  rows,
  placeholder,
  autoComplete,
  defaultValue,
}: FieldProps) {
  const fieldClass =
    "w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-4 py-3 text-[0.98rem] text-[var(--color-foreground)] placeholder:text-[var(--color-faint)] transition-colors duration-[var(--duration-normal)] hover:border-[var(--color-border-strong)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-4 focus:ring-[var(--color-primary)]/15";
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[0.85rem] font-medium text-[var(--color-foreground)]"
      >
        {label}
        {required && (
          <span className="ml-1 text-[var(--color-primary)]" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={rows ?? 5}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={`${fieldClass} resize-y min-h-32`}
        />
      ) : (
        <input
          id={id}
          name={name}
          required={required}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          className={fieldClass}
        />
      )}
    </div>
  );
}
