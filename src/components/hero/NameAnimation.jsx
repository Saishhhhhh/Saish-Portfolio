import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { createSvgElement, createPencil, createRegularText, createLetterPath } from '../../utils/svg/svgHelpers';
import { getLetterSpacing, animateLetter } from '../../utils/animation/textAnimation';
import { defaultAnimationConfig } from '../../utils/animation/animationConfig';

/**
 * Animated name component with pencil writing effect
 * @param {Object} props - Component props
 * @param {string} props.name - The name to animate
 * @param {string} props.greeting - The greeting text
 * @param {Function} props.setAnimationComplete - Function to set animation complete state
 * @param {Function} props.setPencilPosition - Function to update pencil position
 */
const NameAnimation = ({ name, greeting, setAnimationComplete, setPencilPosition }) => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;
    
    // Use default animation config
    const config = defaultAnimationConfig;
    
    // Clear previous content
    const svg = svgRef.current;
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }
    
    // Set SVG dimensions
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = 400;
    svg.setAttribute("width", containerWidth);
    svg.setAttribute("height", containerHeight);
    
    // Main animation function
    async function animateText() {
      // Calculate center position
      const containerWidth = svg.getAttribute("width");
      const centerX = containerWidth / 2;
      
      // Define vertical positions for each line
      const greetingY = 70; // "Hi, I'm"
      const nameY = 50; // Name
      
      // Create and add pencil
      const pencil = createPencil();
      pencil.setAttribute("transform", `translate(-50, ${nameY}) rotate(${config.pencilAngle}) scale(${config.pencilScale})`);
      svg.appendChild(pencil);
      
      // Small delay before starting
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Add greeting text
      createRegularText(greeting, centerX, greetingY, "34", "center", svg);
      
      // Animate name with pencil animation
      const nameText = name;
      let xPos = centerX - (nameText.length * config.spacing.standard * config.scaleFactor) / 2;
      
      for (let i = 0; i < nameText.length; i++) {
        const char = nameText[i];
        const nextChar = i < nameText.length - 1 ? nameText[i + 1] : null;
        
        // Skip if no path exists
        if (!window.letterPaths || !window.letterPaths[char]) {
          console.log('No path for character:', char);
          xPos += config.spacing.standard * config.scaleFactor;
          continue;
        }
        
        // Create letter
        const letterResult = createLetterPath(char, xPos, nameY, config.scaleFactor * 1.08, window.letterPaths);
        if (!letterResult) {
          xPos += config.spacing.standard * config.scaleFactor;
          continue;
        }
        
        const { group, path } = letterResult;
        svg.appendChild(group);
        
        try {
          // Get path length
          const pathLength = path.getTotalLength();
          if (isNaN(pathLength) || pathLength <= 0) {
            console.error('Invalid path length:', pathLength);
            continue;
          }
          
          // Animate this letter
          await animateLetter(path, pathLength, xPos, nameY, pencil, config, setPencilPosition);
          
          // Move to next position
          xPos += getLetterSpacing(char, nextChar, config.spacing) * config.scaleFactor;
          
          // Pause between letters
          await new Promise(resolve => setTimeout(resolve, config.letterPause));
          
        } catch (err) {
          console.error('Error animating character:', char, err);
          xPos += config.spacing.standard * config.scaleFactor;
        }
      }
      
      // Hide pencil at the end
      pencil.setAttribute("opacity", "0");
      setAnimationComplete(true);
    }
    
    // Start the animation
    animateText();
    
  }, [name, greeting, setAnimationComplete, setPencilPosition]);
  
  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[200px] flex items-center justify-center mb-2"
    >
      <svg
        ref={svgRef}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      ></svg>
    </div>
  );
};

export default NameAnimation; 