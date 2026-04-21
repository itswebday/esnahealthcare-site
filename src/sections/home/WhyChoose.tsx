import Link from "next/link";
import { TickCircle, ShieldTick, Verify, ArrowRight } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { WHY_CHOOSE_US } from "@/lib/services";
import { SITE } from "@/lib/site";

export function WhyChoose() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <Container size="xl">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal direction="up" className="lg:col-span-6">
            <SectionHeader
              eyebrow={`Why ${SITE.name}`}
              title="A licensed partner that behaves like one."
              description="Five operating commitments that shape every engagement — from first RFQ to ongoing supply."
              size="lg"
            />
            <ul className="mt-10 space-y-4">
              {WHY_CHOOSE_US.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[1.05rem] leading-snug text-[var(--color-foreground)]"
                >
                  <TickCircle
                    size={22}
                    variant="Bold"
                    className="mt-0.5 shrink-0 text-[var(--color-primary)]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="up" delay={0.12} className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-island)] sm:p-10">
              <div className="relative">
                <span className="inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
                  <span className="h-px w-6 bg-[var(--color-primary)]" />
                  Our licences
                </span>
                <h3 className="mt-5 text-[1.6rem] font-semibold tracking-[-0.018em] text-[var(--color-foreground)] sm:text-[1.85rem]">
                  Verified, renewable, and publicly listed.
                </h3>
                <p className="mt-3 max-w-md text-[0.98rem] leading-relaxed text-[var(--color-muted)]">
                  Both licences are issued by Dutch regulatory authorities and are
                  verifiable through the EudraGMDP public register.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <LicenceCard
                    icon={
                      <ShieldTick
                        size={22}
                        variant="Linear"
                        className="text-[var(--color-primary-dark)]"
                      />
                    }
                    title="WDA Licence"
                    number={`No. ${SITE.licences.wda.number}`}
                    caption="Procurement · Supply · Export"
                    href={SITE.licences.wda.pdf}
                  />
                  <LicenceCard
                    icon={
                      <Verify
                        size={22}
                        variant="Linear"
                        className="text-[var(--color-accent)]"
                      />
                    }
                    title="GDP Certificate"
                    number={SITE.licences.gdp.number}
                    caption="Issued 04/11/2024"
                    href={SITE.licences.gdp.pdf}
                  />
                </div>

                <Link
                  href="/compliance"
                  className="group mt-8 inline-flex items-center gap-2 text-[0.95rem] font-medium text-[var(--color-foreground)] transition-colors hover:text-[var(--color-primary-dark)]"
                >
                  View complete compliance documentation
                  <ArrowRight
                    size={16}
                    variant="Linear"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function LicenceCard({
  icon,
  title,
  number,
  caption,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  number: string;
  caption: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-1)] p-5 transition-all duration-[var(--duration-slow)] hover:border-[var(--color-border-strong)] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
    >
      <div className="flex items-center justify-between">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white">
          {icon}
        </div>
        <ArrowRight
          size={16}
          variant="Linear"
          className="text-[var(--color-subtle)] transition-transform group-hover:translate-x-0.5"
        />
      </div>
      <div className="text-[0.78rem] font-medium uppercase tracking-[0.12em] text-[var(--color-subtle)]">
        {title}
      </div>
      <div className="font-mono text-[1rem] font-semibold tracking-tight text-[var(--color-foreground)]">
        {number}
      </div>
      <div className="text-[0.82rem] text-[var(--color-muted)]">{caption}</div>
    </Link>
  );
}
