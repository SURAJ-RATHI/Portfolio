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
    description: 'Full Stack Developer – Built and deployed scalable REST APIs, managed server infrastructure, and developed internal tools to streamline business operations.',
    color: 'from-blue-500 to-blue-600',
    icon: '/kalpkriti_logo.jpg',
    iconType: 'image'
  },
  {
    company: 'VVDN Technologies',
    position: 'Web Development Intern',
    duration: 'Jun 2025 - Present',
    location: 'On-site',
    description: 'Web Development Intern – Built MERN stack applications, developed REST APIs, and worked on attendance software enhancements and AI chatbot integration.',
    color: 'from-orange-500 to-red-500',
    icon: '/vvdn_logo.jpg',
    iconType: 'image'
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "fastgen-ai",
    title: "FastGen - AI-Powered Learning Platform",
    description: "FastGen is an intelligent AI-driven platform that makes learning easier with features like a personalized chatbot, quiz generator, and smart notes.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "GSAP", "Multer"],
    githubUrl: "https://github.com/SURAJ-RATHI/FastGen",
    liveUrl: "https://fastgen-ai.vercel.app/",
    icon: "/projects/1.png",
    iconType: 'image',
    color: "from-blue-500 via-purple-500 to-pink-500"
  },
  {
    id: "kodr",
    title: "Kodr - Technical Interview Platform",
    description: "Kodr is a full-stack platform for conducting technical interviews with real-time code compilation, whiteboard collaboration, and video chat.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.io", "Monaco Editor", "Konva.js", "Agora SDK", "Three.js", "Ant Design"],
    githubUrl: "https://github.com/SURAJ-RATHI/kodr",
    liveUrl: "https://kodr-test.vercel.app/",
    icon: "/projects/2.png",
    iconType: 'image',
    color: "from-green-500 via-teal-500 to-blue-500"
  },
  {
    id: "dev100x",
    title: "Dev100X",
    description: "Dev100X is a comprehensive EdTech platform designed to serve both administrators and users effectively, providing distinct functionalities tailored to their respective roles.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Express.js", "Authentication", "Payment Integration"],
    githubUrl: "https://github.com/surajrathi/dev100x",
    liveUrl: "https://dev100x.vercel.app/",
    icon: "/projects/3.png",
    iconType: 'image',
    color: "from-blue-500 via-purple-500 to-pink-500"
  },
  {
    id: "dev-lobby",
    title: "Dev-Lobby - VS Code Extension",
    description: "Dev-Lobby is a VS Code extension that allows developers to visualize, sketch, and structure logic directly within the editor.",
    technologies: ["VS Code Extension", "TypeScript", "Node.js", "Whiteboard Integration", "Code Visualization"],
    githubUrl: "https://github.com/SURAJ-RATHI/dev-lobby",
    liveUrl: "https://marketplace.visualstudio.com/items?itemName=dev-lobby",
    icon: "/projects/4.png",
    iconType: 'image',
    color: "from-green-500 via-teal-500 to-blue-500"
  }
];

export const skillsData: SkillItem[] = [
  { 
    title: 'Frontend', 
    skills: ['React.js', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind'], 
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🎨',
    iconType: 'emoji'
  },
  { 
    title: 'Backend', 
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'WebSocket'], 
    gradient: 'from-green-500 to-emerald-500',
    icon: '⚙️',
    iconType: 'emoji'
  },
  { 
    title: 'Languages', 
    skills: ['JavaScript', 'C++', 'Python', 'Java', 'TypeScript'], 
    gradient: 'from-purple-500 to-pink-500',
    icon: '💻',
    iconType: 'emoji'
  },
  { 
    title: 'Tools', 
    skills: ['VSCode', 'GitHub', 'Figma', 'Docker', 'Canva', 'MongoDB Atlas'], 
    gradient: 'from-orange-500 to-red-500',
    icon: '🛠️',
    iconType: 'emoji'
  }
];

export const userSkills = ['React', 'Node.js', 'TypeScript', 'Python', 'AI/ML'];