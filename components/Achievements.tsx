import Reveal from "./Reveal";
import { achievements } from "@/lib/data";
import { Trophy, Globe2, Landmark } from "lucide-react";

const icons = [Trophy, Globe2, Landmark];

export default function Achievements() {
  return (
    <section id="achievements" className="py-section-sm md:py-section bg-navy text-paper">
      <div className="max-w-content mx-auto px-6 md:px-10 xl:pl-32">
        <Reveal>
          <p className="eyebrow text-brass-light mb-4">06 — Recognition</p>
          <h2 className="font-display text-4xl md:text-5xl text-paper text-balance">
            Achievements <span className="italic font-light text-paper/60">& extracurriculars.</span>
          </h2>
          <div className="hairline w-24 mt-6 opacity-30" />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((a, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={a.title} delay={i * 0.12}>
                <div className="h-full border border-paper/15 p-8 hover:border-brass-light/60 transition-colors duration-500">
                  <Icon size={22} className="text-brass-light" />
                  <h3 className="font-display text-xl text-paper mt-6">{a.title}</h3>
                  <p className="text-paper/60 mt-3 leading-relaxed font-light">{a.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
