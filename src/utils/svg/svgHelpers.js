/**
 * SVG Helper functions for creating and manipulating SVG elements
 */

/**
 * Create an SVG element with the proper namespace
 * @param {string} type - The type of SVG element to create
 * @returns {SVGElement} - The created SVG element
 */
export const createSvgElement = (type) => {
  const svgNS = "http://www.w3.org/2000/svg";
  return document.createElementNS(svgNS, type);
};

/**
 * Create a pencil SVG element
 * @returns {SVGElement} - The pencil SVG element
 */
export const createPencil = () => {
  const pencil = createSvgElement("g");
  pencil.setAttribute("id", "pencil");
  
  // Pencil shadow
  const pencilShadow = createSvgElement("ellipse");
  pencilShadow.setAttribute("cx", "0");
  pencilShadow.setAttribute("cy", "3");
  pencilShadow.setAttribute("rx", "7");
  pencilShadow.setAttribute("ry", "2");
  pencilShadow.setAttribute("fill", "rgba(0,0,0,0.2)");
  pencilShadow.setAttribute("filter", "blur(2px)");
  pencil.appendChild(pencilShadow);
  
  // Pencil wood body
  const pencilBody = createSvgElement("path");
  pencilBody.setAttribute("d", "M-6,-60 L6,-60 L6,-6 L0,0 L-6,-6 Z");
  pencilBody.setAttribute("fill", "#F9C74F");
  pencil.appendChild(pencilBody);
  
  // Pencil wood details (stripes)
  const woodDetail1 = createSvgElement("path");
  woodDetail1.setAttribute("d", "M-2.5,-60 L-2.5,-6 L-1,-5 L-1,-60 Z");
  woodDetail1.setAttribute("fill", "#F3A712");
  pencil.appendChild(woodDetail1);
  
  // Another wood stripe
  const woodDetail2 = createSvgElement("path");
  woodDetail2.setAttribute("d", "M2,-60 L2,-6 L3.5,-7 L3.5,-60 Z");
  woodDetail2.setAttribute("fill", "#F3A712");
  pencil.appendChild(woodDetail2);
  
  // Pencil tip
  const pencilTip = createSvgElement("path");
  pencilTip.setAttribute("d", "M-6,-6 L0,0 L6,-6 L6,-12 L-6,-12 Z");
  pencilTip.setAttribute("fill", "#6C757D");
  pencil.appendChild(pencilTip);
  
  // Pencil lead point
  const pencilLead = createSvgElement("path");
  pencilLead.setAttribute("d", "M-1.5,-6 L0,0 L1.5,-6 Z");
  pencilLead.setAttribute("fill", "#343A40");
  pencil.appendChild(pencilLead);
  
  // Pencil eraser holder
  const eraserHolder = createSvgElement("rect");
  eraserHolder.setAttribute("x", "-5");
  eraserHolder.setAttribute("y", "-66");
  eraserHolder.setAttribute("width", "10");
  eraserHolder.setAttribute("height", "6");
  eraserHolder.setAttribute("fill", "#CED4DA");
  pencil.appendChild(eraserHolder);
  
  // Pencil eraser
  const eraser = createSvgElement("rect");
  eraser.setAttribute("x", "-4.5");
  eraser.setAttribute("y", "-72");
  eraser.setAttribute("width", "9");
  eraser.setAttribute("height", "6");
  eraser.setAttribute("rx", "1.5");
  eraser.setAttribute("ry", "1.5");
  eraser.setAttribute("fill", "#FF6B6B");
  pencil.appendChild(eraser);
  
  return pencil;
};

/**
 * Create a regular text element with Patrick Hand font
 * @param {string} text - The text content
 * @param {number} xPos - X position
 * @param {number} yPos - Y position
 * @param {string} fontSize - Font size
 * @param {string} alignment - Text alignment (left or center)
 * @param {SVGElement} svg - The SVG element to append to
 * @returns {number} - The computed text length
 */
export const createRegularText = (text, xPos, yPos, fontSize, alignment = "left", svg) => {
  const textGroup = createSvgElement("g");
  const textElement = createSvgElement("text");
  
  textElement.setAttribute("x", xPos);
  textElement.setAttribute("y", yPos);
  textElement.setAttribute("font-family", "Patrick Hand, cursive");
  textElement.setAttribute("font-size", fontSize);
  textElement.setAttribute("fill", "var(--pencil-color)");
  
  if (alignment === "center") {
    textElement.setAttribute("text-anchor", "middle");
  }
  
  textElement.textContent = text;
  
  textGroup.appendChild(textElement);
  svg.appendChild(textGroup);
  return textElement.getComputedTextLength ? textElement.getComputedTextLength() : text.length * (fontSize / 2);
};

/**
 * Create a letter path for animation
 * @param {string} char - The character to create a path for
 * @param {number} xPos - X position
 * @param {number} yPos - Y position
 * @param {number} scaleFactor - Scale factor
 * @param {Object} letterPaths - Object containing SVG paths for letters
 * @returns {Object|null} - The letter group and path, or null if no path exists
 */
export const createLetterPath = (char, xPos, yPos, scaleFactor, letterPaths) => {
  if (!letterPaths[char]) {
    console.log('No path for character:', char);
    return null;
  }
  
  const letterGroup = createSvgElement("g");
  letterGroup.setAttribute("transform", `translate(${xPos}, ${yPos}) scale(${scaleFactor})`);
  
  const path = createSvgElement("path");
  path.setAttribute("d", letterPaths[char]);
  path.setAttribute("fill", "var(--pencil-color)");
  path.setAttribute("stroke", "var(--pencil-color)");
  path.setAttribute("stroke-width", "1");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  
  letterGroup.appendChild(path);
  return { group: letterGroup, path };
}; 