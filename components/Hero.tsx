"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden xl:pl-24"
    >
      {/* Ambient backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-10%] w-[560px] h-[560px] rounded-full bg-brass/10 blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[420px] h-[420px] rounded-full bg-navy/10 blur-[110px]" />
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="eyebrow text-brass mb-6"
            >
              IPM · IIM Jammu · Batch of 2030
            </motion.p>

            <h1 className="font-display text-hero-sm md:text-hero text-ink text-balance">
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.1 }}
                className="block"
              >
                Amitabh
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.22 }}
                className="block italic font-light text-ink-soft"
              >
                Charjan
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.4 }}
              className="mt-8 max-w-lg text-lg text-ink-soft leading-relaxed font-light"
            >
              Building structured, data-informed thinking at the intersection of{" "}
              <span className="text-ink font-normal">entrepreneurship</span>,{" "}
              <span className="text-ink font-normal">marketing</span>, and{" "}
              <span className="text-ink font-normal">management</span> — one project at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 bg-ink text-paper px-6 py-3.5 eyebrow hover:bg-navy-dark transition-colors duration-300"
              >
                Let's Connect
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/Amitabh_Charjan_Resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-ink/25 px-6 py-3.5 eyebrow text-ink hover:border-ink transition-colors duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease, delay: 0.2 }}
              className="relative mx-auto max-w-[360px] lg:max-w-none"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-brass" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-brass" />
              <div className="relative aspect-[4/5] overflow-hidden bg-navy">
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Amitabh Charjan"
                  fill
                  priority
                  sizes="(max-width: 1024px) 360px, 420px"
                  className="object-cover object-top grayscale-[15%] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/25 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-4 lg:translate-x-0 bg-paper border border-line px-5 py-3 shadow-[0_18px_40px_-20px_rgba(18,23,42,0.35)]">
                <p className="eyebrow text-muted">Aurangabad, MH</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted hover:text-ink transition-colors"
        aria-label="Scroll to About"
      >
        <span className="eyebrow">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
