/**
 * Site-wide configuration constants
 */

// Site metadata
export const SITE_CONFIG = {
  title: 'Saish Portfolio',
  description: 'A full-stack dev balancing frontend finesse with data science depth',
  author: 'Saish',
};

// Navigation links
export const NAV_LINKS = [
  { name: 'Home', path: '#home' },
  { name: 'Projects', path: '#projects' },
  { name: 'About', path: '#about' },
  { name: 'Skills', path: '#skills' },
  { name: 'Contact', path: '#contact' },
];

// Social media links
export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
];

// Theme colors
export const THEME_COLORS = {
  paper: '#ffffff',
  paperAlt: '#f9f7f1', // Slightly off-white for contrast
  pencil: '#333333',
  pencilLight: '#666666', // Lighter pencil color
  accent: '#4f46e5', // Indigo color for accent elements
  accentLight: '#818cf8', // Lighter version for hover states
  accentAlt: '#ec4899', // Pink accent for contrast and personality
  success: '#10b981', // Green for success states
  warning: '#f59e0b', // Amber for warning states
  error: '#ef4444', // Red for error states
};

// Animation defaults
export const ANIMATION_DEFAULTS = {
  duration: 0.5,
  staggerChildren: 0.1,
  viewportThreshold: 0.1,
}; 