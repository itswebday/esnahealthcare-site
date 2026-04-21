import { ArrowRight } from "iconsax-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

export function WhoWeAre() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <Container size="xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal direction="up" className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
              <span className="h-px w-6 bg-[var(--color-primary)]" />
              Who we are
            </span>
            <h2 className="mt-5 text-[2.25rem] font-semibold leading-[1.1] tracking-[var(--tracking-display)] text-[var(--color-foreground)] sm:text-[2.75rem] lg:text-[3.25rem]">
              An EU-licensed wholesaler, built around compliance.
            </h2>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal direction="up" delay={0.08}>
              <p className="text-xl leading-[1.55] text-[var(--color-muted)]">
                {SITE.name} is a Dutch EU-licensed pharmaceutical wholesaler,
                specialising in the sourcing and distribution of high-quality branded
                and generic medicines. Through a trusted international supplier and
                partner network, we provide licensed pharmaceutical supply to
                wholesalers, distributors, hospitals, and pharmacies worldwide —
                including procurement, supply, export, and temperature-controlled
                handling of cold-chain and ambient medicinal products.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.16}>
              <blockquote className="mt-10 border-l-2 border-[var(--color-primary)] pl-6">
                <p className="text-[1.25rem] font-medium leading-[1.45] tracking-[-0.012em] text-[var(--color-foreground)] sm:text-[1.4rem]">
                  &ldquo;{SITE.mission}&rdquo;
                </p>
                <footer className="mt-4 text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                  Our mission
                </footer>
              </blockquote>
            </Reveal>
            <Reveal direction="up" delay={0.24}>
              <Link
                href="/about"
                className="group mt-10 inline-flex items-center gap-2 text-[0.95rem] font-medium text-[var(--color-primary-dark)] transition-colors hover:text-[var(--color-primary-hover)]"
              >
                Read more about us
                <ArrowRight
                  size={16}
                  variant="Linear"
                  className="transition-transform duration-[var(--duration-normal)] group-hover:translate-x-0.5"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
