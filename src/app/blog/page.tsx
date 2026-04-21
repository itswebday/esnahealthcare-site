import type { Metadata } from "next";
import { PageHero } from "@/sections/shared/PageHero";
import { BlogList } from "@/sections/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on compliance, sourcing, cold-chain handling, and regulatory framework from the Esna Care editorial team.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Editorial"
        title="Notes from a licensed wholesaler."
        description="Short, specific pieces on compliance, sourcing, and the everyday discipline behind pharmaceutical distribution."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        size="sm"
      />
      <BlogList />
    </>
  );
}
