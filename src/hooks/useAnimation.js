import { useState, useEffect } from 'react';
import { ANIMATION_DEFAULTS } from '../constants/config';

/**
 * Custom hook for handling animations
 * @param {Object} options - Animation options
 * @param {number} options.delay - Delay before animation starts (in seconds)
 * @param {number} options.duration - Animation duration (in seconds)
 * @param {boolean} options.triggerOnMount - Whether to trigger animation on mount
 * @returns {Object} Animation state and control functions
 */
const useAnimation = ({
  delay = 0,
  duration = ANIMATION_DEFAULTS.duration,
  triggerOnMount = true,
} = {}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  // Animation variants for framer-motion
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration,
        delay,
      }
    },
  };
  
  // Start animation
  const startAnimation = () => {
    setIsAnimating(true);
    
    // Set animation complete after duration + delay
    const timer = setTimeout(() => {
      setIsComplete(true);
      setIsAnimating(false);
    }, (duration + delay) * 1000);
    
    return () => clearTimeout(timer);
  };
  
  // Reset animation
  const resetAnimation = () => {
    setIsAnimating(false);
    setIsComplete(false);
  };
  
  // Start animation on mount if triggerOnMount is true
  useEffect(() => {
    if (triggerOnMount) {
      startAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return {
    isAnimating,
    isComplete,
    startAnimation,
    resetAnimation,
    variants,
  };
};

export default useAnimation; 