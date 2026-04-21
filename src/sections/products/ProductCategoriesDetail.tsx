import {
  Award,
  TagCross,
  Hospital,
  Heart,
  Box,
  Crown,
  TickCircle,
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

export function ProductCategoriesDetail() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <Reveal direction="up">
          <SectionHeader
            eyebrow="Product categories"
            title="Six categories that cover most supply conversations."
            description="A deeper look at the product families in our catalog, and what's typical in each."
            size="md"
          />
        </Reveal>

        <Stagger
          as="ul"
          staggerChildren={0.06}
          delayChildren={0.1}
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PRODUCT_CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.icon] ?? Award;
            return (
              <StaggerChild key={cat.slug} as="li">
                <div
                  id={cat.slug}
                  className="group flex h-full scroll-mt-24 flex-col gap-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-6 transition-all duration-[var(--duration-slow)] hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary-subtle)] text-[var(--color-primary-dark)]">
                    <Icon size={20} variant="Linear" />
                  </div>
                  <h3 className="text-[1.125rem] font-semibold tracking-[-0.014em] text-[var(--color-foreground)]">
                    {cat.title}
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed text-[var(--color-muted)]">
                    {cat.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-[0.85rem] text-[var(--color-subtle)]">
                    <TickCircle
                      size={16}
                      variant="Bold"
                      className="text-[var(--color-primary)]"
                    />
                    Available on request to qualified customers
                  </div>
                </div>
              </StaggerChild>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
