import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../../constants/techData';
import { Github, ExternalLink } from 'lucide-react';

export const ProjectsSection = () => {
  console.log('ProjectsSection rendered, projectsData:', projectsData);
  console.log('projectsData length:', projectsData?.length);
  console.log('projectsData content:', JSON.stringify(projectsData, null, 2));
  
  return (
    <section id="projects" className="p-6 sm:p-8 lg:p-12 bg-gray-900/80 dark:bg-gray-800/80 theme-transition lg:h-fit">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold theme-text-primary mb-8 sm:mb-10 lg:mb-12 text-center">Projects</h2>
        
        {/* Debug info */}
       
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projectsData && projectsData.length > 0 ? projectsData.map((project, index) => (
            <motion.div
              key={index}
              id={`project-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              className="premium-card rounded-2xl sm:rounded-3xl overflow-hidden figma-cursor depth-3 no-hover-lift"
              data-move
            >
              {/* Image Card at Top */}
              <div className="h-48 sm:h-56 lg:h-64 relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                {project.iconType === 'image' ? (
                  <img 
                    src={project.icon} 
                    alt={`${project.title} logo`}
                    className="w-full h-full object-fill"
                    onError={(e) => {
                      console.error(`Failed to load image: ${project.icon}`);
                      e.currentTarget.style.display = 'none';
                    }}
                    onLoad={() => {
                      console.log(`Successfully loaded image: ${project.icon}`);
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl sm:text-7xl lg:text-8xl opacity-90">{project.icon}</span>
                  </div>
                )}
              </div>
              
              {/* Content Section */}
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold theme-text-primary mb-3 sm:mb-4">{project.title}</h3>
                
                {/* Project Description */}
                <p className="theme-text-secondary mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">{project.description}</p>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {project.technologies.map((tech) => (
                    <motion.span 
                      key={tech} 
                      className="px-3 sm:px-4 py-1.5 sm:py-2 glass-intense rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium figma-cursor magnetic depth-1"
                      whileHover={{ scale: 1.05 }}
                      data-clickable
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-3 sm:gap-4">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-4 bg-gray-800 dark:bg-gray-700 text-white rounded-lg sm:rounded-xl font-medium text-sm sm:text-base hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200 figma-cursor"
                      data-clickable
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>GitHub</span>
                    </motion.a>
                  )}
                  
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-colors duration-200 figma-cursor"
                      data-clickable
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          )) : (
            <div className="col-span-full text-center py-12 bg-yellow-500/20 border-2 border-yellow-500 rounded-lg p-8">
              <p className="text-lg theme-text-secondary font-bold">⚠️ No projects found</p>
              <p className="text-sm theme-text-muted mt-2">This could mean:</p>
              <ul className="text-sm theme-text-muted mt-2 text-left max-w-md mx-auto">
                <li>• projectsData is undefined</li>
                <li>• projectsData is empty array</li>
                <li>• Import failed</li>
                <li>• Syntax error in techData.ts</li>
              </ul>
              <p className="text-sm theme-text-muted mt-4">Check console for more details</p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};
