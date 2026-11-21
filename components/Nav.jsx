"use client";
import { useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Image from "next/image";
import { nav, EMAIL } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <header className="site-nav fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/65 backdrop-blur-2xl">
      <motion.div style={{ scaleX }} className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-crimson via-gold to-gold" />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="VICTIS home">
          <Image src="/victis-mark.png" alt="" width={600} height={484} priority className="h-9 w-auto drop-shadow-[0_0_10px_rgba(231,184,92,.5)]" />
          <span className="text-sm font-semibold tracking-[0.32em] text-bone">VICTIS</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-bone/70 md:flex" aria-label="Primary">
          {nav.map(([l, h]) => <a key={h} href={h} className="transition-colors hover:text-bone">{l}</a>)}
          <a href={`mailto:${EMAIL}`} className="rounded-full border border-gold/60 px-4 py-2 text-xs font-semibold text-gold transition hover:bg-gold hover:text-ink">Contact</a>
        </nav>
        <button className="md:hidden p-2 text-gold" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-6 bg-current" /><span className="mt-1.5 block h-0.5 w-6 bg-current" /><span className="mt-1.5 block h-0.5 w-4 bg-current" />
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-ink px-6 py-4 md:hidden" aria-label="Mobile">
          {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="py-3 text-base font-medium text-bone">{l}</a>)}
        </nav>
      )}
    </header>
  );
}
