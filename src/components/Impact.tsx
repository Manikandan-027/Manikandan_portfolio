import { motion } from "framer-motion";
import { Boxes, Cpu, GraduationCap, Layers, ScanFace, Server } from "lucide-react";
import { JOURNEY } from "../data/portfolio";
import { Reveal, SectionHeading } from "./ui";

const STATS = [
  { value: "4", label: "Major systems shipped", sub: "AI · Full Stack · IoT", icon: Boxes },
  { value: "97.95%", label: "Fake-news accuracy", sub: "DistilBERT classifier", icon: ScanFace },
  { value: "97.98%", label: "F1-score", sub: "Balanced precision/recall", icon: Layers },
  { value: "1,267", label: "Test articles evaluated", sub: "Measured, not claimed", icon: Server },
  { value: "8.6/10", label: "CGPA", sub: "AI & Data Science", icon: GraduationCap },
  { value: "Edge→Cloud", label: "Full IoT loop", sub: "ESP32 · ML · GPS · dashboard", icon: Cpu },
];

export function Impact() {
  return (
    <section id="impact" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          tag="What I've built"
          title={<>Proof, <span className="text-gradient">not promises</span></>}
          desc="Every number below comes from real project work. No vanity metrics, no inflated claims."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-6 md:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={(i % 6) * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-emerald-400/35 hover:shadow-[0_20px_50px_-20px_rgba(52,211,153,0.5)] md:p-6">
                <s.icon size={20} className="mx-auto text-emerald-300/80 transition group-hover:scale-110 group-hover:text-emerald-300" />
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                  className="font-display mt-3 text-xl font-bold text-white sm:text-2xl"
                >
                  {s.value}
                </motion.p>
                <p className="mt-1 text-[12px] font-semibold text-slate-200">{s.label}</p>
                <p className="font-mono2 mt-1 text-[10.5px] text-slate-500">{s.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="pointer-events-none absolute right-0 top-20 h-[380px] w-[380px] rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.07),transparent)] blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          tag="Developer journey"
          title={<>From AI foundations to <span className="text-gradient">scalable products</span></>}
          desc="A clear, honest growth path — solid where I've shipped, transparent where I'm learning."
        />
        <div className="relative">
          <span className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-emerald-400/60 via-white/10 to-amber-400/50 md:left-1/2" aria-hidden="true" />
          <div className="space-y-4">
            {JOURNEY.map((j, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={j.title} delay={Math.min(i * 0.04, 0.2)}>
                  <div className={`relative flex gap-5 pl-12 md:w-1/2 md:pl-0 ${left ? "md:pr-12" : "md:ml-auto md:flex-row-reverse md:pl-12 md:text-right"}`}>
                    <span
                      className={`absolute top-5 z-10 h-[13px] w-[13px] rounded-full border-2 ${
                        left ? "left-[13px] md:left-auto md:-right-[7px]" : "left-[13px] md:left-[-6px]"
                      } ${
                        j.done
                          ? "border-emerald-400 bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]"
                          : "border-amber-300 bg-[#0a0f1a] shadow-[0_0_14px_rgba(252,211,77,0.6)]"
                      }`}
                      aria-hidden="true"
                    />
                    <div
                      className={`flex-1 rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 ${
                        j.done
                          ? "border-emerald-400/20 bg-emerald-400/[0.05] hover:border-emerald-400/40"
                          : "border-amber-400/20 bg-amber-400/[0.05] hover:border-amber-400/40"
                      }`}
                    >
                      <div className={`flex items-center gap-2.5 ${left ? "" : "md:flex-row-reverse"}`}>
                        <span className={`font-mono2 rounded-md px-2 py-0.5 text-[11px] font-bold ${j.done ? "bg-emerald-400/15 text-emerald-300" : "bg-amber-400/15 text-amber-300"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="font-display text-[15px] font-bold text-white">{j.title}</p>
                      </div>
                      <p className="mt-1.5 text-[13px] text-slate-400">{j.desc}</p>
                      <p className={`font-mono2 mt-2 text-[10.5px] uppercase tracking-wider ${j.done ? "text-emerald-400/70" : "text-amber-300/80"}`}>
                        {j.done ? "● shipped" : "○ in progress"}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}