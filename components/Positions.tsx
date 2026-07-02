import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { positions } from "@/lib/data";

export default function Positions() {
  return (
    <section id="positions" className="py-section-sm md:py-section">
      <div className="max-w-content mx-auto px-6 md:px-10 xl:pl-32">
        <SectionHeading eyebrow="03 — Leadership" title="Positions of" italic="responsibility." />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
          {positions.map((p, i) => (
            <Reveal key={p.org} delay={i * 0.12} className="bg-paper p-8 md:p-10">
              <p className="font-mono text-xs text-muted">{p.duration}</p>
              <h3 className="font-display text-2xl text-ink mt-3">{p.role}</h3>
              <p className="text-brass mt-1 mb-6 font-light">{p.org}</p>
              <ul className="space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="text-ink-soft leading-relaxed pl-5 relative font-light">
                    <span className="absolute left-0 top-[0.65em] w-2 h-px bg-brass" />
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
