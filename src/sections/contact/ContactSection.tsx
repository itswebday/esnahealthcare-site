import Link from "next/link";
import {
  ArrowRight,
  Building,
  Call,
  Clock,
  Location,
  MessageText1,
  Sms,
} from "iconsax-react";
import ContactForm from "@/components/forms/ContactForm";
import type { EnquiryType } from "@/lib/enquiry-types";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

type ContactSectionProps = {
  enquiryType?: EnquiryType;
  prefilledMessage?: string;
  variant?: "contact" | "catalog";
};

const ContactSection: React.FC<ContactSectionProps> = ({
  enquiryType,
  prefilledMessage,
  variant = "contact",
}) => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24">
      <Container size="xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7" direction="up">
            <div className="border-border shadow-card relative rounded-3xl border bg-white p-8 sm:p-10">
              <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
                <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                {variant === "catalog"
                  ? "Portfolio request"
                  : "Send us a message"}
              </span>
              <h2 className="tracking-display text-foreground mt-4 text-[26px] leading-[1.12] font-semibold sm:text-[32px]">
                {variant === "catalog"
                  ? "Request our pharmaceutical portfolio."
                  : "We’ll respond within one business day."}
              </h2>
              <p className="text-muted mt-3 max-w-lg text-[15px] leading-relaxed">
                {variant === "catalog"
                  ? "The portfolio is shared privately with qualified buyers after a brief qualification check."
                  : "Whatever you need — sourcing, qualification, export, partnership, or a general enquiry — your message reaches our commercial team directly."}
              </p>

              <div className="mt-8">
                <ContactForm
                  enquiryType={enquiryType}
                  prefilledMessage={prefilledMessage}
                  source={variant === "catalog" ? "catalog-request" : "contact"}
                  variant={variant === "catalog" ? "catalog" : "contact"}
                />
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1} direction="up">
            <div className="flex flex-col gap-4">
              <ContactInfoCard
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  SITE.contact.officeAddress.full,
                )}`}
                icon={<Location size={22} variant="Bold" />}
                isExternal
                label="Head office"
                lines={[
                  SITE.contact.officeAddress.line2,
                  SITE.contact.officeAddress.country,
                ]}
                primary={SITE.contact.officeAddress.line1}
              />
              <ContactInfoCard
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  SITE.contact.warehouseAddress.full,
                )}`}
                icon={<Location size={22} variant="Bold" />}
                isExternal
                label="Warehouse"
                lines={[
                  SITE.contact.warehouseAddress.line2,
                  SITE.contact.warehouseAddress.country,
                ]}
                primary={SITE.contact.warehouseAddress.line1}
              />
              <ContactInfoCard
                href={`mailto:${SITE.contact.email}`}
                icon={<Sms size={22} variant="Bold" />}
                label="Email"
                primary={SITE.contact.email}
              />
              <PhoneCard />
              <ContactInfoCard
                icon={<Clock size={22} variant="Bold" />}
                label="Response time"
                lines={["Monday–Friday · Central European Time"]}
                primary="Within one business day"
              />
              <div className="border-border bg-surface-1 mt-2 rounded-2xl border p-5">
                <div className="flex items-start gap-3">
                  <Building
                    className="text-primary-dark mt-0.5 shrink-0"
                    size={20}
                    variant="Bold"
                  />
                  <div className="text-muted text-[13px] leading-relaxed">
                    <div className="text-foreground font-medium">
                      Corporate registration
                    </div>
                    <div className="mt-1">
                      <span className="font-mono">{SITE.legalNameHolding}</span>{" "}
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
                    <div className="text-subtle mt-2 font-mono text-[12px]">
                      WDA No. {SITE.licences.wda.number} · GDP No.{" "}
                      {SITE.licences.gdp.number}
                    </div>
                    <div className="text-subtle mt-1 text-[12px]">
                      Supervised by the IGJ (Dutch Health &amp; Youth Care
                      Inspectorate)
                    </div>
                  </div>
                </div>
              </div>
              <Link
                className="group text-foreground hover:text-primary-dark mt-2 inline-flex items-center gap-2 text-[14px] font-medium transition-colors"
                href="/compliance"
                prefetch
              >
                See compliance details
                <ArrowRight
                  className="duration-normal transition-transform group-hover:translate-x-0.5"
                  size={14}
                  variant="Linear"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

const PhoneCard: React.FC = () => {
  return (
    <div className="border-border relative rounded-2xl border bg-white p-6">
      <span
        aria-hidden="true"
        className="bg-primary absolute inset-y-6 left-0 w-[3px] rounded-r-full"
      />
      <div className="flex items-start gap-4">
        <div className="bg-primary-subtle text-primary-dark ring-primary/25 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1">
          <Call size={22} variant="Bold" />
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="text-subtle font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
            Phone &amp; WhatsApp
          </div>
          <Link
            className="text-foreground hover:text-primary-dark font-mono text-[15px] font-semibold transition-colors"
            href={SITE.contact.phoneHref}
            prefetch
          >
            {SITE.contact.phone}
          </Link>
          <Link
            className="text-primary-dark hover:text-primary-hover inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors"
            href={SITE.contact.whatsappHref}
            rel="noopener noreferrer"
            target="_blank"
            prefetch
          >
            <MessageText1 size={14} variant="Bold" />
            Message on WhatsApp
            <ArrowRight size={12} variant="Linear" />
          </Link>
        </div>
      </div>
    </div>
  );
};

type ContactInfoCardProps = {
  href?: string;
  icon: React.ReactNode;
  isExternal?: boolean;
  label: string;
  lines?: string[];
  primary: string;
};

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  href,
  icon,
  isExternal,
  label,
  lines,
  primary,
}) => {
  const content = (
    <>
      <span
        aria-hidden="true"
        className="bg-primary absolute inset-y-6 left-0 w-[3px] rounded-r-full"
      />
      <div className="flex items-start gap-4">
        <div className="bg-primary-subtle text-primary-dark ring-primary/25 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1">
          {icon}
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="text-subtle font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
            {label}
          </div>
          <div className="text-foreground text-[15px] font-semibold">
            {primary}
          </div>
          {lines?.map((line) => (
            <div key={line} className="text-muted text-[14px] leading-relaxed">
              {line}
            </div>
          ))}
        </div>
      </div>
    </>
  );
  const classes = cn(
    "group duration-slow relative rounded-2xl border border-border bg-white p-6 transition-all hover:border-primary/40 hover:shadow-hint focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-primary",
  );
  if (href) {
    return (
      <Link
        className={classes}
        href={href}
        rel={isExternal ? "noopener noreferrer" : undefined}
        target={isExternal ? "_blank" : undefined}
        prefetch
      >
        {content}
      </Link>
    );
  }
  return <div className={classes}>{content}</div>;
};

export default ContactSection;
