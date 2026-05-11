"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/cn";
import { FOOTER_LEGAL_LINKS, NAV_LINKS, type NavLink } from "@/lib/site";
import NavDropdownLink from "./NavDropdownLink";
import { createLinkClickHandler } from "./linkClickHandler";

const Navigation: React.FC = () => {
  const pathname = usePathname() ?? "";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "duration-slow sticky top-0 w-full pt-4 transition-all ease-out",
        isScrolled && "pt-3",
        isMenuOpen ? "z-max" : "z-sticky",
      )}
    >
      <Container size="xl">
        <div
          className={cn(
            "border-border duration-slow z-max relative flex h-16 items-center justify-between gap-4 rounded-2xl border bg-white px-3 transition-all ease-out",
            isScrolled ? "shadow-island" : "shadow-hint",
          )}
        >
          <div className="flex items-center gap-10 pl-2">
            <Logo variant="color" width={112} />

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-7">
                {NAV_LINKS.filter((link) => link.href !== "/contact").map(
                  (link) => (
                    <li key={link.href}>
                      <DesktopNavItem link={link} pathname={pathname} />
                    </li>
                  ),
                )}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button
              className="hidden sm:inline-flex"
              href="/contact"
              size="md"
              variant="primary"
              hasArrow
            >
              Get in Touch
            </Button>

            <HamburgerButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />
          </div>
        </div>
      </Container>

      <MobileMenu
        isOpen={isMenuOpen}
        pathname={pathname}
        onNavigate={() => setIsMenuOpen(false)}
      />
    </header>
  );
};

type DesktopNavItemProps = {
  link: NavLink;
  pathname: string;
};

const isLinkActive = (link: NavLink, pathname: string): boolean => {
  if (link.href === "/") {
    return pathname === "/";
  }
  if (pathname.startsWith(link.href)) {
    return true;
  }
  return (link.subLinks ?? []).some((sub) => {
    const path = sub.href.split("#")[0];
    return path !== "" && pathname.startsWith(path);
  });
};

const DesktopNavItem: React.FC<DesktopNavItemProps> = ({ link, pathname }) => {
  const isActive = isLinkActive(link, pathname);

  if (link.subLinks && link.subLinks.length > 0) {
    return (
      <NavDropdownLink
        href={link.href}
        isActive={isActive}
        label={link.label}
        subLinks={link.subLinks}
      />
    );
  }

  return (
    <DesktopNavLink href={link.href} isActive={isActive} label={link.label} />
  );
};

type DesktopNavLinkProps = {
  href: string;
  isActive: boolean;
  label: string;
};

const DesktopNavLink: React.FC<DesktopNavLinkProps> = ({
  href,
  isActive,
  label,
}) => {
  const pathname = usePathname() ?? "";
  const handleClick = createLinkClickHandler(href, pathname);

  return (
    <Link
      className={cn(
        "group duration-normal relative flex h-10 items-center text-[14px] font-medium tracking-tight transition-colors ease-out",
        isActive ? "text-foreground" : "text-muted hover:text-foreground",
      )}
      href={href}
      onClick={handleClick}
      prefetch
    >
      <span className="relative">
        {label}
        <span
          aria-hidden="true"
          className={cn(
            "bg-primary duration-normal pointer-events-none absolute -bottom-1.5 left-1/2 h-[5px] w-[5px] -translate-x-1/2 rounded-full transition-opacity ease-out",
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
          )}
        />
      </span>
    </Link>
  );
};

