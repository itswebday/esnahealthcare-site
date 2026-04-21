import Link from "next/link";
import {
  TickCircle,
  DocumentText,
  Box,
  Clock,
  ArrowRight,
} from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
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

export function WhatWereLookingFor() {
  return (
    <section className="bg-[var(--color-surface-1)] py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="What we're looking for"
            title="Stock we can qualify, documented to GDP."
            description="A clear picture of what typically passes our qualification bar — so suppliers know whether it's worth submitting before doing the paperwork."
            size="md"
          />
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          <Reveal direction="up" delay={0.08} className="lg:col-span-7">
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-8">
              <h3 className="text-[1.1rem] font-semibold tracking-[-0.012em] text-[var(--color-foreground)]">
                Qualification criteria
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {CRITERIA.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2.5 text-[0.95rem] leading-snug text-[var(--color-foreground)]"
                  >
                    <TickCircle
                      size={18}
                      variant="Bold"
                      className="mt-0.5 shrink-0 text-[var(--color-primary)]"
                    />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-1)] p-4 text-[0.88rem] text-[var(--color-muted)]">
                <DocumentText
                  size={18}
                  variant="Linear"
                  className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                />
                <p>
                  All suppliers are qualified against our{" "}
                  <Link
                    href={SITE.qualificationSops[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--color-accent)] underline underline-offset-2 hover:text-[var(--color-accent-hover)]"
                  >
                    Supplier Qualification SOP
                  </Link>{" "}
                  before the first transaction.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.16} className="lg:col-span-5">
            <div className="flex h-full flex-col gap-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-8">
              <h3 className="text-[1.1rem] font-semibold tracking-[-0.012em] text-[var(--color-foreground)]">
                Especially welcome
              </h3>
              <ul className="flex flex-col gap-2.5">
                {WELCOME.map((w) => {
                  const Icon = w.icon;
                  return (
                    <li
                      key={w.label}
                      className="flex items-center gap-3 rounded-[var(--radius-md)] bg-[var(--color-primary-subtle)] px-4 py-3 text-[0.95rem] font-medium text-[var(--color-foreground)]"
                    >
                      <Icon
                        size={18}
                        variant="Linear"
                        className="text-[var(--color-primary-dark)]"
                      />
                      {w.label}
                    </li>
                  );
                })}
              </ul>
              <Link
                href="#offer-form"
                className="group mt-auto inline-flex items-center gap-2 text-[0.95rem] font-medium text-[var(--color-primary-dark)] hover:text-[var(--color-primary-hover)]"
              >
                Submit your offer
                <ArrowRight
                  size={16}
                  variant="Linear"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
