import React from 'react';
import { motion } from 'framer-motion';
// Removed global tech logos - now only in AboutSection

interface BackgroundElementsProps {
  mousePosition: { x: number; y: number };
  backgroundY: any;
  scale: any;
  rotateX: any;
}

export const BackgroundElements = ({ mousePosition, backgroundY, scale, rotateX }: BackgroundElementsProps) => {
  return (
    <>
      {/* Enhanced Multi-layer Background System */}
      <motion.div 
        className="fixed inset-0 gradient-mesh opacity-40 transform-3d"
        style={{ 
          y: backgroundY, 
          scale,
          rotateX: rotateX,
        }}
      />

      {/* Global Floating Elements */}
      <motion.div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Minimal Floating Particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`global-particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400/20 dark:bg-blue-400/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: -7
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * (0.0005 + i * 0.0001),
              y: (mousePosition.y - window.innerHeight / 2) * (0.0005 + i * 0.0001),
              scale: [0.5, 1.2, 0.5],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360]
            }}
            transition={{
              x: { type: "spring", stiffness: 10, damping: 30 },
              y: { type: "spring", stiffness: 10, damping: 30 },
              scale: {
                duration: 25 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1
              },
              opacity: {
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              },
              rotate: {
                duration: 40 + i * 4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.5
              }
            }}
          />
        ))}

        {/* Subtle Mouse Interactive Glow */}
        <motion.div
          className="absolute w-72 h-72 pointer-events-none"
          animate={{
            x: mousePosition.x - 144,
            y: mousePosition.y - 144,
          }}
          transition={{
            type: "spring",
            damping: 40,
            stiffness: 150,
            mass: 1
          }}
          style={{ zIndex: -8 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400/8 to-purple-400/8 dark:from-blue-500/2 dark:to-purple-500/2 blur-3xl" />
        </motion.div>
      </motion.div>
    </>
  );
};