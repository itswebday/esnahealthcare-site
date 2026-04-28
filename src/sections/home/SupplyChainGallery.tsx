import {
  Box,
  CloudSnow,
  Location,
  Scan,
  ShieldTick,
  TickCircle,
  Truck,
} from "iconsax-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

/*
 * Capability bento. Each tile is a different visual treatment so the section
 * isn't a stack of identical cards. Now wrapped in the V5 backdrop (corner
 * brackets + floating outlined boxes + soft radial glows).
 */

const SupplyChainGallery: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <Reveal direction="up">
          <div className="flex max-w-3xl flex-col gap-5">
            <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex w-fit items-center gap-2 rounded-xl border px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
              <span className="bg-primary h-1.5 w-1.5 rounded-full" />
              Inside the operation
            </span>
            <h2 className="tracking-display text-foreground text-[32px] leading-[1.1] font-semibold sm:text-[42px] lg:text-[48px]">
              Where compliance meets logistics.
            </h2>
            <p className="text-muted max-w-2xl text-[16px] leading-relaxed">
              The documented, monitored, and qualified facilities that sit
              behind every shipment — from intake to dispatch to export.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} direction="up">
          <div className="mt-14 grid gap-4 lg:grid-cols-6 lg:grid-rows-2">
            <WarehouseTile />
            <ColdChainTile />
            <ExportTile />
            <AmbientTile />
            <OfficeTile />
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