type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <button
      className="border-border text-foreground duration-normal hover:border-primary/60 hover:bg-primary-subtle/40 focus-visible:ring-primary relative inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none lg:hidden"
      type="button"
      aria-controls="mobile-nav"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      onClick={onClick}
    >
      <span className="relative flex h-4 w-[22px] flex-col items-end justify-center gap-[5px]">
        <motion.span
          aria-hidden="true"
          className="absolute top-0 right-0 block h-[2px] rounded-full bg-current"
          animate={
            isOpen
              ? { width: 22, y: 7, x: 0, rotate: 45 }
              : { width: 22, y: 0, x: 0, rotate: 0 }
          }
          transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.span
          aria-hidden="true"
          className="absolute top-1/2 right-0 block h-[2px] -translate-y-1/2 rounded-full bg-current"
          animate={
            isOpen ? { width: 0, opacity: 0 } : { width: 14, opacity: 1 }
          }
          transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.span
          aria-hidden="true"
          className="absolute right-0 bottom-0 block h-[2px] rounded-full bg-current"
          animate={
            isOpen
              ? { width: 22, y: -7, x: 0, rotate: -45 }
              : { width: 18, y: 0, x: 0, rotate: 0 }
          }
          transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
        />
      </span>
    </button>
  );
};

type MobileMenuProps = {
  isOpen: boolean;
  pathname: string;
  onNavigate: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  pathname,
  onNavigate,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-nav"
          className="z-drawer fixed inset-0 bg-white lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div aria-hidden="true" className="h-20" />
          <div className="mx-auto flex h-[calc(100dvh-5rem)] w-full max-w-[640px] flex-col px-6">
            <nav
              aria-label="Mobile"
              className="flex flex-1 flex-col overflow-y-auto pt-4 pb-6"
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <MobileNavItem
                      link={link}
                      pathname={pathname}
                      onNavigate={onNavigate}
                    />
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-border flex flex-col gap-4 border-t py-6">
              <Button
                className="w-full"
                href="/contact"
                size="lg"
                variant="primary"
                hasArrow
              >
                Get in Touch
              </Button>
              <ul className="text-subtle flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px]">
                {FOOTER_LEGAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="hover:text-foreground transition-colors"
                      href={link.href}
                      onClick={onNavigate}
                      prefetch
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

type MobileNavItemProps = {
  link: NavLink;
  pathname: string;
  onNavigate: () => void;
};

const MobileNavItem: React.FC<MobileNavItemProps> = ({
  link,
  pathname,
  onNavigate,
}) => {
  const isActive = isLinkActive(link, pathname);
  const hasSubLinks = (link.subLinks?.length ?? 0) > 0;

  return (
    <div className="flex flex-col">
      <MobileNavLink
        href={link.href}
        isActive={isActive}
        label={link.label}
        onNavigate={onNavigate}
      />

      {hasSubLinks && (
        <ul className="border-border mt-0.5 mb-1 flex flex-col gap-0.5 border-l pl-4">
          {link.subLinks!.map((sub) => (
            <li key={sub.href}>
              <MobileSubLink
                href={sub.href}
                label={sub.label}
                onNavigate={onNavigate}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

type MobileNavLinkProps = {
  href: string;
  isActive: boolean;
  label: string;
  onNavigate: () => void;
};

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  href,
  isActive,
  label,
  onNavigate,
}) => {
  const pathname = usePathname() ?? "";
  const handleClick = createLinkClickHandler(href, pathname, { onNavigate });

  return (
    <Link
      className={cn(
        "duration-normal block rounded-xl px-4 py-3 text-[18px] font-medium transition-colors",
        isActive
          ? "bg-primary-subtle text-primary-dark"
          : "text-foreground hover:bg-surface-1",
      )}
      href={href}
      onClick={handleClick}
      prefetch
    >
      {label}
    </Link>
  );
};

type MobileSubLinkProps = {
  href: string;
  label: string;
  onNavigate: () => void;
};

const MobileSubLink: React.FC<MobileSubLinkProps> = ({
  href,
  label,
  onNavigate,
}) => {
  const pathname = usePathname() ?? "";
  const handleClick = createLinkClickHandler(href, pathname, { onNavigate });

  return (
    <Link
      className="text-muted hover:bg-surface-1 hover:text-foreground duration-normal block rounded-lg px-3.5 py-2 text-[15px] font-medium transition-colors"
      href={href}
      onClick={handleClick}
      prefetch
    >
      {label}
    </Link>
  );
};

export default Navigation;
