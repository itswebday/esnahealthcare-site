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

const PreviewV4Page: React.FC = () => {
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
          <AngularButton href="/products#medical-devices" variant="primary">
            Explore medical devices
          </AngularButton>
        }
      />
      <CatalogCta
        ctaButtons={
          <>
            <AngularButton href="/contact?request=catalog" variant="invert">
              Request Full Catalog
            </AngularButton>
            <AngularButton href="/compliance" variant="invert-outline">
              Verify our licences
            </AngularButton>
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
            <span className="bg-primary h-1.5 w-1.5" />
            Preview · V4 · Angular Grid
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
    <header className="border-border/60 relative border-b bg-white">
      {/* Thin accent line above nav */}
      <div
        aria-hidden="true"
        className="from-primary to-accent absolute inset-x-0 top-0 h-[2px] bg-linear-to-r"
      />

      <Container size="xl">
        <div className="flex h-[72px] items-center justify-between gap-6">
          {/* Logo + badge */}
          <div className="flex items-center gap-4">
            <Logo variant="color" width={112} />
            <span className="border-primary/30 bg-primary-subtle text-primary-dark hidden items-center gap-1.5 border px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.15em] uppercase md:inline-flex">
              <ShieldTick size={12} variant="Bold" />
              EU · Licensed
            </span>
          </div>

          {/* Center — nav links with thick underline */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    className={cn(
                      "group text-muted hover:text-foreground relative flex h-[72px] items-center px-4 text-[14px] font-medium tracking-tight transition-colors",
                      link.href === "/" && "text-foreground",
                    )}
                    href={link.href}
                  >
                    {link.label}
                    {link.href === "/" && (
                      <span
                        aria-hidden="true"
                        className="bg-primary absolute inset-x-3 bottom-0 h-[3px]"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right — locale + CTA + hamburger */}
          <div className="flex items-center gap-3">
            {/* Angular locale toggle */}
            <div
              className="border-border bg-surface-1 flex h-10 items-stretch border"
              role="group"
              aria-label="Language"
            >
              <Global
                className="text-subtle mx-2.5 my-auto shrink-0"
                size={14}
                variant="Linear"
              />
              <button
                className={cn(
                  "px-3 text-[12px] font-semibold tracking-[0.1em] uppercase transition-colors",
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
                  "px-3 text-[12px] font-semibold tracking-[0.1em] uppercase transition-colors",
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

            {/* Angular CTA */}
            <AngularButton
              className="hidden sm:inline-flex"
              href="/contact"
              variant="primary"
            >
              Get in Touch
            </AngularButton>

            {/* Mobile burger */}
            <button
              className="border-border text-foreground hover:border-border-strong hover:bg-surface-1 inline-flex h-10 w-10 items-center justify-center border lg:hidden"
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

type AngularButtonVariant = "primary" | "outline" | "invert" | "invert-outline";

type AngularButtonProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
  variant: AngularButtonVariant;
};

const AngularButton: React.FC<AngularButtonProps> = ({
  children,
  className,
  href,
  variant,
}) => {
  const variantClasses: Record<AngularButtonVariant, string> = {
    primary:
      "bg-primary text-white border-primary hover:bg-primary-hover hover:border-primary-hover",
    outline:
      "bg-white text-foreground border-foreground hover:bg-foreground hover:text-white",
    invert:
      "bg-white text-foreground border-white hover:bg-surface-1 hover:border-surface-1",
    "invert-outline":
      "bg-transparent text-white border-white hover:bg-white hover:text-foreground",
  };

  return (
    <Link
      className={cn(
        "group relative inline-flex h-12 items-center gap-2 border-2 px-6 text-[14px] font-semibold tracking-tight transition-all duration-200",
        "before:absolute before:inset-0 before:-z-10 before:translate-x-1 before:translate-y-1 before:border-2 before:border-current before:opacity-30 before:transition-transform",
        "hover:before:translate-x-0 hover:before:translate-y-0",
        variantClasses[variant],
        className,
      )}
      href={href}
    >
      {/* Left accent square */}
      <span
        aria-hidden="true"
        className="h-2 w-2 shrink-0 bg-current opacity-80 transition-all duration-200 group-hover:h-3 group-hover:w-3"
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
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background — angular / grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.20]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11,22,40,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(11,22,40,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Floating rotated square outlines */}
        <div className="border-primary/30 absolute top-[8%] right-[12%] h-24 w-24 rotate-12 border-2" />
        <div className="border-accent/30 absolute top-[22%] right-[4%] h-16 w-16 rotate-6 border-2" />
        <div className="bg-primary/10 absolute top-[55%] right-[18%] h-12 w-12 -rotate-6" />
        <div className="border-foreground/15 absolute bottom-[10%] left-[8%] h-32 w-32 rotate-3 border-2" />
        {/* Diagonal lime accent line */}
        <div className="bg-primary absolute top-[58%] left-[-4%] h-[3px] w-[220px] -rotate-6" />
        <div className="bg-accent absolute top-[20%] right-[-2%] h-[2px] w-[160px] rotate-12" />
        {/* Corner bracket */}
        <div className="border-primary absolute top-6 left-6 h-10 w-10 border-t-2 border-l-2" />
        <div className="border-accent absolute right-6 bottom-6 h-10 w-10 border-r-2 border-b-2" />
      </div>

      <Container size="xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-7 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3 text-[12px] font-medium tracking-[0.14em] uppercase">
              <span className="border-border bg-surface-1 text-foreground inline-flex items-center gap-1.5 border px-3 py-1">
                <Location className="text-primary" size={12} variant="Bold" />
                Utrecht · NL
              </span>
              <span className="border-primary/30 bg-primary-subtle text-primary-dark inline-flex items-center gap-1.5 border px-3 py-1">
                Established 2021
              </span>
            </div>

            <h1 className="tracking-display text-foreground max-w-[18ch] text-[42px] leading-[1.02] font-semibold sm:text-[56px] lg:text-[66px]">
              Your{" "}
              <span className="text-primary relative inline-block">
                trusted
                <span
                  aria-hidden="true"
                  className="bg-primary/15 absolute inset-x-0 bottom-1 h-3"
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
              <AngularButton href="/contact" variant="primary">
                Get in Touch
              </AngularButton>
              <AngularButton href="/services" variant="outline">
                View our services
              </AngularButton>
            </div>

            {/* Licence chips */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="border-primary/40 bg-primary/10 text-primary-dark inline-flex items-center gap-1.5 border px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wide">
                WDA · {SITE.licences.wda.number}
              </span>
              <span className="border-accent/40 bg-accent/10 text-accent inline-flex items-center gap-1.5 border px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wide">
                GDP · {SITE.licences.gdp.number}
              </span>
            </div>
          </div>

          {/* Right — sharp compliance card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Offset accent block behind */}
              <div
                aria-hidden="true"
                className="bg-primary absolute top-3 left-3 h-full w-full"
              />

              <div className="border-foreground relative overflow-hidden border-2 bg-white p-8">
                <div className="flex items-center gap-3">
                  <div className="bg-primary inline-flex h-12 w-12 items-center justify-center text-white">
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
                      <span className="bg-surface-1 text-foreground px-2 py-0.5 font-mono text-[11px] font-semibold tracking-wide">
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

export default PreviewV4Page;
