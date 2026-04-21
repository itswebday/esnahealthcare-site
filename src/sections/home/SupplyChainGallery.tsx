import {
  Box,
  Truck,
  CloudSnow,
  ShieldTick,
  Location,
  TickCircle,
  Scan,
} from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

/*
 * Capability bento. Each tile is a different visual treatment so the section
 * isn't a stack of identical cards. The brief's "From Our Supply Chain" photo
 * gallery is deferred until production photography arrives (brief §9).
 */

export function SupplyChainGallery() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="Inside the operation"
            title="Where compliance meets logistics."
            description="The documented, monitored, and qualified facilities that sit behind every shipment — from intake to dispatch to export."
            size="lg"
          />
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <div className="mt-14 grid gap-4 lg:grid-cols-6 lg:grid-rows-2">
            {/* Large hero tile — warehousing */}
            <WarehouseTile />
            {/* Cold-chain */}
            <ColdChainTile />
            {/* Export */}
            <ExportTile />
            {/* Ambient */}
            <AmbientTile />
            {/* Office */}
            <OfficeTile />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function WarehouseTile() {
  return (
    <div className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-invert-strong)] bg-[var(--color-surface-invert)] p-8 text-[var(--color-on-invert)] lg:col-span-6 lg:row-span-2 lg:p-10">
      {/* Europe-net SVG (solid nodes, no gradient halos) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-2/3 opacity-[0.45]"
        viewBox="0 0 600 420"
        preserveAspectRatio="xMidYMid meet"
      >
        {[
          [100, 140, 3, 0.45],
          [180, 100, 4, 0.8],
          [220, 170, 2.5, 0.4],
          [260, 130, 3.5, 0.65],
          [300, 180, 3, 0.5],
          [340, 110, 3, 0.55],
          [380, 160, 4, 0.8],
          [420, 200, 2.5, 0.4],
          [460, 140, 3, 0.55],
          [500, 170, 3, 0.5],
          [150, 220, 2.5, 0.35],
          [250, 250, 3, 0.5],
          [320, 230, 2.5, 0.4],
          [400, 250, 2.5, 0.35],
          [480, 220, 3, 0.5],
          [200, 280, 2.5, 0.35],
          [280, 300, 3, 0.5],
          [360, 290, 2.5, 0.4],
          [440, 300, 2.5, 0.35],
        ].map(([x, y, r, dim], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={r}
            fill="#9BD33C"
            fillOpacity={dim}
          />
        ))}
        {/* Connecting lines */}
        <g stroke="#9BD33C" strokeOpacity="0.22" strokeWidth="0.75" fill="none">
          <path d="M 180 100 L 260 130 L 340 110 L 420 200 L 500 170" />
          <path d="M 100 140 L 220 170 L 300 180 L 380 160 L 460 140" />
          <path d="M 180 100 L 200 280 L 360 290 L 440 300" />
          <path d="M 220 170 L 280 300 L 400 250" />
        </g>
      </svg>

      {/* Content */}
      <div className="relative z-10 flex items-start justify-between">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-white/10 text-white backdrop-blur">
          <Box size={22} variant="Linear" />
        </div>
        <span className="inline-flex h-7 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 font-mono text-[0.72rem] uppercase leading-none tracking-[0.14em] text-white/80 backdrop-blur">
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
          </span>
          GDP · Qualified
        </span>
      </div>

      <div className="relative z-10 max-w-lg">
        <div className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-on-invert-muted)]">
          Warehousing partner · Nieuw-Vennep, NL
        </div>
        <h3 className="mt-3 text-[1.75rem] font-semibold tracking-[-0.018em] text-white sm:text-[2rem]">
          A qualified, IGJ-aware warehouse operation.
        </h3>
        <p className="mt-3 max-w-md text-[1rem] leading-relaxed text-[var(--color-on-invert-muted)]">
          Validated cold-chain and controlled-ambient zones, continuous temperature
          monitoring, and documented deviation handling — operated in line with EU
          GDP Guidelines.
        </p>
        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[0.85rem] text-white/80">
          {[
            "Continuous monitoring",
            "Validated excursion tolerances",
            "CAPA workflow",
            "Annual requalification",
          ].map((item) => (
            <li key={item} className="inline-flex items-center gap-1.5">
              <TickCircle
                size={14}
                variant="Bold"
                className="text-[var(--color-primary)]"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ColdChainTile() {
  return (
    <div className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-primary-subtle-strong)] bg-[var(--color-primary-subtle)] p-6 lg:col-span-3">
      <div className="relative flex items-start justify-between">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-white text-[var(--color-primary-dark)] shadow-[var(--shadow-sm)]">
          <CloudSnow size={22} variant="Linear" />
        </div>
        {/* Temperature gauge */}
        <div className="inline-flex h-7 items-center gap-2 rounded-full border border-[var(--color-primary-subtle-strong)] bg-white/70 px-2.5 leading-none backdrop-blur-sm">
          <span className="font-mono text-[0.78rem] font-semibold leading-none text-[var(--color-primary-dark)]">
            4.2°C
          </span>
          <TickCircle
            size={12}
            variant="Bold"
            className="shrink-0 text-[var(--color-primary)]"
          />
        </div>
      </div>
      <div className="relative">
        <div className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
          Cold-chain
        </div>
        <h3 className="mt-1 text-[1.35rem] font-semibold tracking-[-0.015em] text-[var(--color-foreground)]">
          2–8 °C validated lanes
        </h3>
        <p className="mt-2 text-[0.88rem] leading-relaxed text-[var(--color-muted)]">
          Biologics and thermolabile products — monitored end-to-end from intake to
          delivery.
        </p>
      </div>
    </div>
  );
}

function ExportTile() {
  return (
    <div className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-accent-subtle-strong)] bg-[var(--color-accent-subtle)] p-6 lg:col-span-3">
      {/* Route arrow */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 400 260"
        preserveAspectRatio="none"
      >
        <path
          d="M -20 140 Q 80 60 180 140 T 420 140"
          fill="none"
          stroke="#0D4F8C"
          strokeOpacity="0.18"
          strokeWidth="2"
          strokeDasharray="4 6"
        />
        <circle cx="180" cy="140" r="3.5" fill="#0D4F8C" opacity="0.5" />
        <circle cx="340" cy="138" r="3.5" fill="#0D4F8C" opacity="0.3" />
      </svg>
      <div className="relative flex items-start justify-between">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-white text-[var(--color-accent)] shadow-[var(--shadow-sm)]">
          <Truck size={22} variant="Linear" />
        </div>
        <span className="inline-flex h-6 items-center gap-1 rounded-full bg-white px-2.5 font-mono text-[0.68rem] font-medium leading-none text-[var(--color-accent)] ring-1 ring-inset ring-[var(--color-accent-subtle-strong)]">
          <Scan size={11} variant="Linear" className="shrink-0" />
          Export ready
        </span>
      </div>
      <div className="relative">
        <div className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
          International distribution
        </div>
        <h3 className="mt-1 text-[1.35rem] font-semibold tracking-[-0.015em] text-[var(--color-foreground)]">
          Export to EEA &amp; beyond
        </h3>
        <p className="mt-2 text-[0.88rem] leading-relaxed text-[var(--color-muted)]">
          WDA-authorised export with full customs documentation and temperature
          assurance in transit.
        </p>
      </div>
    </div>
  );
}

