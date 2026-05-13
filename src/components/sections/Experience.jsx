import { motion } from 'framer-motion';
import experienceData from '../../data/experienceData.json';

const Experience = () => {
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
          Experience
        </motion.h2>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
            style={{
              backgroundImage: `repeating-linear-gradient(
                to bottom,
                var(--pencil-color) 0px,
                var(--pencil-color) 6px,
                transparent 6px,
                transparent 12px
              )`,
              opacity: 0.3,
            }}
          ></div>

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-16 md:pl-20 mb-12 last:mb-0"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-4 md:left-6 top-6 w-4 h-4 md:w-5 md:h-5 rounded-full border-[3px] border-[var(--pencil-color)] bg-white z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                viewport={{ once: true }}
              />

              {/* Experience card */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                {/* Decorative tape */}
                <div className="absolute -top-1 left-8 w-16 h-6 bg-yellow-100 opacity-70 rotate-[-2deg] rounded-sm border border-yellow-200 z-10"></div>
                <div className="absolute -top-1 right-12 w-12 h-5 bg-blue-50 opacity-60 rotate-[3deg] rounded-sm border border-blue-100 z-10"></div>

                {/* Card content */}
                <div className="p-5 sm:p-6 md:p-8 pt-6 sm:pt-7 md:pt-9">
                  {/* Header section */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* Company initial */}
                      <motion.div
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[var(--paper-burnt)] bg-opacity-40 border-2 border-[var(--pencil-color)] border-opacity-20 flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="font-caveat text-xl sm:text-2xl font-bold text-[var(--pencil-color)]">
                          {exp.company.charAt(0)}
                        </span>
                      </motion.div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-caveat font-bold text-[var(--pencil-color)] leading-tight">
                          {exp.company}
                        </h3>
                        <p className="text-base sm:text-lg font-patrick text-[var(--pencil-color)] opacity-80 mt-0.5">
                          {exp.role}
                        </p>
                        <p className="text-sm font-patrick text-[var(--pencil-color)] opacity-60 italic">
                          {exp.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Date & location */}
                    <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 sm:gap-1 text-right flex-shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-patrick bg-[var(--paper-burnt)] bg-opacity-30 text-[var(--pencil-color)] border border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.startDate} – {exp.endDate}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-patrick text-[var(--pencil-color)] opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-200 my-4"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        to right,
                        var(--pencil-color) 0px,
                        var(--pencil-color) 4px,
                        transparent 4px,
                        transparent 8px
                      )`,
                      opacity: 0.15,
                    }}
                  ></div>

                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {exp.highlights.map((highlight, hIndex) => (
                      <motion.li
                        key={hIndex}
                        className="flex items-start gap-2.5 font-patrick text-[var(--pencil-color)] text-sm sm:text-base"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.15 + hIndex * 0.08 }}
                        viewport={{ once: true }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--pencil-color)] opacity-40 mt-2 flex-shrink-0"></span>
                        <span className="opacity-80">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {exp.tags.map((tag, tIndex) => (
                      <motion.span
                        key={tIndex}
                        className="px-3 py-1 text-xs font-patrick rounded-md bg-[var(--paper-burnt)] bg-opacity-20 text-[var(--pencil-color)] border border-gray-200"
                        whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Bottom decorative line */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[var(--pencil-color)] to-transparent opacity-[0.07]"></div>
              </div>
            </motion.div>
          ))}

          {/* "More to come" indicator */}
          <motion.div
            className="relative pl-16 md:pl-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: experienceData.length * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Timeline dot - smaller, dashed */}
            <div className="absolute left-[18px] md:left-[26px] top-2 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full border-2 border-dashed border-[var(--pencil-color)] opacity-30"></div>
            <p className="font-patrick text-sm text-[var(--pencil-color)] opacity-40 italic pt-1">
              More experiences coming soon...
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
