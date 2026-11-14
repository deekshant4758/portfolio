"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);

      const marker = window.scrollY + window.innerHeight * 0.28;
      let current = "";
      for (const link of navLinks) {
        const section = document.getElementById(link.href.slice(1));
        if (!section) continue;
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (marker >= top) current = link.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`absolute inset-0 -z-10 border-b transition-colors duration-300 ${
          scrolled || open
            ? "border-line bg-ink/80 backdrop-blur-xl"
            : "border-transparent bg-ink/20 backdrop-blur-sm"
        }`}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left bg-accent/70"
        style={{ transform: `scaleX(${progress})` }}
      />

      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-[1500px] items-center justify-between px-5 sm:px-8 md:h-[72px] md:px-10"
      >
        <Link
          href="#top"
          className="group flex items-center gap-3"
          aria-label="Deekshant Gupta — home"
        >
          <span className="grid size-8 place-items-center rounded-md border border-line-strong bg-[#111113] font-mono text-[11px] font-medium tracking-tight text-fg transition-colors duration-300 group-hover:border-muted">
            DG
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-fg">
            deekshant<span className="text-dim">.dev</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-md px-3 py-2 text-[13px] transition-colors duration-200 ${
                active === link.href ? "text-fg" : "text-muted hover:text-fg"
              }`}
            >
              {link.label}
              <span
                aria-hidden
                className={`absolute inset-x-3 -bottom-px h-px bg-fg transition-transform duration-300 ${
                  active === link.href ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-1.5 rounded-md border border-line-strong px-3.5 py-2 font-mono text-[10px] tracking-[0.14em] text-fg uppercase transition-colors duration-300 hover:border-muted hover:bg-[#111113] sm:inline-flex"
          >
            Résumé
            <ArrowUpRight
              className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.8}
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-md border border-line-strong text-fg transition-colors hover:bg-[#111113] md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col px-5 py-3">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line/60 py-3.5 text-sm text-muted last:border-0 hover:text-fg"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-[10px] text-dim">
                    0{index + 1}
                  </span>
                </a>
              ))}
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 mb-2 inline-flex items-center justify-center gap-2 rounded-md bg-fg px-4 py-3 text-sm font-medium text-ink"
              >
                Download résumé
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
