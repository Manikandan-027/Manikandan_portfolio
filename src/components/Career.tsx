import { Award, BadgeCheck, Briefcase, Building2, CalendarDays, GraduationCap, MapPin } from "lucide-react";
import { CERTIFICATIONS, EDUCATION, EXPERIENCE } from "../data/portfolio";
import { Reveal, SectionHeading } from "./ui";

const CERT_ICONS: Record<string, string> = {
  brain: "🧠",
  database: "🗄️",
  message: "💬",
};

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading
          tag="Experience"
          title={<>Where I've <span className="text-gradient">shipped real work</span></>}
        />
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-7 md:p-10">
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" aria-hidden="true" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 shadow-[0_0_30px_-8px_rgba(52,211,153,0.6)]">
                <Briefcase size={24} />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono2 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                    Internship
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono2 text-[11px] text-slate-400">
                    <CalendarDays size={12} /> {EXPERIENCE.duration}
                  </span>
                </div>
                <h3 className="font-display mt-3 text-2xl font-bold text-white md:text-[1.75rem]">{EXPERIENCE.role}</h3>
                <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-slate-400">
                  <span className="inline-flex items-center gap-1.5 font-medium text-slate-200"><Building2 size={14} className="text-emerald-400" /> {EXPERIENCE.company}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> Ambattur, Chennai</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {EXPERIENCE.points.map((pt, i) => (
                    <Reveal key={pt} delay={i * 0.06}>
                      <li className="flex gap-3 rounded-xl border border-white/[0.06] bg-black/30 p-3.5 text-[13.5px] leading-relaxed text-slate-300">
                        <BadgeCheck size={17} className="mt-0.5 shrink-0 text-emerald-400" />
                        {pt}
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="relative scroll-mt-20 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          tag="Education"
          title={<>Grounded in <span className="text-gradient">strong fundamentals</span></>}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.08}>
              <div className={`flex h-full flex-col rounded-3xl border p-6 transition duration-300 hover:-translate-y-1.5 md:p-7 ${i === 0 ? "border-emerald-400/30 bg-gradient-to-b from-emerald-400/[0.09] to-white/[0.02] shadow-[0_20px_60px_-24px_rgba(52,211,153,0.5)]" : "card-ring hover:border-white/20"}`}>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-emerald-300">
                    <GraduationCap size={20} />
                  </span>
                  <span className={`rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider ${i === 0 ? "bg-emerald-400 text-emerald-950" : "border border-white/10 text-slate-400"}`}>
                    {e.status}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-[16.5px] font-bold leading-snug text-white">{e.degree}</h3>
                <p className="mt-1.5 text-[13px] text-slate-400">{e.school}</p>
                <p className="font-mono2 mt-2 text-[12px] text-slate-500">{e.period}</p>
                <div className="mt-4 rounded-xl border border-white/[0.07] bg-black/40 px-4 py-3 text-center">
                  <p className="font-display text-xl font-bold text-emerald-300">{e.score}</p>
                </div>
                <p className="mt-3 text-[12.5px] leading-relaxed text-slate-500">{e.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="relative scroll-mt-20 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          tag="Certifications"
          title={<>Verified <span className="text-gradient">learning milestones</span></>}
          desc="Only listed certifications — no invented links or credentials."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="group flex h-full flex-col rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.015] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-amber-400/30 hover:shadow-[0_24px_60px_-24px_rgba(251,191,36,0.4)] md:p-7">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-emerald-400/10 text-2xl transition group-hover:scale-110">
                    {CERT_ICONS[c.icon] ?? "🏅"}
                  </span>
                  <Award size={20} className="text-slate-600 transition group-hover:text-amber-300" />
                </div>
                <h3 className="font-display mt-4 text-[16px] font-bold leading-snug text-white">{c.title}</h3>
                <p className="mt-1.5 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] font-medium text-slate-300">
                  <Building2 size={12} className="text-amber-300" /> {c.org}
                </p>
                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-slate-500">{c.desc}</p>
                <p className="font-mono2 mt-4 border-t border-white/[0.06] pt-3 text-[11px] text-slate-600">verification available on request</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
