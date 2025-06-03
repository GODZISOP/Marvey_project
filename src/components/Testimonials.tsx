import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jessica Thompson',
      role: 'Marketing Executive',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      quote: 'This coaching program helped me reconnect with my core values and purpose. I now lead my team with greater confidence and clarity than ever before.'
    },
    {
      id: 2,
      name: 'Michael Roberts',
      role: 'Entrepreneur',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      quote: 'The 1:1 mentorship was transformative. I was able to identify and break through limiting beliefs that had been holding me back for years. Worth every penny.'
    },
    {
      id: 3,
      name: 'Alisha Patel',
      role: 'Healthcare Professional',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      quote: 'The eBook has become my daily companion. The reflective exercises helped me rediscover my passion for helping others and find balance in my demanding career.'
    },
    {
      id: 4,
      name: 'David Chen',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      quote: 'As someone who was skeptical of coaching, I was amazed by how practical and impactful the webinar was. I left with concrete strategies that improved both my work and relationships.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-primary-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transformations from Our Community
          </h2>
          <p className="text-lg text-gray-700">
            Hear from people who've discovered what's right with them and transformed their lives through our coaching programs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              initial={false}
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10">
                    <Quote className="w-12 h-12 text-primary-200 mb-6" />
                    
                    <p className="text-gray-700 text-lg md:text-xl italic mb-8">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-soft hover:bg-primary-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-primary-600" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-soft hover:bg-primary-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-primary-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;