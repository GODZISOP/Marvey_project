import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle, Award } from 'lucide-react';

const Webinar: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-6">
                Life Coaching Webinar
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                I Know What's Right With Me: <span className="text-primary-600">Identity & Purpose</span>
              </h1>
             <p className="text-lg text-gray-700 mb-8 max-w-xl">
  This is more than motivation — it's a life coaching experience built to transform how you see yourself. Reconnect with your truth, break free from self-doubt, and learn to lead your life with clarity.<br />

</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-5 h-5 mr-2 text-primary-600" />
                  <span>Next Session: June 15, 2025</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-2 text-primary-600" />
                  <span>Duration: 3 hours</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 mr-2 text-primary-600" />
                  <span>Limited to 50 participants</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/checkout/webinar" className="btn btn-primary">
                  Register Now — $1,500
                </Link>
                <a href="#details" className="btn btn-secondary">
                  Learn More
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg"
                  alt="Interactive webinar session"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xl font-semibold mb-2">Transform Your Self-Perception</p>
                  <p>Interactive coaching tools to reconnect with your authentic self</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* What You'll Learn Section */}
      <section id="details" className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-4">
              Webinar Details
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
           I Know What\'s Right With Met:he June 21st 5pm Eastern is a Life Coaching Webinar for Self-Discovery & Empowerment
            </h2>
            <p className="text-lg text-gray-700">
              This dynamic, interactive webinar will give you practical tools and insights to transform how you see yourself and approach your life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-8 h-8 text-primary-600" />,
                title: "Self-Discovery Exercises",
                description: "Guided activities to help you identify your core values, strengths, and authentic desires."
              },
              {
                icon: <Users className="w-8 h-8 text-primary-600" />,
                title: "Interactive Group Coaching",
                description: "Experience the power of collective insight through facilitated discussions and shared experiences."
              },
              {
                icon: <Award className="w-8 h-8 text-primary-600" />,
                title: "Transformative Techniques",
                description: "Learn evidence-based methods to shift your perspective and overcome limiting beliefs."
              },
              {
                icon: <Calendar className="w-8 h-8 text-primary-600" />,
                title: "Action Planning",
                description: "Create a personalized roadmap to implement your insights and continue your growth journey."
              },
              {
                icon: <Clock className="w-8 h-8 text-primary-600" />,
                title: "Live Q&A Sessions",
                description: "Get your specific questions answered and receive personalized guidance from our expert coach."
              },
              {
                icon: <Users className="w-8 h-8 text-primary-600" />,
                title: "Community Connection",
                description: "Connect with like-minded individuals on similar journeys of self-discovery and growth."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl font-bold mb-6">
              What Previous Participants Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "This webinar was exactly what I needed. The interactive exercises helped me identify patterns I'd never noticed before, and I left with practical strategies I could apply immediately.",
                name: "Rebecca Torres",
                role: "Marketing Director",
                image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
              },
              {
                quote: "I was skeptical at first, but this experience completely changed my perspective. The coach created such a safe, supportive environment that I felt comfortable being vulnerable and doing the deep work.",
                name: "James Wilson",
                role: "Software Engineer",
                image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-soft p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing and CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform How You See Yourself?</h2>
                <p className="mb-6">
                  Join our next webinar session and begin your journey to authentic self-discovery and empowerment.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary-200 flex-shrink-0 mt-0.5" />
                    <span>3-hour interactive experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary-200 flex-shrink-0 mt-0.5" />
                    <span>Workbook and resources included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary-200 flex-shrink-0 mt-0.5" />
                    <span>30-day email support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary-200 flex-shrink-0 mt-0.5" />
                    <span>Recording access for 60 days</span>
                  </li>
                </ul>
                <Link to="/checkout/webinar" className="btn bg-white text-primary-700 hover:bg-primary-50">
                  Register Now
                </Link>
              </div>
              <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Investment</p>
                  <div className="text-5xl font-bold text-primary-600 mb-4">$1,500</div>
                  <p className="text-gray-700 mb-6">
                    Transform your self-perception and unlock your authentic potential
                  </p>
                  <div className="flex justify-center mb-6">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    *Limited to 50 participants per session
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Is this webinar right for me?",
                  answer: "This webinar is ideal for anyone feeling disconnected from their authentic self, struggling with self-doubt, or seeking greater clarity and purpose in their life. Whether you're navigating a transition or simply want to deepen your self-awareness, our interactive approach offers valuable insights and practical tools."
                },
                {
                  question: "How is this different from other webinars?",
                  answer: "Unlike typical webinars that simply deliver information, our experience is highly interactive and personalized. You won't just listen—you'll engage in guided exercises, receive real-time coaching, and connect with others on similar journeys. This is transformative education combined with practical application."
                },
                {
                  question: "Will I receive any materials?",
                  answer: "Yes! You'll receive a comprehensive digital workbook before the session, which includes all exercises, reflection prompts, and action planning templates. After the webinar, you'll also gain access to additional resources to support your continued growth."
                },
                {
                  question: "What if I can't attend the live session?",
                  answer: "While we highly recommend attending live for the full interactive experience, we understand that conflicts arise. All registrants receive access to the recording for 60 days following the webinar, along with the workbook and resources."
                },
                {
                  question: "Is there a money-back guarantee?",
                  answer: "Yes, we offer a satisfaction guarantee. If you participate in the full webinar and don't find it valuable, contact us within 7 days for a full refund."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-soft p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Begin Your Transformation Today
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Join our next webinar session and discover what's already right with you. Limited spaces available.
            </p>
            <Link to="/checkout/webinar" className="btn btn-primary text-lg px-8 py-4">
              Secure Your Spot — $1,500
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webinar;