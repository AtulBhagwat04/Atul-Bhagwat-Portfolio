"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Mail } from "lucide-react";
import { profileDetails, quickFacts, educationList } from "@/data/about";

export default function About() {
  const renderFactIcon = (type: string) => {
    switch (type) {
      case "location":
        return <MapPin className="w-4 h-4 text-accent-primary" />;
      case "status":
        return <Briefcase className="w-4 h-4 text-accent-primary" />;
      case "email":
        return <Mail className="w-4 h-4 text-accent-primary" />;
      default:
        return <MapPin className="w-4 h-4 text-accent-primary" />;
    }
  };

  return (
    <section id="about" className="py-24 relative bg-bg-secondary/30 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/25 text-accent-primary text-[11px] font-bold uppercase tracking-widest shadow-glowSm">
            About Me
          </span>
          <h2 className="font-heading section-title font-extrabold text-white">
            The Developer <span className="text-accent-gradient">Behind the Code</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-accent rounded-full" />
          <p className="text-text-body text-base max-w-xl leading-relaxed">
            Focused on crafting scalable mobile applications and high-performance backend systems.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Image Showcase & Quick Profile (Sticky) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-28 space-y-6"
          >
            {/* Image Container */}
            <div className="relative aspect-square max-w-[340px] mx-auto lg:mx-0 rounded-3xl overflow-hidden glass-card p-2 border border-white/10 shadow-glowLg hover:border-accent-primary/30 transition-all duration-500">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={profileDetails.avatar}
                  alt={profileDetails.name}
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-card border border-white/10 text-center">
                  <p className="text-white font-bold text-base font-heading">{profileDetails.name}</p>
                  <p className="text-accent-primary text-xs font-semibold">{profileDetails.role}</p>
                </div>
              </div>
            </div>

            {/* Quick Profile facts */}
            <div className="max-w-[340px] mx-auto lg:mx-0 p-6 rounded-3xl glass-card border border-white/8 hover:border-accent-primary/25 transition-all duration-400 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading border-b border-white/10 pb-2">
                Quick Profile
              </h4>
              <div className="space-y-3.5">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      {renderFactIcon(fact.type)}
                    </div>
                    <div>
                      <span className="text-[10px] text-text-muted uppercase tracking-wider block font-semibold">
                        {fact.label}
                      </span>
                      <span className="text-xs text-white font-medium leading-relaxed">
                        {fact.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio, Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Biography Narrative */}
            <div className="space-y-5 text-text-body text-[15px] leading-[1.8] glass-card p-6 sm:p-8 rounded-3xl border border-white/8 hover:border-accent-primary/20 transition-all duration-400">
              <p>{profileDetails.bioParagraph1}</p>
              <p>{profileDetails.bioParagraph2}</p>
            </div>

            {/* Education Timeline */}
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/8 hover:border-accent-primary/20 transition-all duration-400 space-y-5">
              <h3 className="text-base font-bold text-white font-heading flex items-center gap-2 border-b border-white/8 pb-3">
                <GraduationCap className="w-5 h-5 text-accent-primary" />
                Education
              </h3>
              <div className="space-y-5">
                {educationList.map((edu) => (
                  <div key={edu.degree} className="relative pl-5 border-l border-white/10 group">
                    <div
                      className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full transition-transform group-hover:scale-125 ${
                        edu.isPrimary ? "bg-accent-primary" : "bg-white/20"
                      }`}
                    />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-1.5">
                      <h4 className="text-sm font-bold text-white leading-normal">
                        {edu.degree}
                      </h4>
                      <span
                        className={`text-[10px] font-mono font-bold shrink-0 px-2.5 py-0.5 rounded border self-start sm:self-center ${
                          edu.isPrimary
                            ? "bg-accent-primary/10 text-accent-primary border-accent-primary/20"
                            : "bg-white/5 text-text-muted border-white/10"
                        }`}
                      >
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs text-text-body font-medium leading-relaxed">
                      {edu.institution} <span className="text-text-muted mx-1.5">•</span>{" "}
                      <span className="text-accent-primary font-semibold font-mono">{edu.score}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
