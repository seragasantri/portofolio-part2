import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 2,
      title: 'Travel Blog',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A responsive blog for travel enthusiasts, featuring a modern design and content management system.',
      technologies: ['Next.js', 'Tailwind CSS', 'Sanity.io'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 3,
      title: 'Task Management App',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A productivity app for managing tasks, projects, and deadlines with team collaboration features.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A creative portfolio website for a photographer showcasing their work with a stunning gallery.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'An interactive weather application providing real-time forecasts and historical data.',
      technologies: ['Vue.js', 'Chart.js', 'Weather API'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A mobile app for tracking workouts, nutrition, and fitness goals with progress visualization.',
      technologies: ['Flutter', 'Firebase', 'Google Fit API'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-dark-800" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
            My <span className="text-primary-500">Portfolio</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Check out some of my recent projects. Each one is unique and built with attention to detail.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white dark:bg-dark-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-500/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink size={20} className="text-primary-500" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                  >
                    <Github size={20} className="text-primary-500" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary-500 dark:text-primary-400 tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-primary-500 dark:text-primary-400 font-medium text-sm hover:underline"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-dark-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto"
          >
            <div className="relative h-64 sm:h-80">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 bg-white/80 dark:bg-dark-900/80 p-2 rounded-full text-gray-700 dark:text-white hover:bg-white dark:hover:bg-dark-900"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{activeProject.title}</h3>
                  <span className="text-sm font-medium text-primary-500 dark:text-primary-400">
                    {activeProject.category}
                  </span>
                </div>
                <div className="flex gap-3">
                  <a
                    href={activeProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-dark-700 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
                  >
                    <ExternalLink size={18} className="text-primary-500" />
                  </a>
                  <a
                    href={activeProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-dark-700 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
                  >
                    <Github size={18} className="text-primary-500" />
                  </a>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{activeProject.description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href={activeProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors shadow-md inline-flex items-center"
                >
                  Live Demo
                  <ExternalLink size={16} className="ml-2" />
                </a>
                <a
                  href={activeProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors inline-flex items-center"
                >
                  View Code
                  <Github size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;