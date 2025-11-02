import React from 'react';
import { motion } from 'framer-motion';

/**
 * Personal touch component with elements that help visitors connect
 * @param {Object} props - Component props
 * @param {boolean} props.animationComplete - Whether the name animation is complete
 */
const PersonalTouch = ({ animationComplete }) => {
  // Personal interests/traits to display
  const personalTraits = [
    { emoji: "☕", text: "Coffee enthusiast" },
    { emoji: "🌱", text: "Plant parent" },
    { emoji: "🎮", text: "Casual gamer" },
    { emoji: "📚", text: "Avid reader" },
    { emoji: "🏃", text: "Morning runner" }
  ];
  
  // Random selection of 3 traits to display
  const selectedTraits = personalTraits
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  
  return (
    <motion.div
      className="absolute bottom-4 right-4 md:right-8 flex items-center"
      initial={{ opacity: 0, x: 20 }}
      animate={{ 
        opacity: animationComplete ? 1 : 0, 
        x: animationComplete ? 0 : 20 
      }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <div className="flex flex-col items-end">
        <motion.div 
          className="text-xs text-[var(--pencil-light-color)] mb-1 font-patrick"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationComplete ? 0.8 : 0 }}
          transition={{ delay: 1.7 }}
        >
          When I'm not coding...
        </motion.div>
        
        <div className="flex space-x-2">
          {selectedTraits.map((trait, index) => (
            <motion.div
              key={index}
              className="flex items-center bg-[var(--paper-alt-color)] px-2 py-1 rounded-full shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: animationComplete ? 1.8 + (index * 0.1) : 999,
                type: "spring",
                stiffness: 500,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "var(--accent-light)",
                color: "white"
              }}
            >
              <span className="mr-1">{trait.emoji}</span>
              <span className="text-xs font-patrick">{trait.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalTouch; 