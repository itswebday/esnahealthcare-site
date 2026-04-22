import {
  Award,
  Box,
  Crown,
  Heart,
  Hospital,
  TagCross,
  TickCircle,
} from "iconsax-react";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerChild } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { PRODUCT_CATEGORIES, type ProductCategory } from "@/lib/services";

const ICON_MAP: Record<ProductCategory["icon"], typeof Award> = {
  branded: Award,
  generic: TagCross,
  hospital: Hospital,
  specialty: Crown,
  "cold-chain": Box,
  prescription: Heart,
};

const ProductCategoriesDetail: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      id="medicines"
    >
      <ProductCategoriesBackdrop />

      <Container className="relative" size="xl">
        <Reveal direction="up">
          <SectionHeader
            description="A deeper look at the product families in our catalog, and what's typical in each."
            eyebrow="Product categories"
            size="md"
            title="Six categories that cover most supply conversations."
          />
        </Reveal>

        <Stagger
          as="ul"
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          delayChildren={0.1}
          staggerChildren={0.06}
        >
          {PRODUCT_CATEGORIES.map((cat, idx) => {
            const Icon = ICON_MAP[cat.icon] ?? Award;
            const isAccent = idx % 2 === 1;
            const cornerClass = isAccent
              ? "bg-linear-to-br from-accent to-accent-dark"
              : "bg-linear-to-br from-primary to-primary-dark";
            const hoverClass = isAccent
              ? "hover:border-accent/40 hover:shadow-accent/10"
              : "hover:border-primary/40 hover:shadow-primary/10";
            const dotClass = isAccent ? "text-accent" : "text-primary";
            return (
              <StaggerChild key={cat.slug} as="li">
                <div
                  id={cat.slug}
                  className={cn(
                    "group relative flex h-full scroll-mt-24",
                    "flex-col gap-4 overflow-hidden rounded-3xl p-6",
                    "border-border shadow-hint border bg-white",
                    "duration-slow transition-all hover:shadow-xl",
                    hoverClass,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute top-0 right-0",
                      "h-20 w-20 rounded-bl-3xl",
                      cornerClass,
                    )}
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-5 right-5 text-white"
                  >
                    <Icon size={22} variant="Bold" />
                  </span>

                  <h3 className="text-foreground mt-14 text-[18px] font-semibold tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-muted text-[14px] leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="text-subtle mt-auto flex items-center gap-2 text-[12px]">
                    <TickCircle className={dotClass} size={16} variant="Bold" />
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
};

const ProductCategoriesBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-primary/10 absolute top-[20%] left-[-10%] h-[420px] w-[420px] rounded-full blur-[110px]" />
      <div className="bg-accent/10 absolute right-[-10%] bottom-[10%] h-[380px] w-[380px] rounded-full blur-[110px]" />
    </div>
  );
};

export default ProductCategoriesDetail;
