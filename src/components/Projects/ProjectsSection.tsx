import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Project } from "../../types/project";
import ProjectCarousel from "./ProjectCarousel";

interface ProjectsSectionProps {
  projects: Project[];
  title?: string;
  showComingSoon?: boolean;
  className?: string;
  id?: string;
}

const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>(({ 
  projects,
  title = "Featured Projects",
  showComingSoon = true,
  className = "py-8 md:py-12 px-6 relative",
  id = "projects-section"
}, ref) => {
  return (
    <section 
      id={id}
      className={className}
      ref={ref}
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
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ProjectCarousel projects={projects} showComingSoon={showComingSoon} />
        </motion.div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection; 