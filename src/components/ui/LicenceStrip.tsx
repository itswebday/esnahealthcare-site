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
            {/* WDA licence link */}
            <Link
              className={
                isInvert
                  ? "group inline-flex items-center gap-3 text-[14px] transition-colors hover:text-white"
                  : "group hover:text-primary-dark inline-flex items-center gap-3 text-[14px] transition-colors"
              }
              href={SITE.licences.wda.pdf}
              rel="noopener noreferrer"
              target="_blank"
            >
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
              <ArrowRight
                className="duration-normal opacity-0 transition-all ease-[var(--ease-out)] group-hover:opacity-100"
                size={14}
                variant="Linear"
              />
            </Link>
            <span
              className={
                isInvert
                  ? "bg-border-invert hidden h-4 w-px sm:inline"
                  : "bg-border hidden h-4 w-px sm:inline"
              }
            />

            {/* GDP licence link */}
            <Link
              className={
                isInvert
                  ? "group inline-flex items-center gap-3 text-[14px] transition-colors hover:text-white"
                  : "group hover:text-primary-dark inline-flex items-center gap-3 text-[14px] transition-colors"
              }
              href={SITE.licences.gdp.pdf}
              rel="noopener noreferrer"
              target="_blank"
            >
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
                  GDP Licence
                </span>
                <span className="font-mono tracking-tight">
                  No. {SITE.licences.gdp.number}
                </span>
              </span>
              <ArrowRight
                className="duration-normal opacity-0 transition-all ease-[var(--ease-out)] group-hover:opacity-100"
                size={14}
                variant="Linear"
              />
            </Link>
          </div>

          {/* View-all link */}
          <Link
            className={
              isInvert
                ? "group inline-flex items-center gap-2 text-[14px] font-medium text-white transition-colors"
                : "group text-foreground hover:text-primary-dark inline-flex items-center gap-2 text-[14px] font-medium transition-colors"
            }
            href="/compliance"
          >
            View all compliance documents
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
