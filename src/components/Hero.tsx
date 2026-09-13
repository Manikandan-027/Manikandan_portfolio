import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Send } from "lucide-react";
import { PROFILE } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";
import { downloadResume } from "./Navbar";

function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let w = 0;
    let h = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const N = 70;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
      r: Math.random() * 1.6 + 0.4,
      o: Math.random() * 0.5 + 0.15,
    }));
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
      });
      // links
      ctx.lineWidth = 1;
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = (pts[i].x - pts[j].x) * w;
          const dy = (pts[i].y - pts[j].y) * h;
          const d = Math.hypot(dx, dy);
          if (d < 130) {
            ctx.strokeStyle = `rgba(52,211,153,${(1 - d / 130) * 0.14})`;
            ctx.beginPath();
            ctx.moveTo(pts[i].x * w, pts[i].y * h);
            ctx.lineTo(pts[j].x * w, pts[j].y * h);
            ctx.stroke();
          }
        }
      }
      pts.forEach((p) => {
        ctx.fillStyle = `rgba(110,231,183,${p.o})`;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduce]);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 h-full w-full opacity-70" aria-hidden="true" />;
}

function PhotoFrame() {
  const [hasPhoto, setHasPhoto] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setHasPhoto(true);
    img.onerror = () => setHasPhoto(false);
    img.src = "/profile.jpg";
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[410px]">
      {/* Subtle framing only — the portrait itself stays completely unobstructed. */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-[2.2rem] border border-emerald-400/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -inset-10 rounded-[3.5rem] bg-[radial-gradient(closest-side,rgba(52,211,153,0.12),transparent)] blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.6, 0.35, 1] }}
        className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-2 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.9)]"
      >
        <div className="overflow-hidden rounded-[1.65rem] bg-[#0a0f1a]">
          {hasPhoto ? (
            <img
              src="/profile.jpg"
              alt="Professional photograph of Manikandan B"
              className="block aspect-[4/5] w-full object-cover object-[center_18%]"
              loading="eager"
            />
          ) : (
            <div className="flex aspect-[4/5] w-full items-center justify-center bg-[radial-gradient(ellipse_at_50%_0%,#123527_0%,#0a0f1a_60%)]">
              <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-emerald-400/25 bg-emerald-400/10">
                <span className="font-display text-4xl font-bold text-emerald-300">MB</span>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Information sits below the portrait instead of covering it. */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.75 }}
        className="mt-5 flex flex-wrap items-center justify-between gap-3 px-1"
      >
        <div>
          <p className="font-display text-sm font-semibold text-white">AI · Data · Full-Stack</p>
          <p className="mt-1 text-xs text-slate-500">Building practical AI-powered products</p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="font-mono2 text-[10px] text-emerald-300/90">OPEN TO OPPORTUNITIES</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-[68px] md:pb-28">
      {/* backdrop */}
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(52,211,153,0.13),transparent)] blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.09),transparent)] blur-3xl" aria-hidden="true" />
      <Particles />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-8 pt-12 md:px-8 md:pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        {/* LEFT */}
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-4 text-[12.5px] text-slate-300 backdrop-blur">
              <span className="rounded-full bg-emerald-400 px-2.5 py-0.5 font-mono2 text-[11px] font-bold text-emerald-950">NEW</span>
              Completed InterviewArena · now deepening full-stack development
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono2 mt-7 text-[13px] tracking-wide text-emerald-300/90 md:text-sm"
          >
            <span className="text-slate-500">{"// "}</span>Hi, I'm Manikandan B
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="font-display mt-3 text-[2.6rem] font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.35rem]"
          >
            AI & Data Science
            <br />
            Engineer <span className="text-gradient">Building</span>
            <br />
            <span className="text-gradient">AI-Powered Products</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400 md:text-[17px]"
          >
            Final-year AI & Data Science student who turns concepts into working systems — from RAG and NLP to IoT and full-stack AI applications. I recently completed{" "}
            <span className="text-slate-200">InterviewArena</span>, a full-stack interview platform with an AI speaking coach, and I am now deepening my full-stack engineering skills.
          </motion.p>

          {/* mini skill strip */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="font-mono2 mt-5 flex flex-wrap gap-2 text-[11.5px]"
          >
            {["Python", "Next.js", "TypeScript", "RAG", "FastAPI", "PostgreSQL", "React", "Docker"].map((t) => (
              <span key={t} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-slate-300">
                {t}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.41 }}
            className="mt-5 grid max-w-xl grid-cols-3 gap-2 sm:gap-3"
          >
            {[
              { value: "4", label: "featured systems" },
              { value: "97.95%", label: "best reported accuracy" },
              { value: "8.6/10", label: "current CGPA" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-3 py-3 text-center">
                <p className="font-display text-[16px] font-bold text-white sm:text-lg">{s.value}</p>
                <p className="mt-0.5 text-[10px] leading-tight text-slate-500 sm:text-[11px]">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => go("projects")}
              className="btn-sheen group inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 text-[14.5px] font-semibold text-emerald-950 shadow-[0_12px_40px_-10px_rgba(52,211,153,0.7)] transition hover:bg-emerald-300"
            >
              View Projects
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={downloadResume}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-[14.5px] font-semibold text-white backdrop-blur transition hover:border-emerald-400/40 hover:bg-emerald-400/10"
            >
              <Download size={17} /> Download Resume
            </button>
            <button
              onClick={() => go("contact")}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-3.5 text-[14.5px] font-semibold text-slate-300 transition hover:text-emerald-300"
            >
              <Send size={16} /> Contact Me
            </button>
          </motion.div>

          {/* socials + meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <div className="flex items-center gap-2.5">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:text-emerald-300">
                <GithubIcon size={18} />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:text-emerald-300">
                <LinkedinIcon size={18} />
              </a>
              <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:text-emerald-300">
                <Mail size={18} />
              </a>
            </div>
            <span className="hidden h-8 w-px bg-white/10 sm:block" aria-hidden="true" />
            <div className="flex items-center gap-2 text-[13px] text-slate-500">
              <MapPin size={14} className="text-emerald-400/70" />
              {PROFILE.college} · Chennai
            </div>
            <div className="font-mono2 flex items-center gap-2 text-[12px] text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> CGPA 8.6/10
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative lg:pl-6">
          <PhotoFrame />

        </div>
      </div>

      {/* tech ticker */}
      <div className="relative mx-auto mt-10 max-w-7xl px-5 md:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] py-3.5 backdrop-blur [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee flex w-max gap-10 pr-10">
            {[...Array(2)].flatMap((_, k) =>
              ["Python", "LangChain", "RAG", "FAISS", "Ollama", "FastAPI", "React", "TypeScript*", "Node.js*", "Express*", "Docker", "DistilBERT", "OpenCV", "PostgreSQL*", "JWT"].map((t, i) => (
                <span key={`${k}-${i}`} className="font-mono2 flex items-center gap-10 whitespace-nowrap text-[12.5px] text-slate-500">
                  {t} <span className="text-emerald-500/50">◆</span>
                </span>
              ))
            )}
          </div>
        </div>
        <p className="font-mono2 mt-2 text-center text-[11px] text-slate-600">* currently learning / expanding my stack</p>
      </div>
    </section>
  );
}

