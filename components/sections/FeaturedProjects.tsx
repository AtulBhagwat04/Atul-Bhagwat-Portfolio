"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Eye } from "lucide-react";
import ProjectModal, { ProjectData } from "@/components/ui/ProjectModal";
import { projectsData, projectCategories } from "@/data/projects";

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-bg-secondary/40">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <span className="px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-xs font-bold uppercase tracking-wider">
            Portfolio Showcase
          </span>
          <h2 className="font-heading section-title font-extrabold text-white">
            Featured <span className="text-accent-gradient">Projects</span>
          </h2>
          <p className="text-text-body text-base max-w-2xl">
            Explore production-grade iOS and Android mobile apps engineered with Flutter, clean architecture, and modern backend integrations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 rounded-full text-xs font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-bg-primary font-bold"
                    : "bg-bg-card border border-white/10 text-text-body hover:text-white hover:border-accent-primary/40"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="projectCategoryTab"
                    className="absolute inset-0 bg-accent-primary rounded-full shadow-glow"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group glass-card rounded-[24px] overflow-hidden border border-white/10 flex flex-col justify-between hover:border-accent-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow cursor-pointer"
              >
                {/* Phone Mockup Screen Header */}
                <div className="relative w-full h-[280px] bg-bg-primary overflow-hidden flex items-center justify-center p-4">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                  </div>

                  {/* Hover Overlay Action */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="px-4 py-2 rounded-full bg-accent-primary text-bg-primary text-xs font-bold flex items-center gap-1.5 shadow-glow hover:scale-105 transition-transform"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View Details
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-full bg-bg-card border border-white/20 text-white hover:text-accent-primary hover:border-accent-primary transition-all"
                      aria-label="GitHub Repo"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-bg-card/90 backdrop-blur-md border border-white/10 text-[10px] font-mono text-accent-primary">
                    {project.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-accent-primary transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-text-body leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Chips */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-bg-primary text-[10px] font-mono font-medium text-text-muted border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 rounded-md bg-bg-primary text-[10px] font-mono text-accent-primary">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="text-xs font-bold text-accent-primary hover:text-accent-hover flex items-center gap-1 group/btn"
                      >
                        View Details
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-text-muted hover:text-white transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-text-muted hover:text-accent-primary transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
