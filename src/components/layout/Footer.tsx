import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-dark-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 dark:border-dark-700 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent mb-2">
              PORTFOLIO
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Turning ideas into digital reality with clean design and flawless execution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Connect with me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 bg-white dark:bg-dark-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors shadow-sm"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400">
                Terms of Service
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;