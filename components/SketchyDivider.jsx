import React from "react";
import { motion } from "framer-motion";

export default function SketchyDivider() {
  return (
    <div className="relative py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-indigo-500/10 blur-3xl"></div>
        
        {/* Main divider line with enhanced prominence */}
        <svg 
          className="w-full h-20" 
          viewBox="0 0 1000 80" 
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Define filters for glow effects */}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Shadow/backdrop path for depth */}
          <motion.path 
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            animate={{ 
              strokeDashoffset: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              pathLength: { duration: 1.5 },
              strokeDashoffset: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            d="M0,42 Q100,22 200,42 T400,42 T600,42 T800,42 T1000,42" 
            fill="none" 
            stroke="#6366F1" 
            strokeWidth="6"
            strokeDasharray="2,2"
            opacity="0.4"
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Main divider path with enhanced thickness and glow */}
          <motion.path 
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            animate={{ 
              strokeWidth: [3, 4, 3],
              filter: ["url(#glow)", "url(#softGlow)", "url(#glow)"]
            }}
            transition={{ 
              pathLength: { duration: 1.5 },
              strokeWidth: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              filter: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="divider-path"
            d="M0,40 Q100,20 200,40 T400,40 T600,40 T800,40 T1000,40" 
            fill="none" 
            stroke="#6366F1" 
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#glow)"
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Floating decorative circles with continuous movement */}
          <motion.circle 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            animate={{ 
              y: [0, -3, 0],
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              scale: { duration: 0.6, delay: 0.5 },
              opacity: { duration: 0.6, delay: 0.5 },
              y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0 }
            }}
            cx="200" cy="40" r="6" fill="#EC4899" 
            filter="url(#softGlow)"
            vectorEffect="non-scaling-stroke"
          />
          <motion.circle 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            animate={{ 
              y: [0, -4, 0],
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              scale: { duration: 0.6, delay: 0.6 },
              opacity: { duration: 0.6, delay: 0.6 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
            cx="400" cy="40" r="6" fill="#6366F1" 
            filter="url(#glow)"
            vectorEffect="non-scaling-stroke"
          />
          <motion.circle 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            animate={{ 
              y: [0, -2, 0],
              scale: [1, 1.15, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              scale: { duration: 0.6, delay: 0.7 },
              opacity: { duration: 0.6, delay: 0.7 },
              y: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            cx="600" cy="40" r="6" fill="#10B981" 
            filter="url(#softGlow)"
            vectorEffect="non-scaling-stroke"
          />
          <motion.circle 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            animate={{ 
              y: [0, -3.5, 0],
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              scale: { duration: 0.6, delay: 0.8 },
              opacity: { duration: 0.6, delay: 0.8 },
              y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
            }}
            cx="800" cy="40" r="6" fill="#F59E0B" 
            filter="url(#softGlow)"
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Rotating and floating stars */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            animate={{ 
              rotate: [0, 360],
              y: [0, -2, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              scale: { duration: 0.6, delay: 0.9 },
              opacity: { duration: 0.6, delay: 0.9 },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <path 
              d="M130,30 L132,25 L134,30 L139,32 L134,34 L132,39 L130,34 L125,32 Z" 
              fill="#6366F1" 
              opacity="0.9"
              filter="url(#softGlow)"
              vectorEffect="non-scaling-stroke"
            />
          </motion.g>
          
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            animate={{ 
              rotate: [0, -360],
              y: [0, -1.5, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              scale: { duration: 0.6, delay: 1.0 },
              opacity: { duration: 0.6, delay: 1.0 },
              rotate: { duration: 6, repeat: Infinity, ease: "linear" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
          >
            <path 
              d="M700,55 L702,50 L704,55 L709,57 L704,59 L702,64 L700,59 L695,57 Z" 
              fill="#EC4899" 
              opacity="0.9"
              filter="url(#softGlow)"
              vectorEffect="non-scaling-stroke"
            />
          </motion.g>
          
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            animate={{ 
              rotate: [0, 360],
              y: [0, -2.5, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ 
              scale: { duration: 0.6, delay: 1.1 },
              opacity: { duration: 0.6, delay: 1.1 },
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              y: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
          >
            <path 
              d="M950,35 L952,30 L954,35 L959,37 L954,39 L952,44 L950,39 L945,37 Z" 
              fill="#10B981" 
              opacity="0.9"
              filter="url(#softGlow)"
              vectorEffect="non-scaling-stroke"
            />
          </motion.g>
          
          {/* Moving particles along the path */}
          {/* Primary particle - always visible, larger size */}
          <motion.circle 
            animate={{ 
              cx: [0, 200, 400, 600, 800, 1000],
              cy: [40, 20, 40, 20, 40, 20],
              opacity: [0, 1, 0.8, 1, 0.8, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear",
              repeatDelay: 2
            }}
            className="particle-responsive"
            r="6" fill="#A855F7" 
            opacity="0"
            filter="url(#softGlow)"
          />
          
          {/* Secondary particle - hidden on mobile, medium size */}
          <motion.circle 
            animate={{ 
              cx: [1000, 800, 600, 400, 200, 0],
              cy: [40, 20, 40, 20, 40, 20],
              opacity: [0, 1, 0.8, 1, 0.8, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear",
              delay: 4,
              repeatDelay: 2
            }}
            className="hidden sm:block particle-responsive"
            r="5" fill="#06B6D4" 
            opacity="0"
            filter="url(#softGlow)"
          />
          
          {/* Tertiary particle - only visible on larger screens */}
          <motion.circle 
            animate={{ 
              cx: [500, 300, 100, 900, 700, 500],
              cy: [25, 35, 25, 35, 25, 25],
              opacity: [0, 0.6, 1, 0.6, 0.8, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: 6,
              repeatDelay: 3
            }}
            className="hidden lg:block particle-responsive"
            r="4" fill="#10B981" 
            opacity="0"
            filter="url(#softGlow)"
          />
          
          {/* Additional desktop-only particles for richness */}
          <motion.circle 
            animate={{ 
              cx: [800, 600, 400, 200, 0, 1000],
              cy: [30, 50, 30, 50, 30, 30],
              opacity: [0, 0.4, 0.8, 0.4, 0.6, 0]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "linear",
              delay: 8,
              repeatDelay: 4
            }}
            className="hidden xl:block particle-responsive"
            r="3" fill="#F59E0B" 
            opacity="0"
            filter="url(#softGlow)"
          />
        </svg>
        
        {/* CSS to maintain particle size across screen sizes */}
        <style jsx>{`
          .particle-responsive {
            transform-origin: center;
          }
          
          /* Scale up particles on smaller screens to counter SVG scaling */
          @media (max-width: 640px) {
            .particle-responsive {
              transform: scale(2.5);
            }
          }
          
          @media (min-width: 641px) and (max-width: 768px) {
            .particle-responsive {
              transform: scale(2);
            }
          }
          
          @media (min-width: 769px) and (max-width: 1024px) {
            .particle-responsive {
              transform: scale(1.5);
            }
          }
          
          @media (min-width: 1025px) {
            .particle-responsive {
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </div>
  );
}