import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, BookOpen, UserCheck } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'webinar',
      title: 'Life Coaching Webinar',
      price: '$1,500',
      icon: <Users className="w-10 h-10 text-primary-600" />,
      description: "I Know What's Right With Me: A Life Coaching Webinar for Self-Discovery & Empowerment. This dynamic, interactive experience will help you reconnect with your truth and break free from self-doubt.",
      features: [
        'Interactive coaching experience',
        'Guided self-discovery tools',
        'Live Q&A and personalized insight',
        'Actionable strategies to apply immediately',
        'Community of like-minded individuals'
      ],
      cta: 'Join the Webinar',
      link: '/webinar'
    },
    {
      id: 'ebook',
      title: 'Self-Discovery eBook',
      price: '$600',
      icon: <BookOpen className="w-10 h-10 text-primary-600" />,
      description: "I Know What's Right With Me: A Life Coaching Companion for Healing, Growth & Self-Truth. Your personal mirror and self-awareness manual to reclaim your power.",
      features: [
        'Purpose-driven chapters and exercises',
        'Reflective prompts for deep insights',
        'Bold affirmations for daily practice',
        'Tools to silence self-doubt',
        'Lifetime access to content updates'
      ],
      cta: 'Get the eBook',
      link: '/ebook'
    },
    {
      id: 'mentorship',
      title: '1:1 Life Coaching Mentorship',
      price: '$3,500',
      icon: <UserCheck className="w-10 h-10 text-primary-600" />,
      description: "Walk in What's Right With You: Personalized life coaching designed just for you. A sacred space for truth, transformation, and clarity to build the life that fits who you really are.",
      features: [
        'Personalized coaching sessions',
        'Tailored growth strategies',
        'Direct access to your coach',
        'Breakthrough pattern recognition',
        'Ongoing support between sessions'
      ],
      cta: 'Start Your Mentorship',
      link: '/mentorship'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-4">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transformative Coaching Services
          </h2>
          <p className="text-lg text-gray-700">
            Choose the coaching experience that resonates with your journey. Whether you prefer group learning, self-guided discovery, or personalized mentorship, we have a path for you.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="card border border-gray-100 hover:border-primary-200 flex flex-col h-full"
              variants={itemVariants}
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <div className="text-2xl font-bold text-primary-600 mb-4">{service.price}</div>
              <p className="text-gray-700 mb-6">{service.description}</p>
              
              <div className="mt-auto">
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-6 text-primary-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to={service.link} className="btn btn-primary w-full">
                  {service.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;