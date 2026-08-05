/**
 * ============================================================
 *  EXPERIENCE CONFIG — deekshant.dev
 *  Edit experience, education, and certifications here.
 * ============================================================
 *
 *  EXPERIENCE fields:
 *    id          → unique string
 *    company     → company name
 *    role        → job title
 *    period      → display string e.g. "Jan 2026 — Present"
 *    location    → e.g. "Bengaluru, Karnataka"
 *    locationIcon→ emoji prefix
 *    current     → true | false  (shows green "Current" badge)
 *    bullets     → array of strings (HTML allowed for <strong>)
 *    chips       → array of { label, color }
 *
 *  EDUCATION fields:
 *    id, icon, name, period, degree, score
 *
 *  CERTIFICATIONS fields:
 *    id, short (2–3 char abbrev), name, issuer, date
 */

const EXPERIENCE = [
  {
    id: "outbox",
    company: "Outbox Labs",
    role: "SDE Intern",
    period: "Jan 2026 — May 2026",
    location: "Bengaluru, Karnataka",
    locationIcon: "📍",
    current: false,
    bullets: [
      "Integrated email account connections across <strong>5+ platforms</strong> using third-party APIs, Redis, and BullMQ to support <strong>50k+ Google and Microsoft accounts</strong> with improved performance and reliability.",
      "Revamped the ColdMail Reseller platform by updating legacy mailbox operations and rewriting cron jobs for more reliable scheduling.",
      "Migrated backend components to optimized implementations from newer products, improving performance, code quality, and long-term maintainability.",
    ],
    chips: [
      { label: "Redis",       color: "accent" },
      { label: "BullMQ",      color: "accent" },
      { label: "TypeScript",  color: "" },
      { label: "APIs",        color: "" },
    ],
  },
  {
    id: "praisnet",
    company: "Praisnet Ltd",
    role: "Data Science Intern",
    period: "May 2024 — Aug 2024",
    location: "Remote",
    locationIcon: "🌐",
    current: false,
    bullets: [
      "Performed EDA on the <strong>Amex credit risk dataset (45k+ records)</strong> and engineered key features such as credit utilisation, employment duration, and credit score.",
      "Built and evaluated multiple credit default prediction models using scikit-learn and <strong>XGBoost</strong>, selecting the best model using ROC-AUC, Precision, Recall, and F1-score.",
      "Achieved up to <strong>97% accuracy</strong> on the final model after feature engineering and evaluation.",
    ],
    chips: [
      { label: "XGBoost",     color: "cyan" },
      { label: "Scikit-learn",color: "cyan" },
      { label: "Python",      color: "" },
      { label: "Pandas",      color: "" },
    ],
  },
];

const EDUCATION = [
  {
    id: "vit",
    icon: "🏛",
    name: "VIT Chennai",
    period: "Aug 2022 — Apr 2026",
    degree: "B.Tech in Computer Science Engineering · AI & ML Specialisation",
  },
];

const CERTIFICATIONS = [
  {
    id: "azure",
    short: "AZ",
    name: "Azure AI Fundamentals",
    issuer: "Microsoft Azure",
    date: "August 2024",
  },
  {
    id: "oci",
    short: "OCI",
    name: "OCI AI Foundation Associate",
    issuer: "Oracle Cloud Infrastructure",
    date: "August 2025",
  },
];