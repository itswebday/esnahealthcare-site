import Link from "next/link";
import { ArrowLeft2, ArrowRight, Clock, User } from "iconsax-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { type BlogPost, getAdjacentPosts } from "@/lib/blog";

type BlogPostBodyProps = { post: BlogPost };

const formatDate = (iso: string) => {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const BlogPostBody: React.FC<BlogPostBodyProps> = ({ post }) => {
  const { previous, next } = getAdjacentPosts(post.slug);
  return (
    <article>
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
        <BlogHeroBackdrop />

        <Container size="md">
          <Link
            className="group text-subtle hover:text-foreground inline-flex items-center gap-1.5 text-[14px] font-medium transition-colors"
            href="/blog"
          >
            <ArrowLeft2 size={16} variant="Linear" />
            Back to all articles
          </Link>
          <Reveal direction="up">
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[12px] font-medium tracking-[0.14em] uppercase">
              <span className="border-primary/40 bg-primary-subtle text-primary-dark inline-flex items-center gap-2 rounded-xl border px-3 py-1">
                <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                {post.category}
              </span>
              <span className="text-muted">{formatDate(post.publishedOn)}</span>
            </div>
          </Reveal>
          <Reveal delay={0.06} direction="up">
            <h1 className="tracking-display text-foreground mt-6 text-[40px] leading-[1.04] font-semibold sm:text-[48px] lg:text-[56px]">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12} direction="up">
            <p className="text-muted mt-5 text-[18px] leading-relaxed sm:text-[20px]">
              {post.summary}
            </p>
          </Reveal>
          <Reveal delay={0.18} direction="up">
            <div className="border-border text-subtle mt-8 flex flex-wrap items-center gap-5 border-t pt-6 text-[14px]">
              <span className="inline-flex items-center gap-2">
                <User size={16} variant="Linear" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={14} variant="Linear" />
                {post.readingMinutes} min read
              </span>
              {post.draft && (
                <span className="bg-surface-2 text-subtle inline-flex items-center gap-2 rounded-lg px-3 py-1 font-mono text-[11px] tracking-[0.14em] uppercase">
                  Draft — pending editorial review
                </span>
              )}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24 lg:pb-28">
        <Container size="md">
          <div className="text-foreground flex flex-col gap-6 text-[17px] leading-[1.75]">
            {post.body.map((block, idx) => {
              if (block.type === "paragraph") {
                return (
                  <p key={idx} className="text-muted">
                    {block.text}
                  </p>
                );
              }
              if (block.type === "heading") {
                return (
                  <h2
                    key={idx}
                    className="text-foreground mt-6 text-[22px] font-semibold tracking-tight sm:text-[26px]"
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
                        className="text-foreground flex items-start gap-3 text-[16px] leading-relaxed"
                      >
                        <span className="bg-primary mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                        <span className="text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={idx}
                    className="border-border border-l-primary shadow-hint relative my-4 overflow-hidden rounded-2xl border border-l-4 bg-white p-6"
                  >
                    <p className="text-foreground text-[20px] leading-[1.45] font-medium tracking-tight sm:text-[22px]">
                      &ldquo;{block.text}&rdquo;
                    </p>
                    {block.attribution && (
                      <footer className="text-subtle mt-3 text-[12px] font-medium tracking-[0.14em] uppercase">
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
        <section className="border-border border-t py-14 sm:py-16">
          <Container size="md">
            <div className="grid gap-3 sm:grid-cols-2">
              {previous ? (
                <Link
                  className="group duration-slow border-border shadow-hint hover:border-primary/40 hover:shadow-primary/10 flex flex-col gap-2 rounded-2xl border bg-white p-5 transition-all hover:shadow-lg"
                  href={`/blog/${previous.slug}`}
                >
                  <span className="text-subtle inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.14em] uppercase">
                    <ArrowLeft2 size={14} variant="Linear" />
                    Previous
                  </span>
                  <span className="text-foreground text-[15px] leading-tight font-medium">
                    {previous.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  className="group duration-slow border-border shadow-hint hover:border-accent/40 hover:shadow-accent/10 flex flex-col gap-2 rounded-2xl border bg-white p-5 text-right transition-all hover:shadow-lg sm:items-end"
                  href={`/blog/${next.slug}`}
                >
                  <span className="text-subtle inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.14em] uppercase">
                    Next
                    <ArrowRight size={14} variant="Linear" />
                  </span>
                  <span className="text-foreground text-[15px] leading-tight font-medium">
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
};

const BlogHeroBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-primary/12 absolute top-0 -left-24 h-[480px] w-[480px] rounded-full blur-[110px]" />
      <div className="bg-accent/12 absolute top-0 -right-24 h-[480px] w-[480px] rounded-full blur-[110px]" />
    </div>
  );
};

export default BlogPostBody;
