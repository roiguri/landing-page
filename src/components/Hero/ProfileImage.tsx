import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProfileImageProps {
  src?: string;
  alt?: string;
  animationDelay?: number;
  className?: string;
}

export default function ProfileImage({ 
  src = "/profile.png",
  alt = "Profile",
  animationDelay = 0.2,
  className = "relative max-w-xs mx-auto md:mx-0"
}: ProfileImageProps) {
  return (
    <motion.div 
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: animationDelay, ease: "easeOut" }}
      className={className}
    >
      <div className="relative z-10 w-56 h-56 mx-auto overflow-hidden rounded-full">
        <Image 
          src={src} 
          alt={alt} 
          width={224}
          height={224}
          className="w-full h-full object-cover object-top"
          style={{ filter: "contrast(1.1) brightness(0.95)" }}
          priority
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
  );
} 