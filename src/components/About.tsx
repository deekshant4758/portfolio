import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Section } from "./SectionHeading";const facts = [
  { label: "Based in", value: "Chennai, India" },
  { label: "Focus", value: "Backend · Automation · AI" },
  { label: "Currently", value: "Finishing B.Tech at VIT" },
  { label: "Next", value: "Backend / AI engineering" },
];

export function About() {
  return (
    <Section id="about" index="05" title="About me" note="The longer version">
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal>
          <div>
            <p className="font-display text-2xl leading-snug tracking-[-0.03em] text-fg sm:text-3xl md:text-[2.15rem]">
              I like systems that stay boring. The queue that drains, the job that retries
              cleanly, the model that gives an answer you can actually trace.
            </p>

            <div className="mt-7 space-y-4 text-[14.5px] leading-[1.8] text-muted sm:text-[15px]">
              <p>
                I&apos;m a final-year Computer Science student at{" "}
                <span className="text-fg">VIT Chennai</span>, specialising in AI and machine
                learning, and most recently an SDE Intern at{" "}
                <span className="text-fg">Outbox Labs</span>. My work sits where backend
                engineering meets product execution.
              </p>
              <p>
                I&apos;ve built email infrastructure supporting 50k+ accounts, a visual studio for
                AI pipelines, and a retrieval system that generates grounded questions from dense
                PDFs. Different problems, same instinct: make the unreliable parts reliable, then
                make the surface feel effortless.
              </p>
              <p>
                Outside of work I&apos;m usually reading about distributed systems, breaking my own
                side projects, or trying to make a model explain itself. I&apos;m looking for a
                team where I can own backend systems end to end.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                { label: "GitHub", href: profile.github },
                { label: "LinkedIn", href: profile.linkedin },
                { label: "LeetCode", href: profile.leetcode },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-[13px] text-muted transition-colors hover:text-fg"
                >
                  <span className="link-underline">{link.label}</span>
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.7}
                  />
                </a>
              ))}
            </div>

            <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-[9.5px] tracking-[0.14em] text-dim uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-[13px] text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="lg:sticky lg:top-28">
            <figure className="group overflow-hidden rounded-xl border border-line bg-[#0c0c0e]">
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Deekshant Gupta"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]"
                  priority={false}
                />
              </div>
              <figcaption className="flex items-end justify-between gap-3 border-t border-line px-4 py-3.5">
                <div>
                  <p className="font-mono text-[9.5px] tracking-[0.16em] text-muted uppercase">
                    Deekshant Gupta
                  </p>
                  <p className="mt-1 font-display text-lg font-medium tracking-tight text-fg">
                    {profile.role}
                  </p>
                </div>
                <span className="mb-0.5 inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-ink/70 px-2.5 py-1 font-mono text-[9px] tracking-[0.1em] text-muted uppercase backdrop-blur">
                  <span className="size-1.5 rounded-full bg-signal" />
                  Available
                </span>
              </figcaption>
            </figure>

            <div className="mt-3 flex items-center justify-between rounded-lg border border-line bg-[#0c0c0e] px-4 py-3">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] text-dim uppercase">
                <MapPin className="size-3" strokeWidth={1.8} />
                {profile.location}
              </span>
              <span className="font-mono text-[10px] tracking-[0.1em] text-dim uppercase">
                IST · UTC+5:30
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
