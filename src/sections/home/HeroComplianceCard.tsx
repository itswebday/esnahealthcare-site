"use client";

import { ShieldTick, Verify, TickCircle, Scan } from "iconsax-react";
import { motion } from "motion/react";
import { SITE } from "@/lib/site";

/*
 * The visual anchor that sits on the right of the Hero on large screens.
 * Styled as a "live compliance certificate" preview — the data IS the story.
 */

export function HeroComplianceCard() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      {/* Floating verification chip, offset top-right */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -top-5 -right-2 z-10 inline-flex h-9 items-center gap-2 rounded-full bg-white px-3.5 text-[0.78rem] font-medium leading-none shadow-[var(--shadow-lift)]"
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]" />
        </span>
        <span className="font-mono uppercase leading-none tracking-[0.12em] text-[var(--color-primary-dark)]">
          Live · EudraGMDP
        </span>
      </motion.div>

      {/* The card */}
      <motion.div
        initial={{ opacity: 0, y: 24, rotateZ: 0.4 }}
        animate={{ opacity: 1, y: 0, rotateZ: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-float)]"
      >
        {/* Header ribbon */}
        <div className="relative flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface-1)] px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[var(--shadow-sm)]">
              <ShieldTick
                size={16}
                variant="Linear"
                className="text-[var(--color-primary-dark)]"
              />
            </div>
            <div>
              <div className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                Certified pharmaceutical wholesaler
              </div>
              <div className="font-mono text-[0.76rem] font-medium text-[var(--color-foreground)]">
                ESNA CARE B.V. · NL
              </div>
            </div>
          </div>
          <span className="inline-flex h-6 items-center gap-1.5 rounded-full bg-[var(--color-primary-subtle)] px-2.5 text-[0.7rem] font-medium leading-none text-[var(--color-primary-dark)]">
            <TickCircle size={12} variant="Bold" className="shrink-0" />
            Active
          </span>
        </div>

        {/* WDA row */}
        <div className="border-b border-[var(--color-border)] px-6 py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                WDA · Wholesale Distribution Authorisation
              </div>
              <div className="mt-1.5 font-mono text-[1.15rem] font-semibold tracking-tight text-[var(--color-foreground)]">
                No. {SITE.licences.wda.number}
              </div>
              <div className="mt-0.5 text-[0.78rem] text-[var(--color-muted)]">
                Issued {SITE.licences.wda.issuedOn} · {SITE.licences.wda.issuer}
              </div>
            </div>
            <ShieldTick
              size={22}
              variant="Linear"
              className="shrink-0 text-[var(--color-primary)]"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {["Procurement", "Supply", "Export", "Cold-chain"].map((scope, i) => (
              <motion.span
                key={scope}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-flex h-6 items-center gap-1 rounded-full bg-[var(--color-surface-1)] px-2.5 font-mono text-[0.7rem] font-medium leading-none tracking-tight text-[var(--color-foreground)] ring-1 ring-inset ring-[var(--color-border)]"
              >
                <TickCircle
                  size={10}
                  variant="Bold"
                  className="shrink-0 text-[var(--color-primary)]"
                />
                {scope}
              </motion.span>
            ))}
          </div>
        </div>

        {/* GDP row */}
        <div className="px-6 py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                GDP · Good Distribution Practice
              </div>
              <div className="mt-1.5 font-mono text-[1.15rem] font-semibold tracking-tight text-[var(--color-foreground)]">
                {SITE.licences.gdp.number}
              </div>
              <div className="mt-0.5 text-[0.78rem] text-[var(--color-muted)]">
                Issued {SITE.licences.gdp.issuedOn} · IGJ
              </div>
            </div>
            <Verify
              size={22}
              variant="Linear"
              className="shrink-0 text-[var(--color-accent)]"
            />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[0.78rem]">
            {[
              "2–8 °C cold-chain",
              "15–25 °C controlled ambient",
              "Continuous monitoring",
              "Documented QMS",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-[var(--color-muted)]"
              >
                <TickCircle
                  size={12}
                  variant="Bold"
                  className="shrink-0 text-[var(--color-accent)]"
                />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Footer strip */}
        <div className="flex items-center justify-between border-t border-[var(--color-border)] bg-[var(--color-surface-1)] px-6 py-3.5">
          <div className="flex items-center gap-2 text-[0.7rem] font-mono uppercase tracking-[0.14em] text-[var(--color-subtle)]">
            <Scan size={14} variant="Linear" />
            Verifiable · EudraGMDP register
          </div>
          <div className="flex h-6 items-center gap-0.5 font-mono text-[0.68rem] text-[var(--color-faint)]">
            {/* Fake QR pattern */}
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="block w-[3px]"
                style={{
                  height: [6, 10, 14, 8, 12, 10, 14, 6, 10, 12, 8, 14][i],
                  background: "currentColor",
                  opacity: 0.5,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating stat card, bottom-left overlap */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-5 -left-4 hidden w-[200px] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-lift)] sm:block"
      >
        <div className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
          Therapeutic coverage
        </div>
        <div className="mt-1 font-mono text-[1.4rem] font-semibold tracking-tight text-[var(--color-foreground)]">
          200<span className="text-[var(--color-primary)]">+</span>
        </div>
        <div className="text-[0.78rem] text-[var(--color-muted)]">
          products across 8 therapeutic areas
        </div>
      </motion.div>
    </div>
  );
}
