"use client";

import { ArrowLeft2, ArrowRight, Clock } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { BLOG_POSTS } from "@/lib/blog";
import { IMAGES, type PreviewImage } from "@/lib/images";
import { cn } from "@/lib/cn";

const formatDate = (iso: string) => {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const FeaturedBlog: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    const firstCard = scroller.querySelector<HTMLElement>("[data-blog-card]");
    const cardWidth = firstCard?.offsetWidth ?? scroller.clientWidth * 0.8;
    const gap = 20;

    scroller.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal direction="up">
            <SectionHeader
              description="Plain-language notes on compliance, sourcing, cold-chain handling, and what licensed wholesale actually looks like day to day."
              eyebrow="Insights"
              size="md"
              title="From the Esna Care blog."
            />
          </Reveal>

          <Reveal delay={0.08} direction="up">
            <div className="flex items-center gap-3">
              <Link
                className="group text-primary-dark hover:text-primary inline-flex items-center gap-1.5 text-[14px] font-medium transition-colors"
                href="/blog"
                prefetch
              >
                View all articles
                <ArrowRight
                  className="transition-transform group-hover:translate-x-0.5"
                  size={14}
                  variant="Linear"
                />
              </Link>

              <div className="flex items-center gap-2">
                <SliderButton
                  ariaLabel="Previous article"
                  onClick={() => scrollByCard(-1)}
                >
                  <ArrowLeft2 size={16} variant="Linear" />
                </SliderButton>
                <SliderButton
                  ariaLabel="Next article"
                  onClick={() => scrollByCard(1)}
                >
                  <ArrowRight size={16} variant="Linear" />
                </SliderButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      <Reveal className="mt-12" direction="up" delay={0.14}>
        <div
          ref={scrollerRef}
          aria-label="Featured blog posts"
          aria-roledescription="carousel"
          className="flex snap-x snap-mandatory scroll-pl-[max(1.5rem,calc(50vw-38.5rem))] gap-5 overflow-x-auto scroll-smooth pt-2 pr-[max(1.5rem,calc(50vw-38.5rem))] pb-8 pl-[max(1.5rem,calc(50vw-38.5rem))] [scrollbar-width:none] sm:scroll-pl-[max(2rem,calc(50vw-38rem))] sm:pr-[max(2rem,calc(50vw-38rem))] sm:pl-[max(2rem,calc(50vw-38rem))] lg:scroll-pl-[max(2.5rem,calc(50vw-37.5rem))] lg:pr-[max(2.5rem,calc(50vw-37.5rem))] lg:pl-[max(2.5rem,calc(50vw-37.5rem))] [&::-webkit-scrollbar]:hidden"
        >
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Reveal>
    </section>
  );
};

type BlogCardProps = {
  post: (typeof BLOG_POSTS)[number];
};

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const image: PreviewImage | undefined =
    IMAGES.blog[post.slug as keyof typeof IMAGES.blog];

  return (
    <article
      data-blog-card
      className="group border-border shadow-hint duration-slow hover:border-primary/40 hover:shadow-lift relative flex w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border bg-white transition-all sm:w-[360px] lg:w-[400px]"
    >
      <Link
        className="flex h-full flex-col"
        href={`/blog/${post.slug}`}
        prefetch
      >
        {/* Image */}
        <div className="border-border bg-surface-1 relative aspect-[16/10] w-full overflow-hidden border-b">
          {image && (
            <Image
              className="object-cover"
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 400px"
            />
          )}
          {/* Category pill */}
          <span className="border-primary/40 text-primary-dark absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-lg border bg-white/90 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.16em] uppercase sm:backdrop-blur">
            <span className="bg-primary h-1 w-1 rounded-full" />
            {post.category}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="text-subtle flex items-center gap-2 text-[12px]">
            <span>{formatDate(post.publishedOn)}</span>
            <span className="opacity-50">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} variant="Linear" />
              {post.readingMinutes} min read
            </span>
          </div>
          <h3 className="text-foreground text-[18px] leading-[1.25] font-semibold tracking-tight">
            {post.title}
          </h3>
          <p className="text-muted line-clamp-3 text-[14px] leading-relaxed">
            {post.summary}
          </p>
          <span className="text-primary-dark mt-auto inline-flex items-center gap-1.5 pt-2 text-[13px] font-medium">
            Read article
            <ArrowRight
              className="transition-transform group-hover:translate-x-0.5"
              size={14}
              variant="Linear"
            />
          </span>
        </div>
      </Link>
    </article>
  );
};

type SliderButtonProps = {
  ariaLabel: string;
  children: React.ReactNode;
  onClick: () => void;
};

const SliderButton: React.FC<SliderButtonProps> = ({
  ariaLabel,
  children,
  onClick,
}) => {
  return (
    <button
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-xl",
        "border-border text-foreground border bg-white",
        "duration-normal transition-colors",
        "hover:border-primary/60 hover:bg-primary-subtle/40",
        "focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
      )}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FeaturedBlog;
