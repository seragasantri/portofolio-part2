import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import Swal from 'sweetalert2';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you for reaching out. I will get back to you soon!',
          icon: 'success',
          confirmButtonColor: '#1fb380',
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 1000);
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'contact@yourportfolio.com',
      link: 'mailto:contact@yourportfolio.com',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      details: 'San Francisco, CA',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-800" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Have a project in mind or want to collaborate? Feel free to reach out and I'll get back to you soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target={info.title === 'Location' ? '_blank' : undefined}
              rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-gray-50 dark:bg-dark-700 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary-500/10 text-primary-500 mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{info.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{info.details}</p>
            </motion.a>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-300 dark:border-dark-600 focus:border-primary-500 dark:focus:border-primary-500'
                      } bg-white dark:bg-dark-700 text-gray-800 dark:text-white outline-none transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-300 dark:border-dark-600 focus:border-primary-500 dark:focus:border-primary-500'
                      } bg-white dark:bg-dark-700 text-gray-800 dark:text-white outline-none transition-colors`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 focus:border-primary-500 dark:focus:border-primary-500 bg-white dark:bg-dark-700 text-gray-800 dark:text-white outline-none transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-300 dark:border-dark-600 focus:border-primary-500 dark:focus:border-primary-500'
                    } bg-white dark:bg-dark-700 text-gray-800 dark:text-white outline-none transition-colors resize-none`}
                    placeholder="Hello, I would like to talk about..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors shadow-lg shadow-primary-500/20 flex items-center"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative h-full min-h-[300px] lg:min-h-0 rounded-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.29728599965!2d-122.4723218997832!3d37.75767397951862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1627309093136!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0, height: '100%' }}
                allowFullScreen
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;