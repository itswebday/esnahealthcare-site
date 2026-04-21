import Link from "next/link";
import Image from "next/image";
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

export function Logo({
  variant = "color",
  width = 132,
  className,
  href = "/",
  withLink = true,
}: LogoProps) {
  const height = Math.round(width * (876.99 / 3172.08));
  const img = (
    <Image
      src={SRC[variant]}
      alt="Esna Care"
      width={width}
      height={height}
      priority
      className={cn("h-auto w-auto select-none", className)}
      style={{ width: `${width}px` }}
    />
  );
  if (!withLink) return img;
  return (
    <Link
      href={href}
      aria-label="Esna Care — home"
      className="inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
    >
      {img}
    </Link>
  );
}
