import { Container } from "@/components/ui/Container";

type LegalLayoutProps = {
  title: string;
  lastUpdated: string;
  draftNote?: string;
  children: React.ReactNode;
};

export function LegalLayout({
  title,
  lastUpdated,
  draftNote,
  children,
}: LegalLayoutProps) {
  return (
    <section className="pt-12 pb-24 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32">
      <Container size="md">
        <header className="border-b border-[var(--color-border)] pb-8">
          <span className="inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
            <span className="h-px w-6 bg-[var(--color-primary)]" />
            Legal
          </span>
          <h1 className="mt-4 text-[2.5rem] font-semibold leading-[1.08] tracking-[var(--tracking-display)] text-[var(--color-foreground)] sm:text-[3rem]">
            {title}
          </h1>
          <p className="mt-3 text-sm text-[var(--color-subtle)]">
            Last updated: <span className="font-mono">{lastUpdated}</span>
          </p>
        </header>
        {draftNote && (
          <div className="mt-8 rounded-[var(--radius-md)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-2)]/60 p-4 font-mono text-[0.82rem] leading-relaxed text-[var(--color-subtle)]">
            {"{"} {draftNote} {"}"}
          </div>
        )}
        <div className="prose-legal mt-10 max-w-none">{children}</div>
      </Container>
    </section>
  );
}
