/**
 * Common animation variants for framer-motion
 */

/**
 * Fade in animation
 * @param {Object} options - Animation options
 * @returns {Object} Framer motion variants
 */
export const fadeIn = ({ 
  direction = null, 
  duration = 0.5, 
  delay = 0,
  distance = 20
} = {}) => {
  const variants = {
    hidden: { 
      opacity: 0,
    },
    visible: { 
      opacity: 1,
      transition: {
        duration,
        delay,
      }
    },
  };

  // Add directional animation if specified
  if (direction === 'up') {
    variants.hidden.y = distance;
  } else if (direction === 'down') {
    variants.hidden.y = -distance;
  } else if (direction === 'left') {
    variants.hidden.x = distance;
  } else if (direction === 'right') {
    variants.hidden.x = -distance;
  }

  return variants;
};

/**
 * Staggered children animation
 * @param {Object} options - Animation options
 * @returns {Object} Framer motion variants
 */
export const staggerContainer = ({
  staggerChildren = 0.1,
  delayChildren = 0,
} = {}) => {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      }
    }
  };
};

/**
 * Scale animation
 * @param {Object} options - Animation options
 * @returns {Object} Framer motion variants
 */
export const scaleAnimation = ({
  duration = 0.5,
  delay = 0,
  initialScale = 0.9,
} = {}) => {
  return {
    hidden: {
      opacity: 0,
      scale: initialScale,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
      }
    }
  };
};

/**
 * Hover animation
 * @param {Object} options - Animation options
 * @returns {Object} Framer motion hover variants
 */
export const hoverAnimation = ({
  scale = 1.05,
  rotate = 0,
  y = 0,
} = {}) => {
  return {
    scale,
    rotate,
    y,
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 10 
    }
  };
}; 