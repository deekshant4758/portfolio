import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[10px] tracking-[0.2em] text-dim uppercase">Error / 404</p>
      <h1 className="mt-4 font-display text-6xl font-semibold tracking-[-0.06em] text-fg sm:text-8xl">
        Not found.
      </h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
        This page doesn&apos;t exist. Like a dropped job with no retry — it never made it here.
      </p>
      <Link
        href="/"
        className="group mt-8 inline-flex items-center gap-2 rounded-md border border-line-strong px-4 py-2.5 text-sm text-fg transition-colors hover:bg-[#111113]"
      >
        Back home
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.7}
        />
      </Link>
    </main>
  );
}
