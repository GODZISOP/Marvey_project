import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary-600" />
              <span className="text-lg font-semibold">I Know What's Right With Me</span>
            </div>
            <p className="text-gray-600 mb-4">
              Empowering individuals to reconnect with their truth, break free from self-doubt, and lead lives of clarity and purpose.
            </p>
            <div className="flex space-x-4">
         <a href="https://www.facebook.com/share/16kUGQ5qa6/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary-600 transition-colors">
  <Facebook size={20} />
</a>
<a href="https://www.instagram.com/drmarveyspeaks?igsh=MXhzdTF2bGppYmExYw==" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary-600 transition-colors">
  <Instagram size={20} />
</a>

<a href="mailto:drmspeakscoaching@gmail.com" className="text-gray-500 hover:text-primary-600 transition-colors">
  <Mail size={20} />
</a>



            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">Home</Link></li>
              <li><Link to="/webinar" className="text-gray-600 hover:text-primary-600 transition-colors">Webinar</Link></li>
              <li><Link to="/ebook" className="text-gray-600 hover:text-primary-600 transition-colors">eBook</Link></li>
              <li><Link to="/mentorship" className="text-gray-600 hover:text-primary-600 transition-colors">Mentorship</Link></li>
              <li><Link to="/#testimonials" className="text-gray-600 hover:text-primary-600 transition-colors">Testimonials</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/webinar" className="text-gray-600 hover:text-primary-600 transition-colors">Life Coaching Webinar</Link></li>
              <li><Link to="/ebook" className="text-gray-600 hover:text-primary-600 transition-colors">Self-Discovery eBook</Link></li>
              <li><Link to="/mentorship" className="text-gray-600 hover:text-primary-600 transition-colors">1:1 Coaching Mentorship</Link></li>
              <li><Link to="/#contact" className="text-gray-600 hover:text-primary-600 transition-colors">Free Consultation</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-primary-600 mt-1 flex-shrink-0" />
                <a href="mailto:contact@iknowwhatsrightw.me" className="text-gray-600 hover:text-primary-600 transition-colors">contact@iknowwhatsrightw.me</a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-primary-600 mt-1 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-600 hover:text-primary-600 transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">123 Transformation Ave, Suite 101<br />Los Angeles, CA 90001</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} I Know What's Right With Me. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <Link to="/privacy-policy" className="hover:text-primary-600 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-primary-600 transition-colors">Terms of Service</Link>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart size={14} className="text-primary-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;