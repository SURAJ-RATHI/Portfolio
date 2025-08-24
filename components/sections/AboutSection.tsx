import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MessageCircle } from 'lucide-react';
import { heroTechLogos, userSkills } from '../../constants/techData';
import { TechIcon } from '../TechIcon';
import TechLogos from '../TechLogos';
const profileImage = '/profile-image.png';

interface AboutSectionProps {
  mousePosition: { x: number; y: number };
}

// Helper function to get section-relative mouse position
const getSectionRelativePosition = (mousePosition: { x: number; y: number }) => {
  // Convert global mouse position to section-relative coordinates
  const maxOffset = 60; // Reduced movement for more subtle effect
  return {
    x: (mousePosition.x / window.innerWidth - 0.5) * maxOffset,
    y: (mousePosition.y / window.innerHeight - 0.5) * maxOffset
  };
};

// Helper function to check if position overlaps with main content
const isInContentArea = (position: any) => {
  const contentArea = {
    left: 25,  // Avoid center-left where profile and text are
    right: 75,
    top: 20,
    bottom: 80
  };
  
  const logoLeft = parseInt(position.left || position.right);
  const logoTop = parseInt(position.top || position.bottom);
  
  return (logoLeft >= contentArea.left && logoLeft <= contentArea.right &&
          logoTop >= contentArea.top && logoTop <= contentArea.bottom);
};

