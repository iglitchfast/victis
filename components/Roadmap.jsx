"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { roadmap } from "@/lib/content";

export default function Roadmap() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const h = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  return (
    <ol ref={ref} className="relative space-y-12 pl-10 sm:pl-14">
      <span className="absolute bottom-0 left-3 top-0 w-px bg-white/15 sm:left-4" />
      <motion.span style={{ scaleY: h }} className="absolute bottom-0 left-3 top-0 w-px origin-top bg-gradient-to-b from-gold to-crimson sm:left-4" />
      {roadmap.map(([q, t, d]) => (
        <li key={q} className="relative">
          <span className="absolute -left-[2.35rem] top-2 size-3 rounded-full bg-gold ring-4 ring-ink sm:-left-[3.1rem]" />
          <p className="t-label">{q}</p>
          <h3 className="t-h3 mt-2">{t}</h3>
          <p className="t-body mt-2">{d}</p>
        </li>
      ))}
    </ol>
  );
}
