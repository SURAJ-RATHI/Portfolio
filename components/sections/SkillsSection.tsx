import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../constants/techData';

export const SkillsSection = () => {
  return (
    <section id="skills" className="p-6 sm:p-8 lg:p-12 section-bg-alt theme-transition">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold theme-text-primary mb-8 sm:mb-10 lg:mb-12 text-center">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              id={`skill-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4, rotateY: 3 }}
              className="premium-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 figma-cursor depth-3 animate-float"
              data-move
            >
              <motion.div 
                className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br ${category.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center text-2xl sm:text-3xl mb-6 sm:mb-8 shadow-lg magnetic`}
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                {category.icon}
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 theme-text-primary">
                {category.title}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.5 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="px-3 sm:px-4 py-2 sm:py-3 glass-intense rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium figma-cursor magnetic theme-transition"
                    data-clickable
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};