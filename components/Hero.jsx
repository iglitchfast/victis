"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import Magnetic from "./Magnetic";
import { EMAIL } from "@/lib/content";

const words = ["Victory", "Rules", "the", "Realm."];
const D = 1.8; // wait for the intro curtain

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 120]);
  const mx = useMotionValue(0), my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [10, -10]), { stiffness: 80, damping: 15 });
  const ry = useSpring(useTransform(mx, [-1, 1], [-14, 14]), { stiffness: 80, damping: 15 });
  useEffect(() => {
    const f = (e) => { mx.set((e.clientX / innerWidth) * 2 - 1); my.set((e.clientY / innerHeight) * 2 - 1); };
    addEventListener("pointermove", f);
    return () => removeEventListener("pointermove", f);
  }, [mx, my]);
  return (
    <section id="top" className="hero-stage relative isolate flex min-h-svh items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute -right-[18%] top-1/2 -z-10 aspect-square w-[130vw] -translate-y-1/2 opacity-60 lg:-right-[6%] lg:w-[min(62vw,980px)] lg:opacity-100">
        <div className="absolute inset-[6%] animate-[spin_90s_linear_infinite] rounded-full border border-dashed border-gold/25" />
        <div className="absolute inset-[-2%] animate-[spin_140s_linear_infinite_reverse] rounded-full border border-crimson/30" />
        <div className="absolute inset-[20%] animate-[pulse-glow_5s_ease-in-out_infinite] rounded-full bg-crimson/20 blur-3xl" />
        <motion.div style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }} className="absolute inset-0">
          <Image src="/victis-hero.png" alt="VICTIS emblem: a golden V crossed by an orbit ring and a guiding star" fill priority sizes="(min-width:1024px) 62vw, 130vw" className="hero-mask object-contain" />
        </motion.div>
      </motion.div>
      <div aria-hidden className="hero-eclipse absolute inset-0 -z-10" />
      <div aria-hidden className="hero-grain absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/70 to-transparent lg:via-ink/30" />
      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-32">
        <p className="t-label mb-6">Software solutions company</p>
        <h1 className="t-display max-w-4xl">
          {words.map((w, i) => (
            <span key={w} className="mr-[0.22em] inline-block overflow-hidden pb-[0.1em] align-bottom">
              <motion.span className="inline-block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: D + i * 0.12, ease: [0.16, 1, 0.3, 1] }}>{w}</motion.span>
            </span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: D + 0.8, duration: 0.8 }} className="t-lede mt-8">
          VICTIS is a college-started software solutions company from Kerala, India, founded by Goutham Sankar and Amal Kakkat. We build reliable, well-engineered software for real-world needs.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: D + 1, duration: 0.8 }} className="mt-10 flex flex-wrap gap-4">
          <Magnetic><a href="#story" className="btn-primary">Read our story</a></Magnetic>
          <Magnetic><a href={`mailto:${EMAIL}`} className="btn-ghost">Contact us</a></Magnetic>
        </motion.div>
      </div>
      <motion.div aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: D + 1.6 }} className="absolute bottom-6 left-1/2 hidden h-12 w-px -translate-x-1/2 overflow-hidden bg-white/15 sm:block">
        <motion.span className="block h-4 w-px bg-gold" animate={{ y: [-16, 48] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} />
      </motion.div>
    </section>
  );
}
