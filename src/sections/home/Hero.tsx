import { Calendar, Drop, Location, ShieldTick, Verify } from "iconsax-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-10 pb-4 sm:pt-14 sm:pb-7 lg:pt-16 lg:pb-8">
      <Container className="max-w-[1520px] px-0 sm:px-8 lg:px-10" size="xl">
        <div className="bg-surface-1 relative isolate overflow-hidden rounded-3xl px-6 py-16 sm:rounded-[40px] sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          <HeroBackgroundImage />
          <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
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
                <h1 className="text-foreground max-w-[40ch] text-[22px] leading-[1.3] font-semibold tracking-tight sm:text-[26px] lg:text-[30px]">
                  EU-licensed pharmaceutical wholesaler based in the Netherlands
                  — supplying medicines and medical devices to qualified buyers.
                </h1>
              </Reveal>

              <Reveal direction="up" delay={0.12}>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <Button href="/contact" size="lg" variant="primary" hasArrow>
                    Get in Touch
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

const HeroBackgroundImage: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-0 bottom-0 h-[55%] w-full overflow-hidden lg:inset-y-0 lg:left-auto lg:h-full lg:w-[55%]"
    >
      <Image
        alt=""
        src="/images/hero-medical.webp"
        fill
        priority
        sizes="(min-width: 1024px) 55vw, 100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="from-surface-1 absolute inset-x-0 top-0 h-1/2 bg-linear-to-b to-transparent lg:hidden"
      />
      <div
        aria-hidden="true"
        className="from-surface-1 absolute inset-0 hidden bg-linear-to-r via-transparent to-transparent lg:block"
      />
    </div>
  );
};

const ComplianceCard: React.FC = () => {
  return (
    <div className="border-border shadow-card relative w-full overflow-hidden rounded-3xl border bg-white p-7">
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
        <Location className="text-primary shrink-0" size={12} variant="Bold" />
        Supervised by the IGJ (Dutch Health &amp; Youth Care Inspectorate)
      </div>
    </div>
  );
};

type HeroCard = {
  icon: typeof Calendar;
  label: string;
  value: string;
};

const HERO_CARDS: HeroCard[] = [
  {
    icon: Calendar,
    label: "EU-licensed",
    value: "Since 2021",
  },
  {
    icon: Verify,
    label: "GDP-compliant",
    value: "Storage & transportation",
  },
  {
    icon: Drop,
    label: "Temperature-controlled",
    value: "2–8 °C  ·  15–25 °C",
  },
];

const HeroStats: React.FC = () => {
  return (
    <Reveal direction="up" delay={0.28}>
      <div className="border-border shadow-card relative mt-20 overflow-hidden rounded-2xl border bg-white sm:mt-24">
        <div className="divide-border grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {HERO_CARDS.map((card, idx) => {
            const Icon = card.icon;
            const isAccent = idx === 2;
            const chipClass = isAccent
              ? "bg-accent-subtle text-accent ring-accent/30"
              : "bg-primary-subtle text-primary-dark ring-primary/30";
            return (
              <div
                key={card.label}
                className="flex items-center gap-4 p-5 sm:p-6"
              >
                <span
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1",
                    chipClass,
                  )}
                >
                  <Icon size={20} variant="Bold" />
                </span>
                <div className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-subtle font-mono text-[10px] font-semibold tracking-[0.18em] uppercase">
                    {card.label}
                  </span>
                  <span className="text-foreground text-[15px] leading-snug font-semibold">
                    {card.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
};

export default Hero;
