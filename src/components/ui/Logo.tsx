import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "color" | "black" | "white";
  width?: number;
  className?: string;
  href?: string;
  withLink?: boolean;
};

const SRC = {
  color: "/logos/esna-color.svg",
  black: "/logos/esna-black.svg",
  white: "/logos/esna-white.svg",
};

const Logo: React.FC<LogoProps> = ({
  variant = "color",
  width = 132,
  className,
  href = "/",
  withLink = true,
}) => {
  const height = Math.round(width * (876.99 / 3172.08));
  const img = (
    <Image
      className={cn("h-auto w-auto select-none", className)}
      src={SRC[variant]}
      alt="Esna Care"
      width={width}
      height={height}
      priority
      style={{ width: `${width}px` }}
    />
  );

  if (!withLink) {
    return img;
  }

  return (
    <Link
      className="focus-visible:ring-primary inline-flex items-center rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
      href={href}
      aria-label="Esna Care — home"
      prefetch
    >
      {img}
    </Link>
  );
};

export default Logo;
