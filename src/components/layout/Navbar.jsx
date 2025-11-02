import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled for styling
      setScrolled(window.scrollY > 50);
      
      // Find the current active section
      const sections = ['home', 'skills', 'projects', 'certifications', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || 'home';
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home', type: 'hash' },
    { id: 'skills', label: 'Skills', type: 'hash' },
    { id: 'projects', label: 'Projects', type: 'hash' },
    { id: 'certifications', label: 'Certifications', type: 'hash' },
    { id: 'about', label: 'About', type: 'hash' },
    { id: 'contact', label: 'Contact', type: 'hash' },
    { id: 'resume', label: 'Resume', type: 'link', path: '/resume' }
  ];

  // Handle hash link clicks - navigate to home first if not on home page
  const handleHashClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'py-2 bg-[var(--paper-color)] shadow-md' : 'py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <a href="/" className="font-patrick text-3xl font-bold text-[var(--pencil-color)]">
          Saish
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map(item => {
            if (item.type === 'link') {
              // Special styling for Resume button
              if (item.id === 'resume') {
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className="font-patrick text-lg relative px-4 py-2 bg-[var(--accent-color)] text-white rounded-md shadow-md hover:shadow-lg transition-all"
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`font-patrick text-lg relative ${activeSection === item.id ? 'font-bold' : ''}`}
                >
                  {item.label}
                </Link>
              );
            } else if (item.type === 'external') {
              return (
                <a
                  key={item.id}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-patrick text-lg relative px-4 py-2 bg-[var(--accent-color)] text-white rounded-md shadow-md hover:shadow-lg transition-all"
                >
                  {item.label}
                </a>
              );
            } else {
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleHashClick(e, item.id)}
                  className={`font-patrick text-lg relative ${activeSection === item.id ? 'font-bold' : ''}`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--pencil-color)]"
                      style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='2' viewBox='0 0 40 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1C8 0.5 8 1.5 16 1C24 0.5 24 1.5 32 1C40 0.5 40 1.5 48 1' stroke='%23333333' stroke-width='1'/%3E%3C/svg%3E\")",
                        backgroundSize: '40px 2px',
                        backgroundRepeat: 'repeat-x'
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              );
            }
          })}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[var(--pencil-color)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-[var(--paper-color)] shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map(item => {
              if (item.type === 'link') {
                // Special styling for Resume button
                if (item.id === 'resume') {
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      className="font-patrick text-lg px-4 py-2 bg-[var(--accent-color)] text-white rounded-md shadow-md inline-block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className="font-patrick text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              } else if (item.type === 'external') {
                return (
                  <a
                    key={item.id}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-patrick text-lg px-4 py-2 bg-[var(--accent-color)] text-white rounded-md shadow-md inline-block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              } else {
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      handleHashClick(e, item.id);
                      setIsOpen(false);
                    }}
                    className={`font-patrick text-lg ${activeSection === item.id ? 'font-bold' : ''}`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="ml-2">✏️</span>
                    )}
                  </a>
                );
              }
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 