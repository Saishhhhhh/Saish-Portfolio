import { motion } from 'framer-motion';

const Skills = () => {
  // Icon mapping for technologies
  const getIconUrl = (skill) => {
    const iconMap = {
      // Frontend
      'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      'Tailwind CSS': 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
      'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      // Backend
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      // Databases
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      // AI & Data Science
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
      'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      'Matplotlib': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
      'Seaborn': 'https://logo.svgcdn.com/l/seaborn-icon.svg',
      'LangChain': 'https://images.seeklogo.com/logo-png/52/1/langchain-logo-png_seeklogo-528369.png',
      // Developer Tools
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      'Postman': 'https://www.svgrepo.com/show/354202/postman-icon.svg',
      // Creative Tools
      'Photoshop': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
      'Premiere Pro': 'https://images.seeklogo.com/logo-png/38/1/adobe-premiere-logo-png_seeklogo-380789.png',
      'After Effects': 'https://cdn.worldvectorlogo.com/logos/after-effects-2019.svg',
      'Filmora': 'https://vectorseek.com/wp-content/uploads/2023/09/Wondershare-Filmora-Video-Editor-Logo-Vector.svg-.png',
      // Programming Languages
      'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    };
    return iconMap[skill] || null;
  };

  // Skill categories and items
  const skillCategories = [
    {
      name: "Frontend",
      emoji: "🖥️",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Redux", "Tailwind CSS", "Bootstrap"]
    },
    {
      name: "Backend",
      emoji: "⚙️",
      skills: ["Node.js", "Express.js", "FastAPI"]
    },
    {
      name: "Databases",
      emoji: "🗄️",
      skills: ["MongoDB", "MySQL"]
    },
    {
      name: "AI & Data Science",
      emoji: "🤖",
      skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "LangChain"]
    },
    {
      name: "Developer Tools",
      emoji: "🛠️",
      skills: ["Git", "GitHub", "Postman"]
    },
    {
      name: "Creative Tools",
      emoji: "🎨",
      skills: ["Photoshop", "Premiere Pro", "After Effects", "Filmora"]
    },
    {
      name: "Programming Languages",
      emoji: "👨‍💻",
      skills: ["Python", "C", "C++", "JavaScript"]
    }
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
          My Skills
        </motion.h2>
        
        <div className="relative">
          {/* Notebook background */}
          <div className="absolute inset-0 bg-white rounded-lg shadow-lg border border-gray-200 -z-10"></div>
          
          {/* Notebook spiral */}
          <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col justify-between py-8 -ml-3">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-gray-300 bg-white"></div>
            ))}
          </div>
          
          {/* Notebook lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="w-full h-px bg-[var(--paper-burnt)] opacity-20" 
                style={{ top: `${(i + 1) * 30}px` }}
              ></div>
            ))}
          </div>
          
          {/* Content */}
          <div className="py-6 px-4 sm:py-8 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div 
                  key={category.name}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Category heading with emoji */}
                  <h3 className="text-2xl font-caveat font-bold mb-3 text-[var(--pencil-color)]">
                    {category.emoji} {category.name}
                  </h3>
                  
                  {/* Skills list - reduced spacing with icons */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => {
                      const iconUrl = getIconUrl(skill);
                      return (
                        <motion.span 
                          key={skill}
                          className="flex items-center gap-2 px-4 py-2 bg-[var(--paper-burnt)] bg-opacity-20 rounded-md text-base font-patrick text-[var(--pencil-color)] border border-gray-300"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: categoryIndex * 0.1 + skillIndex * 0.03 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                          {iconUrl && (
                            <img 
                              src={iconUrl} 
                              alt={skill}
                              className="w-5 h-5 object-contain"
                            />
                          )}
                          <span>{skill}</span>
                        </motion.span>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
