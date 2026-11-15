import { ArrowUpRight } from "lucide-react";
import { certifications, education, experience, skillGroups } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Section } from "./SectionHeading";

export function Experience() {
  return (
    <Section id="experience" title="Experience" note="Where I've worked">
      <div className="divide-y divide-line border-b border-line">
        {experience.map((job, index) => (
          <Reveal key={job.id} delay={index * 0.04}>
            <article className="py-7 first:pt-0 last:pb-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <h3 className="font-serif text-[22px] leading-tight text-ink">{job.company}</h3>
                  <span className="text-[13.5px] text-dim">{job.role}</span>
                </div>
                <p className="w-full font-mono text-[11px] tracking-[0.04em] text-dim sm:w-auto">
                  {job.period}
                </p>
              </div>

              <p className="mt-0.5 font-mono text-[10.5px] tracking-[0.06em] text-dim">
                {job.location}
              </p>

              <ul className="mt-3.5 space-y-2">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex max-w-[640px] gap-2.5 text-[14px] leading-[1.7] text-muted"
                  >
                    <span aria-hidden className="mt-[11px] size-[3px] shrink-0 rounded-full bg-line-strong" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <p className="mt-3 font-mono text-[10.5px] tracking-[0.03em] text-dim">
                {job.stack.join(" · ")}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <Reveal>
          <div>
            <h3 className="font-mono text-[10px] tracking-[0.16em] text-dim uppercase">Education</h3>
            <p className="mt-3 text-[15px] text-ink">{education.school}</p>
            <p className="mt-1 text-[13.5px] leading-6 text-muted">
              {education.degree}
              <br />
              {education.detail}
            </p>
            <p className="mt-2 font-mono text-[10.5px] text-dim">
              {education.period} · {education.status}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div>
            <h3 className="font-mono text-[10px] tracking-[0.16em] text-dim uppercase">
              Certifications &amp; wins
            </h3>
            <ul className="mt-3 space-y-2.5">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-baseline justify-between gap-4">
                  {cert.href ? (
                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Open ${cert.name} certificate`}
                      className="group inline-flex items-baseline gap-1 text-[13.5px] leading-6 text-muted transition-colors hover:text-ink"
                    >
                      <span className="link-underline">{cert.name}</span>
                      <span className="text-dim"> — {cert.issuer}</span>
                      <ArrowUpRight
                        className="size-3 shrink-0 translate-y-px text-dim transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={1.6}
                      />
                    </a>
                  ) : (
                    <span className="text-[13.5px] leading-6 text-muted">
                      {cert.name}
                      <span className="text-dim"> — {cert.issuer}</span>
                    </span>
                  )}
                  <span className="shrink-0 font-mono text-[10px] text-dim">{cert.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.05}>
        <div className="mt-10 border-t border-line pt-6">
          <h3 className="font-mono text-[10px] tracking-[0.16em] text-dim uppercase">Toolbox</h3>
          <dl className="mt-3 space-y-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
                <dt className="w-32 shrink-0 text-[12.5px] text-dim">{group.title}</dt>
                <dd className="font-mono text-[11px] leading-5 tracking-[0.02em] text-muted">
                  {group.skills.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  );
}
