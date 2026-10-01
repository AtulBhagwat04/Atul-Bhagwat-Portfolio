"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Star,
  Zap,
  Layers,
} from "lucide-react";
import { heroData } from "@/data/hero";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Apps Shipped" },
  { value: "5★", label: "Client Rating" },
  { value: "50K+", label: "App Downloads" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Deep ambient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-primary/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent-primary/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left Column Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-7"
          >
            {/* Availability Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/25 w-fit backdrop-blur-md shadow-glowSm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary" />
              </span>
              <span className="text-[11px] font-bold text-accent-primary tracking-widest uppercase">
                {heroData.statusBadge}
              </span>
            </motion.div>

            {/* Main Hero Headline */}
            <motion.h1 variants={itemVariants} className="hero-title font-heading font-extrabold text-white tracking-[-0.025em]">
              {heroData.titleLine1}{" "}
              <br className="hidden sm:block" />
              <span className="text-accent-gradient">{heroData.titleLine2}</span>{" "}
              {heroData.titleLine3}
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-text-body text-base md:text-[17px] max-w-xl leading-[1.75]">
              {heroData.bioPrefix}
              <span className="text-white font-semibold">{heroData.name}</span>
              {heroData.bioSuffix}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="group px-7 py-3.5 rounded-full bg-gradient-accent text-bg-primary font-bold text-sm hover:shadow-glow transition-all duration-300 flex items-center gap-2 hover:scale-[1.03] active:scale-[0.97]"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={heroData.socialLinks.resume}
                download
                className="px-7 py-3.5 rounded-full bg-bg-card border border-white/10 text-white font-semibold text-sm hover:border-accent-primary/40 hover:text-accent-primary transition-all duration-300 flex items-center gap-2 group hover:bg-bg-cardHover"
              >
                <Download className="w-4 h-4 text-accent-primary group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </a>
            </motion.div>

            {/* Stats Strip */}
            <motion.div variants={itemVariants} className="grid grid-cols-4 gap-3 pt-2">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center py-3 px-2 rounded-2xl bg-bg-card/50 border border-white/5 hover:border-accent-primary/25 transition-all duration-300">
                  <span className="text-xl sm:text-2xl font-extrabold font-heading text-accent-primary leading-none">{s.value}</span>
                  <span className="text-[10px] text-text-muted font-medium mt-1 leading-tight">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Social Icons & Tech Highlights */}
            <motion.div variants={itemVariants} className="pt-4 border-t border-white/8 flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2.5">
                <a
                  href={heroData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-text-muted hover:text-accent-primary hover:border-accent-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-glowSm"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={heroData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-text-muted hover:text-accent-primary hover:border-accent-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-glowSm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={heroData.socialLinks.email}
                  className="w-9 h-9 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-text-muted hover:text-accent-primary hover:border-accent-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-glowSm"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-card/70 border border-white/5 text-[11px] font-semibold text-text-body hover:border-accent-primary/25 transition-colors">
                  <Zap className="w-3 h-3 text-accent-primary" /> Flutter
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-card/70 border border-white/5 text-[11px] font-semibold text-text-body hover:border-accent-primary/25 transition-colors">
                  <Layers className="w-3 h-3 text-accent-primary" /> Node.js
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-card/70 border border-white/5 text-[11px] font-semibold text-text-body hover:border-accent-primary/25 transition-colors">
                  <Star className="w-3 h-3 text-accent-primary" /> Clean Architecture
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Developer Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 bg-accent-primary/12 rounded-full blur-[80px] pointer-events-none animate-pulse-slow" />

            {/* Rotating ring decoration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[420px] h-[420px] rounded-full border border-accent-primary/10 border-dashed pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute w-[350px] h-[350px] rounded-full border border-white/5 border-dotted pointer-events-none"
            />

            {/* Small accent dots orbiting */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute w-[450px] h-[450px] pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-primary/60 shadow-glowSm" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-primary/40" />
            </motion.div>

            {/* Developer Portrait Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[360px] aspect-[3/4] rounded-[32px] overflow-hidden border border-white/12 bg-bg-card shadow-glowLg group hover:border-accent-primary/40 transition-all duration-500 z-10"
            >
              <Image
                src={heroData.developerPortrait}
                alt="Atul Bhagwat - Mobile App Developer"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent opacity-80" />

              {/* Availability badge on portrait */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-primary/85 backdrop-blur-md border border-accent-primary/30 text-[11px] font-bold text-accent-primary shadow-glowSm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-ping" />
                Application Developer
              </div>

              {/* Bottom info strip */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center justify-between bg-bg-primary/80 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/8">
                  <div>
                    <p className="text-white font-bold text-sm font-heading">Atul Bhagwat</p>
                    <p className="text-accent-primary text-[11px] font-semibold">Flutter Developer</p>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-accent-primary/50 animate-pulse" style={{ animationDelay: '0.4s' }} />
                    <div className="w-2 h-2 rounded-full bg-accent-primary/30 animate-pulse" style={{ animationDelay: '0.8s' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  );
}

