/**
 * SINGLE SOURCE OF TRUTH
 *
 * To update this portfolio later, start here. The UI reads from this file,
 * so you normally do NOT need to edit the React components.
 */
export const PROFILE = {
  name: "Manikandan B",
  short: "MB",
  role: "AI & Data Science Engineer",
  tagline: "Building Intelligent Digital Products",
  positioning:
    "AI engineering + full-stack development, with hands-on work across RAG, NLP, ML, IoT and web applications.",
  college: "Velammal Engineering College",
  university: "Anna University, Chennai",
  degree: "B.Tech, Artificial Intelligence & Data Science",
  years: "2023 – 2027",
  cgpa: "8.6/10",
  email: "manikandan270706@gmail.com",
  phone: "+91 7358295991",
  github: "https://github.com/Manikandan-027",
  githubHandle: "github.com/Manikandan-027",
  linkedin: "https://linkedin.com/in/manikandan-b-aa45032a0",
  linkedinHandle: "linkedin.com/in/manikandan-b-aa45032a0",
};

export type SkillLevel = "Experienced" | "Working Knowledge" | "Currently Learning";

export interface Skill {
  name: string;
  level: SkillLevel;
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  blurb: string;
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    icon: "code",
    blurb: "Core languages for AI systems & application development",
    skills: [
      { name: "Python", level: "Experienced", note: "AI apps, APIs, ML workflows" },
      { name: "SQL", level: "Working Knowledge", note: "Queries, joins, analytics" },
      { name: "C (Basics)", level: "Working Knowledge", note: "Fundamentals & memory" },
    ],
  },
  {
    id: "genai",
    title: "AI / Generative AI",
    icon: "sparkles",
    blurb: "RAG systems, LLM applications & retrieval",
    skills: [
      { name: "LangChain", level: "Experienced", note: "Chains, agents, RAG" },
      { name: "RAG Pipelines", level: "Experienced", note: "Chunk → embed → retrieve" },
      { name: "FAISS", level: "Experienced", note: "Vector search" },
      { name: "Vector Databases", level: "Working Knowledge", note: "Semantic storage" },
      { name: "Ollama", level: "Working Knowledge", note: "Local LLM serving" },
      { name: "Prompt Engineering", level: "Working Knowledge", note: "Grounded answers" },
      { name: "Hugging Face Transformers", level: "Working Knowledge", note: "Pretrained models" },
      { name: "DistilBERT", level: "Working Knowledge", note: "Fine-tuned classifier" },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning / Data Science",
    icon: "chart",
    blurb: "Classical ML, NLP & data analysis",
    skills: [
      { name: "Scikit-learn", level: "Experienced", note: "Training & evaluation" },
      { name: "Pandas", level: "Experienced", note: "Data wrangling" },
      { name: "NumPy", level: "Experienced", note: "Numerical compute" },
      { name: "TF-IDF", level: "Working Knowledge", note: "Text features" },
      { name: "NLTK", level: "Working Knowledge", note: "NLP preprocessing" },
      { name: "Matplotlib", level: "Working Knowledge", note: "Plots & EDA" },
      { name: "Seaborn", level: "Working Knowledge", note: "Statistical viz" },
    ],
  },
  {
    id: "cv",
    title: "Computer Vision",
    icon: "eye",
    blurb: "Image processing & classification",
    skills: [{ name: "OpenCV", level: "Working Knowledge", note: "Capture & preprocessing" }],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "layout",
    blurb: "Interfaces for AI and data products",
    skills: [
      { name: "React", level: "Working Knowledge", note: "Dashboards, chat UIs" },
      { name: "Next.js", level: "Working Knowledge", note: "Full-stack web application" },
      { name: "TypeScript", level: "Working Knowledge", note: "Used in InterviewArena; deepening now" },
      { name: "Tailwind CSS", level: "Working Knowledge", note: "Responsive UI styling" },
      { name: "Framer Motion", level: "Working Knowledge", note: "Interactive UI motion" },
      { name: "React Native", level: "Currently Learning", note: "Cross-platform mobile UI" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    blurb: "APIs, application servers & data access",
    skills: [
      { name: "FastAPI", level: "Working Knowledge", note: "AI knowledge platform API" },
      { name: "Flask", level: "Working Knowledge", note: "TruthLens serving" },
      { name: "REST APIs", level: "Working Knowledge", note: "Design & integration" },
      { name: "PostgreSQL", level: "Working Knowledge", note: "Used with Neon" },
      { name: "Drizzle ORM", level: "Working Knowledge", note: "Type-safe DB access" },
      { name: "Node.js", level: "Currently Learning", note: "Backend services" },
      { name: "Express.js", level: "Currently Learning", note: "Routes & middleware" },
    ],
  },
  {
    id: "ai-speech",
    title: "AI Speech / NLP",
    icon: "message",
    blurb: "Speech-to-text & language feedback",
    skills: [
      { name: "faster-whisper", level: "Working Knowledge", note: "Speech-to-text service" },
      { name: "T5-based GEC", level: "Working Knowledge", note: "Grammar correction" },
      { name: "Deterministic Grammar Rules", level: "Working Knowledge", note: "Validation & classification" },
    ],
  },
  {
    id: "iot",
    title: "IoT",
    icon: "cpu",
    blurb: "Edge sensing → cloud dashboards",
    skills: [
      { name: "ESP32", level: "Working Knowledge", note: "Sensor hub" },
      { name: "MPU6050", level: "Working Knowledge", note: "Vibration / IMU" },
      { name: "Neo-6M GPS", level: "Working Knowledge", note: "Geolocation" },
      { name: "Sensor Fusion", level: "Working Knowledge", note: "Shock + vision + GPS" },
      { name: "Cloud Database", level: "Working Knowledge", note: "Telemetry sync" },
    ],
  },
  {
    id: "tools",
    title: "Deployment / Tools",
    icon: "wrench",
    blurb: "Shipping, auth, experiments & developer workflow",
    skills: [
      { name: "Docker", level: "Working Knowledge", note: "Containerized services" },
      { name: "Git / GitHub", level: "Working Knowledge", note: "Version control & source management" },
      { name: "Authentication", level: "Working Knowledge", note: "JWT, sessions, HttpOnly cookies" },
      { name: "Nodemailer", level: "Working Knowledge", note: "SMTP email notifications" },
      { name: "Streamlit", level: "Working Knowledge", note: "Rapid ML demos" },
      { name: "Jupyter Notebook", level: "Experienced", note: "Experiments & EDA" },
      { name: "Google Colab", level: "Experienced", note: "Model training" },
    ],
  },
];

export type ProjectTag = "AI / ML" | "Generative AI" | "Full Stack" | "IoT";
export type ProjectStatus = "Completed" | "Currently Building";

export interface Project {
  id: string;
  index: string;
  name: string;
  short: string;
  problem: string;
  solution: string;
  description: string;
  technologies: string[];
  features: string[];
  tags: ProjectTag[];
  architecture: string[];
  results: string[];
  accent: string;
  status: ProjectStatus;
  metric?: { value: string; label: string };
  metrics?: { value: string; label: string }[];
  liveUrl?: string;
  repoUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "interview-arena",
    index: "01",
    name: "InterviewArena",
    short: "Full-stack AI interview preparation platform",
    problem:
      "Students often practice interview skills across disconnected tools, making it difficult to measure progress, identify weak areas and improve communication alongside technical ability.",
    solution:
      "A full-stack interview preparation platform combining technical interviews, aptitude, coding, reading, listening and speaking practice with persistent attempt history, statistics and an AI speaking coach.",
    description:
      "A full-stack AI-powered interview preparation platform that brings practice, evaluation and progress tracking into one application. The heavier speaking/English AI pipeline runs as a separate FastAPI service so it can use suitable GPU infrastructure.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "PostgreSQL",
      "Neon",
      "Drizzle ORM",
      "FastAPI",
      "faster-whisper",
      "T5 GEC",
    ],
    features: [
      "Technical interview practice",
      "Aptitude + coding practice",
      "Reading + listening modules",
      "Speaking practice with AI feedback",
      "Speech-to-text with faster-whisper",
      "Grammar correction with fine-tuned T5-based GEC",
      "Deterministic grammar rules + validation",
      "Weak-area identification and statistics",
      "Persistent users, questions, attempts and answers",
      "Secure password hashing + sessions + CAPTCHA",
      "HttpOnly cookie-based session handling",
      "SMTP email notifications with Nodemailer",
    ],
    tags: ["Full Stack", "Generative AI"],
    architecture: [
      "Next.js UI",
      "API routes",
      "PostgreSQL + Neon",
      "Drizzle ORM",
      "FastAPI ML service",
      "Whisper STT",
      "T5 GEC + rules",
      "Feedback + statistics",
    ],
    results: [
      "Unified multi-skill interview practice experience",
      "Persistent performance tracking and weak-area analysis",
      "Separate ML service for heavier AI workloads",
      "Vercel-ready Next.js application architecture",
      "GitHub-based source-code management",
    ],
    accent: "#34d399",
    status: "Completed",
    metrics: [
      { value: "6+", label: "Practice areas" },
      { value: "AI", label: "Speaking coach" },
      { value: "2", label: "App + ML services" },
    ],
  },
  {
    id: "enterprise-ai",
    index: "02",
    name: "Enterprise AI Knowledge Assistant",
    short: "Full-stack RAG knowledge platform",
    problem:
      "Organisations sit on piles of PDFs, DOCX and TXT files that are hard to search. Keyword search misses meaning, and generic chatbots can hallucinate without sources.",
    solution:
      "A full-stack knowledge platform: upload documents → chunk + embed → store in a vector database → semantic retrieval → grounded LLM answers with source references, behind JWT authentication.",
    description:
      "Full-stack AI knowledge platform where users upload PDF, DOCX and TXT documents. Documents are chunked, embedded and stored in a vector database for semantic retrieval with AI chat, analytics and system monitoring.",
    technologies: ["Python", "FastAPI", "React", "Ollama", "Vector Database", "JWT Authentication"],
    features: [
      "Document upload (PDF / DOCX / TXT)",
      "Semantic retrieval over embeddings",
      "AI chat with LLM-based answers",
      "Source references per answer",
      "Document management",
      "Analytics dashboard",
      "System health monitoring",
      "Backup / restore",
      "JWT auth + registration / login",
    ],
    tags: ["Generative AI", "Full Stack"],
    architecture: ["Upload & parse", "Chunk + embed", "Vector DB", "Retriever", "Ollama LLM", "Grounded answer + sources"],
    results: ["Production-style full-stack RAG flow", "Authenticated multi-user access", "Observable system with health + analytics"],
    accent: "#34d399",
    metric: { value: "RAG", label: "Grounded answers with sources" },
    status: "Completed",
  },
  {
    id: "truthlens",
    index: "03",
    name: "TruthLens AI — Fake News Detection",
    short: "Explainable NLP classifier at 97.95% accuracy",
    problem:
      "Misinformation spreads faster than manual fact-checking. Readers need instant verdicts — not just a label, but an explanation of why the model decided.",
    solution:
      "Fine-tuned DistilBERT classifier served through Flask with explainable-AI highlights, analytics, auth and one-click automated reports in a responsive UI.",
    description:
      "Fake-news detection platform built on DistilBERT + Transformers with explainable AI, real-time fact checking, analytics and automated report generation.",
    technologies: ["Python", "DistilBERT", "Transformers", "Explainable AI", "Flask"],
    features: [
      "Fake news detection",
      "Real-time fact checking",
      "Explainable AI highlights",
      "Analytics views",
      "User authentication",
      "Automated report generation",
      "Responsive UI",
    ],
    tags: ["AI / ML"],
    architecture: ["Collect & clean", "Tokenize", "DistilBERT fine-tune", "Explainability", "Flask API", "Report + UI"],
    results: ["97.95% accuracy", "97.98% F1-score", "Evaluated on 1,267 test articles"],
    accent: "#22d3ee",
    metrics: [
      { value: "97.95%", label: "Accuracy" },
      { value: "97.98%", label: "F1-score" },
      { value: "1,267", label: "Test articles" },
    ],
    status: "Completed",
  },
  {
    id: "pothole",
    index: "04",
    name: "IoT-Based Smart Pothole Detection",
    short: "Edge sensing + ML + live road-hazard alerts",
    problem:
      "Potholes cause accidents and vehicle damage, but road surveys are manual and slow. Cities need automatic detection with location and severity.",
    solution:
      "ESP32 + MPU6050 senses shocks, a camera feeds an ML classifier for severity, Neo-6M GPS tags location, and cloud sync powers a dashboard with voice + LED/buzzer warnings.",
    description:
      "IoT warning system fusing vibration sensing, camera-based ML classification, GPS and cloud dashboards for real-time road-hazard alerts.",
    technologies: ["ESP32", "MPU6050", "Neo-6M GPS", "Machine Learning", "Cloud Database"],
    features: [
      "Vibration / shock detection",
      "Camera-based classification",
      "Severity: Normal / Small / Dangerous",
      "GPS location tagging",
      "Cloud upload",
      "Real-time dashboard",
      "Voice alerts",
      "Optional LED / buzzer alerts",
    ],
    tags: ["IoT", "AI / ML"],
    architecture: ["ESP32 + MPU6050", "Shock detect", "Camera frame", "ML severity", "GPS tag", "Cloud DB", "Dashboard + alerts"],
    results: ["3-tier severity model", "End-to-end edge-to-cloud loop", "Real-time driver warnings"],
    accent: "#fbbf24",
    metric: { value: "3-tier", label: "Normal / Small / Dangerous" },
    status: "Completed",
  },
];

