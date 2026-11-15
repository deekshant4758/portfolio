import { ArrowUpRight } from "lucide-react";
import { aboutFacts, profile } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Section } from "./SectionHeading";

export function About() {
  return (
    <Section id="about" title="About" note="The longer version">
      <Reveal>
        <div className="space-y-5 text-[15.5px] leading-[1.85] text-muted sm:text-[16px]">
          <p className="font-serif text-[26px] leading-[1.35] tracking-[-0.01em] text-ink sm:text-[29px]">
            I care about how software feels to use, and how quietly it holds up underneath — the
            part most people never notice when it&apos;s done right.
          </p>
          <p>
            I studied Computer Science at <span className="text-ink">VIT Chennai</span>, specialising
            in AI and machine learning, and graduated in April 2026. Most recently I was an SDE
            intern at <span className="text-ink">Outbox Labs</span>, where I worked on email
            infrastructure supporting 50,000+ Google and Microsoft accounts.
          </p>
          <p>
            My work sits where backend engineering meets product. I&apos;ve built email
            infrastructure at scale, a visual studio for AI pipelines, and a retrieval system that
            turns dense PDFs into grounded questions. Different problems, same instinct: make the
            unreliable parts reliable, then make the surface feel effortless.
          </p>
          <p>
            Right now I&apos;m looking for a backend or AI engineering role where I can own systems
            end to end. I&apos;m based in Chennai and open to relocating to{" "}
            {profile.relocation}.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 sm:grid-cols-4">
          {aboutFacts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-[9.5px] tracking-[0.14em] text-dim uppercase">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-[13px] leading-5 text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[13.5px]">
          {[
            { label: "GitHub", href: profile.github },
            { label: "LinkedIn", href: profile.linkedin },
            { label: "LeetCode", href: profile.leetcode },
            { label: "Résumé", href: profile.resume },
          ].map((link) => (
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
    </Section>
  );
}
