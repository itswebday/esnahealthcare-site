"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Add } from "iconsax-react";
import { cn } from "@/lib/cn";

export type AccordionItem = {
  key: string;
  question: React.ReactNode;
  answer: React.ReactNode;
  badge?: string;
};

export function Accordion({
  items,
  className,
  defaultOpen,
}: {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: string;
}) {
  const [open, setOpen] = useState<string | null>(defaultOpen ?? null);

  return (
    <div
      className={cn(
        "divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]",
        className,
      )}
    >
      {items.map((item) => {
        const isOpen = open === item.key;
        return (
          <div key={item.key} className="py-1">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : item.key)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-6 rounded-[var(--radius-sm)] py-6 text-left transition-colors duration-[var(--duration-normal)] hover:text-[var(--color-primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-background)]"
            >
              <span className="flex flex-1 items-start gap-4">
                {item.badge && (
                  <span className="mt-1 inline-flex h-6 items-center rounded-full bg-[var(--color-primary-subtle)] px-2.5 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[var(--color-primary-dark)]">
                    {item.badge}
                  </span>
                )}
                <span className="text-[1.05rem] font-medium leading-snug text-[var(--color-foreground)] sm:text-[1.125rem]">
                  {item.question}
                </span>
              </span>
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-foreground)] transition-all duration-[var(--duration-slow)] ease-[var(--ease-out)]",
                  isOpen &&
                    "rotate-45 bg-[var(--color-foreground)] text-white border-[var(--color-foreground)]",
                )}
              >
                <Add size={18} variant="Linear" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.32,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-12 text-[1rem] leading-relaxed text-[var(--color-muted)]">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
