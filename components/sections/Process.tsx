"use client";

import { motion } from "framer-motion";
import {
  Search,
  FileText,
  Layout,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  Wrench,
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  icon: React.ReactNode;
  desc: string;
}

const steps: Step[] = [
  { number: "01", title: "Research", icon: <Search className="w-5 h-5 text-accent-primary" />, desc: "Analyzing target audience, competitor apps, and defining key user stories & technical scope." },
  { number: "02", title: "Planning", icon: <FileText className="w-5 h-5 text-accent-primary" />, desc: "Architecting app state management (BLoC/Provider), database schemas, and API contracts." },
  { number: "03", title: "Wireframing", icon: <Layout className="w-5 h-5 text-accent-primary" />, desc: "Creating low-fidelity screen flows to map smooth navigation journeys and UX touchpoints." },
  { number: "04", title: "UI UX Design", icon: <Palette className="w-5 h-5 text-accent-primary" />, desc: "Crafting high-fidelity dark luxury interfaces in Figma with fluid micro-animations." },
  { number: "05", title: "Development", icon: <Code2 className="w-5 h-5 text-accent-primary" />, desc: "Writing clean, modular Flutter code & Node.js APIs adhering to SOLID principles." },
  { number: "06", title: "Testing", icon: <CheckCircle2 className="w-5 h-5 text-accent-primary" />, desc: "Executing unit tests, widget tests, end-to-end integration, and multi-device profiling." },
  { number: "07", title: "Deployment", icon: <Rocket className="w-5 h-5 text-accent-primary" />, desc: "Configuring Play Console & App Store Connect, signing builds, and submitting for publishing." },
  { number: "08", title: "Maintenance", icon: <Wrench className="w-5 h-5 text-accent-primary" />, desc: "Monitoring crash analytics, pushing OTA updates, and continuously optimizing performance." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative bg-bg-secondary/40">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-xs font-bold uppercase tracking-wider">
            Methodology
          </span>
          <h2 className="font-heading section-title font-extrabold text-white">
            End-To-End <span className="text-accent-gradient">Development Process</span>
          </h2>
          <p className="text-text-body text-base max-w-2xl">
            A battle-tested 8-step workflow ensuring every mobile project is delivered on schedule, bug-free, and optimized for conversions.
          </p>
        </div>

        {/* 8-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-accent-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Background Step Number Overlay */}
              <span className="absolute -top-3 -right-2 text-6xl font-extrabold font-mono text-white/5 group-hover:text-accent-primary/10 transition-colors pointer-events-none">
                {step.number}
              </span>

              <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent-primary/20 transition-transform">
                {step.icon}
              </div>

              <span className="text-[11px] font-mono text-accent-primary font-bold">
                STEP {step.number}
              </span>
              <h3 className="text-lg font-bold font-heading text-white mt-1 mb-2 group-hover:text-accent-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-xs text-text-body leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
