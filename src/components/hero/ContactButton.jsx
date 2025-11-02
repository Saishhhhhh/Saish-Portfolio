import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../ui/Icon';

/**
 * Floating contact button component
 */
const ContactButton = () => {
  return (
    <motion.a
      href="#contact"
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[var(--pencil-color)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon 
        name="mail" 
        size={20} 
        color="white" 
        strokeWidth={2} 
      />
    </motion.a>
  );
};

export default ContactButton; 