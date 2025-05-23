import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

interface HeroTextProps {
  title_prefix?: string;
  title_suffix?: string;
  highlightedWord?: string;
  description?: string;
  className?: string;
}

export default function HeroText({ 
  title_prefix = "Expanding",
  highlightedWord = "Horizons", 
  title_suffix = " - One Project at a Time",
  description = "I expand my tech skills by building, using each project to learn and master something new. This is where I share that journey.",
  className = "md:w-2/3 mb-8 md:mb-0 md:order-2 flex flex-col justify-center"
}: HeroTextProps) {
  return (
    <div className={className}>
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="header-content"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {title_prefix} <span className="relative inline-block">
            <span className="relative z-10">{highlightedWord}</span>
            <svg className="absolute -bottom-1 left-0 w-full h-3 text-yellow-300 z-0" viewBox="0 0 100 15" preserveAspectRatio="none">
              <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </span> {title_suffix}
        </h1>
      </motion.div>
      
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="header-content"
      >
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-4 md:mb-6">
          {description}
        </p>
        
        {/* Social Links */}
        <SocialLinks />
      </motion.div>
    </div>
  );
} 