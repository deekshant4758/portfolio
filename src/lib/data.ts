export const profile = {
  name: "Deekshant Gupta",
  firstName: "Deekshant",
  handle: "@deekshant",
  role: "Backend & AI Engineer",
  location: "Chennai, India",
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
    "I'm a backend and AI engineer. Most recently I built email infrastructure at Outbox Labs that supports 50,000+ Google and Microsoft accounts.",
  introSecondary:
    "Before that I trained credit-risk models at Praisnet and built a retrieval pipeline that turns dense PDFs into grounded questions. I graduated from VIT Chennai in 2026.",
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
    category: "Backend and automation",
    year: "2025",
    blurb:
      "Fault-tolerant email scheduling with delayed delivery, bulk sends, and recovery across server restarts.",
    highlights: [
      "Redis-backed BullMQ queues that recover automatically when a server restarts",
      "Rate limiting and concurrency control for high-volume workloads",
    ],
    stack: ["Next.js", "Express", "TypeScript", "BullMQ", "Redis", "MySQL", "Nodemailer", "Docker"],
    links: [
      { label: "Live", href: "https://mail-scheduler-122f.vercel.app/" },
      { label: "Source", href: "https://github.com/deekshant4758/mailScheduler" },
    ],
  },
  {
    id: "nextflow",
    index: "02",
    title: "NextFlow",
    category: "AI workflow tool",
    year: "2025",
    blurb:
      "A visual studio for AI image, video, and text pipelines, with secure auth and background execution.",
    highlights: [
      "Drag-and-drop pipeline builder over Gemini models",
      "Clerk authentication with protected routes and per-user history",
    ],
    stack: ["Next.js", "Node.js", "Express", "Gemini", "Clerk", "Prisma", "Neon", "Trigger.dev"],
    links: [
      { label: "Live", href: "https://nextflow-silk-six.vercel.app/" },
      { label: "Source", href: "https://github.com/deekshant4758/nextflow" },
    ],
  },
  {
    id: "askwise",
    index: "03",
    title: "AskWise",
    category: "ML and retrieval",
    year: "2024",
    blurb:
      "Question generation and semantic grading over unstructured PDFs, using hybrid retrieval and grounded generation.",
    highlights: [
      "RAG pipeline with SBERT embeddings and FAISS retrieval",
      "Context-grounded question generation with T5 and BART",
    ],
    stack: ["Python", "FastAPI", "Flask", "SBERT", "FAISS", "T5", "BART", "PyMuPDF", "MySQL"],
    links: [
      { label: "Source", href: "https://github.com/deekshant4758/automated-qa-pipeline" },
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
    id: "outbox",
    company: "Outbox Labs",
    role: "SDE Intern",
    period: "Jan 2026 — May 2026",
    location: "Bengaluru, India",
    bullets: [
      "Integrated email account connections across 5+ platforms using third-party APIs, Redis, and BullMQ, supporting 50k+ Google and Microsoft accounts.",
      "Revamped the ColdMail Reseller platform: rewrote cron jobs, updated legacy mailbox operations, and migrated backend components to newer implementations.",
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
      "Built and evaluated credit default models with scikit-learn and XGBoost, reaching up to 97% accuracy on the final model.",
    ],
    stack: ["Python", "XGBoost", "scikit-learn", "Pandas"],
  },
];

export const education = {
  school: "VIT Chennai",
  degree: "B.Tech, Computer Science Engineering",
  detail: "AI & ML specialisation",
  period: "Aug 2022 — Apr 2026",
  status: "Graduated",
};

export const certifications = [
  { name: "Pose AI Hackathon — Winner", issuer: "VIT Chennai", date: "Mar 2024" },
  { name: "Azure AI Fundamentals", issuer: "Microsoft Azure", date: "Aug 2024" },
  { name: "OCI AI Foundation Associate", issuer: "Oracle Cloud", date: "Aug 2025" },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C", "C++"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs", "BullMQ", "Redis", "Prisma", "JWT", "Clerk"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML / CSS", "Playwright"],
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "MySQL", "Neon", "FAISS", "SBERT", "Pandas"],
  },
  {
    title: "Cloud and tools",
    skills: ["Docker", "Docker Compose", "AWS EC2", "Git", "GitHub", "Postman", "Vercel"],
  },
  {
    title: "AI and ML",
    skills: ["TensorFlow", "scikit-learn", "XGBoost", "NLP", "OpenCV", "LLMs", "RAG", "LangGraph"],
  },
];

export const aboutFacts = [
  { label: "Based in", value: "Chennai, India" },
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
    id: "portrait",
    title: "Deekshant Gupta",
    description: "Backend and AI engineer, Chennai.",
    date: "2026",
    label: "Portrait",
    image: "/profile.jpg",
    alt: "Portrait of Deekshant Gupta",
  },
  {
    id: "pose-ai",
    title: "Pose AI Hackathon — Winner",
    description: "Won the VIT Chennai hackathon with a pose-estimation build.",
    date: "Mar 2024",
    label: "Award",
  },
  {
    id: "mailscheduler-live",
    title: "MailScheduler goes live",
    description: "Email scheduling with restart-safe queues, deployed on Vercel.",
    date: "2025",
    label: "Launch",
    href: "https://mail-scheduler-122f.vercel.app/",
  },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Media", href: "#media" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
