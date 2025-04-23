import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'Digital Edge',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Working with this developer was an incredible experience. They delivered a website that exceeded our expectations in terms of design and functionality. Their attention to detail and commitment to our project made all the difference.',
    },
    {
      id: 2,
      name: 'Michael Thompson',
      role: 'CEO',
      company: 'Tech Innovate',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'We hired this developer to redesign our corporate website, and the results were outstanding. They understood our brand vision perfectly and translated it into a modern, functional site that has significantly improved our online presence.',
    },
    {
      id: 3,
      name: 'Emily Chen',
      role: 'Product Manager',
      company: 'CreativeLabs',
      image: 'https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'The developer showed exceptional skill in both design and development. They created a product that was not only visually stunning but also performed flawlessly. Their communication throughout the project was exemplary.',
    },
    {
      id: 4,
      name: 'David Rodriguez',
      role: 'Founder',
      company: 'Startup Venture',
      image: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'As a startup founder, finding the right developer was crucial. They delivered a pixel-perfect implementation of our vision while suggesting valuable improvements we hadn\'t considered. Highly recommend!',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-dark-900" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
            Client <span className="text-primary-500">Testimonials</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            See what my clients have to say about my work and collaboration experience.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center"
              >
                <div className="w-full">
                  <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-6 md:p-10 relative">
                    <Quote
                      size={48}
                      className="text-primary-500/20 absolute top-6 left-6"
                    />
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="md:w-1/3 flex flex-col items-center">
                        <img
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-primary-500/20"
                        />
                        <div className="text-center mt-4">
                          <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                            {testimonials[activeIndex].name}
                          </h4>
                          <p className="text-primary-500 dark:text-primary-400 font-medium">
                            {testimonials[activeIndex].role}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {testimonials[activeIndex].company}
                          </p>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <blockquote className="text-gray-700 dark:text-gray-300 text-lg italic leading-relaxed">
                          "{testimonials[activeIndex].text}"
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white dark:bg-dark-800 shadow-md text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      activeIndex === index
                        ? 'bg-primary-500'
                        : 'bg-gray-300 dark:bg-dark-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white dark:bg-dark-800 shadow-md text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;