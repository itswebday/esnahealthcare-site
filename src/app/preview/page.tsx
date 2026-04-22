import { ArrowRight, Flag } from "iconsax-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const VERSIONS = [
  {
    slug: "v1",
    name: "Emerald Field",
    tagline: "Soft green canvas · primary-tinted sections · subtle dot grid",
    palette: ["bg-primary-subtle", "bg-primary", "bg-surface-2", "bg-accent"],
  },
  {
    slug: "v2",
    name: "Navy & Lime",
    tagline: "Deep navy sections · glass cards · geometric decorations",
    palette: ["bg-surface-invert", "bg-primary", "bg-surface-2", "bg-accent"],
  },
  {
    slug: "v3",
    name: "Duotone Mesh",
    tagline: "Soft mesh gradients · offset color blocks · duotone icons",
    palette: [
      "bg-primary/25",
      "bg-accent/25",
      "bg-primary-subtle",
      "bg-accent-subtle",
    ],
  },
  {
    slug: "v4",
    name: "Angular Grid",
    tagline: "White hero · grid overlay · sharp nav · square-accent buttons",
    palette: ["bg-white", "bg-primary", "bg-surface-invert", "bg-accent"],
    isNew: true,
  },
  {
    slug: "v5",
    name: "Corner Frame",
    tagline:
      "White hero · bracketed decorations · floating island nav · L-bracket buttons",
    palette: ["bg-white", "bg-primary", "bg-primary-subtle", "bg-accent"],
    isNew: true,
  },
  {
    slug: "v6",
    name: "Diagonal Slice",
    tagline:
      "White hero · angled accents · split nav · pill buttons with shine",
    palette: ["bg-white", "bg-primary", "bg-surface-invert", "bg-accent"],
    isNew: true,
  },
] as const;

const PreviewHubPage: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32">
      <Container size="xl">
        {/* Intro */}
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="text-primary-dark inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.14em] uppercase">
            <Flag className="text-primary" size={14} variant="Bold" />
            Visual direction previews
          </span>
          <h1 className="tracking-display text-foreground text-[40px] leading-[1.05] font-semibold sm:text-[52px]">
            Six restyling directions for{" "}
            <span className="text-primary italic">Esna Care</span>.
          </h1>
          <p className="text-muted text-[16px] leading-relaxed">
            Each version rethinks backgrounds, cards, and primary-color usage to
            move the site away from pure white. V4–V6 build on V2&rsquo;s
            section language but restore a white hero, restyle the navigation,
            and introduce non-pill button treatments.
          </p>
        </div>

        {/* Versions */}
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VERSIONS.map((version, index) => (
            <li key={version.slug}>
              <Link
                className="group border-border duration-slow hover:border-primary/60 hover:shadow-lift relative flex h-full flex-col gap-6 overflow-hidden rounded-2xl border bg-white p-7 transition-all"
                href={`/preview/${version.slug}`}
              >
                {/* Version number + NEW badge */}
                <div className="flex items-center justify-between">
                  <span className="text-subtle font-mono text-[11px] font-semibold tracking-[0.2em] uppercase">
                    Version {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-2">
                    {"isNew" in version && version.isNew && (
                      <span className="bg-primary inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-semibold tracking-[0.14em] text-white uppercase">
                        New
                      </span>
                    )}
                    <ArrowRight
                      className="text-subtle duration-normal group-hover:text-primary transition-all group-hover:translate-x-1"
                      size={16}
                      variant="Linear"
                    />
                  </div>
                </div>

                {/* Palette */}
                <div className="flex items-center gap-1.5">
                  {version.palette.map((swatch, swatchIndex) => (
                    <span
                      key={swatchIndex}
                      aria-hidden="true"
                      className={cn(
                        "border-border h-10 w-10 rounded-xl border",
                        swatch,
                      )}
                    />
                  ))}
                </div>

                {/* Name + tagline */}
                <div className="flex flex-col gap-2">
                  <h2 className="text-foreground text-[22px] leading-tight font-semibold tracking-tight">
                    {version.name}
                  </h2>
                  <p className="text-muted text-[14px] leading-relaxed">
                    {version.tagline}
                  </p>
                </div>

                {/* View link */}
                <span className="text-primary-dark mt-auto inline-flex items-center gap-1.5 text-[14px] font-medium">
                  View full preview
                  <ArrowRight size={14} variant="Linear" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default PreviewHubPage;
