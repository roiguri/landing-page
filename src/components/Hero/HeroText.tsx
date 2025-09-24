import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

interface HeroTextProps {
  title?: string;
  subHeader?: string;
  description?: string;
  className?: string;
}

export default function HeroText({ 
  title = "Roi Guri",
  subHeader = "Software Engineer Intern at Google",
  description = "I use personal projects as an opportunity to learn and apply new technologies. This portfolio showcases a variety of my work.",
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
          {title}
        </h1>
      </motion.div>
      
      {subHeader && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 -mt-4">
            {subHeader}
          </h2>
        </motion.div>
      )}

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