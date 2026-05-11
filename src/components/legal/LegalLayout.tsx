import Container from "@/components/ui/Container";

type LegalLayoutProps = {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
};

const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  lastUpdated,
  children,
}) => {
  return (
    <section className="pt-12 pb-24 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32">
      <Container size="md">
        <header className="border-border border-b pb-8">
          <span className="text-primary-dark inline-flex items-center gap-2 text-[12.5px] font-medium tracking-[0.14em] uppercase">
            <span className="bg-primary h-px w-6" />
            Legal
          </span>
          <h1 className="tracking-display text-foreground mt-4 text-[40px] leading-[1.08] font-semibold sm:text-[48px]">
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-subtle mt-3 text-[14px]">
              Last updated: <span className="font-mono">{lastUpdated}</span>
            </p>
          )}
        </header>
        <div className="prose-legal mt-10 max-w-none">{children}</div>
      </Container>
    </section>
  );
};

export default LegalLayout;
