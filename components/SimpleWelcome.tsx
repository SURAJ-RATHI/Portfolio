import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SimpleWelcomeProps {
  onComplete: () => void;
}

export const SimpleWelcome = ({ onComplete }: SimpleWelcomeProps) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [showLine, setShowLine] = useState(false);
  
  const greetings = [
    'नमस्ते','राम राम', 'Hello', 'Hola', 'Bonjour', 'こんにちは', '안녕하세요', 
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 400);
    
    // Calculate total time for all greetings to cycle through
    const totalGreetingTime = greetings.length * 400; // 8 greetings * 400ms = 3.2 seconds
    
    // Show horizontal line after all greetings have finished cycling
    const lineTimeout = setTimeout(() => {
      setShowLine(true);
    }, totalGreetingTime);
    
    // Complete welcome after line finishes moving
    const completeTimeout = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, totalGreetingTime + 1500); // 3.2s + 1.5s line animation = 4.7s total
    
    return () => {
      clearInterval(interval);
      clearTimeout(lineTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);
  
  return (
    <motion.div 
      className="fixed inset-0 bg-gray-50 dark:bg-gray-900 flex items-center justify-center z-[9995] overflow-hidden"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >


      {/* Horizontal Line - Starts from bottom and moves up */}
      <AnimatePresence>
        {showLine && (
          <motion.div
            initial={{ 
              opacity: 0, 
              scaleX: 0,
              y: "100vh" // Start from bottom of screen
            }}
            animate={{ 
              opacity: 1, 
              scaleX: 1,
              y: "-100vh" // Move to top of screen (beyond viewport)
            }}
            exit={{ 
              opacity: 0, 
              scaleX: 0,
              y: "-100vh"
            }}
            transition={{ 
              duration: 1.5, 
              ease: [0.25, 0.1, 0.25, 1],
              scaleX: { duration: 0.6, ease: "easeOut" },
              y: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
            }}
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-lg"
            style={{ zIndex: 10000 }}
          />
        )}
      </AnimatePresence>

      {/* Reveal Mask - Follows the horizontal line to reveal main website */}
      <motion.div
        initial={{ 
          clipPath: "inset(100% 0 0 0)" // Start fully hidden (masked from bottom)
        }}
        animate={{ 
          clipPath: showLine ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)" // Reveal from bottom to top
        }}
        transition={{ 
          duration: 1.5,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        className="absolute inset-0 bg-gray-50 dark:bg-gray-900"
        style={{ zIndex: 9996 }}
      />

      {/* Greeting Text */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ 
          opacity: showLine ? 0 : 1, 
          y: showLine ? -50 : 0 
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-center"
      >
        <motion.h1 
          key={currentGreeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-sf-display"
        >
          {greetings[currentGreeting]}
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};