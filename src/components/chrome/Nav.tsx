"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HambergerMenu, CloseSquare, ArrowRight } from "iconsax-react";
import { cn } from "@/lib/cn";
import { NAV_LINKS } from "@/lib/site";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-[var(--z-sticky)] w-full transition-all duration-[var(--duration-slow)] ease-[var(--ease-out)]",
        scrolled
          ? "border-b border-[var(--color-border)] bg-white/80 backdrop-blur-xl"
          : "border-b border-transparent bg-white/0",
      )}
    >
      <Container size="xl">
        <div className="flex h-16 items-center justify-between gap-6 lg:h-20">
          <div className="flex items-center gap-12">
            <Logo variant="color" width={118} />
            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "relative flex h-10 items-center rounded-full px-3.5 text-[0.92rem] font-medium transition-colors duration-[var(--duration-normal)] ease-[var(--ease-out)]",
                          isActive
                            ? "text-[var(--color-foreground)]"
                            : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]",
                        )}
                      >
                        {link.label}
                        {isActive && (
                          <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-[var(--color-primary)]" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              withArrow
              className="hidden sm:inline-flex"
            >
              Get in Touch
            </Button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-surface-1)] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? (
                <CloseSquare size={20} variant="Linear" />
              ) : (
                <HambergerMenu size={20} variant="Linear" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-[var(--z-drawer)] origin-top overflow-hidden bg-white transition-all duration-[var(--duration-slow)] ease-[var(--ease-out)] lg:hidden",
          open
            ? "max-h-[calc(100vh-4rem)] border-b border-[var(--color-border)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <Container size="xl">
          <nav aria-label="Mobile" className="flex flex-col gap-1 py-6">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group flex items-center justify-between rounded-[var(--radius-md)] px-4 py-3.5 text-[1.05rem] font-medium transition-colors",
                    isActive
                      ? "bg-[var(--color-primary-subtle)] text-[var(--color-primary-dark)]"
                      : "text-[var(--color-foreground)] hover:bg-[var(--color-surface-1)]",
                  )}
                >
                  {link.label}
                  <ArrowRight
                    size={18}
                    variant="Linear"
                    className="text-[var(--color-subtle)] transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              );
            })}
            <div className="my-3 h-px bg-[var(--color-border)]" />
            <Link
              href="/we-buy-medicines"
              className="flex items-center justify-between rounded-[var(--radius-md)] px-4 py-3.5 text-[0.95rem] font-medium text-[var(--color-muted)] hover:bg-[var(--color-surface-1)] hover:text-[var(--color-foreground)]"
            >
              We Buy Medicines
              <ArrowRight
                size={16}
                variant="Linear"
                className="text-[var(--color-subtle)]"
              />
            </Link>
            <Link
              href="/faq"
              className="flex items-center justify-between rounded-[var(--radius-md)] px-4 py-3.5 text-[0.95rem] font-medium text-[var(--color-muted)] hover:bg-[var(--color-surface-1)] hover:text-[var(--color-foreground)]"
            >
              FAQ
              <ArrowRight
                size={16}
                variant="Linear"
                className="text-[var(--color-subtle)]"
              />
            </Link>
            <div className="mt-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                withArrow
                className="w-full"
              >
                Get in Touch
              </Button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
