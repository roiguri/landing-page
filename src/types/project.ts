export interface Project {
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