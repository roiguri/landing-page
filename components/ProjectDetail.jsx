import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";

export default function ProjectDetail({ project, onClose }) {
  return (
    <motion.div 
      className="relative mt-6 bg-white rounded-lg p-6 shadow-xl overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, white, #fafafa)",
        border: "1px solid rgba(0,0,0,0.05)"
      }}
    >
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors"
        aria-label="Close details"
      >
        <X className="w-5 h-5" />
      </button>
      
      <div className="detail-content">
        {/* Project images */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6"
        >
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={project.images[0]} 
              alt={project.title} 
              className="w-full h-64 md:h-96 object-cover"
            />
            
            {/* Decorative sketch elements */}
            <svg 
              className="absolute top-0 left-0 w-full h-full pointer-events-none" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <path 
                d="M0,0 L100,0 M0,25 L100,25 M0,50 L100,50 M0,75 L100,75 M0,100 L100,100" 
                stroke={project.color} 
                strokeWidth="0.2" 
                strokeDasharray="5,5" 
                opacity="0.3"
                vectorEffect="non-scaling-stroke"
              />
              <path 
                d="M0,0 L0,100 M25,0 L25,100 M50,0 L50,100 M75,0 L75,100 M100,0 L100,100" 
                stroke={project.color} 
                strokeWidth="0.2" 
                strokeDasharray="5,5" 
                opacity="0.3"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </motion.div>
        
        {/* Squiggly divider */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <svg 
            className="squiggly-divider w-full h-4"
            viewBox="0 0 200 10" 
            preserveAspectRatio="none"
          >
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              d="M0,5 Q10,2 20,5 T40,5 T60,5 T80,5 T100,5 T120,5 T140,5 T160,5 T180,5 T200,5" 
              fill="none" 
              stroke={project.color} 
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </motion.div>
        
        {/* Project details */}
        <motion.h3 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-2xl font-bold text-gray-900 mb-4"
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-gray-700 mb-6 leading-relaxed"
        >
          {project.description}
        </motion.p>
        
        {/* Technical details */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mb-6"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <motion.span 
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + (index * 0.05) }}
                className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                style={{
                  border: "1px dashed rgba(0,0,0,0.1)"
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        {/* Project links */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          {project.links.github && (
            <a 
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Code</span>
            </a>
          )}
          
          {project.links.demo && (
            <a 
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}