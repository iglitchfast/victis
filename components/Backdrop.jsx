"use client";
import { useEffect, useRef } from "react";

export default function Backdrop() {
  const cv = useRef(null);
  const glow = useRef(null);
  useEffect(() => {
    const c = cv.current, ctx = c.getContext("2d");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    let w, h, raf, mx = -999, my = -999;
    const N = innerWidth < 768 ? 45 : 110;
    const resize = () => { w = innerWidth; h = innerHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    const mk = (y) => ({ x: Math.random() * w, y: y ?? Math.random() * h, r: Math.random() * 1.8 + 0.4, v: Math.random() * 0.35 + 0.08, a: Math.random() * 0.6 + 0.2, col: Math.random() < 0.6 ? "231,184,92" : "230,40,40", p: Math.random() * 6.28 });
    resize();
    const ps = Array.from({ length: N }, () => mk());
    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        p.y -= p.v; p.x += Math.sin(t / 1800 + p.p) * 0.25;
        const dx = p.x - mx, dy = p.y - my, d = Math.hypot(dx, dy) || 1;
        if (d < 140) { p.x += (dx / d) * (140 - d) * 0.03; p.y += (dy / d) * (140 - d) * 0.03; }
        if (p.y < -10) Object.assign(p, mk(h + 10));
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.col},${p.a * (0.6 + 0.4 * Math.sin(t / 700 + p.p))})`;
        ctx.shadowBlur = 8; ctx.shadowColor = `rgba(${p.col},.8)`;
        ctx.arc(p.x, p.y, p.r, 0, 6.28); ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    const move = (e) => {
      mx = e.clientX; my = e.clientY;
      if (glow.current) glow.current.style.transform = `translate(${mx - 250}px,${my - 250}px)`;
    };
    addEventListener("resize", resize); addEventListener("pointermove", move);
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); removeEventListener("pointermove", move); };
  }, []);
  return (
    <>
      <canvas ref={cv} aria-hidden className="pointer-events-none fixed inset-0 -z-10 size-full" />
      <div ref={glow} aria-hidden className="pointer-events-none fixed left-0 top-0 -z-10 size-[500px] rounded-full opacity-70 mix-blend-screen [@media(pointer:coarse)]:hidden" style={{ background: "radial-gradient(circle, rgba(192,20,30,.28), rgba(231,184,92,.08) 45%, transparent 70%)" }} />
    </>
  );
}
