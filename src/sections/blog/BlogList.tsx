import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerChild } from "@/components/ui/Reveal";
import { BLOG_POSTS } from "@/lib/blog";
import { IMAGES, type PreviewImage } from "@/lib/images";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function BlogList() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        {featured && (
          <Reveal direction="up">
            <Link
              href={`/blog/${featured.slug}`}
              className="group relative flex flex-col gap-10 overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border-invert-strong)] bg-[var(--color-surface-invert)] p-8 text-[var(--color-on-invert)] transition-colors hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] sm:p-12 lg:flex-row lg:items-end lg:gap-16 lg:p-16"
            >
              <div className="relative flex-1">
                <div className="flex flex-wrap items-center gap-3 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-on-invert-muted)]">
                  <span className="inline-flex h-6 items-center gap-1.5 rounded-full bg-white/10 px-3 leading-none text-white">
                    Featured
                  </span>
                  <span>{featured.category}</span>
                  <span className="opacity-50">·</span>
                  <span>{formatDate(featured.publishedOn)}</span>
                </div>
                <h2 className="mt-6 max-w-2xl text-[1.8rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-[2.4rem] lg:text-[3rem]">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-[var(--color-on-invert-muted)] sm:text-[1.05rem]">
                  {featured.summary}
                </p>
              </div>
              <div className="relative shrink-0 lg:text-right">
                <div className="flex items-center gap-2 text-sm text-[var(--color-on-invert-muted)] lg:justify-end">
                  <Clock size={14} variant="Linear" />
                  {featured.readingMinutes} min read
                </div>
                <div className="mt-6 inline-flex h-14 items-center justify-center gap-2 rounded-[var(--radius-2xl)] border-2 border-white bg-white px-8 text-sm font-medium leading-none text-[var(--color-foreground)]">
                  Read the article
                  <ArrowRight
                    size={16}
                    variant="Linear"
                    className="shrink-0 transition-transform group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        <Stagger
          as="ul"
          staggerChildren={0.08}
          delayChildren={0.08}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {rest.map((post) => (
            <StaggerChild key={post.slug} as="li">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col gap-5 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-6 transition-all duration-[var(--duration-slow)] hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-lift)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
              >
                <div className="relative h-44 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-1)]">
                  {(() => {
                    const img: PreviewImage | undefined =
                      IMAGES.blog[post.slug as keyof typeof IMAGES.blog];
                    return img ? (
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    ) : null;
                  })()}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-1 bg-[var(--color-primary)]"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[0.78rem] text-[var(--color-subtle)]">
                  <span className="font-mono uppercase tracking-[0.12em] text-[var(--color-primary-dark)]">
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
                <h3 className="text-[1.15rem] font-semibold leading-[1.2] tracking-[-0.014em] text-[var(--color-foreground)]">
                  {post.title}
                </h3>
                <p className="line-clamp-3 text-[0.95rem] leading-relaxed text-[var(--color-muted)]">
                  {post.summary}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary-dark)]">
                  Read article
                  <ArrowRight
                    size={14}
                    variant="Linear"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </StaggerChild>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
