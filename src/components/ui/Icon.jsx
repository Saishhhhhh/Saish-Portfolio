import React from 'react';
import PropTypes from 'prop-types';

/**
 * Icon mapping object
 * Simple SVG icons for common use cases
 */
const ICONS = {
  github: {
    viewBox: '0 0 24 24',
    path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
  },
  linkedin: {
    viewBox: '0 0 24 24',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z'
  },
  twitter: {
    viewBox: '0 0 24 24',
    path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'
  },
  mail: {
    viewBox: '0 0 24 24',
    path: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22,6 L12,13 L2,6'
  },
  arrow: {
    viewBox: '0 0 24 24',
    path: 'M12 5v14 M19 12l-7 7-7-7'
  },
  menu: {
    viewBox: '0 0 24 24',
    path: 'M3 12h18 M3 6h18 M3 18h18'
  },
  close: {
    viewBox: '0 0 24 24',
    path: 'M18 6L6 18 M6 6l12 12'
  }
};

/**
 * Reusable Icon component
 * @param {Object} props - Component props
 */
const Icon = ({
  name,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  className = '',
  ...props
}) => {
  // Get icon data from mapping
  const icon = ICONS[name];
  
  // Return null if icon not found
  if (!icon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d={icon.path} />
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(ICONS)).isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
  className: PropTypes.string,
};

export default Icon; 