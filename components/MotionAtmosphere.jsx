"use client";
import { useEffect } from "react";

export default function MotionAtmosphere() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce) return;

    let raf = 0;
    let px = -1000;
    let py = -1000;

    const cursor = document.createElement("div");
    cursor.dataset.victisCursor = "true";
    cursor.className = "victis-cursor";
    cursor.innerHTML = "<span></span>";
    if (!coarse) {
      document.body.appendChild(cursor);
      document.body.classList.add("has-victis-cursor");
    }

    const curtain = document.createElement("div");
    curtain.className = "transition-curtain";
    curtain.setAttribute("aria-hidden", "true");
    document.body.appendChild(curtain);

    const move = (event) => {
      px = event.clientX;
      py = event.clientY;
      if (coarse) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${px}px`);
        root.style.setProperty("--pointer-y", `${py}px`);
        cursor.style.transform = `translate3d(${px}px, ${py}px, 0)`;
      });
    };

    const onOver = (event) => {
      if (coarse) return;
      const target = event.target.closest?.("a,button,[role='button'],input,textarea,select");
      cursor.classList.toggle("is-active", Boolean(target));
      cursor.classList.toggle("is-text", Boolean(target && /^(INPUT|TEXTAREA)$/.test(target.tagName)));
    };

    const onAnchorClick = (event) => {
      const link = event.target.closest?.('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href").slice(1);
      if (!id || !document.getElementById(id)) return;
      curtain.classList.remove("curtain-run");
      void curtain.offsetWidth;
      curtain.classList.add("curtain-run");
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

    document.querySelectorAll("main section:not(#top), main section:not(#top) > div, footer").forEach((element) => {
      element.classList.add("motion-reveal");
      revealObserver.observe(element);
    });

    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll(".nav-active").forEach((element) => element.classList.remove("nav-active"));
        document.querySelectorAll(`a[href="#${entry.target.id}"]`).forEach((element) => element.classList.add("nav-active"));
      });
    }, { rootMargin: "-35% 0px -55% 0px" });

    document.querySelectorAll("main section[id]").forEach((section) => activeObserver.observe(section));

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("click", onAnchorClick);
      revealObserver.disconnect();
      activeObserver.disconnect();
      cursor.remove();
      curtain.remove();
      document.body.classList.remove("has-victis-cursor");
      root.style.removeProperty("--pointer-x");
      root.style.removeProperty("--pointer-y");
    };
  }, []);

  return (
    <>
      <div className="atmosphere-grid" aria-hidden="true" />
      <div className="atmosphere-vignette" aria-hidden="true" />
      <div className="atmosphere-spotlight" aria-hidden="true" />
      <div className="edge-glow edge-glow-left" aria-hidden="true" />
      <div className="edge-glow edge-glow-right" aria-hidden="true" />
    </>
  );
}
