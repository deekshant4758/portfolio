import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[1000px] flex-col justify-center px-6 sm:px-8">
      <p className="font-mono text-[10px] tracking-[0.18em] text-dim uppercase">404</p>
      <h1 className="mt-4 font-serif text-[56px] leading-none tracking-[-0.02em] text-ink sm:text-[80px]">
        Page not found.
      </h1>
      <p className="mt-4 max-w-sm text-[15px] leading-7 text-muted">
        This page doesn&apos;t exist. The link may be old, or I may have moved something.
      </p>
      <Link
        href="/"
        className="group mt-8 inline-flex w-fit items-center gap-1.5 text-[14px] text-ink transition-colors hover:text-accent"
      >
        <span className="link-underline">Back home</span>
        <ArrowUpRight className="size-4 text-dim" strokeWidth={1.5} />
      </Link>
    </main>
  );
}
