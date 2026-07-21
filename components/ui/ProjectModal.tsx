"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
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
  const [activeTab, setActiveTab] = useState<"details" | "features" | "architecture" | "tech">("details");

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div data-lenis-prevent className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          data-lenis-prevent
          className="relative w-full max-w-5xl glass-card rounded-[28px] border border-white/15 bg-bg-card/95 shadow-2xl overflow-y-auto z-10 my-8 max-h-[90vh] p-6 sm:p-8"
        >
          {/* Absolute Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-bg-primary/95 border border-white/10 flex items-center justify-center text-text-body hover:text-white hover:border-accent-primary transition-all z-50 shadow-lg hover:scale-105"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">

            {/* Left Column: Image Showcase & Horizontal Screenshots */}
            <div className="lg:col-span-6 space-y-6">
              {/* Main Showcase Image */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 bg-bg-primary shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-fill"
                />
              </div>

              {/* Screenshots Carousel Block */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
                      Screenshots
                    </h3>
                    <div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-text-muted font-bold select-none cursor-help" title="Scroll horizontally to view app screens">
                      i
                    </div>
                  </div>

                  {/* Horizontal Scroll Container */}
                  <div className="p-4 rounded-2xl bg-bg-primary/40 border border-white/5 shadow-inner">
                    <div className="flex gap-4 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                      {project.gallery.map((img, index) => (
                        <div
                          key={index}
                          className="relative w-40 aspect-[9/16] rounded-xl overflow-hidden border border-white/10 bg-bg-primary shrink-0 shadow-md group hover:border-accent-primary/40 transition-colors"
                        >
                          <Image
                            src={img}
                            alt={`${project.title} screenshot ${index + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Details Block */}
            <div className="lg:col-span-6 space-y-6 lg:pb-8">

              {/* Category & Title */}
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-accent-primary uppercase tracking-wider block">
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white leading-tight">
                  {project.title}
                </h2>
              </div>

              {/* Status / Rating Row */}
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <span className="text-accent-primary font-mono font-bold bg-accent-primary/10 border border-accent-primary/20 px-2.5 py-1 rounded-lg">
                  {project.stats[0]?.value || "Production-Ready"}
                </span>
                <div className="flex items-center gap-1.5 text-text-muted">
                  <div className="flex text-amber-400 text-sm">
                    {"★".repeat(5)}
                  </div>
                  <span>(5.0 stars) • Verified Repository</span>
                </div>
              </div>

              {/* Developer / Creator Card */}
              <div className="flex items-center gap-3 border-t border-b border-white/5 py-4">
                <div className="w-9 h-9 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary font-bold text-xs">
                  AB
                </div>
                <div>
                  <span className="text-xs text-white font-bold block leading-none mb-1">Atul Bhagwat</span>
                  <span className="text-[10px] text-text-muted block leading-none">Lead Mobile Developer</span>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                {project.description}
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-5 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-bg-primary font-bold text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2 shadow-glowSm hover:shadow-glow"
                >
                  <Github className="w-4 h-4 fill-bg-primary" />
                  Source Code
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-5 rounded-xl bg-transparent border border-white/15 hover:border-accent-primary/30 text-white font-semibold text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Test Live Demo
                </a>
              </div>

              {/* Tabs Switcher Section */}
              <div className="space-y-4 pt-4 border-t border-white/5">

                {/* Horizontal Tab Links */}
                <div className="flex gap-5 border-b border-white/10 pb-2 overflow-x-auto whitespace-nowrap scrollbar-none">
                  {[
                    { id: "details", label: "Details" },
                    { id: "features", label: "Features" },
                    { id: "architecture", label: "Architecture" },
                    { id: "tech", label: "Technologies" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`relative pb-2 text-xs sm:text-sm font-semibold transition-colors ${activeTab === tab.id ? "text-white" : "text-text-muted hover:text-white"
                        }`}
                    >
                      {tab.label}
                      {tab.id === activeTab && (
                        <motion.div
                          layoutId="modalTabUnderline"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-primary"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab content view */}
                <div className="min-h-[160px]">
                  {activeTab === "details" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-5 rounded-2xl bg-bg-primary/40 border border-white/5 space-y-4 text-left"
                    >
                      <p className="text-xs leading-relaxed text-text-body">{project.longDescription}</p>
                      <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/5">
                        {project.stats.map((st) => (
                          <div key={st.label}>
                            <span className="text-[10px] text-text-muted uppercase tracking-wider block font-semibold mb-0.5">{st.label}</span>
                            <span className="text-xs font-bold text-white font-mono">{st.value}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "features" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-5 rounded-2xl bg-bg-primary/40 border border-white/5 space-y-3 text-left"
                    >
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                        App Core Features
                      </h4>
                      <ul className="space-y-2.5">
                        {project.features.map((feat) => {
                          const colonIdx = feat.indexOf(":");
                          if (colonIdx === -1) {
                            return (
                              <li key={feat} className="text-xs leading-relaxed text-text-body list-disc ml-4">
                                {feat}
                              </li>
                            );
                          }
                          const title = feat.substring(0, colonIdx);
                          const desc = feat.substring(colonIdx + 1);
                          return (
                            <li key={feat} className="text-xs leading-relaxed text-text-body">
                              <strong className="text-white block sm:inline">{title}:</strong>
                              <span className="text-text-muted block sm:inline pl-0 sm:pl-1">{desc}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  )}

                  {activeTab === "architecture" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-5 rounded-2xl bg-bg-primary/40 border border-white/5 space-y-3 text-left"
                    >
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                        Design & Architecture Layers
                      </h4>
                      <ul className="space-y-2.5">
                        {project.architecture.map((arch) => {
                          const colonIdx = arch.indexOf(":");
                          if (colonIdx === -1) {
                            return (
                              <li key={arch} className="text-xs leading-relaxed text-text-body list-disc ml-4">
                                {arch}
                              </li>
                            );
                          }
                          const title = arch.substring(0, colonIdx);
                          const desc = arch.substring(colonIdx + 1);
                          return (
                            <li key={arch} className="text-xs leading-relaxed text-text-body">
                              <strong className="text-white block sm:inline">{title}:</strong>
                              <span className="text-text-muted block sm:inline pl-0 sm:pl-1">{desc}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  )}

                  {activeTab === "tech" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-5 rounded-2xl bg-bg-primary/40 border border-white/5 space-y-3 text-left"
                    >
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                        Technologies & Libraries
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1.5 rounded-lg bg-bg-card border border-white/15 text-white text-xs font-mono font-medium hover:border-accent-primary/40 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

              </div>

            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
