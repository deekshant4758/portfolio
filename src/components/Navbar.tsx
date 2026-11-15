"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      const marker = window.scrollY + window.innerHeight * 0.3;
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
        className={`absolute inset-0 -z-10 transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-line bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      />

      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-[1000px] items-center justify-between px-6 sm:px-8"
      >
        <a
          href="#top"
          className={`font-serif text-[19px] leading-none tracking-[-0.01em] transition-colors ${
            scrolled ? "text-ink" : "text-ink"
          }`}
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13.5px] transition-colors duration-200 ${
                active === link.href ? "text-ink" : "text-dim hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 border-l border-line-strong pl-6 text-[13.5px] text-ink transition-colors hover:text-accent"
          >
            Résumé
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 grid size-9 place-items-center text-ink md:hidden"
        >
          {open ? <X className="size-5" strokeWidth={1.6} /> : <Menu className="size-5" strokeWidth={1.6} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-paper md:hidden"
          >
            <div className="mx-auto flex w-full max-w-[1000px] flex-col px-6 py-2 sm:px-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3.5 text-[15px] text-muted last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="py-3.5 text-[15px] text-ink"
              >
                Résumé ↗
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
