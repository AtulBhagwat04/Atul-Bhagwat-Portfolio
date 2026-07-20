import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import TechStack from "@/components/sections/TechStack";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-body overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <TechStack />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
