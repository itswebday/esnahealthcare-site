import Link from "next/link";
import { ArrowRight, ShieldTick, TickCircle, Verify } from "iconsax-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { WHY_CHOOSE_US } from "@/lib/services";
import { SITE } from "@/lib/site";

type LicenceCardProps = {
  caption: string;
  href: string;
  icon: React.ReactNode;
  number: string;
  title: string;
};

const WhyChoose: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <WhyChooseBackdrop />

      <Container className="relative" size="xl">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-6" direction="up">
            <div className="flex flex-col gap-5">
              <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex w-fit items-center gap-2 rounded-xl border px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
                <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                Why {SITE.name}
              </span>
              <h2 className="tracking-display text-foreground text-[32px] leading-[1.1] font-semibold sm:text-[42px] lg:text-[48px]">
                A licensed partner that behaves like one.
              </h2>
              <p className="text-muted max-w-2xl text-[16px] leading-relaxed">
                Five operating commitments that shape every engagement — from
                first RFQ to ongoing supply.
              </p>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {WHY_CHOOSE_US.map((item, idx) => {
                const isPrimary = idx % 2 === 0;
                return (
                  <li
                    key={item}
                    className={cn(
                      "group duration-slow border-border hover:shadow-lift relative flex items-start gap-3 overflow-hidden rounded-2xl border bg-white p-4 transition-all",
                      isPrimary
                        ? "hover:border-primary/40"
                        : "hover:border-accent/40",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-y-4 left-0 w-[3px] rounded-r-full",
                        isPrimary ? "bg-primary" : "bg-accent",
                      )}
                    />
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1",
                        isPrimary
                          ? "bg-primary-subtle text-primary-dark ring-primary/25"
                          : "bg-accent-subtle text-accent ring-accent/30",
                      )}
                    >
                      <TickCircle size={18} variant="Bold" />
                    </span>
                    <span className="text-foreground text-[14px] leading-snug">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={0.12} direction="up">
            <LicencePanel />
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

const LicencePanel: React.FC = () => {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="border-primary absolute -top-3 -left-3 h-6 w-6 rounded-tl-xl border-t-2 border-l-2"
      />
      <span
        aria-hidden="true"
        className="border-primary absolute -top-3 -right-3 h-6 w-6 rounded-tr-xl border-t-2 border-r-2"
      />
      <span
        aria-hidden="true"
        className="border-accent absolute -bottom-3 -left-3 h-6 w-6 rounded-bl-xl border-b-2 border-l-2"
      />
      <span
        aria-hidden="true"
        className="border-accent absolute -right-3 -bottom-3 h-6 w-6 rounded-br-xl border-r-2 border-b-2"
      />

      <div className="border-border shadow-card relative overflow-hidden rounded-3xl border bg-white p-8 sm:p-10">
        <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-[12px] font-medium tracking-[0.14em] uppercase">
          <span className="bg-primary h-1.5 w-1.5 rounded-full" />
          Our licences
        </span>
        <h3 className="text-foreground mt-5 text-[26px] leading-tight font-semibold tracking-tight sm:text-[30px]">
          Verified, renewable, and publicly listed.
        </h3>
        <p className="text-muted mt-3 max-w-md text-[15px] leading-relaxed">
          Both licences are issued by Dutch regulatory authorities and are
          verifiable through the EudraGMDP public register.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <LicenceCard
            caption="Procurement · Supply · Export"
            href={SITE.licences.wda.pdf}
            icon={
              <ShieldTick className="text-white" size={20} variant="Bold" />
            }
            number={`No. ${SITE.licences.wda.number}`}
            title="WDA Licence"
          />
          <LicenceCard
            caption="Issued 04/11/2024"
            href={SITE.licences.gdp.pdf}
            icon={<Verify className="text-white" size={20} variant="Bold" />}
            number={SITE.licences.gdp.number}
            title="GDP Certificate"
          />
        </div>

        <Link
          className="group text-foreground hover:text-primary-dark mt-8 inline-flex items-center gap-2 text-[15px] font-medium transition-colors"
          href="/compliance"
        >
          View complete compliance documentation
          <ArrowRight
            className="duration-normal transition-transform group-hover:translate-x-0.5"
            size={16}
            variant="Linear"
          />
        </Link>
      </div>
    </div>
  );
};

const LicenceCard: React.FC<LicenceCardProps> = ({
  caption,
  href,
  icon,
  number,
  title,
}) => {
  const isWda = title.includes("WDA");
  const cornerClass = isWda
    ? "bg-linear-to-br from-primary to-primary-dark"
    : "bg-linear-to-br from-accent to-accent-dark";
  const hoverClass = isWda
    ? "hover:border-primary/40 hover:shadow-primary/10"
    : "hover:border-accent/40 hover:shadow-accent/10";

  return (
    <Link
      className={cn(
        "group relative flex flex-col gap-2 overflow-hidden",
        "rounded-2xl p-5",
        "border-border shadow-hint border bg-white",
        "duration-slow transition-all hover:shadow-lg",
        hoverClass,
        "focus-visible:ring-primary focus-visible:ring-2",
        "focus-visible:ring-offset-2 focus-visible:outline-none",
      )}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-0 right-0",
          "h-16 w-16 rounded-bl-3xl",
          cornerClass,
        )}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-4 right-4"
      >
        {icon}
      </span>

      <div className="text-subtle mt-10 font-mono text-[10px] font-semibold tracking-[0.14em] uppercase">
        {title}
      </div>
      <div className="text-foreground font-mono text-[15px] font-semibold tracking-tight">
        {number}
      </div>
      <div className="text-muted text-[12px]">{caption}</div>
    </Link>
  );
};

const WhyChooseBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-primary/10 absolute top-[20%] left-[-10%] h-[440px] w-[440px] rounded-full blur-[110px]" />
      <div className="bg-accent/10 absolute right-[-10%] bottom-[10%] h-[380px] w-[380px] rounded-full blur-[110px]" />
    </div>
  );
};

export default WhyChoose;
