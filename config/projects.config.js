/**
 * ============================================================
 *  PROJECTS CONFIG — deekshant.dev
 *  Add / edit projects here. The UI renders from this data.
 * ============================================================
 *
 *  Fields:
 *    id          → unique string (used as DOM id)
 *    number      → display number "01", "02", ...
 *    category    → "backend" | "ml" | "fullstack"   (controls filter tab)
 *    size        → "hero" | "normal"  (hero = wide card on desktop)
 *    title       → project name
 *    desc        → short description (1–2 sentences)
 *    highlights  → array of bullet strings (shown as → items)
 *    chips       → array of { label, color }
 *                  color: "accent" | "cyan" | "green" | "purple" | "" (grey)
 *    links       → array of { label, href, style }
 *                  style: "primary" | "ghost"
 *    accentColor → CSS var override for accent bar, optional
 *    date        → optional date string shown in card footer
 */

const PROJECTS = [
  {
    id: "mailscheduler",
    number: "01",
    category: "fullstack",
    size: "hero",
    title: "MailScheduler",
    date: "2025",
    desc: "Fault-tolerant email scheduling and automation system supporting delayed delivery, bulk emails, and reliable job processing with automatic recovery across server restarts.",
    highlights: [
      "Redis-backed BullMQ queues with automatic recovery across server restarts",
      "Redis-based rate limiting and concurrency control for high-volume workloads",
      "Delayed delivery, bulk emails, and templated automation",
    ],
    chips: [
      { label: "Next.js",     color: "accent" },
      { label: "Express.js",   color: "accent" },
      { label: "TypeScript",  color: "" },
      { label: "BullMQ",      color: "" },
      { label: "Redis",       color: "" },
      { label: "MySQL",       color: "" },
      { label: "Nodemailer",  color: "" },
      { label: "Docker",      color: "" },
    ],
    links: [
      { label: "GitHub →", href: "https://github.com/deekshant4758/mailScheduler", style: "primary" },
      { label: "Live →", href: "https://mail-scheduler-122f.vercel.app/", style: "ghost" },
    ],
  },

  {
    id: "nextflow",
    number: "02",
    category: "fullstack",
    size: "normal",
    title: "NextFlow",
    date: "2025",
    desc: "Visual workflow studio for creating AI-powered image, video, and text pipelines with secure authentication and scalable background execution.",
    highlights: [
      "Visual pipeline builder for image, video, and text workflows",
      "Secure authentication and protected routes with Clerk",
      "Prisma with Neon and Trigger.dev for storage and background execution",
    ],
    chips: [
      { label: "Next.js",     color: "purple" },
      { label: "Clerk",       color: "purple" },
      { label: "Prisma",      color: "" },
      { label: "Neon",        color: "" },
      { label: "Trigger.dev", color: "" },
    ],
    links: [
      { label: "GitHub →", href: "https://github.com/deekshant4758/nextflow", style: "primary" },
      { label: "Live →", href: "https://nextflow-silk-six.vercel.app/", style: "ghost" },
    ],
    accentColor: "var(--purple)",
  },

  {
    id: "askwise",
    number: "03",
    category: "ml",
    size: "normal",
    title: "AskWise",
    date: "2024",
    desc: "AI-powered QA/QG pipeline that generates context-aware questions and performs semantic grading from unstructured PDF content.",
    highlights: [
      "Hybrid LLM and semantic pipeline for grounded question generation and grading",
      "RAG system using SBERT and FAISS for academic PDF indexing",
      "Context-aware QA generation from unstructured documents",
    ],
    chips: [
      { label: "Python",      color: "cyan" },
      { label: "Flask",       color: "cyan" },
      { label: "FAISS",       color: "" },
      { label: "SBERT",       color: "" },
      { label: "T5",          color: "" },
      { label: "BART",        color: "" },
      { label: "NLP",         color: "" },
      { label: "MySQL",       color: "" },
      { label: "Docker",      color: "" },
      { label: "PyMuPDF",     color: "" },
      { label: "FastAPI",     color: "" },
    ],
    links: [
      { label: "GitHub →", href: "https://github.com/deekshant4758/automated-qa-pipeline", style: "primary" },
    ],
    accentColor: "var(--cyan)",
  },
];

/* ── Category meta (label shown in filter tabs) ── */
const CATEGORIES = [
  { value: "all",       label: "All Projects" },
  { value: "backend",   label: "Backend"       },
  { value: "ml",        label: "ML / AI"       },
  { value: "fullstack", label: "Full-Stack"     },
];