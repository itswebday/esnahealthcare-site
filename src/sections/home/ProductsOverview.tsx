import Link from "next/link";
import {
  Award,
  TagCross,
  Hospital,
  Heart,
  Box,
  Crown,
  ArrowRight,
} from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, Stagger, StaggerChild } from "@/components/ui/Reveal";
import { PRODUCT_CATEGORIES, type ProductCategory } from "@/lib/services";

const ICON_MAP: Record<ProductCategory["icon"], typeof Award> = {
  branded: Award,
  generic: TagCross,
  hospital: Hospital,
  specialty: Crown,
  "cold-chain": Box,
  prescription: Heart,
};

export function ProductsOverview() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="Products we supply"
            title="A broad portfolio ensuring continuous availability."
            description="From branded and generic medicines to injectables and temperature-sensitive biologics — sourced through qualified channels, documented end-to-end."
            size="lg"
          />
        </Reveal>

        <Stagger
          as="ul"
          staggerChildren={0.06}
          delayChildren={0.1}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {PRODUCT_CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.icon] ?? Award;
            return (
              <StaggerChild key={cat.slug} as="li" direction="up">
                <Link
                  href={`/products#${cat.slug}`}
                  className="group flex h-full flex-col gap-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-6 transition-all duration-[var(--duration-slow)] ease-[var(--ease-out)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                    <Icon size={20} variant="Linear" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="text-[1.1rem] font-semibold tracking-[-0.014em] text-[var(--color-foreground)]">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--color-muted)]">
                      {cat.summary}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)]">
                    View details
                    <ArrowRight
                      size={14}
                      variant="Linear"
                      className="transition-transform duration-[var(--duration-normal)] group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </StaggerChild>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
