import { useState, useEffect } from 'react';

/**
 * Custom hook for handling scroll-related functionality
 * @param {Object} options - Scroll options
 * @param {number} options.threshold - Scroll threshold in pixels
 * @returns {Object} Scroll state and utility functions
 */
const useScroll = ({ threshold = 100 } = {}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [direction, setDirection] = useState(null); // 'up' or 'down'
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Handle scroll event
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // Update scroll position
    setScrollY(currentScrollY);
    
    // Determine if scrolled past threshold
    setIsScrolled(currentScrollY > threshold);
    
    // Determine scroll direction
    if (currentScrollY > lastScrollY) {
      setDirection('down');
    } else if (currentScrollY < lastScrollY) {
      setDirection('up');
    }
    
    // Update last scroll position
    setLastScrollY(currentScrollY);
  };
  
  // Scroll to element by ID
  const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, lastScrollY]);
  
  return {
    scrollY,
    isScrolled,
    direction,
    scrollToElement,
    scrollToTop
  };
};

export default useScroll; 