import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Section } from "./SectionHeading";

const elsewhere = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "LeetCode", href: profile.leetcode },
];

export function Contact() {
  return (
    <Section id="contact" title="Contact" note="Say hello">
      <Reveal>
        <p className="max-w-[560px] font-serif text-[30px] leading-[1.25] tracking-[-0.01em] text-ink sm:text-[36px]">
          Open to backend and AI engineering roles. If you think I&apos;d fit your team, I&apos;d
          love to hear from you.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-7">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-baseline gap-2 font-serif text-[26px] leading-tight text-ink transition-colors hover:text-accent sm:text-[32px]"
          >
            <span className="border-b border-line-strong pb-0.5 transition-colors group-hover:border-accent">
              {profile.email}
            </span>
            <ArrowUpRight className="size-5 shrink-0 text-dim" strokeWidth={1.5} />
          </a>
          <p className="mt-3 text-[14px] text-muted">
            or call{" "}
            <a href={`tel:${profile.phoneHref}`} className="link-underline text-ink">
              {profile.phone}
            </a>
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[13.5px]">
          {elsewhere.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-ink transition-colors hover:text-accent"
            >
              <span className="link-underline">{link.label}</span>
              <ArrowUpRight className="size-3.5 text-dim" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-line pt-5 font-mono text-[10.5px] tracking-[0.06em] text-dim uppercase">
          <span aria-hidden className="size-1.5 rounded-full bg-signal" />
          <span>{profile.availability}</span>
          <span aria-hidden>·</span>
          <span>{profile.workMode}</span>
          <span aria-hidden>·</span>
          <span>{profile.location}</span>
        </p>
      </Reveal>
    </Section>
  );
}
