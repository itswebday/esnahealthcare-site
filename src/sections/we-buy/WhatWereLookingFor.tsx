import Link from "next/link";
import {
  ArrowRight,
  Box,
  Clock,
  DocumentText,
  TickCircle,
} from "iconsax-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

const CRITERIA = [
  "EU-sourced stock with traceable provenance",
  "Full regulatory and batch documentation",
  "Remaining shelf life appropriate to the product family",
  "Clear storage history — cold-chain or controlled ambient",
  "Authentic primary and secondary packaging, unopened",
  "Batch numbers and manufacturer details documented",
];

const WELCOME = [
  { icon: Box, label: "Cold-chain products (2–8 °C)" },
  { icon: Clock, label: "Short-dated short-cycle stock" },
  { icon: DocumentText, label: "Specialty & orphan treatments" },
  { icon: TickCircle, label: "Branded & generic medicines" },
];

const WhatWereLookingFor: React.FC = () => {
  return (
    <section className="bg-surface-1 relative overflow-hidden rounded-[48px] py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <WhatWereLookingForBackdrop />

        <Reveal direction="up">
          <SectionHeader
            description="A clear picture of what typically passes our qualification bar — so suppliers know whether it's worth submitting before doing the paperwork."
            eyebrow="What we're looking for"
            size="md"
            title="Stock we can qualify, documented to GDP."
          />
        </Reveal>

        <div className="relative mt-14 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.08} direction="up">
            <div className="border-border shadow-hint relative overflow-hidden rounded-3xl border bg-white p-8">
              <span
                aria-hidden="true"
                className="from-primary to-primary-dark pointer-events-none absolute top-0 right-0 h-20 w-20 rounded-bl-3xl bg-linear-to-br"
              />
              <div className="relative mt-10">
                <h3 className="text-foreground text-[18px] font-semibold tracking-tight">
                  Qualification criteria
                </h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {CRITERIA.map((c) => (
                    <li
                      key={c}
                      className="text-foreground flex items-start gap-2.5 text-[14px] leading-snug"
                    >
                      <TickCircle
                        className="text-primary mt-0.5 shrink-0"
                        size={18}
                        variant="Bold"
                      />
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="border-border bg-surface-1 text-muted mt-6 flex items-start gap-3 rounded-2xl border p-4 text-[13px]">
                  <DocumentText
                    className="text-accent mt-0.5 shrink-0"
                    size={18}
                    variant="Bold"
                  />
                  <p>
                    All suppliers are qualified against our{" "}
                    <Link
                      className="text-accent hover:text-accent-hover font-medium underline underline-offset-2 transition-colors"
                      href={SITE.qualificationSops[0].href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Supplier Qualification SOP
                    </Link>{" "}
                    before the first transaction.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.16} direction="up">
            <div className="border-border shadow-hint relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border bg-white p-8">
              <span
                aria-hidden="true"
                className="from-accent to-accent-dark pointer-events-none absolute top-0 right-0 h-20 w-20 rounded-bl-3xl bg-linear-to-br"
              />
              <h3 className="text-foreground mt-10 text-[18px] font-semibold tracking-tight">
                Especially welcome
              </h3>
              <ul className="flex flex-col gap-2.5">
                {WELCOME.map((w, idx) => {
                  const Icon = w.icon;
                  const isPrimary = idx % 2 === 0;
                  return (
                    <li
                      key={w.label}
                      className="bg-surface-1 text-foreground flex items-center gap-3 rounded-2xl px-4 py-3 text-[14px] font-medium"
                    >
                      <span
                        className={cn(
                          "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ring-1",
                          isPrimary
                            ? "bg-primary/15 text-primary ring-primary/30"
                            : "bg-accent/20 text-accent ring-accent/40",
                        )}
                      >
                        <Icon size={16} variant="Bold" />
                      </span>
                      {w.label}
                    </li>
                  );
                })}
              </ul>
              <Link
                className="group text-primary-dark hover:text-primary-hover mt-auto inline-flex items-center gap-2 text-[15px] font-medium transition-colors"
                href="#offer-form"
              >
                Submit your offer
                <ArrowRight
                  className="duration-normal transition-transform group-hover:translate-x-0.5"
                  size={16}
                  variant="Linear"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

const WhatWereLookingForBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-primary/10 absolute top-[20%] right-[-10%] h-[420px] w-[420px] rounded-full blur-[110px]" />
      <div className="bg-accent/10 absolute bottom-[10%] left-[-10%] h-[380px] w-[380px] rounded-full blur-[110px]" />
    </div>
  );
};

export default WhatWereLookingFor;
