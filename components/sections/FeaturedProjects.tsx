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
    image: "/images/projects/Yatrikaa Images/travel_app.png",
    gallery: [
      "/images/projects/Yatrikaa Images/splash.jpg",
      "/images/projects/Yatrikaa Images/onboarding1.jpg",
      "/images/projects/Yatrikaa Images/onboarding2.jpg",
      "/images/projects/Yatrikaa Images/onboarding3.jpg",
      "/images/projects/Yatrikaa Images/login.jpg",
      "/images/projects/Yatrikaa Images/signUp.jpg",
      "/images/projects/Yatrikaa Images/home1.png",
      "/images/projects/Yatrikaa Images/home1.png",
      "/images/projects/Yatrikaa Images/explore.jpg",
      "/images/projects/Yatrikaa Images/community.jpg",
      "/images/projects/Yatrikaa Images/packages screen.jpg",
      "/images/projects/Yatrikaa Images/packageDetails.jpg",
      "/images/projects/Yatrikaa Images/feature destinations.jpg",
      "/images/projects/Yatrikaa Images/my profile.jpg"
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
    id: "qlix",
    title: "Qlix – Live Interactive Learning Platform",
    category: "Education & Productivity",
    description:
      "Qlix is a modern live interactive learning platform that enables educators, trainers, and organizations to create, manage, and conduct engaging real-time sessions with quizzes, polls, Q&A, analytics, and participant management—all from a single platform.",
    longDescription:
      "Qlix is a scalable full-stack audience engagement platform designed for colleges, coaching institutes, corporate training, workshops, webinars, and conferences. It enables instructors to host live sessions while participants join instantly using a unique session code. The platform supports real-time quizzes, polls, Q&A, attendance tracking, live analytics, participant management, and session history. Built with Flutter and a Node.js backend, Qlix delivers a smooth cross-platform experience with secure authentication and cloud-powered infrastructure.",
    image: "/images/projects/Qlix Images/thumbnail.png",
    gallery: [
      "/images/projects/Qlix Images/thumbnail.png"
    ],
    tech: [
      "Flutter",
      "Dart",
      "BLoC",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Mongoose ODM",
      "Socket.IO",
      "Firebase Auth",
      "Firebase FCM",
      "Cloudinary",
      "Material 3"
    ],
    features: [
      "Session Management: Create live sessions, join using session codes, schedule, draft & publish, duplicate, and track session history",
      "Live Interaction: Conduct live polls, real-time quizzes, Q&A sessions, instant response tracking, live leaderboards, and announcements",
      "Participant Management: Session code joining, attendance tracking, active user monitoring, participant removal, and access control",
      "Analytics Dashboard: Monitor total sessions, participant counts, quiz performance, response analytics, and engagement reports",
      "Notifications & Alerts: Push notifications, session reminders, live interaction alerts, and instant quiz notifications",
      "Security & Authentication: JWT & Firebase authentication, role-based access control, secure REST APIs, and protected routes",
      "Modern User Experience: Responsive UI with smooth animations, Material 3 design, light & dark themes, and offline state handling"
    ],
    architecture: [
      "Frontend Architecture: Built with Flutter & Dart using BLoC state management, Go Router navigation, and Material 3 design",
      "Backend API Gateway: High-performance Node.js & Express.js REST API with Socket.IO for real-time bi-directional communication",
      "Database & Cloud Infrastructure: MongoDB Atlas with Mongoose ODM, Firebase Auth, Firebase Cloud Messaging, and Cloudinary media delivery",
      "Data Flow Pipeline: Flutter App -> REST API + Socket.IO -> Node.js + Express -> MongoDB Atlas -> Cloudinary + Firebase Services"
    ],
    stats: [
      { label: "Status", value: "Production-Ready" },
      { label: "Cloud Services", value: "6+ Cloud Services" }
    ],
    githubUrl: "https://github.com/AtulBhagwat04/QLix-App",
    demoUrl: "https://github.com/AtulBhagwat04/QLix-App"
  }
];

const categories = ["All", "Education & Productivity", "Travel & Tourism"];

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
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
