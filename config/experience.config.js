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
    period: "Jan 2026 — Present",
    location: "Bengaluru, Karnataka",
    locationIcon: "📍",
    current: true,
    bullets: [
      "Implemented <strong>10+ production features</strong> from scratch, designing the core workflow and integration logic end-to-end.",
      "Optimised frontend performance, boosting <strong>Lighthouse score from 50 → 94</strong>, dramatically improving load speed and UX.",
      "Engineered export pipelines automating previously manual workflows, cutting processing time to <strong>under 15 minutes</strong>.",
      "Scaled backend systems to reliably process <strong>2,000+ daily export requests</strong>, ensuring stability under high load.",
    ],
    chips: [
      { label: "React",       color: "accent" },
      { label: "Node.js",     color: "accent" },
      { label: "TypeScript",  color: "" },
      { label: "PostgreSQL",  color: "" },
    ],
  },
  {
    id: "prasunet",
    company: "Prasunet Pvt Ltd",
    role: "Data Science Intern",
    period: "Jun 2024 — Aug 2024",
    location: "Remote",
    locationIcon: "🌐",
    current: false,
    bullets: [
      "Performed exploratory data analysis on the <strong>Amex credit risk dataset (45k+ records)</strong>, identifying key risk patterns and feature distributions.",
      "Engineered impactful features — credit utilisation, employment duration, credit score — to improve model signal.",
      "Built and compared multiple models using Scikit-learn + <strong>XGBoost, achieving 97% accuracy</strong> via hyperparameter tuning.",
      "Evaluated models with ROC-AUC, Precision, Recall, F1; identified XGBoost as the best model for credit default risk.",
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
    period: "Aug 2022 — May 2026",
    degree: "B.Tech in Computer Science Engineering · AI & ML Specialisation",
    score: "CGPA: 8.47 / 10.0",
    scoreColor: "accent",
  },
  {
    id: "dps",
    icon: "🎓",
    name: "DPS Bulandshahr",
    period: "Completed June 2022",
    degree: "All India Senior School Certificate Examination (AISSCE) · CBSE",
    score: "Score: 93.4%",
    scoreColor: "accent",
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