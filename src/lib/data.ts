export const profile = {
  name: "Deekshant Gupta",
  firstName: "Deekshant",
  handle: "@deekshant",
  role: "Backend & AI Engineer",
  location: "Gurugram, India",
  relocation: "Noida, Gurugram, Bengaluru",
  workMode: "In office or hybrid",
  availability: "Available immediately",
  email: "deekshant2003@gmail.com",
  phone: "+91 70175 21581",
  phoneHref: "+917017521581",
  github: "https://github.com/deekshant4758",
  githubUser: "deekshant4758",
  linkedin: "https://www.linkedin.com/in/deekshant-gupta-986774202/",
  leetcode: "https://leetcode.com/u/deekshant0_3/",
  leetcodeUser: "deekshant0_3",
  resume: "/resume.pdf",
  intro:
    "I'm a backend and AI engineer, currently building Python backends, on-premise RAG, and low-latency tools at Agentropic.",
  introSecondary:
    "Before that I built email infrastructure at Outbox Labs supporting 50,000+ accounts, and trained credit-risk models at Prasunet. I graduated from VIT Chennai in 2026.",
};

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  blurb: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "mailscheduler",
    index: "01",
    title: "MailScheduler",
    category: "Email infrastructure",
    year: "2025",
    blurb:
      "A fault-tolerant email scheduler with delayed delivery, bulk dispatch, rate limiting, and recovery across server restarts.",
    highlights: [
      "BullMQ and Redis queues with concurrency control and exponential-backoff retries",
      "Automatic recovery of in-flight jobs when a server restarts",
    ],
    stack: ["Next.js", "Express.js", "TypeScript", "BullMQ", "Redis", "MySQL", "Docker"],
    links: [
      { label: "Live", href: "https://mail-scheduler-122f.vercel.app/" },
      { label: "Source", href: "https://github.com/deekshant4758/mailScheduler" },
    ],
  },
  {
    id: "askwise",
    index: "02",
    title: "AskWise",
    category: "AI retrieval",
    year: "2024",
    blurb:
      "A hybrid LLM and semantic retrieval pipeline that generates context-aware questions and grades answers from unstructured PDFs.",
    highlights: [
      "SBERT embeddings with FAISS retrieval over dense documents",
      "Grounded question generation and answer grading with T5 and BART",
    ],
    stack: ["Python", "FastAPI", "Flask", "FAISS", "LLMs", "MySQL", "Docker"],
    links: [
      { label: "Source", href: "https://github.com/deekshant4758/automated-qa-pipeline" },
    ],
  },
  {
    id: "legalbert",
    index: "03",
    title: "LegalBERT",
    category: "Legal NLP",
    year: "2024",
    blurb:
      "A multi-task LegalBERT system for judgment outcome prediction, bias detection, and argument mining.",
    highlights: [
      "Owned PDF extraction and mapping for the legal judgment corpus",
      "Contributed to a FAISS-backed RAG pipeline for question answering over judgments",
    ],
    stack: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "LegalBERT",
      "FAISS",
      "SentenceTransformers",
    ],
    links: [
      {
        label: "Source",
        href: "https://github.com/YuvrajCodes1925/Legal-Document-Assistant",
      },
    ],
  },
  {
    id: "nextflow",
    index: "04",
    title: "NextFlow",
    category: "AI workflow tool",
    year: "2025",
    blurb:
      "A full-stack visual studio for AI pipelines, with secure authentication and background execution.",
    highlights: [
      "Drag-and-drop workflow builder for composing AI pipelines",
      "Prisma and PostgreSQL storage with asynchronous background jobs",
    ],
    stack: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Docker"],
    links: [
      { label: "Live", href: "https://nextflow-silk-six.vercel.app/" },
      { label: "Source", href: "https://github.com/deekshant4758/nextflow" },
    ],
  },
];

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    id: "agentropic",
    company: "Agentropic",
    role: "Product Engineer Intern",
    period: "Sep 2026 — Present",
    location: "Gurugram, India",
    bullets: [
      "Engineered the Python backend for an EdTech platform — core modules, asynchronous workload scaling, and permission-based access control — scaling it to 1,000+ customers.",
      "Built a privacy-focused enterprise RAG application on local LLaMA 2 / Mistral-7B with FAISS and Hugging Face Transformers, keeping sensitive data on-premise.",
      "Built Bolio, a real-time dictation app in Rust and TypeScript using Deepgram, with low-latency speech-to-text and system-level text insertion on macOS and Windows.",
    ],
    stack: ["Python", "Rust", "TypeScript", "LLaMA 2", "Mistral-7B", "FAISS", "Deepgram"],
  },
  {
    id: "outbox",
    company: "Outbox Labs",
    role: "SDE Intern",
    period: "Jan 2026 — Jul 2026",
    location: "Bengaluru, India",
    bullets: [
      "Implemented 10+ production backend features end to end, designing REST API integrations and core workflow logic.",
      "Built and operated backend infrastructure on Redis and BullMQ across 5+ third-party platforms, supporting 50,000+ accounts with automatic recovery across server restarts.",
      "Scaled mailbox export processing to 50,000 requests under load, cutting processing time from hours to under 15 minutes.",
      "Raised Lighthouse performance from 50 to 94 in collaboration with the product owner and UI team.",
    ],
    stack: ["TypeScript", "Redis", "BullMQ", "REST APIs", "MySQL"],
  },
  {
    id: "prasunet",
    company: "Prasunet Pvt Ltd",
    role: "Data Science Intern",
    period: "Jun 2024 — Aug 2024",
    location: "Remote",
    bullets: [
      "Performed exploratory data analysis on a 45,000+ record credit risk dataset and engineered features such as credit utilisation, employment duration, and credit score.",
      "Benchmarked logistic regression, tree-based models, and XGBoost on ROC-AUC, precision, recall, and F1; XGBoost was most reliable at up to 97% accuracy.",
    ],
    stack: ["Python", "XGBoost", "scikit-learn", "Pandas"],
  },
];

