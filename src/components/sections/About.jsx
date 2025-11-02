import { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [isSketch, setIsSketch] = useState(false);
  
  // Toggle between normal photo and sketch
  const toggleSketch = () => {
    setIsSketch(!isSketch);
  };
  
  // Random facts
  const facts = [
    "I can solve a Rubik's cube in under 2 minutes",
    "I've visited 15 countries",
    "I love making homemade pizza",
    "I'm a night owl coder"
  ];
  
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-caveat font-bold text-center mb-16 text-[var(--pencil-color)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo with sketch toggle */}
          <motion.div 
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Normal photo */}
              <img 
                src={isSketch ? "https://placehold.co/400x500/e2e8f0/1e293b?text=Sketch" : "https://placehold.co/400x500/e2e8f0/1e293b?text=Photo"} 
                alt="Saish" 
                className="w-full h-auto rounded-lg shadow-lg border-2 border-gray-200"
              />
              
              {/* Toggle button */}
              <motion.button
                onClick={toggleSketch}
                className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {isSketch ? (
                    <path d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11z" />
                  ) : (
                    <path d="M14.06 9L15 9.94L5.92 19H5V18.08L14.06 9Z M17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3Z M14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z" />
                  )}
                </svg>
              </motion.button>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-dashed border-gray-300 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-dashed border-gray-300 rounded-lg -z-10"></div>
            </div>
          </motion.div>
          
          {/* About content */}
          <motion.div 
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200 relative overflow-hidden">
              {/* Paper corner fold */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-gray-200 border-r-transparent"></div>
              
              <h3 className="text-2xl font-caveat font-bold mb-4 text-[var(--pencil-color)]">
                Who am I?
              </h3>
              
              <p className="text-lg font-patrick mb-6 text-[var(--pencil-color)]">
                I'm a passionate web developer with a love for creating beautiful, functional, and user-friendly websites. 
                With expertise in React, Node.js, and modern web technologies, I build applications that not only look great 
                but also perform exceptionally well.
              </p>
              
              <p className="text-lg font-patrick mb-8 text-[var(--pencil-color)]">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or enjoying the outdoors. I believe in continuous learning and pushing the boundaries of what's possible on the web.
              </p>
              
              {/* Random facts */}
              <div className="mt-8">
                <h4 className="text-xl font-caveat font-bold mb-4 text-[var(--pencil-color)]">
                  Random Facts
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {facts.map((fact, index) => (
                    <motion.div 
                      key={index}
                      className="bg-yellow-50 p-4 rounded-md shadow-sm border border-yellow-100 transform rotate-1"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        rotate: index % 2 === 0 ? 2 : 0,
                        scale: 1.03,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <p className="font-shadows text-[var(--pencil-color)]">
                        {fact}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About; 