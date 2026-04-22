import Link from "next/link";
import Container from "@/components/ui/Container";

type PreviewBannerProps = {
  label: string;
};

const PreviewBanner: React.FC<PreviewBannerProps> = ({ label }) => {
  return (
    <div className="border-border/60 bg-surface-1 border-b py-3">
      <Container size="xl">
        <div className="text-foreground flex items-center justify-between text-[12px] font-medium tracking-[0.14em] uppercase">
          <span className="inline-flex items-center gap-2">
            <span className="bg-primary h-1.5 w-1.5 rounded-full" />
            Preview · {label}
          </span>
          <Link
            className="text-subtle hover:text-foreground inline-flex items-center gap-1.5"
            href="/preview"
          >
            ← Back to directions
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default PreviewBanner;
