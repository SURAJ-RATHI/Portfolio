import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Eye, EyeOff, Shield, Key, FileText, Code } from 'lucide-react';

interface SecretFolderProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function SecretFolder({ isOpen, onToggle }: SecretFolderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const secretProjects = [
    {
      id: 'ai-assistant',
      name: 'AI Personal Assistant',
      description: 'Advanced AI-powered personal assistant with voice recognition and machine learning capabilities.',
      technology: 'Python, TensorFlow, Speech Recognition',
      status: 'In Development',
      icon: '🤖'
    },
    {
      id: 'blockchain-voting',
      name: 'Blockchain Voting System',
      description: 'Secure, transparent voting system built on blockchain technology.',
      technology: 'Solidity, Web3.js, React',
      status: 'Prototype',
      icon: '🗳️'
    },
    {
      id: 'neural-network',
      name: 'Custom Neural Network Framework',
      description: 'Lightweight neural network framework built from scratch for educational purposes.',
      technology: 'C++, CUDA, Python Bindings',
      status: 'Research',
      icon: '🧠'
    }
  ];

  const handleAuthentication = () => {
    // Simple password check (in real app, this would be more secure)
    if (password === 'portfolio2025' || password === 'secret123') {
      setIsAuthenticated(true);
      setPassword('');
      setAttempts(0);
    } else {
      setAttempts(attempts + 1);
      setPassword('');
      
      // Add some security delay after failed attempts
      if (attempts >= 2) {
        setTimeout(() => {
          setAttempts(0);
        }, 3000);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAuthentication();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm figma-cursor"
        >
          <motion.div
            initial={{ opacity: 0, rotateX: -15 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: 15 }}
            className="w-full max-w-4xl premium-card rounded-3xl p-8 theme-transition depth-5"
            data-move
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-4"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 bg-gradient-to-br from-red-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Lock className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Secret Projects</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Classified Development Portfolio</p>
                </div>
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onToggle}
                className="w-8 h-8 rounded-full bg-red-500/20 text-red-600 dark:text-red-400 hover:bg-red-500/30 transition-colors figma-cursor"
                data-clickable
              >
                ×
              </motion.button>
            </div>

            {!isAuthenticated ? (
              /* Authentication Section */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Shield className="w-12 h-12 text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Access Restricted</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                  This section contains confidential projects and experimental code. Please enter the access password.
                </p>

                {attempts >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg p-4 mb-6 max-w-sm mx-auto"
                  >
                    <p className="text-red-800 dark:text-red-300 text-sm">
                      Too many failed attempts. Please wait 3 seconds...
                    </p>
                  </motion.div>
                )}

                <div className="max-w-sm mx-auto space-y-4">
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter password..."
                      disabled={attempts >= 3}
                      className="w-full px-4 py-3 pr-12 glass rounded-xl border border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors text-gray-900 dark:text-white figma-cursor"
                      data-clickable
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors figma-cursor"
                      data-clickable
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAuthentication}
                    disabled={attempts >= 3 || !password}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed figma-cursor"
                    data-clickable
                  >
                    <Key className="w-5 h-5 inline mr-2" />
                    Authenticate
                  </motion.button>
                </div>

                <div className="mt-8 text-xs text-gray-500 dark:text-gray-400">
                  <p>Hint: Try "portfolio2025" or "secret123"</p>
                  <p className="mt-1">Attempts: {attempts}/3</p>
                </div>
              </motion.div>
            ) : (
              /* Authenticated Content */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center mb-8 p-4 bg-green-100 dark:bg-green-900/30 rounded-xl border border-green-300 dark:border-green-700"
                >
                  <Unlock className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                  <span className="text-green-800 dark:text-green-200 font-semibold">Access Granted - Welcome to the Secret Lab</span>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {secretProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -8 }}
                      className="premium-card rounded-2xl p-6 figma-cursor hover-lift animate-shimmer-advanced"
                      data-move
                    >
                      <div className="text-4xl mb-4">{project.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Code className="w-3 h-3 mr-2" />
                          {project.technology}
                        </div>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          project.status === 'In Development' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200' :
                          project.status === 'Prototype' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200' :
                          'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200'
                        }`}>
                          {project.status}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600"
                >
                  <div className="text-center">
                    <FileText className="w-8 h-8 mx-auto text-gray-400 mb-3" />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Confidential Notes</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      These projects represent experimental work and research initiatives. 
                      Some may never see the light of day, others might revolutionize the industry. 
                      The future is built in secret labs like this one.
                    </p>
                  </div>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsAuthenticated(false)}
                  className="mt-6 w-full px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors figma-cursor"
                  data-clickable
                >
                  Lock & Exit
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}