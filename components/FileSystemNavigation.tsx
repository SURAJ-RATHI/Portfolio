import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Folder, 
  FolderOpen, 
  File, 
  User, 
  Briefcase, 
  Code2, 
  Wrench,
  Mail,
  FileText,
  Lock,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  ChevronLeft,
  Code,
  Menu
} from 'lucide-react';

interface FileSystemItem {
  id: string;
  name: string;
  type: 'folder' | 'file';
  icon?: React.ComponentType<any>;
  children?: FileSystemItem[];
  path: string;
  isSecret?: boolean;
  href?: string;
}

interface FileSystemNavigationProps {
  onNavigate: (path: string, item: FileSystemItem) => void;
  currentPath: string;
  onToggleSidebar?: (isOpen: boolean) => void;
}

const fileSystemStructure: FileSystemItem = {
  id: 'home',
  name: 'Home',
  type: 'folder',
  icon: Home,
  path: '/',
  children: [
    {
      id: 'suraj-rathi',
      name: 'Suraj Rathi - Developer',
      type: 'folder',
      icon: User,
      path: '/suraj-rathi',
      children: [
        {
          id: 'about',
          name: 'About',
          type: 'file',
          icon: File,
          path: '/suraj-rathi/about'
        },
        {
          id: 'experience',
          name: 'Experience',
          type: 'folder',
          icon: Briefcase,
          path: '/suraj-rathi/experience',
          children: [
            {
              id: 'kalpkriti',
              name: 'kalpkriti.pdf',
              type: 'file',
              icon: FileText,
              path: '/suraj-rathi/experience/kalpkriti'
            },
            {
              id: 'vvdn',
              name: 'vvdn.pdf',
              type: 'file',
              icon: FileText,
              path: '/suraj-rathi/experience/vvdn'
            }
          ]
        },
        {
          id: 'projects',
          name: 'Projects',
          type: 'folder',
          icon: Code2,
          path: '/suraj-rathi/projects',
          children: [
            {
              id: 'fastgen-ai',
              name: 'FastGen-AI',
              type: 'file',
              icon: File,
              path: '/suraj-rathi/projects/fastgen-ai'
            },
            {
              id: 'kodr',
              name: 'Kodr',
              type: 'file',
              icon: File,
              path: '/suraj-rathi/projects/kodr'
            },
            {
              id: 'dev100x',
              name: 'Dev100X',
              type: 'file',
              icon: File,
              path: '/suraj-rathi/projects/dev100x'
            },
            {
              id: 'dev-lobby',
              name: 'Dev-Lobby',
              type: 'file',
              icon: File,
              path: '/suraj-rathi/projects/dev-lobby'
            }
          ]
        },
        {
          id: 'skills',
          name: 'Skills',
          type: 'folder',
          icon: Wrench,
          path: '/suraj-rathi/skills',
          children: [
            {
              id: 'frontend',
              name: 'Frontend',
              type: 'file',
              icon: File,
              path: '/suraj-rathi/skills/frontend'
            },
            {
              id: 'backend',
              name: 'Backend',
              type: 'file',
              icon: File,
              path: '/suraj-rathi/skills/backend'
            },
            {
              id: 'languages',
              name: 'Languages',
              type: 'file',
              icon: File,
              path: '/suraj-rathi/skills/languages'
            },
            {
              id: 'tools',
              name: 'Tools & IDEs',
              type: 'file',
              icon: File,
              path: '/suraj-rathi/skills/tools'
            },

          ]
        },
        {
          id: 'resume',
          name: 'Resume.pdf',
          type: 'file',
          icon: FileText,
          path: '/suraj-rathi/resume'
        },
        {
          id: 'social-handle',
          name: 'social-handle',
          type: 'folder',
          icon: MessageCircle,
          path: '/suraj-rathi/social-handle',
          children: [
            {
              id: 'linkedin',
              name: 'LinkedIn.profile',
              type: 'file',
              icon: Linkedin,
              path: '/suraj-rathi/social-handle/linkedin',
              href: 'https://www.linkedin.com/in/suraj127021/'
            },
            {
              id: 'github',
              name: 'GitHub.profile',
              type: 'file',
              icon: Github,
              path: '/suraj-rathi/social-handle/github',
              href: 'https://github.com/SURAJ-RATHI'
            },
            {
              id: 'gmail',
              name: 'Gmail.contact',
              type: 'file',
              icon: Mail,
              path: '/suraj-rathi/social-handle/gmail',
              href: 'mailto:surajrathi127021@gmail.com'
            },
            {
              id: 'whatsapp',
              name: 'WhatsApp.contact',
              type: 'file',
              icon: MessageCircle,
              path: '/suraj-rathi/social-handle/whatsapp',
              href: 'https://wa.me/917015506489'
            },
            {
                      id: 'twitter',
        name: 'Twitter.profile',
        type: 'file',
        icon: Twitter,
        path: '/suraj-rathi/social-handle/twitter',
        href: 'https://twitter.com/SurajRathi65983'
            },
            {
              id: 'leetcode',
              name: 'leetcode.profile',
              type: 'file',
              icon: Code,
              path: '/suraj-rathi/social-handle/leetcode',
              href: 'https://leetcode.com/u/SURYA-0155/'
            }
          ]
        },
        {
          id: 'contact',
          name: 'Contact.vcf',
          type: 'file',
          icon: Mail,
          path: '/suraj-rathi/contact'
        },
        {
          id: 'secret-folder',
          name: '.secret-projects',
          type: 'folder',
          icon: Lock,
          path: '/suraj-rathi/secret-folder',
          isSecret: true,
          children: [
            {
              id: 'confidential-project',
              name: 'Confidential_Project.enc',
              type: 'file',
              icon: File,
              path: '/suraj-rathi/secret-folder/confidential-project',
              isSecret: true
            },
            {
              id: 'experimental-code',
              name: 'Experimental_Code.js',
              type: 'file',
              icon: File,
              path: '/suraj-rathi/secret-folder/experimental-code',
              isSecret: true
            }
          ]
        }
      ]
    }
  ]
};

