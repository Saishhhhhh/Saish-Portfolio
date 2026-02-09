import React from 'react';
import { motion } from 'framer-motion';

/**
 * Hero subtitle component with animation
 * @param {Object} props - Component props
 * @param {boolean} props.animationComplete - Whether the name animation is complete
 * @param {string} props.text - The subtitle text
 */
const HeroSubtitle = ({ animationComplete, text }) => {
  // Split text into parts for staggered animation
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.04
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  // More balanced professional tone for subtitle
  const professionalSubtitle = "Blending Data Science depth with GenAI and Web-Development finesse";

  return (
    <motion.div
      className="flex justify-center mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: animationComplete ? 1 : 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="max-w-[600px] w-full mx-auto text-center">
        <div className="relative py-5 px-3">
          {/* Background decoration */}
          <motion.div
            className="absolute inset-0 border-t border-b border-[var(--pencil-color)] border-opacity-20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: animationComplete ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Subtle highlight */}
          <motion.div
            className="absolute inset-0 bg-[var(--pencil-color)] opacity-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: animationComplete ? 0.02 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Text with word-by-word animation */}
          <motion.p
            className="relative z-10 text-lg md:text-xl font-patrick text-[var(--pencil-color)] leading-relaxed"
            variants={container}
            initial="hidden"
            animate={animationComplete ? "visible" : "hidden"}
          >
            {professionalSubtitle.split(' ').map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mx-[2px]"
                variants={item}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.p>

          {/* Highlight key skills with accent color */}
          <div className="flex justify-center mt-4 gap-2 flex-wrap">
            {["LangChain", "React.js", "Deep Learning", "Machine Learning", "Keras", "FastAPI"].map((skill, i) => (
              <motion.span
                key={i}
                className="text-xs md:text-sm font-patrick px-2 py-1 rounded-full bg-[var(--paper-alt-color)] text-[var(--pencil-color)]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: animationComplete ? 0.9 : 0,
                  scale: animationComplete ? 1 : 0.8
                }}
                transition={{
                  duration: 0.3,
                  delay: animationComplete ? 0.8 + (i * 0.1) : 0
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "var(--accent-color)",
                  color: "white"
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSubtitle; 