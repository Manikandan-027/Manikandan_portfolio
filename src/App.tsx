import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import FullStack from "./components/FullStack";
import Projects from "./components/Projects";
import { Certifications, Education, Experience } from "./components/Career";
import { Impact, Journey } from "./components/Impact";
import { Contact, Footer } from "./components/Contact";

function CursorGlow() {
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: -500, y: -500 });
  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);
  if (reduce) return null;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[5] h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(52,211,153,0.07),transparent)] blur-2xl transition-opacity"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/30 bg-[#0a0f1a]/90 text-emerald-300 shadow-[0_10px_30px_-10px_rgba(52,211,153,0.6)] backdrop-blur transition hover:bg-emerald-400 hover:text-emerald-950"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8" aria-hidden="true">
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#05070d] text-slate-200 antialiased">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-emerald-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-emerald-950"
      >
        Skip to content
      </a>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <FullStack />
        <Divider />
        <Experience />
        <Divider />
        <Impact />
        <Divider />
        <Journey />
        <Divider />
        <Certifications />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

