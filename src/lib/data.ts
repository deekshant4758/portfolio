export const profile = {
  name: "Deekshant Gupta",
  firstName: "Deekshant",
  handle: "@deekshant",
  role: "Backend & AI Engineer",
  location: "Chennai, India",
  email: "deekshant2003@gmail.com",
  github: "https://github.com/deekshant4758",
  githubUser: "deekshant4758",
  linkedin: "https://www.linkedin.com/in/deekshant-gupta-986774202/",
  leetcode: "https://leetcode.com/u/deekshant0_3/",
  leetcodeUser: "deekshant0_3",
  resume: "/resume.pdf",
  availability: "Open to backend / AI engineering roles",
  heroLine: "I build systems that hold up.",
  summary:
    "Backend-focused engineer building automation, AI workflows, and data-heavy products. I care about the unglamorous parts — queues that survive restarts, jobs that don't drop, and systems that stay boring in production.",
};

export const stats = [
  { value: "50k+", label: "accounts supported" },
  { value: "97%", label: "model accuracy" },
  { value: "3", label: "flagship systems" },
  { value: "2", label: "engineering internships" },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  blurb: string;
  highlights: string[];
  stack: string[];
  visual: "queue" | "flow" | "graph";
  links: { label: string; href: string; primary?: boolean }[];
};

export const projects: Project[] = [
  {
    id: "mailscheduler",
    index: "01",
    title: "MailScheduler",
    category: "Backend / Automation",
    year: "2025",
    blurb:
      "Fault-tolerant email scheduling and automation with delayed delivery, bulk sends, and recovery across server restarts.",
    highlights: [
      "Redis-backed BullMQ queues with automatic recovery across restarts",
      "Rate limiting and concurrency control for high-volume workloads",
      "Delayed delivery, bulk campaigns, and templated automation",
    ],
    stack: ["Next.js", "Express", "TypeScript", "BullMQ", "Redis", "MySQL", "Docker"],
    visual: "queue",
    links: [
      { label: "Live", href: "https://mail-scheduler-122f.vercel.app/", primary: true },
      { label: "Source", href: "https://github.com/deekshant4758/mailScheduler" },
    ],
  },
  {
    id: "nextflow",
    index: "02",
    title: "NextFlow",
    category: "AI Workflow Tool",
    year: "2025",
    blurb:
      "Visual workflow studio for AI-powered image, video, and text pipelines, with secure auth and scalable background execution.",
    highlights: [
      "Drag-and-drop pipeline builder for multi-step AI workflows",
      "Clerk authentication with protected routes and per-user history",
      "Prisma + Neon storage with Trigger.dev background jobs",
    ],
    stack: ["Next.js", "TypeScript", "Clerk", "Prisma", "Neon", "Trigger.dev"],
    visual: "flow",
    links: [
      { label: "Live", href: "https://nextflow-silk-six.vercel.app/", primary: true },
      { label: "Source", href: "https://github.com/deekshant4758/nextflow" },
    ],
  },
  {
    id: "askwise",
    index: "03",
    title: "AskWise",
    category: "ML / RAG",
    year: "2024",
    blurb:
      "AI-powered question generation and grading over unstructured PDFs, using hybrid semantic retrieval and grounded generation.",
    highlights: [
      "RAG pipeline with SBERT embeddings and FAISS retrieval",
      "Context-grounded question generation with T5 and BART",
      "Semantic answer grading for academic documents",
    ],
    stack: ["Python", "FastAPI", "Flask", "FAISS", "SBERT", "T5", "BART", "Docker"],
    visual: "graph",
    links: [
      { label: "Source", href: "https://github.com/deekshant4758/automated-qa-pipeline", primary: true },
    ],
  },
];

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    id: "outbox",
    company: "Outbox Labs",
    role: "SDE Intern",
    period: "Jan 2026 — May 2026",
    location: "Bengaluru, India",
    bullets: [
      "Integrated email account connections across 5+ platforms using third-party APIs, Redis, and BullMQ to support 50k+ Google and Microsoft accounts.",
      "Revamped the ColdMail Reseller platform by modernising legacy mailbox operations and rewriting cron jobs for more reliable scheduling.",
      "Migrated backend components to optimised implementations from newer products, improving performance, code quality, and maintainability.",
    ],
    stack: ["TypeScript", "Redis", "BullMQ", "REST APIs", "MySQL"],
  },
  {
    id: "praisnet",
    company: "Praisnet Ltd",
    role: "Data Science Intern",
    period: "May 2024 — Aug 2024",
    location: "Remote",
    bullets: [
      "Performed EDA on the Amex credit risk dataset (45k+ records) and engineered features like credit utilisation, employment duration, and credit score.",
      "Built and evaluated credit default models with scikit-learn and XGBoost, selecting the best model on ROC-AUC, precision, recall, and F1.",
      "Reached up to 97% accuracy on the final model after feature engineering and evaluation.",
    ],
    stack: ["Python", "XGBoost", "scikit-learn", "Pandas"],
  },
];

export const education = {
  school: "VIT Chennai",
  degree: "B.Tech, Computer Science Engineering",
  detail: "AI & ML Specialisation",
  period: "Aug 2022 — Apr 2026",
};

export const certifications = [
  { name: "Azure AI Fundamentals", issuer: "Microsoft Azure", date: "Aug 2024" },
  { name: "OCI AI Foundation Associate", issuer: "Oracle Cloud", date: "Aug 2025" },
  { name: "Pose AI Hackathon — Winner", issuer: "VIT Chennai", date: "Mar 2024" },
];

export const skillGroups = [
  {
    title: "Frontend",
    note: "Interfaces that stay out of the way",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS", "Playwright"],
  },
  {
    title: "Backend",
    note: "The part that has to be dependable",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "BullMQ",
      "Prisma",
      "REST APIs",
    ],
  },
  {
    title: "DevOps",
    note: "Ship it, then keep it running",
    skills: ["Docker", "Docker Compose", "AWS", "Git", "GitHub", "Vercel"],
  },
  {
    title: "AI / ML",
    note: "Retrieval, models, and grounded output",
    skills: [
      "Python",
      "TensorFlow",
      "scikit-learn",
      "XGBoost",
      "NLP",
      "OpenCV",
      "LLMs",
      "RAG",
      "LangGraph",
      "FAISS",
      "SBERT",
    ],
  },
];

export const marqueeWords = [
  "backend engineering",
  "distributed queues",
  "AI workflows",
  "retrieval systems",
  "product execution",
  "reliable systems",
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
