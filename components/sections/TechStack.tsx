"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { techItems, techCategories } from "@/data/techStack";

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
          {techCategories.map((cat) => {
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
                    layoutId="techCategoryTab"
                    className="absolute inset-0 bg-accent-primary rounded-full shadow-glow"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Cards Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
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
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
