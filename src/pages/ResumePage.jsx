import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SketchBackground from '../components/hero/SketchBackground';

const ResumePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Saish_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen old-paper-bg">
      <Navbar />
      <SketchBackground />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-20 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-caveat font-bold text-[var(--pencil-color)] mb-4">
            My Resume
          </h1>
          <div className="w-32 h-1 mx-auto bg-[var(--pencil-color)]" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='2' viewBox='0 0 40 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1C8 0.5 8 1.5 16 1C24 0.5 24 1.5 32 1C40 0.5 40 1.5 48 1' stroke='%23333333' stroke-width='1'/%3E%3C/svg%3E\")",
            backgroundSize: '40px 2px',
            backgroundRepeat: 'repeat-x'
          }}></div>
        </motion.div>

        {/* Download Button */}
        <div className="flex justify-center mb-8">
          <motion.button
            onClick={handleDownload}
            className="px-6 py-3 bg-[var(--accent-color)] text-white font-patrick rounded-md shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Resume
          </motion.button>
        </div>

        {/* PDF Viewer */}
        <motion.div
          className="bg-[var(--paper-color)] rounded-lg border-2 border-gray-300 shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full" style={{ height: 'calc(100vh - 300px)', minHeight: '800px' }}>
            <iframe
              src="/Resume.pdf"
              className="w-full h-full"
              title="Resume PDF Viewer"
              style={{ border: 'none' }}
            />
          </div>
        </motion.div>

        {/* Back to Home Link */}
        <div className="flex justify-center mt-8">
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

export default ResumePage;

