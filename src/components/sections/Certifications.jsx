import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import certificationsData from '../../data/certifications.json';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <motion.h2 
            className="text-4xl md:text-5xl font-caveat font-bold text-center mb-12 text-[var(--pencil-color)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Certifications
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-[var(--paper-color)] rounded-lg border-2 border-gray-300 shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => openModal(cert)}
              >
                {/* Certificate Image - Hidden on mobile */}
                <div className="hidden sm:block w-full h-32 sm:h-40 md:h-48 overflow-hidden bg-gray-100">
                  <img
                    src={cert.thumbnail}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Certificate Details */}
                <div className="p-4">
                  <h3 className="text-lg font-caveat font-bold text-[var(--pencil-color)] mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-patrick text-gray-600 mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs font-patrick text-gray-500 mb-2">
                    Issued: {cert.issuedOn}
                  </p>
                  <p className="text-sm font-patrick text-gray-700 line-clamp-2">
                    {cert.shortContext}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedCert && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-[var(--paper-color)] rounded-lg border-2 border-gray-300 shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>

                {/* Certificate Image */}
                <div className="w-full h-64 md:h-80 overflow-hidden bg-gray-100">
                  <img
                    src={selectedCert.thumbnail}
                    alt={selectedCert.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Certificate Details */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-caveat font-bold text-[var(--pencil-color)] mb-4">
                    {selectedCert.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-patrick font-semibold text-[var(--pencil-color)]">Issuer:</span>
                      <span className="font-patrick text-gray-700">{selectedCert.issuer}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="font-patrick font-semibold text-[var(--pencil-color)]">Issued On:</span>
                      <span className="font-patrick text-gray-700">{selectedCert.issuedOn}</span>
                    </div>

                    <div>
                      <span className="font-patrick font-semibold text-[var(--pencil-color)] block mb-2">Skills Gained:</span>
                      <div className="flex flex-wrap gap-2">
                        {selectedCert.skillsGained.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-[var(--accent-color)] bg-opacity-20 text-white rounded-md text-sm font-patrick border border-[var(--accent-color)] border-opacity-40"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Animated Underline */}
                  <div className="w-24 h-1 mb-4 bg-[var(--pencil-color)]" style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='2' viewBox='0 0 40 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1C8 0.5 8 1.5 16 1C24 0.5 24 1.5 32 1C40 0.5 40 1.5 48 1' stroke='%23333333' stroke-width='1'/%3E%3C/svg%3E\")",
                    backgroundSize: '40px 2px',
                    backgroundRepeat: 'repeat-x'
                  }}></div>

                  <p className="text-base font-patrick text-gray-700 mb-6">
                    {selectedCert.shortContext}
                  </p>

                  {/* Verification Link */}
                  {selectedCert.verificationLink && (
                    <motion.a
                      href={selectedCert.verificationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-[var(--accent-color)] text-white font-patrick rounded-md shadow-md hover:shadow-lg transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Verify Certificate
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certifications;

