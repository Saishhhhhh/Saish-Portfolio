import React from 'react';

/**
 * Sketch-style background component with grid pattern and dots
 */
const SketchBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main grid pattern */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sketch-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="var(--pencil-color)" strokeWidth="0.8" strokeDasharray="2,3" opacity="0.3" />
          </pattern>
          
          {/* Subtle dot pattern */}
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.8" fill="var(--pencil-color)" opacity="0.15" />
          </pattern>
        </defs>
        
        {/* Base grid */}
        <rect width="100%" height="100%" fill="url(#sketch-grid)" />
        
        {/* Subtle dot overlay */}
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--paper-alt-color)] via-transparent to-[var(--paper-alt-color)] opacity-30"></div>
    </div>
  );
};

export default SketchBackground; 