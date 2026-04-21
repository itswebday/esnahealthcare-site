import Link from "next/link";
import { ShieldTick, Verify, ArrowRight } from "iconsax-react";
import { SITE } from "@/lib/site";
import { Container } from "./Container";

export function LicenceStrip({ tone = "light" }: { tone?: "light" | "invert" }) {
  const isInvert = tone === "invert";
  return (
    <div
      className={
        isInvert
          ? "border-y border-[var(--color-border-invert)] bg-[var(--color-surface-invert)] text-[var(--color-on-invert)]"
          : "border-y border-[var(--color-border)] bg-[var(--color-surface-1)] text-[var(--color-foreground)]"
      }
    >
      <Container size="xl">
        <div className="flex flex-col items-start gap-4 py-5 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
            <Link
              href={SITE.licences.wda.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={
                isInvert
                  ? "group inline-flex items-center gap-3 text-sm transition-colors hover:text-white"
                  : "group inline-flex items-center gap-3 text-sm transition-colors hover:text-[var(--color-primary-dark)]"
              }
            >
              <ShieldTick
                size={20}
                variant="Linear"
                className={
                  isInvert
                    ? "text-[var(--color-on-invert-muted)]"
                    : "text-[var(--color-primary)]"
                }
              />
              <span>
                <span
                  className={
                    isInvert
                      ? "mr-1.5 text-[var(--color-on-invert-muted)]"
                      : "mr-1.5 text-[var(--color-subtle)]"
                  }
                >
                  WDA Licence
                </span>
                <span className="font-mono tracking-tight">
                  No. {SITE.licences.wda.number}
                </span>
              </span>
              <ArrowRight
                size={14}
                variant="Linear"
                className="opacity-0 transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] group-hover:opacity-100"
              />
            </Link>
            <span
              className={
                isInvert
                  ? "hidden h-4 w-px bg-[var(--color-border-invert)] sm:inline"
                  : "hidden h-4 w-px bg-[var(--color-border)] sm:inline"
              }
            />
            <Link
              href={SITE.licences.gdp.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={
                isInvert
                  ? "group inline-flex items-center gap-3 text-sm transition-colors hover:text-white"
                  : "group inline-flex items-center gap-3 text-sm transition-colors hover:text-[var(--color-primary-dark)]"
              }
            >
              <Verify
                size={20}
                variant="Linear"
                className={
                  isInvert
                    ? "text-[var(--color-on-invert-muted)]"
                    : "text-[var(--color-primary)]"
                }
              />
              <span>
                <span
                  className={
                    isInvert
                      ? "mr-1.5 text-[var(--color-on-invert-muted)]"
                      : "mr-1.5 text-[var(--color-subtle)]"
                  }
                >
                  GDP Licence
                </span>
                <span className="font-mono tracking-tight">
                  No. {SITE.licences.gdp.number}
                </span>
              </span>
              <ArrowRight
                size={14}
                variant="Linear"
                className="opacity-0 transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] group-hover:opacity-100"
              />
            </Link>
          </div>
          <Link
            href="/compliance"
            className={
              isInvert
                ? "group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors"
                : "group inline-flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)] transition-colors hover:text-[var(--color-primary-dark)]"
            }
          >
            View all compliance documents
            <ArrowRight
              size={14}
              variant="Linear"
              className="transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out)] group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
}
