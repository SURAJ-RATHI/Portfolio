import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, Menu, Home } from 'lucide-react';
import { SearchDialog } from './components/SearchDialog';
import { SimpleWelcome } from './components/SimpleWelcome';
import { FileSystemNavigation } from './components/FileSystemNavigation';
import { SecretFolder } from './components/SecretFolder';
import { BackgroundElements } from './components/BackgroundElements';

import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { FooterSection } from './components/sections/FooterSection';
import { PDFViewer } from './components/PDFViewer';

import { motion, AnimatePresence, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { sectionToPathMap, pathToSectionMap } from './constants/fileSystem';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Hidden by default on mobile
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentPath, setCurrentPath] = useState('/suraj-rathi/about');
  const [secretFolderOpen, setSecretFolderOpen] = useState(false);
  const [pdfViewerOpen, setPdfViewerOpen] = useState(false);
  const [currentPdf, setCurrentPdf] = useState({ url: '', title: '', fileName: '' });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sidebarWidth, setSidebarWidth] = useState(320);
  const [isMobile, setIsMobile] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);



  const { scrollYProgress } = useScroll({ target: mainContentRef });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 5]);

  // Scroll-based navigation detection
  const detectCurrentSection = useCallback(() => {
    if (!mainContentRef.current) return;

    const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
    const scrollTop = mainContentRef.current.scrollTop;
    const viewportHeight = mainContentRef.current.clientHeight;
    
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const containerRect = mainContentRef.current.getBoundingClientRect();
        const elementTop = rect.top - containerRect.top + scrollTop;
        const elementBottom = elementTop + rect.height;
        
        if (scrollTop >= elementTop - viewportHeight / 3 && scrollTop < elementBottom - viewportHeight / 3) {
          const newPath = sectionToPathMap[sectionId as keyof typeof sectionToPathMap];
          if (newPath && newPath !== currentPath) {
            setCurrentPath(newPath);
          }
          break;
        }
      }
    }
  }, [currentPath]);

  // Mouse tracking for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Scroll detection
  useEffect(() => {
    const mainContent = mainContentRef.current;
    if (!mainContent) return;

    const handleScroll = () => {
      detectCurrentSection();
    };

    mainContent.addEventListener('scroll', handleScroll);
    return () => mainContent.removeEventListener('scroll', handleScroll);
  }, [detectCurrentSection]);

  // Measure sidebar width and detect mobile
  useEffect(() => {
    const updateSidebarWidth = () => {
      if (sidebarRef.current && sidebarOpen) {
        const width = sidebarRef.current.offsetWidth;
        setSidebarWidth(width);
      }
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint: mobile < 640px, tablet/desktop ≥ 640px
    };

    updateSidebarWidth();
    checkMobile();
    window.addEventListener('resize', () => {
      updateSidebarWidth();
      checkMobile();
    });
    return () => window.removeEventListener('resize', () => {
      updateSidebarWidth();
      checkMobile();
    });
  }, [sidebarOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    // Set initial state based on current screen size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
        e.preventDefault();
        setSidebarOpen(!sidebarOpen);
      }
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        setSecretFolderOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [sidebarOpen]);

  // Set dark theme by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);



  const scrollToSection = (sectionId: string) => {
    console.log('=== scrollToSection Debug ===');
    console.log('sectionId:', sectionId);
    console.log('mainContentRef.current:', mainContentRef.current);
    
    // Close PDF viewer when navigating to any section
    if (pdfViewerOpen) {
      console.log('Closing PDF viewer for navigation to:', sectionId);
      setPdfViewerOpen(false);
    }
    
    const element = document.getElementById(sectionId);
    console.log('Found element:', element);
    console.log('Element details:', element ? {
      id: element.id,
      tagName: element.tagName,
      className: element.className,
      offsetTop: element.offsetTop,
      clientHeight: element.clientHeight
    } : 'null');
    
    if (element && mainContentRef.current) {
      console.log('Both element and mainContentRef found, calculating scroll position...');
      
      const containerRect = mainContentRef.current.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const scrollTop = mainContentRef.current.scrollTop;
      
      console.log('Container rect:', containerRect);
      console.log('Element rect:', elementRect);
      console.log('Current scrollTop:', scrollTop);
      
      // Adjust offset based on section type
      let offset = 50;
      if (sectionId.startsWith('skill-') || sectionId.startsWith('project-')) {
        offset = 100; // More offset for subsections
      }
      
      const targetScrollTop = scrollTop + elementRect.top - containerRect.top - offset;
      console.log('Target scrollTop:', targetScrollTop);
      
      console.log('Scrolling to:', targetScrollTop);
      mainContentRef.current.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });
      
      // Close sidebar on mobile devices after navigation
      if (window.innerWidth < 768) { // md breakpoint
        console.log('Closing sidebar on mobile after navigation');
        setSidebarOpen(false);
      }
    } else {
      console.log('❌ Element or mainContentRef not found:', { 
        element: !!element, 
        mainContentRef: !!mainContentRef.current,
        sectionId 
      });
      
      // Try to find all sections on the page
      const allSections = document.querySelectorAll('section[id]');
      console.log('All sections with IDs on page:', Array.from(allSections).map(s => s.id));
    }
    console.log('=== End scrollToSection Debug ===');
  };

  const handleWelcomeComplete = () => {
    setTimeout(() => {
      setShowWelcome(false);
    }, 100);
  };

  const handleFileSystemNavigation = (path: string, item: any) => {
    console.log('Navigation triggered:', { path, item });
    setCurrentPath(path);
    
    if (item.isSecret || path.includes('secret-folder')) {
      console.log('Secret folder detected, opening secret folder');
      setSecretFolderOpen(true);
      return;
    }

    // Handle different file types and navigation
    if (item.type === 'file') {
      console.log('File clicked:', item.name);
      // Files open specific content
      const fileName = item.name.toLowerCase();
      
      // Check for PDFs first (before other file types)
      if (fileName.includes('resume')) {
        // Handle resume display in viewer
        console.log('Opening resume viewer:', item.name);
        setCurrentPdf({ url: '/resume.pdf', title: 'Resume - Suraj Rathi', fileName: 'Suraj_Rathi_Resume.pdf' });
        setPdfViewerOpen(true);
        return; // Prevent fallback navigation for PDFs
      } else if (fileName.includes('kalpkriti.pdf')) {
        // Handle Kalpkriti PDF display
        console.log('Opening Kalpkriti PDF:', item.name);
        const pdfUrl = '/experiences/kalpkriti.pdf';
        console.log('Setting PDF URL to:', pdfUrl);
        setCurrentPdf({ 
          url: pdfUrl, 
          title: 'Kalpkriti Experience', 
          fileName: 'Kalpkriti_Experience.pdf' 
        });
        setPdfViewerOpen(true);
        return; // Prevent fallback navigation for PDFs
      } else if (fileName.includes('vvdn.pdf')) {
        // Handle VVDN PDF display
        console.log('Opening VVDN PDF:', item.name);
        const pdfUrl = '/experiences/vvdn.pdf';
        console.log('Setting PDF URL to:', pdfUrl);
        setCurrentPdf({ 
          url: pdfUrl, 
          title: 'VVDN Experience', 
          fileName: 'VVDN_Experience.pdf' 
        });
        setPdfViewerOpen(true);
        return; // Prevent fallback navigation for PDFs
      } else if (fileName.includes('about')) {
        console.log('Navigating to About section');
        scrollToSection('about');
      } else if (fileName.includes('experience')) {
        console.log('Navigating to Experience section');
        scrollToSection('experience');
      } else if (fileName.includes('project') || fileName.includes('dev100x') || fileName.includes('dev-lobby') || fileName.includes('portfolio-app') || fileName.includes('ecommerce-platform')) {
        console.log('Navigating to Projects section');
        // Check if it's a specific project
        if (fileName.includes('dev100x')) {
          scrollToSection('project-dev100x');
        } else if (fileName.includes('dev-lobby')) {
          scrollToSection('project-dev-lobby');
        } else if (fileName.includes('portfolio-app')) {
          scrollToSection('project-portfolio-app');
        } else if (fileName.includes('ecommerce-platform')) {
          scrollToSection('project-ecommerce-platform');
        } else {
          scrollToSection('projects');
        }
        return; // Navigate to projects section
      } else if (fileName.includes('skill') || fileName.includes('frontend') || fileName.includes('backend') || fileName.includes('language') || fileName.includes('tools')) {
        console.log('Navigating to Skills section');
        // Check if it's a specific skill category
        if (fileName.includes('frontend')) {
          scrollToSection('skill-frontend');
        } else if (fileName.includes('backend')) {
          scrollToSection('skill-backend');
        } else if (fileName.includes('language')) {
          scrollToSection('skill-languages');
        } else if (fileName.includes('tools')) {
          scrollToSection('skill-tools');
        } else {
          scrollToSection('skills');
        }
      } else if (fileName.includes('contact') || fileName.includes('vcf')) {
        console.log('Navigating to Contact section');
        scrollToSection('contact');
      } else if (item.href) {
        // Handle social media and other external links
        console.log('Opening external link:', item.href);
        window.open(item.href, '_blank');
        return; // Prevent fallback navigation for external links
      }
    } else if (item.type === 'folder') {
      console.log('Folder clicked:', item.name);
      // Folders navigate to their main section
      const folderName = item.name.toLowerCase();
      
      if (folderName.includes('about')) {
        console.log('Navigating to About section');
        scrollToSection('about');
      } else if (folderName.includes('experience')) {
        console.log('Navigating to Experience section');
        scrollToSection('experience');
      } else if (folderName.includes('project')) {
        console.log('Navigating to Projects section');
        scrollToSection('projects');
      } else if (folderName.includes('skill')) {
        console.log('Navigating to Skills section');
        scrollToSection('skills');
      } else if (folderName.includes('contact')) {
        console.log('Navigating to Contact section');
        scrollToSection('contact');
      } else if (folderName.includes('suraj-rathi') || folderName.includes('home')) {
        // Go to top/about section
        console.log('Navigating to About section (home)');
        scrollToSection('about');
      }
    }

    // Fallback to path-based navigation
    const sectionId = pathToSectionMap[path];
    if (sectionId) {
      console.log('Fallback navigation to:', sectionId);
      scrollToSection(sectionId);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      {/* Welcome Screen */}
      {showWelcome && (
        <SimpleWelcome onComplete={handleWelcomeComplete} />
      )}
      
      {/* Main Website - Always rendered but revealed by horizontal line */}
      <motion.div 
        ref={containerRef}
        initial={{
          scale: 1, 
          opacity: 1, 
          y: 0,
          filter: "blur(0px)"
        }}
        animate={{ 
          scale: 1, 
          opacity: 1, 
          y: 0,
          filter: "blur(0px)"
        }}
        transition={{ 
          duration: 0.1, 
          ease: "easeOut"
        }}
        className="h-screen bg-blue-50 dark:bg-gray-900 p-2 figma-cursor overflow-hidden theme-transition perspective"
        style={{ zIndex: 1 }}
      >
        {/* Top Level Navbar */}
        <motion.div 
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.1 }}
          className="absolute top-0 left-0 right-0 z-[9999] px-4 py-4 glass-intense backdrop-blur-xl border-b theme-border-primary"
        >
          <div className="max-w-[1500px] mx-auto flex items-center">
            {/* Left Side - Traffic Lights */}
            <div className="flex items-center space-x-2">
              {[
                { color: 'bg-red-500', shadow: 'shadow-red-500/50' },
                { color: 'bg-yellow-500', shadow: 'shadow-yellow-500/50' },
                { color: 'bg-green-500', shadow: 'shadow-green-500/50' }
              ].map((light, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2, boxShadow: `0 0 20px ${light.color.includes('red') ? '#ef4444' : light.color.includes('yellow') ? '#eab308' : '#22c55e'}40` }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  className={`w-3 h-3 rounded-full ${light.color} ${light.shadow} shadow-sm figma-cursor depth-2 magnetic`}
                  data-clickable
                />
              ))}
            </div>

            {/* Centered Portfolio Title */}
            <div className="flex-1 flex justify-center">
              <motion.h1 
                className="hidden md:block text-2xl font-bold theme-text-primary tracking-wide"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                Suraj Rathi's Portfolio
              </motion.h1>
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-3">
              {/* Open to Work Indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-2 px-3 py-1 rounded-full bg-green-500/10 dark:bg-green-400/10"
              >
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                <span className="text-xs font-medium text-green-700 dark:text-green-300">
                  Open to Work
                </span>
              </motion.div>

              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg glass hover:theme-hover-bg transition-all figma-cursor magnetic depth-1"
                title="Search (⌘K)"
                data-clickable
              >
                <Search className="w-4 h-4 theme-text-secondary" />
              </motion.button>



              {/* Home Navigation Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
                className="p-2 rounded-lg glass hover:theme-hover-bg transition-all figma-cursor magnetic depth-1"
                title="Go to Home/About"
                data-clickable
              >
                <Home className="w-4 h-4 theme-text-secondary" />
              </motion.button>
              

            </div>
          </div>
          

        </motion.div>

        <BackgroundElements 
          mousePosition={mousePosition}
          backgroundY={backgroundY}
          scale={scale}
          rotateX={rotateX}
        />
        
        {/* Background logos are shown only on About section now */}
        


        <motion.div 
          initial={{ scale: 1, opacity: 1, rotateX: 0 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          className="h-full max-w-[1500px] mx-auto relative z-10 transform-3d mt-16"
          style={{
            transform: `perspective(1000px) rotateX(${rotateX}deg)`
          }}
        >
          {/* Premium macOS Window with enhanced 3D depth */}
          <motion.div 
            initial={{ 
              scale: 1, 
              opacity: 1, 
              rotateX: 0,
              filter: "blur(0px)"
            }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              rotateX: 0,
              filter: "blur(0px)"
            }}
            transition={{ 
              delay: 0,
              duration: 0.1, 
              ease: "easeOut"
            }}
            className="h-full glass-intense rounded-2xl overflow-hidden depth-5 border theme-border-primary transform-3d"
            whileHover={{ scale: 1.001, rotateX: 1 }}
          >
            

            


            {/* Window Content */}
            <div className="flex h-[calc(100%-5rem)] relative min-h-0 overflow-hidden">
              
              {/* Enhanced Sidebar with File System */}
              <AnimatePresence>
                {sidebarOpen && (
                  <motion.div
                    ref={sidebarRef}
                    initial={{ x: -300, opacity: 0, rotateY: -10 }}
                    animate={{ x: 0, opacity: 1, rotateY: 0 }}
                    exit={{ x: -300, opacity: 0, rotateY: -10 }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className="w-full sm:w-80 glass-intense border-r theme-border-primary flex flex-col h-full theme-transition transform-3d min-h-0 flex-shrink-0"
                  >
                    {/* Portfolio Title Above Sidebar */}
                    {/* <div className="p-6 border-b theme-border-primary">
                      <motion.h2 
                        className="text-xl font-bold theme-text-primary text-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0 }}
                      >
                        Suraj Rathi's Portfolio
                      </motion.h2>
                    </div> */}
                    
                    <div className="p-6 flex-1 flex flex-col overflow-hidden relative h-full min-h-0">
                      <FileSystemNavigation 
                        onNavigate={handleFileSystemNavigation}
                        currentPath={currentPath}
                        onToggleSidebar={setSidebarOpen}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Dynamic Sidebar Toggle Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  duration: 0.3
                }}
                whileHover={{ scale: 1.1, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="absolute z-50 p-4 rounded-r-lg glass-intense hover:theme-hover-bg transition-all figma-cursor magnetic depth-3 border-r border-t border-b theme-border-primary shadow-lg"
                style={{
                  left: sidebarOpen ? (isMobile ? '85%' : `calc(${sidebarWidth}px * 0.74)`) : '0px', // Mobile: 85%, Desktop: dynamic calculation
                  top: '20px',
                }}
                title="Toggle Sidebar (⌘B)"
                data-clickable
              >
                <Menu className="w-6 h-6 theme-text-secondary" />
              </motion.button>

              {/* Main Content with Enhanced Scroll Detection */}
              <div 
                ref={mainContentRef}
                className="flex-1 premium-scrollbar overflow-y-auto bg-gray-900/80 dark:bg-gray-800/80 backdrop-blur-xl theme-transition main-content-area pt-4 min-h-0"
              >
                {pdfViewerOpen ? (
                  <PDFViewer
                    isOpen={pdfViewerOpen}
                    onClose={() => setPdfViewerOpen(false)}
                    pdfUrl={currentPdf.url}
                    title={currentPdf.title}
                    fileName={currentPdf.fileName}
                  />
                ) : (
                  <motion.div 
                    initial={{ opacity: 1, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0, duration: 0.1 }}
                    className="transform-3d"
                  >
                    <AboutSection mousePosition={mousePosition} />
                    <ExperienceSection />
                    <ProjectsSection />
                    <SkillsSection />
                    <ContactSection 
                      contactForm={contactForm}
                      setContactForm={setContactForm}
                      handleContactSubmit={handleContactSubmit}
                    />
                    <FooterSection scrollToSection={scrollToSection} />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <SecretFolder 
          isOpen={secretFolderOpen}
          onToggle={() => setSecretFolderOpen(!secretFolderOpen)}
        />



        <SearchDialog 
          open={searchOpen} 
          onOpenChange={setSearchOpen}
          onNavigate={(section) => {
            if (section === 'kalpkriti-pdf') {
              setCurrentPdf({
                url: '/src/assets/experiences/kalpkriti.pdf',
                title: 'Kalpkriti Pvt. Ltd. - Work Experience',
                fileName: 'kalpkriti.pdf'
              });
              setPdfViewerOpen(true);
            } else if (section === 'vvdn-pdf') {
              setCurrentPdf({
                url: '/src/assets/experiences/vvdn.pdf',
                title: 'VVDN Technologies - Work Experience',
                fileName: 'vvdn.pdf'
              });
              setPdfViewerOpen(true);
            } else if (section === 'resume-pdf') {
              setCurrentPdf({
                url: '/src/assets/resume/resume.pdf',
                title: 'Resume - Suraj Rathi',
                fileName: 'resume.pdf'
              });
              setPdfViewerOpen(true);
            } else {
              scrollToSection(section);
            }
            setSearchOpen(false);
          }}
          onToggleSidebar={setSidebarOpen}
        />
      </motion.div>
    </>
  );
}
