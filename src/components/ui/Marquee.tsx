import { cn } from "@/lib/cn";

type MarqueeProps = {
  items: React.ReactNode[];
  /** seconds per full cycle */
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
  fade?: boolean;
  separator?: React.ReactNode;
};

const Marquee: React.FC<MarqueeProps> = ({
  items,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
  className,
  itemClassName,
  fade = true,
  separator,
}) => {
  // Render each item twice so the loop tiles seamlessly.
  const doubled = [...items, ...items];
  return (
    <div
      className={cn(
        "group/marquee relative w-full overflow-hidden",
        fade &&
          "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max items-center gap-12 will-change-transform",
          pauseOnHover && "group-hover/marquee:[animation-play-state:paused]",
        )}
        style={{
          animation: `esna-marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 items-center gap-12", itemClassName)}
            aria-hidden={i >= items.length ? "true" : undefined}
          >
            {item}
            {separator}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes esna-marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes esna-marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
