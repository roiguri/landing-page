import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      {children}
      
      {/* Custom styling for the sketch theme */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }
        
        /* Custom sketch-like styles */
        .sketch-border {
          position: relative;
        }
        
        .sketch-border::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid;
          border-color: currentColor;
          border-radius: inherit;
          opacity: 0.1;
          transform: translate(3px, 3px);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}