import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
}

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch',
      excerpt: 'Explore the emerging technologies and methodologies that are shaping the future of web development.',
      date: 'June 12, 2025',
      author: 'Your Name',
      category: 'Development',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'future-web-development',
    },
    {
      id: 2,
      title: 'Designing for Accessibility: Best Practices',
      excerpt: 'Learn how to create inclusive web experiences that work for everyone, regardless of abilities.',
      date: 'May 28, 2025',
      author: 'Your Name',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'accessibility-best-practices',
    },
    {
      id: 3,
      title: 'How to Optimize Website Performance',
      excerpt: 'Practical tips and techniques to improve website speed and overall performance.',
      date: 'April 15, 2025',
      author: 'Your Name',
      category: 'Performance',
      image: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'optimize-website-performance',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-dark-900" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
            Latest <span className="text-primary-500">Articles</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Insights, thoughts, and knowledge sharing on web development, design, and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-dark-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-500 text-white text-xs rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  <a href={`#${post.slug}`}>{post.title}</a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{post.excerpt}</p>
                <a
                  href={`#${post.slug}`}
                  className="text-primary-500 dark:text-primary-400 font-medium inline-flex items-center hover:underline mt-auto"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#blog"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-dark-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors inline-flex items-center"
          >
            View All Articles
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;