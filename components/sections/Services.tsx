"use client";

import { motion } from "framer-motion";
import { Smartphone, Server, Palette, Rocket, Check, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    subtitle: "Flutter, Android & iOS",
    icon: <Smartphone className="w-7 h-7 text-accent-primary" />,
    description:
      "Cross-platform mobile applications engineered for native performance, responsive UI, 60fps animations, and offline-first state management.",
    tags: ["Flutter", "Dart", "iOS", "Android", "BLoC/Provider"],
    features: [
      "Cross-Platform iOS & Android Apps",
      "Pixel-Perfect UI & Custom Widgets",
      "Clean BLoC & Provider Architecture",
      "Offline Database & Cache Management",
    ],
  },
  {
    id: "backend-dev",
    title: "Backend Integration & APIs",
    subtitle: "Node.js, Express & REST API",
    icon: <Server className="w-7 h-7 text-accent-primary" />,
    description:
      "Robust, scalable server architecture and RESTful APIs connecting your mobile client to cloud databases, push notifications, and payment gateways.",
    tags: ["Node.js", "Express", "REST API", "JWT", "WebSockets"],
    features: [
      "RESTful API Endpoint Design",
      "Secure Authentication & Authorization",
      "Real-time Sockets & Push Notifications",
      "Third-party Service Integrations",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI / UX Mobile Design",
    subtitle: "Responsive, Animations & Modern",
    icon: <Palette className="w-7 h-7 text-accent-primary" />,
    description:
      "Modern luxury app interface design that thrills users and simplifies complex navigation using smooth micro-interactions and accessibility principles.",
    tags: ["Figma", "Micro-Interactions", "Dark Mode", "Prototyping"],
    features: [
      "Interactive Figma Prototypes",
      "Dark Luxury & Modern Design Systems",
      "Framer Motion & Flutter Animations",
      "Recruiter & Client Focused Usability",
    ],
  },
  {
    id: "app-deployment",
    title: "App Store Deployment",
    subtitle: "Play Store, App Store & DevOps",
    icon: <Rocket className="w-7 h-7 text-accent-primary" />,
    description:
      "Full lifecycle deployment support from signing certificates and Play Console configuration to App Store guidelines compliance and CI/CD pipelines.",
    tags: ["Google Play", "Apple App Store", "CI/CD", "Maintenance"],
    features: [
      "Play Store & App Store Publishing",
      "App Signing & Certificate Management",
      "Crashlytics & Analytics Integration",
      "Ongoing Maintenance & Updates",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-bg-primary">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-xs font-bold uppercase tracking-wider">
            What I Offer
          </span>
          <h2 className="font-heading section-title font-extrabold text-white">
            Comprehensive <span className="text-accent-gradient">Mobile Engineering</span> Services
          </h2>
          <p className="text-text-body text-base max-w-2xl">
            From initial idea to App Store publishing and ongoing backend scale, I offer end-to-end solutions designed for high performance.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-card rounded-[24px] p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between hover:border-accent-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
            >
              {/* Corner Glow Overlay */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-primary/10 rounded-full blur-3xl group-hover:bg-accent-primary/25 transition-all duration-500" />

              <div>
                {/* Top Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-primary/20 transition-all duration-300">
                    {service.icon}
                  </div>
                  <a
                    href="#contact"
                    className="w-10 h-10 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-text-muted group-hover:text-accent-primary group-hover:border-accent-primary/40 transition-all duration-300"
                    aria-label="Request Service"
                  >
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Service Titles */}
                <div className="mb-4">
                  <span className="text-xs font-semibold text-accent-primary uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white mt-1 group-hover:text-accent-primary transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-text-body leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-2.5 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs text-text-body">
                      <div className="w-4 h-4 rounded-full bg-accent-primary/15 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-accent-primary" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags Footer */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-bg-card text-[11px] font-mono font-medium text-text-muted border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
