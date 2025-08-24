import { User, Briefcase, Code2, Wrench, FileText, Mail, Lock, File } from 'lucide-react';

export interface FileSystemItem {
  id: string;
  name: string;
  type: 'folder' | 'file';
  icon?: React.ComponentType<any>;
  children?: FileSystemItem[];
  path: string;
  isSecret?: boolean;
}

export const fileSystemStructure: FileSystemItem = {
  id: 'home',
  name: 'Home',
  type: 'folder',
  icon: User,
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
          name: 'About.md',
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
              name: 'Kalpkriti.md',
              type: 'file',
              icon: File,
              path: '/suraj-rathi/experience/kalpkriti'
            },
            {
              id: 'vvdn',
              name: 'VVDN.md',
              type: 'file',
              icon: File,
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
              name: 'FastGen-AI.md',
              type: 'file',
              icon: File,
              path: '/suraj-rathi/projects/fastgen-ai'
            },
            {
              id: 'kodr',
              name: 'Kodr.md',
              type: 'file',
              icon: File,
              path: '/suraj-rathi/projects/kodr'
            },
            {
              id: 'dev100x',
              name: 'Dev100X.md',
              type: 'file',
              icon: File,
              path: '/suraj-rathi/projects/dev100x'
            },
            {
              id: 'dev-lobby',
              name: 'Dev-Lobby.md',
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
              name: 'Frontend.json',
              type: 'file',
              icon: File,
              path: '/suraj-rathi/skills/frontend'
            },
            {
              id: 'backend',
              name: 'Backend.json',
              type: 'file',
              icon: File,
              path: '/suraj-rathi/skills/backend'
            },
            {
              id: 'languages',
              name: 'Languages.json',
              type: 'file',
              icon: File,
              path: '/suraj-rathi/skills/languages'
            }
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

export const sectionToPathMap = {
  'about': '/suraj-rathi/about',
  'experience': '/suraj-rathi/experience',
  'projects': '/suraj-rathi/projects',
  'skills': '/suraj-rathi/skills',
  'contact': '/suraj-rathi/contact'
};

export const pathToSectionMap: { [key: string]: string } = {
  '/suraj-rathi/about': 'about',
  '/suraj-rathi/experience': 'experience',
  '/suraj-rathi/experience/kalpkriti': 'experience',
  '/suraj-rathi/experience/vvdn': 'experience',
  '/suraj-rathi/projects': 'projects',
  '/suraj-rathi/projects/fastgen-ai': 'projects',
  '/suraj-rathi/projects/kodr': 'projects',
  '/suraj-rathi/projects/dev100x': 'projects',
  '/suraj-rathi/projects/dev-lobby': 'projects',
  '/suraj-rathi/skills': 'skills',
  '/suraj-rathi/skills/frontend': 'skills',
  '/suraj-rathi/skills/backend': 'skills',
  '/suraj-rathi/skills/languages': 'skills',
  '/suraj-rathi/resume': 'resume',
  '/suraj-rathi/contact': 'contact'
};