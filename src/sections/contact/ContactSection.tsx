import Link from "next/link";
import { Location, Sms, Call, Building, Clock } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE } from "@/lib/site";

type ContactSectionProps = {
  variant?: "contact" | "catalog";
  prefilledMessage?: string;
};

export function ContactSection({
  variant = "contact",
  prefilledMessage,
}: ContactSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal direction="up" className="lg:col-span-7">
            <div className="rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)] sm:p-10">
              <span className="inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
                <span className="h-px w-6 bg-[var(--color-primary)]" />
                {variant === "catalog" ? "Catalog request" : "Send us a message"}
              </span>
              <h2 className="mt-4 text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.02em] text-[var(--color-foreground)] sm:text-[2rem]">
                {variant === "catalog"
                  ? "Request our full product catalog."
                  : "We'll respond within one business day."}
              </h2>
              <p className="mt-3 max-w-lg text-[0.98rem] leading-relaxed text-[var(--color-muted)]">
                {variant === "catalog"
                  ? "Shared with qualified healthcare distributors after a brief qualification check."
                  : "Whatever you need — sourcing support, qualification, export, or a general enquiry — your message reaches our commercial team directly."}
              </p>

              <div className="mt-8">
                <ContactForm
                  source={variant === "catalog" ? "catalog-request" : "contact"}
                  variant={variant === "catalog" ? "catalog" : "contact"}
                  prefilledMessage={prefilledMessage}
                />
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1} className="lg:col-span-5">
            <div className="flex flex-col gap-4">
              <ContactInfoCard
                icon={<Location size={20} variant="Linear" />}
                label="Office"
                primary={SITE.contact.officeAddress.line1}
                lines={[
                  SITE.contact.officeAddress.line2,
                  SITE.contact.officeAddress.country,
                ]}
              />
              <ContactInfoCard
                icon={<Sms size={20} variant="Linear" />}
                label="Email"
                primary={SITE.contact.email}
                href={`mailto:${SITE.contact.email}`}
              />
              <ContactInfoCard
                icon={<Call size={20} variant="Linear" />}
                label="Phone"
                primary={SITE.contact.phone}
                href={SITE.contact.phoneHref}
                mono
              />
              <ContactInfoCard
                icon={<Clock size={20} variant="Linear" />}
                label="Response time"
                primary="Within one business day"
                lines={["Monday–Friday · Central European Time"]}
              />
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-1)] p-5">
                <div className="flex items-start gap-3">
                  <Building
                    size={20}
                    variant="Linear"
                    className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                  />
                  <div className="text-[0.88rem] leading-relaxed text-[var(--color-muted)]">
                    <div className="font-medium text-[var(--color-foreground)]">
                      Corporate registration
                    </div>
                    <div className="mt-1">
                      <span className="font-mono">
                        {SITE.legalNameHolding}
                      </span>{" "}
                      · KVK{" "}
                      <span className="font-mono">
                        {SITE.registrations.kvkHealthcare}
                      </span>
                    </div>
                    <div>
                      <span className="font-mono">
                        {SITE.legalNameOperational}
                      </span>{" "}
                      · KVK{" "}
                      <span className="font-mono">
                        {SITE.registrations.kvkCare}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="/compliance"
                className="group mt-2 inline-flex items-center gap-2 text-[0.9rem] font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary-dark)]"
              >
                View licences &amp; compliance documents →
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContactInfoCard({
  icon,
  label,
  primary,
  lines,
  href,
  mono,
}: {
  icon: React.ReactNode;
  label: string;
  primary: string;
  lines?: string[];
  href?: string;
  mono?: boolean;
}) {
  const content = (
    <>
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary-subtle)] text-[var(--color-primary-dark)]">
        {icon}
      </div>
      <div className="flex-1 text-[0.95rem]">
        <div className="text-[0.78rem] font-medium uppercase tracking-[0.12em] text-[var(--color-subtle)]">
          {label}
        </div>
        <div
          className={
            mono
              ? "mt-1 font-mono font-medium text-[var(--color-foreground)]"
              : "mt-1 font-medium text-[var(--color-foreground)]"
          }
        >
          {primary}
        </div>
        {lines?.map((line) => (
          <div key={line} className="text-[var(--color-muted)]">
            {line}
          </div>
        ))}
      </div>
    </>
  );
  const classes =
    "flex items-start gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-5 transition-colors hover:border-[var(--color-border-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2";
  if (href)
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  return <div className={classes}>{content}</div>;
}
