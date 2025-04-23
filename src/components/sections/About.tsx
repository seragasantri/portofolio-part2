import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, LineChart, GanttChart } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React.js', percentage: 85 },
    { name: 'UI/UX Design', percentage: 80 },
    { name: 'Node.js', percentage: 75 },
    { name: 'TypeScript', percentage: 85 },
  ];

  const services = [
    {
      icon: <Code2 size={36} />,
      title: 'Web Development',
      description: 'Building responsive and performant websites with modern technologies.',
    },
    {
      icon: <Palette size={36} />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with a focus on user experience.',
    },
    {
      icon: <LineChart size={36} />,
      title: 'SEO Optimization',
      description: 'Improving website visibility on search engines to drive more traffic.',
    },
    {
      icon: <GanttChart size={36} />,
      title: 'Consulting',
      description: 'Providing expert advice on digital transformation and web strategies.',
    },
  ];

  const experienceItems = [
    {
      period: '2022 - Present',
      role: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      description: 'Lead developer for client projects, focusing on React, TypeScript, and Next.js applications.',
    },
    {
      period: '2019 - 2022',
      role: 'UI/UX Designer & Developer',
      company: 'Creative Agency',
      description: 'Created responsive websites and web applications for various clients using modern technologies.',
    },
    {
      period: '2018 - 2019',
      role: 'Junior Web Developer',
      company: 'Startup Hub',
      description: 'Developed and maintained client websites, focusing on frontend technologies.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-900" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
            About <span className="text-primary-500">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            I'm a passionate web developer and designer with a strong background in creating modern and functional websites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a creative web developer with over 5 years of experience designing and building digital products. I specialize in creating beautiful, functional websites that help businesses achieve their goals.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My approach combines clean aesthetics with solid functionality. I believe that a great website should not only look good but also provide an intuitive and seamless user experience.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h3>
            <div className="space-y-6">
              {experienceItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="border-l-2 border-primary-500 pl-4 py-1"
                >
                  <span className="text-sm font-medium text-primary-500 dark:text-primary-400 block mb-1">
                    {item.period}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{item.role}</h4>
                  <p className="text-gray-700 dark:text-gray-400 mb-1">{item.company}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Skills</h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, width: 0 }}
                  animate={inView ? { opacity: 1, width: '100%' } : { opacity: 0, width: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="mb-4"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                    <span className="text-primary-500 dark:text-primary-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                      className="h-full bg-primary-500 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Services I Offer</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-6 bg-white dark:bg-dark-800 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="text-primary-500 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{service.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;