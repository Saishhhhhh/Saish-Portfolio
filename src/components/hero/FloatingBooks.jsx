import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * FloatingBooks component - displays books scattered on left and right sides with continuous floating animation
 * @param {Object} props - Component props
 * @param {boolean} props.animationComplete - Whether the name animation is complete
 */
const FloatingBooks = ({ animationComplete = false }) => {
  const [hasFadedIn, setHasFadedIn] = useState(false);
  
  useEffect(() => {
    if (animationComplete && !hasFadedIn) {
      setHasFadedIn(true);
    }
  }, [animationComplete, hasFadedIn]);
  
  // Book configuration - reduced sizes, filling left and right sides evenly
  const leftSideBooks = [
    {
      id: 1,
      image: '/Book1.png',
      position: { top: '10%', left: '8%' },
      size: 'w-16 md:w-20',
      rotation: -8,
      delay: 0,
      duration: 4,
    },
    {
      id: 2,
      image: '/Book2.png',
      position: { top: '30%', left: '5%' },
      size: 'w-18 md:w-22',
      rotation: 12,
      delay: 0.5,
      duration: 5,
    },
    {
      id: 3,
      image: '/Book3.png',
      position: { top: '50%', left: '10%' },
      size: 'w-16 md:w-20',
      rotation: -15,
      delay: 1,
      duration: 4.5,
    },
    {
      id: 7,
      image: '/Book4.png',
      position: { top: '70%', left: '6%' },
      size: 'w-18 md:w-22',
      rotation: 45, // Diamond shape rotation
      delay: 0.7,
      duration: 4.5,
    },
  ];

  const rightSideBooks = [
    {
      id: 4,
      image: '/Book5.png',
      position: { top: '15%', right: '8%' },
      size: 'w-16 md:w-20',
      rotation: 10,
      delay: 0.3,
      duration: 5.5,
    },
    {
      id: 5,
      image: '/Book6.png',
      position: { top: '35%', right: '5%' },
      size: 'w-18 md:w-22',
      rotation: -12,
      delay: 0.8,
      duration: 4,
    },
    {
      id: 6,
      image: '/Book1.png',
      position: { top: '55%', right: '10%' },
      size: 'w-16 md:w-20',
      rotation: 8,
      delay: 1.2,
      duration: 5,
    },
    {
      id: 8,
      image: '/Book2.png',
      position: { top: '75%', right: '6%' },
      size: 'w-18 md:w-22',
      rotation: -45, // Diamond shape rotation
      delay: 0.4,
      duration: 5,
    },
  ];

  // Floating animation variant - reduced wobble, subtle movement
  const floatingAnimation = (duration, delay) => ({
    y: [0, -10, 0, -8, 0],
    x: [0, 5, 0, -3, 0],
    rotate: [0, 1.5, 0, -1, 0],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
      repeatType: 'reverse',
    },
  });

  // Book item component with interactive hover
  const BookItem = ({ book, side }) => {
    // Calculate fade-in delay
    const fadeInDelay = book.delay * 0.3;
    
    // Get floating animation values
    const floatAnim = floatingAnimation(book.duration, book.delay + fadeInDelay);
    
    return (
      <motion.div
        className={`absolute ${book.size} pointer-events-auto z-0 cursor-pointer ${
          side === 'left' ? 'hidden md:block' : 'hidden md:block'
        }`}
        style={{
          ...book.position,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          hasFadedIn
            ? {
                opacity: 1,
                scale: 1,
                y: floatAnim.y,
                x: floatAnim.x,
                rotate: floatAnim.rotate,
              }
            : {
                opacity: 0,
                scale: 0.8,
              }
        }
        transition={
          hasFadedIn
            ? {
                opacity: { 
                  duration: 0.6, 
                  delay: fadeInDelay,
                  ease: "easeOut",
                },
                scale: { 
                  duration: 0.6, 
                  delay: fadeInDelay,
                  ease: "easeOut",
                },
                ...floatAnim.transition,
              }
            : {
                opacity: { duration: 0 },
                scale: { duration: 0 },
              }
        }
        whileHover={{
          scale: 1.15,
          rotate: book.rotation + 10,
          zIndex: 10,
          transition: { 
            duration: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 20
          },
        }}
        whileTap={{
          scale: 1.05,
          rotate: book.rotation + 5,
        }}
      >
        <motion.img
          src={book.image}
          alt={`Book ${book.id}`}
          className="w-full h-auto drop-shadow-lg select-none"
          style={{
            transform: `rotate(${book.rotation}deg)`,
          }}
          whileHover={{
            filter: 'brightness(1.1)',
            transition: { duration: 0.2 },
          }}
        />
      </motion.div>
    );
  };

  return (
    <>
      {/* Left side books */}
      {leftSideBooks.map((book) => (
        <BookItem key={book.id} book={book} side="left" />
      ))}
      
      {/* Right side books */}
      {rightSideBooks.map((book) => (
        <BookItem key={book.id} book={book} side="right" />
      ))}
    </>
  );
};

export default FloatingBooks;
