// Tech stack icon mapping using DevIcons CDN for colored official brand icons
// https://devicons.github.io/devicon/ - provides colored brand icons

export interface TechIcon {
  name: string;
  iconUrl: string;
  color: string; // Official brand color
}

// Mapping of technology names to their official colored icons
export const techIconMap: Record<string, TechIcon> = {
  // JavaScript & Related
  "JavaScript": {
    name: "JavaScript",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    color: "#F7DF1E"
  },
  "Vanilla JS": {
    name: "JavaScript",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    color: "#F7DF1E"
  },
  "React": {
    name: "React",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    color: "#61DAFB"
  },
  "Next.js": {
    name: "Next.js",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    color: "#000000"
  },

  // Python & Related
  "Python": {
    name: "Python",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    color: "#3776AB"
  },
  "FastAPI": {
    name: "FastAPI",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    color: "#009688"
  },
  "OpenCV": {
    name: "OpenCV",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
    color: "#5C3EE8"
  },

  // C++ & Build Tools
  "C++": {
    name: "C++",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    color: "#00599C"
  },
  "CMake": {
    name: "CMake",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cmake/cmake-original.svg",
    color: "#064F8C"
  },

  // Databases
  "PostgreSQL": {
    name: "PostgreSQL",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    color: "#4169E1"
  },
  "Firebase": {
    name: "Firebase",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    color: "#FFCA28"
  },

  // Build Tools & Dev Tools
  "Vite": {
    name: "Vite",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    color: "#646CFF"
  },
  "Chrome Extension": {
    name: "Google Chrome",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg",
    color: "#4285F4"
  },

  // AI & APIs
  "Gemini API": {
    name: "Gemini",
    iconUrl: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
    color: "#1E88E5"
  },

  // Web Components (using HTML5 icon as closest match)
  "Web Components": {
    name: "HTML5",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    color: "#E34F26"
  }
};

/**
 * Get icon data for a technology
 */
export function getTechIcon(techName: string): TechIcon | null {
  return techIconMap[techName] || null;
}

/**
 * Check if a technology has an official icon available
 */
export function hasTechIcon(techName: string): boolean {
  return techName in techIconMap;
}

/**
 * Get all available tech icons
 */
export function getAllTechIcons(): Record<string, TechIcon> {
  return techIconMap;
}