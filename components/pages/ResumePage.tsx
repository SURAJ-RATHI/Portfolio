import React from 'react';
import { Button } from '../ui/button';
import { Download, Eye, FileText, Calendar, MapPin, Mail, Phone, Globe } from 'lucide-react';

export function ResumePage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Resume</h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Download my latest resume or view it online</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
        <Button className="flex items-center justify-center gap-2 text-sm sm:text-base">
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
        <Button variant="outline" className="flex items-center justify-center gap-2 text-sm sm:text-base">
          <Eye className="w-4 h-4" />
          View Online
        </Button>
        <Button variant="outline" className="flex items-center justify-center gap-2 text-sm sm:text-base">
          <FileText className="w-4 h-4" />
          View HTML Version
        </Button>
      </div>

      {/* Resume Preview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Resume Preview</h2>
        
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">Suraj Rathi</h3>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-2">Software Developer Intern</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>suraj.rathi@example.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+91 XXXXX XXXXX</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Bhiwani, Haryana, India</span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-6 sm:mb-8">
          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Education</h4>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">B.Tech in Computer Engineering</h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">University Name</p>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                <Calendar className="w-4 h-4 mr-2" />
                <span>2021 - 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-6 sm:mb-8">
          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Experience</h4>
          <div className="space-y-4 sm:space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h5 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Software Developer Intern</h5>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Jan 2024 - Present</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Company Name</p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-4">
                <li>Developed and maintained web applications using React.js and Node.js</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software</li>
                <li>Implemented responsive design principles and modern UI/UX patterns</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-6 sm:mb-8">
          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Technical Skills</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base mb-2">Programming Languages</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">JavaScript, TypeScript, Python, C++</p>
            </div>
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base mb-2">Frameworks & Libraries</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">React.js, Next.js, Node.js, Express.js</p>
            </div>
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base mb-2">Databases</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">MongoDB, MySQL, PostgreSQL</p>
            </div>
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base mb-2">Tools & Technologies</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">Git, Docker, AWS, VS Code</p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Projects</h4>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Portfolio Website</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">A responsive portfolio website built with React and Tailwind CSS</p>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600" />
                <a href="#" className="text-sm text-blue-600 hover:underline">View Project</a>
              </div>
            </div>
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">E-commerce Platform</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Full-stack e-commerce application with MERN stack</p>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600" />
                <a href="#" className="text-sm text-blue-600 hover:underline">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Additional Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base mb-2">Languages</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">English (Fluent), Hindi (Native)</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base mb-2">Interests</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Web Development, AI/ML, Open Source</p>
          </div>
        </div>
      </div>
    </div>
  );
}