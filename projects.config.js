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
    category: "backend",
    size: "hero",
    title: "MailScheduler",
    date: "Feb 2025",
    desc: "High-performance email automation engine with Redis-backed job queues, rate limiting, and fault-tolerant scheduling. Handles high-volume workloads with automatic recovery across server restarts.",
    highlights: [
      "Redis-backed BullMQ queues with persistence & automatic recovery",
      "Rate limiting + worker concurrency control for volume safety",
      "Delayed delivery, bulk emails, and templated automation",
    ],
    chips: [
      { label: "BullMQ",      color: "accent" },
      { label: "Redis",       color: "accent" },
      { label: "Docker",      color: "" },
      { label: "Next.js",     color: "" },
      { label: "Express.js",  color: "" },
      { label: "TypeScript",  color: "" },
      { label: "MySQL",       color: "" },
      { label: "Nodemailer",  color: "" },
    ],
    links: [
      { label: "View Project →", href: "#", style: "primary" },
      { label: "⌥ Source Code",  href: "#", style: "ghost"   },
    ],
  },

  {
    id: "planify",
    number: "02",
    category: "fullstack",
    size: "normal",
    title: "Planify",
    date: "May – Aug 2025",
    desc: "Enterprise-grade scheduling SaaS with booking links, event management, and robust auth. Clean modular architecture with a reusable component system.",
    highlights: [
      "JWT + Clerk auth with session management",
      "PostgreSQL schema managed via Prisma ORM",
      "Modular dashboards with React + Tailwind",
    ],
    chips: [
      { label: "Next.js",     color: "purple" },
      { label: "Clerk",       color: "purple" },
      { label: "Prisma",      color: "" },
      { label: "PostgreSQL",  color: "" },
      { label: "Tailwind",    color: "" },
    ],
    links: [
      { label: "Case Study →", href: "#", style: "primary" },
    ],
    accentColor: "var(--purple)",
  },

  {
    id: "agrigrow",
    number: "03",
    category: "ml",
    size: "normal",
    title: "AgriGrow",
    date: "Sep 2024",
    desc: "Hybrid ARIMA+LSTM forecasting system predicting Indian agricultural commodity prices — capturing linear trends and non-linear patterns simultaneously.",
    highlights: [
      "ARIMA for statistical trend & seasonality decomposition",
      "LSTM deep learning for non-linear price patterns",
      "Seasonality analysis + feature scaling pipeline",
    ],
    chips: [
      { label: "ARIMA",       color: "cyan" },
      { label: "LSTM",        color: "cyan" },
      { label: "TensorFlow",  color: "" },
      { label: "Python",      color: "" },
      { label: "Statsmodels", color: "" },
    ],
    links: [
      { label: "View Analysis →", href: "#", style: "primary" },
      { label: "⌥ Source",        href: "#", style: "ghost"   },
    ],
    accentColor: "var(--cyan)",
  },

  {
    id: "microfleet",
    number: "04",
    category: "backend",
    size: "normal",
    title: "MicroFleet",
    date: "Sep 2025",
    desc: "RESTful microservice for fleet management — vehicles, drivers, trip data. Fully containerised with Docker Compose and built-in health checks.",
    highlights: [
      "Docker + Docker Compose service orchestration",
      "Health checks and dependency handling on startup",
      "Prisma ORM schema migrations for PostgreSQL",
    ],
    chips: [
      { label: "Node.js",    color: "accent" },
      { label: "Express",    color: "" },
      { label: "PostgreSQL", color: "" },
      { label: "Docker",     color: "" },
      { label: "Prisma",     color: "" },
    ],
    links: [
      { label: "Live Demo →",  href: "#", style: "primary" },
      { label: "⌥ Repository", href: "#", style: "ghost"   },
    ],
  },

  {
    id: "survival",
    number: "05",
    category: "ml",
    size: "normal",
    title: "Survival Prediction",
    date: "Feb 2025",
    desc: "Clinical event-free survival prediction using Kaplan-Meier, Cox models, and LightAutoML with neural networks. Custom fairness metric using C-index across racial groups.",
    highlights: [
      "Fairness-aware evaluation across demographic groups",
      "GPU-accelerated training with LightAutoML",
      "Custom C-index metric for equitable performance",
    ],
    chips: [
      { label: "LightAutoML", color: "cyan" },
      { label: "Lifelines",   color: "cyan" },
      { label: "XGBoost",     color: "" },
      { label: "Scikit-learn",color: "" },
    ],
    links: [
      { label: "Research Details →", href: "#", style: "primary" },
    ],
    accentColor: "var(--cyan)",
  },

  {
    id: "legaldoc",
    number: "06",
    category: "ml",
    size: "normal",
    title: "Legal Doc Assist",
    date: "Jul – Nov 2025",
    desc: "Section-aware RAG pipeline for legal judgment documents. Hybrid NLP segmentation with semantic retrieval via transformer models and FAISS indexing — minimal hallucinations.",
    highlights: [
      "FAISS vector indexing with metadata mapping",
      "Section-level embeddings for precise legal queries",
      "Hybrid NLP document segmentation",
    ],
    chips: [
      { label: "FAISS",        color: "cyan" },
      { label: "Transformers", color: "cyan" },
      { label: "Python",       color: "" },
      { label: "RAG",          color: "" },
      { label: "XGBoost",      color: "" },
    ],
    links: [
      { label: "Read More →", href: "#", style: "primary" },
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