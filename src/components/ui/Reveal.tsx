import { cn } from "@/lib/cn";

/*
  Reveal was previously a framer-motion wrapper that started children at
  opacity:0 and faded them in via IntersectionObserver. On mobile that
  caused blank sections whenever hydration or the observer was slow —
  content stayed invisible until the JS-driven animation fired.

  It's now a plain pass-through that renders children at their final state.
  Same API, same JSX tree depth, so all call sites work unchanged. The
  `direction`, `delay`, `once`, `amount` props are accepted and ignored.
*/

type ElementTag = "div" | "li" | "span" | "section" | "article" | "ul" | "ol";

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
  return (
    <Tag as={as} className={className}>
      {children}
    </Tag>
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
  as = "div",
}) => {
  return (
    <Tag as={as} className={className}>
      {children}
    </Tag>
  );
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
  return (
    <Tag as={as} className={className}>
      {children}
    </Tag>
  );
};

type TagProps = {
  as: ElementTag;
  children: React.ReactNode;
  className?: string;
};

const Tag: React.FC<TagProps> = ({ as, children, className }) => {
  const merged = cn(className);

  switch (as) {
    case "li":
      return <li className={merged}>{children}</li>;
    case "span":
      return <span className={merged}>{children}</span>;
    case "section":
      return <section className={merged}>{children}</section>;
    case "article":
      return <article className={merged}>{children}</article>;
    case "ul":
      return <ul className={merged}>{children}</ul>;
    case "ol":
      return <ol className={merged}>{children}</ol>;
    case "div":
    default:
      return <div className={merged}>{children}</div>;
  }
};

export default Reveal;
