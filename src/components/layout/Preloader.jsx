import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const Preloader = () => {
  const preloaderRef = useRef(null);
  const pencilRef = useRef(null);
  const pathRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [shavings, setShavings] = useState([]);
  const loadingTexts = [
    "Sharpening pencils...",
    "Drawing lines...",
    "Sketching ideas...",
    "Almost ready..."
  ];
  const [currentText, setCurrentText] = useState(0);
  
  useEffect(() => {
    // Create paper shavings
    const initialShavings = [];
    for (let i = 0; i < 8; i++) {
      initialShavings.push({
        id: i,
        x: Math.random() * 100,
        y: -20,
        rotation: Math.random() * 360,
        delay: Math.random() * 2,
      });
    }
    setShavings(initialShavings);
    
    const tl = gsap.timeline();
    
    // Animate path drawing
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = pathLength;
      pathRef.current.style.strokeDashoffset = pathLength;
      
      tl.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.inOut",
      });
    }
    
    // Animate pencil movement along path
    if (pencilRef.current) {
      const pencil = pencilRef.current;
      gsap.set(pencil, { x: 50, y: 150, rotation: 0, scale: 1 });
      
      // Simulate pencil following the path
      tl.to(pencil, {
        x: 150,
        rotation: 15,
        duration: 0.5,
        ease: "power2.inOut",
      }, 0)
      .to(pencil, {
        x: 200,
        rotation: -10,
        duration: 0.5,
        ease: "power2.inOut",
      }, "-=0.3")
      .to(pencil, {
        x: 250,
        rotation: 0,
        duration: 0.5,
        ease: "power2.inOut",
      }, "-=0.3")
      .to(pencil, {
        scale: 0.8,
        opacity: 0.7,
        duration: 0.3,
      }, "-=0.2");
    }
    
    // Progress animation
    let progressValue = 0;
    const progressInterval = setInterval(() => {
      progressValue += Math.random() * 15 + 5;
      if (progressValue >= 100) {
        progressValue = 100;
        clearInterval(progressInterval);
      }
      setProgress(progressValue);
      
      // Change loading text based on progress
      if (progressValue > 25 && currentText === 0) {
        setCurrentText(1);
      } else if (progressValue > 50 && currentText === 1) {
        setCurrentText(2);
      } else if (progressValue > 75 && currentText === 2) {
        setCurrentText(3);
      }
    }, 150);
    
    // Animate paper shavings falling
    initialShavings.forEach((shaving, i) => {
      const shavingEl = document.querySelector(`.shaving-${i}`);
      if (shavingEl) {
        gsap.to(shavingEl, {
          y: window.innerHeight + 50,
          x: `+=${(Math.random() - 0.5) * 100}`,
          rotation: shaving.rotation + 360,
          opacity: 0,
          duration: 3 + Math.random() * 2,
          delay: shaving.delay,
          repeat: -1,
          ease: "none",
        });
      }
    });
    
    return () => {
      tl.kill();
      clearInterval(progressInterval);
    };
  }, [currentText]);
  
  useEffect(() => {
    // Prevent body scroll when preloader is active
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div 
      ref={preloaderRef}
      className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen flex flex-col items-center justify-center old-paper-bg z-[9999] overflow-hidden"
      style={{ 
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        minHeight: '100vh',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="preloader-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="var(--pencil-color)" strokeWidth="0.5" strokeDasharray="2,3" opacity="0.2" />
            </pattern>
            <pattern id="preloader-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.8" fill="var(--pencil-color)" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#preloader-grid)" />
          <rect width="100%" height="100%" fill="url(#preloader-dots)" />
        </svg>
      </div>
      
      {/* Paper shavings */}
      {shavings.map((shaving, i) => (
        <motion.div
          key={i}
          className={`shaving-${i} absolute`}
          style={{
            left: `${shaving.x}%`,
            top: `${shaving.y}px`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" className="text-[var(--paper-burnt)] opacity-60">
            <path
              d="M2,10 Q10,5 15,10 Q10,15 2,10"
              fill="currentColor"
              transform={`rotate(${shaving.rotation} 10 10)`}
            />
          </svg>
        </motion.div>
      ))}
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Name with pencil drawing animation */}
        <div className="relative mb-12">
          <svg 
            viewBox="0 0 400 200" 
            className="w-full max-w-md h-auto"
          >
            {/* Path that will be drawn */}
            <path
              ref={pathRef}
              id="namePath"
              d="M 50 150 Q 100 120 150 150 Q 200 180 250 150 Q 300 120 350 150"
              fill="none"
              stroke="var(--pencil-color)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            
            {/* Pencil SVG */}
            <g ref={pencilRef}>
              <g transform="translate(25, 145)">
                {/* Pencil body */}
                <rect x="-2" y="-8" width="4" height="16" fill="var(--accent-color)" rx="1" />
                {/* Pencil tip */}
                <polygon points="-2,-8 2,-8 0,-12" fill="var(--pencil-color)" />
                {/* Pencil eraser */}
                <rect x="-2" y="8" width="4" height="4" fill="#ec4899" rx="1" />
                {/* Metal band */}
                <rect x="-2" y="6" width="4" height="2" fill="#666" />
              </g>
            </g>
            
            {/* Handwritten "Saish" text */}
            <text 
              x="200" 
              y="150" 
              fill="var(--pencil-color)" 
              fontSize="48" 
              fontFamily="'Patrick Hand', cursive" 
              dominantBaseline="middle"
              textAnchor="middle"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                dur="0.5s"
                begin="1.5s"
                fill="freeze"
              />
              Saish
            </text>
          </svg>
        </div>
        
        {/* Loading text with typewriter effect */}
        <motion.div 
          className="mb-8 font-patrick text-xl md:text-2xl text-[var(--pencil-color)] min-h-[2rem] text-center"
          key={currentText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {loadingTexts[currentText]}
        </motion.div>
        
        {/* Progress bar */}
        <div className="w-64 md:w-80 h-2 bg-[var(--paper-burnt)] bg-opacity-20 rounded-full overflow-hidden border border-[var(--paper-edge)] border-opacity-30">
          <motion.div
            className="h-full bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-light)] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
            style={{
              boxShadow: "0 0 10px rgba(139, 111, 71, 0.3)",
            }}
          />
        </div>
        
        {/* Progress percentage */}
        <motion.div 
          className="mt-4 font-patrick text-sm text-[var(--pencil-color)] opacity-70"
          key={progress}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
        >
          {Math.round(progress)}%
        </motion.div>
        
        {/* Decorative pencil shavings at bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-30">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-8 bg-[var(--paper-burnt)] rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 1.5 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Burnt corners accent */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none" style={{
        background: `radial-gradient(circle, var(--paper-burnt) 0%, transparent 70%)`
      }} />
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none" style={{
        background: `radial-gradient(circle, var(--paper-burnt) 0%, transparent 70%)`
      }} />
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 pointer-events-none" style={{
        background: `radial-gradient(circle, var(--paper-burnt) 0%, transparent 70%)`
      }} />
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 pointer-events-none" style={{
        background: `radial-gradient(circle, var(--paper-burnt) 0%, transparent 70%)`
      }} />
    </div>
  );
};

export default Preloader; 