export const EXPERIENCE = {
  role: "Developer Intern",
  company: "Virtual Tech Services, Ambattur",
  duration: "1 Month",
  points: [
    "Built the Fake News Detection application end-to-end — from data collection to final testing",
    "Data preprocessing, cleaning and tokenization for transformer training",
    "Model training, evaluation and error analysis",
    "Deployment support for the Flask application",
    "Collaborated with the development team on reviews and iteration",
  ],
};

export const EDUCATION = [
  {
    degree: "B.Tech, Artificial Intelligence & Data Science",
    school: "Velammal Engineering College — Anna University, Chennai",
    period: "2023 – 2027",
    score: "CGPA 8.6 / 10",
    status: "Final year",
    detail: "NLP · Machine Learning · Generative AI · RAG · Computer Vision · Full-stack AI applications",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Thiru Vi Ka Higher Secondary School",
    period: "2021 – 2023",
    score: "87%",
    status: "Completed",
    detail: "Mathematics · Physics · Chemistry · Computer Science",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    school: "Thiru Vi Ka Higher Secondary School",
    period: "2020 – 2021",
    score: "100%",
    status: "Completed",
    detail: "Strong foundation across sciences & mathematics",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Artificial Intelligence Fundamentals",
    org: "IBM SkillsBuild",
    icon: "brain",
    desc: "Core AI concepts, ML workflows and responsible-AI foundations.",
  },
  {
    title: "Big Data Processing with Apache Spark (PySpark)",
    org: "IBM",
    icon: "database",
    desc: "Distributed data processing with Spark and PySpark.",
  },
  {
    title: "Natural Language Processing",
    org: "NPTEL",
    icon: "message",
    desc: "Linguistics, classical NLP and neural approaches to text.",
  },
];

export const JOURNEY = [
  { title: "AI & Data Science", desc: "B.Tech foundation — Python, SQL, maths, data", done: true },
  { title: "Machine Learning", desc: "Scikit-learn, evaluation, classical models", done: true },
  { title: "Generative AI / RAG", desc: "LangChain, FAISS, Ollama, grounded chat", done: true },
  { title: "Computer Vision", desc: "OpenCV, classification, visual pipelines", done: true },
  { title: "Full-Stack AI Applications", desc: "Next.js + React + TypeScript + PostgreSQL + FastAPI", done: true },
  { title: "AI Speech Applications", desc: "faster-whisper + T5-based grammar correction + rules", done: true },
  { title: "React Native", desc: "Currently learning — mobile + typed UI", done: false },
  { title: "Node.js + Express.js", desc: "Currently learning — backend services", done: false },
  { title: "REST APIs + Databases", desc: "Currently learning deeper — integration, validation, data modeling", done: false },
  { title: "Deployment & Scalable AI Products", desc: "Goal — deployed, authenticated, observable applications", done: false },
];

export const CURRENTLY_LEARNING = [
  "React Native",
  "Node.js",
  "Express.js",
  "REST API design",
  "Database integration",
  "Authentication",
  "Deployment",
];

