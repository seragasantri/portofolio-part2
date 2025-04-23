import React, { useRef } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    let ref = null;
    
    switch (section) {
      case 'home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      case 'about':
        ref = aboutRef.current;
        break;
      case 'portfolio':
        ref = portfolioRef.current;
        break;
      case 'testimonials':
        ref = testimonialsRef.current;
        break;
      case 'blog':
        ref = blogRef.current;
        break;
      case 'contact':
        ref = contactRef.current;
        break;
      default:
        break;
    }
    
    if (ref) {
      const yOffset = -80; // Header height offset
      const y = ref.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-800 text-gray-900 dark:text-white">
        <Navbar onSectionClick={scrollToSection} />
        
        <main>
          <Hero onExploreClick={() => scrollToSection('portfolio')} />
          
          <div ref={aboutRef}>
            <About />
          </div>
          
          <div ref={portfolioRef}>
            <Portfolio />
          </div>
          
          <div ref={testimonialsRef}>
            <Testimonials />
          </div>
          
          <div ref={blogRef}>
            <Blog />
          </div>
          
          <div ref={contactRef}>
            <Contact />
          </div>
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;