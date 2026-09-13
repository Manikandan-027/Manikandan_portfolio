import { Brain, Eye, GraduationCap, Network, Rocket, Wrench } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const PILLARS = [
  { icon: Brain, title: "NLP & GenAI", desc: "DistilBERT classifiers, RAG with LangChain + FAISS, Ollama-served LLMs." },
  { icon: Eye, title: "Computer Vision", desc: "OpenCV pipelines, camera-based ML classification for edge systems." },
  { icon: Network, title: "RAG & Retrieval", desc: "Chunk → embed → vector DB → grounded answers with sources." },
  { icon: Wrench, title: "IoT Systems", desc: "ESP32 + MPU6050 + GPS fused with ML, synced to cloud dashboards." },
  { icon: Rocket, title: "Full-Stack AI Apps", desc: "FastAPI + React + JWT, Flask serving — production-style builds." },
  { icon: GraduationCap, title: "Always Expanding", desc: "Now deepening React Native, Node.js & Express while strengthening full-stack engineering depth." },
];

const TIMELINE = [
  { year: "2023", title: "Started B.Tech AI & DS", desc: "Python, maths, data foundations at Velammal Engineering College." },
  { year: "2024", title: "ML + NLP depth", desc: "Scikit-learn, DistilBERT, TruthLens — 97.95% fake-news accuracy." },
  { year: "2025", title: "GenAI + IoT systems", desc: "Enterprise RAG platform, ESP32 pothole network, internship." },
  { year: "2026", title: "InterviewArena + full-stack AI", desc: "Next.js, React, TypeScript, PostgreSQL, FastAPI ML service and AI speaking coach.", current: true },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          tag="About me"
          title={<>From curiosity to <span className="text-gradient">working AI systems</span></>}
          desc="I don't just study AI — I ship it. Document intelligence, misinformation detection, IoT sensing: each project is a production-style system, now growing into full-stack products."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* story card */}
          <Reveal>
            <div className="card-ring relative h-full overflow-hidden rounded-3xl p-7 md:p-9">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" aria-hidden="true" />
              <p className="font-mono2 text-[12px] uppercase tracking-[0.2em] text-emerald-300/80">manikandan.md</p>
              <h3 className="font-display mt-3 text-2xl font-bold text-white md:text-[1.7rem]">
                AI & Data Science student who builds practical, usable systems.
              </h3>
              <div className="mt-5 space-y-4 text-[14.5px] leading-relaxed text-slate-400">
                <p>
                  I'm a <span className="font-medium text-slate-200">final-year B.Tech AI & Data Science student</span> at
                  Velammal Engineering College (Anna University, Chennai) with a simple rule:{" "}
                  <span className="font-medium text-slate-200">if I learn it, I build with it.</span>
                </p>
                <p>
                  That has meant working across <span className="text-slate-200">NLP, computer vision, generative AI,
                  retrieval-augmented generation, machine learning and IoT</span> — producing document intelligence
                  with chat + sources, a <span className="text-slate-200">97.95%-accurate fake-news detector</span>, and
                  an edge-to-cloud pothole warning network.
                </p>
                <p>
                  My builds are <span className="text-slate-200">full-stack in spirit</span> — authentication, APIs,
                  dashboards, health monitoring — which is why I'm now formally expanding into{" "}
                  <span className="text-amber-200">React Native, Node.js, Express.js, REST APIs, databases and deployment</span>.
                </p>
              </div>
              <div className="mt-7 grid grid-cols-3 gap-3">
                {[
                  { v: "4", l: "Featured systems" },
                  { v: "8.6", l: "CGPA / 10" },
                  { v: "20+", l: "Technologies" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-white/[0.07] bg-black/30 px-3 py-4 text-center">
                    <p className="font-display text-2xl font-bold text-white">{s.v}</p>
                    <p className="mt-1 text-[11.5px] text-slate-500">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* pillars + timeline */}
          <div className="flex flex-col gap-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="group h-full rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/[0.05] hover:shadow-[0_16px_40px_-16px_rgba(52,211,153,0.4)]">
                    <p.icon size={20} className="text-emerald-300 transition group-hover:scale-110" />
                    <p className="mt-3 text-[14px] font-semibold text-white">{p.title}</p>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-slate-500">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <div className="card-ring rounded-3xl p-6 md:p-7">
                <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-slate-500">developer timeline</p>
                <div className="mt-5 space-y-0">
                  {TIMELINE.map((t, i) => (
                    <div key={t.year} className="relative flex gap-4 pb-6 last:pb-0">
                      {i < TIMELINE.length - 1 && (
                        <span className="absolute left-[5px] top-4 h-full w-px bg-gradient-to-b from-emerald-400/50 to-white/5" aria-hidden="true" />
                      )}
                      <span className={`mt-1.5 h-[11px] w-[11px] shrink-0 rounded-full border-2 ${t.current ? "border-amber-300 bg-amber-300/30 shadow-[0_0_12px_rgba(252,211,77,0.8)]" : "border-emerald-400 bg-emerald-400/20"}`} aria-hidden="true" />
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono2 text-[11.5px] text-emerald-300">{t.year}</span>
                          <p className="text-[14px] font-semibold text-white">{t.title}</p>
                          {t.current && (
                            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                              Now
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-[13px] text-slate-500">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}