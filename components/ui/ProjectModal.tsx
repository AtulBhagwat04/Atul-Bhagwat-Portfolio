"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Layers, CheckCircle, Cpu, ShieldAlert, Sparkles } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  features: string[];
  architecture: string[];
  stats: { label: string; value: string }[];
  githubUrl: string;
  demoUrl: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl glass-card rounded-[28px] border border-white/15 bg-bg-card/95 shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-bg-card/90 backdrop-blur-md z-20">
            <div>
              <span className="text-xs font-semibold text-accent-primary uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold font-heading text-white">{project.title}</h3>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-bg-primary border border-white/10 flex items-center justify-center text-text-body hover:text-white hover:border-accent-primary transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scrollable Area */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            
            {/* Phone Screen Banner Showcase */}
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-bg-primary">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-60" />
            </div>

            {/* Overview & Quick Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-3">
                <h4 className="text-lg font-bold text-white font-heading">Project Overview</h4>
                <p className="text-sm text-text-body leading-relaxed">{project.longDescription}</p>
              </div>

              <div className="p-4 rounded-2xl bg-bg-primary border border-white/10 flex flex-col gap-3 justify-center">
                <span className="text-xs text-text-muted font-mono uppercase">Impact & Scale</span>
                {project.stats.map((st) => (
                  <div key={st.label} className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="text-xs text-text-body">{st.label}</span>
                    <span className="text-sm font-bold text-accent-primary font-mono">{st.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-primary" />
                Key Application Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 p-3 rounded-xl bg-bg-primary/60 border border-white/5">
                    <CheckCircle className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    <span className="text-xs text-text-body leading-normal">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Architecture */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent-primary" />
                Clean Architecture & Tech Highlights
              </h4>
              <div className="p-5 rounded-2xl bg-bg-primary border border-accent-primary/20 space-y-2">
                {project.architecture.map((arch) => (
                  <div key={arch} className="flex items-center gap-2 text-xs text-text-body font-mono">
                    <span className="w-2 h-2 rounded-full bg-accent-primary" />
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3.5 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-xs font-mono font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Buttons */}
          <div className="p-6 border-t border-white/10 bg-bg-card/90 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-bg-primary border border-white/10 text-white text-xs font-semibold hover:border-accent-primary hover:text-accent-primary transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub Repository
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-gradient-accent text-bg-primary text-xs font-bold hover:shadow-glow transition-all flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo / App Store
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold text-text-muted hover:text-white transition-colors"
            >
              Close Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
