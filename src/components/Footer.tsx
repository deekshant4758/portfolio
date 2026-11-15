import { navLinks, profile } from "@/lib/data";

const elsewhere = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "LeetCode", href: profile.leetcode },
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "Résumé", href: profile.resume },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-[1000px] px-6 py-9 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-dim">
            © 2026 {profile.name}. Built with Next.js and Tailwind.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
            {elsewhere.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a href="#top" className="text-muted transition-colors hover:text-ink">
              Top ↑
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="mt-5 flex flex-wrap gap-x-5 gap-y-2 sm:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[13px] text-dim hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
