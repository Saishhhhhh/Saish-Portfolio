/**
 * Text animation utility functions
 */

/**
 * Calculate letter spacing based on character
 * @param {string} char - The character to calculate spacing for
 * @param {string|null} nextChar - The next character (if any)
 * @param {Object} spacingConfig - Configuration for letter spacing
 * @returns {number} - The spacing value
 */
export const getLetterSpacing = (char, nextChar, spacingConfig) => {
  let spacing = spacingConfig.standard;
  
  if (/[ijl.,!]/.test(char)) {
    spacing = spacingConfig.narrow;
  } else if (/[mwW]/.test(char)) {
    spacing = spacingConfig.wide;
  }
  
  // Special case: Add extra space after 'S' if the next character is 'a'
  if (char === 'S' && nextChar === 'a') {
    spacing += 7;
  }
  
  return spacing;
};

/**
 * Animate a single letter with pencil following the path
 * @param {SVGPathElement} path - The SVG path to animate
 * @param {number} pathLength - The length of the path
 * @param {number} xPos - X position
 * @param {number} yPos - Y position
 * @param {SVGElement} pencil - The pencil SVG element
 * @param {Object} config - Animation configuration
 * @param {Function} setPencilPosition - Function to update pencil position state
 * @returns {Promise} - A promise that resolves when animation is complete
 */
export const animateLetter = async (path, pathLength, xPos, yPos, pencil, config, setPencilPosition) => {
  // Setup for animation
  path.setAttribute("stroke-dasharray", pathLength);
  path.setAttribute("stroke-dashoffset", pathLength);
  path.setAttribute("fill-opacity", "0");
  
  return new Promise(resolve => {
    const startTime = Date.now();
    
    function draw() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / config.animationDuration, 1);
      
      // Update path drawing
      path.setAttribute("stroke-dashoffset", pathLength * (1 - progress));
      
      // Gradually reveal the fill
      const fillProgress = Math.max(0, (progress - 0.2) * 1.25);
      path.setAttribute("fill-opacity", Math.min(1, fillProgress).toString());
      
      try {
        // Get current point on path for pencil position
        const currentLength = pathLength * progress;
        const point = path.getPointAtLength(currentLength);
        
        // Position pencil at current point
        const pencilX = point.x * config.scaleFactor + xPos;
        const pencilY = point.y * config.scaleFactor + yPos;
        pencil.setAttribute("transform", 
          `translate(${pencilX}, ${pencilY}) rotate(${config.pencilAngle}) scale(${config.pencilScale})`);
        
        // Update React state for pencil position
        setPencilPosition({ x: pencilX, y: pencilY });
        
      } catch (err) {
        console.error('Error positioning pencil:', err);
      }
      
      if (progress < 1) {
        requestAnimationFrame(draw);
      } else {
        resolve();
      }
    }
    
    requestAnimationFrame(draw);
  });
}; 