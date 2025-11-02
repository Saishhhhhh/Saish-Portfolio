import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * Reusable Section component for consistent section styling
 * @param {Object} props - Component props
 */
const Section = ({ 
  children, 
  id, 
  className = '', 
  title,
  subtitle,
  fullHeight = true,
  ...props 
}) => {
  return (
    <section 
      id={id}
      className={`py-20 relative ${fullHeight ? 'min-h-screen' : ''} ${className}`}
      {...props}
    >
      <div className="container mx-auto px-4">
        {title && (
          <motion.h2 
            className="text-4xl md:text-5xl font-caveat font-bold text-center mb-6 text-[var(--pencil-color)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
        )}
        
        {subtitle && (
          <motion.p
            className="text-xl text-center mb-16 max-w-3xl mx-auto text-[var(--pencil-color)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        )}
        
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  fullHeight: PropTypes.bool,
};

export default Section; 