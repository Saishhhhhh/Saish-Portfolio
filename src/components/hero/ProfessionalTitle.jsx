import React from 'react';
import { motion } from 'framer-motion';

/**
 * Professional title component with animation
 * @param {Object} props - Component props
 * @param {boolean} props.animationComplete - Whether the name animation is complete
 * @param {string} props.title - The professional title text
 */
const ProfessionalTitle = ({ animationComplete, title }) => {
  return (
    <motion.div 
      className="flex justify-center mb-6"
      initial={{ opacity: 0, y: -10 }}
      animate={{ 
        opacity: animationComplete ? 1 : 0, 
        y: animationComplete ? 0 : -10 
      }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="relative inline-block text-center">
        {/* Connecting line from name to title */}
        <motion.div 
          className="absolute -top-2 left-1/2 w-[1px] h-6 bg-[var(--pencil-color)] opacity-20"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: animationComplete ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          style={{ transformOrigin: 'top' }}
        />
        
        <span className="font-patrick text-2xl md:text-3xl text-[var(--pencil-color)] tracking-wider font-bold">
          {title}
        </span>
        
        {/* Visual separator between elements */}
        <div className="flex items-center justify-center mt-2 mb-1 space-x-3">
          <motion.div 
            className="h-[3px] w-10 bg-[var(--accent-color)] opacity-50"
            initial={{ width: 0 }}
            animate={{ width: animationComplete ? '40px' : 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          />
          <motion.div 
            className="h-[5px] w-5 rounded-full bg-[var(--accent-color)] opacity-70"
            initial={{ scale: 0 }}
            animate={{ scale: animationComplete ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          />
          <motion.div 
            className="h-[3px] w-10 bg-[var(--accent-color)] opacity-50"
            initial={{ width: 0 }}
            animate={{ width: animationComplete ? '40px' : 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          />
        </div>
        
        {/* Connecting line to subtitle */}
        <motion.div 
          className="absolute -bottom-2 left-1/2 w-[1px] h-4 bg-[var(--pencil-color)] opacity-20"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: animationComplete ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          style={{ transformOrigin: 'top' }}
        />
      </div>
    </motion.div>
  );
};

export default ProfessionalTitle;
