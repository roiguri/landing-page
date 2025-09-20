import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Globe } from "lucide-react";
import Image from "next/image";
import TechIcon from "../TechIcon";
import { getTechIcon } from "../../utils/techIcons";

export default function ProjectCard({ project }) {
  const [isDragging, setIsDragging] = useState(false);
  

  const handleClick = () => {
    // Only navigate if we weren't dragging
    if (!isDragging && project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    // Small delay to ensure drag state is properly handled
    setTimeout(() => setIsDragging(false), 50);
  };

  const handleChipClick = (e, url) => {
    e.stopPropagation(); // Prevent card click
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 overflow-hidden min-h-[520px] min-w-[300px] flex flex-col cursor-pointer group h-full"
      whileHover={{
        y: -6,
        scale: 1.02
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      onClick={handleClick}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {/* Enhanced hover glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `linear-gradient(135deg, ${project.color}10 0%, ${project.color}05 50%, transparent 100%)`
        }}
      />

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
            className="group-hover:opacity-70 transition-opacity duration-300"
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
            className="group-hover:opacity-60 transition-opacity duration-300"
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
            className="group-hover:opacity-60 transition-opacity duration-300"
            style={{ transformOrigin: "16px 20px" }}
          />
        </svg>
      </div>

      {/* Moving incomplete border sketch - chasing its tail */}
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
          strokeLinecap="round"
          opacity="0.6"
          className="group-hover:opacity-100 transition-opacity duration-300"
          strokeDasharray="320 40" // Long dash followed by a gap
          animate={{ 
            strokeDashoffset: [0, -360], // Move the gap around the perimeter
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            ease: "linear"
          }}
        />
      </motion.svg>
      
      {/* Content */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Image with enhanced hover effect */}
        <div className="relative mb-4 overflow-hidden rounded-xl flex-shrink-0 group/image">
          <motion.div
            className="relative w-full h-48"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={false}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejVkWYZdIfOtxRKmNk6aMlELALhZajVGBfevEr8BWSJNsJ9ZHQR3Jh/TNLrlwUZDON0FE3tUIvKxfE6aNEkTXJ1w/TuA="
            />
          </motion.div>
          
          {/* Enhanced image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* External link icon */}
          <motion.div 
            className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent bubbling to parent
              if (!isDragging && project.link) {
                window.open(project.link, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            <ExternalLink className="w-4 h-4 text-gray-700" />
          </motion.div>
          
          {/* Image overlay sketch */}
          <motion.div 
            className="absolute bottom-2 right-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
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
          <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2 text-center group-hover:text-gray-800 transition-colors duration-300">
            {project.title}
          </h3>
          
          {/* Enhanced animated sketchy underline */}
          <svg className="absolute -left-6 -right-6 w-[calc(100%+3rem)] h-3" viewBox="0 0 120 12" preserveAspectRatio="none">
            <motion.path 
              d="M-5,6 Q15,2 30,6 T60,6 T90,6 T125,6" 
              fill="none" 
              stroke={project.color || "#6366F1"}
              strokeWidth="2.5"
              strokeLinecap="round"
              className="group-hover:opacity-100 transition-opacity duration-300"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </svg>
        </div>
        
        {/* Description and Project Links */}
        <div className="flex-grow flex flex-col min-h-0">
          <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300 mb-3">
            {project.summary}
          </p>

          {/* Project links chips - positioned right after description */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.github && (
              <motion.button
                onClick={(e) => handleChipClick(e, project.github)}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 1.2,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold bg-slate-900 text-white border-2 border-slate-800 hover:bg-slate-800 hover:border-slate-700 hover:shadow-lg transition-all duration-200 cursor-pointer shadow-md flex-shrink-0"
              >
                <Github size={12} />
                <span>GitHub</span>
              </motion.button>
            )}
            {project.deployment && (
              <motion.button
                onClick={(e) => handleChipClick(e, project.deployment)}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 1.3,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white border-2 border-blue-500 hover:from-blue-700 hover:to-blue-800 hover:border-blue-600 hover:shadow-lg transition-all duration-200 cursor-pointer shadow-md flex-shrink-0"
              >
                <Globe size={12} />
                <span>Live Demo</span>
              </motion.button>
            )}
          </div>
        </div>

        {/* Enhanced tech stack chips positioned at bottom - moved outside flex-grow container */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-4 max-w-full">
          {project.tags.map((tag, index) => {
            const iconData = getTechIcon(tag);
            const hasIcon = !!iconData;

            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 1.4 + (index * 0.1),
                  duration: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
                className="inline-flex items-center px-2 py-1.5 rounded-lg text-xs font-semibold border-2 flex-shrink-0 bg-white/90 backdrop-blur-sm text-gray-700 border-gray-200"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  textRendering: 'optimizeLegibility',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
              >
                {/* Icon with proper spacing */}
                {hasIcon && (
                  <TechIcon
                    techName={tag}
                    size={14}
                    className="mr-1.5 flex-shrink-0"
                    useOriginalColors={true}
                  />
                )}

                <span className="whitespace-nowrap">{tag}</span>
              </motion.span>
            );
          })}
        </div>
      </div>
      
      {/* Enhanced corner decoration */}
      <motion.div 
        className="absolute top-3 left-3 z-30 opacity-40 group-hover:opacity-70 transition-opacity duration-300"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12">
          <motion.circle 
            cx="6" cy="6" r="4" 
            fill="none" 
            stroke={project.color || "#6366F1"}
            strokeWidth="1"
            strokeDasharray="1,1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          />
        </svg>
      </motion.div>

      {/* Subtle shadow enhancement on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 25px 50px -12px ${project.color}40`
        }}
      />
    </motion.div>
  );
}