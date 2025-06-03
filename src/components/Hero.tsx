import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-white pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary-300 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-6">
              Life Coaching for Self-Discovery & Empowerment
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Reconnect With Your Truth & <span className="text-primary-600">Lead with Purpose</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              You're not broken — you're becoming. Our coaching programs help you reconnect with your authentic self, break free from self-doubt, and live with clarity and confidence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/webinar" className="btn btn-primary">
                Join Our Webinar
              </Link>
              <Link to="/#services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="Client" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg" alt="Client" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" alt="Client" />
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">150+ clients</span> found their purpose
              </p>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Life coaching session"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating testimonial card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-soft p-4 max-w-xs">
              <div className="flex items-center space-x-3 mb-2">
                <img
                  src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
                  alt="Client testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Marketing Director</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "This coaching experience transformed how I see myself. I've never felt more confident in my decisions."
              </p>
              <div className="mt-2 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;