import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  // Playful colors for tags
  const tagColors = [
    { bg: "bg-indigo-100", text: "text-indigo-700", border: "border-indigo-300" },
    { bg: "bg-pink-100", text: "text-pink-700", border: "border-pink-300" },
    { bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-300" },
    { bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-300" },
    { bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-300" },
  ];

  return (
    <motion.div 
      className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden h-[480px] flex flex-col"
      whileHover={{ y: -5, rotate: 1 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating background sketches */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Floating circle */}
          <motion.circle 
            animate={{ 
              y: [0, -3, 0], 
              x: [0, 2, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            cx="85" cy="15" r="1.5" 
            fill="none" 
            stroke="#6366F1" 
            strokeWidth="0.3" 
            opacity="0.4" 
          />
          
          {/* Floating star */}
          <motion.path 
            animate={{ 
              rotate: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            d="M90,85 L91,82 L92,85 L95,86 L92,87 L91,90 L90,87 L87,86 Z" 
            fill="#EC4899" 
            opacity="0.3"
            style={{ transformOrigin: "91px 86px" }}
          />
          
          {/* Floating squiggle */}
          <motion.path 
            animate={{ 
              y: [0, 2, 0],
              rotate: [-2, 2, -2]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            d="M8,20 Q12,17 16,20 T24,20" 
            fill="none" 
            stroke="#10B981" 
            strokeWidth="0.4" 
            opacity="0.3"
            style={{ transformOrigin: "16px 20px" }}
          />
        </svg>
      </div>

      {/* Animated sketch border */}
      <motion.svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-10" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <motion.path 
          d="M2,2 Q8,0 20,2 T50,2 T80,2 Q92,0 98,2 L98,98 Q92,100 80,98 T50,98 T20,98 Q8,100 2,98 Z" 
          fill="none" 
          stroke={project.color || "#6366F1"}
          strokeWidth="0.8"
          strokeDasharray="2,1"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
        />
      </motion.svg>
      
      {/* Content - removed the redundant inner container */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Image */}
        <div className="relative mb-4 overflow-hidden rounded-xl flex-shrink-0">
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-48 object-cover mx-auto"
          />
          
          {/* Image overlay sketch */}
          <motion.div 
            className="absolute bottom-2 right-2"
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20">
              <motion.circle 
                cx="10" cy="10" r="6" 
                fill="none" 
                stroke="white" 
                strokeWidth="1.5"
                strokeDasharray="2,2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
            </svg>
          </motion.div>
        </div>
        
        {/* Header with sketchy underline */}
        <div className="mb-3 flex-shrink-0 relative">
          <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2 text-center">
            {project.title}
          </h3>
          
          {/* Animated sketchy underline */}
          <svg className="absolute -left-6 -right-6 w-[calc(100%+3rem)] h-3" viewBox="0 0 120 12" preserveAspectRatio="none">
            <motion.path 
              d="M-5,6 Q15,2 30,6 T60,6 T90,6 T125,6" 
              fill="none" 
              stroke={project.color || "#6366F1"}
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </svg>
        </div>
        
        {/* Description */}
        <div className="flex-grow flex flex-col">
          <p className="text-gray-600 leading-relaxed mb-6 text-sm flex-grow">
            {project.summary}
          </p>
          
          {/* Tags with staggered animation */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, index) => {
              const colorScheme = tagColors[index % tagColors.length];
              return (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: 1.2 + (index * 0.1), 
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200 
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: Math.random() > 0.5 ? 2 : -2 
                  }}
                  className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border-2 ${colorScheme.bg} ${colorScheme.text} ${colorScheme.border} cursor-pointer`}
                >
                  {tag}
                  
                  {/* Small sketch dot on tag */}
                  <motion.span
                    className="ml-1 w-1 h-1 rounded-full"
                    style={{ backgroundColor: colorScheme.text.replace('text-', '').replace('-700', '') }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.span>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Corner decoration */}
      <motion.div 
        className="absolute top-3 right-3 z-30"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16">
          <motion.path 
            d="M8,2 L9,6 L13,7 L9,8 L8,12 L7,8 L3,7 L7,6 Z" 
            fill={project.color || "#6366F1"}
            opacity="0.3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, duration: 0.3 }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}