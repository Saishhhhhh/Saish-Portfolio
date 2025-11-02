import React from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

/**
 * Hero CTA buttons component with enhanced visual appeal
 * @param {Object} props - Component props
 * @param {boolean} props.animationComplete - Whether the name animation is complete
 */
const HeroButtons = ({ animationComplete }) => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: animationComplete ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {/* Primary CTA buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-2">
        <Button 
          href="#projects"
          variant="primary"
          show={animationComplete}
          delay={0.2}
          className="relative group"
        >
          <span className="relative z-10 flex items-center">
            Explore My Projects
            <motion.svg 
              className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
              initial={{ x: -5, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </motion.svg>
          </span>
        </Button>
        
        <Button 
          href="#contact"
          variant="outline"
          show={animationComplete}
          delay={0.4}
        >
          Let's Connect
        </Button>
      </div>
      
      {/* Specific visitor-focused CTAs */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 text-sm text-[var(--pencil-color)] opacity-80"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: animationComplete ? 0.8 : 0, y: animationComplete ? 0 : 10 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <a href="#hiring" className="font-patrick hover:text-[var(--accent-color)] transition-colors flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          Looking to hire?
        </a>
        <a href="#collaboration" className="font-patrick hover:text-[var(--accent-color)] transition-colors flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          Want to collaborate?
        </a>
        <a href="#resume" className="font-patrick hover:text-[var(--accent-color)] transition-colors flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          View resume
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HeroButtons; 