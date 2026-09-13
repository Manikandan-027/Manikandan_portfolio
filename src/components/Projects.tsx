import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Database,
  FileText,
  Layers,
  Mic,
  ShieldCheck,
  Target,
  X,
} from "lucide-react";
import { PROJECTS, type Project, type ProjectTag } from "../data/portfolio";
import { GithubIcon } from "./icons";
import { Reveal, SectionHeading } from "./ui";

const FILTERS: ("All" | ProjectTag)[] = ["All", "AI / ML", "Generative AI", "Full Stack", "IoT"];

function ProjectArt({ p }: { p: Project }) {
  if (p.id === "interview-arena") {
    return (
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_120%,rgba(52,211,153,0.22),transparent_65%),#070b14] p-4 sm:h-64">
        <div className="dot-bg absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative grid w-full max-w-[430px] gap-3 sm:grid-cols-[1.15fr_.85fr]">
          <div className="min-w-0 rounded-2xl border border-white/10 bg-black/60 p-3 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono2 truncate text-[9px] uppercase tracking-widest text-slate-500">InterviewArena</span>
              <span className="shrink-0 rounded-full bg-emerald-400/15 px-2 py-1 text-[9px] font-bold text-emerald-300">LIVE</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {["Coding", "Aptitude", "Speaking"].map((t) => (
                <div key={t} className="min-w-0 rounded-lg border border-white/[0.06] bg-black/40 px-1.5 py-2 text-center">
                  <p className="truncate text-[8px] font-semibold text-slate-300">{t}</p>
                  <div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-emerald-400/20"><div className="h-1 w-6 rounded-full bg-emerald-400" /></div>
                </div>
              ))}
            </div>
            <div className="mt-2.5 rounded-lg border border-white/[0.06] bg-black/40 p-2">
              <div className="flex min-w-0 items-center gap-2"><Database size={11} className="shrink-0 text-cyan-300" /><span className="font-mono2 truncate text-[8px] text-slate-500">POSTGRESQL · ATTEMPTS</span></div>
              <div className="mt-2 h-8 rounded-md bg-gradient-to-r from-emerald-400/20 via-cyan-400/10 to-transparent" />
            </div>
          </div>
          <div className="flex min-w-0 flex-col justify-between rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05] p-3">
            <div>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300"><Mic size={17} /></div>
              <p className="mt-2 text-[11px] font-bold text-white">AI Speaking Coach</p>
              <p className="mt-1 text-[9px] leading-relaxed text-slate-500">Speech → transcript → grammar feedback → weak areas</p>
            </div>
            <div className="mt-3 rounded-lg border border-white/[0.07] bg-black/40 px-2 py-1.5 font-mono2 text-[8px] text-emerald-200">✓ feedback generated</div>
          </div>
        </div>
      </div>
    );
  }

  if (p.id === "enterprise-ai") {
    return (
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_120%,rgba(52,211,153,0.22),transparent_65%),#070b14] p-4 sm:h-64">
        <div className="dot-bg absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative w-full max-w-[430px]">
          <div className="flex flex-wrap justify-center gap-2">
            {["report.pdf", "notes.docx", "guide.txt"].map((f) => (
              <div key={f} className="font-mono2 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/60 px-2.5 py-1.5 text-[9px] text-slate-300 backdrop-blur">
                <FileText size={11} className="text-emerald-300" /> {f}
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3">
            <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-3 text-center shadow-[0_0_40px_-8px_rgba(52,211,153,0.7)]">
              <Layers size={19} className="mx-auto text-emerald-300" />
              <span className="font-mono2 mt-1 block text-[8px] text-emerald-200">VECTOR DB</span>
            </div>
            <ArrowUpRight size={16} className="rotate-45 text-emerald-400" aria-hidden="true" />
            <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-3 text-center shadow-[0_0_40px_-8px_rgba(34,211,238,0.7)]">
              <span className="font-display block text-lg font-bold text-cyan-200">✦</span>
              <span className="font-mono2 block text-[8px] text-cyan-200">OLLAMA LLM</span>
            </div>
          </div>
          <div className="mx-auto mt-3 max-w-[270px] rounded-xl border border-white/10 bg-black/70 p-2.5 backdrop-blur">
            <p className="text-[9px] leading-relaxed text-slate-300">“…per <span className="text-emerald-300">§3.2 of report.pdf</span>, the policy states…”</p>
            <p className="font-mono2 mt-1 text-[8px] text-slate-500">✓ grounded · 3 sources</p>
          </div>
        </div>
      </div>
    );
  }

  if (p.id === "truthlens") {
    return (
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_120%,rgba(34,211,238,0.2),transparent_65%),#070b14] sm:h-64">
        <div className="dot-bg absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative w-[82%] max-w-[380px] rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono2 text-[10px] uppercase tracking-widest text-slate-500">truthlens · live verdict</p>
            <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-rose-400/15 px-2.5 py-1 text-[10px] font-bold text-rose-300"><ShieldCheck size={12} /> FAKE · 98.4%</span>
          </div>
          <p className="mt-3 text-[12px] leading-relaxed text-slate-300">
            Scientists <mark className="rounded bg-rose-400/25 px-1 text-rose-200">confirm miracle cure</mark> discovered <mark className="rounded bg-amber-400/20 px-1 text-amber-200">overnight without trials</mark>, sources say.
          </p>
          <div className="mt-3">
            <div className="flex justify-between gap-3 font-mono2 text-[10px] text-slate-500"><span>model confidence</span><span className="text-cyan-300">97.95% acc · 97.98 F1</span></div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" initial={{ width: "12%" }} whileInView={{ width: "97.95%" }} viewport={{ once: true }} transition={{ duration: 1.4, ease: "easeOut" }} /></div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="font-mono2 rounded-md bg-emerald-400/15 px-2 py-1 text-[10px] text-emerald-300">✓ explainable spans</span>
            <span className="font-mono2 rounded-md bg-white/5 px-2 py-1 text-[10px] text-slate-400">↓ auto report</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_120%,rgba(251,191,36,0.16),transparent_65%),#070b14] sm:h-64">
      <div className="dot-bg absolute inset-0 opacity-50" aria-hidden="true" />
      <svg viewBox="0 0 400 180" className="w-[92%] max-w-[420px]" aria-hidden="true">
        <line x1="60" y1="90" x2="140" y2="90" stroke="#fbbf24" strokeWidth="1.5" className="flow-dash" />
        <line x1="200" y1="90" x2="270" y2="90" stroke="#34d399" strokeWidth="1.5" className="flow-dash" />
        <line x1="315" y1="90" x2="360" y2="90" stroke="#22d3ee" strokeWidth="1.5" className="flow-dash" />
        <g><rect x="20" y="62" width="44" height="56" rx="10" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" strokeOpacity="0.5" /><text x="42" y="86" textAnchor="middle" fill="#fcd34d" fontSize="11" fontFamily="monospace">ESP32</text><text x="42" y="100" textAnchor="middle" fill="#78716c" fontSize="8" fontFamily="monospace">MPU · GPS</text></g>
        <g><circle cx="170" cy="90" r="30" fill="rgba(52,211,153,0.08)" stroke="#34d399" strokeOpacity="0.5" /><text x="170" y="87" textAnchor="middle" fill="#6ee7b7" fontSize="10" fontFamily="monospace">ML</text><text x="170" y="100" textAnchor="middle" fill="#78716c" fontSize="7.5" fontFamily="monospace">severity</text></g>
        <g><rect x="272" y="66" width="44" height="48" rx="10" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" strokeOpacity="0.5" /><text x="294" y="86" textAnchor="middle" fill="#67e8f9" fontSize="10" fontFamily="monospace">CLOUD</text><text x="294" y="99" textAnchor="middle" fill="#78716c" fontSize="7.5" fontFamily="monospace">sync</text></g>
        <g><rect x="358" y="70" width="34" height="40" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.25)" /><circle cx="375" cy="84" r="4" fill="#f87171"><animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" /></circle><text x="375" y="102" textAnchor="middle" fill="#a8a29e" fontSize="7" fontFamily="monospace">ALERT</text></g>
        <g fontFamily="monospace" fontSize="8"><rect x="120" y="122" width="62" height="18" rx="9" fill="rgba(52,211,153,0.12)" stroke="#34d399" strokeOpacity="0.4" /><text x="151" y="134" textAnchor="middle" fill="#6ee7b7">Normal</text><rect x="188" y="122" width="58" height="18" rx="9" fill="rgba(251,191,36,0.12)" stroke="#fbbf24" strokeOpacity="0.4" /><text x="217" y="134" textAnchor="middle" fill="#fcd34d">Small</text><rect x="252" y="122" width="72" height="18" rx="9" fill="rgba(248,113,113,0.12)" stroke="#f87171" strokeOpacity="0.4" /><text x="288" y="134" textAnchor="middle" fill="#fca5a5">Dangerous</text></g>
      </svg>
    </div>
  );
}

