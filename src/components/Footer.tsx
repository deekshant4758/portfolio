import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

const columns = [
  {
    title: "Elsewhere",
    links: [
      { label: "GitHub", href: profile.github, external: true },
      { label: "LinkedIn", href: profile.linkedin, external: true },
      { label: "LeetCode", href: profile.leetcode, external: true },
    ],
  },
  {
    title: "Colophon",
    links: [
      { label: "Next.js 16", href: "https://nextjs.org", external: true },
      { label: "Tailwind CSS v4", href: "https://tailwindcss.com", external: true },
      { label: "Motion", href: "https://motion.dev", external: true },
      { label: "Vercel", href: "https://vercel.com", external: true },
    ],
  },
  {
    title: "This site",
    links: [
      { label: "Résumé", href: profile.resume, external: true },
      { label: "Source", href: "https://github.com/deekshant4758/portfolio", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-12 sm:px-8 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr_repeat(3,minmax(0,0.7fr))] md:gap-8">
          <div>
            <Link href="#top" className="group inline-flex items-center gap-3">
              <span className="grid size-8 place-items-center rounded-md border border-line-strong bg-[#111113] font-mono text-[11px] text-fg transition-colors group-hover:border-muted">
                DG
              </span>
              <span className="font-display text-sm font-semibold tracking-tight text-fg">
                deekshant<span className="text-dim">.dev</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted">
              Backend and AI engineer based in Chennai. Building systems that stay boring in
              production.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline mt-4 inline-block font-mono text-[11px] text-dim transition-colors hover:text-fg"
            >
              {profile.email}
            </a>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="font-mono text-[9.5px] tracking-[0.16em] text-dim uppercase">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group inline-flex items-center gap-1 text-[13px] text-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                      {link.external ? (
                        <ArrowUpRight
                          className="size-3 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:opacity-100"
                          strokeWidth={1.7}
                        />
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-line pt-8">
          <div>
            <p className="font-mono text-[9.5px] tracking-[0.16em] text-dim uppercase">
              Built with intent
            </p>
            <p className="mt-2 max-w-sm font-display text-2xl leading-tight font-medium tracking-[-0.03em] text-fg sm:text-3xl">
              Good systems are quiet.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <span className="font-mono text-[10px] text-dim">© 2026 {profile.name}</span>
            <Link
              href="#top"
              className="group inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 font-mono text-[9.5px] tracking-[0.12em] text-muted uppercase transition-colors hover:border-line-strong hover:text-fg"
            >
              Back to top
              <ArrowUp
                className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
                strokeWidth={1.8}
              />
            </Link>
          </div>
        </div>

        <div className="mt-10 hidden border-t border-line pt-6 md:block">
          <p className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[9.5px] tracking-[0.12em] text-dim uppercase">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-muted">
                {link.label}
              </a>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
