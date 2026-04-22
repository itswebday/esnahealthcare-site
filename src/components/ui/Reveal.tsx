"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/cn";

type StaggerChildProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  as?: "div" | "li" | "span" | "article";
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  as?: "div" | "li" | "span" | "section" | "article";
  once?: boolean;
  amount?: number;
};

const offsetFor = (direction: RevealProps["direction"]) => {
  switch (direction) {
    case "up":
      return { x: 0, y: 18 };
    case "down":
      return { x: 0, y: -18 };
    case "left":
      return { x: 18, y: 0 };
    case "right":
      return { x: -18, y: 0 };
    case "none":
    default:
      return { x: 0, y: 0 };
  }
};

const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
  once = true,
  amount = 0.3,
}) => {
  const offset = offsetFor(direction);
  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
};

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  once?: boolean;
  amount?: number;
  as?: "div" | "ul" | "ol" | "section";
};

export const Stagger: React.FC<StaggerProps> = ({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.08,
  once = true,
  amount = 0.2,
  as = "div",
}) => {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { delayChildren, staggerChildren },
        },
      }}
    >
      {children}
    </MotionTag>
  );
};

export const StaggerChild: React.FC<StaggerChildProps> = ({
  children,
  className,
  direction = "up",
  as = "div",
}) => {
  const offset = offsetFor(direction);
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
