import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3, Code2, Cpu, Database, Eye, LayoutGrid, Server, Sparkles, Wrench,
} from "lucide-react";
import { CURRENTLY_LEARNING, SKILL_CATEGORIES } from "../data/portfolio";
import { LevelPill, Reveal, SectionHeading } from "./ui";

const ICONS: Record<string, typeof Code2> = {
  code: Code2,
  sparkles: Sparkles,
  chart: BarChart3,
  eye: Eye,
  layout: LayoutGrid,
  server: Server,
  cpu: Cpu,
  wrench: Wrench,
  database: Database,
};

const FILTERS = ["All", "Experienced", "Working Knowledge", "Currently Learning"] as const;

export default function Skills() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  return (
    <section id="skills" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(52,211,153,0.06),transparent)] blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          tag="Technical skills"
          title={<>A stack built for <span className="text-gradient">real AI products</span></>}
          desc="Honest labels, no inflated percentages. “Working Knowledge” means I have applied the technology in a project; “Currently Learning” marks the areas I am actively deepening."
        />

        <Reveal className="mb-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full border px-4 py-2 text-[13px] font-medium transition ${
                filter === f
                  ? "border-emerald-400/50 bg-emerald-400/15 text-emerald-200 shadow-[0_0_24px_-8px_rgba(52,211,153,0.7)]"
                  : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {SKILL_CATEGORIES.map((cat, ci) => {
            const Icon = ICONS[cat.icon] ?? Code2;
            const visible = cat.skills.filter((s) => filter === "All" || s.level === filter);
            if (filter !== "All" && visible.length === 0) return null;
            return (
              <Reveal key={cat.id} delay={(ci % 4) * 0.07}>
                <div className="group flex h-full flex-col rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.045] to-white/[0.015] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-emerald-400/30 hover:shadow-[0_24px_60px_-20px_rgba(52,211,153,0.35)]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition group-hover:scale-110 group-hover:shadow-[0_0_20px_-4px_rgba(52,211,153,0.7)]">
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3 className="font-display text-[15.5px] font-bold text-white">{cat.title}</h3>
                      <p className="text-[11.5px] text-slate-500">{cat.blurb}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-1 flex-col gap-2.5">
                    <AnimatePresence initial={false}>
                      {visible.map((s) => (
                        <motion.div
                          key={s.name}
                          layout
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          transition={{ duration: 0.25 }}
                          className="rounded-xl border border-white/[0.06] bg-black/30 px-3.5 py-2.5 transition hover:border-emerald-400/25"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[13.5px] font-semibold text-slate-100">{s.name}</span>
                          </div>
                          {s.note && <p className="mt-0.5 text-[11.5px] text-slate-500">{s.note}</p>}
                          <div className="mt-2">
                            <LevelPill level={s.level} />
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  <p className="font-mono2 mt-4 border-t border-white/[0.06] pt-3 text-[11px] text-slate-600">
                    {String(cat.skills.length).padStart(2, "0")} technologies
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-amber-400/20 bg-amber-400/[0.05] px-6 py-5 text-center sm:flex-row sm:text-left">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-lg">🌱</span>
            <p className="text-[13.5px] leading-relaxed text-slate-300">
              <span className="font-semibold text-amber-200">Currently Learning:</span> {CURRENTLY_LEARNING.join(" · ")}.{" "}
              <span className="text-slate-500">Taught honestly — these are growth areas, not claimed experience.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

