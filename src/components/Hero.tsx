"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { marqueeWords, profile, stats } from "@/lib/data";
import { RingButton } from "./ui/RingButton";

function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden className={className}>
      {[0, 45, 90, 135].map((rotation) => (
        <rect
          key={rotation}
          x="46"
          y="2"
          width="8"
          height="96"
          rx="4"
          fill="currentColor"
          transform={`rotate(${rotation} 50 50)`}
        />
      ))}
    </svg>
  );
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const line = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const rawX = useMotionValue(720);
  const rawY = useMotionValue(260);
  const x = useSpring(rawX, { stiffness: 60, damping: 22, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 60, damping: 22, mass: 0.6 });

  const handlePointer = (event: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(event.clientX - rect.left);
    rawY.set(event.clientY - rect.top);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handlePointer}
      className="relative overflow-hidden pt-28 pb-0 sm:pt-32 md:pt-36"
    >
      {!reduce ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute hidden size-[620px] rounded-full md:block"
          style={{
            x,
            y,
            translateX: "-50%",
            translateY: "-50%",
            background:
              "radial-gradient(circle, rgba(157,180,255,0.07) 0%, rgba(157,180,255,0.025) 38%, transparent 68%)",
          }}
        />
      ) : null}

      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10">
        <motion.div variants={container} initial={reduce ? false : "hidden"} animate="show">
          <motion.div
            variants={fade}
            className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4"
          >
            <span className="inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
              <span className="relative flex size-2">
                <span className="pulse-ring absolute inset-0 rounded-full bg-signal" />
                <span className="relative inline-flex size-2 rounded-full bg-signal" />
              </span>
              {profile.availability}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-dim uppercase">
              <MapPin className="size-3" strokeWidth={1.8} />
              {profile.location}
            </span>
          </motion.div>

          <div className="pt-10 sm:pt-14 md:pt-16">
            <h1 className="font-display font-semibold tracking-[-0.055em] text-fg">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  variants={line}
                  className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[9.6vw] leading-[0.9] sm:gap-x-5 sm:text-[7.6vw] lg:text-[5.9rem] xl:text-[6.7rem]"
                >
                  <span>Hi, I&apos;m Deekshant</span>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Deekshant on GitHub"
                    className="inline-flex shrink-0 text-[#2c2c31] transition-all duration-500 ease-out hover:rotate-45 hover:text-accent"
                  >
                    <Asterisk className="size-[0.48em]" />
                  </a>
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span
                  variants={line}
                  className="block text-[6.8vw] leading-[1.02] text-muted sm:text-[4.8vw] lg:text-[3.6rem] xl:text-[4.1rem]"
                >
                  {profile.heroLine}
                </motion.span>
              </span>
            </h1>

            <motion.p
              variants={fade}
              className="mt-7 max-w-[46rem] font-mono text-[13px] leading-relaxed tracking-tight text-muted sm:mt-9 sm:text-sm md:text-[15px]"
            >
              {profile.summary}
            </motion.p>

            <motion.div variants={fade} className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
              <RingButton
                href="#work"
                text="View selected work"
                variant="primary"
                size="lg"
                icon={<ArrowDownRight className="size-4" strokeWidth={1.8} />}
              />
              <RingButton
                href={profile.resume}
                text="Résumé"
                external
                size="lg"
                icon={<ArrowUpRight className="size-4" strokeWidth={1.8} />}
              />
            </motion.div>
          </div>

          <motion.dl
            variants={fade}
            className="mt-16 grid grid-cols-2 border-t border-line sm:mt-20 sm:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-1 px-1 py-5 sm:px-5 ${
                  index % 2 === 1 ? "border-l border-line pl-4 sm:pl-5" : ""
                } ${index > 1 ? "border-t border-line sm:border-t-0" : ""} ${
                  index > 0 ? "sm:border-l sm:border-line" : ""
                }`}
              >
                <dt className="order-2 font-mono text-[10px] tracking-[0.14em] text-dim uppercase">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      <div className="mt-12 border-y border-line py-3.5 sm:mt-16">
        <div className="marquee-track items-center gap-8 text-[11px] tracking-[0.22em] text-dim uppercase select-none">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-8" aria-hidden={copy === 1}>
              {marqueeWords.map((word) => (
                <span key={`${copy}-${word}`} className="flex items-center gap-8 font-mono">
                  {word}
                  <span className="text-[#333338]">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-5 py-4 sm:px-8 md:px-10">
        <span className="font-mono text-[10px] tracking-[0.18em] text-dim uppercase">
          Portfolio / 2026
        </span>
        <Link
          href="#work"
          className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-dim uppercase transition-colors hover:text-fg"
        >
          Scroll
          <span className="inline-block h-px w-8 bg-line-strong transition-all duration-300 group-hover:w-12 group-hover:bg-muted" />
        </Link>
      </div>
    </section>
  );
}
