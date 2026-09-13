import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { PROFILE } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function downloadResume() {
  const a = document.createElement("a");
  a.href = "/resume.pdf";
  a.download = "Manikandan_B_Resume.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
}


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.07] bg-[#05070d]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 md:px-8">
        <button
          onClick={() => go("home")}
          className="group flex items-center gap-3"
          aria-label="Go to home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 font-mono2 text-sm font-bold text-emerald-300 shadow-[0_0_24px_-6px_rgba(52,211,153,0.6)] transition group-hover:shadow-[0_0_32px_-4px_rgba(52,211,153,0.8)]">
            MB
          </span>
          <span className="hidden font-display text-[15px] font-semibold tracking-tight text-white sm:block">
            Manikandan B
            <span className="ml-2 hidden rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono2 text-[10px] font-normal text-slate-400 lg:inline">
              AI · Full-Stack
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`relative rounded-lg px-3 py-2 text-[13.5px] font-medium transition ${
                active === l.id ? "text-emerald-300" : "text-slate-400 hover:text-white"
              }`}
            >
              {l.label}
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-x-2 -bottom-[1px] h-[2px] rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]"
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-emerald-400/40 hover:text-emerald-300"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-emerald-400/40 hover:text-emerald-300"
          >
            <LinkedinIcon size={17} />
          </a>
          <button
            onClick={downloadResume}
            className="btn-sheen ml-1 inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-4 py-2 text-[13.5px] font-semibold text-emerald-950 shadow-[0_8px_30px_-8px_rgba(52,211,153,0.7)] transition hover:bg-emerald-300"
          >
            <Download size={15} /> Resume
          </button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-b border-white/10 bg-[#05070d]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => go(l.id)}
                  className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-[15px] font-medium transition ${
                    active === l.id
                      ? "border border-emerald-400/25 bg-emerald-400/10 text-emerald-300"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  {l.label}
                  <span className="font-mono2 text-[11px] text-slate-600">0{i + 1}</span>
                </motion.button>
              ))}
              <div className="flex gap-2 pt-3">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 text-sm text-slate-300"
                >
                  <GithubIcon size={16} /> GitHub
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 text-sm text-slate-300"
                >
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
                <button
                  onClick={downloadResume}
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-400 text-sm font-semibold text-emerald-950"
                >
                  <Download size={16} /> Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

