import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projectsRef = useRef(null);
  const projectRefs = useRef([]);
  
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB.',
      image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=E-Commerce+Project',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A beautiful weather application with animated visualizations.',
      image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Weather+App',
      tags: ['React', 'OpenWeather API', 'Framer Motion'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A collaborative task management system with real-time updates.',
      image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Task+Management',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com'
    }
  ];
  
  // Handle scroll between projects
  const handleScroll = (direction) => {
    const newIndex = direction === 'next' 
      ? Math.min(activeProject + 1, projects.length - 1)
      : Math.max(activeProject - 1, 0);
    
    setActiveProject(newIndex);
    
    // Scroll to the project
    projectRefs.current[newIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };
  
  // Initialize project refs
  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projects.length);
  }, [projects.length]);
  
  return (
    <div className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-caveat font-bold text-center mb-16 text-[var(--pencil-color)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        
        <div 
          ref={projectsRef}
          className="relative"
        >
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className={`min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-16 ${
                index === activeProject ? 'opacity-100' : 'opacity-0 hidden'
              }`}
            >
              <motion.div 
                className="w-full md:w-1/2 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-gray-200">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Pencil sketch overlay on hover */}
                  <div className="absolute inset-0 bg-[var(--paper-color)] bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="transform rotate-3">
                      <svg width="100" height="100" viewBox="0 0 100 100" className="text-[var(--pencil-color)]">
                        <path d="M30,50 C40,30 60,70 70,50" stroke="currentColor" fill="none" strokeWidth="1" strokeDasharray="5,5" />
                        <path d="M20,70 C40,50 60,90 80,70" stroke="currentColor" fill="none" strokeWidth="1" strokeDasharray="5,5" />
                        <path d="M20,30 C40,10 60,50 80,30" stroke="currentColor" fill="none" strokeWidth="1" strokeDasharray="5,5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <h3 className="text-3xl md:text-4xl font-caveat font-bold mb-4 text-[var(--pencil-color)]">
                    {project.title}
                  </h3>
                  
                  {/* Animated underline */}
                  <div className="w-24 h-1 mb-6 bg-[var(--pencil-color)]" style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='2' viewBox='0 0 40 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1C8 0.5 8 1.5 16 1C24 0.5 24 1.5 32 1C40 0.5 40 1.5 48 1' stroke='%23333333' stroke-width='1'/%3E%3C/svg%3E\")",
                    backgroundSize: '40px 2px',
                    backgroundRepeat: 'repeat-x'
                  }}></div>
                  
                  <p className="text-lg font-patrick mb-6 text-[var(--pencil-color)]">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm font-patrick text-gray-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[var(--pencil-color)] text-white font-patrick rounded-md shadow-md hover:shadow-lg transition-shadow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                    
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-[var(--pencil-color)] text-[var(--pencil-color)] font-patrick rounded-md hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub Repo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => handleScroll('prev')}
            disabled={activeProject === 0}
            className={`p-2 rounded-full ${
              activeProject === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-[var(--pencil-color)] hover:bg-gray-100'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveProject(index);
                  projectRefs.current[index]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                  });
                }}
                className={`w-3 h-3 rounded-full ${
                  index === activeProject ? 'bg-[var(--pencil-color)]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => handleScroll('next')}
            disabled={activeProject === projects.length - 1}
            className={`p-2 rounded-full ${
              activeProject === projects.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-[var(--pencil-color)] hover:bg-gray-100'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects; 