
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Phone, Mail, MessageCircle, MapPin, Send } from 'lucide-react';

interface ContactSectionProps {
  contactForm: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  setContactForm: (form: any) => void;
  handleContactSubmit: (e: React.FormEvent) => void;
}

export const ContactSection = ({ contactForm, setContactForm, handleContactSubmit }: ContactSectionProps) => {
  return (
    <section id="contact" className="p-4 sm:p-6 lg:p-8 section-bg theme-transition lg:h-fit">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl lg:max-w-6xl mx-auto"
      >
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0 }}
            viewport={{ once: true }}
          >
            Let's Create Something Amazing
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl theme-text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0 }}
            viewport={{ once: true }}
          >
            Ready to turn your ideas into reality? Let's collaborate and build the future together.
          </motion.p>
        </div>

        {/* Contact Form - Same Width as Skills Section above 1023px */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl lg:max-w-6xl mx-auto mb-6 sm:mb-8 lg:mb-10"
        >
          <div className="premium-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 figma-cursor depth-3" data-move>
            <div className="mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold theme-text-primary mb-3 sm:mb-4">Get In Touch</h3>
              <p className="theme-text-secondary text-sm sm:text-base">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 theme-input-bg border theme-input-border rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all figma-text theme-text-primary theme-placeholder text-sm sm:text-base"
                    required
                  />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 theme-input-bg border theme-input-border rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all figma-text theme-text-primary theme-placeholder text-sm sm:text-base"
                    required
                  />
                </motion.div>
              </div>
              
              <motion.div whileFocus={{ scale: 1.02 }}>
                <input
                  type="text"
                  placeholder="Subject"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 theme-input-bg border theme-input-border rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all figma-text theme-text-primary theme-placeholder text-sm sm:text-base"
                  required
                />
              </motion.div>
              
              <motion.div whileFocus={{ scale: 1.02 }}>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 theme-input-bg border theme-input-border rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all figma-text theme-text-primary theme-placeholder resize-none text-sm sm:text-base"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all figma-cursor magnetic depth-2 flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base"
                data-clickable
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Connect With Me - Same Width as Skills Section above 1023px */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl lg:max-w-6xl mx-auto mb-4 sm:mb-6 lg:mb-8"
        >
          <div className="premium-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 figma-cursor depth-2">
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold theme-text-primary mb-6 sm:mb-8 lg:mb-10 text-center">Connect With Me</h4>
            
            {/* All Contact Icons */}
            <div className="flex justify-center space-x-4 sm:space-x-6 lg:space-x-8">
              {[
                { icon: Github, href: 'https://github.com/SURAJ-RATHI', label: 'GitHub', color: 'hover:theme-text-primary' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/suraj127021/', label: 'LinkedIn', color: 'hover:text-blue-600' },
                { icon: Mail, href: 'mailto:surajrathi127021@gmail.com', label: 'Email', color: 'hover:text-blue-500' },
                { icon: Phone, href: 'tel:+917015506489', label: 'Phone', color: 'hover:text-green-500' },
                { icon: MessageCircle, href: 'https://wa.me/917015506489', label: 'WhatsApp', color: 'hover:text-green-600' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.label === 'Email' || social.label === 'Phone' ? undefined : '_blank'}
                    rel={social.label === 'Email' || social.label === 'Phone' ? undefined : 'noopener noreferrer'}
                    whileHover={{ scale: 1.2, y: -3, rotateY: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 glass-intense rounded-xl sm:rounded-2xl flex items-center justify-center theme-text-muted transition-all figma-cursor magnetic depth-1 ${social.color}`}
                    title={social.label}
                    data-clickable
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>


      </motion.div>
    </section>
  );
};