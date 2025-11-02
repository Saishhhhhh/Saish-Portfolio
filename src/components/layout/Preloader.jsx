import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  const preloaderRef = useRef(null);
  const textPathRef = useRef(null);
  const loadingTextRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate the SVG path drawing
    tl.fromTo(
      textPathRef.current,
      { strokeDashoffset: 1000 },
      { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" }
    );
    
    // Animate the loading text
    tl.fromTo(
      loadingTextRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.5"
    );
    
    // Animate loading dots
    const dots = loadingTextRef.current.querySelectorAll('.dot');
    tl.fromTo(
      dots,
      { opacity: 0 },
      { 
        opacity: 1, 
        stagger: 0.2,
        repeat: -1,
        yoyo: true
      },
      "-=0.3"
    );
    
    return () => {
      tl.kill();
    };
  }, []);
  
  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-[var(--paper-color)] z-50"
    >
      <div className="w-full max-w-md px-4">
        <svg 
          viewBox="0 0 400 100" 
          className="w-full h-auto"
        >
          <path
            ref={textPathRef}
            d="M50,50 C80,30 100,70 130,50 C160,30 180,70 210,50 C240,30 260,70 290,50 L350,50"
            fill="none"
            stroke="var(--pencil-color)"
            strokeWidth="2"
            strokeLinecap="round"
            className="path-animation"
          />
          <text 
            x="50" 
            y="50" 
            fill="var(--pencil-color)" 
            fontSize="40" 
            fontFamily="Caveat, cursive" 
            dominantBaseline="middle"
          >
            <textPath href="#textPath">
              Saish
            </textPath>
          </text>
          <path id="textPath" d="M50,50 C80,30 100,70 130,50 C160,30 180,70 210,50 C240,30 260,70 290,50 L350,50" fill="none" />
        </svg>
      </div>
      
      <div 
        ref={loadingTextRef}
        className="mt-8 font-patrick text-xl text-[var(--pencil-color)]"
      >
        Sharpening Pencils
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </div>
      
      {/* Animated pencil */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-16 h-16 animate-bounce-slow">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.06 9L15 9.94L5.92 19H5V18.08L14.06 9Z" fill="#4B5563"/>
          <path d="M17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3Z" fill="#4B5563"/>
          <path d="M14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default Preloader; 