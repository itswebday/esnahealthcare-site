import { ArrowLeft2 } from "iconsax-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const NotFound: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-0 left-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(46,139,53,0.14)_0%,transparent_55%)] blur-3xl" />
        <div className="absolute top-0 right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(13,79,140,0.14)_0%,transparent_55%)] blur-3xl" />
      </div>
      <Container size="md">
        <div className="flex flex-col items-center text-center">
          <span className="text-subtle font-mono text-[12px] tracking-[0.2em] uppercase">
            Error 404
          </span>
          <h1 className="tracking-display text-foreground mt-5 text-[40px] leading-[1.05] font-semibold sm:text-[52px]">
            Page not found.
          </h1>
          <p className="text-muted mt-5 max-w-lg text-[16px] leading-relaxed">
            The page you were looking for isn&rsquo;t here — it may have moved,
            or the link was mistyped. Head back home or explore our compliance
            documentation.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="/" variant="primary" size="lg">
              <ArrowLeft2 size={16} variant="Linear" className="shrink-0" />
              Back to home
            </Button>
            <Button href="/compliance" variant="outline" size="lg" withArrow>
              View compliance
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
