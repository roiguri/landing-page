import React, { useState, useRef, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  summary: string;
  thumbnail: string;
  tags: string[];
  color: string;
  link: string; // Main link for card navigation
  github?: string; // GitHub repository link
  deployment?: string; // Deployment/production link
}

interface ProjectCarouselProps {
  projects: Project[];
  showComingSoon?: boolean; // Optional flag to show/hide coming soon message
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects, showComingSoon = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1); // Start with 1 for consistent SSR
  const [isMounted, setIsMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Calculate how many cards are visible at once based on screen size
  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 3; // lg: 3 cards
    if (window.innerWidth >= 768) return 2;  // md: 2 cards
    return 1; // sm: 1 card
  };
  
  // Set mounted state after component mounts to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Update card dimensions and visible cards on resize
  useEffect(() => {
    if (!isMounted) return;
    
    const updateDimensions = () => {
      if (cardRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const newVisibleCards = getVisibleCards();
        const gap = 24; // 1.5rem gap between cards
        const containerPadding = 64; // px-8 = 32px on each side = 64px total
        const availableWidth = containerRect.width - containerPadding;
        const newCardWidth = (availableWidth - (gap * (newVisibleCards - 1))) / newVisibleCards;
        
        setCardWidth(newCardWidth);
        setVisibleCards(newVisibleCards);
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [isMounted]);
  
  const maxIndex = Math.max(0, projects.length - visibleCards);
  
  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };
  
  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };
  
  // Handle drag start
  const handleDragStart = () => {
    setIsDragging(true);
  };
  
  // Handle drag end
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const threshold = 50; // minimum drag distance to trigger slide
    const velocity = info.velocity.x;
    
    if (Math.abs(info.offset.x) > threshold || Math.abs(velocity) > 500) {
      if (info.offset.x > 0 && currentIndex > 0) {
        goToPrevious();
      } else if (info.offset.x < 0 && currentIndex < maxIndex) {
        goToNext();
      }
    }
  };
  
  // Dot indicators - only show after mounted to prevent hydration issues
  const getDotCount = () => Math.max(1, projects.length - visibleCards + 1);
  
  // Calculate the total scroll distance
  const getMaxScrollDistance = () => {
    if (!cardWidth || visibleCards >= projects.length) return 0;
    const gap = 24;
    // For the last position, we want to show the last 'visibleCards' number of cards
    // So we need to scroll by (totalCards - visibleCards) positions
    const scrollPositions = projects.length - visibleCards;
    return (cardWidth + gap) * scrollPositions;
  };
  
  return (
    <div className="relative">
      {/* Navigation Arrows - only show when mounted and needed */}
      {isMounted && maxIndex > 0 && (
        <>
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-40 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200 ${
              currentIndex === 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:shadow-xl hover:scale-105 active:scale-95'
            }`}
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          
          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-40 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200 ${
              currentIndex >= maxIndex 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:shadow-xl hover:scale-105 active:scale-95'
            }`}
            aria-label="Next projects"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </>
      )}
      
      {/* Carousel Container */}
      <div 
        ref={containerRef}
        className="overflow-hidden px-8 pt-8"
      >
        <motion.div
          className="flex gap-6 items-stretch"
          drag="x"
          dragConstraints={{
            left: Math.min(0, -getMaxScrollDistance()),
            right: 0
          }}
          dragElastic={0.1}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          animate={{ x: -(currentIndex * (cardWidth + 24)) }}
          transition={
            isDragging
              ? { type: "spring", damping: 40, stiffness: 300 }
              : {
                  type: "tween",
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1]
                }
          }
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={index === 0 ? cardRef : undefined}
              style={{
                minWidth: cardWidth || 'auto',
                maxWidth: cardWidth || 'none'
              }}
              className="flex-shrink-0 flex"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Dot Indicators - only show when mounted and needed */}
      {isMounted && getDotCount() > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: getDotCount() }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-gray-800 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Coming Soon Message - show when flag is true */}
      {isMounted && showComingSoon && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="relative inline-block">
            <p className="text-gray-600 text-sm md:text-base font-medium">
              More exciting projects coming soon
              <span className="inline-block ml-1 animate-pulse">✨</span>
            </p>
            
            {/* Sketchy underline */}
            <svg 
              className="absolute -bottom-1 left-0 w-full h-2 text-yellow-300 opacity-60" 
              viewBox="0 0 100 8" 
              preserveAspectRatio="none"
            >
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                d="M0,4 Q25,1 50,4 T100,4" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCarousel; 