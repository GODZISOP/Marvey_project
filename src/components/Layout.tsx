import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navbarClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Desktop Navbar */}
      <div className={navbarClass}>
        <Navbar />
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 rounded-md bg-white shadow-md md:hidden"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-primary-900/95 z-40 md:hidden flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6 text-white">
              <Link to="/" className="text-2xl font-semibold" onClick={toggleMenu}>Home</Link>
              <Link to="/webinar" className="text-2xl font-semibold" onClick={toggleMenu}>Webinar</Link>
              <Link to="/ebook" className="text-2xl font-semibold" onClick={toggleMenu}>eBook</Link>
              <Link to="/mentorship" className="text-2xl font-semibold" onClick={toggleMenu}>Mentorship</Link>
              <Link to="/#contact" className="text-2xl font-semibold" onClick={toggleMenu}>Contact</Link>
              <Link to="/about" className="text-2xl font-semibold" onClick={toggleMenu}>About</Link>
              <button className="btn btn-accent mt-6">Start Your Journey</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;