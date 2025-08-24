import React, { useState, useEffect } from 'react';
import { Search, User, Briefcase, FolderOpen, FileText, Wrench, Mail, Command, Code2, Code, Linkedin, Github, MessageCircle, Lock, Twitter, Home } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (section: string) => void;
  onToggleSidebar?: (isOpen: boolean) => void;
}

export function SearchDialog({ open, onOpenChange, onNavigate, onToggleSidebar }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  
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

  const searchItems = [
    // Main Sections
    { id: 'about', label: 'About Me', icon: User, description: 'Learn more about my background and experience', category: 'Main Section', path: 'about' },
    { id: 'experience', label: 'Experience', icon: Briefcase, description: 'View my work experience and internships', category: 'Main Section', path: 'experience' },
    { id: 'projects', label: 'Projects', icon: FolderOpen, description: 'Explore my development projects', category: 'Main Section', path: 'projects' },
    { id: 'skills', label: 'Skills', icon: Wrench, description: 'See my technical skills and expertise', category: 'Main Section', path: 'skills' },

    { id: 'contact', label: 'Contact.vcf', icon: Mail, description: 'Get in touch with me', category: 'Main Section', path: 'contact' },
    
    // Experience Details
    { id: 'kalpkriti', label: 'Kalpkriti Pvt. Ltd.', icon: Briefcase, description: 'Work experience at Kalpkriti - view PDF details', category: 'Experience', path: 'experience' },
    { id: 'vvdn', label: 'VVDN Technologies', icon: Briefcase, description: 'Work experience at VVDN - view PDF details', category: 'Experience', path: 'experience' },
    
    // Project Details
    { id: 'fastgen-ai', label: 'FastGen - AI-Powered Learning Platform', icon: Code2, description: 'AI-driven platform with personalized chatbot, quiz generator, and smart notes', category: 'Projects', path: 'projects' },
    { id: 'kodr', label: 'Kodr - Technical Interview Platform', icon: Code2, description: 'Full-stack platform for technical interviews with real-time collaboration', category: 'Projects', path: 'projects' },
    { id: 'dev100x', label: 'Dev100X', icon: Code2, description: 'Full-stack EdTech platform with course management and payments', category: 'Projects', path: 'projects' },
    { id: 'dev-lobby', label: 'Dev-Lobby - VS Code Extension', icon: Code2, description: 'VS Code extension for visual code flow mapping and diagram generation', category: 'Projects', path: 'projects' },
    
    // Skills Details
    { id: 'frontend', label: 'Frontend Skills', icon: Code, description: 'React, TypeScript, Tailwind CSS, and frontend technologies', category: 'Skills', path: 'skills' },
    { id: 'backend', label: 'Backend Skills', icon: Code, description: 'Node.js, Express, MongoDB, and backend technologies', category: 'Skills', path: 'skills' },
    { id: 'languages', label: 'Programming Languages', icon: Code, description: 'JavaScript, TypeScript, Python, and other languages', category: 'Skills', path: 'skills' },
    { id: 'tools', label: 'Tools & IDEs', icon: Wrench, description: 'VS Code, Git, Docker, and development tools', category: 'Skills', path: 'skills' },
    
    // Social Profiles
    { id: 'linkedin', label: 'LinkedIn Profile', icon: Linkedin, description: 'Connect with me on LinkedIn', category: 'Social', href: 'https://www.linkedin.com/in/suraj127021/' },
    { id: 'github', label: 'GitHub Profile', icon: Github, description: 'View my code repositories on GitHub', category: 'Social', href: 'https://github.com/SURAJ-RATHI' },
    { id: 'gmail', label: 'Gmail Contact', icon: Mail, description: 'Send me an email at surajrathi127021@gmail.com', category: 'Social', href: 'mailto:surajrathi127021@gmail.com' },
    { id: 'whatsapp', label: 'WhatsApp Contact', icon: MessageCircle, description: 'Contact me on WhatsApp', category: 'Social', href: 'https://wa.me/917015506489' },
    { id: 'twitter', label: 'Twitter Profile', icon: Twitter, description: 'Follow me on Twitter', category: 'Social', href: 'https://twitter.com/surajrathi' },
    { id: 'leetcode', label: 'LeetCode Profile', icon: Code, description: 'View my coding solutions on LeetCode', category: 'Social', href: 'https://leetcode.com/u/SURYA-0155/' },
    
    // Secret Projects
    { id: 'secret-folder', label: '.secret-projects', icon: Lock, description: 'Confidential and experimental projects', category: 'Secret' },
    { id: 'confidential-project', label: 'Confidential_Project.enc', icon: Lock, description: 'Encrypted confidential project details', category: 'Secret' },
    { id: 'experimental-code', label: 'Experimental_Code.js', icon: Lock, description: 'Experimental and research code', category: 'Secret' },
    
    // Additional Sidebar Items
    { id: 'home', label: 'Home', icon: Home, description: 'Return to the main portfolio homepage', category: 'Navigation', path: 'home' },
    { id: 'suraj-rathi', label: 'Suraj Rathi - Developer', icon: User, description: 'Main developer profile and portfolio overview', category: 'Navigation', path: 'about' },
    { id: 'social-handle', label: 'Social Handles', icon: MessageCircle, description: 'All my social media profiles and contact methods', category: 'Navigation', path: 'contact' },
    { id: 'kalpkriti-pdf', label: 'kalpkriti.pdf', icon: FileText, description: 'Download Kalpkriti work experience PDF', category: 'Documents', path: 'kalpkriti-pdf' },
    { id: 'vvdn-pdf', label: 'vvdn.pdf', icon: FileText, description: 'Download VVDN work experience PDF', category: 'Documents', path: 'vvdn-pdf' },
    { id: 'resume-pdf', label: 'Resume.pdf', icon: FileText, description: 'Download my professional resume PDF', category: 'Documents', path: 'resume-pdf' },
    { id: 'contact-vcf', label: 'Contact.vcf', icon: Mail, description: 'Download my contact information as VCF file', category: 'Documents', path: 'contact' },
  ];

  const filteredItems = searchItems.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase()) ||
    item.id.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % filteredItems.length);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredItems[selectedIndex]) {
            handleItemClick(filteredItems[selectedIndex].id);
          }
          break;
        case 'Escape':
          onOpenChange(false);
          setQuery('');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, filteredItems, selectedIndex, onNavigate, onOpenChange]);

  const handleItemClick = (id: string) => {
    const item = searchItems.find(item => item.id === id);
    
    if (item?.href) {
      // External link - open in new tab
      window.open(item.href, '_blank', 'noopener,noreferrer');
    } else if (id === 'kalpkriti-pdf') {
      // Special handling for Kalpkriti PDF file
      onNavigate('kalpkriti-pdf');
    } else if (id === 'vvdn-pdf') {
      // Special handling for VVDN PDF file
      onNavigate('vvdn-pdf');
    } else if (id === 'resume-pdf') {
      // Special handling for Resume PDF file
      onNavigate('resume-pdf');
    } else if (item?.path) {
      // Use custom path for navigation
      onNavigate(item.path);
    } else {
      // Internal navigation using ID
      onNavigate(id);
    }
    
    // Auto-hide sidebar on mobile when navigating
    if (isMobile && onToggleSidebar) {
      setTimeout(() => {
        onToggleSidebar(false);
      }, 100);
    }
    
    onOpenChange(false);
    setQuery('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 gap-0 figma-cursor overflow-hidden bg-white dark:bg-gray-900">
        {/* Visually hidden title for accessibility */}
        <DialogTitle className="sr-only">
          Search Portfolio
        </DialogTitle>
        
        {/* Visually hidden description for accessibility */}
        <DialogDescription className="sr-only">
          Search through portfolio sections including about, experience, projects, skills, resume, and contact information. Use arrow keys to navigate and enter to select.
        </DialogDescription>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="w-full"
        >
          {/* Search Header */}
          <div className="flex items-center border-b theme-border-primary px-4 py-4">
            <Search className="w-5 h-5 theme-text-muted mr-3 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search portfolio sections..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none theme-text-primary theme-placeholder figma-text"
              autoFocus
            />
            <div className="flex items-center gap-1 text-xs theme-text-muted ml-3">
              <kbd className="px-2 py-1 theme-bg-muted rounded text-xs font-mono">
                <Command className="w-3 h-3 inline mr-1" />
                K
              </kbd>
            </div>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto premium-scrollbar">
            {filteredItems.length > 0 ? (
              <div className="py-2">
                {filteredItems.map((item, index) => {
                  const Icon = item.icon;
                  const isSelected = index === selectedIndex;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center px-4 py-3 text-left transition-all figma-cursor ${
                        isSelected 
                          ? 'bg-blue-50 dark:bg-blue-900/20 border-r-2 border-blue-500' 
                          : 'hover:theme-hover-bg'
                      }`}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      data-clickable
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                        isSelected 
                          ? 'bg-blue-100 dark:text-blue-400' 
                          : 'theme-bg-muted'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          isSelected 
                            ? 'text-blue-600 dark:text-blue-400' 
                            : 'theme-text-secondary'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`font-medium ${
                            isSelected 
                              ? 'text-blue-900 dark:text-blue-100' 
                              : 'theme-text-primary'
                          }`}>
                            {item.label}
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            item.category === 'Secret' 
                              ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                              : item.category === 'Social'
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                              : item.category === 'Main Section'
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                          }`}>
                            {item.category}
                          </span>
                        </div>
                        <div className={`text-sm ${
                          isSelected 
                            ? 'text-blue-600 dark:text-blue-300' 
                            : 'theme-text-muted'
                        }`}>
                          {item.description}
                        </div>
                      </div>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-xs text-blue-600 dark:text-blue-400 font-medium"
                        >
                          ↵
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            ) : query ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-center theme-text-muted"
              >
                <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium mb-2">No results found</p>
                <p className="text-sm">Try searching for a different section</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-8"
              >
                <div className="px-4 py-2">
                  <p className="text-sm theme-text-muted mb-4">Quick navigation</p>
                  <div className="grid grid-cols-2 gap-2">
                    {searchItems.slice(0, 8).map((item) => {
                      const Icon = item.icon;
                      return (
                        <motion.button
                          key={item.id}
                          onClick={() => handleItemClick(item.id)}
                          className="flex items-center p-3 rounded-lg hover:theme-hover-bg transition-all figma-cursor"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          data-clickable
                        >
                          <Icon className="w-4 h-4 theme-text-muted mr-2" />
                          <span className="text-sm font-medium theme-text-secondary">
                            {item.label}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t theme-border-primary px-4 py-3 theme-bg-muted">
            <div className="flex items-center justify-between text-xs theme-text-muted">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 theme-bg-secondary rounded text-xs">↑↓</kbd>
                  <span>Navigate</span>
                </div>
                <div className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 theme-bg-secondary rounded text-xs">↵</kbd>
                  <span>Select</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 theme-bg-secondary rounded text-xs">esc</kbd>
                <span>Close</span>
              </div>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}