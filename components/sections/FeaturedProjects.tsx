"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Eye, Smartphone, Sparkles } from "lucide-react";
import ProjectModal, { ProjectData } from "@/components/ui/ProjectModal";

const projectsData: ProjectData[] = [
  {
    id: "yatrikaa",
    title: "Yatrikaa – Travel Guide App",
    category: "Travel & Tourism",
    description: "A modern travel guide application that helps users discover, plan, and explore destinations with ease.",
    longDescription:
      "Yatrikaa is a comprehensive full-stack travel guide app built with Flutter and a Node.js/Express backend. It integrates Google Maps and device location services to help users discover nearby attractions, hotels, and restaurants in real time. MongoDB Atlas securely stores user accounts and custom trip planners, while Cloudinary delivers optimized images for maximum performance.",
    image: "/images/projects/travel_app.png",
    gallery: [
      "/images/projects/travel_app.png",
      "/images/projects/weather_app.png",
      "/images/projects/food_delivery.png",
      "/images/projects/chat_app.png",
      "/images/projects/expense_tracker.png",
      "/images/projects/fittrack.png"
    ],
    tech: ["Flutter", "Dart", "Node.js", "Express.js", "MongoDB Atlas", "BLoC", "JWT Auth", "Cloudinary", "Google Maps API", "REST API", "Client-Server"],
    features: [
      "Discover Destinations: Explore historical, religious, nature, and heritage places with detailed timings and travel tips",
      "Smart Search: Instantly search destinations by name or category with a simple, intuitive user experience",
      "Nearby Attractions: Find nearby tourist spots, hotels, restaurants, cafés, hospitals, and fuel stations",
      "Google Maps Navigation: Get live directions, calculate travel distance, and navigate directly to your destinations",
      "Favorites Folder: Save your favorite locations and access them anytime from your custom profile view",
      "Trip Planner: Create and manage personalized travel itineraries for your upcoming trips",
      "Cloud-Based Backend: Securely stores user accounts, favorites, and trip information using MongoDB Atlas",
      "Modern UI Experience: Designed with Flutter and Material Design for a fast, responsive, and fluid interface",
    ],
    architecture: [
      "Location-Based Discovery: Uses Google Maps and device location services to discover nearby attractions in real time",
      "Full-Stack Cloud Architecture: Communicates with a Node.js REST API while MongoDB Atlas securely stores all data logs",
      "Future Improvements: AI-based travel recommendations, live weather updates, offline maps, and travel expense tracking",
      "Folder Structure: Follows core/bloc, model, and service patterns to separate data models from UI views",
    ],
    stats: [
      { label: "Status", value: "Production-Ready" },
      { label: "APIs Integrated", value: "5+ Cloud APIs" },
    ],
    githubUrl: "https://github.com/AtulBhagwat04/yatrikaa.git",
    demoUrl: "https://github.com/AtulBhagwat04/yatrikaa.git",
  },
  {
    id: "guruconnect",
    title: "GuruConnect – Smart Mentorship Platform",
    category: "Education & Mentorship",
    description: "Smart mentorship booking platform enabling session scheduling, Razorpay payments, and Zoom integration.",
    longDescription:
      "GuruConnect is a smart mentor-booking web/mobile ecosystem. It manages mentor verification workflows, secure Razorpay booking checkouts, and utilizes the Zoom API to dynamically provision audio/video slots for student-mentor consultations.",
    image: "/images/projects/expense_tracker.png",
    gallery: [
      "/images/projects/expense_tracker.png",
      "/images/projects/chat_app.png",
      "/images/projects/fittrack.png",
      "/images/projects/travel_app.png",
      "/images/projects/weather_app.png",
      "/images/projects/food_delivery.png"
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Razorpay API", "Zoom API", "JWT Auth", "REST API Design"],
    features: [
      "Dynamic session booking with automated Razorpay checkout verification",
      "Automatic video conference creation via Google/Zoom API schedules",
      "Nearby and global mentor discovery algorithms with database search",
      "Comprehensive mentor verification panel and session log history",
    ],
    architecture: [
      "Express.js routing architecture optimized for high-throughput traffic",
      "Secure session validation utilizing JSON Web Tokens (JWT) cookies",
      "Razorpay webhook receivers for verifying successful payments",
      "Zoom OAuth integrations for server-side virtual room allocation",
    ],
    stats: [
      { label: "Status", value: "Completed" },
      { label: "Service Integrations", value: "Razorpay & Zoom" },
    ],
    githubUrl: "https://github.com/AtulBhagwat04/GuruConnect",
    demoUrl: "https://github.com/AtulBhagwat04/GuruConnect",
  },
];

const categories = ["All", "Travel & Tourism", "Education & Mentorship"];

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
            Featured <span className="text-accent-gradient">Projects  </span>
          </h2>
          <p className="text-text-body text-base max-w-2xl">
            Explore production-grade iOS and Android mobile apps engineered with Flutter, clean architecture, and modern backend integrations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${activeCategory === cat
                ? "bg-accent-primary text-bg-primary font-bold shadow-glow"
                : "bg-bg-card border border-white/10 text-text-body hover:text-white hover:border-accent-primary/40"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-card rounded-[24px] overflow-hidden border border-white/10 flex flex-col justify-between hover:border-accent-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
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
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 rounded-full bg-accent-primary text-bg-primary text-xs font-bold flex items-center gap-1.5 shadow-glow hover:scale-105 transition-transform"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Case Study
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
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
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-accent-primary hover:text-accent-hover flex items-center gap-1 group/btn"
                    >
                      View Architecture
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
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
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
