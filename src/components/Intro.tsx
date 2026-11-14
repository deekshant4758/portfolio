"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function Intro() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || sessionStorage.getItem("dg-intro-seen") === "1") {
      setVisible(false);
      return;
    }

    let current = 0;
    const interval = window.setInterval(() => {
      current = Math.min(100, current + Math.ceil(Math.random() * 11));
      setCount(current);

      if (current >= 100) {
        window.clearInterval(interval);
        window.setTimeout(() => {
          sessionStorage.setItem("dg-intro-seen", "1");
          setVisible(false);
        }, 320);
      }
    }, 48);

    return () => window.clearInterval(interval);
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          id="site-intro"
          key="intro"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink px-5 py-6 sm:px-8 sm:py-7"
          aria-hidden
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-sm font-semibold tracking-tight text-fg">
              deekshant<span className="text-dim">.dev</span>
            </span>
            <span className="font-mono text-[9.5px] tracking-[0.18em] text-dim uppercase">
              Portfolio / 2026
            </span>
          </div>

          <div className="flex flex-1 items-center">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[13vw] leading-[0.9] font-semibold tracking-[-0.06em] text-fg sm:text-[9vw] lg:text-[7vw]"
            >
              Deekshant
              <br />
              <span className="text-muted">Gupta</span>
            </motion.p>
          </div>

          <div>
            <div className="mb-3 flex items-end justify-between font-mono text-[9.5px] tracking-[0.16em] text-dim uppercase">
              <span>Backend / AI</span>
              <span className="tabular-nums text-muted">{String(count).padStart(3, "0")}</span>
            </div>
            <div className="h-px w-full bg-line">
              <div
                className="h-px bg-fg transition-[width] duration-100 ease-linear"
                style={{ width: `${count}%` }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
