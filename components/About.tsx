import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile, education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-section-sm md:py-section">
      <div className="max-w-content mx-auto px-6 md:px-10 xl:pl-32">
        <SectionHeading eyebrow="01 — About" title="Structured thinking," italic="applied curiosity." />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="text-xl md:text-2xl font-display font-light text-ink-soft leading-relaxed text-balance">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-line">
            <p className="eyebrow text-muted mb-3">Education</p>
            <p className="font-display text-xl text-ink">{education.institute}</p>
            <p className="text-ink-soft mt-1">{education.program}</p>
            <p className="font-mono text-xs text-muted mt-2">{education.duration}</p>

            <p className="eyebrow text-muted mt-8 mb-3">Relevant Coursework</p>
            <ul className="flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <li
                  key={c}
                  className="text-sm text-ink-soft border border-line px-3 py-1.5 hover:border-brass hover:text-ink transition-colors duration-300"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