function AmbientTile() {
  return (
    <div className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-6 lg:col-span-3">
      {/* Horizontal gauge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-6 right-6 h-[2px] rounded-full bg-[var(--color-border)]"
      >
        <div className="absolute inset-y-0 left-[15%] right-[25%] rounded-full bg-[var(--color-primary)]" />
        <div className="absolute -top-1.5 left-[15%] h-[10px] w-px bg-[var(--color-primary)]" />
        <div className="absolute -top-1.5 right-[25%] h-[10px] w-px bg-[var(--color-accent)]" />
      </div>
      <div className="relative flex items-start justify-between">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary-subtle)] text-[var(--color-primary-dark)]">
          <ShieldTick size={22} variant="Linear" />
        </div>
        <span className="font-mono text-[0.75rem] font-semibold text-[var(--color-foreground)]">
          15–25 °C
        </span>
      </div>
      <div className="relative pb-6">
        <div className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
          Controlled ambient
        </div>
        <h3 className="mt-1 text-[1.35rem] font-semibold tracking-[-0.015em] text-[var(--color-foreground)]">
          Room-temperature lanes
        </h3>
        <p className="mt-2 text-[0.88rem] leading-relaxed text-[var(--color-muted)]">
          Validated storage conditions for the broader product portfolio, continuously
          logged.
        </p>
      </div>
    </div>
  );
}

function OfficeTile() {
  return (
    <div className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-1)] p-6 lg:col-span-3">
      {/* Map pin treatment */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -bottom-10 flex h-48 w-48 items-center justify-center"
      >
        <div className="absolute h-24 w-24 rounded-full border border-[var(--color-primary)] opacity-20" />
        <div className="absolute h-36 w-36 rounded-full border border-[var(--color-primary)] opacity-[0.12]" />
        <div className="absolute h-48 w-48 rounded-full border border-[var(--color-primary)] opacity-[0.07]" />
        <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-[var(--shadow-cta)]">
          <Location size={18} variant="Bold" />
        </div>
      </div>
      <div className="relative flex items-start justify-between">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-white text-[var(--color-foreground)]">
          <Location size={22} variant="Linear" />
        </div>
      </div>
      <div className="relative max-w-[60%]">
        <div className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
          Head office
        </div>
        <h3 className="mt-1 text-[1.35rem] font-semibold tracking-[-0.015em] text-[var(--color-foreground)]">
          Utrecht &middot; Netherlands
        </h3>
        <p className="mt-2 text-[0.88rem] leading-relaxed text-[var(--color-muted)]">
          Commercial &amp; quality operations — where RFQs are answered and
          qualifications are run.
        </p>
      </div>
    </div>
  );
}
