"use client";

import Link from "next/link";
import {
  ArrowRight,
  Global,
  HambergerMenu,
  Location,
  ShieldTick,
} from "iconsax-react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { NAV_LINKS } from "@/lib/site";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { SITE } from "@/lib/site";
import {
  CatalogCta,
  MedicalDevicesTeaser,
  ProductsBlock,
  ServicesBlock,
  StatsBand,
} from "../_v2-sections";

const PreviewV5Page: React.FC = () => {
  return (
    <div className="relative">
      <PreviewBanner />
      <PreviewNav />
      <Hero />
      <StatsBand />
      <ServicesBlock />
      <ProductsBlock />
      <MedicalDevicesTeaser
        ctaButton={
          <FrameButton href="/products#medical-devices" variant="primary">
            Explore medical devices
          </FrameButton>
        }
      />
      <CatalogCta
        ctaButtons={
          <>
            <FrameButton href="/contact?request=catalog" variant="invert">
              Request Full Catalog
            </FrameButton>
            <FrameButton href="/compliance" variant="invert-outline">
              Verify our licences
            </FrameButton>
          </>
        }
      />
    </div>
  );
};

const PreviewBanner: React.FC = () => {
  return (
    <div className="border-border/60 bg-surface-1 border-b py-3">
      <Container size="xl">
        <div className="text-foreground flex items-center justify-between text-[12px] font-medium tracking-[0.14em] uppercase">
          <span className="inline-flex items-center gap-2">
            <span className="bg-primary h-1.5 w-1.5 rounded-full" />
            Preview · V5 · Corner Frame
          </span>
          <Link
            className="text-subtle hover:text-foreground inline-flex items-center gap-1.5"
            href="/preview"
          >
            ← Back to directions
          </Link>
        </div>
      </Container>
    </div>
  );
};

