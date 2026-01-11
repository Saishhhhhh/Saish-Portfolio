import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  
  // Random facts
  const facts = [
    "I can solve five different Rubik's Cubes",
    "I am a cinephile",
    "I love buying tech products",
    "I note down a lot of quotes"
  ];
  
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
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo */}
          <motion.div 
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Photo */}
              <img 
                src="/Saish.jpg" 
                alt="Saish" 
                className="w-full h-auto rounded-lg shadow-lg border-2 border-gray-200"
              />
              
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
            <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-md border border-gray-200 relative overflow-hidden">
              {/* Paper corner fold */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-gray-200 border-r-transparent"></div>
              
              <h3 className="text-2xl font-caveat font-bold mb-4 text-[var(--pencil-color)]">
                Who am I?
              </h3>
              
              <p className="text-lg font-patrick mb-6 text-[var(--pencil-color)]">
              I’m Saish — a data scientist and AI engineer who builds full-stack web products. I love turning data, machine learning models, and GenAI into real, usable platforms where intelligence meets design and deployment. I build, break, and rebuild things to explore automation, reasoning, and LLM-powered systems in the real world.
              </p>
              
              <p className="text-lg font-patrick mb-8 text-[var(--pencil-color)]">
              When I’m not coding, I’m usually hanging out with friends, watching movies, or playing games. I also enjoy casually exploring new tech and ideas, but I’m not always “in grind mode” — sometimes I just relax, scroll memes, and chill like a normal person.
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

              {/* My Journey Button */}
              <div className="mt-8">
                <Link to="/journey">
                  <motion.button
                    className="px-6 py-3 bg-[var(--accent-color)] text-white font-patrick rounded-md shadow-md hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View My Journey
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About; 