"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Smartphone,
  CheckCircle2,
  Sparkles,
  Server,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center lg:items-start">

          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Small Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/30 w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-primary"></span>
              </span>
              <span className="text-xs font-semibold text-accent-primary tracking-wide uppercase">
                Available for Freelance & Full-time Roles
              </span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.15] lg:leading-[1.2]">
              Developing Scalable <br className="hidden md:block" />
              <span className="text-accent-gradient">Full-Stack & Mobile</span> Applications.
            </h1>

            {/* Description */}
            <p className="text-text-body text-base md:text-lg max-w-2xl leading-relaxed">
              Hi, I&apos;m <span className="text-white font-semibold">Atul Bhagwat</span>. Mobile Application Developer specializing in high-performance <span className="text-white font-semibold">Flutter (iOS & Android)</span> apps paired with robust <span className="text-white font-semibold">Node.js</span> backends. Deployed 20+ applications with clean code standards.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-gradient-accent text-bg-primary font-bold text-sm hover:shadow-glow transition-all duration-300 flex items-center gap-2 group hover:scale-[1.03] active:scale-[0.97]"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-7 py-3.5 rounded-full bg-bg-card border border-white/10 text-white font-semibold text-sm hover:border-accent-primary/50 hover:text-accent-primary transition-all duration-300 flex items-center gap-2 group hover:bg-bg-cardHover"
              >
                <Download className="w-4 h-4 text-accent-primary group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-transparent border border-accent-primary/40 text-accent-primary font-semibold text-sm hover:bg-accent-primary/10 transition-all duration-300 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Hire Me
              </a>
            </div>

            {/* Social Icons & Quick Stats */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-text-muted font-medium uppercase tracking-wider">
                  Connect With Me
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/AtulBhagwat04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-text-body hover:text-accent-primary hover:border-accent-primary/40 transition-all duration-300 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/atulbhagwat04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-text-body hover:text-accent-primary hover:border-accent-primary/40 transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:atulbhagwat12@gmail.com"
                    className="w-10 h-10 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-text-body hover:text-accent-primary hover:border-accent-primary/40 transition-all duration-300 hover:scale-110"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-text-body">
                <div className="flex items-center gap-1.5 bg-bg-card/80 px-3 py-1.5 rounded-full border border-white/5">
                  <Smartphone className="w-4 h-4 text-accent-primary" />
                  <span>Flutter (iOS/Android)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-bg-card/80 px-3 py-1.5 rounded-full border border-white/5">
                  <Server className="w-4 h-4 text-accent-primary" />
                  <span>Node.js Backend</span>
                </div>
                <div className="flex items-center gap-1.5 bg-bg-card/80 px-3 py-1.5 rounded-full border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-accent-primary" />
                  <span>Clean Architecture</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Visuals & Developer Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end lg:pt-10"
          >
            {/* Glowing Backdrop Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/30 to-transparent rounded-full filter blur-3xl opacity-60 animate-pulse-slow" />

            {/* Developer Portrait Image Container */}
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[28px] overflow-hidden border border-white/15 bg-bg-card shadow-2xl group">
              <Image
                src="/images/developer_hero.png"
                alt="Atul Bhagwat - Mobile App Developer"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay at image bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-80" />

              {/* Corner Accent Glow */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-bg-primary/80 backdrop-blur-md border border-accent-primary/30 text-[11px] font-semibold text-accent-primary flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-primary animate-ping" />
                Application Developer
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
