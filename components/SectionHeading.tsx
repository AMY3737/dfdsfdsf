import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  italic,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <p className="eyebrow text-brass mb-4">{eyebrow}</p>
      <h2 className="font-display text-4xl md:text-5xl text-ink text-balance">
        {title}
        {italic && <span className="italic font-light text-ink-soft"> {italic}</span>}
      </h2>
      <div className={`hairline w-24 mt-6 ${align === "center" ? "mx-auto" : ""}`} />
    </Reveal>
  );
}
