"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { CloseCircle } from "iconsax-react";

const STORAGE_KEY = "esna_cookie_consent_v1";

type Consent = "accepted" | "declined" | "dismissed";

export function CookieBanner() {
  const [choice, setChoice] = useState<Consent | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "accepted" || stored === "declined" || stored === "dismissed") {
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

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {choice === null && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-4 bottom-4 z-[var(--z-toast)] mx-auto max-w-3xl"
          role="region"
          aria-label="Cookie preferences"
        >
          <div className="flex flex-col gap-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white/95 p-5 shadow-[var(--shadow-float)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
            <div className="flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
              <div className="mb-1 font-medium text-[var(--color-foreground)]">
                Cookies on this site
              </div>
              We use a minimal set of strictly necessary cookies. Optional analytics
              cookies are off by default —{" "}
              <Link
                href="/cookies"
                className="font-medium text-[var(--color-primary-dark)] underline-offset-2 hover:underline"
              >
                see cookie policy
              </Link>
              .
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => persist("declined")}
                className="h-10 rounded-full px-4 text-sm font-medium text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface-1)] hover:text-[var(--color-foreground)]"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => persist("accepted")}
                className="h-10 rounded-full bg-[var(--color-foreground)] px-5 text-sm font-medium text-white transition-colors hover:bg-[#1b2439]"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() => persist("dismissed")}
                aria-label="Dismiss"
                className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-subtle)] transition-colors hover:bg-[var(--color-surface-1)] hover:text-[var(--color-foreground)]"
              >
                <CloseCircle size={18} variant="Linear" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
