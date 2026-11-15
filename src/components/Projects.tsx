import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Section } from "./SectionHeading";

export function Projects() {
  return (
    <Section id="work" title="Work" note="Things I've built and shipped">
      <div className="divide-y divide-line border-b border-line">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.04}>
            <article className="group py-8 first:pt-0 last:pb-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-serif text-[27px] leading-tight tracking-[-0.01em] text-ink">
                  {project.title}
                </h3>
                <p className="w-full font-mono text-[11px] tracking-[0.06em] text-dim sm:w-auto">
                  {project.category} · {project.year}
                </p>
              </div>

              <p className="mt-2.5 max-w-[620px] text-[15px] leading-7 text-muted">
                {project.blurb}
              </p>

              <ul className="mt-3.5 space-y-1.5">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex max-w-[640px] gap-2.5 text-[13.5px] leading-6 text-dim"
                  >
                    <span aria-hidden className="mt-[10px] size-[3px] shrink-0 rounded-full bg-line-strong" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="font-mono text-[10.5px] leading-5 tracking-[0.03em] text-dim">
                  {project.stack.join(" · ")}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-5">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-[13px] text-ink transition-colors hover:text-accent"
                  >
                    {link.label === "Source" ? <GithubIcon className="size-3.5" /> : null}
                    <span className="link-underline">{link.label}</span>
                    {link.label !== "Source" ? (
                      <ArrowUpRight className="size-3.5 text-dim" strokeWidth={1.5} />
                    ) : null}
                  </a>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.05}>
        <p className="mt-6 text-[13.5px] text-dim">
          Smaller experiments and older projects live on{" "}
          <a
            href="https://github.com/deekshant4758"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-ink"
          >
            GitHub
          </a>
          .
        </p>
      </Reveal>
    </Section>
  );
}
