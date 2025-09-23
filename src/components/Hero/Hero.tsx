import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroText from "./HeroText";
import ProfileImage from "./ProfileImage";

interface HeroProps {
  highlightedWord?: string;
  subHeader?: string;
  description?: string;
  profileSrc?: string;
  profileAlt?: string;
  onScrollToProjects?: () => void;
  className?: string;
}

export default function Hero({ 
  highlightedWord,
  subHeader,
  description,
  profileSrc,
  profileAlt,
  onScrollToProjects,
  className = "relative pt-16 pb-12 md:pt-24 md:pb-12 px-6 overflow-hidden"
}: HeroProps) {
  return (
    <header className={className}>
      <div className="max-w-5xl mx-auto">
        <div className="md:flex items-center justify-center gap-12 min-h-[400px]">
          
          {/* Mobile: Title and description first */}
          <HeroText 
            highlightedWord={highlightedWord}
            subHeader={subHeader}
            description={description}
          />

          {/* Mobile: Image second, Desktop: Image first */}
          <div className="md:w-1/3 mb-8 md:mb-0 md:order-1 flex justify-center items-center">
            <ProfileImage 
              src={profileSrc}
              alt={profileAlt}
            />
          </div>
          
          {/* Mobile: Button appears third */}
          {onScrollToProjects && (
            <motion.div 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center mt-8 md:hidden"
            >
              <button 
                onClick={onScrollToProjects}
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                aria-label="Scroll to projects"
              >
                <span className="text-lg font-medium">View my work</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
} 