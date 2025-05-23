import React, { useRef } from "react";
import SketchyDivider from "../components/SketchyDivider";
import BackgroundSketches from "../components/BackgroundSketches";
import Hero from "../components/Hero/Hero";
import ProjectsSection from "../components/Projects/ProjectsSection";
import { projects } from "../data/projects";

export default function Home() {
  const mainRef = useRef(null);
  const blueprintRef = useRef(null);

  // Custom smooth scroll function with better easing
  const smoothScrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (!projectsSection) return;

    const startPosition = window.pageYOffset;
    const targetPosition = projectsSection.offsetTop - 80; // 80px offset from top
    const distance = targetPosition - startPosition;
    const duration = 1200; // 1.2 seconds
    let start: number | null = null;

    // Easing function for smoother animation (easeInOutCubic)
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, startPosition + distance * ease);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <main 
      ref={mainRef} 
      className="relative min-h-screen bg-white overflow-x-hidden font-sans"
    >
      {/* Background sketches */}
      <BackgroundSketches />
      
      {/* Hero section */}
      <Hero onScrollToProjects={smoothScrollToProjects} />
      
      {/* Sketchy divider */}
      <SketchyDivider />
      
      {/* Projects section */}
      <ProjectsSection projects={projects} ref={blueprintRef} />
      
      {/* Footer */}
      <footer className="py-12 px-6 text-center text-gray-600 border-t border-gray-200">
        <p>© {new Date().getFullYear()} • Designed & built with creativity and code</p>
      </footer>
    </main>
  );
}