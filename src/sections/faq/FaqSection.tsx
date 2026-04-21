import Link from "next/link";
import { ArrowRight, MessageQuestion } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ } from "@/lib/faq";

export function FaqSection() {
  const items = FAQ.map((f, i) => ({
    key: `faq-${i}`,
    question: f.question,
    answer: (
      <>
        {f.draft && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-[0.7rem] font-mono uppercase tracking-[0.12em] text-[var(--color-subtle)]">
            Draft · pending client review
          </div>
        )}
        <p>{f.answer}</p>
      </>
    ),
  }));

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container size="lg">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal direction="up" className="lg:col-span-4">
            <div className="sticky top-28">
              <span className="inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
                <span className="h-px w-6 bg-[var(--color-primary)]" />
                Frequently asked
              </span>
              <h2 className="mt-5 text-[2rem] font-semibold leading-[1.08] tracking-[var(--tracking-display)] text-[var(--color-foreground)] sm:text-[2.4rem]">
                Quick answers.
              </h2>
              <p className="mt-4 max-w-xs text-[0.98rem] leading-relaxed text-[var(--color-muted)]">
                Can&rsquo;t find what you&rsquo;re looking for? Our commercial team
                is happy to help.
              </p>
              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 text-[0.95rem] font-medium text-[var(--color-foreground)] transition-colors hover:text-[var(--color-primary-dark)]"
              >
                <MessageQuestion size={18} variant="Linear" />
                Ask a question
                <ArrowRight
                  size={16}
                  variant="Linear"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.08} className="lg:col-span-8">
            <Accordion items={items} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
