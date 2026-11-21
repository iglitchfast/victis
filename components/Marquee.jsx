const WORDS = ["Victory Rules the Realm", "Software solutions", "Built in Kerala", "Evidence before ambition", "Start narrow, prove it, grow"];

export default function Marquee({ reverse = false }) {
  return (
    <div aria-hidden className="select-none overflow-hidden border-y border-white/10 py-5">
      <div className={`flex w-max whitespace-nowrap animate-[marquee_60s_linear_infinite] ${reverse ? "[animation-direction:reverse]" : ""}`}>
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {WORDS.map((w) => (
              <span key={w} className="flex items-center">
                <span className="font-display text-2xl font-medium text-bone/55 md:text-3xl">{w}</span>
                <span className="mx-8 text-xs text-gold md:mx-12">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
