import Link from "next/link";
import {
  ArrowRight,
  Building,
  Call,
  Clock,
  Location,
  Sms,
} from "iconsax-react";
import ContactForm from "@/components/forms/ContactForm";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

type ContactInfoCardProps = {
  href?: string;
  icon: React.ReactNode;
  isExternal?: boolean;
  isMono?: boolean;
  label: string;
  lines?: string[];
  primary: string;
  tone: "primary" | "accent";
};

type ContactSectionProps = {
  prefilledMessage?: string;
  variant?: "contact" | "catalog";
};

const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledMessage,
  variant = "contact",
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24">
      <ContactBackdrop />

      <Container className="relative" size="xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7" direction="up">
            <div className="border-border shadow-card relative overflow-hidden rounded-3xl border bg-white p-8 sm:p-10">
              <div className="relative">
                <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
                  <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                  {variant === "catalog"
                    ? "Catalog request"
                    : "Send us a message"}
                </span>
                <h2 className="tracking-display text-foreground mt-4 text-[26px] leading-[1.12] font-semibold sm:text-[32px]">
                  {variant === "catalog"
                    ? "Request our full product catalog."
                    : "We'll respond within one business day."}
                </h2>
                <p className="text-muted mt-3 max-w-lg text-[15px] leading-relaxed">
                  {variant === "catalog"
                    ? "Shared with qualified healthcare distributors after a brief qualification check."
                    : "Whatever you need — sourcing support, qualification, export, or a general enquiry — your message reaches our commercial team directly."}
                </p>

                <div className="mt-8">
                  <ContactForm
                    prefilledMessage={prefilledMessage}
                    source={
                      variant === "catalog" ? "catalog-request" : "contact"
                    }
                    variant={variant === "catalog" ? "catalog" : "contact"}
                  />
                </div>
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
                label="Office"
                lines={[
                  SITE.contact.officeAddress.line2,
                  SITE.contact.officeAddress.country,
                ]}
                primary={SITE.contact.officeAddress.line1}
                tone="primary"
              />
              <ContactInfoCard
                href={`mailto:${SITE.contact.email}`}
                icon={<Sms size={22} variant="Bold" />}
                label="Email"
                primary={SITE.contact.email}
                tone="accent"
              />
              <ContactInfoCard
                href={SITE.contact.phoneHref}
                icon={<Call size={22} variant="Bold" />}
                isMono
                label="Phone"
                primary={SITE.contact.phone}
                tone="primary"
              />
              <ContactInfoCard
                icon={<Clock size={22} variant="Bold" />}
                label="Response time"
                lines={["Monday–Friday · Central European Time"]}
                primary="Within one business day"
                tone="accent"
              />
              <div className="border-border bg-surface-2/60 mt-2 rounded-2xl border p-5">
                <div className="flex items-start gap-3">
                  <Building
                    className="text-accent mt-0.5 shrink-0"
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
                  </div>
                </div>
              </div>
              <Link
                className="group text-foreground hover:text-primary-dark mt-2 inline-flex items-center gap-2 text-[14px] font-medium transition-colors"
                href="/compliance"
              >
                View licences &amp; compliance documents
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

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  href,
  icon,
  isExternal,
  isMono,
  label,
  lines,
  primary,
  tone,
}) => {
  const isPrimary = tone === "primary";
  const content = (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-y-6 left-0 w-[3px] rounded-r-full",
          isPrimary ? "bg-primary" : "bg-accent",
        )}
      />
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1",
            isPrimary
              ? "bg-primary-subtle text-primary-dark ring-primary/25"
              : "bg-accent-subtle text-accent ring-accent/30",
          )}
        >
          {icon}
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="text-subtle font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
            {label}
          </div>
          <div
            className={cn(
              "text-foreground text-[15px] font-semibold",
              isMono && "font-mono",
            )}
          >
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
    "group duration-slow relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all hover:shadow-lift focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
    isPrimary
      ? "hover:border-primary/40 focus-visible:ring-primary"
      : "hover:border-accent/40 focus-visible:ring-accent",
  );
  if (href) {
    return (
      <Link
        className={classes}
        href={href}
        rel={isExternal ? "noopener noreferrer" : undefined}
        target={isExternal ? "_blank" : undefined}
      >
        {content}
      </Link>
    );
  }
  return <div className={classes}>{content}</div>;
};

const ContactBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-primary/5 absolute top-[20%] left-[-10%] h-[420px] w-[420px] rounded-full blur-[110px]" />
      <div className="bg-accent/5 absolute right-[-10%] bottom-[10%] h-[380px] w-[380px] rounded-full blur-[110px]" />
    </div>
  );
};

export default ContactSection;
