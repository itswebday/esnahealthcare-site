"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";
import { createElement } from "react";

/*
Scroll-reveal primitives. `whileInView` (Intersection Observer) with
`amount: "some"` so the animation fires as soon as ANY part of the
element is visible — avoids the bug where tall mobile sections never
hit the threshold and stayed invisible. `once: true` so backwards
scroll doesn't replay. `prefers-reduced-motion` short-circuits to a
plain element.
*/

type Direction = "up" | "down" | "left" | "right" | "none";

type AsTag = "div" | "li" | "span" | "section" | "article";
type StaggerTag = "div" | "ul" | "ol" | "section";
type ChildTag = "div" | "li" | "span" | "article";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  as?: AsTag;
  isOnce?: boolean;
  amount?: number | "some" | "all";
};

const OFFSETS: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
};

const TRANSITION = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
  isOnce = true,
  amount = "some",
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return createElement(as, { className }, children);
  }

  const offset = OFFSETS[direction];
  const MotionComponent = motion[as] as React.FC<HTMLMotionProps<typeof as>>;

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: isOnce, amount }}
      transition={{ ...TRANSITION, delay }}
    >
      {children}
    </MotionComponent>
  );
};

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  isOnce?: boolean;
  amount?: number | "some" | "all";
  as?: StaggerTag;
};

const buildContainerVariants = (
  delayChildren: number,
  staggerChildren: number,
): Variants => ({
  hidden: {},
  visible: {
    transition: { delayChildren, staggerChildren },
  },
});

export const Stagger: React.FC<StaggerProps> = ({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.08,
  isOnce = true,
  amount = "some",
  as = "div",
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return createElement(as, { className }, children);
  }

  const MotionComponent = motion[as] as React.FC<HTMLMotionProps<typeof as>>;

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: isOnce, amount }}
      variants={buildContainerVariants(delayChildren, staggerChildren)}
    >
      {children}
    </MotionComponent>
  );
};

type StaggerChildProps = {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  as?: ChildTag;
};

const buildChildVariants = (direction: Direction): Variants => {
  const offset = OFFSETS[direction];

  return {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0, transition: TRANSITION },
  };
};

export const StaggerChild: React.FC<StaggerChildProps> = ({
  children,
  className,
  direction = "up",
  as = "div",
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return createElement(as, { className }, children);
  }

  const MotionComponent = motion[as] as React.FC<HTMLMotionProps<typeof as>>;

  return (
    <MotionComponent
      className={className}
      variants={buildChildVariants(direction)}
    >
      {children}
    </MotionComponent>
  );
};

export default Reveal;
