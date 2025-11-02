import { motion } from 'framer-motion';

const Skills = () => {
  // Skill categories and items
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", note: "🔥" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", note: "♥" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", note: "👍" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", note: "💪" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", note: "🚀" }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", note: "🔥" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", note: "⚡" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", note: "🐍" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg", note: "👌" }
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", note: "🍃" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", note: "📊" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", note: "🐘" }
      ]
    },
    {
      name: "Dev Tools",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", note: "🔄" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", note: "🐳" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", note: "📝" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", note: "🎨" }
      ]
    }
  ];
  
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
          <div className="py-6 px-4 sm:py-8 sm:px-8 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div 
                  key={category.name}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Category heading */}
                  <h3 className="text-2xl font-caveat font-bold mb-6 text-[var(--pencil-color)] relative inline-block">
                    {category.name}
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-300 opacity-50"></div>
                  </h3>
                  
                  {/* Skills grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skill.name}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        {/* Skill icon */}
                        <div className="w-16 h-16 flex items-center justify-center mb-2">
                          <img 
                            src={skill.icon} 
                            alt={skill.name}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        
                        {/* Skill name */}
                        <p className="text-center font-patrick text-[var(--pencil-color)]">
                          {skill.name}
                        </p>
                        
                        {/* Handwritten annotation */}
                        <div className="mt-1 font-shadows text-lg transform rotate-3 text-gray-600">
                          {skill.note}
                        </div>
                      </motion.div>
                    ))}
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