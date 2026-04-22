import {
  ArrowRight,
  Award,
  Box,
  Global,
  Heart,
  Hospital,
  Location,
  ShieldTick,
  TagCross,
  TickCircle,
  Truck,
} from "iconsax-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { PRODUCT_CATEGORIES, SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

const STATS = [
  { value: "200+", label: "Pharmaceutical products" },
  { value: "8", label: "Therapeutic areas" },
  { value: "24h", label: "Average RFQ response" },
  { value: "EEA", label: "Sourcing network" },
] as const;

const PRODUCT_ICON_MAP = {
  branded: Award,
  generic: TagCross,
  hospital: Hospital,
  specialty: Award,
  "cold-chain": Box,
  prescription: Heart,
} as const;

const SERVICE_ICON_MAP = {
  "pharma-wholesale": Box,
  "global-sourcing": Global,
  "international-distribution": Truck,
  "temperature-controlled": Box,
} as const;

const PreviewV1Page: React.FC = () => {
  return (
    <div className="relative bg-[color-mix(in_oklab,var(--color-primary-subtle)_55%,var(--color-background))]">
      <DotGrid />
      <PreviewBanner label="Emerald Field" />

      {/* Hero */}
      <Hero />

      {/* Stats band */}
      <StatsBand />

      {/* Services */}
      <ServicesBlock />

      {/* Products */}
      <ProductsBlock />

      {/* Medical devices teaser */}
      <MedicalDevicesTeaser />

      {/* Catalog CTA */}
      <CatalogCta />
    </div>
  );
};

const DotGrid: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
      style={{
        backgroundImage:
          "radial-gradient(rgba(46,139,53,0.20) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />
  );
};

const PreviewBanner: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="border-primary/20 bg-primary/10 border-b py-3 backdrop-blur-sm">
      <Container size="xl">
        <div className="text-primary-dark flex items-center justify-between text-[12px] font-medium tracking-[0.14em] uppercase">
          <span>Preview · {label}</span>
          <Link
            className="hover:text-primary inline-flex items-center gap-1.5"
            href="/preview"
          >
            ← Back to directions
          </Link>
        </div>
      </Container>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="bg-primary/25 pointer-events-none absolute -top-32 -left-32 -z-10 h-[520px] w-[520px] rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="bg-accent/20 pointer-events-none absolute top-40 -right-40 -z-10 h-[480px] w-[480px] rounded-full blur-3xl"
      />

      <Container size="xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — copy */}
          <div className="flex flex-col gap-7 lg:col-span-7">
            {/* Meta row */}
            <div className="text-subtle flex flex-wrap items-center gap-3 text-[12px] font-medium tracking-[0.14em] uppercase">
              <span className="border-border text-foreground inline-flex items-center gap-1.5 rounded-full border bg-white px-3 py-1">
                <Location className="text-primary" size={12} variant="Bold" />
                Utrecht · NL
              </span>
              <span className="border-primary/30 bg-primary-subtle text-primary-dark inline-flex items-center gap-1.5 rounded-full border px-3 py-1">
                EU-licensed wholesaler
              </span>
            </div>

            {/* Headline */}
            <h1 className="tracking-display text-foreground max-w-[18ch] text-[40px] leading-[1.04] font-semibold sm:text-[52px] lg:text-[64px]">
              Your trusted{" "}
              <span className="relative inline-block">
                <span className="z-raised text-primary relative italic">
                  partner
                </span>
                <span
                  aria-hidden="true"
                  className="bg-primary/20 absolute inset-x-0 bottom-1 h-3"
                />
              </span>{" "}
              for medicines &amp; medical devices.
            </h1>

            {/* Body */}
            <p className="text-muted max-w-2xl text-[16px] leading-[1.65]">
              <span className="text-foreground font-semibold">{SITE.name}</span>{" "}
              is a Dutch EU-licensed wholesaler holding a Wholesale Distribution
              Authorisation and GDP certification. We supply branded and generic
              medicines alongside a curated range of medical devices and
              diagnostics to qualified distributors, hospitals, and pharmacies
              worldwide.
            </p>

            {/* CTAs */}
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Button href="/contact" size="lg" variant="primary" withArrow>
                Get in Touch
              </Button>
              <Button href="/services" size="lg" variant="outline">
                View our services
              </Button>
            </div>
          </div>

          {/* Right — licence + feature card stack */}
          <div className="lg:col-span-5">
            <div className="relative flex flex-col gap-5">
              {/* Main licence card */}
              <div className="border-border shadow-lift relative overflow-hidden rounded-2xl border bg-white p-8">
                {/* Corner accent */}
                <div
                  aria-hidden="true"
                  className="bg-primary/15 pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full blur-2xl"
                />

                {/* Top band */}
                <div className="text-primary-dark flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.18em] uppercase">
                  <ShieldTick
                    className="text-primary"
                    size={16}
                    variant="Bold"
                  />
                  Active licences
                </div>

                <div className="mt-6 flex flex-col gap-5">
                  {/* WDA */}
                  <LicenceRow
                    label="WDA"
                    subtitle="Wholesale Distribution Authorisation"
                    value={SITE.licences.wda.number}
                  />
                  <div className="bg-border h-px" />
                  {/* GDP */}
                  <LicenceRow
                    label="GDP"
                    subtitle="Good Distribution Practice"
                    value={SITE.licences.gdp.number}
                  />
                </div>

                <Link
                  className="group text-primary-dark mt-7 inline-flex items-center gap-1.5 text-[13px] font-medium"
                  href="/compliance"
                >
                  Verify authorisations
                  <ArrowRight
                    className="transition-transform group-hover:translate-x-0.5"
                    size={14}
                    variant="Linear"
                  />
                </Link>
              </div>

              {/* Offset accent card */}
              <div className="grid grid-cols-2 gap-3">
                <MiniStat
                  icon={<Award size={18} variant="Bold" />}
                  label="ISO-9001"
                  sublabel="Certified"
                />
                <MiniStat
                  icon={<Global size={18} variant="Bold" />}
                  label="EEA"
                  sublabel="Network"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

