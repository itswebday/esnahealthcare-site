import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostBody from "@/sections/blog/BlogPostBody";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = async () => {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
};

export const generateMetadata = async ({
  params,
}: BlogPostPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Article not found" };
  }
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedOn,
      authors: [post.author],
    },
  };
};

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }
  return <BlogPostBody post={post} />;
};

export default BlogPostPage;
