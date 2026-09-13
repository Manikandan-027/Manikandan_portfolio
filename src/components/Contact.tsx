import { useState } from "react";
import { ArrowRight, CheckCircle2, Copy, Download, Mail, MapPin, Phone, Send } from "lucide-react";
import { CURRENTLY_LEARNING, PROFILE } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";
import { downloadResume } from "./Navbar";
import { Reveal, SectionHeading } from "./ui";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.ok) {
        throw new Error(data.message || "Unable to send the message.");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "", website: "" });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send the message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-10 h-[460px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(52,211,153,0.1),transparent)] blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          tag="Contact"
          title={<>Let's build something <span className="text-gradient">intelligent.</span></>}
          desc="I'm interested in AI engineering, machine learning, data, and full-stack development opportunities — internships, collaborations and junior roles."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* info */}
          <Reveal>
            <div className="card-ring flex h-full flex-col rounded-3xl p-7 md:p-9">
              <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-slate-500">direct channels</p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300"><Mail size={19} /></span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] uppercase tracking-wider text-slate-500">Email</p>
                    <a href={`mailto:${PROFILE.email}`} className="block truncate text-[14.5px] font-semibold text-white hover:text-emerald-300">{PROFILE.email}</a>
              <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">The form below sends directly to my inbox. No email application is required.</p>
                  </div>
                  <button onClick={copyEmail} aria-label="Copy email address" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-emerald-400/40 hover:text-emerald-300">
                    {copied ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>
                {[
                  { icon: <LinkedinIcon size={19} />, label: "LinkedIn", value: PROFILE.linkedinHandle, href: PROFILE.linkedin },
                  { icon: <GithubIcon size={19} />, label: "GitHub", value: PROFILE.githubHandle, href: PROFILE.github },
                ].map((c) => (
                  <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-black/30 p-4 transition hover:-translate-y-0.5 hover:border-emerald-400/30">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-slate-300 transition group-hover:bg-emerald-400/15 group-hover:text-emerald-300">{c.icon}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[12px] uppercase tracking-wider text-slate-500">{c.label}</p>
                      <p className="truncate text-[14px] font-medium text-slate-200">{c.value}</p>
                    </div>
                    <ArrowRight size={16} className="shrink-0 text-slate-600 transition group-hover:translate-x-1 group-hover:text-emerald-300" />
                  </a>
                ))}
                <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-black/30 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-slate-300"><Phone size={19} /></span>
                  <div>
                    <p className="text-[12px] uppercase tracking-wider text-slate-500">Phone <span className="normal-case text-slate-600">(on request)</span></p>
                    <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} className="text-[14px] font-medium text-slate-200 hover:text-emerald-300">{PROFILE.phone}</a>
                  </div>
                  <span className="ml-auto hidden items-center gap-1.5 text-[12px] text-slate-500 sm:flex"><MapPin size={13} /> Chennai</span>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button type="button" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "center" })} className="btn-sheen inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3.5 text-[14px] font-semibold text-emerald-950 transition hover:bg-emerald-300">
                  <Send size={16} /> Send a Message
                </button>
                <button onClick={downloadResume} className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-[14px] font-semibold text-white transition hover:border-emerald-400/40">
                  <Download size={16} /> Resume
                </button>
              </div>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={0.1}>
            <form id="contact-form" onSubmit={submit} className="card-ring flex h-full flex-col rounded-3xl p-7 md:p-9">
              <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-slate-500">secure message → sent directly from this portfolio</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-medium text-slate-300">Your name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Recruiter"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-[14px] text-white placeholder:text-slate-600 transition focus:border-emerald-400/60 focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-medium text-slate-300">Your email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-[14px] text-white placeholder:text-slate-600 transition focus:border-emerald-400/60 focus:outline-none"
                  />
                </label>
              </div>
              <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label>Website
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website ?? ""}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                  />
                </label>
              </div>
              <label className="mt-4 block flex-1">
                <span className="mb-1.5 block text-[13px] font-medium text-slate-300">Message</span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Hi Manikandan — we'd like to talk about an AI intern role…"
                  className="w-full flex-1 resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-[14px] leading-relaxed text-white placeholder:text-slate-600 transition focus:border-emerald-400/60 focus:outline-none"
                />
              </label>
              <button disabled={sending} type="submit" className="btn-sheen mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-[14px] font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-wait disabled:opacity-60">
                {sent ? (<><CheckCircle2 size={16} /> Message sent</>) : sending ? (<>Sending… <Send size={15} /></>) : (<>Send Message <Send size={15} /></>)}
              </button>
              {error && (
                <p role="alert" className="mt-3 rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-center text-[12px] leading-relaxed text-red-200">
                  {error} <a className="font-semibold underline underline-offset-2" href={`mailto:${PROFILE.email}`}>Email me directly</a>.
                </p>
              )}
              <p className="mt-3 text-center text-[12px] text-slate-600">Messages are delivered to my inbox. Prefer LinkedIn? You can reach me there too.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="border-t border-white/[0.07] bg-black/40">
      <div className="glow-line" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 font-mono2 text-sm font-bold text-emerald-300">MB</span>
              <div>
                <p className="font-display text-[16px] font-bold text-white">Manikandan B</p>
                <p className="text-[12.5px] text-slate-500">AI & Data Science | AI Engineering | Full-Stack Development</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-slate-500">
              Final-year AI & Data Science student building real-world AI systems and expanding into modern full-stack development.
            </p>
            <div className="mt-5 flex gap-2">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-emerald-400/40 hover:text-emerald-300"><GithubIcon size={16} /></a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-emerald-400/40 hover:text-emerald-300"><LinkedinIcon size={16} /></a>
              <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-emerald-400/40 hover:text-emerald-300"><Mail size={16} /></a>
            </div>
          </div>
          <nav aria-label="Footer">
            <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-slate-500">Explore</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {["about", "skills", "projects", "experience", "certifications", "education", "contact"].map((id) => (
                <button key={id} onClick={() => go(id)} className="text-left text-[13.5px] capitalize text-slate-400 transition hover:text-emerald-300">
                  {id}
                </button>
              ))}
            </div>
          </nav>
          <div>
            <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-slate-500">Currently learning</p>
            <div className="font-mono2 mt-4 flex flex-wrap gap-1.5 text-[11px]">
              {CURRENTLY_LEARNING.map((t) => (
                <span key={t} className="rounded-md border border-amber-400/20 bg-amber-400/[0.06] px-2 py-1 text-amber-200/80">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-[12.5px] text-slate-600">© 2026 Manikandan B. All rights reserved.</p>
          <p className="font-mono2 text-[11.5px] text-slate-600">designed & built with React · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}

