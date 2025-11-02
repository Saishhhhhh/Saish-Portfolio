import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../ui/Icon';
import { SOCIAL_LINKS } from '../../constants/config';

/**
 * Social media links component with animation
 * @param {Object} props - Component props
 * @param {boolean} props.animationComplete - Whether the name animation is complete
 */
const SocialLinks = ({ animationComplete }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="flex justify-center mt-4 mb-10"
      variants={container}
      initial="hidden"
      animate={animationComplete ? "show" : "hidden"}
    >
      <div className="relative px-12 py-1">
        {/* Decorative line */}
        <motion.div 
          className="absolute top-1/2 left-0 h-[1px] bg-[var(--pencil-color)] opacity-20"
          style={{ width: '100%', transformOrigin: 'center' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: animationComplete ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        />
        
        {/* Social links */}
        <div className="flex space-x-5 relative bg-white px-4">
          {SOCIAL_LINKS.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              variants={item}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute -inset-2 rounded-full bg-[var(--pencil-color)] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <Icon 
                name={link.icon} 
                size={20} 
                className="text-[var(--pencil-color)] opacity-60 group-hover:opacity-100 transition-opacity"
              />
              <motion.span 
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-patrick opacity-0 group-hover:opacity-70 whitespace-nowrap"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 0, y: -5 }}
                whileHover={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
              </motion.span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SocialLinks; 