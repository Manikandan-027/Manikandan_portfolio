import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, CheckCircle2, Circle, Database, KeyRound, Rocket, Server, Smartphone, Workflow } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const LAYERS = [
  { icon: Smartphone, name: "Frontend", tech: "React Native / TypeScript", desc: "Typed, cross-platform UI that users touch", status: "learning" as const },
  { icon: Workflow, name: "REST API", tech: "JSON · HTTP · Contracts", desc: "Clean contract between UI and server", status: "learning" as const },
  { icon: Server, name: "Backend", tech: "Node.js / Express.js", desc: "Routes, validation, business logic", status: "learning" as const },
  { icon: Database, name: "Database", tech: "Integration in progress", desc: "Models, queries, persistence", status: "learning" as const },
  { icon: KeyRound, name: "Authentication", tech: "JWT — already used", desc: "Registration, login, protected routes", status: "known" as const },
  { icon: Rocket, name: "Deployment", tech: "Docker — already used", desc: "Containerize, ship, monitor", status: "known" as const },
];

const FLOW = [
  { from: "Tap in app", code: "POST /api/analyze { text }" },
  { from: "Express route", code: "auth → validate → service()" },
  { from: "Database + AI", code: "200 OK { result, sources }" },
];

export default function FullStack() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setStep((s) => (s + 1) % 3), 2200);
    return () => clearInterval(t);
  }, [playing]);

  return (
    <section id="fullstack" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          tag="Now expanding"
          title={<>Expanding into <span className="text-gradient">full-stack development</span></>}
          desc="InterviewArena added real experience with Next.js, React, TypeScript, PostgreSQL, Drizzle and a separate FastAPI AI service. I'm now deepening the stack further with Node.js, Express.js, REST design, databases and deployment."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* architecture stack */}
          <Reveal>
            <div className="card-ring relative overflow-hidden rounded-3xl p-6 md:p-8">
              <div className="dot-bg absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-slate-500">system architecture · live trace</p>
                  <button
                    onClick={() => setPlaying((p) => !p)}
                    className="font-mono2 rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-400 transition hover:border-emerald-400/40 hover:text-emerald-300"
                    aria-pressed={playing}
                  >
                    {playing ? "❚❚ pause" : "▶ replay"}
                  </button>
                </div>

                <div className="mt-6 space-y-1.5">
                  {LAYERS.map((l, i) => (
                    <div key={l.name}>
                      <motion.div
                        initial={{ opacity: 0, x: -18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                        className={`flex items-center gap-4 rounded-2xl border p-4 transition ${
                          l.status === "known"
                            ? "border-emerald-400/25 bg-emerald-400/[0.06]"
                            : "border-white/[0.08] bg-black/40 hover:border-amber-400/30"
                        }`}
                      >
                        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${l.status === "known" ? "bg-emerald-400/15 text-emerald-300" : "bg-amber-400/10 text-amber-300"}`}>
                          <l.icon size={19} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="text-[14.5px] font-bold text-white">{l.name}</p>
                            <span className={`font-mono2 text-[11px] ${l.status === "known" ? "text-emerald-300" : "text-amber-300/90"}`}>{l.tech}</span>
                          </div>
                          <p className="mt-0.5 truncate text-[12.5px] text-slate-500">{l.desc}</p>
                        </div>
                        {l.status === "known" ? (
                          <CheckCircle2 size={18} className="shrink-0 text-emerald-400" />
                        ) : (
                          <Circle size={18} className="shrink-0 animate-pulse text-amber-300/70" />
                        )}
                        <span className={`hidden rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider sm:block ${l.status === "known" ? "bg-emerald-400/15 text-emerald-300" : "bg-amber-400/15 text-amber-300"}`}>
                          {l.status === "known" ? "Used" : "Learning"}
                        </span>
                      </motion.div>
                      {i < LAYERS.length - 1 && (
                        <div className="flex justify-center py-0.5" aria-hidden="true">
                          <ArrowDown size={15} className="text-slate-600" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* request lifecycle */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="card-ring overflow-hidden rounded-3xl">
                <div className="border-b border-white/[0.07] bg-black/40 px-6 py-4">
                  <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-slate-500">frontend → api → backend → database → response</p>
                </div>
                <div className="space-y-3 p-6">
                  {FLOW.map((f, i) => (
                    <button
                      key={f.from}
                      onClick={() => { setStep(i); setPlaying(false); }}
                      className={`w-full rounded-2xl border p-4 text-left transition ${
                        step === i
                          ? "border-emerald-400/40 bg-emerald-400/[0.07] shadow-[0_0_30px_-10px_rgba(52,211,153,0.5)]"
                          : "border-white/[0.07] bg-white/[0.02] hover:border-white/15"
                      }`}
                      aria-pressed={step === i}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`font-mono2 flex h-7 w-7 items-center justify-center rounded-lg text-[12px] font-bold ${step === i ? "bg-emerald-400 text-emerald-950" : "bg-white/10 text-slate-400"}`}>
                          {i + 1}
                        </span>
                        <p className="text-[13.5px] font-semibold text-white">{f.from}</p>
                        {step === i && playing && (
                          <span className="ml-auto flex gap-1" aria-hidden="true">
                            {[0, 1, 2].map((d) => (
                              <motion.span key={d} className="h-1.5 w-1.5 rounded-full bg-emerald-400" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }} />
                            ))}
                          </span>
                        )}
                      </div>
                      <AnimatePresence initial={false}>
                        {step === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <pre className="font-mono2 mt-3 overflow-x-auto rounded-xl bg-black/60 p-3 text-[12px] text-emerald-200">{f.code}</pre>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  ))}
                  <div className="font-mono2 rounded-2xl border border-white/[0.07] bg-black/50 p-4 text-[12px] leading-relaxed">
                    <p className="text-slate-500">{"// what I'm practicing right now"}</p>
                    <p className="mt-1 text-slate-300"><span className="text-cyan-300">fetch</span>(<span className="text-emerald-300">"/api/analyze"</span>) → <span className="text-amber-300">Express</span> → <span className="text-violet-300">DB</span> → <span className="text-emerald-300">typed response</span></p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/[0.09] to-cyan-400/[0.05] p-6 md:p-7">
                <p className="font-display text-lg font-bold text-white">How my AI background accelerates this</p>
                <ul className="mt-4 space-y-2.5 text-[13.5px] leading-relaxed text-slate-300">
                  {[
                    "Already designed REST APIs with FastAPI — Express maps 1:1 conceptually.",
                    "Already handle JWT auth flows — reuse the same mental model in Node.",
                    "Already build React UIs — TypeScript + React Native are natural next steps.",
                  ].map((t) => (
                    <li key={t} className="flex gap-2.5">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-300" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}