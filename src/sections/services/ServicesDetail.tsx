import { ArrowRight, Box, Global, TickCircle, Truck } from "iconsax-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { SERVICES, type Service } from "@/lib/services";

const ICON_MAP: Record<Service["icon"], typeof Box> = {
  "pharma-wholesale": Box,
  "global-sourcing": Global,
  "international-distribution": Truck,
  "temperature-controlled": Box,
};

const ServicesDetail: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <ServicesDetailBackdrop />

      <Container className="relative" size="xl">
        <div className="flex flex-col gap-20 lg:gap-28">
          {SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.icon] ?? Box;
            const isReversed = idx % 2 === 1;
            const isAccent = idx % 2 === 1;
            const cornerClass = isAccent
              ? "bg-linear-to-br from-accent to-accent-dark"
              : "bg-linear-to-br from-primary to-primary-dark";
            const labelColor = isAccent ? "text-accent" : "text-primary-dark";
            const checkColor = isAccent ? "text-accent" : "text-primary";

            return (
              <Reveal key={service.slug} direction="up">
                <article
                  id={service.slug}
                  className="grid scroll-mt-28 items-start gap-10 lg:grid-cols-12 lg:gap-16"
                >
                  <div
                    className={cn("lg:col-span-5", isReversed && "lg:order-2")}
                  >
                    <div className="border-border shadow-card relative overflow-hidden rounded-3xl border bg-white p-10">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "pointer-events-none absolute top-0 right-0",
                          "h-28 w-28 rounded-bl-3xl",
                          cornerClass,
                        )}
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute top-8 right-8 text-white"
                      >
                        <Icon size={28} variant="Bold" />
                      </span>
                      <div
                        aria-hidden="true"
                        className="bg-primary/10 pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full blur-3xl"
                      />

                      <div className="relative mt-28">
                        <div className="text-subtle font-mono text-[13px]">
                          0{idx + 1} / 0{SERVICES.length}
                        </div>
                        <div
                          className={cn(
                            "mt-2 font-mono text-[11px] font-semibold",
                            "tracking-[0.18em] uppercase",
                            labelColor,
                          )}
                        >
                          Service
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={cn("lg:col-span-7", isReversed && "lg:order-1")}
                  >
                    <h2 className="tracking-display text-foreground text-[32px] leading-[1.1] font-semibold sm:text-[38px]">
                      {service.title}
                    </h2>
                    <p className="text-muted mt-4 text-[17px] leading-[1.6]">
                      {service.description}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="text-foreground flex items-start gap-3 text-[15px] leading-snug"
                        >
                          <TickCircle
                            className={cn("mt-0.5 shrink-0", checkColor)}
                            size={20}
                            variant="Bold"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <Link
                      className="group text-foreground hover:text-primary-dark mt-8 inline-flex items-center gap-2 text-[15px] font-medium transition-colors"
                      href="/contact"
                    >
                      Request a quote for {service.title.toLowerCase()}
                      <ArrowRight
                        className="duration-normal transition-transform group-hover:translate-x-0.5"
                        size={16}
                        variant="Linear"
                      />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

const ServicesDetailBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-primary/10 absolute top-[10%] left-[-8%] h-[420px] w-[420px] rounded-full blur-[110px]" />
      <div className="bg-accent/10 absolute right-[-8%] bottom-[10%] h-[380px] w-[380px] rounded-full blur-[110px]" />
    </div>
  );
};

export default ServicesDetail;
