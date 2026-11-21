"use client";
export default function Spot({ children, className = "" }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div onPointerMove={move} className={`group relative overflow-hidden transition-colors hover:bg-white/[0.02] ${className}`}>
      <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(260px circle at var(--mx,50%) var(--my,50%), rgba(231,184,92,.15), transparent 70%)" }} />
      <div className="relative">{children}</div>
    </div>
  );
}
