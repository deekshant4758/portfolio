"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, Copy, Loader2 } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Section } from "./SectionHeading";

const config = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateMain: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_MAIN,
  templateAuto: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTO,
};

const isConfigured = Boolean(config.publicKey && config.serviceId && config.templateMain);

type Status = { tone: "idle" | "sending" | "success" | "error"; message: string };

const initialStatus: Status = {
  tone: "idle",
  message: "I usually reply within a day. No forms lost in the void.",
};

export function Contact() {
  const [status, setStatus] = useState<Status>(initialStatus);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus({ tone: "error", message: "Please fill in your name, email, and message." });
      return;
    }

    if (!isConfigured) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Portfolio inquiry from ${name}`,
      )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
      return;
    }

    const submitButton = form.querySelector<HTMLButtonElement>("button[type='submit']");
    if (submitButton) submitButton.disabled = true;
    setStatus({ tone: "sending", message: "Sending your message…" });

    try {
      const emailjs = (await import("@emailjs/browser")).default;
      emailjs.init({ publicKey: config.publicKey });

      await emailjs.sendForm(config.serviceId!, config.templateMain!, form);

      if (config.templateAuto) {
        const templateParams = {
          name,
          from_name: name,
          user_name: name,
          to_name: profile.name,
          email,
          from_email: email,
          reply_to: email,
          user_email: email,
          recipient: profile.email,
          title: `Portfolio inquiry from ${name}`,
          subject: `Portfolio inquiry from ${name}`,
          message,
          message_html: message.replace(/\n/g, "<br>"),
          time: new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }),
        };

        window.setTimeout(() => {
          emailjs
            .send(config.serviceId!, config.templateAuto!, templateParams, {
              publicKey: config.publicKey,
            })
            .catch((error) => console.warn("EmailJS auto-reply failed:", error));
        }, 1100);
      }

      form.reset();
      setStatus({
        tone: "success",
        message: "Message sent. I'll get back to you soon.",
      });
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus({
        tone: "error",
        message: `Something went wrong. Email me directly at ${profile.email}.`,
      });
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  };

  return (
    <Section id="contact" index="06" title="Contact" note="Say hello">
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <Reveal>
          <div>
            <h3 className="font-display text-4xl leading-[1.02] font-semibold tracking-[-0.05em] text-fg sm:text-5xl md:text-6xl">
              Let&apos;s build
              <br />
              <span className="text-muted">something reliable.</span>
            </h3>
            <p className="mt-6 max-w-md text-[14.5px] leading-relaxed text-muted">
              I&apos;m open to backend and AI engineering roles, and I&apos;m always up for a
              conversation about queues, retrieval, or a side project you can&apos;t stop thinking
              about.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="group inline-flex items-center gap-2.5 rounded-md border border-line-strong bg-[#0c0c0e] px-4 py-3 font-mono text-[12px] text-fg transition-colors duration-300 hover:border-muted hover:bg-[#111113]"
              >
                {profile.email}
                <span className="relative grid size-4 place-items-center text-muted transition-colors group-hover:text-fg">
                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.span
                        key="check"
                        initial={{ y: 8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -8, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        <Check className="size-4" strokeWidth={1.8} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ y: 8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -8, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        <Copy className="size-3.5" strokeWidth={1.8} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5">
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
                  className="group inline-flex items-center gap-1 font-mono text-[11px] tracking-[0.06em] text-dim uppercase transition-colors hover:text-fg"
                >
                  {link.label}
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.7}
                  />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-line bg-[#0c0c0e] p-5 sm:p-7"
          >
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="font-mono text-[10px] tracking-[0.16em] text-dim uppercase">
                New message
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[9.5px] tracking-[0.1em] text-dim uppercase">
                <span className="size-1.5 rounded-full bg-signal" />
                Available
              </span>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-mono text-[9.5px] tracking-[0.14em] text-dim uppercase"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Ada Lovelace"
                  className="w-full border-b border-line bg-transparent pb-2.5 text-sm text-fg placeholder:text-[#4a4a52] transition-colors focus:border-muted focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-[9.5px] tracking-[0.14em] text-dim uppercase"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border-b border-line bg-transparent pb-2.5 text-sm text-fg placeholder:text-[#4a4a52] transition-colors focus:border-muted focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[9.5px] tracking-[0.14em] text-dim uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="What are you working on?"
                  className="w-full resize-none border-b border-line bg-transparent pb-2.5 text-sm leading-relaxed text-fg placeholder:text-[#4a4a52] transition-colors focus:border-muted focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-fg px-4 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status.tone === "sending" ? (
                <>
                  <Loader2 className="size-4 animate-spin" strokeWidth={1.8} />
                  Sending
                </>
              ) : (
                <>
                  Send message
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.8}
                  />
                </>
              )}
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`mt-3 text-center font-mono text-[10.5px] leading-relaxed ${
                status.tone === "error"
                  ? "text-[#f87171]"
                  : status.tone === "success"
                    ? "text-signal"
                    : "text-dim"
              }`}
            >
              {status.message}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
