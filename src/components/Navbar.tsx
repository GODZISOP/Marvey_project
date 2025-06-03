import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'nav-link-active' : 'nav-link';
  };

  return (
    <nav className="container-custom">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Sparkles className="h-8 w-8 text-primary-600" />
          <span className="text-xl font-semibold">I Know What's Right With Me</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={isActive('/')}>
            Home
          </Link>
          <Link to="/webinar" className={isActive('/webinar')}>
            Webinar
          </Link>
          <Link to="/ebook" className={isActive('/ebook')}>
            eBook
          </Link>
          <Link to="/mentorship" className={isActive('/mentorship')}>
            Mentorship
          </Link>
          <Link to="/#contact" className="nav-link">
            Contact
          </Link>
        </div>
        
        {/* CTA Button - Desktop Only */}
        <div className="hidden md:block">
          <Link to="/webinar" className="btn btn-primary">
            Start Your Journey
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;