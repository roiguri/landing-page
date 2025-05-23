import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SketchyDivider from "../../components/SketchyDivider";
import ProjectCarousel from "../../components/ProjectCarousel";
import BackgroundSketches from "../../components/BackgroundSketches";

interface Project {
  id: number;
  title: string;
  summary: string;
  thumbnail: string;
  tags: string[];
  color: string;
}

export default function Home() {
  const mainRef = useRef(null);
  const blueprintRef = useRef(null);

  // TODO: Replace with actual project data.
  const projects: Project[] = [
    {
      id: 1,
      title: "Our Kitchen Chronicles",
      summary: "A family cookbook web application for sharing, discovering, and managing homemade recipes with Firebase backend",
      thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=500&auto=format&fit=crop", // cooking/kitchen themed image
      tags: ["Vanilla JS", "Firebase", "Web Components", "Vite"],
      color: "#6a994e"
    },
    {
      id: 2,
      title: "Hand-Drawn UI Kit",
      summary: "A unique UI component library with a hand-drawn, sketchy aesthetic",
      thumbnail: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=500&auto=format&fit=crop",
      tags: ["JavaScript", "CSS", "SVG", "Figma"],
      color: "#EC4899"
    },
    {
      id: 3,
      title: "Animated Map Exploration",
      summary: "An interactive map with custom animations and geographic data visualization",
      thumbnail: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=500&auto=format&fit=crop",
      tags: ["Leaflet", "GeoJSON", "GSAP", "Canvas"],
      color: "#10B981"
    },
    {
      id: 4,
      title: "Creative Coding Experiments",
      summary: "A collection of generative art and creative coding experiments",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500&auto=format&fit=crop",
      tags: ["p5.js", "WebGL", "JavaScript", "Creative Coding"],
      color: "#F59E0B"
    }
  ];

  return (
    <main 
      ref={mainRef} 
      className="relative min-h-screen bg-white overflow-x-hidden font-sans"
    >
      {/* Background sketches */}
      <BackgroundSketches />
      
      {/* Header section */}
      <header className="relative pt-16 pb-12 md:pt-24 md:pb-12 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="md:flex items-center gap-12">
            
            {/* Mobile: Title and description first */}
            <div className="md:w-2/3 mb-8 md:mb-0 md:order-2">
              <motion.div 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="header-content"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Crafting digital <span className="relative inline-block">
                    <span className="relative z-10">experiences</span>
                    <svg className="absolute -bottom-1 left-0 w-full h-3 text-yellow-300 z-0" viewBox="0 0 100 15" preserveAspectRatio="none">
                      <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                  </span> with a personal touch
                </h1>
              </motion.div>
              
              <motion.div 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="header-content"
              >
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8 md:mb-8">
                  I create thoughtful digital solutions that combine technical excellence with artistic sensibility.
                </p>
              </motion.div>
            </div>

            {/* Mobile: Image second, Desktop: Image first */}
            <div className="md:w-1/3 mb-8 md:mb-0 md:order-1">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative max-w-xs mx-auto md:mx-0"
              >
                <div className="relative z-10 w-56 h-56 mx-auto overflow-hidden rounded-full">
                  <img 
                    src="/profile.png" 
                    alt="Profile" 
                    className="w-fit h-auto object-cover object-top"
                    style={{ filter: "contrast(1.1) brightness(0.95)" }}
                  />
                </div>
                
                {/* Sketchy round frame with bright colors */}
                <svg 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-60 h-60 z-0" 
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Multiple sketchy circles for hand-drawn effect */}
                  <motion.circle 
                    initial={{ pathLength: 0, rotate: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      rotate: 360,
                      scale: [1, 1.02, 1, 0.98, 1]
                    }}
                    transition={{ 
                      pathLength: { duration: 2, delay: 0.5 },
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    cx="50" cy="50" r="45" 
                    fill="none" 
                    stroke="#FF6B6B" 
                    strokeWidth="4" 
                    strokeDasharray="2,1"
                    vectorEffect="non-scaling-stroke"
                    style={{
                      filter: "drop-shadow(0 0 3px rgba(255, 107, 107, 0.3))"
                    }}
                  />
                  <motion.circle 
                    initial={{ pathLength: 0, rotate: 180 }}
                    animate={{ 
                      pathLength: 1, 
                      rotate: -180,
                      scale: [1, 0.98, 1, 1.03, 1]
                    }}
                    transition={{ 
                      pathLength: { duration: 2.2, delay: 0.7 },
                      rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                      scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                    }}
                    cx="50" cy="50" r="46" 
                    fill="none" 
                    stroke="#4ECDC4" 
                    strokeWidth="3" 
                    strokeDasharray="3,2"
                    vectorEffect="non-scaling-stroke"
                    style={{
                      filter: "drop-shadow(0 0 3px rgba(78, 205, 196, 0.3))"
                    }}
                  />
                  <motion.circle 
                    initial={{ pathLength: 0, rotate: 90 }}
                    animate={{ 
                      pathLength: 1, 
                      rotate: -270,
                      scale: [1, 1.01, 1, 0.99, 1]
                    }}
                    transition={{ 
                      pathLength: { duration: 1.8, delay: 0.9 },
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                      scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    cx="50" cy="50" r="48" 
                    fill="none" 
                    stroke="#FFE66D" 
                    strokeWidth="3" 
                    strokeDasharray="1,1"
                    vectorEffect="non-scaling-stroke"
                    style={{
                      filter: "drop-shadow(0 0 3px rgba(255, 230, 109, 0.3))"
                    }}
                  />
                  
                  {/* Decorative sketchy elements with continuous motion */}
                  <motion.path 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 1.1, 1, 0.9, 1], 
                      opacity: 1,
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      scale: { duration: 0.6, delay: 1.2 },
                      opacity: { duration: 0.6, delay: 1.2 },
                      rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    d="M75,25 L80,20 L85,25 L80,30 Z" 
                    fill="#FF6B6B" 
                    opacity="0.8"
                    vectorEffect="non-scaling-stroke"
                  />
                  <motion.path 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0.9, 1, 1.1, 1], 
                      opacity: 1,
                      rotate: [0, -15, 15, 0]
                    }}
                    transition={{ 
                      scale: { duration: 0.6, delay: 1.4 },
                      opacity: { duration: 0.6, delay: 1.4 },
                      rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    d="M20,75 L25,70 L30,75 L25,80 Z" 
                    fill="#4ECDC4" 
                    opacity="0.8"
                    vectorEffect="non-scaling-stroke"
                  />
                  <motion.circle 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 1.2, 1, 0.8, 1], 
                      opacity: [0, 1, 0.6, 1, 0.8, 1]
                    }}
                    transition={{ 
                      scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
                      opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.6 }
                    }}
                    cx="80" cy="75" r="3" 
                    fill="#FFE66D" 
                    opacity="0.8"
                    vectorEffect="non-scaling-stroke"
                  />
                  <motion.circle 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0.7, 1, 1.3, 1], 
                      opacity: [0, 1, 0.5, 1, 0.7, 1]
                    }}
                    transition={{ 
                      scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 },
                      opacity: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }
                    }}
                    cx="25" cy="25" r="2" 
                    fill="#A8E6CF" 
                    opacity="0.8"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </motion.div>
            </div>
            
            {/* Mobile: Button appears third */}
            <motion.div 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center mt-8 md:hidden"
            >
              <button 
                onClick={() => {
                  const projectsSection = document.getElementById('projects-section');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }
                }}
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                aria-label="Scroll to projects"
              >
                <span className="text-lg font-medium">View my work</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </button>
            </motion.div>
          </div>
        </div>
      </header>
      
      {/* Sketchy divider */}
      <SketchyDivider />
      
      {/* Projects section */}
      <section 
        id="projects-section" 
        className="py-16 md:py-24 px-6 relative"
        ref={blueprintRef}
      >
        <div 
          className="blueprint-background absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none' stroke='%23667eea' stroke-width='0.5'/%3E%3Cpath d='M0 25h100M0 50h100M0 75h100M25 0v100M50 0v100M75 0v100' stroke='%23667eea' stroke-width='0.25'/%3E%3C/svg%3E")`,
            backgroundSize: "50px 50px"
          }}
        ></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A selection of my creative work
            </h2>
            <p className="text-lg text-gray-700">
              Each project represents a unique challenge that I approached with a combination of technical skills and creative problem-solving.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProjectCarousel projects={projects} />
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 text-center text-gray-600 border-t border-gray-200">
        <p>© {new Date().getFullYear()} • Designed & built with creativity and code</p>
      </footer>
    </main>
  );
}