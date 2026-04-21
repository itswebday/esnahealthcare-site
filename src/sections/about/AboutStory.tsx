import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

export function AboutStory() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal direction="up" className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
              <span className="h-px w-6 bg-[var(--color-primary)]" />
              Our story
            </span>
            <h2 className="mt-5 text-[2.25rem] font-semibold leading-[1.08] tracking-[var(--tracking-display)] text-[var(--color-foreground)] sm:text-[2.5rem]">
              Sourcing medicine where it&rsquo;s needed, on compliance terms.
            </h2>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal direction="up" delay={0.08}>
              <p className="text-[1.125rem] leading-[1.6] text-[var(--color-muted)]">
                {SITE.name} is a Dutch EU-licensed pharmaceutical wholesaler based in
                Utrecht. Our work sits quietly behind the pharmacists, hospital
                procurement teams, and distribution partners who rely on us — sourcing
                branded and generic medicines across the European Economic Area and
                delivering them, documented and temperature-controlled, to qualified
                customers worldwide.
              </p>
              <p className="mt-5 text-[1.125rem] leading-[1.6] text-[var(--color-muted)]">
                We specialise in situations where the easy answer doesn&rsquo;t exist:
                supply disruptions, hard-to-source orphan treatments, urgent hospital
                requests, and export shipments that need to clear both regulatory and
                customs scrutiny. The combination of a WDA covering procurement,
                supply, and export — plus GDP certification — is what makes those
                difficult cases workable.
              </p>
              <p className="mt-5 text-[1.125rem] leading-[1.6] text-[var(--color-muted)]">
                <span className="font-mono text-[0.95rem] text-[var(--color-faint)]">
                  {"{"}draft — Eissa to provide 2–3 sentences on the founding story
                  and why Esna Care exists{"}"}
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
