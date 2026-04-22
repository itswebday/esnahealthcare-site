import {
  ArrowRight,
  Award,
  Box,
  Crown,
  Heart,
  Hospital,
  TagCross,
} from "iconsax-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerChild } from "@/components/ui/Reveal";
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

const ProductsOverview: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
      <ProductsBackdrop />

      <Container className="relative" size="xl">
        <Reveal direction="up">
          <div className="flex max-w-3xl flex-col gap-5">
            <span className="border-accent/40 bg-accent-subtle text-accent inline-flex w-fit items-center gap-2 rounded-xl border px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
              <span className="bg-accent h-1.5 w-1.5 rounded-full" />
              Products we supply
            </span>
            <h2 className="tracking-display text-foreground text-[32px] leading-[1.1] font-semibold sm:text-[42px] lg:text-[48px]">
              A broad portfolio ensuring continuous availability.
            </h2>
            <p className="text-muted max-w-2xl text-[16px] leading-relaxed">
              From branded and generic medicines to injectables and
              temperature-sensitive biologics — sourced through qualified
              channels, documented end-to-end.
            </p>
          </div>
        </Reveal>

        <Stagger
          as="ul"
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          delayChildren={0.1}
          staggerChildren={0.06}
        >
          {PRODUCT_CATEGORIES.map((cat, idx) => {
            const Icon = ICON_MAP[cat.icon] ?? Award;
            const isEven = idx % 2 === 0;
            const cornerClass = isEven
              ? "bg-linear-to-br from-primary to-primary-dark"
              : "bg-linear-to-br from-accent to-accent-dark";
            const hoverBorderClass = isEven
              ? "hover:border-primary/40 hover:shadow-primary/10"
              : "hover:border-accent/40 hover:shadow-accent/10";
            const linkColorClass = isEven ? "text-primary-dark" : "text-accent";

            return (
              <StaggerChild key={cat.slug} as="li" direction="up">
                <Link
                  className={cn(
                    "group relative flex h-full flex-col gap-5",
                    "overflow-hidden rounded-3xl p-7",
                    "border-border shadow-hint border bg-white",
                    "duration-slow transition-all hover:shadow-xl",
                    hoverBorderClass,
                    "focus-visible:ring-primary focus-visible:ring-2",
                    "focus-visible:ring-offset-2 focus-visible:outline-none",
                  )}
                  href={`/products#${cat.slug}`}
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

                  <div className="relative mt-14 flex flex-1 flex-col gap-2">
                    <div className="text-subtle font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
                      Category · 0{idx + 1}
                    </div>
                    <h3 className="text-foreground text-[18px] leading-tight font-semibold tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-muted text-[14px] leading-relaxed">
                      {cat.summary}
                    </p>
                  </div>

                  <span
                    className={cn(
                      "relative mt-auto inline-flex items-center gap-1.5",
                      "text-[13px] font-medium",
                      linkColorClass,
                    )}
                  >
                    View details
                    <ArrowRight
                      className="duration-normal transition-transform group-hover:translate-x-0.5"
                      size={14}
                      variant="Linear"
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
};

const ProductsBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-primary/10 absolute top-[30%] left-[-5%] h-[420px] w-[420px] rounded-full blur-[110px]" />
      <div className="bg-accent/10 absolute right-[-5%] bottom-[10%] h-[380px] w-[380px] rounded-full blur-[110px]" />
      <div className="border-primary/30 bg-primary-subtle/40 absolute top-[18%] left-[3%] h-24 w-24 rotate-12 rounded-2xl border-2" />
      <div className="border-accent/30 absolute top-[30%] right-[8%] h-20 w-20 -rotate-6 rounded-xl border-2" />
      <div className="bg-accent-subtle absolute bottom-[10%] left-[40%] h-16 w-16 rotate-45 rounded-lg" />
      <div className="bg-primary absolute top-[50%] left-[45%] h-2 w-2 rounded-full" />
      <div className="bg-accent absolute right-[30%] bottom-[30%] h-2 w-2 rounded-full" />
    </div>
  );
};

export default ProductsOverview;
