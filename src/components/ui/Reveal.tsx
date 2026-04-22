import { createElement } from "react";

/*
  Pass-through wrappers. Previously used framer-motion + IntersectionObserver
  to fade in content — which left sections invisible on mobile when the
  observer fired late. Now just renders the element; all animation props
  are accepted and ignored so call sites stay unchanged.
*/

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  as?: "div" | "li" | "span" | "section" | "article";
  once?: boolean;
  amount?: number;
};

const Reveal: React.FC<RevealProps> = ({ children, className, as = "div" }) => {
  return createElement(as, { className }, children);
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
  as = "div",
}) => {
  return createElement(as, { className }, children);
};

type StaggerChildProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  as?: "div" | "li" | "span" | "article";
};

export const StaggerChild: React.FC<StaggerChildProps> = ({
  children,
  className,
  as = "div",
}) => {
  return createElement(as, { className }, children);
};

export default Reveal;
