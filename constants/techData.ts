// Type definitions
interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  color: string;
  icon: string;
  iconType?: 'image' | 'emoji';
}

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  icon: string;
  iconType?: 'image' | 'emoji';
  color: string;
}

interface SkillItem {
  title: string;
  skills: string[];
  gradient: string;
  icon: string;
  iconType?: 'image' | 'emoji';
}

export const globalTechLogos = [
  { symbol: 'React', color: '#61DAFB', bgColor: '#20232a', x: '5%', y: '8%', name: 'React' },
  { symbol: 'TS', color: '#FFFFFF', bgColor: '#3178C6', x: '93%', y: '12%', name: 'TypeScript' },
  { symbol: 'Node', color: '#FFFFFF', bgColor: '#339933', x: '92%', y: '88%', name: 'Node.js' },
  { symbol: 'MongoDB', color: '#FFFFFF', bgColor: '#47A248', x: '8%', y: '85%', name: 'MongoDB' }
];

export const heroTechLogos = [
  // Top scattered positions
  { name: 'React', icon: 'react', bgColor: '#61DAFB', position: { top: '12%', left: '8%' } },
  { name: 'TypeScript', icon: 'typescript', bgColor: '#3178C6', position: { top: '5%', right: '15%' } },
  { name: 'Python', icon: 'python', bgColor: '#3776AB', position: { top: '25%', right: '5%' } },
  
  // Middle scattered positions (avoiding center content area)
  { name: 'Node.js', icon: 'nodejs', bgColor: '#339933', position: { top: '45%', left: '3%' } },
  { name: 'VS Code', icon: 'vscode', bgColor: '#007ACC', position: { top: '38%', right: '12%' } },
  { name: 'Git', icon: 'git', bgColor: '#F05032', position: { top: '55%', right: '8%' } },
  
  // Bottom scattered positions
  { name: 'JavaScript', icon: 'javascript', bgColor: '#F7DF1E', position: { bottom: '8%', left: '6%' } },
  { name: 'C++', icon: 'cpp', bgColor: '#00599C', position: { bottom: '25%', right: '4%' } },
  { name: 'MongoDB', icon: 'mongodb', bgColor: '#47A248', position: { bottom: '15%', right: '18%' } },
  { name: 'Docker', icon: 'docker', bgColor: '#2496ED', position: { bottom: '35%', left: '2%' } },
  
  // Additional scattered positions
  { name: 'HTML5', icon: 'html', bgColor: '#E34F26', position: { top: '70%', left: '5%' } },
  { name: 'CSS3', icon: 'css', bgColor: '#1572B6', position: { bottom: '45%', right: '10%' } }
];

export const experienceData: ExperienceItem[] = [
  {
    company: 'Kalpkriti Pvt. Ltd.',
    position: 'Software Engineer Intern',
    duration: 'Jun 2025 - Present',
    location: 'Remote',
    description: 'Full-Stack Development (MERN) – Built a Content Management Tool to automate content filtering and publishing, reducing manual effort by 40%. Developed a Template Creation System for reusable assets, improving deployment workflows by 15%. Integrated scalable REST APIs to ensure smooth web application operations.',
    color: 'from-blue-500 to-blue-600',
    icon: '/kalpkriti_logo.jpg',
    iconType: 'image'
  },
  {
    company: 'VVDN Technologies',
    position: 'Software Engineer Intern',
    duration: 'Jun 2025 - Present',
    location: 'Manesar, Haryana',
    description: 'Web Developer Intern (MERN) – Developed an Attendance Dashboard with charts, GPS tracking, camera check-ins, and email alerts, reducing HR effort by 25%. Built a Notice Wall to centralize company-wide announcements and job postings. Designed a lightweight HR Tool for temporary employee records with secure document storage.',
    color: 'from-orange-500 to-red-500',
    icon: '/vvdn_logo.jpg',
    iconType: 'image'
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "fastgen-ai",
    title: "FastGen - AI-Powered Learning Platform",
    description: "AI-based platform enabling chatbot Q&A, file-driven quiz generation, YouTube learning recommendations, and smart note-taking. Built with React, Vite, TailwindCSS, Node.js, MongoDB; integrated JWT & Google OAuth for secure authentication.",
    technologies: ["React", "Vite", "TailwindCSS", "Node.js", "MongoDB", "JWT", "Google OAuth"],
    githubUrl: "https://github.com/SURAJ-RATHI/FastGen",
    liveUrl: "https://fastgen-ai.vercel.app/",
    icon: "/projects/1.png",
    iconType: 'image',
    color: "from-blue-500 via-purple-500 to-pink-500"
  },
  {
    id: "kodr",
    title: "Kodr - Real-Time Technical Interview Platform",
    description: "Real-time interview platform with collaborative code editor, whiteboard, video chat, and instant messaging. Developed using React, Node.js, Express, and Socket.io with JWT-secured APIs and low-latency communication.",
    technologies: ["React", "Node.js", "Express", "Socket.io", "JWT", "Real-time APIs"],
    githubUrl: "https://github.com/SURAJ-RATHI/kodr",
    liveUrl: "https://kodr-test.vercel.app/",
    icon: "/projects/2.png",
    iconType: 'image',
    color: "from-green-500 via-teal-500 to-blue-500"
  },
  {
    id: "dev100x",
    title: "Dev100X - EdTech Course Hosting Platform",
    description: "Online platform to host and sell courses with role-based access. Implemented using MERN stack with CRUD operations on courses and Stripe's Test API for secure payments.",
    technologies: ["MERN Stack", "CRUD Operations", "Stripe API", "Role-based Access", "Course Management"],
    githubUrl: "https://github.com/SURAJ-RATHI/dev100x",
    liveUrl: "https://dev100x.vercel.app/",
    icon: "/projects/3.png",
    iconType: 'image',
    color: "from-blue-500 via-purple-500 to-pink-500"
  },
  {
    id: "dev-lobby",
    title: "Dev-Lobby - VS Code Extension (Minor Contributor)",
    description: "Contributed minor enhancements to a VS Code extension for visualizing logic and code flow diagrams inside the editor.",
    technologies: ["VS Code Extension", "TypeScript", "Code Visualization", "Logic Flow Diagrams"],
    githubUrl: "https://github.com/SURAJ-RATHI/dev-lobby",
    liveUrl: "https://marketplace.visualstudio.com/items?itemName=surya154.Devlobby",
    icon: "/projects/4.png",
    iconType: 'image',
    color: "from-green-500 via-teal-500 to-blue-500"
  }
];

export const skillsData: SkillItem[] = [
  { 
    title: 'Languages & Frameworks', 
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'C++'], 
    gradient: 'from-purple-500 to-pink-500',
    icon: '💻',
    iconType: 'emoji'
  },
  { 
    title: 'Frontend', 
    skills: ['React.js', 'Next.js', 'TailwindCSS', 'Redux', 'Three.js'], 
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🎨',
    iconType: 'emoji'
  },
  { 
    title: 'Backend', 
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Flask'], 
    gradient: 'from-green-500 to-emerald-500',
    icon: '⚙️',
    iconType: 'emoji'
  },
  { 
    title: 'Tools & Platforms', 
    skills: ['Git', 'Docker', 'Vercel', 'AWS', 'CI/CD', 'Figma', 'VS Code'], 
    gradient: 'from-orange-500 to-red-500',
    icon: '🛠️',
    iconType: 'emoji'
  }
];

export const userSkills = ['React', 'Node.js', 'TypeScript', 'Python', 'AI/ML'];