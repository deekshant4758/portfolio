"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({ children, className, delay = 0, y = 18, once = true }: RevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || reduce) return;

    let visible = false;
    const update = (next: boolean) => {
      if (next === visible) return;
      visible = next;
      setShown(next);
    };

    // A plain rect check is the source of truth: it runs immediately, after
    // hash navigation settles, and on any scroll/resize as a fallback to the
    // IntersectionObserver (which can miss programmatic scroll jumps).
    const check = () => {
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight || document.documentElement.clientHeight;
      const inView = rect.top < viewport - 24 && rect.bottom > 24;
      if (inView || (once && visible)) update(true);
      else update(false);
    };

    const observer =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              if (entries.some((entry) => entry.isIntersecting)) update(true);
              else if (!once) check();
            },
            { threshold: 0.01 },
          )
        : null;

    observer?.observe(element);
    check();
    const raf = window.requestAnimationFrame(check);
    const timers = [window.setTimeout(check, 250), window.setTimeout(check, 750)];

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    window.addEventListener("hashchange", check);

    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(raf);
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      window.removeEventListener("hashchange", check);
    };
  }, [once, reduce]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
