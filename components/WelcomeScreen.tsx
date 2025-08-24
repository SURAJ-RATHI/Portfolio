import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WelcomeScreenProps {
  onComplete: () => void;
}

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isCompleting, setIsCompleting] = useState(false);

  // Modern loading steps with developer theme
  const steps = [
    { text: "Initializing portfolio...", delay: 200 },
    { text: "Loading components...", delay: 300 },
    { text: "Connecting to resume.json...", delay: 250 },
    { text: "Fetching projects data...", delay: 200 },
    { text: "Preparing experience...", delay: 250 },
    { text: "Ready! Welcome to Suraj's Portfolio", delay: 400 }
  ];

  useEffect(() => {
    let stepTimer: NodeJS.Timeout;
    let progressTimer: NodeJS.Timeout;
    let completeTimer: NodeJS.Timeout;

    const runLoadingSequence = () => {
      // Progress animation
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 2;
        });
      }, 40);

      // Step progression
      const runNextStep = () => {
        if (currentStep < steps.length - 1) {
          stepTimer = setTimeout(() => {
            setCurrentStep(prev => prev + 1);
            runNextStep();
          }, steps[currentStep].delay);
        } else {
          // Final step reached
          setIsCompleting(true);
          completeTimer = setTimeout(() => {
            onComplete();
          }, 600);
        }
      };

      runNextStep();
    };

    runLoadingSequence();

    return () => {
      clearTimeout(stepTimer);
      clearTimeout(progressTimer);
      clearTimeout(completeTimer);
    };
  }, [currentStep, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 0.95,
        filter: "blur(10px)"
      }}
      transition={{ 
        exit: { 
          duration: 0.8, 
          ease: [0.25, 0.1, 0.25, 1]
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
      }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-8">
        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 
            className="text-4xl font-light text-white mb-2 tracking-wide"
            style={{ 
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              fontWeight: 300
            }}
          >
            Suraj Rathi
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
        </motion.div>

        {/* Terminal-style Loading */}
        <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-gray-800/50 p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="ml-4 text-gray-400 text-sm font-mono">
              portfolio-loader
            </div>
          </div>

          {/* Loading Steps */}
          <div className="text-left space-y-3 h-32 overflow-hidden">
            <AnimatePresence mode="wait">
              {steps.map((step, index) => (
                index <= currentStep && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: index === currentStep ? 1 : 0.6, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center text-sm font-mono ${
                      index === currentStep ? 'text-green-400' : 'text-gray-500'
                    }`}
                  >
                    <span className="mr-3">
                      {index < currentStep ? '✓' : index === currentStep ? '⟩' : '○'}
                    </span>
                    <span>{step.text}</span>
                    {index === currentStep && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="ml-1"
                      >
                        _
                      </motion.span>
                    )}
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-4 text-gray-400 text-sm font-mono"
          >
            {progress.toFixed(0)}% complete
          </motion.div>
        </div>

        {/* Completion Animation */}
        {isCompleting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeInOut"
                }}
                className="w-16 h-16 border-2 border-green-400 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-green-400 text-2xl"
                >
                  ✓
                </motion.div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-white font-medium"
              >
                Portfolio loaded successfully!
              </motion.p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Subtle corner decorations */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-blue-400/30"></div>
      <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-blue-400/30"></div>
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-blue-400/30"></div>
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-blue-400/30"></div>
    </motion.div>
  );
}