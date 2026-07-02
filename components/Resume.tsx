import Reveal from "./Reveal";
import { FileDown } from "lucide-react";

const timeline = [
  {
    year: "2025 — Present",
    title: "IPM, IIM Jammu",
    detail: "Integrated Programme in Management, 2nd Year",
  },
  {
    year: "2025 — Present",
    title: "EDC & PPMC, IIM Jammu",
    detail: "Entrepreneurship Development Cell · Project & Product Management Club",
  },
  {
    year: "15-Day Program",
    title: "Divuzl Live Project",
    detail: "Social Media Management Trainee — Certificate of Performance",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-section-sm md:py-section bg-navy text-paper relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.06]" style={{
        backgroundImage: "linear-gradient(#F7F6F2 1px, transparent 1px), linear-gradient(90deg, #F7F6F2 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }} />

      <div className="max-w-content mx-auto px-6 md:px-10 xl:pl-32">
        <Reveal>
          <p className="eyebrow text-brass-light mb-4">02 — Resume</p>
          <h2 className="font-display text-4xl md:text-5xl text-paper text-balance">
            The full record, <span className="italic font-light text-paper/60">one download away.</span>
          </h2>
          <div className="hairline w-24 mt-6 opacity-30" />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.1}>
                <div className="flex gap-6 md:gap-10">
                  <span className="font-mono text-xs text-brass-light pt-1.5 w-32 shrink-0">{t.year}</span>
                  <div className="pb-8 border-b border-paper/10 flex-1">
                    <h3 className="font-display text-xl md:text-2xl text-paper">{t.title}</h3>
                    <p className="text-paper/60 mt-2 font-light">{t.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="bg-paper text-ink p-8 md:p-10 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-brass" />
              <p className="eyebrow text-muted mb-2">Amitabh_Charjan_Resume.pdf</p>
              <p className="font-display text-2xl mb-6">One-page summary of education, leadership, live industry experience, and academic projects.</p>
              <a
                href="/Amitabh_Charjan_Resume.pdf"
                download
                className="group inline-flex items-center gap-2.5 bg-ink text-paper px-6 py-3.5 eyebrow hover:bg-brass-dark transition-colors duration-300"
              >
                <FileDown size={16} />
                Download Resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
