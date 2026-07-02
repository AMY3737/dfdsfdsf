"use client";

import Reveal from "./Reveal";
import { profile } from "@/lib/data";
import { Mail, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-section-sm md:py-section relative overflow-hidden">
      <div className="absolute -bottom-24 right-[-8%] w-[480px] h-[480px] rounded-full bg-brass/10 blur-[130px] -z-10" />

      <div className="max-w-content mx-auto px-6 md:px-10 xl:pl-32">
        <Reveal>
          <p className="eyebrow text-brass mb-4">08 — Contact</p>
          <h2 className="font-display text-4xl md:text-6xl text-ink text-balance max-w-2xl">
            Let's build something <span className="italic font-light text-ink-soft">worth pitching.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href={`mailto:${profile.email}`}
            className="group border border-line p-7 hover:border-brass transition-colors duration-300"
          >
            <Mail size={20} className="text-brass" />
            <p className="eyebrow text-muted mt-5 mb-2">Email</p>
            <p className="text-ink font-light break-all flex items-center gap-1.5">
              {profile.email}
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </a>

          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-line p-7 hover:border-brass transition-colors duration-300"
          >
            <Linkedin size={20} className="text-brass" />
            <p className="eyebrow text-muted mt-5 mb-2">LinkedIn</p>
            <p className="text-ink font-light flex items-center gap-1.5">
              {profile.linkedin}
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </a>

          <div className="border border-line p-7">
            <MapPin size={20} className="text-brass" />
            <p className="eyebrow text-muted mt-5 mb-2">Location</p>
            <p className="text-ink font-light">{profile.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