type LicenceRowProps = {
  label: string;
  subtitle: string;
  value: string;
};

const LicenceRow: React.FC<LicenceRowProps> = ({ label, subtitle, value }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <div className="text-subtle font-mono text-[11px] font-semibold tracking-[0.18em] uppercase">
          {label}
        </div>
        <div className="text-foreground mt-1 text-[14px]">{subtitle}</div>
      </div>
      <div className="bg-primary-subtle text-primary-dark rounded-xl px-3 py-1.5 font-mono text-[12px] font-semibold tracking-wide">
        {value}
      </div>
    </div>
  );
};

type MiniStatProps = {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
};

const MiniStat: React.FC<MiniStatProps> = ({ icon, label, sublabel }) => {
  return (
    <div className="border-border flex items-center gap-3 rounded-xl border bg-white/80 p-4 backdrop-blur">
      <div className="bg-primary inline-flex h-10 w-10 items-center justify-center rounded-lg text-white">
        {icon}
      </div>
      <div>
        <div className="text-foreground text-[14px] font-semibold">{label}</div>
        <div className="text-subtle text-[11px] tracking-wide uppercase">
          {sublabel}
        </div>
      </div>
    </div>
  );
};

const StatsBand: React.FC = () => {
  return (
    <section className="relative py-10 sm:py-14">
      <Container size="xl">
        <div className="border-primary/20 shadow-card grid grid-cols-2 gap-3 rounded-3xl border bg-white p-4 sm:grid-cols-4 sm:gap-4 sm:p-6">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-primary-subtle/40 relative flex flex-col gap-1 rounded-2xl p-5"
            >
              <div className="text-primary-dark font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
                {String(index + 1).padStart(2, "0")} ·
              </div>
              <div className="font-display text-foreground text-[34px] leading-none font-semibold tracking-tight sm:text-[40px]">
                {stat.value}
              </div>
              <div className="text-muted text-[13px] leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const ServicesBlock: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        {/* Header */}
        <div className="flex flex-col items-start gap-4">
          <span className="border-primary/30 text-primary-dark inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
            <span className="bg-primary h-1.5 w-1.5 rounded-full" />
            Services
          </span>
          <h2 className="tracking-display text-foreground max-w-3xl text-[32px] leading-[1.1] font-semibold sm:text-[42px]">
            Four service lines, backed by licences and logistics.
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICON_MAP[service.icon] ?? Box;
            const isAccent = index % 2 === 1;

            return (
              <article
                key={service.slug}
                className="group duration-slow hover:shadow-lift relative flex flex-col gap-5 overflow-hidden rounded-2xl bg-white p-7 transition-all hover:-translate-y-1"
              >
                {/* Top stripe */}
                <div
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 top-0 h-1",
                    isAccent ? "bg-accent" : "bg-primary",
                  )}
                />

                {/* Number + icon */}
                <div className="flex items-center justify-between">
                  <div
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center",
                      "rounded-xl",
                      isAccent
                        ? "bg-accent-subtle text-accent"
                        : "bg-primary-subtle text-primary-dark",
                    )}
                  >
                    <Icon size={22} variant="Bold" />
                  </div>
                  <span className="text-subtle font-mono text-[11px] font-semibold tracking-[0.18em] uppercase">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-foreground text-[17px] leading-tight font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted text-[14px] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="mt-auto flex flex-col gap-2">
                  {service.bullets.slice(0, 2).map((bullet) => (
                    <li
                      key={bullet}
                      className="text-foreground flex items-start gap-2 text-[13px] leading-snug"
                    >
                      <TickCircle
                        className={cn(
                          "mt-0.5 shrink-0",
                          isAccent ? "text-accent" : "text-primary",
                        )}
                        size={14}
                        variant="Bold"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

const ProductsBlock: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="from-primary-subtle/60 pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-linear-to-b to-transparent"
      />
      <Container size="xl">
        <div className="flex flex-col items-start gap-4">
          <span className="border-accent/30 text-accent inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
            <span className="bg-accent h-1.5 w-1.5 rounded-full" />
            Products
          </span>
          <h2 className="tracking-display text-foreground max-w-3xl text-[32px] leading-[1.1] font-semibold sm:text-[42px]">
            A broad portfolio ensuring continuous availability.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_CATEGORIES.map((category, index) => {
            const Icon = PRODUCT_ICON_MAP[category.icon] ?? Award;

            return (
              <article
                key={category.slug}
                className="group duration-slow hover:border-primary/40 hover:shadow-lift relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-white bg-white/80 p-7 backdrop-blur transition-all hover:bg-white"
              >
                {/* Glow */}
                <div
                  aria-hidden="true"
                  className="bg-primary/10 duration-slow pointer-events-none absolute -top-14 -right-14 h-36 w-36 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                />

                {/* Icon with layered circles */}
                <div className="relative h-14 w-14">
                  <div
                    aria-hidden="true"
                    className="bg-primary-subtle absolute inset-0 rounded-2xl"
                  />
                  <div
                    aria-hidden="true"
                    className="bg-primary/15 absolute inset-1 rounded-xl"
                  />
                  <div className="text-primary-dark relative flex h-full w-full items-center justify-center">
                    <Icon size={22} variant="Bold" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-subtle font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
                      0{index + 1} / {PRODUCT_CATEGORIES.length}
                    </span>
                  </div>
                  <h3 className="text-foreground text-[18px] leading-tight font-semibold tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-muted text-[14px] leading-relaxed">
                    {category.summary}
                  </p>
                </div>

                <Link
                  className="group/link text-primary-dark mt-auto inline-flex items-center gap-1.5 text-[13px] font-medium"
                  href={`/products#${category.slug}`}
                >
                  View details
                  <ArrowRight
                    className="transition-transform group-hover/link:translate-x-1"
                    size={14}
                    variant="Linear"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

const MedicalDevicesTeaser: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <div className="border-primary/20 shadow-card relative overflow-hidden rounded-3xl border bg-white p-10 sm:p-14">
          {/* Decorative blobs */}
          <div
            aria-hidden="true"
            className="bg-primary/10 pointer-events-none absolute top-1/2 -left-24 h-80 w-80 -translate-y-1/2 rounded-full blur-3xl"
          />
          <div
            aria-hidden="true"
            className="bg-accent/15 pointer-events-none absolute -right-10 -bottom-10 h-60 w-60 rounded-full blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="text-accent inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.14em] uppercase">
                <span className="bg-accent h-px w-6" />
                Beyond pharmaceuticals
              </span>
              <h2 className="tracking-display text-foreground mt-4 text-[28px] leading-[1.15] font-semibold sm:text-[36px]">
                Medical devices & diagnostics — curated through our global
                partner network.
              </h2>
              <p className="text-muted mt-4 max-w-xl text-[15px] leading-relaxed">
                From Roche and Abbott to 3M and Mölnlycke — reliable sourcing of
                high-quality medical devices and diagnostic solutions.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  href="/products#medical-devices"
                  size="md"
                  variant="primary"
                  withArrow
                >
                  Explore medical devices
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Diagnostic test kits",
                  "Wound care",
                  "Surgical supplies",
                  "Medical consumables",
                  "Personal protective",
                  "Hospital equipment",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={cn(
                      "rounded-xl p-4",
                      "text-[12px] leading-snug font-medium tracking-tight",
                      index % 3 === 0
                        ? "bg-primary text-white"
                        : index % 3 === 1
                          ? "bg-accent-subtle text-accent"
                          : "bg-primary-subtle text-primary-dark",
                    )}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const CatalogCta: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <div className="from-primary via-primary to-primary-dark relative overflow-hidden rounded-3xl bg-linear-to-br p-10 text-white sm:p-14">
          {/* Decorative diagonal stripes */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, white 0 1px, transparent 1px 24px)",
            }}
          />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="text-[12px] font-medium tracking-[0.14em] text-white/70 uppercase">
                For qualified distributors
              </span>
              <h2 className="tracking-display mt-3 text-[32px] leading-[1.1] font-semibold text-white sm:text-[42px]">
                Need our full product catalog?
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/80">
                The complete catalog with 200+ products, pricing, and current
                availability is shared upon request after qualification.
                Commercial team replies within one business day.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
              <Button
                href="/contact?request=catalog"
                size="lg"
                variant="invert"
                withArrow
              >
                Request Full Catalog
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PreviewV1Page;
