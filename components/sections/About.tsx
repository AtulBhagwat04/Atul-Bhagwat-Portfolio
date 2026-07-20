"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Mail } from "lucide-react";

export default function About() {
  const quickFacts = [
    { icon: <MapPin className="w-4 h-4 text-accent-primary" />, label: "Location", value: "Maharashtra, India" },
    { icon: <Briefcase className="w-4 h-4 text-accent-primary" />, label: "Role Status", value: "Available for SDE Internships" },
    { icon: <Mail className="w-4 h-4 text-accent-primary" />, label: "Email Address", value: "atulbhagwat12@gmail.com" },
  ];

  return (
    <section id="about" className="py-24 relative bg-bg-secondary/40">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-xs font-bold uppercase tracking-wider">
            About Me
          </span>
          <h2 className="font-heading section-title font-extrabold text-white">
            Full-Stack <span className="text-accent-gradient">Developer</span>
          </h2>
          <p className="text-text-body text-base max-w-2xl">
            Focused on building scalable mobile applications and robust backend systems.
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
            <div className="relative aspect-square max-w-[340px] mx-auto lg:mx-0 rounded-3xl overflow-hidden glass-card p-2 border border-white/10 shadow-2xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/developer_hero.png"
                  alt="Atul Kaduba Bhagwat"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-card border border-white/10 text-center">
                  <p className="text-white font-bold text-base font-heading">Atul Kaduba Bhagwat</p>
                  <p className="text-accent-primary text-xs font-semibold">Full Stack App Developer</p>
                </div>
              </div>
            </div>

            {/* Quick Profile facts - Vertical layout */}
            <div className="max-w-[340px] mx-auto lg:mx-0 p-6 rounded-3xl bg-bg-card/30 backdrop-blur-md border border-white/5 hover:border-accent-primary/20 transition-all duration-300 space-y-4 shadow-xl">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading border-b border-white/10 pb-2">
                Quick Profile
              </h4>
              <div className="space-y-3.5">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      {fact.icon}
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
            <div className="space-y-4 text-text-body text-base leading-relaxed bg-bg-card/30 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-accent-primary/20 transition-all duration-300 shadow-xl">
              <p>
                I am a <span className="text-white font-semibold font-heading">Full Stack App Developer</span> focused on building scalable mobile applications with <span className="text-accent-primary font-semibold">Flutter</span> and robust backend systems using <span className="text-accent-primary font-semibold">Node.js</span>. I am passionate about clean architecture, REST APIs, responsive UI, and solving real-world problems through technology.
              </p>
              <p>
                Currently, I am sharpening my Data Structures & Algorithms (DSA), backend engineering, and software engineering foundations while building production-ready projects in pursuit of high-impact <span className="text-white font-semibold">SDE opportunities</span>.
              </p>
            </div>

            {/* Education mini-timeline Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-bg-card/30 backdrop-blur-md border border-white/5 hover:border-accent-primary/20 transition-all duration-300 space-y-5 shadow-xl">
              <h3 className="text-base font-bold text-white font-heading flex items-center gap-2 border-b border-white/5 pb-3">
                <GraduationCap className="w-5 h-5 text-accent-primary" />
                Education
              </h3>
              <div className="space-y-5">
                <div className="relative pl-5 border-l border-white/10 group">
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-primary group-hover:scale-125 transition-transform" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-1.5">
                    <h4 className="text-sm font-bold text-white leading-normal">
                      B.Tech in Computer Science & Business Systems
                    </h4>
                    <span className="text-[10px] font-mono text-accent-primary font-bold shrink-0 bg-accent-primary/10 px-2.5 py-0.5 rounded border border-accent-primary/20 self-start sm:self-center">
                      2024 – 2027
                    </span>
                  </div>
                  <p className="text-xs text-text-body font-medium leading-relaxed">
                    KIT's College of Engineering, Kolhapur <span className="text-text-muted mx-1.5">•</span> <span className="text-accent-primary font-semibold font-mono">CGPA: 8.09</span>
                  </p>
                </div>

                <div className="relative pl-5 border-l border-white/10 group">
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20 group-hover:scale-125 transition-transform" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-1.5">
                    <h4 className="text-sm font-bold text-white leading-normal">
                      Diploma in Information Technology
                    </h4>
                    <span className="text-[10px] font-mono text-text-muted font-bold shrink-0 bg-white/5 px-2.5 py-0.5 rounded border border-white/10 self-start sm:self-center">
                      2021 – 2024
                    </span>
                  </div>
                  <p className="text-xs text-text-body font-medium leading-relaxed">
                    Government Polytechnic Ambad, Jalna <span className="text-text-muted mx-1.5">•</span> <span className="text-accent-primary font-semibold font-mono">Percentage: 86.94%</span>
                  </p>
                </div>

                <div className="relative pl-5 border-l border-white/10 group">
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20 group-hover:scale-125 transition-transform" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-1.5">
                    <h4 className="text-sm font-bold text-white leading-normal">
                      Secondary School Certificate (SSC)
                    </h4>
                    <span className="text-[10px] font-mono text-text-muted font-bold shrink-0 bg-white/5 px-2.5 py-0.5 rounded border border-white/10 self-start sm:self-center">
                      2020 – 2021
                    </span>
                  </div>
                  <p className="text-xs text-text-body font-medium leading-relaxed">
                    Z. P. High School Shivna, Chhatrapati Sambhajinagar <span className="text-text-muted mx-1.5">•</span> <span className="text-accent-primary font-semibold font-mono">Percentage: 85.40%</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
