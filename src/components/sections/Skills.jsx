import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  // Icon mapping for technologies
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
      'Machine Learning': "https://cdn-icons-png.flaticon.com/512/3079/3079165.png",
      'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      'Keras': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
      'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
      'NLP': 'https://cdn-icons-png.flaticon.com/512/2040/2040946.png',
      'ANN': 'https://cdn-icons-png.flaticon.com/512/2620/2620244.png',
      'CNN': 'https://cdn-icons-png.flaticon.com/512/1792/1792750.png',
      'Transfer Learning': 'https://cdn-icons-png.flaticon.com/512/8165/8165798.png',
      'Transformer': 'https://cdn-icons-png.flaticon.com/512/2172/2172895.png',
      'Deep Learning': 'https://cdn-icons-png.flaticon.com/512/8637/8637138.png',
      'LSTM': 'https://cdn-icons-png.flaticon.com/512/9626/9626065.png',
      // Developer Tools
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      'Postman': 'https://www.svgrepo.com/show/354202/postman-icon.svg',
      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      // Creative Tools
      'Photoshop': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
      'Premiere Pro': 'https://images.seeklogo.com/logo-png/38/1/adobe-premiere-logo-png_seeklogo-380789.png',
      'After Effects': 'https://cdn.worldvectorlogo.com/logos/after-effects-2019.svg',
      'Filmora': 'https://vectorseek.com/wp-content/uploads/2023/09/Wondershare-Filmora-Video-Editor-Logo-Vector.svg-.png',
      // Programming Languages
      'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      'Scikit-Learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
      'LangGraph': '/langgraph-logo.png',
      'RAG': '/rag-icon.png',
      'MCP': '/mcp-logo.png',
      'ChromaDB': 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/chroma-erzavigj9yrwcd5lup0swm.png/chroma-1xw4nxhjo4c64ndhrqtxp.png',
      // New AI skills
      'Agentic AI': 'https://cdn-icons-png.flaticon.com/512/4616/4616734.png',
      'Gen AI': 'https://cdn-icons-png.flaticon.com/512/11865/11865326.png',
      'Prompt Engineering': 'https://cdn-icons-png.flaticon.com/512/11232/11232672.png',
      'HuggingFace': 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
      'SBERT': 'https://cdn-icons-png.flaticon.com/512/6062/6062646.png',
      'Transformers': 'https://cdn-icons-png.flaticon.com/512/2172/2172895.png',
      // New Databases
      'Pinecone': 'https://cdn.brandfetch.io/idD-83EGgE/w/400/h/400/theme/dark/icon.jpeg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
      // New Dev Tools
      'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
      'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      // New Languages
      'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
    };
    return iconMap[skill] || null;
  };

  const [activeSkill, setActiveSkill] = useState(null);

  const toggleSkill = (skill) => {
    setActiveSkill(activeSkill === skill ? null : skill);
  };

  // Skill categories and items
  const skillCategories = [
    {
      name: "Gen AI & Agents",
      emoji: "🤖",
      skills: ["LangChain", "LangGraph", "RAG", "Agentic AI", "MCP", "Gen AI", "Prompt Engineering"]
    },
    {
      name: "ML / DL",
      emoji: "🧠",
      skills: ["Machine Learning", "Deep Learning", "Scikit-Learn", "TensorFlow", "Keras", "PyTorch", "HuggingFace", "SBERT", "Transformers", "NLP", "Transfer Learning"]
    },
    {
      name: "Data Science",
      emoji: "📊",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn"]
    },
    {
      name: "Web & Backend",
      emoji: "🌐",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Redux", "Tailwind CSS", "Bootstrap", "Node.js", "Express.js", "FastAPI"]
    },
    {
      name: "Databases & Vector Stores",
      emoji: "🗄️",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Supabase", "ChromaDB", "Pinecone"]
    },
    {
      name: "DevOps & Tools",
      emoji: "🛠️",
      skills: ["Git", "GitHub", "Docker", "Postman", "Vercel", "VS Code"]
    },
    {
      name: "Programming Languages",
      emoji: "👨‍💻",
      skills: ["Python", "C", "C++", "JavaScript", "SQL"]
    },
    {
      name: "Creative Tools",
      emoji: "🎨",
      skills: ["Photoshop", "Premiere Pro", "After Effects", "Filmora"]
    }
  ];

  const mlAlgorithms = [
    "Linear_Regression",
    "Gradient_Descent",
    "Polynomial_Regression",
    "Ridge_Regularization",
    "Lasso_Regression",
    "ElasticNet_Regression",
    "Logistic_Regression",
    "SVM",
    "Decision Trees",
    "K-Nearest Neighbors",
    "Random Forest",
    "Stacking",
    "Agglomerative Clustering",
    "LightGBM",
    "Bagging",
    "Voting",
    "K-Means",
    "DBSCAN",
    "Naive Bayes",
    "AdaBoost",
    "Gradient Boosting",
    "XG Boost"
  ];

  const annAlgorithms = [
    "ANN",
    "CNN",
    "RNN",
    "LSTM",
    "GRU",
    "Transformers",
    "LLM"
  ];

  const ragAlgorithms = [
    "Semantic Retrieval",
    "BM25 Retrieval",
    "Hybrid Retrieval",
    "Query Expansion",
    "Multi-Query Retrieval",
    "Re-ranking (Cross-Encoder, RRF)",
    "Context-Aware & Semantic Chunking",
    "Parent Document & Sentence Window Retrieval",
    "Hierarchical RAG",
    "Hypothetical Document Embeddings (HyDE)",
    "Knowledge Graph RAG",
    "Self-RAG",
    "Corrective RAG (C-RAG)",
    "Agentic RAG"
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
                      if (skill === "Machine Learning") {
                        const iconUrl = getIconUrl(skill);
                        const isActive = activeSkill === skill;

                        return (
                          <motion.div
                            key={skill}
                            className="relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: categoryIndex * 0.1 + skillIndex * 0.03 }}
                            viewport={{ once: true }}
                          >
                            {/* Main badge */}
                            <motion.span
                              onClick={() => toggleSkill(skill)}
                              whileHover={{ scale: 1.05 }}
                              animate={{
                                scale: isActive ? 1.05 : 1,
                                boxShadow: isActive ? "0 0 15px rgba(255,100,100,0.3)" : "none",
                                borderColor: isActive ? "var(--pencil-color)" : "transparent"
                              }}
                              className={`flex items-center gap-2 px-4 py-2 
                                        rounded-md text-base font-patrick text-[var(--pencil-color)] 
                                        border cursor-pointer transition-all duration-300
                                        ${isActive
                                  ? 'bg-white border-[var(--pencil-color)] shadow-md ring-2 ring-[var(--paper-burnt)]'
                                  : 'bg-[var(--paper-burnt)] bg-opacity-30 border-gray-400 border-2' // Made it pop more by default too
                                }`}
                            >
                              <img src={iconUrl} alt="Machine Learning" className="w-5 h-5" />
                              <span className="font-bold">Machine Learning</span>

                              {/* Info dot */}
                              <span className={`ml-1 text-xs px-2 py-0.5 rounded-full transition-colors ${isActive ? 'bg-[var(--pencil-color)] text-white' : 'bg-gray-200'}`}>
                                {isActive ? '×' : 'i'}
                              </span>
                            </motion.span>

                            {/* Popup */}
                            <AnimatePresence>
                              {isActive && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                  className="absolute left-0 mt-2 z-50
                                            bg-white p-4 rounded-lg shadow-2xl border-2 border-[var(--pencil-color)] 
                                            w-[85vw] sm:w-80 max-h-[60vh] overflow-y-auto"
                                  style={{
                                    left: '50%',
                                    transform: 'translateX(-50%)', // Center relative to button, but constrained by screen logic if needed (simple centering for now)
                                    // marginLeft: '-50%' // Fallback/Alternative centering technique if transform is overridden
                                  }}
                                >
                                  <div className="flex justify-between items-center mb-2 sticky top-0 bg-white pb-2 border-b border-gray-100">
                                    <h4 className="font-patrick text-xl font-bold text-[var(--pencil-color)]">
                                      ML Algorithms
                                    </h4>
                                    <button onClick={(e) => { e.stopPropagation(); toggleSkill(skill); }} className="text-gray-400 hover:text-red-500">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                    </button>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                                    {mlAlgorithms.map((algo) => (
                                      <div
                                        key={algo}
                                        className="font-patrick text-sm text-gray-700 flex items-center gap-1.5"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--pencil-color)] opacity-60"></span>
                                        {algo.replace(/_/g, ' ')}
                                      </div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      }

                      if (skill === "Deep Learning") {
                        const iconUrl = getIconUrl(skill);
                        const isActive = activeSkill === skill;

                        return (
                          <motion.div
                            key={skill}
                            className="relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: categoryIndex * 0.1 + skillIndex * 0.03 }}
                            viewport={{ once: true }}
                          >
                            {/* Main badge */}
                            <motion.span
                              onClick={() => toggleSkill(skill)}
                              whileHover={{ scale: 1.05 }}
                              animate={{
                                scale: isActive ? 1.05 : 1,
                                boxShadow: isActive ? "0 0 15px rgba(255,100,100,0.3)" : "none",
                                borderColor: isActive ? "var(--pencil-color)" : "transparent"
                              }}
                              className={`flex items-center gap-2 px-4 py-2 
                                        rounded-md text-base font-patrick text-[var(--pencil-color)] 
                                        border cursor-pointer transition-all duration-300
                                        ${isActive
                                  ? 'bg-white border-[var(--pencil-color)] shadow-md ring-2 ring-[var(--paper-burnt)]'
                                  : 'bg-[var(--paper-burnt)] bg-opacity-30 border-gray-400 border-2' // Made it pop more by default too
                                }`}
                            >
                              <img src={iconUrl} alt="Deep Learning" className="w-5 h-5" />
                              <span className="font-bold">Deep Learning</span>

                              {/* Info dot */}
                              <span className={`ml-1 text-xs px-2 py-0.5 rounded-full transition-colors ${isActive ? 'bg-[var(--pencil-color)] text-white' : 'bg-gray-200'}`}>
                                {isActive ? '×' : 'i'}
                              </span>
                            </motion.span>

                            {/* Popup */}
                            <AnimatePresence>
                              {isActive && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                  className="absolute left-0 mt-2 z-50
                                            bg-white p-4 rounded-lg shadow-2xl border-2 border-[var(--pencil-color)] 
                                            w-[85vw] sm:w-80 max-h-[60vh] overflow-y-auto"
                                  style={{
                                    left: '50%',
                                    transform: 'translateX(-50%)', // Center relative to button, but constrained by screen logic if needed (simple centering for now)
                                    // marginLeft: '-50%' // Fallback/Alternative centering technique if transform is overridden
                                  }}
                                >
                                  <div className="flex justify-between items-center mb-2 sticky top-0 bg-white pb-2 border-b border-gray-100">
                                    <h4 className="font-patrick text-xl font-bold text-[var(--pencil-color)]">
                                      Neural Networks
                                    </h4>
                                    <button onClick={(e) => { e.stopPropagation(); toggleSkill(skill); }} className="text-gray-400 hover:text-red-500">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                    </button>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                                    {annAlgorithms.map((algo) => (
                                      <div
                                        key={algo}
                                        className="font-patrick text-sm text-gray-700 flex items-center gap-1.5"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--pencil-color)] opacity-60"></span>
                                        {algo.replace(/_/g, ' ')}
                                      </div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      }

                      if (skill === "RAG") {
                        const iconUrl = getIconUrl(skill);
                        const isActive = activeSkill === skill;

                        return (
                          <motion.div
                            key={skill}
                            className="relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: categoryIndex * 0.1 + skillIndex * 0.03 }}
                            viewport={{ once: true }}
                          >
                            {/* Main badge */}
                            <motion.span
                              onClick={() => toggleSkill(skill)}
                              whileHover={{ scale: 1.05 }}
                              animate={{
                                scale: isActive ? 1.05 : 1,
                                boxShadow: isActive ? "0 0 15px rgba(255,100,100,0.3)" : "none",
                                borderColor: isActive ? "var(--pencil-color)" : "transparent"
                              }}
                              className={`flex items-center gap-2 px-4 py-2 
                                        rounded-md text-base font-patrick text-[var(--pencil-color)] 
                                        border cursor-pointer transition-all duration-300
                                        ${isActive
                                  ? 'bg-white border-[var(--pencil-color)] shadow-md ring-2 ring-[var(--paper-burnt)]'
                                  : 'bg-[var(--paper-burnt)] bg-opacity-30 border-gray-400 border-2'
                                }`}
                            >
                              <img src={iconUrl} alt="RAG" className="w-5 h-5 object-contain" />
                              <span className="font-bold">RAG</span>

                              {/* Info dot */}
                              <span className={`ml-1 text-xs px-2 py-0.5 rounded-full transition-colors ${isActive ? 'bg-[var(--pencil-color)] text-white' : 'bg-gray-200'}`}>
                                {isActive ? '×' : 'i'}
                              </span>
                            </motion.span>

                            {/* Popup */}
                            <AnimatePresence>
                              {isActive && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                  className="absolute left-0 mt-2 z-50
                                            bg-white p-4 rounded-lg shadow-2xl border-2 border-[var(--pencil-color)] 
                                            w-[85vw] sm:w-96 max-h-[60vh] overflow-y-auto"
                                  style={{
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                  }}
                                >
                                  <div className="flex justify-between items-center mb-2 sticky top-0 bg-white pb-2 border-b border-gray-100">
                                    <h4 className="font-patrick text-xl font-bold text-[var(--pencil-color)]">
                                      RAG Techniques
                                    </h4>
                                    <button onClick={(e) => { e.stopPropagation(); toggleSkill(skill); }} className="text-gray-400 hover:text-red-500">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                    </button>
                                  </div>
                                  <div className="grid grid-cols-1 gap-y-1.5">
                                    {ragAlgorithms.map((algo) => (
                                      <div
                                        key={algo}
                                        className="font-patrick text-sm text-gray-700 flex items-start gap-1.5"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--pencil-color)] opacity-60 mt-1.5 flex-shrink-0"></span>
                                        <span>{algo}</span>
                                      </div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      }

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
