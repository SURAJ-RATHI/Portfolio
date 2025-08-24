import React from 'react';
import { Badge } from '../ui/badge';
import { Github, Linkedin, MapPin, Mail } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
        {/* Avatar */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Suraj Rathi
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
            Software Developer Intern -Kalpkriti |VVDN   <br className="hidden sm:block" /> | Full-Stack | MERN | Gen AI | C++
          </p>
          <div className="flex items-center justify-center sm:justify-start text-gray-500 dark:text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>Bhiwani, Haryana, India</span>
          </div>
          <div className="flex gap-4 justify-center sm:justify-start">
            <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">About</h2>
        <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
          I’m a Full-Stack Web Developer from India, passionate about creating scalable, high-performance websites with pixel-perfect UI/UX.
          I leverage AI and GenAI to accelerate development, boost productivity, and enhance projects with features like chatbots and smart personalization.
          
          </p>
        </div>
      </div>

      {/* Top Skills */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Top Skills</h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {[
            'Full-Stack Development',
            'React.js',
            'JavaScript',
            'Database Management System (DBMS)',
            'Next.js',
            'Node.js',
            'MongoDB',
            'MERN Stack'
          ].map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs sm:text-sm px-2 sm:px-3 py-1">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Current Status */}
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 sm:p-6">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
              Open to work
            </h3>
            <p className="text-green-800 dark:text-green-200 text-sm sm:text-base">
              Software Developer Internship, Web Developer, Frontend Developer and Backend Developer roles
            </p>
            <p className="text-xs sm:text-sm text-green-600 dark:text-green-300 mt-2">
              500+ connections on LinkedIn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}