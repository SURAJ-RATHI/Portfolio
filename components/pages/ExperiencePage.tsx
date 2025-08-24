import React from 'react';
import { Badge } from '../ui/badge';
import { MapPin, Calendar, Building2, ExternalLink } from 'lucide-react';

export function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      company: 'Kalpkriti Pvt. Ltd.',
      position: 'Software Engineer Intern',
      type: 'Internship',
      duration: 'Jun 2025 - Present · 3 mos',
      location: 'India · Remote',
      description: 'Full Stack Developer – Built and deployed scalable REST APIs, managed server infrastructure, and developed internal tools to streamline business operations. Delivered end-to-end features across frontend and backend with a focus on performance and usability.',
      skills: ['MERN Stack', 'Database Management System (DBMS)', 'REST APIs', 'Server Infrastructure', 'Full-Stack Development'],
      color: 'blue'
    },
    {
      id: 2,
      company: 'VVDN Technologies',
      position: 'Software Engineer Intern',
      type: 'Full-time',
      duration: 'Jun 2025 - Present · 3 mos',
      location: 'Manesar, Haryana, India · On-site',
      description: 'Web Development Intern – Built MERN stack applications, developed REST APIs, and worked on projects including attendance software enhancements and a notice wall website for VVDN and AI chatbot Integration.',
      skills: ['JavaScript', 'React.js', 'MERN Stack', 'REST APIs', 'AI Integration', 'Web Development'],
      color: 'orange'
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Experience</h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">My professional journey and internships</p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative flex items-start mb-8 sm:mb-12 last:mb-0">
            {/* Timeline Dot */}
            <div className={`relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
              exp.color === 'blue' ? 'bg-blue-500' : 'bg-orange-500'
            } shadow-lg`}>
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>

            {/* Experience Card */}
            <div className="ml-4 sm:ml-8 flex-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <Badge variant="outline" className="w-fit text-xs sm:text-sm">
                    {exp.type}
                  </Badge>
                </div>

                {/* Meta Information */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs px-2 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">Education</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                Bachelor of Technology - BTech, Computer Engineering
              </h3>
              <p className="text-base sm:text-lg text-purple-600 dark:text-purple-400 font-medium mb-2">
                The Technological Institute of Textiles & Sciences
              </p>
              <div className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Jun 2022 - Mar 2026
                <span className="mx-2">·</span>
                <span>Grade: Pursuing</span>
              </div>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                Activities and societies: TCS (TATA CONSULTANCY SERVICES)
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'C (Programming Language)',
                  'JavaScript',
                  'Data Structures and Algorithm (DSA)',
                  'Database Management System (DBMS)',
                  'Python',
                  'C++',
                  'HTML',
                  'CSS'
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs px-2 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}