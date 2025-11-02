import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import SketchBackground from '../components/hero/SketchBackground';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Project Card Component
const ProjectCard = ({ project, index, isEven, hoveredButton, setHoveredButton }) => {
  const [hovered, setHovered] = useState(false);
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
    <motion.div
      className="min-h-[500px] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Project Preview */}
      <motion.div
        className={`w-full lg:w-1/2 ${isEven ? 'order-1' : 'order-2'}`}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
        viewport={{ once: true }}
      >
        <div
          className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg border-2 border-gray-300"
          onMouseEnter={() => hasVideo && setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hasVideo && hovered ? (
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
      </motion.div>

      {/* Project Details */}
      <motion.div
        className={`w-full lg:w-1/2 ${isEven ? 'order-2' : 'order-1'}`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
        viewport={{ once: true }}
      >
        <div className="bg-[var(--paper-color)] p-6 md:p-8 rounded-lg border-2 border-gray-300 shadow-lg">
          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-caveat font-bold text-[var(--pencil-color)] mb-4">
            {project.title}
          </h3>

          {/* Date */}
          <p className="text-sm font-patrick text-gray-600 mb-6">
            📅 {project.date}
          </p>

          {/* Animated Underline */}
          <div className="w-24 h-1 mb-6 bg-[var(--pencil-color)]" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='2' viewBox='0 0 40 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1C8 0.5 8 1.5 16 1C24 0.5 24 1.5 32 1C40 0.5 40 1.5 48 1' stroke='%23333333' stroke-width='1'/%3E%3C/svg%3E\")",
            backgroundSize: '40px 2px',
            backgroundRepeat: 'repeat-x'
          }}></div>

          {/* Description */}
          <p className="text-base md:text-lg font-patrick text-[var(--pencil-color)] mb-6">
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="mb-6">
            <h4 className="text-lg font-caveat font-bold text-[var(--pencil-color)] mb-3">
              Tags
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[var(--paper-burnt)] bg-opacity-30 rounded-full text-sm font-patrick text-gray-700 border border-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-lg font-caveat font-bold text-[var(--pencil-color)] mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techstack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[var(--accent-color)] bg-opacity-20 text-white rounded-md text-sm font-patrick border border-[var(--accent-color)] border-opacity-40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
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
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
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
                  className="block flex-1 px-6 py-3 bg-[var(--accent-color)] text-white font-patrick rounded-md shadow-md hover:shadow-lg transition-all text-center"
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
                  className="block flex-1 px-6 py-3 border-2 border-[var(--accent-color)] text-[var(--accent-color)] font-patrick rounded-md hover:bg-[var(--accent-color)] hover:text-white transition-all text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub Repo
                </motion.a>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedTech, setSelectedTech] = useState('');
  const [hoveredButton, setHoveredButton] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Get all unique tags and tech stacks for filters
  const allTags = useMemo(() => {
    const tagsSet = new Set();
    projectsData.forEach(project => {
      project.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, []);

  const allTech = useMemo(() => {
    const techSet = new Set();
    projectsData.forEach(project => {
      project.techstack.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on search query, tag, and tech stack
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.techstack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      // Tag filter
      const matchesTag = selectedTag === '' || project.tags.includes(selectedTag);

      // Tech stack filter
      const matchesTech = selectedTech === '' || project.techstack.includes(selectedTech);

      return matchesSearch && matchesTag && matchesTech;
    });
  }, [searchQuery, selectedTag, selectedTech]);

  return (
    <div className="min-h-screen old-paper-bg">
      <Navbar />
      <SketchBackground />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-20 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-caveat font-bold text-[var(--pencil-color)] mb-4">
            My Projects
          </h1>
          <div className="w-32 h-1 mx-auto bg-[var(--pencil-color)]" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='2' viewBox='0 0 40 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1C8 0.5 8 1.5 16 1C24 0.5 24 1.5 32 1C40 0.5 40 1.5 48 1' stroke='%23333333' stroke-width='1'/%3E%3C/svg%3E\")",
            backgroundSize: '40px 2px',
            backgroundRepeat: 'repeat-x'
          }}></div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search projects by name, description, tags, or tech stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-12 rounded-lg border-2 border-gray-300 focus:border-[var(--accent-color)] focus:outline-none font-patrick text-lg bg-[var(--paper-color)] text-[var(--pencil-color)] shadow-md"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-2 font-caveat font-bold text-[var(--pencil-color)] self-center">
                Filter by Tag:
              </span>
              <button
                onClick={() => setSelectedTag('')}
                className={`px-4 py-2 rounded-md font-patrick text-sm transition-all ${
                  selectedTag === ''
                    ? 'bg-[var(--accent-color)] text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                  className={`px-4 py-2 rounded-md font-patrick text-sm transition-all ${
                    selectedTag === tag
                      ? 'bg-[var(--accent-color)] text-white shadow-md'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>

            {/* Tech Stack Filter */}
            <div className="flex flex-wrap gap-2 justify-center mt-4 md:mt-0">
              <span className="px-3 py-2 font-caveat font-bold text-[var(--pencil-color)] self-center">
                Filter by Tech:
              </span>
              <button
                onClick={() => setSelectedTech('')}
                className={`px-4 py-2 rounded-md font-patrick text-sm transition-all ${
                  selectedTech === ''
                    ? 'bg-[var(--accent-color)] text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All
              </button>
              {allTech.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(selectedTech === tech ? '' : tech)}
                  className={`px-4 py-2 rounded-md font-patrick text-sm transition-all ${
                    selectedTech === tech
                      ? 'bg-[var(--accent-color)] text-white shadow-md'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mt-6">
            <p className="font-patrick text-gray-600">
              Showing <span className="font-bold text-[var(--accent-color)]">{filteredProjects.length}</span> of {projectsData.length} projects
            </p>
          </div>
        </motion.div>

        {/* Main Content - Alternating Layout for each project */}
        {filteredProjects.length > 0 ? (
          <div className="space-y-24">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                isEven={index % 2 === 0}
                hoveredButton={hoveredButton}
                setHoveredButton={setHoveredButton}
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl font-caveat text-gray-500 mb-4">No projects found</p>
            <p className="font-patrick text-gray-400">Try adjusting your search or filters</p>
          </motion.div>
        )}

        {/* Back to Home Link */}
        <div className="flex justify-center mt-12">
          <Link to="/">
            <motion.button
              className="px-6 py-2 border-2 border-[var(--pencil-color)] text-[var(--pencil-color)] font-patrick rounded-md hover:bg-gray-100 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back to Home
            </motion.button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
