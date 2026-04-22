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

const PreviewV6Page: React.FC = () => {
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
          <SliceButton href="/products#medical-devices" variant="primary">
            Explore medical devices
          </SliceButton>
        }
      />
      <CatalogCta
        ctaButtons={
          <>
            <SliceButton href="/contact?request=catalog" variant="invert">
              Request Full Catalog
            </SliceButton>
            <SliceButton href="/compliance" variant="invert-outline">
              Verify our licences
            </SliceButton>
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
            <span
              aria-hidden="true"
              className="bg-primary h-2.5 w-2.5 skew-x-[-20deg]"
            />
            Preview · V6 · Diagonal Slice
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
    <header className="border-border/60 relative overflow-hidden border-b bg-white">
      {/* Diagonal accent at right edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-[45%]"
      >
        <div className="bg-surface-invert absolute inset-0 translate-x-[30%] skew-x-[-18deg]" />
      </div>

      <Container size="xl">
        <div className="relative flex h-[76px] items-center justify-between gap-4">
          {/* Logo + links (on white side) */}
          <div className="flex items-center gap-8">
            <Logo variant="color" width={110} />
            <nav aria-label="Primary" className="hidden xl:block">
              <ul className="flex items-center gap-0.5">
                {NAV_LINKS.slice(0, 5).map((link) => (
                  <li key={link.href}>
                    <Link
                      className={cn(
                        "group relative flex h-10 items-center rounded-full px-3.5 text-[14px] font-medium tracking-tight transition-colors",
                        link.href === "/"
                          ? "text-foreground"
                          : "text-muted hover:text-foreground",
                      )}
                      href={link.href}
                    >
                      {link.label}
                      {link.href === "/" && (
                        <span
                          aria-hidden="true"
                          className="bg-primary absolute inset-x-3 -bottom-0.5 h-0.5 skew-x-[-20deg]"
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right block — sits on top of navy diagonal */}
          <div className="relative flex items-center gap-3">
            {/* Locale (diagonal segmented) */}
            <div
              className="flex h-10 items-stretch overflow-hidden rounded-full bg-white/10 p-1 ring-1 ring-white/20 backdrop-blur-md"
              role="group"
              aria-label="Language"
            >
              <Global
                className="mx-2 my-auto shrink-0 text-white/70"
                size={12}
                variant="Linear"
              />
              <button
                className={cn(
                  "relative flex h-8 items-center justify-center rounded-full px-3 text-[11px] font-semibold tracking-[0.1em] uppercase transition-all",
                  locale === "EN"
                    ? "bg-primary text-white shadow-md"
                    : "text-white/70 hover:text-white",
                )}
                type="button"
                onClick={() => setLocale("EN")}
              >
                EN
              </button>
              <button
                className={cn(
                  "relative flex h-8 items-center justify-center rounded-full px-3 text-[11px] font-semibold tracking-[0.1em] uppercase transition-all",
                  locale === "NL"
                    ? "bg-primary text-white shadow-md"
                    : "text-white/70 hover:text-white",
                )}
                type="button"
                onClick={() => setLocale("NL")}
              >
                NL
              </button>
            </div>

            <SliceButton
              className="hidden sm:inline-flex"
              href="/contact"
              variant="invert"
            >
              Get in Touch
            </SliceButton>

            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md hover:bg-white/20 xl:hidden"
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

type SliceButtonVariant = "primary" | "outline" | "invert" | "invert-outline";

type SliceButtonProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
  variant: SliceButtonVariant;
};

const SliceButton: React.FC<SliceButtonProps> = ({
  children,
  className,
  href,
  variant,
}) => {
  const variantClasses: Record<SliceButtonVariant, string> = {
    primary:
      "from-primary to-primary-dark text-white shadow-lg shadow-primary/30 hover:shadow-primary/50",
    outline:
      "from-white to-surface-1 text-foreground ring-2 ring-foreground hover:from-foreground hover:to-foreground hover:text-white",
    invert:
      "from-white to-white text-foreground shadow-lg shadow-black/20 hover:shadow-black/30",
    "invert-outline":
      "from-transparent to-transparent text-white ring-2 ring-white/80 hover:from-white/10 hover:to-white/10",
  };

  return (
    <Link
      className={cn(
        "group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full bg-linear-to-r px-7 text-[14px] font-semibold tracking-tight transition-all duration-200",
        variantClasses[variant],
        className,
      )}
      href={href}
    >
      {/* Diagonal shine sweep on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full"
      />

      <span className="relative">{children}</span>

      {/* Diagonal arrow accent */}
      <span className="relative flex h-6 w-6 items-center justify-center">
        <ArrowRight
          className="-rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:rotate-0"
          size={14}
          variant="Bold"
        />
      </span>
    </Link>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background — diagonal slice + rotated shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Huge diagonal navy band (very subtle) */}
        <div className="bg-foreground/[0.04] absolute -inset-y-20 -right-[15%] w-[80%] skew-x-[-18deg]" />

        {/* Lime diagonal stripe */}
        <div className="bg-primary absolute top-[38%] -right-[10%] h-[6px] w-[460px] rotate-[-14deg]" />
        <div className="bg-accent absolute top-[52%] -right-[4%] h-[4px] w-[320px] rotate-[-14deg]" />

        {/* Rotated rectangle shapes */}
        <div className="bg-primary/15 absolute top-[12%] right-[8%] h-32 w-20 -rotate-12 rounded-2xl" />
        <div className="bg-accent/15 absolute top-[8%] right-[22%] h-20 w-14 rotate-12 rounded-xl" />
        <div className="border-primary/40 absolute right-[14%] bottom-[10%] h-40 w-24 rotate-6 rounded-3xl border-2" />
        <div className="bg-primary absolute top-[28%] right-[32%] h-3 w-3 rotate-45" />
        <div className="bg-accent absolute top-[70%] right-[28%] h-4 w-4 rotate-45" />

        {/* Radial accents */}
        <div className="bg-primary/20 absolute top-[60%] left-[-8%] h-[420px] w-[420px] rounded-full blur-[90px]" />
        <div className="bg-accent/15 absolute top-[-8%] left-[20%] h-[360px] w-[360px] rounded-full blur-[80px]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11,22,40,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(11,22,40,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container size="xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-7 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3 text-[12px] font-medium tracking-[0.14em] uppercase">
              <span className="border-border bg-surface-1 text-foreground inline-flex items-center gap-1.5 rounded-full border px-3 py-1">
                <Location className="text-primary" size={12} variant="Bold" />
                Utrecht · NL
              </span>
              <span className="from-primary to-primary-dark inline-flex items-center gap-1.5 rounded-full bg-linear-to-r px-3 py-1 text-white">
                EU-licensed wholesaler
              </span>
            </div>

            <h1 className="tracking-display text-foreground max-w-[18ch] text-[42px] leading-[1.02] font-semibold sm:text-[56px] lg:text-[66px]">
              Your{" "}
              <span className="relative inline-block">
                <span className="from-primary to-accent relative bg-linear-to-r bg-clip-text text-transparent italic">
                  trusted
                </span>
                <span
                  aria-hidden="true"
                  className="from-primary to-accent absolute -bottom-1 left-0 h-1 w-full skew-x-[-20deg] bg-linear-to-r"
                />
              </span>{" "}
              partner for medicines &amp; medical devices.
            </h1>

            <p className="text-muted max-w-2xl text-[16px] leading-[1.65]">
              <span className="text-foreground font-semibold">{SITE.name}</span>{" "}
              is a Dutch EU-licensed wholesaler holding a Wholesale Distribution
              Authorisation and GDP certification — supplying medicines and
              medical devices to qualified distributors, hospitals, and
              pharmacies worldwide.
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <SliceButton href="/contact" variant="primary">
                Get in Touch
              </SliceButton>
              <SliceButton href="/services" variant="outline">
                View our services
              </SliceButton>
            </div>

            {/* Licence chips */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="bg-primary/10 text-primary-dark ring-primary/30 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wide ring-1">
                WDA · {SITE.licences.wda.number}
              </span>
              <span className="bg-accent/10 text-accent ring-accent/30 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wide ring-1">
                GDP · {SITE.licences.gdp.number}
              </span>
            </div>
          </div>

          {/* Right — tilted compliance card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Back layer rotated */}
              <div
                aria-hidden="true"
                className="from-primary to-accent absolute -inset-2 -z-10 rotate-[1.5deg] rounded-3xl bg-linear-to-br opacity-80"
              />
              {/* Second back offset */}
              <div
                aria-hidden="true"
                className="bg-surface-invert absolute -inset-1 -z-10 -rotate-[1deg] rounded-3xl"
              />

              <div className="border-border shadow-float relative overflow-hidden rounded-3xl border bg-white p-8">
                {/* Diagonal decoration in corner */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-6 -right-6 h-20 w-20"
                >
                  <div className="bg-primary absolute inset-0 rotate-12 rounded-2xl opacity-20" />
                  <div className="bg-accent absolute inset-0 -rotate-6 rounded-2xl opacity-15" />
                </div>

                <div className="relative flex items-center gap-3">
                  <div className="from-primary to-accent shadow-primary/40 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br text-white shadow-lg">
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
                      <span className="from-primary to-accent skew-x-[-10deg] bg-linear-to-r px-2.5 py-0.5 font-mono text-[11px] font-semibold tracking-wide text-white">
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

export default PreviewV6Page;
