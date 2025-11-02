import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projectsData from '../../data/projects.json';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  
  // Show only top 3 projects
  const displayedProjects = projectsData.slice(0, 3);

  // Project Preview Component with hover video
  const ProjectPreview = ({ project, index }) => {
    const hasVideo = project.video && project.video.trim() !== '';
    
    // Helper function to format YouTube video URL for autoplay
    const getVideoUrl = (url) => {
      if (!url) return '';
      
      // Handle YouTube URLs
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        let videoId = '';
        
        // Extract video ID from various YouTube URL formats
        // Format: https://www.youtube.com/watch?v=VIDEO_ID
        const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
        if (watchMatch && watchMatch[1]) {
          videoId = watchMatch[1];
        }
        // Format: https://youtu.be/VIDEO_ID
        else if (url.includes('youtu.be/')) {
          const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
          if (shortMatch && shortMatch[1]) {
            videoId = shortMatch[1];
          }
        }
        // Format: https://www.youtube.com/embed/VIDEO_ID
        else if (url.includes('/embed/')) {
          const embedMatch = url.match(/\/embed\/([a-zA-Z0-9_-]+)/);
          if (embedMatch && embedMatch[1]) {
            videoId = embedMatch[1];
          }
        }
        
        if (videoId) {
          // Return YouTube embed URL with autoplay, mute, and loop
          return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&rel=0`;
        }
      }
      
      // For other video URLs (Vimeo, etc.), add autoplay parameters
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}autoplay=1&mute=1&loop=1`;
    };
    
    return (
      <div
        className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg border-2 border-gray-200"
        onMouseEnter={() => hasVideo && setHoveredProject(index)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {hasVideo && hoveredProject === index ? (
          <iframe
            src={getVideoUrl(project.video)}
            className="w-full h-full absolute inset-0"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            title={project.title}
          />
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    );
  };

  // Project Details Component
  const ProjectDetails = ({ project, index }) => {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-3xl md:text-4xl font-caveat font-bold mb-4 text-[var(--pencil-color)]">
            {project.title}
          </h3>
          
          {/* Animated underline */}
          <div className="w-24 h-1 mb-6 bg-[var(--pencil-color)]" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='2' viewBox='0 0 40 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1C8 0.5 8 1.5 16 1C24 0.5 24 1.5 32 1C40 0.5 40 1.5 48 1' stroke='%23333333' stroke-width='1'/%3E%3C/svg%3E\")",
            backgroundSize: '40px 2px',
            backgroundRepeat: 'repeat-x'
          }}></div>
        </div>
        
        <p className="text-lg font-patrick text-[var(--pencil-color)]">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div>
          <h4 className="text-lg font-caveat font-bold text-[var(--pencil-color)] mb-3">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techstack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[var(--accent-color)] bg-opacity-20 text-white rounded-md text-sm font-patrick border border-[var(--accent-color)] border-opacity-40 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-lg font-caveat font-bold text-[var(--pencil-color)] mb-3">
            Key Features
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm md:text-base font-patrick text-gray-700"
              >
                <span className="text-[var(--accent-color)] mt-1">▸</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          {project.live && project.live.trim() !== '' && (
            <motion.div
              className="relative"
              onMouseEnter={() => setHoveredButton(`live-${index}`)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              {hoveredButton === `live-${index}` && project.link_preview && (
                <motion.div
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50 w-64 h-48 rounded-lg overflow-hidden shadow-2xl border-2 border-gray-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={project.link_preview}
                    alt="Live Demo Preview"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 bg-[var(--accent-color)] text-white font-patrick rounded-md shadow-md hover:shadow-lg transition-all text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo
              </motion.a>
            </motion.div>
          )}
          {project.repo && (
            <motion.div
              className="relative"
              onMouseEnter={() => setHoveredButton(`repo-${index}`)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              {hoveredButton === `repo-${index}` && project.repo_preview && (
                <motion.div
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50 w-64 h-48 rounded-lg overflow-hidden shadow-2xl border-2 border-gray-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={project.repo_preview}
                    alt="GitHub Repo Preview"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
              <motion.a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 border-2 border-[var(--accent-color)] text-[var(--accent-color)] font-patrick rounded-md hover:bg-[var(--accent-color)] hover:text-white transition-all text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub Repo
              </motion.a>
            </motion.div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-caveat font-bold text-center mb-16 text-[var(--pencil-color)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        
        <div className="space-y-24">
          {displayedProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            // Alternate layout: even index = details left, preview right
            //                  odd index = preview left, details right
            
            return (
              <motion.div
                key={index}
                className="min-h-[500px] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Project Details */}
                <motion.div
                  className={`w-full md:w-1/2 ${isEven ? 'order-1' : 'order-2'}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <ProjectDetails project={project} index={index} />
                </motion.div>

                {/* Project Preview */}
                <motion.div
                  className={`w-full md:w-1/2 ${isEven ? 'order-2' : 'order-1'}`}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <ProjectPreview project={project} index={index} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        
        {/* See All Projects Button */}
        <div className="flex justify-center mt-16">
          <Link to="/projects">
            <motion.button
              className="px-8 py-3 bg-[var(--accent-color)] text-white font-patrick rounded-md shadow-md hover:shadow-lg transition-all text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See All Projects
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