export const education = {
  school: "VIT Chennai",
  degree: "B.Tech, Computer Science Engineering",
  detail: "AI & ML specialisation · CGPA 8.49/10",
  period: "2022 — 2026",
  status: "Graduated",
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  href?: string;
};

export const certifications: Certification[] = [
  {
    name: "OCI AI Foundation Associate",
    issuer: "Oracle",
    date: "Aug 2025",
    href: "/certifications/oci-ai-foundations.jpg",
  },
  {
    name: "Azure AI Fundamentals",
    issuer: "Microsoft Azure",
    date: "Aug 2024",
    href: "/certifications/azure-ai-fundamentals.jpg",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "Rust", "SQL", "C/C++"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST API design",
      "FastAPI",
      "Flask",
      "BullMQ",
      "Redis",
      "Asynchronous processing",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Prisma ORM"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "Docker Compose", "Kubernetes", "AWS (EC2, S3)", "Linux", "Git", "GitHub"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "AI / ML",
    skills: ["LLMs", "RAG", "FAISS", "LangGraph", "PySpark", "XGBoost", "SHAP"],
  },
];

export const aboutFacts = [
  { label: "Based in", value: "Gurugram, India" },
  { label: "Open to", value: "Noida, Gurugram, Bengaluru" },
  { label: "Work mode", value: "In office or hybrid" },
  { label: "Joining", value: "Immediately" },
];

/**
 * Media config.
 * Add an item here and it appears on the site. To use a picture, drop the file
 * in `public/media/` and set `image` to "/media/file-name.jpg".
 */
export type MediaItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  label: string;
  image?: string;
  alt?: string;
  href?: string;
};

export const media: MediaItem[] = [
  {
    id: "outbox-team",
    title: "Outbox Labs, Bengaluru",
    description: "The team behind the email infrastructure work.",
    date: "Apr 2026",
    label: "Team",
    image: "/media/outbox-labs-april-2026.jpg",
    alt: "The Outbox Labs team in front of the company logo wall",
  },
  {
    id: "event-leads",
    title: "Event leads at VIT Chennai",
    description: "With the events team after a campus event.",
    date: "Apr 2024",
    label: "Campus",
    image: "/media/event-leads-april-2024.jpg",
    alt: "Group of event leads standing together on campus at VIT Chennai",
  },
  {
    id: "password-24-stage",
    title: "Password ’24",
    description: "On stage at Password ’24, VIT Chennai.",
    date: "Jan 2024",
    label: "Event",
    image: "/media/password-24-stage.jpg",
    alt: "Three students on stage in front of the Password ’24 sign",
  },
  {
    id: "password-24-hall",
    title: "Inside Password ’24",
    description: "The main hall during the event.",
    date: "Jan 2024",
    label: "Event",
    image: "/media/password-24-hall.jpg",
    alt: "Students seated in the main hall during Password ’24",
  },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Media", href: "#media" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
