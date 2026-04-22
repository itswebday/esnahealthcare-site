import Link from "next/link";
import { ArrowRight, MessageQuestion } from "iconsax-react";
import Accordion from "@/components/ui/Accordion";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { FAQ } from "@/lib/faq";

const FaqSection: React.FC = () => {
  const items = FAQ.map((f, i) => ({
    key: `faq-${i}`,
    question: f.question,
    answer: (
      <>
        {f.draft && (
          <div className="bg-surface-2 text-subtle mb-3 inline-flex items-center gap-2 rounded-lg px-3 py-1 font-mono text-[11px] tracking-[0.12em] uppercase">
            Draft · pending client review
          </div>
        )}
        <p>{f.answer}</p>
      </>
    ),
  }));

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <FaqBackdrop />

      <Container className="relative" size="lg">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4" direction="up">
            <div className="sticky top-28">
              <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
                <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                Frequently asked
              </span>
              <h2 className="tracking-display text-foreground mt-5 text-[32px] leading-[1.08] font-semibold sm:text-[38px]">
                Quick answers.
              </h2>
              <p className="text-muted mt-4 max-w-xs text-[15px] leading-relaxed">
                Can&rsquo;t find what you&rsquo;re looking for? Our commercial
                team is happy to help.
              </p>
              <Link
                className="group text-foreground hover:text-primary-dark mt-6 inline-flex items-center gap-2 text-[15px] font-medium transition-colors"
                href="/contact"
              >
                <MessageQuestion size={18} variant="Linear" />
                Ask a question
                <ArrowRight
                  className="duration-normal transition-transform group-hover:translate-x-0.5"
                  size={16}
                  variant="Linear"
                />
              </Link>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-8" delay={0.08} direction="up">
            <Accordion items={items} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

const FaqBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-primary/10 absolute top-[20%] right-[-10%] h-[420px] w-[420px] rounded-full blur-[110px]" />
    </div>
  );
};

export default FaqSection;