export function FileSystemNavigation({ onNavigate, currentPath, onToggleSidebar }: FileSystemNavigationProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['home', 'suraj-rathi']));
  const [navigationVisible, setNavigationVisible] = useState(true);
  
  // Detect mobile device
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId);
    } else {
      newExpanded.add(folderId);
    }
    setExpandedFolders(newExpanded);
  };

  const handleItemClick = (item: FileSystemItem) => {
    console.log('Item clicked:', item);
    if (item.type === 'folder') {
      // For folders, single click only toggles expansion
      console.log('Toggling folder expansion:', item.name);
      toggleFolder(item.id);
    } else {
      // For files, single click navigates to the content
      console.log('Navigating to file:', item.name);
      onNavigate(item.path, item);
      
      // Auto-hide sidebar on mobile when navigating to a file
      if (isMobile && onToggleSidebar) {
        setTimeout(() => {
          onToggleSidebar(false);
        }, 100);
      }
    }
  };

  const handleDoubleClick = (item: FileSystemItem) => {
    // Double click always navigates, regardless of type
    console.log('Double click on item:', item);
    if (item.type === 'folder') {
      console.log('Double click on folder - navigating to section:', item.name);
    } else {
      console.log('Double click on file - navigating to section:', item.name);
    }
    onNavigate(item.path, item);
    
    // Auto-hide sidebar on mobile when double-clicking
    if (isMobile && onToggleSidebar) {
      setTimeout(() => {
        onToggleSidebar(false);
      }, 100);
    }
  };

  const handleToggleNavigation = () => {
    const newState = !navigationVisible;
    setNavigationVisible(newState);
    
    // Use setTimeout to prevent state update conflicts
    setTimeout(() => {
      if (onToggleSidebar) {
        onToggleSidebar(newState);
      }
    }, 0);
  };

  const renderMacOSFolder = (item: FileSystemItem, depth: number = 0) => {
    const isExpanded = expandedFolders.has(item.id);
    const isSelected = currentPath === item.path;
    
    return (
      <div key={item.id} className={`${item.isSecret ? 'opacity-80' : ''}`}>
        <motion.div
          whileHover={{ scale: 1.01, x: 2 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => handleItemClick(item)}
          onDoubleClick={() => handleDoubleClick(item)}
          className={`flex items-center py-2.5 px-3 rounded-lg transition-all cursor-pointer group ${
            isSelected 
              ? 'bg-blue-500/20 dark:bg-blue-500/30 text-blue-700 dark:text-blue-300 shadow-sm' 
              : 'hover:theme-hover-bg theme-text-secondary'
          } ${item.isSecret ? 'border border-dashed theme-border-secondary' : ''}`}
          style={{ paddingLeft: `${12 + depth * 24}px` }}
          data-clickable
        >
          {/* macOS-style folder/file icon - NO ARROWS */}
          <motion.div
            animate={{ 
              scale: isSelected ? 1.1 : 1
            }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="w-5 h-5 mr-3 flex-shrink-0"
          >
            {item.type === 'folder' ? (
              <motion.div
                className={`w-5 h-5 rounded-sm ${
                  isExpanded 
                    ? 'text-blue-500 dark:text-blue-400' 
                    : 'text-blue-600 dark:text-blue-500'
                } group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors`}
                whileHover={{ scale: 1.1 }}
              >
                {isExpanded ? <FolderOpen className="w-5 h-5" /> : <Folder className="w-5 h-5" />}
              </motion.div>
            ) : (
              <motion.div
                className={`w-5 h-5 ${
                  isSelected 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'theme-text-muted'
                } group-hover:theme-text-secondary transition-colors`}
                whileHover={{ scale: 1.1 }}
              >
                {item.icon ? <item.icon className="w-5 h-5" /> : <File className="w-5 h-5" />}
              </motion.div>
            )}
          </motion.div>
          
          {/* File/folder name with navigation hint */}
          <span className={`text-sm font-medium ${
            item.isSecret ? 'italic font-normal' : ''
          } flex-1 truncate ${item.type === 'file' ? 'cursor-pointer' : ''}`}>
            {item.name}
            {item.type === 'file' && (
              <span className="text-xs text-gray-400 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                
              </span>
            )}
          </span>
          
          {/* Secret indicator */}
          {item.isSecret && (
            <Lock className="w-3 h-3 ml-2 opacity-50 theme-text-muted" />
          )}
        </motion.div>
        
        {/* Children with smooth animation */}
        <AnimatePresence>
          {item.type === 'folder' && isExpanded && item.children && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-1 space-y-0.5">
                {item.children.map(child => renderMacOSFolder(child, depth + 1))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full relative">
              {/* Enhanced header with toggle functionality */}
        <div className="flex items-center justify-between mb-4 p-3 glass rounded-xl border theme-border-primary flex-shrink-0">
          <motion.div
            className="flex items-center space-x-3 mt-2"
            animate={{ opacity: navigationVisible ? 1 : 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.h3 
              className="text-sm font-semibold theme-text-secondary"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif' }}
            >
              Navigator
            </motion.h3>
          </motion.div>
          
          {/* Mobile toggle button */}
          {isMobile && (
            <motion.button
              onClick={() => onToggleSidebar && onToggleSidebar(false)}
              className="p-2 rounded-lg hover:theme-hover-bg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Close Navigation"
            >
              <ChevronLeft className="w-4 h-4 theme-text-secondary" />
            </motion.button>
          )}
        </div>

      <AnimatePresence mode="wait">
        {navigationVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.23, 1, 0.32, 1] 
            }}
            className="flex-1 flex flex-col min-h-0"
          >
            {/* File System Tree */}
            <div className="flex-1 space-y-1 overflow-y-auto sidebar-scrollbar pb-20 min-h-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {renderMacOSFolder(fileSystemStructure)}
              </motion.div>
            </div>

            {/* Connect Me Icons - Fixed at Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-auto p-4 bg-gray-800/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl border theme-border-primary flex-shrink-0"
            >
              <div className="text-xs theme-text-muted mb-3 text-center font-medium">
                Connect Me
              </div>
              <div className="flex justify-center space-x-3">
                {[
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/suraj127021/', label: 'LinkedIn', color: 'hover:text-blue-600' },
                  { icon: Github, href: 'https://github.com/SURAJ-RATHI', label: 'GitHub', color: 'hover:text-gray-800 dark:hover:text-gray-200' },
                  { icon: Mail, href: 'mailto:surajrathi127021@gmail.com', label: 'Email', color: 'hover:text-blue-500' },
                  { icon: MessageCircle, href: 'https://wa.me/917015506489', label: 'WhatsApp', color: 'hover:text-green-600' },
                  { icon: Twitter, href: 'https://twitter.com/SurajRathi65983', label: 'Twitter', color: 'hover:text-blue-400' },
                  { icon: Code, href: 'https://leetcode.com/u/SURYA-0155/', label: 'LeetCode', color: 'hover:text-yellow-600' }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -3, rotateY: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-8 h-8 glass-intense rounded-lg flex items-center justify-center theme-text-muted transition-all figma-cursor magnetic depth-1 ${social.color}`}
                      title={social.label}
                      data-clickable
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}