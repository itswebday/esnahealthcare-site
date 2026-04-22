import {
  Activity,
  ArrowRight,
  Award,
  Box,
  Global,
  Heart,
  Hospital,
  TagCross,
  TickCircle,
  Truck,
} from "iconsax-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { PRODUCT_CATEGORIES, SERVICES } from "@/lib/services";

export const STATS = [
  { value: "200+", label: "Pharmaceutical products" },
  { value: "8", label: "Therapeutic areas" },
  { value: "24h", label: "Average RFQ response" },
  { value: "EEA", label: "Sourcing network" },
] as const;

export const PRODUCT_ICON_MAP = {
  branded: Award,
  generic: TagCross,
  hospital: Hospital,
  specialty: Award,
  "cold-chain": Box,
  prescription: Heart,
} as const;

export const SERVICE_ICON_MAP = {
  "pharma-wholesale": Box,
  "global-sourcing": Global,
  "international-distribution": Truck,
  "temperature-controlled": Box,
} as const;

export const StatsBand: React.FC = () => {
  return (
    <section className="bg-primary relative py-10 sm:py-12">
      <Container size="xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="relative flex flex-col gap-1 border-l border-white/20 pl-4 text-white first:border-0 first:pl-0"
            >
              <div className="font-mono text-[10px] font-semibold tracking-[0.2em] text-white/70 uppercase">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="font-display text-[32px] leading-none font-semibold tracking-tight sm:text-[40px]">
                {stat.value}
              </div>
              <div className="text-[13px] leading-snug text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export const ServicesBlock: React.FC = () => {
  return (
    <section className="bg-surface-invert-2 relative overflow-hidden py-24 sm:py-28 lg:py-32">
      {/* Decorative boxes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="border-primary/20 absolute top-[10%] left-[5%] h-20 w-20 rotate-12 rounded-xl border" />
        <div className="border-accent/20 absolute right-[8%] bottom-[20%] h-32 w-32 -rotate-6 rounded-2xl border" />
        <div className="bg-primary/10 absolute top-[18%] right-[30%] h-16 w-16 rotate-45 rounded-lg" />
      </div>

      <Container size="xl">
        <div className="flex max-w-3xl flex-col gap-4">
          <span className="text-primary inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.14em] uppercase">
            <Activity className="text-primary" size={14} variant="Bold" />
            Services
          </span>
          <h2 className="tracking-display text-[32px] leading-[1.1] font-semibold text-white sm:text-[42px]">
            Four service lines, backed by licences and logistics.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICON_MAP[service.icon] ?? Box;

            return (
              <article
                key={service.slug}
                className="group duration-slow hover:border-primary/50 hover:shadow-primary/20 relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/5 to-white/[0.02] p-7 backdrop-blur transition-all hover:shadow-xl"
              >
                {/* Glow corner */}
                <div
                  aria-hidden="true"
                  className="from-primary/30 duration-slow pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-bl-full bg-linear-to-br to-transparent opacity-60 transition-opacity group-hover:opacity-100"
                />

                <div className="relative">
                  <div className="bg-primary shadow-primary/30 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg">
                    <Icon size={26} variant="Bold" />
                  </div>
                </div>

                <div className="relative flex flex-col gap-2">
                  <div className="text-primary font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
                    Service · 0{index + 1}
                  </div>
                  <h3 className="text-[18px] leading-tight font-semibold tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="text-on-invert-muted text-[14px] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="relative mt-auto flex flex-col gap-2">
                  {service.bullets.slice(0, 2).map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-[13px] leading-snug text-white/80"
                    >
                      <TickCircle
                        className="text-primary mt-0.5 shrink-0"
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

export const ProductsBlock: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      {/* Decorative background boxes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="border-primary/20 bg-primary-subtle/40 absolute top-[18%] left-[3%] h-24 w-24 rotate-12 rounded-2xl border" />
        <div className="border-accent/30 absolute top-[30%] right-[8%] h-20 w-20 -rotate-6 rounded-xl border" />
        <div className="bg-accent-subtle absolute bottom-[10%] left-[40%] h-16 w-16 rotate-45 rounded-lg" />
      </div>

      <Container size="xl">
        <div className="flex max-w-3xl flex-col gap-4">
          <span className="text-accent inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.14em] uppercase">
            <span className="bg-accent h-1.5 w-1.5 rounded-full" />
            Products
          </span>
          <h2 className="tracking-display text-foreground text-[32px] leading-[1.1] font-semibold sm:text-[42px]">
            Supplying branded, generic, and specialty medicines worldwide.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_CATEGORIES.map((category, index) => {
            const Icon = PRODUCT_ICON_MAP[category.icon] ?? Award;
            const isEven = index % 2 === 0;

            return (
              <article
                key={category.slug}
                className="group border-border duration-slow hover:border-primary/40 hover:shadow-primary/10 relative flex flex-col gap-5 overflow-hidden rounded-3xl border bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Corner block */}
                <div
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute top-0 right-0",
                    "h-20 w-20 rounded-bl-3xl",
                    isEven
                      ? "from-primary to-primary-dark bg-linear-to-br"
                      : "from-accent to-accent-dark bg-linear-to-br",
                  )}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-5 right-5 text-white/90"
                >
                  <Icon size={22} variant="Bold" />
                </div>

                <div className="relative mt-14 flex flex-col gap-2">
                  <div className="text-subtle font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
                    Category · 0{index + 1}
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

type MedicalDevicesTeaserProps = {
  ctaButton: React.ReactNode;
};

export const MedicalDevicesTeaser: React.FC<MedicalDevicesTeaserProps> = ({
  ctaButton,
}) => {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32">
      <Container size="xl">
        <div className="bg-surface-invert relative overflow-hidden rounded-3xl p-10 sm:p-14">
          {/* Decorative boxes */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="bg-primary/20 absolute top-[-4rem] left-[-4rem] h-56 w-56 rotate-12 rounded-3xl blur-xl" />
            <div className="bg-accent/20 absolute right-[-3rem] bottom-[-3rem] h-48 w-48 -rotate-6 rounded-3xl blur-xl" />
            <div className="border-primary/40 absolute top-[20%] right-[12%] h-16 w-16 rotate-45 rounded-xl border" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="text-primary inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.14em] uppercase">
                <span className="bg-primary h-px w-6" />
                Beyond pharmaceuticals
              </span>
              <h2 className="tracking-display mt-4 text-[28px] leading-[1.15] font-semibold text-white sm:text-[36px]">
                Medical devices & diagnostics — curated through our global
                partner network.
              </h2>
              <p className="text-on-invert-muted mt-4 max-w-xl text-[15px] leading-relaxed">
                From Roche and Abbott to 3M and Mölnlycke — reliable sourcing of
                high-quality medical devices and diagnostic solutions.
              </p>
              <div className="mt-7">{ctaButton}</div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Diagnostic test kits", tone: "primary" },
                  { label: "Wound care", tone: "accent" },
                  { label: "Surgical supplies", tone: "glass" },
                  { label: "Medical consumables", tone: "accent" },
                  { label: "Personal protective", tone: "glass" },
                  { label: "Hospital equipment", tone: "primary" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={cn(
                      "rounded-2xl p-4",
                      "text-[12px] leading-snug font-medium",
                      item.tone === "primary"
                        ? "bg-primary text-white"
                        : item.tone === "accent"
                          ? "bg-accent text-white"
                          : "bg-white/10 text-white ring-1 ring-white/20 backdrop-blur",
                    )}
                  >
                    {item.label}
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

type CatalogCtaProps = {
  ctaButtons: React.ReactNode;
};

export const CatalogCta: React.FC<CatalogCtaProps> = ({ ctaButtons }) => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="bg-primary pointer-events-none absolute inset-0 -z-10"
      />
      {/* Decorative rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 -z-10 h-[500px] w-[500px] rounded-full border-[40px] border-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-8rem] -left-20 -z-10 h-[360px] w-[360px] rounded-full border-[32px] border-white/10"
      />

      <Container size="xl">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[12px] font-medium tracking-[0.14em] text-white uppercase backdrop-blur">
            For qualified distributors
          </span>
          <h2 className="tracking-display max-w-3xl text-[36px] leading-[1.05] font-semibold text-white sm:text-[48px]">
            Need our full product catalog?
          </h2>
          <p className="max-w-xl text-[15px] leading-relaxed text-white/85">
            The complete catalog with 200+ products, pricing, and current
            availability is shared upon request after qualification.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            {ctaButtons}
          </div>
        </div>
      </Container>
    </section>
  );
};
