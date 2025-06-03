import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Download, CheckCircle, FileText } from 'lucide-react';

const Ebook: React.FC = () => {
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
                Self-Discovery eBook
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                I Know What's Right With Me: <span className="text-primary-600">A Life Coaching Companion</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-xl">
                Your personal mirror and self-awareness manual for healing, growth, and self-truth. Through reflective prompts, bold affirmations, and coaching insights, you'll gain tools to silence doubt and embrace wholeness.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <BookOpen className="w-5 h-5 mr-2 text-primary-600" />
                  <span>180 Pages of Transformative Content</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FileText className="w-5 h-5 mr-2 text-primary-600" />
                  <span>Interactive Workbook Included</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Download className="w-5 h-5 mr-2 text-primary-600" />
                  <span>Instant Digital Delivery</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/checkout/ebook" className="btn btn-primary">
                  Get the eBook — $600
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
              className="flex justify-center"
            >
              <div className="relative w-3/4">
                <img
                  src="https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg"
                  alt="eBook cover"
                  className="w-full h-auto rounded-xl shadow-xl"
                />
                <div className="absolute -right-10 bottom-16 bg-white rounded-lg shadow-soft p-4 max-w-xs">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-medium">4.9/5 (87 reviews)</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "This eBook changed my relationship with myself completely."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* What's Inside Section */}
      <section id="details" className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-4">
              eBook Details
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What's Inside
            </h2>
            <p className="text-lg text-gray-700">
              This comprehensive eBook serves as your personal guide to reconnecting with your authentic self and living with purpose.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
            {[
              {
                title: "Chapter 1: The Power of Self-Perception",
                description: "Explore how your self-image shapes every aspect of your life and learn techniques to shift from criticism to compassion."
              },
              {
                title: "Chapter 2: Uncovering Your Core Values",
                description: "Engaging exercises to identify what truly matters to you, creating a foundation for authentic decision-making."
              },
              {
                title: "Chapter 3: Breaking Free from Limiting Beliefs",
                description: "Learn to recognize and reframe the stories that have been holding you back from embracing your potential."
              },
              {
                title: "Chapter 4: The Authenticity Blueprint",
                description: "Develop a personalized roadmap for living in alignment with your true self and highest aspirations."
              },
              {
                title: "Chapter 5: Resilience Through Self-Trust",
                description: "Build unshakable confidence in your inner wisdom and ability to navigate life's challenges."
              },
              {
                title: "Chapter 6: Purpose-Driven Action",
                description: "Transform insights into tangible steps and sustainable habits that create meaningful change."
              }
            ].map((chapter, index) => (
              <motion.div
                key={index}
                className="flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mr-4 bg-primary-100 rounded-full h-10 w-10 flex-shrink-0 flex items-center justify-center">
                  <span className="text-primary-700 font-semibold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{chapter.title}</h3>
                  <p className="text-gray-700">{chapter.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-primary-50 rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-10">
                <h3 className="text-2xl font-bold mb-4">Interactive Workbook Included</h3>
                <p className="text-gray-700 mb-4">
                  The eBook comes with a companion workbook filled with reflective exercises, journaling prompts, and action plans to deepen your insights and apply what you learn.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Thought-provoking journaling prompts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Visualization exercises</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Weekly action plans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Progress tracking tools</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.pexels.com/photos/6953806/pexels-photo-6953806.jpeg"
                  alt="Interactive workbook pages"
                  className="rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-4">
              Reader Experiences
            </span>
            <h2 className="text-3xl font-bold mb-6">
              What Our Readers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "This eBook came to me at exactly the right time. The reflective exercises helped me reconnect with parts of myself I'd forgotten about for years.",
                name: "Elena Rodriguez",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
              },
              {
                quote: "The journaling prompts were incredibly powerful. I've read many self-help books, but this one actually changed how I see myself day to day.",
                name: "Marcus Johnson",
                image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg"
              },
              {
                quote: "I keep coming back to this eBook whenever I need guidance. It's like having a personal coach in your pocket ready to ask the right questions.",
                name: "Sophia Chen",
                image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-soft p-6"
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
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing and CTA */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4">Start Your Self-Discovery Journey Today</h2>
                <p className="text-gray-700 mb-6">
                  Get instant access to the eBook and companion workbook to begin your transformation.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">180-page comprehensive eBook</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Interactive workbook with exercises</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Printable affirmation cards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Lifetime access to updates</span>
                  </li>
                </ul>
                <Link to="/checkout/ebook" className="btn btn-primary">
                  Get Instant Access
                </Link>
              </div>
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-8 md:p-12 flex flex-col justify-center text-white">
                <div className="text-center">
                  <p className="mb-2">Investment</p>
                  <div className="text-5xl font-bold mb-4">$600</div>
                  <p className="mb-6">
                    Transform your self-perception and reclaim your power
                  </p>
                  <div className="mb-6 bg-white/20 rounded-lg p-4">
                    <p className="font-semibold mb-2">100% Satisfaction Guarantee</p>
                    <p className="text-sm">
                      If you're not completely satisfied with the eBook, simply contact us within 30 days for a full refund.
                    </p>
                  </div>
                  <Link to="/checkout/ebook" className="btn bg-white text-primary-700 hover:bg-primary-50">
                    Download Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
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
                  question: "What format does the eBook come in?",
                  answer: "The eBook is delivered as a downloadable PDF that can be read on any device, including computers, tablets, and smartphones. The workbook is also provided as a PDF with fillable fields for digital completion, or you can print it for handwritten responses."
                },
                {
                  question: "How is this different from other self-help books?",
                  answer: "Most self-help books offer generic advice without practical application. Our eBook is designed as a coaching experience in written form, with personalized exercises, reflective prompts, and actionable strategies tailored to your unique journey. It's interactive, not just informative."
                },
                {
                  question: "How long will it take to work through the book?",
                  answer: "The eBook is designed to be self-paced. Some readers complete it in a week of intensive focus, while others prefer to spread the journey over 6-8 weeks, diving deep into each exercise. There's no right or wrong timeframe—it's about what works for your schedule and personal process."
                },
                {
                  question: "Can I get support if I have questions?",
                  answer: "Absolutely! Your purchase includes email support for questions about the content or exercises. For those seeking more personalized guidance, we also offer 1:1 coaching sessions as a separate service."
                },
                {
                  question: "Will I receive future updates to the eBook?",
                  answer: "Yes, your purchase includes lifetime access to all future updates and enhancements to the eBook and workbook. When new content is released, you'll receive an email notification with access instructions."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl shadow-soft p-6"
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
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Begin Your Self-Discovery Journey Today
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Download the eBook now and start reconnecting with your authentic self.
            </p>
            <Link to="/checkout/ebook" className="btn btn-primary text-lg px-8 py-4">
              Get Instant Access — $600
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ebook;