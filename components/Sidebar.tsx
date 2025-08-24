import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Briefcase, 
  FolderOpen, 
  FileText, 
  Wrench, 
  Mail,
  Github,
  Linkedin,
  Code,
  Home,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  onScrollToSection: (sectionId: string) => void;
  isOpen: boolean;
  onToggle: (open: boolean) => void;
}

export function Sidebar({ onScrollToSection }: SidebarProps) {
  const menuItems = [
    { id: 'about', label: 'About me', icon: User, isActive: true },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com/in/surajrathi', 
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      hoverBg: 'hover:bg-blue-100 dark:hover:bg-blue-900/40'
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/surajrathi', 
      color: 'text-gray-800 dark:text-gray-200',
      bg: 'bg-gray-50 dark:bg-gray-700',
      hoverBg: 'hover:bg-gray-100 dark:hover:bg-gray-600'
    },
    { 
      name: 'LeetCode', 
      icon: Code, 
      url: 'https://leetcode.com/surajrathi', 
      color: 'text-orange-600 dark:text-orange-400',
      bg: 'bg-orange-50 dark:bg-orange-900/20',
      hoverBg: 'hover:bg-orange-100 dark:hover:bg-orange-900/40'
    }
  ];

  return (
    <motion.div
      initial={{ x: -280, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -280, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="w-72 glass border-r border-gray-200/50 dark:border-gray-700/30 flex flex-col h-full theme-transition"
    >
      {/* Enhanced Header with Breadcrumb */}
      <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/30">
        {/* Breadcrumb Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center space-x-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-4"
        >
          <Home className="w-3 h-3" />
          <ChevronRight className="w-3 h-3" />
          <span>Suraj Rathi</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-700 dark:text-gray-300">Developer</span>
        </motion.div>

        {/* Profile Section */}
        <motion.div 
          className="text-center figma-cursor"
          whileHover={{ scale: 1.02 }}
          data-move
        >
          {/* Enhanced Profile Avatar */}
          <motion.div 
            className="w-24 h-24 mx-auto mb-4 relative figma-cursor magnetic"
            whileHover={{ scale: 1.05, rotate: 2 }}
            data-clickable
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-lg flex items-center justify-center">
              <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-700 rounded-lg"></div>
              </div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-lg opacity-75"></div>
            
            {/* Status indicator */}
            <motion.div
              className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-white rounded-full pulse-ring"></div>
            </motion.div>
          </motion.div>

          {/* Name and Role */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              Suraj Rathi
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-3">
              Software Developer
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-1 premium-scrollbar overflow-y-auto">
        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 px-3">
          Portfolio
        </div>
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          
          return (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 + 0.3 }}
              onClick={() => onScrollToSection(item.id)}
              className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-300 group figma-cursor magnetic ${
                item.isActive 
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shadow-sm' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300'
              }`}
              data-clickable
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 transition-all group-hover:scale-110 ${
                item.isActive 
                  ? 'bg-blue-200/50 dark:bg-blue-800/50' 
                  : 'bg-gray-200/50 dark:bg-gray-600/50'
              }`}>
                <Icon className={`w-4 h-4 transition-colors ${
                  item.isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
                }`} />
              </div>
              <span className="text-sm font-medium flex-1">{item.label}</span>
              {item.isActive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 bg-blue-500 rounded-full"
                />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* Enhanced Social Links Section */}
      <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/30 space-y-4">
        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3">
          Connect
        </div>
        <div className="flex justify-between px-2">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 rounded-xl ${social.bg} ${social.hoverBg} flex items-center justify-center ${social.color} transition-all duration-300 shadow-sm hover:shadow-md figma-cursor magnetic depth-1`}
                title={social.name}
                data-clickable
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            );
          })}
        </div>

        {/* Enhanced Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="premium-card p-4 rounded-xl figma-cursor animate-shimmer"
          data-clickable
        >
          <div className="flex items-center text-sm">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 relative">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-green-500 rounded-full pulse-ring"></div>
            </div>
            <div>
              <div className="font-semibold text-green-700 dark:text-green-300">Available for Work</div>
              <div className="text-xs text-green-600 dark:text-green-400">Ready for opportunities</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}