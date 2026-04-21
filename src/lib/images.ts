/*
 * Centralized image URLs for the preview build.
 *
 * All current placeholders source from Unsplash (free for commercial use,
 * see https://unsplash.com/license). When production photography arrives,
 * swap each `src` here — no other code changes needed.
 *
 * To add a new image source: also whitelist its hostname in next.config.ts
 * under `images.remotePatterns`.
 */

const unsplash = (id: string, params: Record<string, string | number> = {}) => {
  const merged: Record<string, string | number> = {
    auto: "format",
    fit: "crop",
    q: 80,
    ...params,
  };
  const qs = Object.entries(merged)
    .map(([k, v]) => `${k}=${v}`)
    .join("&");
  return `https://images.unsplash.com/photo-${id}?${qs}`;
};

export type PreviewImage = {
  src: string;
  alt: string;
  /** Credit line — kept here so swap-in can preserve attribution if used. */
  credit?: string;
};

export const IMAGES = {
  about: {
    headquartersHero: {
      src: unsplash("1497366216548-37526070297c", { w: 1800, h: 1100 }),
      alt: "Modern European office building exterior — placeholder for the Esna Care office in Utrecht",
      credit: "Photo on Unsplash (placeholder)",
    },
  },
  blog: {
    "gdp-in-practice-what-a-wholesaler-does-every-day": {
      src: unsplash("1554224155-6726b3ff858f", { w: 1200, h: 800 }),
      alt: "Pharmaceutical compliance documentation on a desk",
      credit: "Photo on Unsplash (placeholder)",
    },
    "sourcing-hard-to-find-medicines-without-compromising-compliance": {
      src: unsplash("1587854692152-cbe660dbde88", { w: 1200, h: 800 }),
      alt: "Pharmacy interior shelves",
      credit: "Photo on Unsplash (placeholder)",
    },
    "cold-chain-handling-what-2-to-8-celsius-really-requires": {
      src: unsplash("1576091160399-112ba8d25d1d", { w: 1200, h: 800 }),
      alt: "Laboratory cold-storage equipment",
      credit: "Photo on Unsplash (placeholder)",
    },
    "wda-scope-export-procurement-supply-in-plain-language": {
      src: unsplash("1604881991720-f91add269bed", { w: 1200, h: 800 }),
      alt: "Distribution warehouse interior",
      credit: "Photo on Unsplash (placeholder)",
    },
  },
} as const satisfies {
  about: Record<string, PreviewImage>;
  blog: Record<string, PreviewImage>;
};
