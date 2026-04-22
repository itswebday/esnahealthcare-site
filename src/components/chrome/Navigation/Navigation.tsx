"use client";

import { Global } from "iconsax-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { NAV_LINKS, type NavLink } from "@/lib/site";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Logo from "../../ui/Logo";
import NavDropdownLink from "./NavDropdownLink";
import { createLinkClickHandler } from "./linkClickHandler";

type Locale = "EN" | "NL";

const Navigation: React.FC = () => {
  const pathname = usePathname() ?? "";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [locale, setLocale] = useState<Locale>("EN");

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
        // Keep the header above the full-screen mobile menu so the
        // hamburger / logo stay visible and interactive while it's open.
        isMenuOpen ? "z-max" : "z-sticky",
      )}
    >
      <Container size="xl">
        {/* Floating island */}
        <div
          className={cn(
            "border-border duration-slow flex h-16 items-center justify-between gap-4 rounded-2xl border bg-white px-3 transition-all ease-out",
            isScrolled ? "shadow-island" : "shadow-hint",
          )}
        >
          {/* Logo + primary links (desktop) */}
          <div className="flex items-center gap-10 pl-2">
            <Logo variant="color" width={112} />

            {/* Primary links (desktop) */}
            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-9">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <DesktopNavItem link={link} pathname={pathname} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Actions (locale + CTA + hamburger) */}
          <div className="flex items-center gap-3">
            <LocaleToggle locale={locale} onChange={setLocale} />

            {/* CTA */}
            <Button
              className="hidden sm:inline-flex"
              href="/contact"
              size="md"
              variant="primary"
              withArrow
            >
              Get in Touch
            </Button>

            {/* Hamburger (mobile) */}
            <HamburgerButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />
          </div>
        </div>
      </Container>

      {/* Full-screen mobile menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        locale={locale}
        pathname={pathname}
        onLocaleChange={setLocale}
        onNavigate={() => setIsMenuOpen(false)}
      />
    </header>
  );
};

type DesktopNavItemProps = {
  link: NavLink;
  pathname: string;
};

const DesktopNavItem: React.FC<DesktopNavItemProps> = ({ link, pathname }) => {
  const isActive =
    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

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
    >
      <span className="relative">
        {label}
        {/* Dot indicator — appears on hover, always visible when active */}
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

type LocaleToggleProps = {
  className?: string;
  locale: Locale;
  onChange: (next: Locale) => void;
};

const LocaleToggle: React.FC<LocaleToggleProps> = ({
  className,
  locale,
  onChange,
}) => {
  return (
    <div
      className={cn(
        "border-border duration-normal hover:border-border-strong flex h-10 items-center gap-0.5 rounded-xl border bg-white p-1 transition-colors",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <Global
        className="text-subtle mx-1.5 shrink-0"
        size={12}
        variant="Linear"
      />
      <LocaleSegment
        isActive={locale === "EN"}
        label="EN"
        onClick={() => onChange("EN")}
      />
      <LocaleSegment
        isActive={locale === "NL"}
        label="NL"
        onClick={() => onChange("NL")}
      />
    </div>
  );
};

type LocaleSegmentProps = {
  isActive: boolean;
  label: string;
  onClick: () => void;
};

const LocaleSegment: React.FC<LocaleSegmentProps> = ({
  isActive,
  label,
  onClick,
}) => {
  return (
    <button
      className={cn(
        "duration-normal relative flex h-7 items-center justify-center rounded-lg px-2.5 text-[11px] font-semibold tracking-[0.1em] uppercase transition-all",
        isActive
          ? "bg-primary text-primary-foreground shadow-hint"
          : "text-muted hover:text-foreground",
      )}
      type="button"
      aria-pressed={isActive}
      onClick={onClick}
    >
      {label}
    </button>
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
  locale: Locale;
  pathname: string;
  onLocaleChange: (next: Locale) => void;
  onNavigate: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  locale,
  pathname,
  onLocaleChange,
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
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Spacer that matches the floating nav height so content clears it */}
          <div aria-hidden="true" className="h-20" />

          {/* Scrollable content column */}
          <div className="mx-auto flex h-[calc(100%-5rem)] w-full max-w-[640px] flex-col px-6">
            <nav
              aria-label="Mobile"
              className="flex flex-1 flex-col overflow-y-auto pt-2 pb-6"
            >
              {/* Primary links */}
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

              {/* Divider */}
              <div aria-hidden="true" className="bg-border my-5 h-px" />

              {/* Secondary links */}
              <ul className="flex flex-col gap-1">
                <li>
                  <MobileNavLink
                    href="/we-buy-medicines"
                    isActive={pathname.startsWith("/we-buy-medicines")}
                    isSecondary
                    label="We Buy Medicines"
                    onNavigate={onNavigate}
                  />
                </li>
                <li>
                  <MobileNavLink
                    href="/faq"
                    isActive={pathname.startsWith("/faq")}
                    isSecondary
                    label="FAQ"
                    onNavigate={onNavigate}
                  />
                </li>
                <li>
                  <MobileNavLink
                    href="/contact"
                    isActive={pathname.startsWith("/contact")}
                    isSecondary
                    label="Contact"
                    onNavigate={onNavigate}
                  />
                </li>
              </ul>
            </nav>

            {/* Footer — locale + CTA sticks at bottom of column */}
            <div className="border-border flex flex-col gap-3 border-t py-6">
              <LocaleToggle
                className="self-start"
                locale={locale}
                onChange={onLocaleChange}
              />
              <Button
                className="w-full"
                href="/contact"
                size="lg"
                variant="primary"
                withArrow
              >
                Get in Touch
              </Button>
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
  const isActive =
    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
  const hasSubLinks = (link.subLinks?.length ?? 0) > 0;

  return (
    <div className="flex flex-col">
      <MobileNavLink
        href={link.href}
        isActive={isActive}
        label={link.label}
        onNavigate={onNavigate}
      />

      {/* Sublinks (indented) */}
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
  isSecondary?: boolean;
  label: string;
  onNavigate: () => void;
};

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  href,
  isActive,
  isSecondary = false,
  label,
  onNavigate,
}) => {
  const pathname = usePathname() ?? "";
  const handleClick = createLinkClickHandler(href, pathname, { onNavigate });

  return (
    <Link
      className={cn(
        "duration-normal block rounded-xl px-4 py-3 font-medium transition-colors",
        isSecondary ? "text-[16px]" : "text-[18px]",
        isActive
          ? "bg-primary-subtle text-primary-dark"
          : isSecondary
            ? "text-muted hover:bg-surface-1 hover:text-foreground"
            : "text-foreground hover:bg-surface-1",
      )}
      href={href}
      onClick={handleClick}
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
    >
      {label}
    </Link>
  );
};

export default Navigation;
