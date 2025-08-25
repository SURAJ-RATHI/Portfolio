import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Code, MessageCircle, Mail, Phone } from 'lucide-react';
import { Logo } from '../Logo';

interface FooterSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const FooterSection = ({ scrollToSection }: FooterSectionProps) => {
  return (
    <footer className="premium-card mx-2 sm:mx-4 mt-2 sm:mt-2 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 theme-transition depth-2">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <Logo size="sm" animated={true} />
              <h3 className="text-2xl sm:text-3xl font-bold theme-text-primary">Suraj Rathi</h3>
            </div>
            <p className="theme-text-secondary mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
              Software Developer passionate about creating innovative web solutions and building AI related webApps using Gen AI to make the website efficient and more productive also love  to contributing to open-source projects.
            </p>
            <p className="text-xs sm:text-sm theme-text-muted font-medium">
              ✨ Inspired by macOS design principles
            </p>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 theme-text-primary">Quick Links</h4>
            <div className="space-y-2 sm:space-y-3">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="block theme-text-secondary hover:theme-text-primary transition-colors figma-cursor font-medium text-sm sm:text-base"
                  data-clickable
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 theme-text-primary">Social Media</h4>
            <div className="space-y-2 sm:space-y-3">
              {[
                { name: 'LinkedIn', href: 'https://www.linkedin.com/in/suraj127021/', icon: Linkedin, color: 'hover:text-blue-600' },
                { name: 'GitHub', href: 'https://github.com/SURAJ-RATHI', icon: Github, color: 'hover:text-gray-800 dark:hover:text-gray-200' },
                { name: 'Twitter', href: 'https://twitter.com/SurajRathi65983', icon: Twitter, color: 'hover:text-blue-400' },
                { name: 'LeetCode', href: 'https://leetcode.com/u/SURYA-0155/', icon: Code, color: 'hover:text-yellow-600' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 4 }}
                    className={`flex items-center text-sm sm:text-base hover:theme-text-primary transition-colors figma-cursor ${social.color}`}
                    data-clickable
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4 mr-2" /> {social.name}
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 theme-text-primary">Contact</h4>
            <div className="space-y-2 sm:space-y-3 theme-text-secondary">
              <motion.a
                href="mailto:surajrathi127021@gmail.com"
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center text-sm sm:text-base hover:theme-text-primary transition-colors figma-cursor"
                data-clickable
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2" /> surajrathi127021@gmail.com
              </motion.a>
              <motion.a
                href="tel:+917015506489"
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center text-sm sm:text-base hover:theme-text-primary transition-colors figma-cursor"
                data-clickable
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2" /> +91 7015506489
              </motion.a>
              <motion.a
                href="https://wa.me/917015506489"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center text-sm sm:text-base hover:theme-text-primary transition-colors figma-cursor"
                data-clickable
              >
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2" /> WhatsApp
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t theme-border-primary pt-6 sm:pt-8">
          <div className="flex flex-col items-center space-y-4 sm:space-y-6">
            <p className="theme-text-muted font-medium text-sm sm:text-base text-center">
              &copy; 2025 Suraj Rathi. All rights reserved.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {[
                { icon: Github, href: 'https://github.com/SURAJ-RATHI', label: 'GitHub', color: 'hover:theme-text-primary' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/suraj127021/', label: 'LinkedIn', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
                { icon: Code, href: 'https://leetcode.com/u/SURYA-0155/', label: 'LeetCode', color: 'hover:text-orange-600 dark:hover:text-orange-400' },
                { icon: MessageCircle, href: 'https://wa.me/917015506489', label: 'WhatsApp', color: 'hover:text-green-600 dark:hover:text-green-400' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3, rotateY: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 glass-intense rounded-xl sm:rounded-2xl flex items-center justify-center theme-text-muted transition-all figma-cursor magnetic depth-1 ${social.color}`}
                    title={social.label}
                    data-clickable
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};