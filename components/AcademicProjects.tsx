import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { academicProjects } from "@/lib/data";

export default function AcademicProjects() {
  return (
    <section id="academic-projects" className="py-section-sm md:py-section">
      <div className="max-w-content mx-auto px-6 md:px-10 xl:pl-32">
        <SectionHeading eyebrow="05 — Coursework" title="Academic" italic="projects." />

        <div className="mt-16 space-y-px bg-line">
          {academicProjects.map((proj, i) => (
            <Reveal key={proj.title} delay={i * 0.1}>
              <div className="bg-paper py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 group">
                <div className="md:col-span-3">
                  <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <p className="eyebrow text-brass mt-2">{proj.course}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl text-ink group-hover:text-brass transition-colors duration-300">
                    {proj.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {proj.points.map((pt) => (
                      <li key={pt} className="text-ink-soft leading-relaxed font-light">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
