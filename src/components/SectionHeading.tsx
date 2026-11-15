import { Reveal } from "./ui/Reveal";

type SectionHeadingProps = {
  title: string;
  note?: string;
  id?: string;
};

export function SectionHeading({ title, note }: SectionHeadingProps) {
  return (
    <div className="md:pt-2">
      <h2 className="font-serif text-[26px] leading-none text-ink sm:text-[28px]">{title}</h2>
      {note ? <p className="mt-2 text-[13px] leading-5 text-dim">{note}</p> : null}
    </div>
  );
}

export function Section({
  title,
  note,
  id,
  children,
  className = "",
}: SectionHeadingProps & { children: React.ReactNode; className?: string }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-line py-14 sm:py-20 ${className}`}
    >
      <div className="grid gap-8 md:grid-cols-[160px_1fr] md:gap-12">
        <Reveal>
          <SectionHeading title={title} note={note} />
        </Reveal>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
