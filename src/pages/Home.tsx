import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Shield } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-primary-600" />,
      title: 'Discover Your Truth',
      description: 'Reconnect with your authentic self and uncover your core values and strengths.'
    },
    {
      icon: <Heart className="w-6 h-6 text-primary-600" />,
      title: 'Embrace Growth',
      description: 'Transform challenges into opportunities for personal development and evolution.'
    },
    {
      icon: <Shield className="w-6 h-6 text-primary-600" />,
      title: 'Live With Purpose',
      description: 'Gain clarity on your direction and lead your life with intention and confidence.'
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-50 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/7176302/pexels-photo-7176302.jpeg" 
                alt="Life coach working with client" 
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-4">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                You're Not Broken — You're Becoming
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At "I Know What's Right With Me," we believe that true transformation begins with recognizing the strength and wisdom already within you.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our coaching approach focuses on helping you reconnect with your authentic self, breaking through limiting beliefs, and building a life aligned with your core values and purpose.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Whether through our interactive webinar, self-guided eBook, or personalized mentorship, we provide the tools and support you need to walk confidently in what's right with you.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#services" className="btn btn-primary">
                  Explore Our Services
                </a>
                <a href="#testimonials" className="btn btn-secondary">
                  See Success Stories
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;