const PreviewNav: React.FC = () => {
  const [locale, setLocale] = useState<"EN" | "NL">("EN");

  return (
    <header className="relative bg-white pt-5 pb-2">
      <Container size="xl">
        {/* Floating island container */}
        <div className="border-border bg-surface-1/70 shadow-island flex h-16 items-center justify-between gap-4 rounded-2xl border px-3 backdrop-blur-xl">
          {/* Logo */}
          <div className="flex items-center gap-3 pl-2">
            <Logo variant="color" width={106} />
          </div>

          {/* Center — pill tabs */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    className={cn(
                      "relative flex h-10 items-center rounded-xl px-3.5 text-[14px] font-medium tracking-tight transition-all",
                      link.href === "/"
                        ? "bg-foreground shadow-card text-white"
                        : "text-muted hover:text-foreground hover:bg-white/60",
                    )}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right — locale + CTA + burger */}
          <div className="flex items-center gap-2">
            {/* Locale (framed) */}
            <div
              className="border-border flex h-10 items-center gap-0.5 rounded-xl border bg-white p-1"
              role="group"
              aria-label="Language"
            >
              <Global
                className="text-subtle mx-1.5 shrink-0"
                size={12}
                variant="Linear"
              />
              <button
                className={cn(
                  "flex h-7 items-center justify-center rounded-lg px-2.5 text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors",
                  locale === "EN"
                    ? "bg-primary text-white"
                    : "text-muted hover:text-foreground",
                )}
                type="button"
                onClick={() => setLocale("EN")}
              >
                EN
              </button>
              <button
                className={cn(
                  "flex h-7 items-center justify-center rounded-lg px-2.5 text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors",
                  locale === "NL"
                    ? "bg-primary text-white"
                    : "text-muted hover:text-foreground",
                )}
                type="button"
                onClick={() => setLocale("NL")}
              >
                NL
              </button>
            </div>

            <FrameButton
              className="hidden sm:inline-flex"
              href="/contact"
              variant="primary"
            >
              Get in Touch
            </FrameButton>

            <button
              className="border-border text-foreground hover:border-border-strong hover:bg-surface-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-white lg:hidden"
              type="button"
              aria-label="Open menu"
            >
              <HambergerMenu size={18} variant="Linear" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

type FrameButtonVariant = "primary" | "outline" | "invert" | "invert-outline";

type FrameButtonProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
  variant: FrameButtonVariant;
};

const FrameButton: React.FC<FrameButtonProps> = ({
  children,
  className,
  href,
  variant,
}) => {
  const variantClasses: Record<FrameButtonVariant, string> = {
    primary:
      "bg-primary text-white border-primary hover:bg-primary-hover hover:border-primary-hover [&_.bracket]:text-white/90",
    outline:
      "bg-white text-foreground border-foreground hover:bg-foreground hover:text-white [&_.bracket]:text-foreground/70 [&_.bracket:hover]:text-white",
    invert:
      "bg-white text-foreground border-white hover:bg-surface-1 [&_.bracket]:text-foreground/60",
    "invert-outline":
      "bg-transparent text-white border-white hover:bg-white hover:text-foreground [&_.bracket]:text-white/80",
  };

  return (
    <Link
      className={cn(
        "group relative inline-flex h-12 items-center gap-2 rounded-xl border-2 px-6 text-[14px] font-semibold tracking-tight transition-all duration-200",
        variantClasses[variant],
        className,
      )}
      href={href}
    >
      {/* Top-left L-bracket */}
      <span
        aria-hidden="true"
        className="bracket absolute top-1.5 left-1.5 h-2 w-2 border-t-2 border-l-2 border-current transition-all group-hover:h-2.5 group-hover:w-2.5"
      />
      {/* Bottom-right L-bracket */}
      <span
        aria-hidden="true"
        className="bracket absolute right-1.5 bottom-1.5 h-2 w-2 border-r-2 border-b-2 border-current transition-all group-hover:h-2.5 group-hover:w-2.5"
      />
      {children}
      <ArrowRight
        className="shrink-0 transition-transform group-hover:translate-x-0.5"
        size={14}
        variant="Linear"
      />
    </Link>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
      {/* Background — corner-framed / floating boxes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Central soft radial glow */}
        <div className="bg-primary/15 absolute top-[20%] left-[30%] h-[520px] w-[520px] rounded-full blur-[110px]" />
        <div className="bg-accent/10 absolute top-[10%] right-[10%] h-[420px] w-[420px] rounded-full blur-[100px]" />

        {/* Floating outlined boxes */}
        <div className="border-primary/40 absolute top-[12%] right-[14%] h-20 w-20 rotate-12 rounded-2xl border-2" />
        <div className="border-accent/40 absolute top-[30%] right-[6%] h-12 w-12 -rotate-6 rounded-xl border-2" />
        <div className="border-foreground/20 absolute bottom-[18%] left-[10%] h-28 w-28 -rotate-3 rounded-3xl border-2" />
        <div className="bg-primary/15 absolute bottom-[30%] left-[4%] h-10 w-10 rotate-45 rounded-lg" />

        {/* Dot accents */}
        <div className="bg-primary absolute top-[18%] right-[30%] h-2 w-2 rounded-full" />
        <div className="bg-accent absolute top-[62%] right-[24%] h-2 w-2 rounded-full" />
        <div className="bg-primary absolute bottom-[22%] left-[38%] h-2 w-2 rounded-full" />

        {/* Large corner brackets */}
        <div className="border-primary/60 absolute top-4 left-4 h-14 w-14 rounded-tl-3xl border-t-2 border-l-2" />
        <div className="border-accent/60 absolute top-4 right-4 h-14 w-14 rounded-tr-3xl border-t-2 border-r-2" />
        <div className="border-accent/60 absolute bottom-4 left-4 h-14 w-14 rounded-bl-3xl border-b-2 border-l-2" />
        <div className="border-primary/60 absolute right-4 bottom-4 h-14 w-14 rounded-br-3xl border-r-2 border-b-2" />
      </div>

      <Container size="xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-7 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3 text-[12px] font-medium tracking-[0.14em] uppercase">
              <span className="border-border text-foreground shadow-hint inline-flex items-center gap-1.5 rounded-xl border bg-white px-3 py-1">
                <Location className="text-primary" size={12} variant="Bold" />
                Utrecht · NL
              </span>
              <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex items-center gap-1.5 rounded-xl border px-3 py-1">
                Established 2021
              </span>
            </div>

            <h1 className="tracking-display text-foreground max-w-[18ch] text-[42px] leading-[1.02] font-semibold sm:text-[54px] lg:text-[66px]">
              Your{" "}
              <span className="text-primary relative inline-block italic">
                trusted
                <span
                  aria-hidden="true"
                  className="bg-primary/15 absolute -inset-2 -z-10 rounded-xl"
                />
              </span>{" "}
              partner for{" "}
              <span className="from-primary to-accent bg-linear-to-r bg-clip-text text-transparent">
                medicines
              </span>{" "}
              &amp; medical devices.
            </h1>

            <p className="text-muted max-w-2xl text-[16px] leading-[1.65]">
              <span className="text-foreground font-semibold">{SITE.name}</span>{" "}
              is a Dutch EU-licensed wholesaler holding a Wholesale Distribution
              Authorisation and GDP certification — supplying medicines and
              medical devices to qualified distributors, hospitals, and
              pharmacies worldwide.
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <FrameButton href="/contact" variant="primary">
                Get in Touch
              </FrameButton>
              <FrameButton href="/services" variant="outline">
                View our services
              </FrameButton>
            </div>

            {/* Licence chips */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="border-primary/40 bg-primary/10 text-primary-dark inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wide">
                WDA · {SITE.licences.wda.number}
              </span>
              <span className="border-accent/40 bg-accent/10 text-accent inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wide">
                GDP · {SITE.licences.gdp.number}
              </span>
            </div>
          </div>

          {/* Right — framed compliance card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Corner bracket decorations (outside card) */}
              <div className="border-primary absolute -top-3 -left-3 h-6 w-6 rounded-tl-xl border-t-2 border-l-2" />
              <div className="border-primary absolute -top-3 -right-3 h-6 w-6 rounded-tr-xl border-t-2 border-r-2" />
              <div className="border-accent absolute -bottom-3 -left-3 h-6 w-6 rounded-bl-xl border-b-2 border-l-2" />
              <div className="border-accent absolute -right-3 -bottom-3 h-6 w-6 rounded-br-xl border-r-2 border-b-2" />

              <div className="border-border shadow-card relative overflow-hidden rounded-3xl border bg-white p-8">
                <div className="flex items-center gap-3">
                  <div className="bg-primary shadow-primary/30 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg">
                    <ShieldTick size={22} variant="Bold" />
                  </div>
                  <div>
                    <div className="text-subtle font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
                      Active licences
                    </div>
                    <div className="text-foreground mt-0.5 text-[16px] font-semibold">
                      Fully compliant
                    </div>
                  </div>
                </div>

                <ul className="mt-6 flex flex-col gap-4">
                  {[
                    {
                      label: "EU Wholesale Distribution Authorisation",
                      value: SITE.licences.wda.number,
                    },
                    {
                      label: "Good Distribution Practice",
                      value: SITE.licences.gdp.number,
                    },
                    {
                      label: "Customer qualification SOP",
                      value: "QA-015",
                    },
                  ].map((row) => (
                    <li
                      key={row.label}
                      className="border-border/60 flex items-start justify-between gap-4 border-t pt-4 first:border-0 first:pt-0"
                    >
                      <span className="text-muted text-[13px] leading-snug">
                        {row.label}
                      </span>
                      <span className="bg-surface-1 text-foreground rounded-md px-2 py-0.5 font-mono text-[11px] font-semibold tracking-wide">
                        {row.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PreviewV5Page;
