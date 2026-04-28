import { ArrowRight, Call, Location, Sms } from "iconsax-react";
import Link from "next/link";
import {
  FOOTER_LEGAL_LINKS,
  FOOTER_UTILITY_LINKS,
  NAV_LINKS,
  SITE,
} from "@/lib/site";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Logo from "../ui/Logo";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24">
      <Container className="max-w-[1520px] px-0 sm:px-8 lg:px-10" size="xl">
        <div className="bg-surface-invert text-on-invert border-border-invert-strong relative overflow-hidden rounded-t-3xl border-t px-6 sm:rounded-t-[40px] sm:px-12 lg:px-16">
          {/* CTA band */}
          <div className="border-border-invert flex flex-col gap-8 border-b py-16 lg:flex-row lg:items-end lg:justify-between lg:py-20">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1 text-[12px] font-medium tracking-[0.14em] text-white uppercase ring-1 ring-white/20 backdrop-blur">
                <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                Ready to work together
              </span>
              <h2 className="mt-5 text-[38px] leading-[1.08] font-semibold tracking-[var(--tracking-display)] text-white sm:text-[48px] lg:text-[54px]">
                Discuss your requirements with our team.
              </h2>
              <p className="text-on-invert-muted mt-5 max-w-xl text-[18px] leading-relaxed">
                Reliable sourcing, EU-licensed distribution, full GDP oversight.
                Tell us what you need and our commercial team will respond from{" "}
                <span className="font-mono text-white/85">
                  {SITE.contact.email}
                </span>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" size="lg" variant="primary" withArrow>
                Get in Touch
              </Button>
              <Button
                href="/we-buy-medicines"
                size="lg"
                variant="invert-ghost"
                withArrow
              >
                Procurement
              </Button>
            </div>
          </div>

          {/* Main footer grid */}
          <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-10">
            {/* Brand column */}
            <div className="lg:col-span-5">
              <Logo variant="white" width={148} withLink={false} />
              <p className="mt-5 max-w-sm text-[16px] leading-relaxed text-white/85">
                {SITE.tagline}
              </p>
              <p className="text-on-invert-muted mt-3 max-w-sm text-[13px] leading-relaxed">
                EU-licensed pharmaceutical wholesaler based in the Netherlands.
                Supplying medicines and medical devices to qualified buyers.
              </p>
              <Link
                className="hover:text-on-invert-muted group mt-6 inline-flex items-center gap-2 text-[14px] leading-none font-medium text-white transition-colors"
                href="/compliance"
                prefetch
              >
                Compliance &amp; Certifications
                <ArrowRight
                  className="transition-transform group-hover:translate-x-0.5"
                  size={14}
                  variant="Linear"
                />
              </Link>
            </div>

            {/* Navigate links */}
            <div className="lg:col-span-3">
              <h3 className="text-on-invert-muted text-[12px] font-medium tracking-[0.14em] uppercase">
                Navigate
              </h3>
              <ul className="mt-5 space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="text-[15px] text-white/80 transition-colors hover:text-white"
                      href={link.href}
                      prefetch
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {FOOTER_UTILITY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="text-[15px] text-white/70 transition-colors hover:text-white"
                      href={link.href}
                      prefetch
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact and registration */}
            <div className="lg:col-span-4">
              <h3 className="text-on-invert-muted text-[12px] font-medium tracking-[0.14em] uppercase">
                Contact &amp; Registration
              </h3>
              <ul className="mt-5 space-y-4 text-[15px]">
                <li className="flex items-start gap-3">
                  <Location
                    className="text-on-invert-muted mt-0.5 shrink-0"
                    size={18}
                    variant="Linear"
                  />
                  <span className="leading-relaxed text-white/85">
                    <span className="text-on-invert-muted text-[12px] font-medium tracking-[0.1em] uppercase">
                      Head Office
                    </span>
                    <br />
                    {SITE.contact.officeAddress.line1}
                    <br />
                    {SITE.contact.officeAddress.line2}
                    <br />
                    {SITE.contact.officeAddress.country}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Sms
                    className="text-on-invert-muted mt-0.5 shrink-0"
                    size={18}
                    variant="Linear"
                  />
                  <Link
                    className="text-white/85 transition-colors hover:text-white"
                    href={`mailto:${SITE.contact.email}`}
                    prefetch
                  >
                    {SITE.contact.email}
                  </Link>
                </li>
                <li className="flex items-start gap-3">
                  <Call
                    className="text-on-invert-muted mt-0.5 shrink-0"
                    size={18}
                    variant="Linear"
                  />
                  <Link
                    className="font-mono text-white/85 transition-colors hover:text-white"
                    href={SITE.contact.phoneHref}
                    prefetch
                  >
                    {SITE.contact.phone}
                  </Link>
                </li>
              </ul>

              {/* Registrations callout */}
              <div className="border-border-invert text-on-invert-muted mt-6 rounded-md border bg-white/5 p-4 text-[13px] leading-relaxed backdrop-blur">
                <div>
                  {SITE.legalNameHolding} (KVK{" "}
                  {SITE.registrations.kvkHealthcare})
                </div>
                <div>
                  {SITE.legalNameOperational} (KVK {SITE.registrations.kvkCare})
                </div>
                <div className="mt-2 font-mono text-white/70">
                  WDA No. {SITE.licences.wda.number} · GDP No.{" "}
                  {SITE.licences.gdp.number}
                </div>
                <div className="text-on-invert-muted mt-1 text-[12px]">
                  Supervised by the IGJ (Dutch Health &amp; Youth Care
                  Inspectorate)
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-border-invert flex flex-col gap-4 border-t py-8 md:flex-row md:items-center md:justify-between">
            <p className="text-on-invert-muted text-[14px]">
              © {year} {SITE.legalNameOperational} — All rights reserved.
            </p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px]">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-on-invert-muted transition-colors hover:text-white"
                    href={link.href}
                    prefetch
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
