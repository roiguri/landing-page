import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, isActive, onClick }) {
  return (
    <motion.div 
      onClick={onClick}
      className="relative bg-white rounded-lg p-6 cursor-pointer shadow-xl"
      style={{
        background: "linear-gradient(to bottom right, white, #fafafa)",
      }}
      whileHover={{ scale: 1.02, rotate: -1 }}
      animate={{ 
        scale: isActive ? 0.98 : 1, 
        boxShadow: isActive 
          ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
          : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Decorative elements */}
      <div className="absolute -top-3 -right-2 transform rotate-6">
        <div className="w-8 h-8 bg-white shadow-sm rounded-lg"></div>
      </div>
      
      {/* Project thumbnail with sketch border */}
      <div className="relative mb-6 overflow-hidden rounded-md">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-48 object-cover"
        />
        
        {/* SVG border that will be animated */}
        <motion.svg 
          className="project-border absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.path 
            d="M1,1 Q5,-1 20,1 T50,1 T80,1 Q95,-1 99,1 V90 Q95,101 80,99 T50,99 T20,99 Q5,101 1,90 Z" 
            fill="none" 
            stroke={project.color} 
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
        </motion.svg>
      </div>
      
      {/* Project content */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-700 mb-4">
          {project.summary}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full"
              style={{
                border: "1px dashed rgba(0,0,0,0.2)"
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        {/* View details hint */}
        <div className="flex items-center text-sm text-indigo-600 font-medium mt-4">
          <span>{isActive ? 'Hide details' : 'View details'}</span>
          <motion.svg 
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-4 h-4 ml-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M19 9l-7 7-7-7" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>
      </div>
    </motion.div>
  );
}