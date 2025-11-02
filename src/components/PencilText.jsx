import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const PencilText = ({ text = "Saish", fontSize = 60, color = "#333333", duration = 0.5, delay = 0.1, className = "" }) => {
  const svgRef = useRef(null);
  const pencilRef = useRef(null);
  const [paths, setPaths] = useState([]);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const [pencilPosition, setPencilPosition] = useState({ x: 0, y: 0 });
  
  // Create SVG paths for each letter
  useEffect(() => {
    if (!svgRef.current) return;
    
    const svg = svgRef.current;
    const letters = text.split('');
    const letterPaths = [];
    
    // Clear any existing text
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }
    
    // Create text element to get path data
    const svgNS = "http://www.w3.org/2000/svg";
    const textElement = document.createElementNS(svgNS, "text");
    textElement.setAttribute("x", "10");
    textElement.setAttribute("y", fontSize);
    textElement.setAttribute("font-size", `${fontSize}px`);
    textElement.setAttribute("font-family", "Caveat, cursive");
    textElement.setAttribute("fill", "none");
    textElement.setAttribute("stroke", color);
    textElement.setAttribute("stroke-width", "1");
    textElement.textContent = text;
    
    svg.appendChild(textElement);
    
    // Get bounding box for the entire text
    const textBBox = textElement.getBBox();
    
    // Set viewBox based on text dimensions
    svg.setAttribute("viewBox", `0 0 ${textBBox.width + 40} ${textBBox.height + 20}`);
    
    // Remove the temporary text element
    svg.removeChild(textElement);
    
    // Create individual letter elements and get their paths
    let xOffset = 10;
    letters.forEach((letter, index) => {
      const letterElement = document.createElementNS(svgNS, "text");
      letterElement.setAttribute("x", `${xOffset}`);
      letterElement.setAttribute("y", fontSize);
      letterElement.setAttribute("font-size", `${fontSize}px`);
      letterElement.setAttribute("font-family", "Caveat, cursive");
      letterElement.setAttribute("fill", "none");
      letterElement.setAttribute("stroke", color);
      letterElement.setAttribute("stroke-width", "1");
      letterElement.setAttribute("stroke-linecap", "round");
      letterElement.setAttribute("stroke-linejoin", "round");
      letterElement.textContent = letter;
      
      svg.appendChild(letterElement);
      
      // Get path data for this letter
      const letterBBox = letterElement.getBBox();
      
      // Create a path for each letter
      const path = document.createElementNS(svgNS, "path");
      path.setAttribute("id", `letter-${index}`);
      path.setAttribute("d", `M${xOffset},${fontSize} L${xOffset + letterBBox.width},${fontSize}`);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "transparent");
      path.setAttribute("stroke-width", "1");
      
      // Store path data
      letterPaths.push({
        letter,
        element: letterElement,
        path,
        x: xOffset,
        y: fontSize,
        width: letterBBox.width,
        height: letterBBox.height
      });
      
      // Update x offset for next letter
      xOffset += letterBBox.width + 2;
    });
    
    setPaths(letterPaths);
    
    // Start with pencil at the beginning
    if (letterPaths.length > 0) {
      setPencilPosition({ 
        x: letterPaths[0].x - 20, 
        y: letterPaths[0].y - fontSize/2 
      });
    }
    
    return () => {
      // Cleanup
      while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
      }
    };
  }, [text, fontSize, color]);
  
  // Animation effect for drawing letters
  useEffect(() => {
    if (paths.length === 0 || currentLetterIndex >= paths.length) return;
    
    const currentPath = paths[currentLetterIndex];
    setIsDrawing(true);
    
    // Animate pencil to current letter position
    const pencil = pencilRef.current;
    if (pencil) {
      // Move pencil to start of current letter
      const startX = currentPath.x;
      const startY = currentPath.y - fontSize/2;
      
      // Animate pencil to draw the letter
      const animatePencil = async () => {
        // Move to start position
        setPencilPosition({ x: startX, y: startY });
        
        // Delay before starting to draw
        await new Promise(resolve => setTimeout(resolve, delay * 1000));
        
        // Animate drawing the letter
        const steps = 20;
        const stepDuration = (duration * 1000) / steps;
        
        for (let i = 0; i <= steps; i++) {
          const progress = i / steps;
          setPencilPosition({
            x: startX + (currentPath.width * progress),
            y: startY + (Math.sin(progress * Math.PI) * 5) // Add a slight up and down motion
          });
          await new Promise(resolve => setTimeout(resolve, stepDuration));
        }
        
        // Show the letter
        currentPath.element.setAttribute("fill", color);
        currentPath.element.setAttribute("stroke", "none");
        
        // Move to next letter after a delay
        setTimeout(() => {
          setCurrentLetterIndex(prev => prev + 1);
          setIsDrawing(false);
        }, delay * 1000);
      };
      
      animatePencil();
    }
  }, [currentLetterIndex, paths, isDrawing, fontSize, delay, duration, color]);
  
  return (
    <div className={`relative ${className}`}>
      <svg 
        ref={svgRef} 
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Letters will be added here dynamically */}
      </svg>
      
      {/* Animated pencil */}
      <motion.div 
        ref={pencilRef}
        className="absolute w-8 h-8"
        style={{
          left: pencilPosition.x,
          top: pencilPosition.y,
          opacity: currentLetterIndex < paths.length ? 1 : 0,
          transition: 'opacity 0.5s ease'
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

export default PencilText; 