function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-5" onClick={onClose} role="dialog" aria-modal="true" aria-label={p.name}>
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.21, 0.6, 0.35, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[94vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl border border-white/10 bg-[#0a0f1a] sm:rounded-3xl"
      >
        <ProjectArt p={p} />
        <div className="p-5 sm:p-7 md:p-9">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-mono2 text-[10.5px] tracking-widest text-emerald-300">PROJECT {p.index}</p>
                <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">{p.status}</span>
              </div>
              <h3 className="font-display mt-2 break-words text-2xl font-bold text-white md:text-3xl">{p.name}</h3>
              <p className="mt-1 text-[14px] text-slate-400">{p.short}</p>
            </div>
            <button onClick={onClose} aria-label="Close details" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:border-white/25 hover:text-white"><X size={18} /></button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-rose-400/20 bg-rose-400/[0.05] p-5">
              <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-rose-300"><Target size={15} /> Problem</p>
              <p className="mt-2 break-words text-[13.5px] leading-relaxed text-slate-300">{p.problem}</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05] p-5">
              <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-emerald-300"><CheckCircle2 size={15} /> Solution</p>
              <p className="mt-2 break-words text-[13.5px] leading-relaxed text-slate-300">{p.solution}</p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/[0.08] bg-black/30 p-5">
            <p className="font-mono2 text-[11px] uppercase tracking-[0.18em] text-slate-500">system architecture</p>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {p.architecture.map((a, i) => (
                <span key={a} className="flex shrink-0 items-center gap-2">
                  <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12.5px] text-slate-200">{a}</span>
                  {i < p.architecture.length - 1 && <ArrowUpRight size={13} className="rotate-45 text-emerald-400" />}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.08] bg-black/30 p-5">
              <p className="font-mono2 text-[11px] uppercase tracking-[0.18em] text-slate-500">key implementation</p>
              <ul className="mt-3 space-y-2">
                {p.features.map((f) => <li key={f} className="flex gap-2 break-words text-[13px] leading-relaxed text-slate-300"><CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-400" />{f}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-black/30 p-5">
              <p className="font-mono2 text-[11px] uppercase tracking-[0.18em] text-slate-500">outcomes</p>
              <ul className="mt-3 space-y-2">
                {p.results.map((r) => <li key={r} className="flex gap-2 break-words text-[13px] font-medium leading-relaxed text-slate-200"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />{r}</li>)}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.technologies.map((t) => <span key={t} className="font-mono2 max-w-full break-words rounded-md bg-emerald-400/10 px-2 py-1 text-[11px] text-emerald-200">{t}</span>)}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {p.repoUrl ? (
              <a href={p.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-[13.5px] font-semibold text-white transition hover:border-emerald-400/40 hover:bg-emerald-400/10"><GithubIcon size={16} /> GitHub <ArrowUpRight size={14} /></a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-[13.5px] font-medium text-slate-500"><GithubIcon size={16} /> GitHub link not added yet</span>
            )}
            {p.liveUrl ? <a href={p.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-[13.5px] font-semibold text-emerald-950">Live Demo <ArrowUpRight size={14} /></a> : null}
            <button onClick={onClose} className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-[13.5px] font-semibold text-slate-200 transition hover:border-white/20">Close</button>
          </div>
          <p className="font-mono2 mt-4 text-[11px] leading-relaxed text-slate-600">Add real repository/demo URLs later in <span className="text-slate-400">src/data/portfolio.ts</span>. The portfolio intentionally never fabricates links.</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);
  const list = PROJECTS.filter((p) => filter === "All" || p.tags.includes(filter as ProjectTag));

  return (
    <section id="projects" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          tag="Featured work"
          title={<>Projects with <span className="text-gradient">engineering depth</span></>}
          desc="A recruiter can see the problem, architecture, technologies, implementation details and outcomes without opening a repository. Open a card for the full case study."
        />

        <Reveal className="mb-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setFilter(f)} aria-pressed={filter === f} className={`rounded-full border px-4 py-2 text-[13px] font-medium transition ${filter === f ? "border-emerald-400/50 bg-emerald-400/15 text-emerald-200 shadow-[0_0_24px_-8px_rgba(52,211,153,0.7)]" : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"}`}>{f}</button>
          ))}
        </Reveal>

        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.96, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 24 }}
                transition={{ duration: 0.35 }}
                className="group flex min-w-0 cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.015] transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30 hover:shadow-[0_30px_70px_-24px_rgba(52,211,153,0.45)]"
                onClick={() => setOpen(p)}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(p); } }}
                aria-label={`Open details for ${p.name}`}
              >
                <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] bg-black/20 px-5 py-3.5 sm:px-6">
                  <span className="font-mono2 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10.5px] text-slate-300">PROJECT {p.index}</span>
                  <span className="shrink-0 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-2.5 py-1 text-[10px] font-semibold text-emerald-200">{p.status}</span>
                </div>

                <div className="relative shrink-0">
                  <ProjectArt p={p} />
                </div>

                <div className="flex flex-1 min-w-0 flex-col p-5 sm:p-6">
                  {p.metrics ? (
                    <div className="mb-4 grid grid-cols-3 gap-2">
                      {p.metrics.map((m) => <div key={m.label} className="min-w-0 rounded-xl border border-white/[0.07] bg-black/40 px-2 py-2.5 text-center"><p className="font-display truncate text-[15px] font-bold text-white">{m.value}</p><p className="mt-0.5 line-clamp-2 text-[10px] leading-tight text-slate-500">{m.label}</p></div>)}
                    </div>
                  ) : p.metric ? (
                    <div className="mb-4 flex min-w-0 items-center gap-2.5 rounded-xl border border-white/[0.07] bg-black/40 px-3.5 py-2.5"><span className="font-display shrink-0 rounded-lg px-2 py-0.5 text-[13px] font-bold" style={{ background: `${p.accent}22`, color: p.accent }}>{p.metric.value}</span><span className="min-w-0 break-words text-[12px] text-slate-400">{p.metric.label}</span></div>
                  ) : null}

                  <h3 className="font-display min-h-[3.3rem] break-words text-[18px] font-bold leading-snug text-white transition group-hover:text-emerald-200">{p.name}</h3>
                  <p className="mt-2 min-h-[6.3rem] break-words text-[13px] leading-relaxed text-slate-400">{p.description}</p>

                  <div className="mt-4 flex min-h-[3.5rem] flex-wrap content-start gap-1.5">
                    {p.technologies.slice(0, 7).map((t) => <span key={t} className="font-mono2 max-w-full break-words rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 text-[10.5px] text-slate-400">{t}</span>)}
                    {p.technologies.length > 7 && <span className="font-mono2 rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 text-[10.5px] text-slate-500">+{p.technologies.length - 7}</span>}
                  </div>

                  <div className="mt-5 border-t border-white/[0.07] pt-4">
                    <span className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-white/[0.05] px-4 py-2.5 text-[13px] font-semibold text-white transition group-hover:bg-emerald-400 group-hover:text-emerald-950">View case study <ArrowUpRight size={15} /></span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mx-auto mt-8 max-w-3xl text-center">
          <p className="font-mono2 text-[11px] leading-relaxed text-slate-600">Recruiter note: metrics are shown only where they are explicitly measured. Project links are added only when a real URL is provided.</p>
        </Reveal>

        <AnimatePresence>{open && <ProjectModal p={open} onClose={() => setOpen(null)} />}</AnimatePresence>
      </div>
    </section>
  );
}
