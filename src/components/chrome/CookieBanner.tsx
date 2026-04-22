"use client";

import { CloseCircle, Coffee, ShieldTick } from "iconsax-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const STORAGE_KEY = "esna_cookie_consent_v1";

type Consent = "accepted" | "declined" | "dismissed";

const CookieBanner: React.FC = () => {
  const [choice, setChoice] = useState<Consent | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (
        stored === "accepted" ||
        stored === "declined" ||
        stored === "dismissed"
      ) {
        setChoice(stored);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const persist = (value: Consent) => {
    setChoice(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {choice === null && (
        <motion.div
          className="z-toast fixed inset-x-4 bottom-4 mx-auto max-w-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          role="region"
          aria-label="Cookie preferences"
        >
          <div className="relative">
            {/* Soft corner brackets (only two, diagonal) */}
            <span
              aria-hidden="true"
              className="border-primary absolute -top-0.5 -left-0.5 h-4 w-4 rounded-tl-2xl border-t-2 border-l-2"
            />
            <span
              aria-hidden="true"
              className="border-accent absolute -right-0.5 -bottom-0.5 h-4 w-4 rounded-br-2xl border-r-2 border-b-2"
            />

            {/* Card */}
            <div className="border-border shadow-float relative overflow-hidden rounded-2xl border bg-white">
              {/* Thin gradient accent line at top */}
              <div
                aria-hidden="true"
                className="from-primary via-primary to-accent h-[2px] w-full bg-linear-to-r"
              />

              {/* Content */}
              <div className="relative flex flex-col gap-5 p-6 sm:p-7">
                {/* Dismiss (absolute top-right) */}
                <button
                  className="text-subtle hover:bg-surface-1 hover:text-foreground absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
                  type="button"
                  aria-label="Dismiss"
                  onClick={() => persist("dismissed")}
                >
                  <CloseCircle size={16} variant="Linear" />
                </button>

                {/* Header */}
                <div className="flex items-start gap-4 pr-8">
                  {/* Icon chip with subtle ring */}
                  <div
                    aria-hidden="true"
                    className="relative hidden h-12 w-12 shrink-0 sm:block"
                  >
                    <span className="bg-primary-subtle absolute inset-0 rounded-2xl" />
                    <span className="absolute inset-[3px] rounded-xl bg-white" />
                    <span className="text-primary-dark relative flex h-full w-full items-center justify-center">
                      <Coffee size={22} variant="Bold" />
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="text-primary-dark inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-[0.18em] uppercase">
                      <ShieldTick size={12} variant="Bold" />
                      Privacy notice
                    </div>
                    <h2 className="text-foreground text-[17px] leading-tight font-semibold tracking-tight">
                      Cookies on this site
                    </h2>
                    <p className="text-muted text-[14px] leading-relaxed">
                      We use a minimal set of strictly necessary cookies.
                      Optional analytics cookies are off by default —{" "}
                      <Link
                        className="text-primary-dark hover:text-primary font-medium underline-offset-2 transition-colors hover:underline"
                        href="/cookies"
                      >
                        see cookie policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col-reverse items-stretch gap-2 sm:flex-row sm:items-center sm:justify-end">
                  <Button
                    className="sm:flex-none"
                    size="sm"
                    variant="outline"
                    onClick={() => persist("declined")}
                  >
                    Decline
                  </Button>
                  <Button
                    className="sm:flex-none"
                    size="sm"
                    variant="primary"
                    onClick={() => persist("accepted")}
                  >
                    Accept all
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
