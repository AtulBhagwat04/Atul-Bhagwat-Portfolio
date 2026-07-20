"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  SiFlutter,
  SiDart,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiFirebase,
  SiJsonwebtokens,
  SiGit,
  SiVercel,
  SiPostman,
  SiAndroidstudio,
  SiFigma,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BiLayer } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";

interface TechItem {
  name: string;
  category: "Mobile" | "Backend" | "State" | "Tools";
  icon: React.ReactNode;
  percentage: number;
  desc: string;
}

const techItems: TechItem[] = [
  {
    name: "Flutter",
    category: "Mobile",
    icon: <SiFlutter className="w-6 h-6 text-[#02569B]" />,
    percentage: 95,
    desc: "Cross-platform mobile UI framework"
  },
  {
    name: "Dart",
    category: "Mobile",
    icon: <SiDart className="w-6 h-6 text-[#00B4AB]" />,
    percentage: 92,
    desc: "Strongly typed object-oriented language"
  },
  {
    name: "Core Java",
    category: "Mobile",
    icon: <FaJava className="w-6 h-6 text-[#E76F51]" />,
    percentage: 85,
    desc: "Object-oriented language for Android training"
  },
  {
    name: "JavaScript",
    category: "Backend",
    icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />,
    percentage: 88,
    desc: "Full-stack Node.js development language"
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: <SiNodedotjs className="w-6 h-6 text-[#339933]" />,
    percentage: 90,
    desc: "Asynchronous JavaScript runtime environment"
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: <SiExpress className="w-6 h-6 text-white" />,
    percentage: 90,
    desc: "Minimalist web framework for RESTful APIs"
  },
  {
    name: "MongoDB",
    category: "Backend",
    icon: <SiMongodb className="w-6 h-6 text-[#47A248]" />,
    percentage: 90,
    desc: "NoSQL document database for scalable apps"
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    icon: <SiPostgresql className="w-6 h-6 text-[#336791]" />,
    percentage: 85,
    desc: "Relational SQL database engine"
  },
  {
    name: "SQLite",
    category: "Backend",
    icon: <SiSqlite className="w-6 h-6 text-[#003B57]" />,
    percentage: 88,
    desc: "Embedded SQL database for offline caching"
  },
  {
    name: "Firebase",
    category: "Backend",
    icon: <SiFirebase className="w-6 h-6 text-[#FFCA28]" />,
    percentage: 85,
    desc: "Authentication, FCM push notifications & analytics"
  },
  {
    name: "BLoC",
    category: "State",
    icon: <BiLayer className="w-6 h-6 text-[#34F58A]" />,
    percentage: 94,
    desc: "Business Logic Component state flow"
  },
  {
    name: "JWT Auth",
    category: "Backend",
    icon: <SiJsonwebtokens className="w-6 h-6 text-[#D63AFF]" />,
    percentage: 90,
    desc: "Secure JSON Web Token session validation"
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    icon: <SiGit className="w-6 h-6 text-[#F05032]" />,
    percentage: 94,
    desc: "Version control & repository collaboration"
  },
  {
    name: "Render & Vercel",
    category: "Tools",
    icon: <SiVercel className="w-6 h-6 text-white" />,
    percentage: 88,
    desc: "Cloud deployment and project hosting"
  },
  {
    name: "Postman",
    category: "Tools",
    icon: <SiPostman className="w-6 h-6 text-[#FF6C37]" />,
    percentage: 90,
    desc: "API endpoint testing and payload documentation"
  },
  {
    name: "Android Studio",
    category: "Tools",
    icon: <SiAndroidstudio className="w-6 h-6 text-[#3DDC84]" />,
    percentage: 90,
    desc: "Native Android emulator & profiler workspace"
  },
  {
    name: "VS Code",
    category: "Tools",
    icon: <VscVscode className="w-6 h-6 text-[#007ACC]" />,
    percentage: 95,
    desc: "Primary IDE for Flutter and full-stack development"
  },
  {
    name: "Figma",
    category: "Tools",
    icon: <SiFigma className="w-6 h-6 text-[#F24E1E]" />,
    percentage: 88,
    desc: "UI/UX vector design, wireframing & prototyping"
  },
];

const categories = ["All", "Mobile", "Backend", "State", "Tools"];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? techItems
      : techItems.filter((t) => t.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-bg-primary">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <span className="px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-xs font-bold uppercase tracking-wider">
            Proficiency & Mastery
          </span>
          <h2 className="font-heading section-title font-extrabold text-white">
            Technical <span className="text-accent-gradient">Skills</span>
          </h2>
          <p className="text-text-body text-base max-w-2xl">
            A verified representation of my Tech Stack, with complete dynamic proficiency levels.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group glass-card p-5 rounded-2xl border border-white/10 flex flex-col items-center text-center hover:border-accent-primary/50 hover:bg-bg-cardHover hover:-translate-y-1 transition-all duration-300 h-full justify-between"
            >
              <div className="w-full flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-accent-primary/20 transition-all shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-accent-primary transition-colors mb-1 font-heading">
                  {item.name}
                </h3>
                <span className="text-[10px] text-text-muted mb-4 leading-snug line-clamp-2">
                  {item.desc}
                </span>
              </div>

              <div className="w-full pt-3 border-t border-white/5 mt-auto">
                <div className="flex justify-between items-center text-[10px] mb-1.5 font-semibold">
                  <span className="text-text-muted">{item.percentage >= 90 ? "Expert" : "Advanced"}</span>
                  <span className="text-accent-primary font-mono">
                    <CountUp end={item.percentage} duration={1.5} enableScrollSpy scrollSpyOnce />%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-accent-primary rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
