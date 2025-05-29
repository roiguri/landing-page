import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Our Kitchen Chronicles",
    summary: "A family cookbook web application for sharing, discovering, and managing homemade recipes with Firebase backend",
    thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=500&auto=format&fit=crop", // cooking/kitchen themed image
    tags: ["Vanilla JS", "Firebase", "Web Components", "Vite"],
    color: "#6a994e",
    link: "https://our-kitchen-chronicles.netlify.app/"
  },
  {
    id: 2,
    title: "AI Live Assistant",
    summary: "A Chrome extension providing real-time AI assistance with screen capture, progressive chat interface, and Gemini Live API integration",
    thumbnail: "/images/live-assistant.jpg", 
    tags: ["Chrome Extension", "Gemini API", "WebSocket", "Vanilla JS"], 
    color: "#007AFF",
    link: "https://github.com/roiguri/live-assistant"
  }
]; 