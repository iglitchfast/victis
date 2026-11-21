import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import Backdrop from "@/components/Backdrop";
import MotionAtmosphere from "@/components/MotionAtmosphere";
import Loader from "@/components/Loader";
import Spot from "@/components/Spot";
import Magnetic from "@/components/Magnetic";
import Marquee from "@/components/Marquee";
import { EMAIL, glance, pillars, values, services, method, founders } from "@/lib/content";

function Section({ id, title, lede, children }) {
  return (
    <section id={id} className="motion-section scroll-mt-16 border-t border-white/10 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[5fr_7fr] lg:gap-24">
        <header className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="t-h2">{title}</h2>
          {lede && <p className="t-lede mt-6">{lede}</p>}
        </header>
        <div>{children}</div>
      </div>
    </section>
  );
}

const Grid = ({ items, cols = "sm:grid-cols-2" }) => (
  <div className={`grid gap-x-10 gap-y-8 ${cols}`}>
    {items.map(([t, d]) => (
      <Spot key={t} className="border-t border-gold/30 py-6 pr-2">
        <h3 className="t-h3">{t}</h3>
        <p className="t-body mt-3">{d}</p>
      </Spot>
    ))}
  </div>
);

const Statement = ({ label, children }) => (
  <div>
    <p className="t-label">{label}</p>
    <p className="t-quote mt-4">{children}</p>
  </div>
);

