import React from 'react';
import { motion } from 'framer-motion';

/**
 * Enhanced sketch-style background component with grid pattern and decorative elements
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
        
        {/* Gradient overlay for depth */}
        <rect width="100%" height="100%" fill="url(#gradient)" />
      </svg>
      
      {/* Animated decorative elements */}
      <div className="absolute inset-0">
        {/* Top-right corner decoration */}
        <motion.svg 
          className="absolute top-0 right-0 w-64 h-64 opacity-10"
          viewBox="0 0 100 100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <motion.path
            d="M100,0 C80,20 60,20 40,0 M100,20 C85,35 70,35 55,20"
            stroke="var(--accent-color)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
          />
        </motion.svg>
        
        {/* Bottom-left corner decoration */}
        <motion.svg 
          className="absolute bottom-0 left-0 w-64 h-64 opacity-10"
          viewBox="0 0 100 100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <motion.path
            d="M0,100 C20,80 20,60 0,40 M20,100 C35,85 35,70 20,55"
            stroke="var(--accent-color)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.7 }}
          />
        </motion.svg>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-40"></div>
      </div>
    </div>
  );
};

export default SketchBackground; 