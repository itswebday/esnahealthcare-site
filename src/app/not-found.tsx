import Link from "next/link";
import { ArrowRight, ArrowLeft2 } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(46,139,53,0.14)_0%,transparent_55%)] blur-3xl" />
        <div className="absolute right-[-10%] top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(13,79,140,0.14)_0%,transparent_55%)] blur-3xl" />
      </div>
      <Container size="md">
        <div className="flex flex-col items-center text-center">
          <span className="font-mono text-[0.78rem] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
            Error 404
          </span>
          <h1 className="mt-5 text-[3rem] font-semibold leading-[1.05] tracking-[var(--tracking-display)] text-[var(--color-foreground)] sm:text-[4rem]">
            Page not found.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-[var(--color-muted)]">
            The page you were looking for isn&rsquo;t here — it may have moved, or
            the link was mistyped. Head back home or explore our compliance
            documentation.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 text-[0.95rem] font-medium leading-none text-white shadow-[var(--shadow-cta)] transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              <ArrowLeft2 size={16} variant="Linear" className="shrink-0" />
              Back to home
            </Link>
            <Button href="/compliance" variant="outline" size="lg" withArrow>
              View compliance
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
