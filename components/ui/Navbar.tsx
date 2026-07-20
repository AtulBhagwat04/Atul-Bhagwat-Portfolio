"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Download, Send, Menu, X, Smartphone, Sparkles, Moon, Sun } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4"
    >
      <div className="max-w-[1320px] mx-auto glass-nav rounded-full px-6 py-3 flex items-center justify-between border border-white/10 shadow-2xl transition-all duration-300">
        {/* Logo Left */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-primary group-hover:scale-105 transition-transform duration-300 shadow-glowSm">
            <Smartphone className="w-5 h-5 text-accent-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold text-white tracking-wide group-hover:text-accent-primary transition-colors">
              Atul Bhagwat
            </span>
            <span className="text-[11px] text-text-muted font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              Mobile App Developer
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-bg-card/60 px-4 py-1.5 rounded-full border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-300 rounded-full ${
                  isActive ? "text-accent-primary font-semibold" : "text-text-body hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 bg-accent-primary/15 rounded-full border border-accent-primary/30"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons Right */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-bg-card/80 border border-white/10 text-text-body hover:text-accent-primary hover:border-accent-primary/40 transition-all"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 text-xs font-semibold rounded-full bg-bg-card border border-white/10 text-white hover:border-accent-primary/50 hover:text-accent-primary transition-all duration-300 flex items-center gap-2 group"
          >
            <Download className="w-3.5 h-3.5 text-accent-primary group-hover:translate-y-0.5 transition-transform" />
            Resume
          </a>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="px-5 py-2 text-xs font-semibold rounded-full bg-gradient-accent text-bg-primary hover:shadow-glow transition-all duration-300 flex items-center gap-1.5 hover:scale-[1.03] active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5 fill-bg-primary" />
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full bg-bg-card text-white border border-white/10 hover:border-accent-primary/50 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-3 max-w-[1320px] mx-auto glass-card rounded-2xl p-6 border border-white/10 shadow-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium rounded-xl hover:bg-accent-primary/10 hover:text-accent-primary transition-colors text-white flex items-center justify-between"
                >
                  {link.name}
                  <span className="text-xs text-text-muted">→</span>
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="/resume.pdf"
                download
                className="w-full py-3 rounded-full bg-bg-card border border-white/10 text-white font-medium text-sm flex items-center justify-center gap-2 hover:border-accent-primary/50"
              >
                <Download className="w-4 h-4 text-accent-primary" />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-gradient-accent text-bg-primary font-bold text-sm flex items-center justify-center gap-2 shadow-glow"
              >
                <Send className="w-4 h-4" />
                Hire Me Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
