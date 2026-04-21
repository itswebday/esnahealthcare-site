import { DocumentDownload, ShieldTick, Verify } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function CatalogCta() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <Container size="xl">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--color-surface-invert)] p-8 text-[var(--color-on-invert)] sm:p-12 lg:p-16">
            {/* Ambient gradients */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-[20%] -top-[30%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(46,139,53,0.35)_0%,transparent_55%)] blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-[20%] -bottom-[30%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(13,79,140,0.4)_0%,transparent_55%)] blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-invert-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
            />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-on-invert-muted)]">
                  <span className="h-px w-6 bg-white/30" />
                  For qualified distributors
                </span>
                <h2 className="mt-5 text-[2.25rem] font-semibold leading-[1.08] tracking-[var(--tracking-display)] text-white sm:text-[2.75rem] lg:text-[3.25rem]">
                  Need our full product catalog?
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-on-invert-muted)]">
                  Our complete catalog with 200+ products, pricing, and current
                  availability is shared upon request with qualified healthcare
                  distributors. Submit your details and our commercial team will be
                  in touch within one business day.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    href="/contact?request=catalog"
                    variant="invert"
                    size="lg"
                    withArrow
                  >
                    <DocumentDownload
                      size={18}
                      variant="Linear"
                      className="mr-1 inline-block align-[-0.25em]"
                    />
                    Request Full Catalog
                  </Button>
                  <Button href="/compliance" variant="invert-ghost" size="lg">
                    Verify our licences
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="flex h-full flex-col justify-center gap-4 rounded-[var(--radius-xl)] border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-on-invert-muted)]">
                    Customer qualification
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-[0.95rem] text-white/90">
                      <ShieldTick
                        size={20}
                        variant="Linear"
                        className="mt-0.5 shrink-0 text-[var(--color-primary)]"
                      />
                      All customers qualified under our Customer SOP (QA-015)
                    </li>
                    <li className="flex items-start gap-3 text-[0.95rem] text-white/90">
                      <Verify
                        size={20}
                        variant="Linear"
                        className="mt-0.5 shrink-0 text-[var(--color-primary)]"
                      />
                      Catalog shared after qualification completes
                    </li>
                    <li className="flex items-start gap-3 text-[0.95rem] text-white/90">
                      <ShieldTick
                        size={20}
                        variant="Linear"
                        className="mt-0.5 shrink-0 text-[var(--color-primary)]"
                      />
                      Full batch and regulatory documentation on every order
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
