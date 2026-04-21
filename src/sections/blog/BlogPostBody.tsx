import Link from "next/link";
import { ArrowRight, ArrowLeft2, Clock, User } from "iconsax-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { type BlogPost, getAdjacentPosts } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogPostBody({ post }: { post: BlogPost }) {
  const { previous, next } = getAdjacentPosts(post.slug);
  return (
    <article>
      <section className="relative overflow-hidden border-b border-[var(--color-border)] pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
        <Container size="md">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-subtle)] transition-colors hover:text-[var(--color-foreground)]"
          >
            <ArrowLeft2 size={16} variant="Linear" />
            Back to all articles
          </Link>
          <Reveal direction="up">
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
              <span className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[var(--color-primary)]" />
                {post.category}
              </span>
              <span className="text-[var(--color-faint)]">·</span>
              <span className="text-[var(--color-muted)]">
                {formatDate(post.publishedOn)}
              </span>
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.06}>
            <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.04] tracking-[var(--tracking-display)] text-[var(--color-foreground)] sm:text-[3rem] lg:text-[3.5rem]">
              {post.title}
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.12}>
            <p className="mt-5 text-[1.1rem] leading-relaxed text-[var(--color-muted)] sm:text-[1.2rem]">
              {post.summary}
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-subtle)]">
              <span className="inline-flex items-center gap-2">
                <User size={16} variant="Linear" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={14} variant="Linear" />
                {post.readingMinutes} min read
              </span>
              {post.draft && (
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-surface-2)] px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                  Draft — pending editorial review
                </span>
              )}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24 lg:pb-28">
        <Container size="md">
          <div className="flex flex-col gap-6 text-[1.075rem] leading-[1.75] text-[var(--color-foreground)]">
            {post.body.map((block, idx) => {
              if (block.type === "paragraph") {
                return (
                  <p key={idx} className="text-[var(--color-muted)]">
                    {block.text}
                  </p>
                );
              }
              if (block.type === "heading") {
                return (
                  <h2
                    key={idx}
                    className="mt-6 text-[1.45rem] font-semibold tracking-[-0.018em] text-[var(--color-foreground)] sm:text-[1.65rem]"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={idx} className="space-y-3 pl-0">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[1rem] leading-relaxed text-[var(--color-foreground)]"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                        <span className="text-[var(--color-muted)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={idx}
                    className="my-4 border-l-2 border-[var(--color-primary)] pl-6"
                  >
                    <p className="text-[1.2rem] font-medium leading-[1.45] tracking-[-0.012em] text-[var(--color-foreground)] sm:text-[1.35rem]">
                      &ldquo;{block.text}&rdquo;
                    </p>
                    {block.attribution && (
                      <footer className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                        — {block.attribution}
                      </footer>
                    )}
                  </blockquote>
                );
              }
              return null;
            })}
          </div>
        </Container>
      </section>

      {(previous || next) && (
        <section className="border-t border-[var(--color-border)] py-14 sm:py-16">
          <Container size="md">
            <div className="grid gap-3 sm:grid-cols-2">
              {previous ? (
                <Link
                  href={`/blog/${previous.slug}`}
                  className="group flex flex-col gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-5 transition-colors hover:border-[var(--color-border-strong)]"
                >
                  <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                    <ArrowLeft2 size={14} variant="Linear" />
                    Previous
                  </span>
                  <span className="text-[1rem] font-medium leading-tight text-[var(--color-foreground)]">
                    {previous.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  href={`/blog/${next.slug}`}
                  className="group flex flex-col gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-5 text-right transition-colors hover:border-[var(--color-border-strong)] sm:items-end"
                >
                  <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                    Next
                    <ArrowRight size={14} variant="Linear" />
                  </span>
                  <span className="text-[1rem] font-medium leading-tight text-[var(--color-foreground)]">
                    {next.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </Container>
        </section>
      )}
    </article>
  );
}
