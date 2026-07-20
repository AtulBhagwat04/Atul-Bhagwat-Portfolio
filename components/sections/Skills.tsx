"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Smartphone, Code2, Server, Globe, Palette, GitBranch, Cpu } from "lucide-react";

interface Skill {
  name: string;
  percentage: number;
  icon: React.ReactNode;
  category: string;
}

const skills: Skill[] = [
  { name: "Flutter", percentage: 95, icon: <Smartphone className="w-5 h-5 text-accent-primary" />, category: "Mobile Development" },
  { name: "Dart", percentage: 92, icon: <Code2 className="w-5 h-5 text-accent-primary" />, category: "Core Language" },
  { name: "Node.js", percentage: 90, icon: <Server className="w-5 h-5 text-accent-primary" />, category: "Backend Runtime" },
  { name: "Express.js", percentage: 90, icon: <Server className="w-5 h-5 text-accent-primary" />, category: "REST Framework" },
  { name: "REST API Design", percentage: 92, icon: <Globe className="w-5 h-5 text-accent-primary" />, category: "Web Services" },
  { name: "UI / UX Design", percentage: 90, icon: <Palette className="w-5 h-5 text-accent-primary" />, category: "Visual & Motion" },
  { name: "Git & GitHub", percentage: 90, icon: <GitBranch className="w-5 h-5 text-accent-primary" />, category: "Version Control" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-bg-secondary/60">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-xs font-bold uppercase tracking-wider">
            Proficiency & Mastery
          </span>
          <h2 className="font-heading section-title font-extrabold text-white">
            Technical <span className="text-accent-gradient">Skill Metrics</span>
          </h2>
          <p className="text-text-body text-base max-w-2xl">
            Measured proficiency levels across core software engineering domains, backed by hands-on production code deployment.
          </p>
        </div>

        {/* Circular / Grid Progress Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center hover:border-accent-primary/40 transition-all duration-300 hover:scale-[1.02] group"
            >
              {/* Circular Gauge Representation */}
              <div className="relative w-28 h-28 mb-4 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-white/10"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <motion.path
                    className="text-accent-primary"
                    strokeWidth="3.5"
                    strokeDasharray={`${skill.percentage}, 100`}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    initial={{ strokeDasharray: "0, 100" }}
                    whileInView={{ strokeDasharray: `${skill.percentage}, 100` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>

                {/* Inner Icon & Percentage */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold font-mono text-white group-hover:text-accent-primary transition-colors">
                    <CountUp end={skill.percentage} duration={2} enableScrollSpy scrollSpyOnce />%
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1">
                {skill.icon}
                <h3 className="text-base font-bold text-white font-heading">{skill.name}</h3>
              </div>
              <span className="text-xs text-text-muted">{skill.category}</span>
            </motion.div>
          ))}
        </div>

        {/* Detailed Horizontal Progress Bar Breakdown */}
        <div className="glass-card p-8 rounded-[24px] border border-white/10">
          <h3 className="text-lg font-bold text-white font-heading mb-6 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-accent-primary" />
            Engineering Standards Breakdown
          </h3>

          <div className="space-y-5">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-white font-heading">{skill.name}</span>
                  <span className="text-accent-primary font-mono">{skill.percentage}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-bg-primary border border-white/5 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
