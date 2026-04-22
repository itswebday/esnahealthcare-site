import type { MouseEvent } from "react";

/*
  Click handler factory shared between the flat NavLink and the dropdown
  sublinks. Handles:

    - Pure hash links (`#footer`): smooth-scroll on the current page
    - Cross-page hash links (`/about#contact`): scroll if already on the
      target page, otherwise let the browser navigate normally
    - Plain links: scroll-to-top if clicking the current page

  Optional callbacks let callers run side-effects (e.g. close the mobile
  menu) at the right point in the click pipeline.
*/
export type LinkClickHandlerOptions = {
  onClick?: () => void;
  onNavigate?: () => void;
};

export const createLinkClickHandler = (
  href: string | undefined,
  pathname: string,
  options?: LinkClickHandlerOptions,
) => {
  return (
    event: MouseEvent<
      HTMLAnchorElement | HTMLDivElement,
      globalThis.MouseEvent
    >,
  ) => {
    if (!href) {
      options?.onClick?.();

      return;
    }

    const normalizedPathname =
      pathname === "/" ? "/" : pathname.split("#")[0].replace(/\/$/, "");

    if (href.startsWith("#")) {
      event.preventDefault();
      options?.onClick?.();
      options?.onNavigate?.();

      setTimeout(() => {
        const target = document.querySelector(href);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);

      return;
    }

    if (href.includes("#")) {
      const [pageUrl, hash] = href.split("#");
      const normalizedPageUrl =
        pageUrl === "/" ? "/" : (pageUrl ?? "").replace(/\/$/, "");

      if (!normalizedPageUrl || normalizedPageUrl === normalizedPathname) {
        event.preventDefault();
        options?.onClick?.();
        options?.onNavigate?.();

        setTimeout(() => {
          const target = document.querySelector(`#${hash}`);
          target?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);

        return;
      }

      options?.onNavigate?.();
      options?.onClick?.();

      return;
    }

    const normalizedHref = href === "/" ? "/" : href.replace(/\/$/, "");

    if (normalizedHref === normalizedPathname) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    options?.onNavigate?.();
    options?.onClick?.();
  };
};