const WarehouseTile: React.FC = () => {
  return (
    <div className="group bg-surface-invert text-on-invert relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl p-8 lg:col-span-6 lg:row-span-2 lg:p-10">
      <div
        aria-hidden="true"
        className="bg-primary/30 pointer-events-none absolute -top-24 -left-20 hidden h-[360px] w-[360px] rounded-full blur-3xl sm:block"
      />
      <div
        aria-hidden="true"
        className="bg-accent/30 pointer-events-none absolute -right-28 -bottom-28 hidden h-[400px] w-[400px] rounded-full blur-3xl sm:block"
      />

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 hidden h-full w-2/3 opacity-[0.35] sm:block"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 600 420"
      >
        <defs>
          <radialGradient cx="50%" cy="50%" id="node-grad" r="50%">
            <stop offset="0%" stopColor="#2e8b35" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2e8b35" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[
          [100, 140, 4, 0.6],
          [180, 100, 6, 1],
          [220, 170, 3, 0.5],
          [260, 130, 5, 0.8],
          [300, 180, 4, 0.6],
          [340, 110, 4, 0.7],
          [380, 160, 6, 1],
          [420, 200, 3, 0.5],
          [460, 140, 4, 0.7],
          [500, 170, 4, 0.6],
          [150, 220, 3, 0.4],
          [250, 250, 4, 0.6],
          [320, 230, 3, 0.5],
          [400, 250, 3, 0.4],
          [480, 220, 4, 0.6],
          [200, 280, 3, 0.4],
          [280, 300, 4, 0.6],
          [360, 290, 3, 0.5],
          [440, 300, 3, 0.4],
        ].map(([x, y, r, dim], i) => (
          <g key={i}>
            <circle cx={x} cy={y} fill="#2e8b35" fillOpacity={dim} r={r} />
            <circle cx={x} cy={y} fill="url(#node-grad)" r={Number(r) + 6} />
          </g>
        ))}
        <g fill="none" stroke="#2e8b35" strokeOpacity="0.18" strokeWidth="0.75">
          <path d="M 180 100 L 260 130 L 340 110 L 420 200 L 500 170" />
          <path d="M 100 140 L 220 170 L 300 180 L 380 160 L 460 140" />
          <path d="M 180 100 L 200 280 L 360 290 L 440 300" />
          <path d="M 220 170 L 280 300 L 400 250" />
        </g>
      </svg>

      <div className="relative z-10 flex items-start justify-between">
        <div className="bg-primary shadow-primary/30 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg">
          <Box size={26} variant="Bold" />
        </div>
        <span className="inline-flex h-7 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3 font-mono text-[11px] leading-none tracking-[0.14em] text-white/80 uppercase backdrop-blur">
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="bg-primary absolute inline-flex h-full w-full rounded-full opacity-70 sm:animate-ping" />
            <span className="bg-primary relative inline-flex h-1.5 w-1.5 rounded-full" />
          </span>
          GDP · Qualified
        </span>
      </div>

      <div className="relative z-10 max-w-lg">
        <div className="text-on-invert-muted font-mono text-[11px] font-semibold tracking-[0.18em] uppercase">
          Warehousing partner · Nieuw-Vennep, NL
        </div>
        <h3 className="mt-3 text-[28px] leading-tight font-semibold tracking-tight text-white sm:text-[32px]">
          A qualified, IGJ-aware warehouse operation.
        </h3>
        <p className="text-on-invert-muted mt-3 max-w-md text-[16px] leading-relaxed">
          Validated cold-chain and controlled-ambient zones, continuous
          temperature monitoring, and documented deviation handling — operated
          in line with EU GDP Guidelines.
        </p>
        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-white/80">
          {[
            "Continuous monitoring",
            "Validated excursion tolerances",
            "CAPA workflow",
            "Annual requalification",
          ].map((item) => (
            <li key={item} className="inline-flex items-center gap-1.5">
              <TickCircle className="text-primary" size={14} variant="Bold" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ColdChainTile: React.FC = () => {
  return (
    <div className="group duration-slow border-border shadow-hint hover:border-primary/40 hover:shadow-primary/10 relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border bg-white p-6 transition-all hover:shadow-lg lg:col-span-3">
      <span
        aria-hidden="true"
        className="from-primary to-primary-dark pointer-events-none absolute top-0 right-0 h-20 w-20 rounded-bl-3xl bg-linear-to-br"
      />
      <div className="relative flex items-start justify-between">
        <div className="bg-primary shadow-primary/30 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg">
          <CloudSnow size={22} variant="Bold" />
        </div>
        <div className="border-primary/30 bg-primary-subtle mt-1 inline-flex h-7 items-center gap-2 rounded-xl border px-2.5 leading-none">
          <span className="text-primary-dark font-mono text-[12px] leading-none font-semibold">
            4.2°C
          </span>
          <TickCircle
            className="text-primary shrink-0"
            size={12}
            variant="Bold"
          />
        </div>
      </div>
      <div className="relative mt-10">
        <div className="text-primary-dark font-mono text-[10px] font-semibold tracking-[0.18em] uppercase">
          Cold-chain
        </div>
        <h3 className="text-foreground mt-1 text-[20px] leading-tight font-semibold tracking-tight">
          2–8 °C validated lanes
        </h3>
        <p className="text-muted mt-2 text-[13px] leading-relaxed">
          Biologics and thermolabile products — monitored end-to-end from intake
          to delivery.
        </p>
      </div>
    </div>
  );
};

const ExportTile: React.FC = () => {
  return (
    <div className="group duration-slow border-border shadow-hint hover:border-accent/40 hover:shadow-accent/10 relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border bg-white p-6 transition-all hover:shadow-lg lg:col-span-3">
      <span
        aria-hidden="true"
        className="from-accent to-accent-dark pointer-events-none absolute top-0 right-0 h-20 w-20 rounded-bl-3xl bg-linear-to-br"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
        preserveAspectRatio="none"
        viewBox="0 0 400 260"
      >
        <path
          d="M -20 140 Q 80 60 180 140 T 420 140"
          fill="none"
          stroke="#0057d9"
          strokeDasharray="4 6"
          strokeOpacity="0.18"
          strokeWidth="2"
        />
        <circle cx="180" cy="140" fill="#0057d9" opacity="0.5" r="3.5" />
        <circle cx="340" cy="138" fill="#0057d9" opacity="0.3" r="3.5" />
      </svg>
      <div className="relative flex items-start justify-between">
        <div className="bg-accent shadow-accent/30 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg">
          <Truck size={22} variant="Bold" />
        </div>
        <span className="border-accent/30 bg-accent-subtle text-accent inline-flex h-6 items-center gap-1 rounded-lg border px-2.5 font-mono text-[10px] leading-none font-semibold">
          <Scan className="shrink-0" size={11} variant="Linear" />
          Export ready
        </span>
      </div>
      <div className="relative mt-10">
        <div className="text-accent font-mono text-[10px] font-semibold tracking-[0.18em] uppercase">
          International distribution
        </div>
        <h3 className="text-foreground mt-1 text-[20px] leading-tight font-semibold tracking-tight">
          Export to EEA &amp; beyond
        </h3>
        <p className="text-muted mt-2 text-[13px] leading-relaxed">
          WDA-authorised export with full customs documentation and temperature
          assurance in transit.
        </p>
      </div>
    </div>
  );
};

const AmbientTile: React.FC = () => {
  return (
    <div className="group duration-slow border-border shadow-hint hover:border-primary/40 hover:shadow-primary/10 relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border bg-white p-6 transition-all hover:shadow-lg lg:col-span-3">
      <span
        aria-hidden="true"
        className="from-primary to-primary-dark pointer-events-none absolute top-0 right-0 h-20 w-20 rounded-bl-3xl bg-linear-to-br"
      />
      <div
        aria-hidden="true"
        className="bg-border pointer-events-none absolute right-6 bottom-6 left-6 h-[2px] rounded-full"
      >
        <div className="from-primary via-primary to-accent absolute inset-y-0 right-[25%] left-[15%] rounded-full bg-linear-to-r" />
        <div className="bg-primary absolute -top-1.5 left-[15%] h-[10px] w-px" />
        <div className="bg-accent absolute -top-1.5 right-[25%] h-[10px] w-px" />
      </div>
      <div className="relative flex items-start justify-between">
        <div className="bg-primary shadow-primary/30 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg">
          <ShieldTick size={22} variant="Bold" />
        </div>
        <span className="border-primary/30 bg-primary-subtle text-primary-dark mt-1 inline-flex h-7 items-center rounded-xl border px-2.5 font-mono text-[12px] leading-none font-semibold">
          15–25 °C
        </span>
      </div>
      <div className="relative mt-10 pb-6">
        <div className="text-primary-dark font-mono text-[10px] font-semibold tracking-[0.18em] uppercase">
          Controlled ambient
        </div>
        <h3 className="text-foreground mt-1 text-[20px] leading-tight font-semibold tracking-tight">
          Room-temperature lanes
        </h3>
        <p className="text-muted mt-2 text-[13px] leading-relaxed">
          Validated storage conditions for the broader product portfolio,
          continuously logged.
        </p>
      </div>
    </div>
  );
};

const OfficeTile: React.FC = () => {
  return (
    <div className="group duration-slow border-border bg-surface-1 shadow-hint hover:border-accent/40 hover:shadow-accent/10 relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border p-6 transition-all hover:shadow-lg lg:col-span-3">
      <span
        aria-hidden="true"
        className="from-accent to-accent-dark pointer-events-none absolute top-0 right-0 h-20 w-20 rounded-bl-3xl bg-linear-to-br"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -bottom-10 hidden h-48 w-48 items-center justify-center sm:flex"
      >
        <div className="border-primary absolute h-24 w-24 rounded-full border opacity-20" />
        <div className="border-primary absolute h-36 w-36 rounded-full border opacity-[0.12]" />
        <div className="border-primary absolute h-48 w-48 rounded-full border opacity-[0.07]" />
        <div className="bg-primary shadow-primary/30 relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg">
          <Location size={18} variant="Bold" />
        </div>
      </div>
      <div className="relative flex items-start justify-between">
        <div className="bg-accent shadow-accent/30 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg">
          <Location size={22} variant="Bold" />
        </div>
      </div>
      <div className="relative mt-10 max-w-[60%]">
        <div className="text-subtle font-mono text-[10px] font-semibold tracking-[0.18em] uppercase">
          Head office
        </div>
        <h3 className="text-foreground mt-1 text-[20px] leading-tight font-semibold tracking-tight">
          Utrecht &middot; Netherlands
        </h3>
        <p className="text-muted mt-2 text-[13px] leading-relaxed">
          Commercial &amp; quality operations — where RFQs are answered and
          qualifications are run.
        </p>
      </div>
    </div>
  );
};

export default SupplyChainGallery;
