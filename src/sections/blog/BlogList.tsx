import { ArrowRight, Clock } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerChild } from "@/components/ui/Reveal";
import { BLOG_POSTS } from "@/lib/blog";
import { cn } from "@/lib/cn";
import { IMAGES, type PreviewImage } from "@/lib/images";

const formatDate = (iso: string) => {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const BlogList: React.FC = () => {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <Container className="relative" size="xl">
        {featured && (
          <Reveal direction="up">
            <Link
              className="group bg-surface-invert text-on-invert focus-visible:ring-primary focus-visible:ring-offset-background relative flex flex-col gap-10 overflow-hidden rounded-3xl p-8 transition-colors hover:border-white/40 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:p-12 lg:flex-row lg:items-end lg:gap-16 lg:p-16"
              href={`/blog/${featured.slug}`}
              prefetch
            >
              <span
                aria-hidden="true"
                className="bg-primary/20 pointer-events-none absolute -top-20 -left-20 h-56 w-56 rotate-12 rounded-3xl blur-xl"
              />
              <span
                aria-hidden="true"
                className="bg-accent/20 pointer-events-none absolute -right-16 -bottom-16 h-48 w-48 -rotate-6 rounded-3xl blur-xl"
              />
              <div className="relative flex-1">
                <div className="text-on-invert-muted flex flex-wrap items-center gap-3 text-[12px] font-medium tracking-[0.14em] uppercase">
                  <span className="inline-flex h-6 items-center gap-1.5 rounded-xl bg-white/10 px-3 leading-none text-white ring-1 ring-white/20 backdrop-blur">
                    Featured
                  </span>
                  <span>{featured.category}</span>
                  <span className="opacity-50">·</span>
                  <span>{formatDate(featured.publishedOn)}</span>
                </div>
                <h2 className="tracking-display mt-6 max-w-2xl text-[32px] leading-[1.1] font-semibold text-white sm:text-[40px] lg:text-[52px]">
                  {featured.title}
                </h2>
                <p className="text-on-invert-muted mt-4 max-w-xl text-[16px] leading-relaxed sm:text-[17px]">
                  {featured.summary}
                </p>
              </div>
              <div className="relative shrink-0 lg:text-right">
                <div className="text-on-invert-muted flex items-center gap-2 text-[14px] lg:justify-end">
                  <Clock size={14} variant="Linear" />
                  {featured.readingMinutes} min read
                </div>
                <div className="text-foreground mt-6 inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-white bg-white px-8 text-[15px] leading-none font-medium">
                  Read the article
                  <ArrowRight
                    className="duration-normal shrink-0 transition-transform group-hover:translate-x-0.5"
                    size={16}
                    variant="Linear"
                  />
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        <Stagger
          as="ul"
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          delayChildren={0.08}
          staggerChildren={0.08}
        >
          {rest.map((post, idx) => {
            const img: PreviewImage | undefined =
              IMAGES.blog[post.slug as keyof typeof IMAGES.blog];
            const isAccent = idx % 2 === 1;
            const cornerClass = isAccent
              ? "bg-linear-to-br from-accent to-accent-dark"
              : "bg-linear-to-br from-primary to-primary-dark";
            const hoverClass = isAccent
              ? "hover:border-accent/40 hover:shadow-accent/10"
              : "hover:border-primary/40 hover:shadow-primary/10";
            const linkColorClass = isAccent
              ? "text-accent"
              : "text-primary-dark";

            return (
              <StaggerChild key={post.slug} as="li">
                <Link
                  className={cn(
                    "group relative flex h-full flex-col gap-5",
                    "overflow-hidden rounded-3xl p-6",
                    "border-border shadow-hint border bg-white",
                    "duration-slow transition-all hover:shadow-xl",
                    hoverClass,
                    "focus-visible:ring-primary focus-visible:ring-2",
                    "focus-visible:ring-offset-2 focus-visible:outline-none",
                  )}
                  href={`/blog/${post.slug}`}
                  prefetch
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute top-0 right-0 z-10",
                      "h-16 w-16 rounded-bl-3xl",
                      cornerClass,
                    )}
                  />
                  <div className="border-border bg-surface-1 relative h-44 overflow-hidden rounded-xl border">
                    {img && (
                      <Image
                        className="object-cover"
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )}
                  </div>
                  <div className="text-subtle flex flex-wrap items-center gap-2 text-[12px]">
                    <span className="text-primary-dark font-mono tracking-[0.12em] uppercase">
                      {post.heroEyebrow}
                    </span>
                    <span className="opacity-60">·</span>
                    <span>{formatDate(post.publishedOn)}</span>
                    <span className="opacity-60">·</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} variant="Linear" />
                      {post.readingMinutes} min read
                    </span>
                  </div>
                  <h3 className="text-foreground text-[18px] leading-tight font-semibold tracking-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted line-clamp-3 text-[14px] leading-relaxed">
                    {post.summary}
                  </p>
                  <span
                    className={cn(
                      "mt-auto inline-flex items-center gap-1.5",
                      "text-[13px] font-medium",
                      linkColorClass,
                    )}
                  >
                    Read article
                    <ArrowRight
                      className="duration-normal transition-transform group-hover:translate-x-0.5"
                      size={14}
                      variant="Linear"
                    />
                  </span>
                </Link>
              </StaggerChild>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
};
export default BlogList;
