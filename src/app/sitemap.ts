import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/products",
    "/compliance",
    "/we-buy-medicines",
    "/contact",
    "/faq",
    "/blog",
    "/privacy-policy",
    "/cookie-policy",
    "/terms-and-conditions",
  ];
  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE.url}/blog/${post.slug}`,
      lastModified: new Date(post.publishedOn),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
