import React from 'react';
import { motion } from 'framer-motion';

/**
 * Animated scroll down arrow component with handwritten style
 * @param {Object} props - Component props
 * @param {boolean} props.animationComplete - Whether the name animation is complete
 */
const ScrollArrow = ({ animationComplete }) => {
  return (
    <motion.div 
      className="flex justify-center mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: animationComplete ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.a
        href="#projects"
        className="relative cursor-pointer group flex flex-col items-center"
        whileHover={{ y: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {/* Handwritten "scroll" text */}
        <motion.div
          className="font-patrick text-sm text-[var(--pencil-color)] opacity-60 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          scroll down
        </motion.div>
        
        {/* Hand-drawn arrow */}
        <svg width="40" height="40" viewBox="0 0 40 40" className="overflow-visible">
          {/* Arrow shaft */}
          <motion.path
            d="M20,5 C20.5,15 19.5,25 20,35"
            fill="none"
            stroke="var(--pencil-color)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
          
          {/* Arrow head */}
          <motion.path
            d="M13,28 C16,31 18,33 20,35 C22,33 24,31 27,28"
            fill="none"
            stroke="var(--pencil-color)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          />
        </svg>
        
        {/* Subtle pulsing circle */}
        <motion.div 
          className="absolute -bottom-2 w-10 h-10 rounded-full bg-[var(--pencil-color)] opacity-0 group-hover:opacity-5 z-[-1]"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
        />
      </motion.a>
    </motion.div>
  );
};

export default ScrollArrow; 