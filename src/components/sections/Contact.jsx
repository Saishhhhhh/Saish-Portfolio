import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xwpwyovw");
  const [focused, setFocused] = useState(null);
  
  if (state.succeeded) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <motion.h2 
            className="text-4xl md:text-5xl font-caveat font-bold text-center mb-16 text-[var(--pencil-color)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-lg p-8 shadow-md border border-gray-200 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-2xl font-caveat text-[var(--pencil-color)] mb-4">
                Thanks! Your message has been sent to Saish ✅
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
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
              <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-md border border-gray-200">
                <h3 className="text-2xl font-caveat font-bold mb-6 text-[var(--pencil-color)]">
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit}>
                  {/* Name input */}
                  <div className="mb-6">
                    <label 
                      htmlFor="name" 
                      className="block mb-2 font-patrick text-[var(--pencil-color)]"
                    >
                      Your Name
                    </label>
                    <div className={`relative border-b-2 ${focused === 'name' ? 'border-[var(--pencil-color)]' : 'border-gray-300'} transition-colors duration-300`}>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        className="w-full py-2 px-0 bg-transparent font-patrick text-lg focus:outline-none text-[var(--pencil-color)]"
                        placeholder="John Doe"
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
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                      className="text-red-500 text-sm font-patrick mt-1"
                    />
                  </div>

                  {/* Email input */}
                  <div className="mb-6">
                    <label 
                      htmlFor="email" 
                      className="block mb-2 font-patrick text-[var(--pencil-color)]"
                    >
                      Email Address
                    </label>
                    <div className={`relative border-b-2 ${focused === 'email' ? 'border-[var(--pencil-color)]' : 'border-gray-300'} transition-colors duration-300`}>
                      <input
                        id="email"
                        type="email"
                        name="email"
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
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm font-patrick mt-1"
                    />
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
                        rows="5"
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-transparent font-patrick text-lg focus:outline-none text-[var(--pencil-color)]"
                        placeholder="Your message here..."
                      />
                    </div>
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                      className="text-red-500 text-sm font-patrick mt-1"
                    />
                  </div>
                  
                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className="px-6 py-3 bg-[var(--pencil-color)] text-white font-patrick text-lg rounded-md shadow-md hover:shadow-lg transition-shadow flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!state.submitting ? { scale: 1.05 } : {}}
                    whileTap={!state.submitting ? { scale: 0.95 } : {}}
                  >
                    <span className="mr-2">{state.submitting ? 'Sending...' : 'Send Scribble'}</span>
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
              <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-md border border-gray-200 h-full">
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
                        bsaish404@gmail.com
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
                        Pune, India
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
                        href="https://github.com/Saishhhhhh" 
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
                        href="https://www.linkedin.com/in/saishhhhhh/" 
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
                        href="https://discord.com/users/742974714321829980" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--pencil-color)] hover:opacity-75 transition-opacity flex items-center justify-center"
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
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
