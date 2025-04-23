import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/10 dark:bg-primary-500/10 rounded-full blur-3xl animate-slow-spin"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-primary-500 dark:text-primary-400 font-medium mb-4 tracking-wide"
              >
                WELCOME TO MY PORTFOLIO
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-heading leading-tight"
              >
                Creative Web Developer & UI Designer
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
              >
                Turning ideas into digital reality with clean design and flawless execution. I create modern, responsive websites that help businesses grow.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={onExploreClick}
                  className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors shadow-lg shadow-primary-500/20 flex items-center"
                >
                  View My Work
                  <ArrowDownCircle size={18} className="ml-2" />
                </button>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-dark-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors"
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 bg-primary-500/20 dark:bg-primary-500/10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Portrait"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white dark:border-dark-800 shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-dark-800 px-4 py-2 rounded-lg shadow-lg">
                <p className="text-primary-500 dark:text-primary-400 font-bold">5+ Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;