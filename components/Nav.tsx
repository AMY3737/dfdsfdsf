"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { sections } from "@/lib/data";

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top progress hairline */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brass z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-paper/85 backdrop-blur-md border-b border-line" : "bg-transparent"
        }`}
      >
        <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-20">
          <button
            onClick={() => go("hero")}
            className="font-display italic text-lg tracking-tight text-ink"
          >
            A. Charjan
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {sections.slice(1).map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={`eyebrow transition-colors duration-300 ${
                  active === s.id ? "text-brass" : "text-ink-soft hover:text-ink"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="/Amitabh_Charjan_Resume.pdf"
              download
              className="group inline-flex items-center gap-1.5 eyebrow border border-ink px-4 py-2.5 text-ink hover:bg-ink hover:text-paper transition-colors duration-300"
            >
              Resume
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <button
            className="lg:hidden text-ink"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-20 left-0 right-0 z-40 overflow-hidden bg-paper border-b border-line lg:hidden"
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {sections.slice(1).map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className="eyebrow text-left text-ink-soft"
            >
              {s.label}
            </button>
          ))}
          <a
            href="/Amitabh_Charjan_Resume.pdf"
            download
            className="eyebrow border border-ink px-4 py-3 text-center text-ink"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Signature: vertical index rail, desktop only */}
      <aside className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col items-start gap-5">
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => go(s.id)}
            className="group flex items-center gap-3"
            aria-label={`Go to ${s.label}`}
          >
            <span
              className={`font-mono text-[10px] tabular-nums transition-colors duration-300 ${
                active === s.id ? "text-brass" : "text-muted group-hover:text-ink-soft"
              }`}
            >
              {String(i).padStart(2, "0")}
            </span>
            <span
              className={`h-px transition-all duration-500 ${
                active === s.id ? "w-8 bg-brass" : "w-4 bg-line group-hover:w-6 group-hover:bg-muted"
              }`}
            />
            <span
              className={`eyebrow whitespace-nowrap overflow-hidden transition-all duration-300 ${
                active === s.id
                  ? "max-w-[140px] opacity-100 text-ink"
                  : "max-w-0 opacity-0 group-hover:max-w-[140px] group-hover:opacity-70"
              }`}
            >
              {s.label}
            </span>
          </button>
        ))}
      </aside>
    </>
  );
}