const icons = {
  linkedin: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.05c.53-1 1.84-2 3.8-2 4.06 0 4.8 2.67 4.8 6.14V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4z" />,
  github: <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />,
};
const Icon = ({ children, stroke }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill={stroke ? "none" : "currentColor"} stroke={stroke ? "currentColor" : "none"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);

export default function Home() {
  return (
    <>
      <Backdrop />
      <MotionAtmosphere />
      <Loader />
      <Nav />
      <main>
        <Hero />
        <Marquee />

        <Section id="glance" title="VICTIS at a glance" lede="A practical ambition: build software that solves real problems well.">
          <dl className="divide-y divide-white/10 border-y border-white/10">
            {glance.map(([k, v]) => (
              <div key={k} className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:gap-8">
                <dt className="t-label pt-0.5">{k}</dt><dd className="t-body">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            <Statement label="Why we exist">Many real-world problems are still handled with workarounds that well-built software could replace.</Statement>
            <Statement label="What we believe">A reliable, honest solution for one real need is worth more than a broad promise for everyone.</Statement>
          </div>
        </Section>

        <Section id="story" title="Our story" lede="Can technology solve a practical problem in a way that genuinely improves everyday life?">
          <div className="space-y-6">
            <p className="t-body">VICTIS began in a college environment with that one entrepreneurial question. The founders chose to answer it by building: real software, tested with real users, rather than ideas that stay on slides.</p>
            <h3 className="t-h3 pt-6">Software should serve people</h3>
            <p className="t-body">Businesses and individuals often put up with slow, manual or disconnected ways of working because the right software is hard to find, afford or trust. The gap is rarely the technology itself. It is building solutions that fit the real need, the real devices and the real budget.</p>
            <h3 className="t-h3 pt-6">From a question to a company</h3>
            <p className="t-body">An idea becomes credible through disciplined execution: listening to users, building a working product, testing assumptions, measuring outcomes and correcting what does not work. VICTIS intends to grow through evidence rather than inflated claims.</p>
          </div>
        </Section>

        <Section id="mission" title="Vision and mission">
          <div className="space-y-12">
            <Statement label="Vision">To build useful, scalable software solutions that solve real-world problems for businesses and communities.</Statement>
            <Statement label="Mission">To turn practical, overlooked problems into reliable software through thoughtful engineering, responsible technology and continuous engagement with the people our software serves.</Statement>
          </div>
          <div className="mt-16"><Grid items={pillars} /></div>
        </Section>

        <Section id="values" title="Our values" lede="Values are only useful if they change decisions.">
          <Grid items={values} />
        </Section>

        <Section id="founders" title="The founders" lede="A small team that took an early-stage idea through product definition, software development and startup preparation.">
          <ul className="grid gap-8 sm:grid-cols-2">
            {founders.map((f) => (
              <li key={f.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-panel/80 transition-colors hover:border-gold/40">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={f.photo} alt={`Portrait of ${f.name}`} fill sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 92vw" className="object-cover grayscale-[.85] transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0" />
                  <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-panel to-transparent" />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="t-label">{f.role}</p>
                  <h3 className="t-name mt-3">{f.name}</h3>
                  <a href={`mailto:${f.email}`} className="t-small mt-3 inline-block break-all transition-colors hover:text-gold">{f.email}</a>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="chip" aria-label={`${f.name} on LinkedIn`}><Icon>{icons.linkedin}</Icon>LinkedIn</a>
                    <a href={f.github} target="_blank" rel="noopener noreferrer" className="chip" aria-label={`${f.name} on GitHub`}><Icon>{icons.github}</Icon>GitHub</a>
                    <a href={`mailto:${f.email}`} className="chip" aria-label={`Email ${f.name}`}><Icon stroke><path d="M3 6h18v12H3z" /><path d="m3 7 9 6 9-6" /></Icon>Email</a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-12 space-y-5">
            <p className="t-body">Before incorporation, Goutham and Amal will formalise responsibilities, decision rights, time commitments and ownership so that VICTIS begins on clear and fair foundations.</p>
            <p className="t-body">A successful launch needs product and engineering leadership, user research, client onboarding, customer support, quality assurance, information security, finance and legal guidance. VICTIS will build these capabilities in proportion to its progress, supported by mentors, incubators and specialist partners.</p>
          </div>
        </Section>

        <Section id="services" title="What we build" lede="Software solutions shaped around a real need.">
          <Grid items={services} />
          <p className="t-small mt-10 max-w-prose">VICTIS is pre-incorporation and is still shaping its service lines. The focus areas above describe where we intend to work, not a list of delivered projects.</p>
        </Section>

        <Section id="build" title="How we build" lede="Start narrow, prove it works, then grow.">
          <Grid items={method} />
          <div className="mt-14 space-y-8">
            <div><h3 className="t-h3">Clear, fair pricing</h3><p className="t-body mt-3">We intend to scope and price projects transparently, based on the work involved, so clients know what they are paying for. The exact approach will be validated before it is used.</p></div>
            <div><h3 className="t-h3">India-first thinking</h3><p className="t-body mt-3">Multilingual interfaces, low-bandwidth support and accessible design are ideas we want to test with real users.</p></div>
          </div>
        </Section>

        <Section id="roadmap" title="A year of proof, not premature scale" lede="Our first twelve months are about earning evidence, not announcing scale.">
          <Roadmap />
          <div className="mt-14">
            <h3 className="t-h3">Support that would make a difference</h3>
            <p className="t-body mt-3">Mentorship from incubators and experienced founders, help validating the market, introductions to early clients and partner institutions, guidance on incorporation and intellectual property, technical review, and help preparing a realistic launch budget.</p>
          </div>
        </Section>

        <Marquee reverse />
        <section id="contact" className="motion-section contact-finale scroll-mt-16 border-t border-white/10 py-24 text-center lg:py-32">
          <div className="mx-auto max-w-3xl px-6">
            <Image src="/victis-logo.png" alt="VICTIS emblem" width={1000} height={1000} className="mx-auto mb-10 h-44 w-auto drop-shadow-[0_0_40px_rgba(192,20,30,.45)] sm:h-52" />
            <h2 className="t-h2">Walk that road with us.</h2>
            <p className="t-lede mx-auto mt-6">We invite mentors, partners and early clients to work with us as we build software that works, earns trust and gives us the evidence for the next step.</p>
            <div className="mt-10"><Magnetic><a href={`mailto:${EMAIL}`} className="btn-primary">{EMAIL}</a></Magnetic></div>
            <p className="t-small mt-6">Goutham Sankar and Amal Kakkat, Co-Founders. Kerala, India.</p>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 px-6 py-12 text-center">
        <Image src="/victis-logo.png" alt="VICTIS" width={1000} height={1000} className="mx-auto mb-6 h-20 w-auto opacity-90" />
        <p className="t-small mx-auto max-w-2xl">VICTIS is pre-incorporation. This site describes plans and intentions and makes no claim of registration, funding, partnerships or customer traction.</p>
        <p className="t-small mt-3">Victory Rules the Realm.</p>
      </footer>
    </>
  );
}
