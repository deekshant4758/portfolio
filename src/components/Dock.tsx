"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/lib/data";

const links = [
  { label: "GitHub", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export function Dock() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 transition-all duration-500 sm:bottom-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-20 opacity-0"
      }`}
    >
      <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-line-strong/80 bg-ink/75 p-1.5 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.9)] backdrop-blur-xl">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={link.label}
              className="group grid size-9 place-items-center rounded-full text-muted transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1b1b1f] hover:text-fg"
            >
              <Icon className="size-[17px]" strokeWidth={1.7} />
            </a>
          );
        })}

        <span className="mx-1 h-5 w-px bg-line" />

        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex items-center gap-2 pr-1 pl-1.5"
        >
          <span className="relative flex size-2">
            <span className="pulse-ring absolute inset-0 rounded-full bg-signal" />
            <span className="relative inline-flex size-2 rounded-full bg-signal" />
          </span>
          <span
            className={`overflow-hidden font-mono text-[10px] tracking-[0.08em] whitespace-nowrap text-muted uppercase transition-all duration-500 ease-out ${
              hovered ? "max-w-[220px] opacity-100" : "max-w-0 opacity-0"
            }`}
          >
            Open to work
          </span>
        </div>
      </div>
    </div>
  );
}
