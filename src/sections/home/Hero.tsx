import { Box, Calendar, Category, Location, ShieldTick } from "iconsax-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-10 pb-4 sm:pt-14 sm:pb-7 lg:pt-16 lg:pb-8">
      <Container className="max-w-[1520px] px-0 sm:px-8 lg:px-10" size="xl">
        <div className="bg-surface-1 relative isolate overflow-hidden rounded-3xl px-6 py-16 sm:rounded-[40px] sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-7 lg:col-span-7">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 self-start">
                  <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                  <span className="text-subtle font-mono text-[11px] font-semibold tracking-[0.28em] uppercase">
                    Esna Care · Utrecht
                  </span>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.06}>
                <h1 className="tracking-display text-foreground max-w-[20ch] text-[40px] leading-[1.04] font-semibold sm:text-[52px] lg:text-[62px]">
                  EU-licensed{" "}
                  <span className="text-primary relative inline-block">
                    pharmaceutical
                    <span
                      aria-hidden="true"
                      className="bg-primary/15 absolute -inset-x-3 -top-1 -bottom-2 -z-10 rounded-xl"
                    />
                  </span>{" "}
                  <span className="text-primary">wholesaler</span> based in the
                  Netherlands.
                </h1>
              </Reveal>

              <Reveal direction="up" delay={0.12}>
                <p className="text-muted max-w-[52ch] text-[17px] leading-[1.6]">
                  {SITE.name} supplies medicines and medical devices to
                  qualified buyers — sourced through a trusted EU and
                  international supplier network, distributed under WDA and GDP
                  oversight.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.18}>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <Button href="/contact" size="lg" variant="primary" withArrow>
                    Get in Touch
                  </Button>
                  <Button href="/services" size="lg" variant="outline">
                    Our services
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:flex lg:items-center">
              <Reveal direction="up" delay={0.16}>
                <ComplianceCard />
              </Reveal>
            </div>
          </div>

          <HeroStats />
        </div>
      </Container>
    </section>
  );
};

const ComplianceCard: React.FC = () => {
  return (
    <div className="relative w-full">
      <span
        aria-hidden="true"
        className="border-primary absolute -top-3 -left-3 h-6 w-6 rounded-tl-xl border-t-2 border-l-2"
      />
      <span
        aria-hidden="true"
        className="border-primary absolute -top-3 -right-3 h-6 w-6 rounded-tr-xl border-t-2 border-r-2"
      />
      <span
        aria-hidden="true"
        className="border-accent absolute -bottom-3 -left-3 h-6 w-6 rounded-bl-xl border-b-2 border-l-2"
      />
      <span
        aria-hidden="true"
        className="border-accent absolute -right-3 -bottom-3 h-6 w-6 rounded-br-xl border-r-2 border-b-2"
      />

      <div className="border-border shadow-card relative overflow-hidden rounded-3xl border bg-white p-7">
        <div className="flex items-center gap-3">
          <div className="bg-primary inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white">
            <ShieldTick size={20} variant="Bold" />
          </div>
          <div>
            <div className="text-subtle font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
              Active licences
            </div>
            <div className="text-foreground mt-0.5 text-[15px] font-semibold">
              EU GDP &amp; WDA
            </div>
          </div>
        </div>

        <ul className="mt-6 flex flex-col gap-3.5">
          {[
            {
              label: "Wholesale Distribution Authorisation",
              value: SITE.licences.wda.number,
            },
            {
              label: "Good Distribution Practice",
              value: SITE.licences.gdp.number,
            },
          ].map((row) => (
            <li
              key={row.label}
              className="border-border/60 flex items-start justify-between gap-4 border-t pt-3.5 first:border-0 first:pt-0"
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

        <div className="text-subtle mt-5 flex items-center gap-2 text-[12px]">
          <Location
            className="text-primary shrink-0"
            size={12}
            variant="Bold"
          />
          Supervised by the IGJ (Dutch Health &amp; Youth Care Inspectorate)
        </div>
      </div>
    </div>
  );
};

const STATS = [
  { icon: Calendar, label: "Since", value: "2021", sub: "EU-licensed" },
  {
    icon: Box,
    label: "Catalog",
    value: "200+",
    sub: "pharmaceutical products",
  },
  {
    icon: Category,
    label: "Coverage",
    value: "8",
    sub: "therapeutic areas",
  },
  { icon: ShieldTick, label: "Licences", value: "2", sub: "WDA + GDP" },
] as const;

const HeroStats: React.FC = () => {
  return (
    <Reveal direction="up" delay={0.28}>
      <div className="mt-20 grid grid-cols-2 gap-y-8 sm:mt-24 sm:grid-cols-4 sm:gap-y-0">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 px-5 text-center sm:px-6"
            >
              <div className="flex items-center gap-2">
                <Icon className="text-primary" size={14} variant="Bold" />
                <span className="text-subtle font-mono text-[10px] font-semibold tracking-[0.22em] uppercase">
                  {stat.label}
                </span>
              </div>
              <div className="tracking-display text-foreground text-[34px] leading-[1.02] font-semibold sm:text-[38px] lg:text-[42px]">
                {stat.value}
              </div>
              <div className="text-muted text-[12.5px] leading-snug">
                {stat.sub}
              </div>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
};

export default Hero;
