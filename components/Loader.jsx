"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

export default function Loader() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => { setOn(false); document.body.style.overflow = ""; }, 1900);
    return () => { clearTimeout(t); document.body.style.overflow = ""; };
  }, []);
  return (
    <AnimatePresence>
      {on && (
        <motion.div exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink" style={{ clipPath: "inset(0 0 0% 0)" }}>
          <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} className="relative h-56 w-56 sm:h-72 sm:w-72">
            <Image src="/victis-logo.png" alt="VICTIS" fill priority sizes="288px" className="object-contain drop-shadow-[0_0_30px_rgba(192,20,30,.5)]" />
          </motion.div>
          <div className="mt-6 h-px w-48 overflow-hidden bg-white/10"><motion.div className="h-full bg-gradient-to-r from-crimson to-gold" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.6, ease: "easeInOut" }} /></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
