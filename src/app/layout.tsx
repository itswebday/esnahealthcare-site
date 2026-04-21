import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/chrome/Nav";
import { Footer } from "@/components/chrome/Footer";
import { LicenceStrip } from "@/components/ui/LicenceStrip";
import { CookieBanner } from "@/components/chrome/CookieBanner";
import { SITE } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — EU Licensed Pharmaceutical Wholesaler`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "EU pharmaceutical wholesaler",
    "GDP certified wholesaler",
    "pharmaceutical sourcing Europe",
    "medicine export EU",
    "WDA Netherlands",
    "pharma distribution",
    "cold chain pharmaceuticals",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_GB",
    title: `${SITE.name} — Global Pharmaceutical Supply & EU Wholesale`,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Global Pharmaceutical Supply & EU Wholesale`,
    description: SITE.description,
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--color-background)] text-[var(--color-foreground)]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[var(--z-toast)] focus:rounded-full focus:bg-[var(--color-foreground)] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main" className="min-h-[40vh]">
          {children}
        </main>
        <LicenceStrip />
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
