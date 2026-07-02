import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { liveProject } from "@/lib/data";
import { Award } from "lucide-react";

export default function LiveProject() {
  return (
    <section id="live-project" className="py-section-sm md:py-section bg-paper-dim">
      <div className="max-w-content mx-auto px-6 md:px-10 xl:pl-32">
        <SectionHeading eyebrow="04 — Industry Exposure" title="Live" italic="industry project." />

        <Reveal delay={0.15} className="mt-16">
          <div className="border border-line bg-paper p-8 md:p-14 relative">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-8">
                <p className="font-mono text-xs text-muted">{liveProject.duration}</p>
                <h3 className="font-display text-3xl md:text-4xl text-ink mt-3">{liveProject.role}</h3>
                <p className="text-brass mt-2 mb-8 text-lg font-light">{liveProject.org}</p>
                <ul className="space-y-4">
                  {liveProject.points.map((pt) => (
                    <li key={pt} className="text-ink-soft leading-relaxed pl-6 relative font-light">
                      <span className="absolute left-0 top-[0.65em] w-3 h-px bg-brass" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-4 flex md:justify-end items-start">
                <div className="flex items-center gap-3 border border-brass/40 px-5 py-4 bg-brass/5">
                  <Award size={20} className="text-brass shrink-0" />
                  <span className="text-sm text-ink-soft font-light">
                    Certificate of Performance — Outstanding Performance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
