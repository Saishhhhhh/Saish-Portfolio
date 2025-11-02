import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  const [focused, setFocused] = useState(null);
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all fields'
      });
      return;
    }
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thanks for your message! I\'ll get back to you soon.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: ''
      });
    }, 5000);
  };
  
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
          Get In Touch
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Form */}
            <motion.div 
              className="w-full md:w-2/3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
                <h3 className="text-2xl font-caveat font-bold mb-6 text-[var(--pencil-color)]">
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit}>
                  {/* Form status message */}
                  {formStatus.message && (
                    <div className={`mb-6 p-4 rounded-md ${formStatus.error ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                      {formStatus.message}
                    </div>
                  )}
                  
                  {/* Name input */}
                  <div className="mb-6">
                    <label 
                      htmlFor="name" 
                      className="block mb-2 font-patrick text-[var(--pencil-color)]"
                    >
                      Name
                    </label>
                    <div className={`relative border-b-2 ${focused === 'name' ? 'border-[var(--pencil-color)]' : 'border-gray-300'} transition-colors duration-300`}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        className="w-full py-2 px-0 bg-transparent font-patrick text-lg focus:outline-none text-[var(--pencil-color)]"
                        placeholder="Your name"
                      />
                      {focused === 'name' && (
                        <motion.div 
                          className="absolute bottom-0 left-0 h-0.5 bg-[var(--pencil-color)]"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                          style={{
                            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='2' viewBox='0 0 40 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1C8 0.5 8 1.5 16 1C24 0.5 24 1.5 32 1C40 0.5 40 1.5 48 1' stroke='%23333333' stroke-width='1'/%3E%3C/svg%3E\")",
                            backgroundSize: '40px 2px',
                            backgroundRepeat: 'repeat-x'
                          }}
                        />
                      )}
                    </div>
                  </div>
                  
                  {/* Email input */}
                  <div className="mb-6">
                    <label 
                      htmlFor="email" 
                      className="block mb-2 font-patrick text-[var(--pencil-color)]"
                    >
                      Email
                    </label>
                    <div className={`relative border-b-2 ${focused === 'email' ? 'border-[var(--pencil-color)]' : 'border-gray-300'} transition-colors duration-300`}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        className="w-full py-2 px-0 bg-transparent font-patrick text-lg focus:outline-none text-[var(--pencil-color)]"
                        placeholder="your.email@example.com"
                      />
                      {focused === 'email' && (
                        <motion.div 
                          className="absolute bottom-0 left-0 h-0.5 bg-[var(--pencil-color)]"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                          style={{
                            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='2' viewBox='0 0 40 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1C8 0.5 8 1.5 16 1C24 0.5 24 1.5 32 1C40 0.5 40 1.5 48 1' stroke='%23333333' stroke-width='1'/%3E%3C/svg%3E\")",
                            backgroundSize: '40px 2px',
                            backgroundRepeat: 'repeat-x'
                          }}
                        />
                      )}
                    </div>
                  </div>
                  
                  {/* Message textarea */}
                  <div className="mb-8">
                    <label 
                      htmlFor="message" 
                      className="block mb-2 font-patrick text-[var(--pencil-color)]"
                    >
                      Message
                    </label>
                    <div className={`relative border-2 rounded-md p-2 ${focused === 'message' ? 'border-[var(--pencil-color)]' : 'border-gray-300'} transition-colors duration-300`}>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        rows="5"
                        className="w-full bg-transparent font-patrick text-lg focus:outline-none text-[var(--pencil-color)]"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-[var(--pencil-color)] text-white font-patrick text-lg rounded-md shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">Send Scribble</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </motion.button>
                </form>
              </div>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              className="w-full md:w-1/3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200 h-full">
                <h3 className="text-2xl font-caveat font-bold mb-6 text-[var(--pencil-color)]">
                  Contact Info
                </h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="mr-4 text-[var(--pencil-color)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="font-patrick text-lg text-[var(--pencil-color)]">
                        saish@example.com
                      </p>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-start">
                    <div className="mr-4 text-[var(--pencil-color)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="font-patrick text-lg text-[var(--pencil-color)]">
                        New York, NY
                      </p>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="pt-6 mt-6 border-t border-gray-200">
                    <h4 className="font-patrick text-lg font-bold mb-4 text-[var(--pencil-color)]">
                      Find me on
                    </h4>
                    
                    <div className="flex space-x-4">
                      <motion.a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--pencil-color)] hover:opacity-75 transition-opacity"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </motion.a>
                      
                      <motion.a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--pencil-color)] hover:opacity-75 transition-opacity"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </motion.a>
                      
                      <motion.a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--pencil-color)] hover:opacity-75 transition-opacity"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 