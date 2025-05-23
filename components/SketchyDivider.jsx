import React from "react";
import { motion } from "framer-motion";

export default function SketchyDivider() {
  return (
    <div className="relative py-12 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Main divider line */}
        <svg 
          className="w-full h-12" 
          viewBox="0 0 1000 50" 
          preserveAspectRatio="none"
        >
          <motion.path 
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="divider-path"
            d="M0,25 Q100,5 200,25 T400,25 T600,25 T800,25 T1000,25" 
            fill="none" 
            stroke="#6366F1" 
            strokeWidth="1.5"
            strokeDasharray="1,0"
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Decorative elements along the path */}
          <motion.circle 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            cx="200" cy="25" r="4" fill="#EC4899" 
          />
          <motion.circle 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            cx="400" cy="25" r="4" fill="#6366F1" 
          />
          <motion.circle 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            cx="600" cy="25" r="4" fill="#10B981" 
          />
          <motion.circle 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            cx="800" cy="25" r="4" fill="#F59E0B" 
          />
          
          {/* Optional tiny stars and shapes */}
          <motion.path 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            d="M130,15 L132,10 L134,15 L139,17 L134,19 L132,24 L130,19 L125,17 Z" 
            fill="#6366F1" 
            opacity="0.7"
          />
          <motion.path 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            d="M700,40 L702,35 L704,40 L709,42 L704,44 L702,49 L700,44 L695,42 Z" 
            fill="#EC4899" 
            opacity="0.7"
          />
          <motion.path 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
            d="M950,20 L952,15 L954,20 L959,22 L954,24 L952,29 L950,24 L945,22 Z" 
            fill="#10B981" 
            opacity="0.7"
          />
        </svg>
      </div>
    </div>
  );
}