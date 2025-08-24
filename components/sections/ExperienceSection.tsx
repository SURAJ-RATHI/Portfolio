import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../../constants/techData';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="p-6 sm:p-8 lg:p-12 section-bg-alt theme-transition">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold theme-text-primary mb-8 sm:mb-10 lg:mb-12 text-center">Experience</h2>

        <div className="relative max-w-4xl mx-auto">
          <motion.div 
            className="absolute left-4 sm:left-6 lg:left-8 top-8 bottom-8 w-0.5 sm:w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />
          
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                <motion.div 
                  className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl ${exp.iconType === 'image' ? 'bg-white p-2' : `bg-gradient-to-br ${exp.color}`} flex items-center justify-center shadow-lg figma-cursor magnetic depth-2`}
                  whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                  data-move
                >
                  {exp.iconType === 'image' ? (
                    <img 
                      src={exp.icon} 
                      alt={`${exp.company} logo`}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                    />
                  ) : (
                    <span className="text-lg sm:text-xl lg:text-2xl">{exp.icon}</span>
                  )}
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="ml-4 sm:ml-6 lg:ml-8 flex-1 premium-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 figma-cursor depth-2"
                  data-move
                >
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold theme-text-primary mb-2">{exp.company}</h3>
                  <p className="text-base sm:text-lg lg:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{exp.position}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center theme-text-muted mb-3 sm:mb-4 space-y-1 sm:space-y-0 sm:space-x-4">
                    <span className="text-sm sm:text-base">{exp.duration}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-sm sm:text-base">{exp.location}</span>
                  </div>
                  <p className="theme-text-secondary leading-relaxed text-sm sm:text-base">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};