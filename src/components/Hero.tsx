import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { label: "GitHub", href: profile.github, external: true },
  { label: "LinkedIn", href: profile.linkedin, external: true },
  { label: "LeetCode", href: profile.leetcode, external: true },
  { label: "Email", href: `mailto:${profile.email}`, external: false },
  { label: "Résumé", href: profile.resume, external: true },
];

export function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-[1000px] px-6 sm:px-8">
      <div className="max-w-[700px] pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="rise">
          <Image
            src="/profile.jpg"
            alt="Deekshant Gupta"
            width={64}
            height={64}
            priority
            className="size-16 rounded-full object-cover"
          />
        </div>

        <h1 className="rise mt-7 font-serif text-[52px] leading-[0.95] tracking-[-0.02em] text-ink sm:text-[76px]">
          Deekshant Gupta
        </h1>

        <p className="mt-3 text-[17px] text-muted">Backend &amp; AI engineer</p>

        <div className="mt-9 space-y-5 text-[17px] leading-8 text-muted sm:text-[18px]">
          <p>{profile.intro}</p>
          <p>{profile.introSecondary}</p>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[15px]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="link-underline inline-flex items-center gap-0.5 text-ink"
            >
              {link.label}
              {link.external ? (
                <ArrowUpRight className="size-3.5 text-dim" strokeWidth={1.5} />
              ) : null}
            </a>
          ))}
        </div>

        <p className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-dim">
          <span aria-hidden className="size-1.5 rounded-full bg-signal" />
          <span>{profile.availability}</span>
          <span aria-hidden>·</span>
          <span>Open to {profile.relocation}</span>
          <span aria-hidden>·</span>
          <span>{profile.workMode}</span>
        </p>
      </div>
    </section>
  );
}
