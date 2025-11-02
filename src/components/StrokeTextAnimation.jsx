import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const StrokeTextAnimation = ({ text = "Saish", color = "#333333", strokeWidth = 2, duration = 2, delay = 0.5, className = "" }) => {
  const svgRef = useRef(null);
  const [paths, setPaths] = useState([]);
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const [pencilPosition, setPencilPosition] = useState({ x: 0, y: 0 });
  const [animationComplete, setAnimationComplete] = useState(false);
  
  // Create SVG paths from text
  useEffect(() => {
    const createTextPaths = async () => {
      if (!svgRef.current) return;
      
      // Clear previous content
      while (svgRef.current.firstChild) {
        svgRef.current.removeChild(svgRef.current.firstChild);
      }
      
      // Create temporary text element to get dimensions
      const svgNS = "http://www.w3.org/2000/svg";
      const tempText = document.createElementNS(svgNS, "text");
      tempText.setAttribute("x", "10");
      tempText.setAttribute("y", "50");
      tempText.setAttribute("font-family", "Caveat, cursive");
      tempText.setAttribute("font-size", "60");
      tempText.setAttribute("fill", "none");
      tempText.setAttribute("stroke", color);
      tempText.setAttribute("stroke-width", strokeWidth);
      tempText.textContent = text;
      
      svgRef.current.appendChild(tempText);
      
      // Get bounding box
      const bbox = tempText.getBBox();
      setSvgDimensions({ 
        width: bbox.width + 40, 
        height: bbox.height + 40 
      });
      
      // Set viewBox
      svgRef.current.setAttribute("viewBox", `0 0 ${bbox.width + 40} ${bbox.height + 40}`);
      
      // Remove temporary text
      svgRef.current.removeChild(tempText);
      
      // Create text path
      const textPath = document.createElementNS(svgNS, "path");
      textPath.setAttribute("id", "text-path");
      textPath.setAttribute("d", await getTextPathData(text));
      textPath.setAttribute("fill", "none");
      textPath.setAttribute("stroke", color);
      textPath.setAttribute("stroke-width", strokeWidth);
      textPath.setAttribute("stroke-linecap", "round");
      textPath.setAttribute("stroke-linejoin", "round");
      
      // Get path length
      svgRef.current.appendChild(textPath);
      const pathLength = textPath.getTotalLength();
      
      // Set initial dash array and offset
      textPath.setAttribute("stroke-dasharray", pathLength);
      textPath.setAttribute("stroke-dashoffset", pathLength);
      
      // Store path data
      setPaths([{
        element: textPath,
        length: pathLength,
        id: "text-path"
      }]);
      
      // Set initial pencil position
      const pathPoint = textPath.getPointAtLength(0);
      setPencilPosition({ 
        x: pathPoint.x, 
        y: pathPoint.y 
      });
    };
    
    createTextPaths();
  }, [text, color, strokeWidth]);
  
  // Function to generate SVG path data for text
  const getTextPathData = async (text) => {
    // This is a simplified approach - in a real app, you would use a library
    // or backend service to generate proper path data from text
    
    // For this demo, we'll create a simple curved path for the text
    const baseline = 50;
    const startX = 20;
    let pathData = `M${startX},${baseline}`;
    
    // Create a wavy path for the text
    const letterWidth = 40;
    const amplitude = 10;
    const frequency = 0.5;
    
    for (let i = 0; i < text.length; i++) {
      const x = startX + (i + 1) * letterWidth;
      const y = baseline + Math.sin(i * frequency) * amplitude;
      pathData += ` Q${x - letterWidth/2},${y - amplitude} ${x},${y}`;
    }
    
    return pathData;
  };
  
  // Animate the path drawing
  useEffect(() => {
    if (paths.length === 0) return;
    
    const path = paths[0].element;
    const pathLength = paths[0].length;
    
    // Animate path drawing
    const animatePath = () => {
      const startTime = performance.now();
      const animationDuration = duration * 1000;
      
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);
        const currentOffset = pathLength * (1 - progress);
        
        // Update path offset
        path.setAttribute("stroke-dashoffset", currentOffset);
        
        // Update pencil position
        if (progress < 1) {
          const point = path.getPointAtLength(progress * pathLength);
          setPencilPosition({ x: point.x, y: point.y });
          requestAnimationFrame(animate);
        } else {
          // Animation complete
          setAnimationComplete(true);
          // Final position
          const point = path.getPointAtLength(pathLength);
          setPencilPosition({ x: point.x, y: point.y });
        }
      };
      
      // Start animation after delay
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, delay * 1000);
    };
    
    animatePath();
    
    // Add text element that follows the path
    const svgNS = "http://www.w3.org/2000/svg";
    const textElement = document.createElementNS(svgNS, "text");
    textElement.setAttribute("fill", color);
    textElement.setAttribute("font-family", "Caveat, cursive");
    textElement.setAttribute("font-size", "60");
    
    const textPath = document.createElementNS(svgNS, "textPath");
    textPath.setAttribute("href", "#text-path");
    textPath.textContent = text;
    textPath.setAttribute("startOffset", "0%");
    
    textElement.appendChild(textPath);
    svgRef.current.appendChild(textElement);
    
    // Set opacity to 0 initially
    textElement.setAttribute("opacity", "0");
    
    // Fade in text as path is drawn
    const fadeInText = () => {
      const startTime = performance.now();
      const fadeDuration = duration * 1000 * 0.5;
      const fadeDelay = duration * 1000 * 0.5;
      
      const animateFade = (currentTime) => {
        const elapsed = currentTime - startTime - fadeDelay;
        
        if (elapsed < 0) {
          requestAnimationFrame(animateFade);
          return;
        }
        
        const progress = Math.min(elapsed / fadeDuration, 1);
        textElement.setAttribute("opacity", progress);
        
        if (progress < 1) {
          requestAnimationFrame(animateFade);
        }
      };
      
      // Start fade animation
      setTimeout(() => {
        requestAnimationFrame(animateFade);
      }, delay * 1000);
    };
    
    fadeInText();
    
  }, [paths, duration, delay, color]);
  
  return (
    <div className={`relative ${className}`}>
      <svg 
        ref={svgRef} 
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
        style={{ 
          width: svgDimensions.width, 
          height: svgDimensions.height 
        }}
      />
      
      {/* Animated pencil */}
      <motion.div 
        className="absolute w-8 h-8 pointer-events-none"
        style={{
          left: pencilPosition.x - 4,
          top: pencilPosition.y - 16,
          opacity: animationComplete ? 0 : 1,
          transition: 'opacity 0.5s ease'
        }}
        animate={{
          rotate: 30
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.06 9L15 9.94L5.92 19H5V18.08L14.06 9Z" fill="#4B5563"/>
          <path d="M17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3Z" fill="#4B5563"/>
          <path d="M14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </div>
  );
};

export default StrokeTextAnimation; 