import React from 'react';
import { motion } from 'framer-motion';

interface TechIconProps {
  tech: {
    name: string;
    icon: string;
    bgColor: string;
    size?: number;
  };
  size?: number;
  className?: string;
}

export const TechIcon = ({ tech, size = 50, className = '' }: TechIconProps) => {
  const iconSize = size * 0.6; // Icon should be 60% of container size

  // Highly detailed, brand-accurate icons matching official designs
  const icons: { [key: string]: JSX.Element } = {
    react: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="#61DAFB">
        <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
        <path d="M12 1c-1.4 0-2.8.2-4.1.6C3.6 2.9 1 6.3 1 10.3v3.4c0 4 2.6 7.4 6.9 8.7 1.3.4 2.7.6 4.1.6s2.8-.2 4.1-.6c4.3-1.3 6.9-4.7 6.9-8.7v-3.4c0-4-2.6-7.4-6.9-8.7C14.8 1.2 13.4 1 12 1z" fill="none" stroke="#61DAFB" strokeWidth="0.5"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)"/>
      </svg>
    ),
    javascript: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" fill="#F7DF1E"/>
        <path d="M7.9 18.9c.4.8 1.2 1.4 2.4 1.4 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.7-1.6l-.6-.2c-1.7-.7-2.9-1.6-2.9-3.5 0-1.7 1.3-3.1 3.4-3.1 1.5 0 2.6.5 3.4 1.9l-1.9 1.2c-.4-.7-.8-1-1.5-1-.7 0-1.1.4-1.1 1 0 .7.4 1 1.4 1.4l.6.2c2 .9 3.2 1.7 3.2 3.7 0 2.1-1.7 3.3-3.9 3.3-2.2 0-3.6-1-4.3-2.4l2-1.1zm8.5-8.2h2.4v7.1c0 2.9-1.7 4.2-4.2 4.2-.9 0-1.7-.2-2.4-.6l.4-1.9c.5.3 1.1.4 1.7.4 1.1 0 1.8-.5 1.8-1.8V10.7h.3z" fill="#000"/>
      </svg>
    ),
    typescript: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="2" fill="#3178C6"/>
        <path d="M9.5 7v1.5H7V22H5.5V8.5H3V7h6.5zm4.5 4.5c.6 0 1.1.1 1.5.2.4.1.8.3 1.1.5v2.3c-.2-.1-.4-.2-.7-.3-.3-.1-.6-.1-.9-.1-.3 0-.6.1-.8.2s-.4.3-.5.5c-.1.2-.2.4-.2.7s.1.5.2.7c.1.2.3.4.5.5s.5.2.8.2c.3 0 .6 0 .9-.1.3-.1.5-.2.7-.3v2.3c-.3.2-.7.4-1.1.5-.4.1-.9.2-1.5.2-1 0-1.8-.3-2.4-.8-.6-.5-.9-1.3-.9-2.3s.3-1.8.9-2.3c.6-.5 1.4-.8 2.4-.8z" fill="#fff"/>
      </svg>
    ),
    nodejs: (
      <svg width={iconSize + 40} height={iconSize + 40} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3.5 7v10l8.5 5 8.5-5V7L12 2z" fill="#339933" stroke="#339933" strokeWidth="0.5"/>
        <path d="M12 2v20M3.5 7l8.5 5 8.5-5" stroke="#fff" strokeWidth="1" fill="none"/>
        <path d="M12 12v10" stroke="#2d5a27" strokeWidth="0.8" fill="none"/>
      </svg>
    ),
    python: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <path d="M8.5 2C6.6 2 5 3.6 5 5.5V11h6v1H6c-1.7 0-3 1.3-3 3v4c0 1.7 1.3 3 3 3h2v-3c0-1.7 1.3-3 3-3h6c1.4 0 2.5-1.1 2.5-2.5v-7C19.5 4.1 18.4 3 17 3H8.5z" fill="#3776AB"/>
        <path d="M15.5 22C17.4 22 19 20.4 19 18.5V13h-6v-1h5c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3h-2v3c0 1.7-1.3 3-3 3H7c-1.4 0-2.5 1.1-2.5 2.5v7C4.5 19.9 5.6 21 7 21h8.5z" fill="#FFD43B"/>
        <circle cx="8" cy="6.5" r="1" fill="#FFD43B"/>
        <circle cx="16" cy="17.5" r="1" fill="#3776AB"/>
      </svg>
    ),
    html: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <path d="M2 2l2 18 8 2 8-2 2-18H2zm16 6H8l.4 4h9.2l-.8 8-4.8 1.3L7.2 20l-.6-6h2.8l.3 3 2.3.6 2.3-.6.2-2.4H6.8L6 10h12l-.4-2z" fill="#E34F26"/>
      </svg>
    ),
    css: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <path d="M2 2l2 18 8 2 8-2 2-18H2zm14 6H8.5l.5 4h6.5l-.7 7-3.8 1-3.8-1-.3-3h2.5l.1 1.5 2 .5 2-.5.2-2.5H7.5L6.5 8h11l-.5-2z" fill="#1572B6"/>
      </svg>
    ),
    git: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="#F05032">
        <path d="M23.5 11.2L12.8.5c-.6-.6-1.6-.6-2.2 0L8.4 2.7l2.8 2.8c.6-.2 1.4-.1 1.9.4s.7 1.3.4 1.9l2.7 2.7c.6-.2 1.4-.1 1.9.4.7.7.7 1.9 0 2.6s-1.9.7-2.6 0c-.5-.5-.7-1.3-.4-2L13 8.9v6.6c.2.1.3.2.5.3.7.7.7 1.9 0 2.6s-1.9.7-2.6 0-.7-1.9 0-2.6c.2-.2.4-.3.6-.4V8.8c-.2-.1-.4-.2-.6-.4-.5-.5-.7-1.3-.4-2L8.3 3.8.5 11.6c-.6.6-.6 1.6 0 2.2L11 24.3c.6.6 1.6.6 2.2 0L23.7 13.8c.6-.6.6-1.6-.2-2.6z"/>
      </svg>
    ),
    vscode: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <path d="M23.2 2.6L18.2.2c-.3-.2-.8-.1-1.1.2l-9.5 8.6L3.5 6C3.2 5.8 2.8 5.8 2.5 6L.3 7.3c-.2.2-.2.6 0 .8L3.9 12 .3 15.9c-.2.2-.2.6 0 .8L2.5 18c.3.2.7.2 1 0l4.1-3.1 9.5 8.6c.3.3.8.4 1.1.2L23.2 21.4c.5-.3.8-.8.8-1.4V4c0-.6-.3-1.1-.8-1.4z" fill="#007ACC"/>
        <path d="M18.1 17.4L10.8 12l7.3-5.4v10.8z" fill="#fff"/>
      </svg>
    ),
    cpp: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <path d="M22.4 6L12.9.2c-.5-.3-1.3-.3-1.8 0L2.3 5.3c-.5.3-.9 1-.9 1.6v10.2c0 .3.1.6.3.9.2.3.4.5.7.7l8.8 5.1c.5.3 1.3.3 1.8 0l8.8-5.1c.3-.1.5-.4.7-.7.2-.3.3-.6.3-.9V6.9c0-.3-.1-.6-.3-.9z" fill="#00599C"/>
        <path d="M12 19.1c-3.9 0-7.1-3.2-7.1-7.1S8.1 4.9 12 4.9c2.5 0 4.7 1.3 6.2 3.6l-3.1 1.8c-.7-1.3-2.1-2.2-3.1-1.8A3.6 3.6 0 008.4 12 3.6 3.6 0 0012 15.6c1.3 0 2.4-.7 3.1-1.8l3.1 1.8c-1.5 2.3-3.7 3.6-6.2 3.5z" fill="#fff"/>
        <path d="M17.5 11.6h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1zm3.5 0h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" fill="#fff"/>
      </svg>
    ),
    docker: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <rect x="0.5" y="5" width="2.5" height="2" fill="#2496ED"/>
        <rect x="3.5" y="5" width="2.5" height="2" fill="#2496ED"/>
        <rect x="6.5" y="5" width="2.5" height="2" fill="#2496ED"/>
        <rect x="3.5" y="3" width="2.5" height="2" fill="#2496ED"/>
        <rect x="6.5" y="3" width="2.5" height="2" fill="#2496ED"/>
        <rect x="9.5" y="3" width="2.5" height="2" fill="#2496ED"/>
        <rect x="6.5" y="1" width="2.5" height="2" fill="#2496ED"/>
        <rect x="9.5" y="1" width="2.5" height="2" fill="#2496ED"/>
        <rect x="9.5" y="5" width="2.5" height="2" fill="#2496ED"/>
        <path d="M13 6.5c2.8 0 5.5.8 7 2.5v5c0 2.2-4.5 4-10 4S0 16.2 0 14v-5c1.5-1.7 4.2-2.5 7-2.5" fill="#2496ED"/>
        <ellipse cx="19" cy="8.5" rx="4" ry="1.5" fill="#2496ED"/>
      </svg>
    ),
    mongodb: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <path d="M17.2 9.6c-1.3-5.6-4.3-7.4-4.6-8.1-.3-.4-.5-1-.7-1.4-.1.5-.1.7-.5 1.2-.7.6-4.4 3.7-4.7 10-.3 5.9 4.3 9.4 4.9 9.9l.1.1c-.1.9-.2 1.8-.3 2.7h.5c.1-1 .3-2 .5-3 .4-.3.6-.5.9-.7 1.8-1.6 3.6-4.3 3.6-8.5 0-.8-.1-1.7-.2-2.2z" fill="#47A248"/>
        <path d="M12.1 22.9c-.1-.9-.2-1.8-.3-2.7.2.1.4.2.5.3v2.4h-.2z" fill="#3F8A3A"/>
      </svg>
    )
  };

  // Use transparent/minimal background for realistic brand logos with dark mode support
  const hasColoredSVG = ['react', 'javascript', 'typescript', 'nodejs', 'python', 'html', 'css', 'git', 'vscode', 'cpp', 'docker', 'mongodb'];
  const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
  
  return (
    <div
      title={tech.name} // Tooltip with technology name
      className={`flex items-center justify-center rounded-xl ${className} backdrop-blur-sm hover:backdrop-blur-md`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: hasColoredSVG.includes(tech.icon) 
          ? (isDark ? 'rgba(75, 85, 99, 0.15)' : 'rgba(255, 255, 255, 0.12)')
          : tech.bgColor,
        border: hasColoredSVG.includes(tech.icon) 
          ? (isDark ? '1px solid rgba(75, 85, 99, 0.3)' : '1px solid rgba(255, 255, 255, 0.2)')
          : 'none',
        padding: hasColoredSVG.includes(tech.icon) ? '5px' : '8px',
        boxShadow: hasColoredSVG.includes(tech.icon)
          ? (isDark 
              ? '0 2px 8px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(0, 0, 0, 0.1)'
              : '0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 32px rgba(0, 0, 0, 0.06)')
          : '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)'
      }}
      onMouseEnter={(e) => {
        if (hasColoredSVG.includes(tech.icon)) {
          const isDark = document.documentElement.classList.contains('dark');
          e.currentTarget.style.backgroundColor = isDark 
            ? 'rgba(75, 85, 99, 0.35)' 
            : 'rgba(255, 255, 255, 0.25)';
          e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
          e.currentTarget.style.boxShadow = isDark
            ? '0 4px 16px rgba(0, 0, 0, 0.25), 0 12px 40px rgba(0, 0, 0, 0.15)'
            : '0 4px 16px rgba(0, 0, 0, 0.12), 0 12px 40px rgba(0, 0, 0, 0.08)';
        }
      }}
      onMouseLeave={(e) => {
        if (hasColoredSVG.includes(tech.icon)) {
          const isDark = document.documentElement.classList.contains('dark');
          e.currentTarget.style.backgroundColor = isDark 
            ? 'rgba(75, 85, 99, 0.15)' 
            : 'rgba(255, 255, 255, 0.12)';
          e.currentTarget.style.transform = 'scale(1) translateY(0px)';
          e.currentTarget.style.boxShadow = isDark
            ? '0 2px 8px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(0, 0, 0, 0.1)'
            : '0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 32px rgba(0, 0, 0, 0.06)';
        }
      }}
    >
      {icons[tech.icon] || (
        <span className="font-bold text-xs uppercase" style={{ color: '#FFFFFF' }}>
          {tech.name.slice(0, 2)}
        </span>
      )}
    </div>
  );
};