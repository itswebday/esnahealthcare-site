"use client";

import { ArrowDown2 } from "iconsax-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { createLinkClickHandler } from "./linkClickHandler";

export type NavDropdownSubLink = {
  label: string;
  href: string;
};

export type NavDropdownLinkProps = {
  className?: string;
  href: string;
  isActive: boolean;
  label: string;
  subLinks: readonly NavDropdownSubLink[];
};

/*
  Desktop nav dropdown trigger — no background, dot indicator below
  the label that appears on hover and stays visible when active or the
  dropdown is open. Panel reveals on hover with soft corner brackets.
*/
const NavDropdownLink: React.FC<NavDropdownLinkProps> = ({
  className,
  href,
  isActive,
  label,
  subLinks,
}) => {
  const pathname = usePathname() ?? "";
  const [isOpen, setIsOpen] = useState(false);

  const handleLabelClick = createLinkClickHandler(href, pathname);
  const hasDot = isActive || isOpen;

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger */}
      <Link
        className={cn(
          "group duration-normal relative flex h-10 items-center gap-1.5 text-[14px] font-medium tracking-tight transition-colors ease-out",
          hasDot ? "text-foreground" : "text-muted hover:text-foreground",
        )}
        href={href}
        onClick={handleLabelClick}
      >
        <span className="relative">
          {label}
          {/* Dot indicator */}
          <span
            aria-hidden="true"
            className={cn(
              "bg-primary duration-normal pointer-events-none absolute -bottom-1.5 left-1/2 h-[5px] w-[5px] -translate-x-1/2 rounded-full transition-opacity ease-out",
              hasDot ? "opacity-100" : "opacity-0 group-hover:opacity-100",
            )}
          />
        </span>
        <ArrowDown2
          className={cn(
            "duration-slow shrink-0 transition-transform ease-out",
            isOpen && "rotate-180",
          )}
          size={12}
          variant="Linear"
        />
      </Link>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && subLinks.length > 0 && (
          <motion.div
            className="z-raised absolute top-full left-0 min-w-[260px] pt-3"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <span
                aria-hidden="true"
                className="border-primary/60 absolute -top-0.5 -left-0.5 h-3 w-3 rounded-tl-xl border-t-2 border-l-2"
              />
              <span
                aria-hidden="true"
                className="border-accent/60 absolute -top-0.5 -right-0.5 h-3 w-3 rounded-tr-xl border-t-2 border-r-2"
              />
              <span
                aria-hidden="true"
                className="border-accent/60 absolute -bottom-0.5 -left-0.5 h-3 w-3 rounded-bl-xl border-b-2 border-l-2"
              />
              <span
                aria-hidden="true"
                className="border-primary/60 absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-br-xl border-r-2 border-b-2"
              />

              <ul className="border-border shadow-float flex flex-col gap-0.5 overflow-hidden rounded-xl border bg-white p-1.5">
                {subLinks.map((sub) => (
                  <li key={sub.href}>
                    <NavDropdownSubLinkItem
                      href={sub.href}
                      label={sub.label}
                      onNavigate={() => setIsOpen(false)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

type NavDropdownSubLinkItemProps = {
  href: string;
  label: string;
  onNavigate: () => void;
};

const NavDropdownSubLinkItem: React.FC<NavDropdownSubLinkItemProps> = ({
  href,
  label,
  onNavigate,
}) => {
  const pathname = usePathname() ?? "";
  const handleClick = createLinkClickHandler(href, pathname, {
    onNavigate,
  });

  return (
    <Link
      className="group text-muted duration-normal hover:bg-surface-1 hover:text-foreground flex items-center justify-between rounded-lg px-3.5 py-2.5 text-[14px] font-medium transition-colors ease-out"
      href={href}
      onClick={handleClick}
    >
      <span>{label}</span>

      <span
        aria-hidden="true"
        className="bg-border duration-normal group-hover:bg-primary inline-block h-1 w-1 rounded-full transition-colors"
      />
    </Link>
  );
};

export default NavDropdownLink;
