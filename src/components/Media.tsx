"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { media } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Section } from "./SectionHeading";

export function Media() {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback((direction: 1 | -1) => {
    setActive((current) => {
      if (current === null) return current;
      return (current + direction + media.length) % media.length;
    });
  }, []);

  useEffect(() => {
    if (active === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    const timer = window.setTimeout(() => closeRef.current?.focus(), 40);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(timer);
    };
  }, [active, close, step]);

  const current = active === null ? null : media[active];

  return (
    <Section id="media" title="Media" note="Wins, moments, and launches">
      <div className="divide-y divide-line border-b border-line">
        {media.map((item, index) => {
          const body = (
            <>
              {item.image ? (
                <div className="relative aspect-[4/3] w-[92px] shrink-0 overflow-hidden rounded-md border border-line bg-surface sm:w-[148px]">
                  <Image
                    src={item.image}
                    alt={item.alt ?? item.title}
                    fill
                    sizes="(max-width: 640px) 92px, 148px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-ink/45 via-transparent to-transparent p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-sm bg-paper/95 px-1.5 py-0.5 font-mono text-[8px] tracking-[0.12em] text-ink uppercase">
                      Open
                    </span>
                  </span>
                </div>
              ) : null}

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-mono text-[10px] tracking-[0.14em] text-dim uppercase">
                    {item.label}
                  </p>
                  <p className="font-mono text-[10.5px] text-dim">{item.date}</p>
                </div>

                <h3 className="mt-1.5 font-serif text-[21px] leading-snug text-ink">
                  <span className="inline-flex items-baseline gap-1.5">
                    {item.title}
                    {item.image || item.href ? (
                      <ArrowUpRight
                        className="size-3.5 shrink-0 translate-y-px text-dim transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={1.5}
                      />
                    ) : null}
                  </span>
                </h3>

                <p className="mt-1.5 max-w-[560px] text-[13.5px] leading-6 text-muted">
                  {item.description}
                </p>
              </div>
            </>
          );

          return (
            <Reveal key={item.id} delay={index * 0.04}>
              {item.image ? (
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActive(index);
                    }
                  }}
                  aria-label={`Open ${item.title}`}
                  className="group flex w-full cursor-pointer gap-5 py-6 text-left first:pt-0 last:pb-7 sm:gap-7"
                >
                  {body}
                </div>
              ) : item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-5 py-6 first:pt-0 last:pb-7 sm:gap-7"
                >
                  {body}
                </a>
              ) : (
                <div className="group flex gap-5 py-6 first:pt-0 last:pb-7 sm:gap-7">
                  {body}
                </div>
              )}
            </Reveal>
          );
        })}
      </div>

      <AnimatePresence>
        {current ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
          >
            <button
              type="button"
              aria-label="Close image"
              onClick={close}
              className="absolute inset-0 cursor-pointer bg-ink/45 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 4 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex max-h-[92vh] w-full max-w-[980px] flex-col overflow-hidden rounded-lg border border-line-strong bg-paper shadow-[0_40px_120px_-40px_rgba(25,24,21,0.5)]"
            >
              <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-5">
                <div className="min-w-0">
                  <p className="font-mono text-[9px] tracking-[0.16em] text-dim uppercase">
                    {current.label} · {current.date}
                  </p>
                  <p className="mt-0.5 truncate font-serif text-[17px] text-ink">{current.title}</p>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="grid size-8 shrink-0 cursor-pointer place-items-center rounded-full border border-line-strong text-ink transition-colors hover:border-ink/40 hover:bg-surface"
                >
                  <X className="size-4" strokeWidth={1.6} />
                </button>
              </div>

              <div className="flex min-h-0 items-center justify-center bg-surface/60 p-2 sm:p-4">
                {current.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={current.image}
                    alt={current.alt ?? current.title}
                    className="h-auto max-h-[68vh] w-auto max-w-full rounded-sm object-contain"
                  />
                ) : null}
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-line px-4 py-3 sm:px-5">
                <p className="max-w-[60ch] text-[12.5px] leading-5 text-muted">
                  {current.description}
                </p>
                <div className="flex shrink-0 items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous image"
                    className="grid size-8 cursor-pointer place-items-center rounded-full border border-line-strong text-ink transition-colors hover:bg-surface"
                  >
                    <ArrowLeft className="size-4" strokeWidth={1.6} />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next image"
                    className="grid size-8 cursor-pointer place-items-center rounded-full border border-line-strong text-ink transition-colors hover:bg-surface"
                  >
                    <ArrowRight className="size-4" strokeWidth={1.6} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
