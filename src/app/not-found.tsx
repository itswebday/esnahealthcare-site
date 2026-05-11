import { cn } from "@/lib/cn";

const NotFoundPage: React.FC = () => {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-center",
        "bg-background text-foreground",
      )}
    >
      {/* Heading */}
      <h1 className="font-heading text-[40px] font-bold">404</h1>

      {/* Description */}
      <p className="text-muted mt-2 text-[16px]">Page not found</p>
    </main>
  );
};

export default NotFoundPage;
