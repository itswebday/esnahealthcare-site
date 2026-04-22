"use client";

import { Add } from "iconsax-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/cn";

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: string;
};

export type AccordionItem = {
  key: string;
  question: React.ReactNode;
  answer: React.ReactNode;
  badge?: string;
};

const Accordion: React.FC<AccordionProps> = ({
  items,
  className,
  defaultOpen,
}) => {
  const [activeKey, setActiveKey] = useState<string | null>(
    defaultOpen ?? null,
  );

  return (
    <div
      className={cn("divide-border border-border divide-y border-y", className)}
    >
      {items.map((item) => {
        const isOpen = activeKey === item.key;

        return (
          <div key={item.key} className="py-1">
            <button
              aria-expanded={isOpen}
              className={cn(
                "group flex w-full items-center justify-between gap-6",
                "rounded-sm py-6 text-left",
                "duration-normal transition-colors",
                "hover:text-primary-dark",
                "focus-visible:ring-primary focus-visible:ring-offset-background",
                "focus-visible:ring-2 focus-visible:ring-offset-4",
                "focus-visible:outline-none",
              )}
              type="button"
              onClick={() => setActiveKey(isOpen ? null : item.key)}
            >
              <span className="flex flex-1 items-start gap-4">
                {item.badge && (
                  <span className="bg-primary-subtle text-primary-dark mt-1 inline-flex h-6 items-center rounded-full px-2.5 text-[11px] font-medium tracking-[0.1em] uppercase">
                    {item.badge}
                  </span>
                )}
                <span className="text-foreground text-[17px] leading-snug font-medium sm:text-[18px]">
                  {item.question}
                </span>
              </span>
              <span
                className={cn(
                  "border-border bg-background text-foreground",
                  "flex h-9 w-9 shrink-0 items-center justify-center",
                  "rounded-full border",
                  "duration-slow transition-all ease-[var(--ease-out)]",
                  isOpen &&
                    "border-foreground bg-foreground text-background rotate-45",
                )}
              >
                <Add size={18} variant="Linear" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  animate={{ height: "auto", opacity: 1 }}
                  className="overflow-hidden"
                  exit={{ height: 0, opacity: 0 }}
                  initial={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.32,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="text-muted pr-12 pb-6 text-[16px] leading-relaxed">
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
};

export default Accordion;
