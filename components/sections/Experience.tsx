"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, Award, Users } from "lucide-react";

const experiences = [
  {
    year: "Jun - Jul 2023",
    title: "Android Developer Trainee",
    company: "Mountreach Solution Pvt. Ltd.",
    description:
      "Gained key hands-on training building mobile layouts. Developed a native Android application named 'Diploma Helper' during industrial training, focusing on offline cache flows and resource access.",
    highlights: [
      "Designed and coded the 'Diploma Helper' Android training app",
      "Mastered Java Android SDK layout blueprints and material UI standards",
      "Improved general debugging, problem-solving, and deployment configurations",
    ],
  },
];

const leadershipList = [
  {
    year: "Jan - Jun 2026",
    title: "GeeksforGeeks Campus Mantri",
    company: "GeeksforGeeks Community Team",
    description:
      "Selected as the official Campus Mantri to promote technical learning and competitive programming. Organized campus-wide webinars, algorithmic events, and mentored peers on data structures.",
    highlights: [
      "Facilitated campus workshops on algorithms and career paths",
      "Assisted 50+ students in getting started with coding frameworks",
      "Collaborated with the GFG outreach team to host state-level webinars",
    ],
  },
];

const achievementsList = [
  {
    year: "Mar 2023",
    title: "Second Rank - MindSpark State Exhibition",
    awarder: "MindSpark State-Level Committee",
    description:
      "Awarded 2nd place at the MindSpark State-Level Project Exhibition for developing a Faculty Feedback Management System. Commended for innovative database design and technical implementation.",
    highlights: [
      "Achieved 2nd rank among state-level student entries",
      "Designed and coded the system presentation logic and schema mappings",
      "Recognized for practical problem-solving in educational management",
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"experience" | "leadership" | "achievements">("experience");

  return (
    <section id="experience" className="py-24 relative bg-bg-primary">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <span className="px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-xs font-bold uppercase tracking-wider">
            My Credentials
          </span>
          <h2 className="font-heading section-title font-extrabold text-white">
            Experience & <span className="text-accent-gradient">Achievements</span>
          </h2>
          <p className="text-text-body text-base max-w-2xl">
            An organized log of my professional experiences, leadership roles, and technical achievements.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
            { id: "leadership", label: "Leadership", icon: <Users className="w-4 h-4" /> },
            { id: "achievements", label: "Achievements", icon: <Award className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 border transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-accent-primary border-accent-primary text-bg-primary font-bold shadow-glow"
                  : "bg-bg-card border-white/10 text-text-body hover:text-white hover:border-accent-primary/40"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* List Content */}
        <div className="max-w-3xl mx-auto space-y-6">
          {activeTab === "experience" &&
            experiences.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-[22px] border border-white/10 hover:border-accent-primary/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-white group-hover:text-accent-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-muted font-semibold mt-1">
                      {item.company}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-mono font-bold self-start sm:self-center">
                    {item.year}
                  </span>
                </div>
                <p className="text-xs text-text-body leading-relaxed mb-4">{item.description}</p>
                <div className="space-y-1.5 pt-3 border-t border-white/5">
                  {item.highlights.map((hl) => (
                    <div key={hl} className="flex items-center gap-2 text-[11px] text-text-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

          {activeTab === "leadership" &&
            leadershipList.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-[22px] border border-white/10 hover:border-accent-primary/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-white group-hover:text-accent-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-muted font-semibold mt-1">
                      {item.company}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-mono font-bold self-start sm:self-center">
                    {item.year}
                  </span>
                </div>
                <p className="text-xs text-text-body leading-relaxed mb-4">{item.description}</p>
                <div className="space-y-1.5 pt-3 border-t border-white/5">
                  {item.highlights.map((hl) => (
                    <div key={hl} className="flex items-center gap-2 text-[11px] text-text-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

          {activeTab === "achievements" &&
            achievementsList.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-[22px] border border-white/10 hover:border-accent-primary/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-white group-hover:text-accent-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-muted font-semibold mt-1">
                      {item.awarder}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-mono font-bold self-start sm:self-center">
                    {item.year}
                  </span>
                </div>
                <p className="text-xs text-text-body leading-relaxed mb-4">{item.description}</p>
                <div className="space-y-1.5 pt-3 border-t border-white/5">
                  {item.highlights.map((hl) => (
                    <div key={hl} className="flex items-center gap-2 text-[11px] text-text-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
