import React from "react";
import { motion } from "framer-motion";

export default function BackgroundSketches() {
  return (
    <div 
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Background sketch elements */}
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Circles */}
        <motion.circle 
          animate={{ 
            y: [0, -20, 0], 
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="bg-circle" 
          cx="5" cy="10" r="2" 
          fill="none" 
          stroke="#6366F1" 
          strokeWidth="0.2" 
          opacity="0.3" 
        />
        <motion.circle 
          animate={{ 
            y: [0, 15, 0], 
            x: [0, -5, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="bg-circle" 
          cx="80" cy="15" r="1.5" 
          fill="none" 
          stroke="#EC4899" 
          strokeWidth="0.2" 
          opacity="0.2" 
        />
        <motion.circle 
          animate={{ 
            y: [0, 10, 0], 
            x: [0, -20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="bg-circle" 
          cx="90" cy="50" r="3" 
          fill="none" 
          stroke="#10B981" 
          strokeWidth="0.2" 
          opacity="0.3" 
        />
        <motion.circle 
          animate={{ 
            y: [0, -10, 0], 
            x: [0, 10, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{ 
            duration: 11, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="bg-circle" 
          cx="20" cy="85" r="2.5" 
          fill="none" 
          stroke="#F59E0B" 
          strokeWidth="0.2" 
          opacity="0.2" 
        />
        <motion.circle 
          animate={{ 
            y: [0, 15, 0], 
            x: [0, 5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="bg-circle" 
          cx="70" cy="90" r="2" 
          fill="none" 
          stroke="#6366F1" 
          strokeWidth="0.2" 
          opacity="0.3" 
        />
        
        {/* Squiggles */}
        <motion.path 
          animate={{ rotate: [-1, 2, -1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="bg-squiggle" 
          d="M10,20 Q15,15 20,20 T30,20" 
          fill="none" 
          stroke="#EC4899" 
          strokeWidth="0.2" 
          opacity="0.2"
          transformOrigin="center"
        />
        <motion.path 
          animate={{ rotate: [1, -2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="bg-squiggle" 
          d="M70,30 Q75,25 80,30 T90,30" 
          fill="none" 
          stroke="#10B981" 
          strokeWidth="0.2" 
          opacity="0.2"
          transformOrigin="center"
        />
        <motion.path 
          animate={{ rotate: [-2, 1, -2] }}
          transition={{ duration: 11, repeat: Infinity }}
          className="bg-squiggle" 
          d="M10,70 Q15,65 20,70 T30,70" 
          fill="none" 
          stroke="#F59E0B" 
          strokeWidth="0.2" 
          opacity="0.2"
          transformOrigin="center"
        />
        <motion.path 
          animate={{ rotate: [2, -1, 2] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="bg-squiggle" 
          d="M60,80 Q65,75 70,80 T80,80" 
          fill="none" 
          stroke="#6366F1" 
          strokeWidth="0.2" 
          opacity="0.2"
          transformOrigin="center"
        />
        
        {/* Long lines */}
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1 }}
          className="bg-line" 
          d="M0,40 L100,40" 
          fill="none" 
          stroke="#6366F1" 
          strokeWidth="0.1" 
          opacity="0.1"
          strokeDasharray="1,3"
        />
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
          className="bg-line" 
          d="M0,60 L100,60" 
          fill="none" 
          stroke="#EC4899" 
          strokeWidth="0.1" 
          opacity="0.1"
          strokeDasharray="1,3"
        />
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 2 }}
          className="bg-line" 
          d="M30,0 L30,100" 
          fill="none" 
          stroke="#10B981" 
          strokeWidth="0.1" 
          opacity="0.1"
          strokeDasharray="1,3"
        />
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 2.5 }}
          className="bg-line" 
          d="M70,0 L70,100" 
          fill="none" 
          stroke="#F59E0B" 
          strokeWidth="0.1" 
          opacity="0.1"
          strokeDasharray="1,3"
        />
      </svg>
    </div>
  );
}