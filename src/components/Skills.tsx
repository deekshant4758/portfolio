import { skillGroups } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Section } from "./SectionHeading";

export function Skills() {
  return (
    <Section id="skills" index="03" title="Toolbox" note="Day-to-day tools">
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.06} className="h-full">
            <div className="group flex h-full flex-col rounded-xl border border-line bg-[#0c0c0e] p-6 transition-colors duration-500 hover:border-line-strong">
              <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-fg">
                    {group.title}
                  </h3>
                  <p className="mt-1 font-mono text-[10.5px] tracking-[0.04em] text-dim">
                    {group.note}
                  </p>
                </div>
                <span className="font-mono text-[10px] tracking-[0.14em] text-dim">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-full border border-line bg-[#0a0a0c] px-3 py-1.5 font-mono text-[10.5px] tracking-[0.02em] text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:text-fg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-3xl font-mono text-[11px] leading-relaxed text-dim">
          Currently going deeper into distributed job processing, retrieval quality, and agentic
          workflows — the parts of AI products that decide whether they actually work.
        </p>
      </Reveal>
    </Section>
  );
}
