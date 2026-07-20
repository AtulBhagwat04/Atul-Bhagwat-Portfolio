"use client";

import { Smartphone, ArrowUp, Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-bg-secondary border-t border-white/10 pt-16 pb-12 text-text-body relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">

        {/* Top Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">

          {/* Brand Info Left */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-3 w-fit">
              <div className="w-10 h-10 rounded-full bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-primary shadow-glowSm">
                <Smartphone className="w-5 h-5 text-accent-primary" />
              </div>
              <span className="font-heading text-xl font-bold text-white tracking-wide">
                Atul Bhagwat
              </span>
            </a>
            <p className="text-xs text-text-body leading-relaxed max-w-sm">
              Mobile Application Developer & Full Stack Engineer specializing in Flutter cross-platform architecture, iOS, Android, and Node.js REST APIs.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/AtulBhagwat04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-text-body hover:text-accent-primary hover:border-accent-primary/40 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/atulbhagwat04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-text-body hover:text-accent-primary hover:border-accent-primary/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:atulbhagwat12@gmail.com"
                className="w-9 h-9 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-text-body hover:text-accent-primary hover:border-accent-primary/40 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">Navigation</h4>
            <div className="flex flex-col gap-2 text-xs">
              <a href="#home" className="hover:text-accent-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-accent-primary transition-colors">About Me</a>
              <a href="#projects" className="hover:text-accent-primary transition-colors">Featured Projects</a>
              <a href="#skills" className="hover:text-accent-primary transition-colors">Skills & Tech Stack</a>
              <a href="#experience" className="hover:text-accent-primary transition-colors">Experience & Achievements</a>
              <a href="#contact" className="hover:text-accent-primary transition-colors">Contact Me</a>
            </div>
          </div>

          {/* Direct Contact Details */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">Direct Contact</h4>
            <div className="flex flex-col gap-2.5 text-xs text-text-body">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-primary" />
                <span>atulbhagwat12@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-primary" />
                <span>+91 98810 69874</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-primary" />
                <span>India • Available Worldwide</span>
              </div>
              <div className="pt-2">
                <a
                  href="/resume.pdf"
                  download
                  className="px-4 py-2 rounded-full bg-bg-card border border-white/10 text-white text-xs font-semibold hover:border-accent-primary hover:text-accent-primary transition-all inline-flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5 text-accent-primary" />
                  Download Resume PDF
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Atul Bhagwat. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full glass-card border border-white/10 text-white hover:text-accent-primary hover:border-accent-primary/40 transition-all flex items-center gap-2 group"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
