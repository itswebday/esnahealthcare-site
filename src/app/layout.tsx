import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/chrome/CookieBanner";
import Footer from "@/components/chrome/Footer";
import Navigation from "@/components/chrome/Navigation";
import LicenceStrip from "@/components/ui/LicenceStrip";
import { cn } from "@/lib/cn";
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

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html
      className={cn(
        "h-full antialiased",
        geistSans.variable,
        geistMono.variable,
      )}
      lang="en"
    >
      <body className="bg-background text-foreground min-h-full">
        <a
          className="focus:z-toast focus:bg-foreground sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:rounded-full focus:px-4 focus:py-2 focus:text-white"
          href="#main"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main" className="min-h-[40vh]">
          {children}
        </main>
        <LicenceStrip />
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
};

export default RootLayout;
