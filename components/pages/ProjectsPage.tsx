import React from 'react';
import { Badge } from '../ui/badge';
import { ExternalLink, Github, Calendar, FolderOpen } from 'lucide-react';

export function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'FastGen - AI-Powered Learning Platform',
      duration: 'Aug 2025 - Current',
      description: 'FastGen is an intelligent AI-driven platform that makes learning easier with features like a personalized chatbot, quiz generator, and smart notes.',
      fullDescription: 'A full-stack web application built with React.js, Node.js, and MongoDB. FastGen integrates advanced AI tools to enhance learning through personalized Q&A, key point extraction from uploaded files, quiz generation, YouTube content search, and a centralized content hub. Implemented secure authentication with JWT and Google OAuth, file handling with Multer, and modern UI with Tailwind CSS and GSAP animations.',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS', 'GSAP', 'Multer'],
      githubUrl: 'https://github.com/SURAJ-RATHI/FastGen',
      liveUrl: 'https://fastgen-ai.vercel.app/',
      status: 'In Progress',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Kodr - Technical Interview Platform',
      duration: 'Jan 2025 - June 2025',
      description: 'Kodr is a full-stack platform for conducting technical interviews with real-time code compilation, whiteboard collaboration, and video chat.',
      fullDescription: 'A comprehensive technical interview platform built with React, Node.js, and MongoDB. Kodr provides real-time collaboration features such as a Monaco-based code editor with live compilation, interactive whiteboard with Konva.js, and Agora video chat integration. It supports role-based access for interviewers and candidates, JWT authentication, scheduling and management of interviews, and seamless real-time synchronization of code, whiteboard, and chat using Socket.io. Designed with a modern UI/UX, responsive layout, and dark mode for professional use.',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.io', 'Monaco Editor', 'Konva.js', 'Agora SDK', 'Three.js', 'Ant Design'],
      githubUrl: 'https://github.com/SURAJ-RATHI/kodr',
      liveUrl: 'https://kodr-test.vercel.app/',
      status: 'Completed',
      color: 'green'
    },      
    {
      id: 3,
      title: 'Dev100X',
      duration: 'Apr 2025 - Present',
      description: 'Dev100X is a comprehensive EdTech platform designed to serve both administrators and users effectively, providing distinct functionalities tailored to their respective roles.',
      fullDescription: 'A modern EdTech platform for hosting and selling courses with support for videos, PDFs, Word files, and more. Built with MERN stack and features user authentication, course management, and payment integration.',
      skills: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js', 'Authentication', 'Payment Integration'],
      githubUrl: 'https://github.com/surajrathi/dev100x',
      liveUrl: 'https://dev100x.vercel.app/',
      status: 'Active',
      color: 'blue'
    },
    {
      id: 3,
      title: 'Dev-Lobby - VS Code Extension',
      duration: 'July 2024 - Dec 2024',
      description: 'Dev-Lobby is a VS Code extension that allows developers to visualize, sketch, and structure logic directly within the editor.',
      fullDescription: 'An open-source Visual Studio Code extension that provides an integrated whiteboard inside VS Code for developers to map out logic, visualize ideas, and plan workflows. It enables interactive diagramming within the editor, supports starting new sessions via the command palette, and integrates seamlessly with the developer workflow. Published on the VS Code Marketplace with simple installation and usage.',
      skills: ['VS Code Extension', 'TypeScript', 'Node.js', 'Whiteboard Integration', 'Code Visualization'],
      githubUrl: 'https://github.com/SURAJ-RATHI/dev-lobby',
      liveUrl: 'https://marketplace.visualstudio.com/items?itemName=dev-lobby',
      status: 'Completed',
      color: 'green'
    }
    
   
    
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Projects</h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">A collection of my recent work and side projects</p>
      </div>

      {/* Featured Projects Grid */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2 mb-8 sm:mb-10 lg:mb-12">
        {projects.map((project) => (
          <div key={project.id} className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Project Header */}
              <div className={`h-24 sm:h-32 bg-gradient-to-br ${
                project.color === 'blue' 
                  ? 'from-blue-500 to-purple-600' 
                  : 'from-green-500 to-teal-600'
              } p-4 sm:p-6 flex items-center`}>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                  <FolderOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex items-center text-white/80 text-xs sm:text-sm mt-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    {project.duration}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <Badge 
                    variant={project.status === 'Active' ? 'default' : 'secondary'}
                    className="w-fit text-xs sm:text-sm"
                  >
                    {project.status}
                  </Badge>
                  <div className="flex gap-1 sm:gap-2">
                    <a 
                      href={project.githubUrl}
                      className="p-1.5 sm:p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      title="View on GitHub"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a 
                      href={project.liveUrl}
                      className="p-1.5 sm:p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      title="View Live"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  {project.fullDescription}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs px-2 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Stats */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-xl p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">GitHub Activity</h2>
          <a 
            href="https://github.com/surajrathi"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors text-sm sm:text-base"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            View Profile
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700">
            <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">15+</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Public Repositories</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700">
            <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400 mb-1">200+</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Commits This Year</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700 sm:col-span-2 lg:col-span-1">
            <div className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">8</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Languages Used</div>
          </div>
        </div>
      </div>
    </div>
  );
}