export const AboutSection = ({ mousePosition }: AboutSectionProps) => {
  const sectionRelativePosition = getSectionRelativePosition(mousePosition);
  
  return (
    <section id="about" className="relative p-4 sm:p-8 lg:p-12 min-h-screen flex items-center overflow-hidden sm:overflow-visible ">
      {/* New Scattered Tech Logos Background */}
      <TechLogos />
      
      {/* Floating elements layer (kept minimal); hero tech logos removed per request */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Minimal Code Symbols */}
        {['<>', '{}', '=>', '&&'].map((symbol, index) => (
          <motion.div
            key={`code-symbol-${index}`}
            className="absolute text-blue-500/20 dark:text-blue-300/5 font-mono font-bold"
            style={{
              left: `${10 + index * 12}%`,
              top: `${20 + index * 10}%`,
              fontSize: `${12 + Math.random() * 6}px`,
              zIndex: -3
            }}
            animate={{
              x: sectionRelativePosition.x * 0.08,
              y: sectionRelativePosition.y * 0.06,
              opacity: [0.1, 0.25, 0.1],
              rotate: [-2, 2, -2]
            }}
            transition={{
              x: { type: "spring", stiffness: 20, damping: 30 },
              y: { type: "spring", stiffness: 20, damping: 30 },
              opacity: {
                duration: 8 + index * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 1
              },
              rotate: {
                duration: 12 + index * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.6
              }
            }}
          >
            {symbol}
          </motion.div>
        ))}

        {/* Very Subtle Background Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            zIndex: -4
          }}
          animate={{
            backgroundPosition: [
              `${sectionRelativePosition.x * 0.1}px ${sectionRelativePosition.y * 0.1}px`,
              `${sectionRelativePosition.x * 0.1 + 15}px ${sectionRelativePosition.y * 0.1 + 15}px`,
              `${sectionRelativePosition.x * 0.1}px ${sectionRelativePosition.y * 0.1}px`
            ]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Minimal Geometric Shapes */}
        {[...Array(2)].map((_, index) => (
          <motion.div
            key={`geometric-${index}`}
            className="absolute"
            style={{
              left: `${20 + index * 20}%`,
              top: `${25 + index * 15}%`,
              width: `${30 + Math.random() * 20}px`,
              height: `${30 + Math.random() * 20}px`,
              zIndex: -5
            }}
            animate={{
              x: sectionRelativePosition.x * (0.04 + index * 0.02),
              y: sectionRelativePosition.y * (0.03 + index * 0.01),
              rotate: [0, 180, 0],
              scale: [1, 1.05, 1],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              x: { type: "spring", stiffness: 25, damping: 30 },
              y: { type: "spring", stiffness: 25, damping: 30 },
              rotate: {
                duration: 20 + index * 4,
                repeat: Infinity,
                ease: "linear",
                delay: index * 3
              },
              scale: {
                duration: 15 + index * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 2
              },
              opacity: {
                duration: 12 + index * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 1.5
              }
            }}
          >
            <div 
              className={`w-full h-full border border-blue-400/20 backdrop-blur-sm ${
                index % 3 === 0 ? 'rounded-full' : 
                index % 3 === 1 ? 'rounded-lg' : 
                'rounded-none'
              }`}
              style={{
                background: `linear-gradient(45deg, rgba(59, 130, 246, 0.08), rgba(147, 51, 234, 0.08))`,
                transform: `rotate(${index * 30}deg)`
              }}
            />
          </motion.div>
        ))}

        {/* Subtle Cursor Following Effect */}
        <motion.div
          className="absolute w-80 h-80 pointer-events-none"
          animate={{
            x: sectionRelativePosition.x * 0.5,
            y: sectionRelativePosition.y * 0.4,
          }}
          transition={{
            type: "spring",
            damping: 40,
            stiffness: 150,
            mass: 1
          }}
          style={{ zIndex: -6 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400/8 to-purple-400/8 dark:from-blue-500/2 dark:to-purple-500/2 blur-3xl" />
        </motion.div>
      </div>
      
      <div className="max-w-6xl w-full relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          {/* Name and Profile Image Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-6 sm:mb-8"
          >
            {/* Profile Image - No Animations */}
            <div className="relative flex-shrink-0 order-1 sm:order-none profile-image-container">
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-2xl flex items-center justify-center p-1">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                  {/* Profile Image */}
                  <img 
                    src={profileImage} 
                    alt="Suraj Rathi - Full Stack Developer"
                    className="w-full h-full object-cover rounded-full profile-image"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback Placeholder */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-700 rounded-full hidden">
                    <div className="w-full h-full flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold text-lg">
                      SR
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <div className="flex-1 min-w-0 text-left order-2 sm:order-none">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:text-[2.7rem]"
              >
                <span className="greeting-intro">
                  Hi There <span className="hand-emoji">👋</span>
                </span>
                <br />
                <span className="greeting-name">
                  I am Suraj Rathi
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0 }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl md:text-xl lg:text-2xl theme-text-secondary mb-3 sm:mb-4 font-medium leading-relaxed"
              >
                SDE Intern -Kalpkriti | VVDN
                <br className="block sm:hidden" />
                | MERN | Gen AI | DSA 
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-start theme-text-muted"
              >
               
              </motion.div>
            </div>
          </motion.div>

          {/* About Me Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0 }}
            viewport={{ once: true }}
            className="prose prose-sm sm:prose-base lg:prose-xl dark:prose-invert max-w-none mb-6 sm:mb-8"
          >
            <p className="theme-text-secondary leading-relaxed text-base sm:text-lg lg:text-lg font-medium text-left pl-2">
            I'm a Full-Stack Web Developer from India, passionate about creating scalable, high-performance websites with pixel-perfect UI/UX.
I leverage AI and GenAI to accelerate development, boost productivity, and enhance projects with features like chatbots and smart personalization.Currently exploring AI & Machine Learning, I blend creativity and technology to craft unforgettable digital experiences. </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
            viewport={{ once: true }}
            className="flex flex-row gap-3 sm:gap-4 justify-center"
          >
            {/* Download CV - simple primary */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 text-white px-4 sm:px-5 py-2.5 sm:py-3 shadow-sm hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 text-sm sm:text-base font-semibold w-full sm:w-auto"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Download CV</span>
            </motion.a>

            {/* Contact Me - clean outline */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const el = document.getElementById('contact');
                el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300/70 dark:border-gray-600/60 px-4 sm:px-5 py-2.5 sm:py-3 theme-text-primary hover:bg-gray-100/70 dark:hover:bg-gray-800/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400/50 text-sm sm:text-base font-semibold w-full sm:w-auto contact-button-translucent"
              data-clickable
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Contact Me</span>
            </motion.button>


          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};