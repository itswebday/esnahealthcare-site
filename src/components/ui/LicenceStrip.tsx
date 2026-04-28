import { ArrowRight, ShieldTick, Verify } from "iconsax-react";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Container from "./Container";

type LicenceStripProps = { tone?: "light" | "invert" };

const LicenceStrip: React.FC<LicenceStripProps> = ({ tone = "light" }) => {
  const isInvert = tone === "invert";

  return (
    <div
      className={
        isInvert
          ? "border-border-invert bg-surface-invert text-on-invert border-y"
          : "border-border bg-surface-1 text-foreground border-y"
      }
    >
      <Container size="xl">
        <div className="flex flex-col items-start gap-4 py-5 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
            <span className="inline-flex items-center gap-3 text-[14px]">
              <ShieldTick
                className={isInvert ? "text-on-invert-muted" : "text-primary"}
                size={20}
                variant="Linear"
              />
              <span>
                <span
                  className={
                    isInvert
                      ? "text-on-invert-muted mr-1.5"
                      : "text-subtle mr-1.5"
                  }
                >
                  WDA Licence
                </span>
                <span className="font-mono tracking-tight">
                  No. {SITE.licences.wda.number}
                </span>
              </span>
            </span>
            <span
              className={
                isInvert
                  ? "bg-border-invert hidden h-4 w-px sm:inline"
                  : "bg-border hidden h-4 w-px sm:inline"
              }
            />
            <span className="inline-flex items-center gap-3 text-[14px]">
              <Verify
                className={isInvert ? "text-on-invert-muted" : "text-primary"}
                size={20}
                variant="Linear"
              />
              <span>
                <span
                  className={
                    isInvert
                      ? "text-on-invert-muted mr-1.5"
                      : "text-subtle mr-1.5"
                  }
                >
                  GDP Certificate
                </span>
                <span className="font-mono tracking-tight">
                  No. {SITE.licences.gdp.number}
                </span>
              </span>
            </span>
          </div>

          <Link
            className={
              isInvert
                ? "group inline-flex items-center gap-2 text-[14px] font-medium text-white transition-colors"
                : "group text-foreground hover:text-primary-dark inline-flex items-center gap-2 text-[14px] font-medium transition-colors"
            }
            href="/compliance"
            prefetch
          >
            See compliance details
            <ArrowRight
              className="duration-normal transition-transform ease-[var(--ease-out)] group-hover:translate-x-0.5"
              size={14}
              variant="Linear"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default LicenceStrip;
