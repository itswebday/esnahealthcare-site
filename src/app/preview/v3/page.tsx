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

const PreviewV3Page: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <MeshBackdrop />
      <PreviewBanner label="Duotone Mesh" />
      <Hero />
      <StatsBand />
      <ServicesBlock />
      <ProductsBlock />
      <MedicalDevicesTeaser />
      <CatalogCta />
    </div>
  );
};

const MeshBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      {/* Base wash */}
      <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--color-primary-subtle)_35%,var(--color-background))]" />

      {/* Green mesh blobs */}
      <div className="bg-primary/25 absolute top-[-10%] -left-40 h-[700px] w-[700px] rounded-full blur-[120px]" />
      <div className="bg-primary/20 absolute top-[60%] -left-20 h-[480px] w-[480px] rounded-full blur-[120px]" />

      {/* Navy mesh blobs */}
      <div className="bg-accent/20 absolute top-[10%] -right-40 h-[600px] w-[600px] rounded-full blur-[120px]" />
      <div className="bg-accent/15 absolute top-[80%] right-[-5%] h-[520px] w-[520px] rounded-full blur-[120px]" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,22,40,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(11,22,40,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
};

const PreviewBanner: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="border-border/60 border-b bg-white/70 py-3 backdrop-blur-md">
      <Container size="xl">
        <div className="text-foreground flex items-center justify-between text-[12px] font-medium tracking-[0.14em] uppercase">
          <span className="inline-flex items-center gap-2">
            <span className="bg-primary h-1.5 w-1.5 rounded-full" />
            Preview · {label}
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

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-7 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3 text-[12px] font-medium tracking-[0.14em] uppercase">
              <span className="border-border text-foreground shadow-hint inline-flex items-center gap-1.5 rounded-full border bg-white px-3 py-1">
                <Location className="text-primary" size={12} variant="Bold" />
                Utrecht · NL
              </span>
              <span className="border-border text-subtle shadow-hint inline-flex items-center gap-1.5 rounded-full border bg-white px-3 py-1">
                Established 2021
              </span>
            </div>

            <h1 className="tracking-display text-foreground max-w-[18ch] text-[40px] leading-[1.04] font-semibold sm:text-[54px] lg:text-[66px]">
              Your{" "}
              <span className="relative inline-block italic">
                <span className="z-raised from-primary to-accent relative bg-linear-to-r bg-clip-text text-transparent">
                  trusted
                </span>
              </span>{" "}
              partner for medicines &amp; medical devices.
            </h1>

            <p className="text-muted max-w-2xl text-[16px] leading-[1.65]">
              <span className="text-foreground font-semibold">{SITE.name}</span>{" "}
              is a Dutch EU-licensed wholesaler holding a Wholesale Distribution
              Authorisation and GDP certification — supplying medicines and a
              curated range of medical devices and diagnostics to qualified
              distributors, hospitals, and pharmacies worldwide.
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Button href="/contact" size="lg" variant="primary" withArrow>
                Get in Touch
              </Button>
              <Button href="/services" size="lg" variant="outline">
                View our services
              </Button>
            </div>
          </div>

          {/* Right — offset-block card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Offset accent block (behind) */}
              <div
                aria-hidden="true"
                className="from-primary to-accent absolute -right-3 -bottom-3 h-full w-full rounded-3xl bg-linear-to-br"
              />

              <div className="border-border shadow-card relative overflow-hidden rounded-3xl border bg-white p-8">
                <div className="flex items-center gap-3">
                  <DuotoneIcon>
                    <ShieldTick size={22} variant="Bold" />
                  </DuotoneIcon>
                  <div>
                    <div className="text-subtle font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
                      Active licences
                    </div>
                    <div className="text-foreground mt-0.5 text-[16px] font-semibold">
                      Fully compliant
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  {[
                    {
                      label: "Wholesale Distribution Authorisation",
                      value: SITE.licences.wda.number,
                      tone: "primary",
                    },
                    {
                      label: "Good Distribution Practice",
                      value: SITE.licences.gdp.number,
                      tone: "accent",
                    },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="border-border/60 bg-surface-1 relative overflow-hidden rounded-2xl border p-4"
                    >
                      <div
                        aria-hidden="true"
                        className={cn(
                          "absolute top-0 left-0 h-full w-1",
                          row.tone === "primary" ? "bg-primary" : "bg-accent",
                        )}
                      />
                      <div className="pl-3">
                        <div className="text-muted text-[13px] leading-snug">
                          {row.label}
                        </div>
                        <div className="text-foreground mt-1 font-mono text-[14px] font-semibold">
                          {row.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  className="group text-primary-dark mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium"
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
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const DuotoneIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative h-12 w-12 shrink-0">
      <div
        aria-hidden="true"
        className="from-primary/20 to-accent/20 absolute inset-0 rounded-xl bg-linear-to-br"
      />
      <div
        aria-hidden="true"
        className="absolute inset-[3px] rounded-[10px] bg-white"
      />
      <div className="relative flex h-full w-full items-center justify-center">
        <span className="from-primary to-accent [&_path]:stroke-primary bg-linear-to-br bg-clip-text text-transparent">
          {children}
        </span>
      </div>
    </div>
  );
};

const StatsBand: React.FC = () => {
  return (
    <section className="relative py-10 sm:py-14">
      <Container size="xl">
        <div className="relative">
          <div
            aria-hidden="true"
            className="from-primary/40 to-accent/40 absolute -right-3 -bottom-3 h-full w-full rounded-3xl bg-linear-to-br"
          />
          <div className="border-border bg-border shadow-card relative grid grid-cols-2 gap-px overflow-hidden rounded-3xl border sm:grid-cols-4">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className="relative flex flex-col gap-1 bg-white p-6 sm:p-7"
              >
                {/* Tiny corner bracket */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute top-3 right-3 h-2 w-2 rounded-full",
                    index % 2 === 0 ? "bg-primary" : "bg-accent",
                  )}
                />
                <div className="text-subtle font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="font-display text-foreground text-[32px] leading-none font-semibold tracking-tight sm:text-[40px]">
                  {stat.value}
                </div>
                <div className="text-muted text-[13px] leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

const ServicesBlock: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32">
      <Container size="xl">
        <div className="flex max-w-3xl flex-col gap-4">
          <span className="text-primary-dark inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.14em] uppercase">
            <span className="flex h-1.5 w-1.5 items-center justify-center">
              <span className="from-primary to-accent h-1.5 w-1.5 rounded-full bg-linear-to-br" />
            </span>
            Services
          </span>
          <h2 className="tracking-display text-foreground text-[32px] leading-[1.1] font-semibold sm:text-[42px]">
            Four service lines, backed by licences and logistics.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICON_MAP[service.icon] ?? Box;

            return (
              <article key={service.slug} className="group relative">
                {/* Offset block */}
                <div
                  aria-hidden="true"
                  className={cn(
                    "absolute -right-2 -bottom-2 h-full w-full rounded-3xl",
                    "duration-slow transition-transform",
                    "group-hover:-right-3 group-hover:-bottom-3",
                    index % 2 === 0 ? "bg-primary" : "bg-accent",
                  )}
                />

                <div className="border-border shadow-hint relative flex h-full flex-col gap-5 rounded-3xl border bg-white p-7">
                  <div className="flex items-center justify-between">
                    <DuotoneIcon>
                      <Icon size={22} variant="Bold" />
                    </DuotoneIcon>
                    <span className="text-subtle font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
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
                            index % 2 === 0 ? "text-primary" : "text-accent",
                          )}
                          size={14}
                          variant="Bold"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
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
    <section className="relative py-24 sm:py-28 lg:py-32">
      <Container size="xl">
        <div className="flex max-w-3xl flex-col gap-4">
          <span className="text-primary-dark inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.14em] uppercase">
            <span className="from-primary to-accent h-1.5 w-1.5 rounded-full bg-linear-to-br" />
            Products
          </span>
          <h2 className="tracking-display text-foreground text-[32px] leading-[1.1] font-semibold sm:text-[42px]">
            A broad portfolio ensuring continuous availability.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_CATEGORIES.map((category, index) => {
            const Icon = PRODUCT_ICON_MAP[category.icon] ?? Award;
            const isPrimaryTone = index % 2 === 0;

            return (
              <article key={category.slug} className="group relative">
                {/* Offset color block */}
                <div
                  aria-hidden="true"
                  className={cn(
                    "absolute -right-3 -bottom-3 h-full w-full rounded-3xl",
                    "duration-slow transition-transform",
                    "group-hover:-right-4 group-hover:-bottom-4",
                    isPrimaryTone ? "bg-primary" : "bg-accent",
                  )}
                />
                {/* Secondary offset block */}
                <div
                  aria-hidden="true"
                  className={cn(
                    "absolute -right-1.5 -bottom-1.5",
                    "h-full w-full rounded-3xl",
                    isPrimaryTone ? "bg-accent/60" : "bg-primary/60",
                  )}
                />

                <div className="border-border shadow-hint relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border bg-white p-7">
                  {/* Header with icon + counter */}
                  <div className="flex items-start justify-between">
                    <div
                      className={cn(
                        "relative h-14 w-14 overflow-hidden rounded-2xl",
                        isPrimaryTone ? "bg-primary" : "bg-accent",
                      )}
                    >
                      <div className="flex h-full w-full items-center justify-center text-white">
                        <Icon size={24} variant="Bold" />
                      </div>
                      {/* Diagonal stripe overlay */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-20"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(45deg, white 0 1px, transparent 1px 6px)",
                        }}
                      />
                    </div>

                    <span className="text-subtle font-mono text-[11px] font-semibold tracking-[0.2em] uppercase">
                      0{index + 1} / {PRODUCT_CATEGORIES.length}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
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
                </div>
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
    <section className="relative py-24 sm:py-28 lg:py-32">
      <Container size="xl">
        <div className="relative">
          {/* Double offset */}
          <div
            aria-hidden="true"
            className="bg-accent absolute -right-3 -bottom-3 h-full w-full rounded-3xl"
          />
          <div
            aria-hidden="true"
            className="bg-primary/70 absolute -right-1.5 -bottom-1.5 h-full w-full rounded-3xl"
          />

          <div className="border-border relative overflow-hidden rounded-3xl border bg-white p-10 sm:p-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
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
                  From Roche and Abbott to 3M and Mölnlycke — reliable sourcing
                  of high-quality medical devices and diagnostic solutions.
                </p>
                <div className="mt-7">
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
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    "Diagnostic test kits",
                    "Wound care",
                    "Surgical supplies",
                    "Medical consumables",
                    "Personal protective",
                    "Hospital equipment",
                  ].map((item, index) => (
                    <div key={item} className="relative">
                      <div
                        aria-hidden="true"
                        className={cn(
                          "absolute -right-1 -bottom-1",
                          "h-full w-full rounded-xl",
                          index % 2 === 0 ? "bg-primary/60" : "bg-accent/60",
                        )}
                      />
                      <div className="border-border text-foreground relative rounded-xl border bg-white p-3 text-[12px] leading-snug font-medium">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
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
    <section className="relative py-24 sm:py-28 lg:py-32">
      <Container size="xl">
        <div className="relative">
          {/* Double offset layering */}
          <div
            aria-hidden="true"
            className="from-primary to-accent absolute -right-3 -bottom-3 h-full w-full rounded-3xl bg-linear-to-br"
          />

          <div className="bg-surface-invert relative overflow-hidden rounded-3xl p-10 sm:p-14">
            {/* Mesh overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="bg-primary/25 absolute top-[-10%] -left-40 h-[500px] w-[500px] rounded-full blur-[100px]" />
              <div className="bg-accent/25 absolute -right-40 bottom-[-20%] h-[520px] w-[520px] rounded-full blur-[100px]" />
            </div>

            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="text-primary inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.14em] uppercase">
                  For qualified distributors
                </span>
                <h2 className="tracking-display mt-3 text-[32px] leading-[1.08] font-semibold text-white sm:text-[42px]">
                  Need our full{" "}
                  <span className="from-primary to-accent bg-linear-to-r bg-clip-text text-transparent">
                    product catalog
                  </span>
                  ?
                </h2>
                <p className="text-on-invert-muted mt-4 max-w-xl text-[15px] leading-relaxed">
                  The complete catalog with 200+ products, pricing, and current
                  availability is shared upon request after qualification.
                  Commercial team replies within one business day.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
                <Button
                  href="/contact?request=catalog"
                  size="lg"
                  variant="primary"
                  withArrow
                >
                  Request Full Catalog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PreviewV3Page;
