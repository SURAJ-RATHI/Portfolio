import React from 'react';
import { Badge } from '../ui/badge';
import { Code, Database, Globe, Cpu, Settings, Users } from 'lucide-react';

export function SkillsPage() {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Globe,
      color: 'blue',
      skills: [
        { name: 'React.js', level: 'Expert' },
        { name: 'Next.js', level: 'Advanced' },
        { name: 'JavaScript', level: 'Expert' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'HTML5', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'CSS3', level: 'Advanced' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: Database,
      color: 'green',
      skills: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'WebSocket', level: 'Intermediate' },
        { name: 'REST APIs', level: 'Advanced' },
        { name: 'Authentication', level: 'Advanced' },
        { name: 'Database Management System (DBMS)', level: 'Advanced' }
      ]
    },
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: Code,
      color: 'purple',
      skills: [
        { name: 'JavaScript', level: 'Expert' },
        { name: 'C++', level: 'Advanced' },
        { name: 'C Programming', level: 'Advanced' },
        { name: 'Python', level: 'Intermediate' },
        { name: 'Java', level: 'Intermediate' }
      ]
    },
    {
      id: 'technologies',
      title: 'Technologies & Tools',
      icon: Settings,
      color: 'orange',
      skills: [
        { name: 'MERN Stack', level: 'Expert' },
        { name: 'Gen AI', level: 'Intermediate' },
        { name: 'VS Code Extension', level: 'Intermediate' },
        { name: 'Git & GitHub', level: 'Advanced' },
        { name: 'Docker', level: 'Beginner' },
        { name: 'AWS', level: 'Beginner' }
      ]
    },
    {
      id: 'concepts',
      title: 'Core Concepts',
      icon: Cpu,
      color: 'red',
      skills: [
        { name: 'Data Structures and Algorithm (DSA)', level: 'Advanced' },
        { name: 'Full-Stack Development', level: 'Expert' },
        { name: 'Scalability', level: 'Intermediate' },
        { name: 'Web Development', level: 'Expert' },
        { name: 'Software Architecture', level: 'Intermediate' }
      ]
    },
    {
      id: 'soft',
      title: 'Soft Skills',
      icon: Users,
      color: 'indigo',
      skills: [
        { name: 'Communication', level: 'Advanced' },
        { name: 'Problem Solving', level: 'Advanced' },
        { name: 'Team Collaboration', level: 'Advanced' },
        { name: 'Project Management', level: 'Intermediate' },
        { name: 'Leadership', level: 'Intermediate' }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 text-blue-600 bg-blue-50 dark:bg-blue-900/20',
      green: 'from-green-500 to-green-600 text-green-600 bg-green-50 dark:bg-green-900/20',
      purple: 'from-purple-500 to-purple-600 text-purple-600 bg-purple-50 dark:bg-purple-900/20',
      orange: 'from-orange-500 to-orange-600 text-orange-600 bg-orange-50 dark:bg-orange-900/20',
      red: 'from-red-500 to-red-600 text-red-600 bg-red-50 dark:bg-red-900/20',
      indigo: 'from-indigo-500 to-indigo-600 text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getLevelBadgeVariant = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'default';
      case 'Advanced':
        return 'secondary';
      case 'Intermediate':
        return 'outline';
      default:
        return 'outline';
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Skills & Tools</h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">My technical expertise and competencies</p>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8 sm:mb-10 lg:mb-12">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          const colorClasses = getColorClasses(category.color);
          
          return (
            <div key={category.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')} p-4 sm:p-6 text-white`}>
                <div className="flex items-center">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
                  <h3 className="text-lg sm:text-xl font-bold">{category.title}</h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <Badge 
                      variant={getLevelBadgeVariant(skill.level)}
                      className="text-xs px-2 py-1"
                    >
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Learning & Interests */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-xl p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Currently Learning</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'Kubernetes', 'AWS', 'GraphQL', 'TypeScript', 'Redis'].map((tech) => (
                <Badge key={tech} variant="outline" className="px-2 sm:px-3 py-1 text-xs sm:text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {['Machine Learning', 'AI/ML', 'DevOps', 'System Design', 'Open Source'].map((interest) => (
                <Badge key={interest} variant="secondary" className="px-2 sm:px-3 py-1 text-xs sm:text-sm">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}