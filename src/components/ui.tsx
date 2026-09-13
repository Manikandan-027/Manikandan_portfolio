import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3.5 py-1.5 font-mono2 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.7)]" />
      {children}
    </span>
  );
}

export function SectionHeading({
  tag,
  title,
  desc,
}: {
  tag: string;
  title: ReactNode;
  desc?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <Reveal>
        <SectionTag>{tag}</SectionTag>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.16}>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-400 md:text-base">
            {desc}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function LevelPill({ level }: { level: string }) {
  const styles =
    level === "Experienced"
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
      : level === "Currently Learning"
        ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
        : "border-sky-400/25 bg-sky-400/10 text-sky-300";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider ${styles}`}>
      {level === "Currently Learning" && <span className="h-1 w-1 animate-blink rounded-full bg-amber-300" />}
      {level}
    </span>
  );
}

