"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaFire,
} from "react-icons/fa6";
import { SiFlutter } from "react-icons/si";
import { heroData } from "@/data/hero";
import { useState, useEffect } from "react";

/* ─── Animation variants ─── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const techTags = [
  { icon: <SiFlutter className="w-3 h-3" />, label: "Flutter" },
  { icon: <FaReact className="w-3 h-3" />, label: "React Native" },
  { icon: <FaNodeJs className="w-3 h-3" />, label: "Node.js" },
  { icon: <FaFire className="w-3 h-3" />, label: "Firebase" },
];

/* ─── Typed words cycle ─── */
const words = ["Flutter Apps", "Android Apps", "iOS Apps"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-grid-pattern"
    >
      {/* ── Ambient orbs ── */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-primary/6 rounded-full blur-[140px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-accent-primary/4 rounded-full blur-[120px] pointer-events-none" />

      {/* ══════════════════════════════════════════
          RIGHT SIDE — Embedded portrait
      ══════════════════════════════════════════ */}
      <div
        className="absolute inset-y-0 right-0 w-[48%] xl:w-[44%] hidden lg:flex items-center pointer-events-none overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.05) 5%, rgba(0, 0, 0, 0.3) 8%, rgba(0, 0, 0, 0.75) 25%, black 45%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.05) 5%, rgba(0, 0, 0, 0.3) 8%, rgba(0, 0, 0, 0.75) 25%, black 45%)",
        }}
      >
        {/* Developer image — bright, aligned to right */}
        <div className="relative w-full h-full">
          <Image
            src={heroData.developerPortrait}
            alt="Atul Bhagwat - Mobile Application Developer"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "40% top", opacity: 0.9 }}
          />
          {/* Smooth wide left-edge fade — gradual dissolve, no visible line */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, var(--bg-primary) 0%, rgba(3,6,8,0.85) 18%, rgba(3,6,8,0.4) 38%, transparent 85%)",
            }}
          />
          {/* Soft bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent pointer-events-none" />
          {/* Soft top fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/50 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-8 w-full pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* ── Left column ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col gap-5"
          >

            {/* Availability Status Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/5 backdrop-blur-md shadow-glowSm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent-primary">
                  {heroData.statusBadge}
                </span>
              </div>
            </motion.div>


            {/* Headline with typed animation */}
            <motion.div variants={itemVariants}>
              <h1 className="hero-title font-heading font-extrabold text-white tracking-[-0.025em] leading-[1.12]">
                <span className="block sm:inline">Building </span>
                <span className="whitespace-nowrap">High&#8209;Performance</span>
                <br className="hidden sm:block" />
                <span className="text-accent-gradient">
                  {displayed}
                  <span className="inline-block w-[2px] h-[0.85em] bg-accent-primary ml-0.5 align-middle animate-[blink_1s_steps(1)_infinite]" />
                </span>
              </h1>
            </motion.div>

            {/* Bio */}
            <motion.p variants={itemVariants} className="text-text-body text-sm md:text-[15px] max-w-lg leading-[1.8]">
              {heroData.bioPrefix}
              <span className="text-white font-semibold">{heroData.name}</span>
              {heroData.bioSuffix}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group px-7 py-3.5 rounded-full bg-gradient-accent text-bg-primary font-bold text-sm flex items-center gap-2 shadow-glowSm hover:shadow-glow transition-shadow duration-300"
              >
                View My Work
              </motion.a>

              <motion.a
                href={heroData.socialLinks.resume}
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group px-7 py-3.5 rounded-full bg-bg-card/80 backdrop-blur-sm border border-white/10 text-white font-semibold text-sm flex items-center gap-2 hover:border-accent-primary/40 hover:bg-bg-card transition-all duration-300"
              >
                <Download className="w-4 h-4 text-accent-primary group-hover:translate-y-0.5 transition-transform duration-200" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Divider — Socials + Tech Tags */}
            <motion.div variants={itemVariants} className="pt-2 border-t border-white/8 flex flex-wrap items-center gap-5">
              {/* Social Icons */}
              <div className="flex items-center gap-2">
                {[
                  { href: heroData.socialLinks.github, icon: <Github className="w-4 h-4" />, label: "GitHub", target: "_blank" },
                  { href: heroData.socialLinks.linkedin, icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", target: "_blank" },
                  { href: heroData.socialLinks.email, icon: <Mail className="w-4 h-4" />, label: "Email", target: undefined },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.target}
                    rel={s.target ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-full bg-bg-card/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-text-muted hover:text-accent-primary hover:border-accent-primary/40 hover:shadow-glowSm transition-colors duration-300"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap items-center gap-2">
                {techTags.map((t) => (
                  <motion.span
                    key={t.label}
                    whileHover={{ scale: 1.05, borderColor: "rgba(52,245,138,0.35)" }}
                    transition={{ type: "spring", stiffness: 350, damping: 18 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-card/70 backdrop-blur-sm border border-white/5 text-[11px] font-semibold text-text-body cursor-default"
                  >
                    <span className="text-accent-primary">{t.icon}</span>
                    {t.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right col spacer (image sits absolutely) ── */}
          <div className="hidden lg:block lg:col-span-6" aria-hidden="true" />
        </div>
      </div>

      {/* Bottom section fade */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none z-10" />
    </section>
  );
}