import React from 'react';
import { motion } from 'framer-motion';

/**
 * Decorative elements component with data science and web dev themed animations
 * @param {Object} props - Component props
 * @param {boolean} props.animationComplete - Whether the name animation is complete
 */
const DecorativeElements = ({ animationComplete }) => {
  // Animation variants for decorative elements
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <>
      {/* Code bracket element */}
      <motion.div 
        className="absolute top-20 right-[15%] w-32 h-32 pointer-events-none"
        initial="hidden"
        animate={animationComplete ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.path
            d="M35,20 L20,50 L35,80"
            fill="none"
            stroke="var(--accent-color)"
            strokeWidth="2"
            strokeDasharray="150"
            strokeDashoffset="150"
            strokeLinecap="round"
            animate={{ strokeDashoffset: animationComplete ? 0 : 150 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            opacity="0.3"
          />
          <motion.path
            d="M65,20 L80,50 L65,80"
            fill="none"
            stroke="var(--accent-color)"
            strokeWidth="2"
            strokeDasharray="150"
            strokeDashoffset="150"
            strokeLinecap="round"
            animate={{ strokeDashoffset: animationComplete ? 0 : 150 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
            opacity="0.3"
          />
        </svg>
      </motion.div>

      {/* Tech stack icons */}
      <motion.div
        className="absolute bottom-[20%] left-[10%] w-32 h-32 pointer-events-none"
        initial="hidden"
        animate={animationComplete ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* React logo */}
          <motion.g opacity="0.3">
            <motion.circle
              cx="50" cy="50" r="10"
              fill="none" stroke="var(--pencil-color)" strokeWidth="1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: animationComplete ? 0.5 : 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            />
            <motion.ellipse
              cx="50" cy="50" rx="25" ry="10"
              fill="none" stroke="var(--pencil-color)" strokeWidth="1.5"
              strokeDasharray="160" strokeDashoffset="160"
              animate={{ strokeDashoffset: animationComplete ? 0 : 160 }}
              transition={{ duration: 1.2, delay: 1.6, ease: "easeInOut" }}
            />
            <motion.ellipse
              cx="50" cy="50" rx="25" ry="10"
              fill="none" stroke="var(--pencil-color)" strokeWidth="1.5"
              transform="rotate(60 50 50)"
              strokeDasharray="160" strokeDashoffset="160"
              animate={{ strokeDashoffset: animationComplete ? 0 : 160 }}
              transition={{ duration: 1.2, delay: 1.7, ease: "easeInOut" }}
            />
            <motion.ellipse
              cx="50" cy="50" rx="25" ry="10"
              fill="none" stroke="var(--pencil-color)" strokeWidth="1.5"
              transform="rotate(120 50 50)"
              strokeDasharray="160" strokeDashoffset="160"
              animate={{ strokeDashoffset: animationComplete ? 0 : 160 }}
              transition={{ duration: 1.2, delay: 1.8, ease: "easeInOut" }}
            />
          </motion.g>
        </svg>
      </motion.div>

      {/* Data science visualization element */}
      <motion.div
        className="absolute top-[60%] right-[12%] w-28 h-28 pointer-events-none"
        initial="hidden"
        animate={animationComplete ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Neural network nodes and connections */}
          {[
            { cx: 50, cy: 20, r: 5 }, // Input layer
            { cx: 30, cy: 20, r: 5 },
            { cx: 70, cy: 20, r: 5 },
            { cx: 20, cy: 50, r: 5 }, // Hidden layer
            { cx: 50, cy: 50, r: 5 },
            { cx: 80, cy: 50, r: 5 },
            { cx: 35, cy: 80, r: 5 }, // Output layer
            { cx: 65, cy: 80, r: 5 }
          ].map((node, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill="none"
              stroke="var(--pencil-color)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: animationComplete ? 0.3 : 0 }}
              transition={{ duration: 0.3, delay: 2 + i * 0.1 }}
            />
          ))}
          
          {/* Connections between nodes */}
          <motion.path
            d="M30,20 L20,50 M30,20 L50,50 M30,20 L80,50 M50,20 L20,50 M50,20 L50,50 M50,20 L80,50 M70,20 L20,50 M70,20 L50,50 M70,20 L80,50 M20,50 L35,80 M20,50 L65,80 M50,50 L35,80 M50,50 L65,80 M80,50 L35,80 M80,50 L65,80"
            fill="none"
            stroke="var(--pencil-color)"
            strokeWidth="0.5"
            strokeDasharray="400"
            strokeDashoffset="400"
            animate={{ strokeDashoffset: animationComplete ? 0 : 400 }}
            transition={{ duration: 2, delay: 2.5, ease: "easeInOut" }}
            opacity="0.2"
          />
        </svg>
      </motion.div>
    </>
  );
};

export default DecorativeElements; 