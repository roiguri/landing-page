import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Our Kitchen Chronicles",
    summary: "A family cookbook web application for sharing, discovering, and managing homemade recipes with Firebase backend",
    thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=500&auto=format&fit=crop", // cooking/kitchen themed image
    tags: ["Vanilla JS", "Firebase", "Web Components", "Vite"],
    color: "#6a994e",
    link: "https://our-kitchen-chronicles.netlify.app/",
    github: "https://github.com/roiguri/My-Cook-Book",
    deployment: "https://our-kitchen-chronicles.netlify.app/"
  },
  {
    id: 2,
    title: "Recipe Auto-Creation API",
    summary: "FastAPI service for AI-powered recipe extraction from text, URLs, and images with multi-language support",
    thumbnail: "/images/recipe-api.png",
    tags: ["FastAPI", "Python", "Google Gemini", "PostgreSQL", "React"],
    color: "#e74c3c",
    link: "https://recipe-reader-demo.netlify.app",
    github: "https://github.com/roiguri/recipe-reader",
    deployment: "https://recipe-reader-demo.netlify.app"
  },
  {
    id: 3,
    title: "Tank Battle Game",
    summary: "Console-based C++ tank battle game demonstrating fundamental programming concepts, and modular architecture with dynamic library loading and web UI",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=500&auto=format&fit=crop",
    tags: ["C++", "CMake", "JavaScript"],
    color: "#2c3e50",
    link: "https://github.com/roiguri/c-Game_Board",
    github: "https://github.com/roiguri/c-Game_Board"
  },
  {
    id: 4,
    title: "AI Live Assistant",
    summary: "A Chrome extension providing real-time AI assistance with screen capture, progressive chat interface, and Gemini Live API integration",
    thumbnail: "/images/live-assistant.jpg", 
    tags: ["Chrome Extension", "Gemini API", "Vanilla JS"], 
    color: "#007AFF",
    link: "https://github.com/roiguri/live-assistant",
    github: "https://github.com/roiguri/live-assistant"
  },
  {
    id: 5,
    title: "Video Processing Pipeline",
    summary: "A video processing application using Python and OpenCV, featuring a pipeline of video stabilization, background subtraction, matting, and object tracking",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=500&auto=format&fit=crop",
    tags: ["Python", "OpenCV", "Computer Vision"],
    color: "#f39c12",
    link: "https://github.com/roiguri/video-project",
    github: "https://github.com/roiguri/video-project"
  }
]; 