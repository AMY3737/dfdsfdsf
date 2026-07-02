import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills, interests } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-section-sm md:py-section">
      <div className="max-w-content mx-auto px-6 md:px-10 xl:pl-32">
        <SectionHeading eyebrow="07 — Toolkit" title="Skills" italic="& interests." />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.1}>
              <p className="eyebrow text-brass mb-5">{s.group}</p>
              <ul className="space-y-3">
                {s.items.map((item) => (
                  <li key={item} className="text-ink-soft font-light border-b border-line pb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-16 pt-10 border-t border-line">
          <p className="eyebrow text-muted mb-5">Interests</p>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="text-sm text-ink border border-line px-4 py-2 hover:bg-ink hover:text-paper hover:border-ink transition-colors duration-300 cursor-default"
              >
                {interest}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
