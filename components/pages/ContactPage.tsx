import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  ExternalLink,
  Send,
  Copy,
  Check
} from 'lucide-react';

export function ContactPage() {
  const [copied, setCopied] = useState('');

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'suraj.rathi@example.com',
      href: 'mailto:suraj.rathi@example.com',
      copyable: true
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7015506489',
      href: 'tel:+91 7015506489',
      copyable: true
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhiwani, Haryana, India',
      href: 'https://maps.google.com/?q=Bhiwani,Haryana,India',
      copyable: false
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/surajrathi',
      username: '@surajrathi',
      color: 'text-gray-700 dark:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/surajrathi',
      username: '@surajrathi',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/surajrathi',
      username: '@surajrathi',
      color: 'text-sky-500 dark:text-sky-400'
    }
  ];

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Contact</h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Let's connect and discuss opportunities</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Contact Information */}
        <div className="space-y-6 sm:space-y-8">
          {/* Direct Contact */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Get in Touch</h2>
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((contact) => {
                const Icon = contact.icon;
                return (
                  <div key={contact.label} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{contact.label}</p>
                        <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">{contact.value}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 sm:gap-2">
                      <a
                        href={contact.href}
                        className="p-1.5 sm:p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-600 transition-colors"
                        title={`Contact via ${contact.label}`}
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                      {contact.copyable && (
                        <button
                          onClick={() => copyToClipboard(contact.value, contact.label)}
                          className="p-1.5 sm:p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-600 transition-colors"
                          title={`Copy ${contact.label}`}
                        >
                          {copied === contact.label ? (
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                          ) : (
                            <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Social Media</h2>
            <div className="space-y-3 sm:space-y-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${social.color}`} />
                      </div>
                      <div>
                        <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">{social.name}</p>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{social.username}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Send a Message</h2>
          <form className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                  First Name
                </label>
                <Input placeholder="John" className="text-sm sm:text-base" />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                  Last Name
                </label>
                <Input placeholder="Doe" className="text-sm sm:text-base" />
              </div>
            </div>
            
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                Email
              </label>
              <Input type="email" placeholder="john@example.com" className="text-sm sm:text-base" />
            </div>
            
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                Subject
              </label>
              <Input placeholder="Let's discuss opportunities" className="text-sm sm:text-base" />
            </div>
            
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                Message
              </label>
              <Textarea 
                placeholder="Hi Suraj, I'd like to discuss..."
                rows={4}
                className="text-sm sm:text-base"
              />
            </div>
            
            <Button className="w-full flex items-center justify-center gap-2 text-sm sm:text-base">
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* Availability Status */}
      <div className="mt-6 sm:mt-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-4 sm:p-6 border border-green-200 dark:border-green-800">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-3 h-3 bg-green-500 rounded-full mt-2 animate-pulse"></div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
              Currently Available
            </h3>
            <p className="text-sm sm:text-base text-green-800 dark:text-green-200 mb-2">
              I'm actively looking for internship opportunities in software development, web development, and full-stack roles.
            </p>
            <p className="text-xs sm:text-sm text-green-600 dark:text-green-300">
              Response time: Usually within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}