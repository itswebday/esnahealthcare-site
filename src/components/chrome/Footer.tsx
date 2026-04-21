import Link from "next/link";
import { Location, Sms, Call, ArrowRight } from "iconsax-react";
import { SITE, NAV_LINKS, FOOTER_SECONDARY_LINKS } from "@/lib/site";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 overflow-hidden bg-[var(--color-surface-invert)] text-[var(--color-on-invert)]">
      {/* Ambient brand gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-1/4 top-0 h-[480px] w-[720px] bg-[radial-gradient(ellipse_at_center,rgba(46,139,53,0.28)_0%,transparent_60%)] opacity-70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-1/3 top-1/3 h-[420px] w-[700px] bg-[radial-gradient(ellipse_at_center,rgba(13,79,140,0.32)_0%,transparent_60%)] opacity-70 blur-3xl"
      />

      <Container size="xl" className="relative">
        {/* CTA band */}
        <div className="flex flex-col gap-8 border-b border-[var(--color-border-invert)] py-16 lg:flex-row lg:items-end lg:justify-between lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-on-invert-muted)]">
              <span className="h-px w-6 bg-white/30" />
              Ready to work together
            </span>
            <h2 className="mt-5 text-[2.4rem] font-semibold leading-[1.08] tracking-[var(--tracking-display)] text-white sm:text-[3rem] lg:text-[3.4rem]">
              Let&rsquo;s move your next shipment — on compliance, on time.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-on-invert-muted)]">
              Whether you need to source a specialty treatment, qualify as a supplier,
              or request our full product catalog, our commercial team replies within
              one business day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Get in Touch
            </Button>
            <Button
              href="/we-buy-medicines"
              variant="invert-ghost"
              size="lg"
              withArrow
            >
              Offer Your Stock
            </Button>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Logo variant="white" width={148} withLink={false} />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-[var(--color-on-invert-muted)]">
              {SITE.tagline}
            </p>
            <Link
              href="/compliance"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium leading-none text-white transition-colors hover:text-[var(--color-on-invert-muted)]"
            >
              Compliance &amp; Certifications
              <ArrowRight
                size={14}
                variant="Linear"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-on-invert-muted)]">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.95rem] text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/we-buy-medicines"
                  className="text-[0.95rem] text-white/80 transition-colors hover:text-white"
                >
                  We Buy Medicines
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-on-invert-muted)]">
              Contact &amp; Registration
            </h3>
            <ul className="mt-5 space-y-4 text-[0.95rem]">
              <li className="flex items-start gap-3">
                <Location
                  size={18}
                  variant="Linear"
                  className="mt-0.5 shrink-0 text-[var(--color-on-invert-muted)]"
                />
                <span className="text-white/85 leading-relaxed">
                  {SITE.contact.officeAddress.line1}
                  <br />
                  {SITE.contact.officeAddress.line2}
                  <br />
                  {SITE.contact.officeAddress.country}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Sms
                  size={18}
                  variant="Linear"
                  className="mt-0.5 shrink-0 text-[var(--color-on-invert-muted)]"
                />
                <Link
                  href={`mailto:${SITE.contact.email}`}
                  className="text-white/85 transition-colors hover:text-white"
                >
                  {SITE.contact.email}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Call
                  size={18}
                  variant="Linear"
                  className="mt-0.5 shrink-0 text-[var(--color-on-invert-muted)]"
                />
                <Link
                  href={SITE.contact.phoneHref}
                  className="font-mono text-white/85 transition-colors hover:text-white"
                >
                  {SITE.contact.phone}
                </Link>
              </li>
            </ul>
            <div className="mt-6 rounded-[var(--radius-md)] border border-[var(--color-border-invert)] bg-white/5 p-4 text-[0.82rem] leading-relaxed text-[var(--color-on-invert-muted)] backdrop-blur">
              <div>
                {SITE.legalNameHolding} (KVK {SITE.registrations.kvkHealthcare})
              </div>
              <div>
                {SITE.legalNameOperational} (KVK {SITE.registrations.kvkCare})
              </div>
              <div className="mt-2 font-mono text-white/70">
                WDA No. {SITE.licences.wda.number} · GDP No.{" "}
                {SITE.licences.gdp.number}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-[var(--color-border-invert)] py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[var(--color-on-invert-muted)]">
            © {year} {SITE.name} — All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {FOOTER_SECONDARY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[var(--color-on-invert-muted)] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
