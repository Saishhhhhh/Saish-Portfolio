import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Reusable Button component with animation
 * @param {Object} props - Component props
 */
const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  delay = 0,
  show = true,
  ...props 
}) => {
  // Define styles based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[var(--accent-color)] text-white';
      case 'outline':
        return 'bg-transparent border-2 border-[var(--pencil-color)] text-[var(--pencil-color)]';
      case 'ghost':
        return 'bg-transparent text-[var(--pencil-color)] hover:bg-gray-100';
      default:
        return 'bg-[var(--accent-color)] text-white';
    }
  };

  const baseStyles = 'px-6 py-2.5 md:px-8 md:py-3 font-patrick text-base md:text-xl rounded-md shadow-md transition-all duration-300 relative overflow-hidden group';
  const buttonStyles = `${baseStyles} ${getVariantStyles()} ${className}`;

  // Determine internal vs external/hash links
  const isInternalLink = typeof href === 'string' && href.startsWith('/') && !href.startsWith('//');

  // Choose animated component based on link type
  const MotionLink = motion(Link);
  const Component = href ? (isInternalLink ? MotionLink : motion.a) : motion.button;
  
  return (
    <Component
      {...(href ? (isInternalLink ? { to: href } : { href }) : {})}
      className={buttonStyles}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: show ? 1 : 0, 
        scale: show ? 1 : 0.9,
        y: show ? [5, 0] : 5
      }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 300,
        damping: 15
      }}
      {...props}
    >
      {/* Hover effect overlay */}
      <span className="absolute inset-0 w-full h-full">
        {/* Animated underline effect */}
        <motion.span 
          className={`absolute bottom-0 left-0 h-[3px] ${variant === 'primary' ? 'bg-white' : 'bg-[var(--pencil-color)]'} opacity-60`}
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Handwritten circle effect */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M20,50 C20,30 35,20 50,20 C65,20 80,30 80,50 C80,70 65,80 50,80 C35,80 20,70 20,50 Z"
            stroke={variant === 'primary' ? 'white' : 'var(--pencil-color)'}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileHover={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </svg>
        
        {/* Handwritten arrow effect */}
        <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 24 24">
          <motion.path
            d="M5,12 L19,12 M13,6 L19,12 L13,18"
            stroke={variant === 'primary' ? 'white' : 'var(--pencil-color)'}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, x: -5, opacity: 0 }}
            whileHover={{ pathLength: 1, x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </svg>
      </span>
      
      {/* Button text with subtle hover animation */}
      <motion.span 
        className="relative z-10 block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.span>
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'outline', 'ghost']),
  className: PropTypes.string,
  delay: PropTypes.number,
  show: PropTypes.bool,
};

export default Button; 