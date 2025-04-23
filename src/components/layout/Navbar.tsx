import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface NavbarProps {
  onSectionClick: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleSectionClick = (section: string) => {
    onSectionClick(section);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-md py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              PORTFOLIO
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex space-x-8 items-center"
          >
            {['home', 'about', 'portfolio', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleSectionClick(item)}
                className="capitalize text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-yellow-500" />
              ) : (
                <Moon size={18} className="text-gray-700" />
              )}
            </button>
          </motion.div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-700"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-yellow-500" />
              ) : (
                <Moon size={18} className="text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-dark-800 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['home', 'about', 'portfolio', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleSectionClick(item)}
                className="py-2 px-4 capitalize text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-md transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;