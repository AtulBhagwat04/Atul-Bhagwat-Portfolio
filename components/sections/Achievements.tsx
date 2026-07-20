"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Smartphone, Download, Award, Smile } from "lucide-react";

const metrics = [
  {
    icon: <Smartphone className="w-8 h-8 text-accent-primary" />,
    number: 20,
    suffix: "+",
    label: "Completed Projects",
    desc: "Cross-Platform iOS & Android Apps",
  },
  {
    icon: <Award className="w-8 h-8 text-accent-primary" />,
    number: 2,
    suffix: "+ Years",
    label: "Professional Exp",
    desc: "Flutter & Full Stack Specialization",
  },
  {
    icon: <Download className="w-8 h-8 text-accent-primary" />,
    number: 100,
    suffix: "K+",
    label: "Global Downloads",
    desc: "Across Play Store & App Store",
  },
  {
    icon: <Smile className="w-8 h-8 text-accent-primary" />,
    number: 98,
    suffix: "%",
    label: "Client Satisfaction",
    desc: "Verified 5-Star Reviews",
  },
];

export default function Achievements() {
  return (
    <section className="py-20 relative bg-bg-primary">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="glass-card p-10 rounded-[32px] border border-accent-primary/30 relative overflow-hidden shadow-glow">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {metrics.map((m, idx) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent-primary/10 border border-accent-primary/40 flex items-center justify-center mb-4 shadow-glowSm">
                  {m.icon}
                </div>
                <div className="text-4xl md:text-5xl font-extrabold font-mono text-white tracking-tight mb-1">
                  <CountUp end={m.number} duration={2.5} enableScrollSpy scrollSpyOnce />
                  <span className="text-accent-primary">{m.suffix}</span>
                </div>
                <span className="text-sm font-bold text-white font-heading">{m.label}</span>
                <span className="text-xs text-text-muted mt-1">{m.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
