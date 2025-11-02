import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import journeyData from '../data/journeyData.json';
import SketchBackground from '../components/hero/SketchBackground';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const JourneyPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Get type colors
  const getTypeColor = (type) => {
    switch (type) {
      case 'Skill':
        return 'bg-blue-100 border-blue-300 text-blue-800';
      case 'Project':
        return 'bg-green-100 border-green-300 text-green-800';
      case 'Hackathon':
        return 'bg-purple-100 border-purple-300 text-purple-800';
      default:
        return 'bg-gray-100 border-gray-300 text-gray-800';
    }
  };

  // Get type icon
  const getTypeIcon = (type) => {
    switch (type) {
      case 'Skill':
        return '📚';
      case 'Project':
        return '💼';
      case 'Hackathon':
        return '🏆';
      default:
        return '📍';
    }
  };

  return (
    <div className="min-h-screen old-paper-bg">
      <Navbar />
      <SketchBackground />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-20 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-caveat font-bold text-[var(--pencil-color)] mb-4">
            My Journey
          </h1>
          <p className="text-lg font-patrick text-gray-600 italic">
            Growing one project at a time.
          </p>
          <div className="w-32 h-1 mx-auto mt-4 bg-[var(--pencil-color)]" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='2' viewBox='0 0 40 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1C8 0.5 8 1.5 16 1C24 0.5 24 1.5 32 1C40 0.5 40 1.5 48 1' stroke='%23333333' stroke-width='1'/%3E%3C/svg%3E\")",
            backgroundSize: '40px 2px',
            backgroundRepeat: 'repeat-x'
          }}></div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto relative pb-12">
          {/* Timeline Spine - Vertical Line (hidden on mobile, centered on desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[var(--pencil-color)] opacity-30"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {journeyData.map((milestone, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Timeline Node - Only visible on desktop */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                    <motion.div 
                      className="w-5 h-5 bg-[var(--accent-color)] rounded-full border-4 border-white shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>

                  {/* Mobile Layout - Stacked */}
                  <div className="md:hidden pl-8">
                    {/* Mobile Node */}
                    <div className="absolute left-0 top-6 w-3 h-3 bg-[var(--accent-color)] rounded-full border-2 border-white shadow-md"></div>
                    
                    <div className="bg-[var(--paper-color)] p-5 rounded-lg border-2 border-gray-300 shadow-lg border-l-4 border-l-[var(--accent-color)]">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-patrick mb-3 border ${getTypeColor(milestone.type)}`}>
                        <span>{getTypeIcon(milestone.type)}</span>
                        <span>{milestone.type}</span>
                      </div>
                      <p className="text-xs font-patrick text-gray-600 mb-2">{milestone.date}</p>
                      <h3 className="text-xl font-caveat font-bold text-[var(--pencil-color)] mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm font-patrick text-gray-700">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Desktop Layout - Alternating */}
                  <div className="hidden md:flex items-center gap-8 relative">
  {/* Odd items: Date Left, Card Right */}
  {!isEven ? (
    <>
      {/* Date Left (unchanged) */}
      <div className="w-2/5 flex justify-end pr-8">
        <div className="text-right">
          <p className="text-base font-patrick text-gray-600 font-semibold">
            {milestone.date}
          </p>
        </div>
      </div>

      {/* Card Right — content pushed AWAY from spine (text-right) */}
      <div className="w-3/5">
        <motion.div
          className="bg-[var(--paper-color)] p-6 rounded-lg border-2 border-gray-300 shadow-lg border-l-4 border-l-[var(--accent-color)] text-right"
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-patrick mb-3 border ${getTypeColor(
              milestone.type
            )} float-right`}
          >
            <span>{getTypeIcon(milestone.type)}</span>
            <span>{milestone.type}</span>
          </div>
          <div className="clear-both"></div>

          <h3 className="text-xl md:text-2xl font-caveat font-bold text-[var(--pencil-color)] mb-2 text-right">
            {milestone.title}
          </h3>

          <p className="text-base font-patrick text-gray-700 text-right">
            {milestone.description}
          </p>
        </motion.div>
      </div>
    </>
  ) : (
    <>
      {/* Even items: Card Left — content pushed AWAY from spine (text-left) */}
      <div className="w-3/5 pr-8">
        <motion.div
          className="bg-[var(--paper-color)] p-6 rounded-lg border-2 border-gray-300 shadow-lg border-r-4 border-r-[var(--accent-color)] text-left"
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-patrick mb-3 border ${getTypeColor(
              milestone.type
            )} float-left`}
          >
            <span>{getTypeIcon(milestone.type)}</span>
            <span>{milestone.type}</span>
          </div>
          <div className="clear-both"></div>

          <h3 className="text-xl md:text-2xl font-caveat font-bold text-[var(--pencil-color)] mb-2 text-left">
            {milestone.title}
          </h3>

          <p className="text-base font-patrick text-gray-700 text-left">
            {milestone.description}
          </p>
        </motion.div>
      </div>

      {/* Date Right (unchanged) */}
      <div className="w-2/5 flex justify-start pl-8">
        <div className="text-left">
          <p className="text-base font-patrick text-gray-600 font-semibold">
            {milestone.date}
          </p>
        </div>
      </div>
    </>
  )}
</div>

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="flex justify-center mt-16">
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

export default JourneyPage;
