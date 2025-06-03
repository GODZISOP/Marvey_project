import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UserCheck, Calendar, Clock, CheckCircle, MessageSquare, Shield } from 'lucide-react';

const Mentorship: React.FC = () => {
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
                1:1 Life Coaching Mentorship
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Walk in What's Right With You: <span className="text-primary-600">Personalized Coaching</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-xl">
                This is personalized life coaching designed just for you. Whether you're healing, transitioning, or simply ready to grow, this 1-on-1 mentorship creates a sacred space for truth, transformation, and clarity.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-5 h-5 mr-2 text-primary-600" />
                  <span>8 Weekly Sessions</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-2 text-primary-600" />
                  <span>60 Minutes Each</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <UserCheck className="w-5 h-5 mr-2 text-primary-600" />
                  <span>Personalized Action Plans</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/checkout/mentorship" className="btn btn-primary">
                  Start Your Journey — $3,500
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
                  src="https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg"
                  alt="One-on-one coaching session"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xl font-semibold mb-2">Personalized Guidance</p>
                  <p>Tailored coaching to address your specific needs and goals</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="details" className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-4">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Your Mentorship Journey Works
            </h2>
            <p className="text-lg text-gray-700">
              This transformative 8-week journey is designed to help you break old patterns, unlock your potential, and develop real strategies to move forward with purpose.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <UserCheck className="w-12 h-12 text-primary-600" />,
                title: "Discovery Session",
                description: "We begin with a comprehensive 90-minute session to understand your current reality, challenges, and aspirations."
              },
              {
                icon: <Shield className="w-12 h-12 text-primary-600" />,
                title: "Personalized Plan",
                description: "Based on your unique needs, we create a tailored coaching plan focused on your specific growth areas."
              },
              {
                icon: <MessageSquare className="w-12 h-12 text-primary-600" />,
                title: "Weekly Sessions",
                description: "Engage in powerful 60-minute coaching conversations that challenge, inspire, and guide your growth."
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-primary-600" />,
                title: "Implementation Support",
                description: "Receive ongoing support between sessions to help you implement insights and navigate challenges."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Your 8-Week Transformation</h3>
                <p className="text-gray-700 mb-6">
                  Each week builds upon the previous, creating a powerful progression of self-discovery and growth:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-primary-700 font-semibold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Weeks 1-2: Foundation</h4>
                      <p className="text-gray-700 text-sm">Clarifying values, identifying patterns, and establishing goals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-primary-700 font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Weeks 3-4: Awareness</h4>
                      <p className="text-gray-700 text-sm">Challenging limiting beliefs and developing new perspectives</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-primary-700 font-semibold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Weeks 5-6: Transformation</h4>
                      <p className="text-gray-700 text-sm">Creating new habits and practices that align with your true self</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-primary-700 font-semibold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Weeks 7-8: Integration</h4>
                      <p className="text-gray-700 text-sm">Solidifying changes and creating a sustainable path forward</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg"
                  alt="Coaching transformation journey"
                  className="rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-4">
              Your Transformation
            </span>
            <h2 className="text-3xl font-bold mb-6">
              What You'll Experience
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Clarity & Direction",
                description: "Gain crystal-clear understanding of your values, purpose, and the path that aligns with your authentic self.",
                icon: <svg className="w-12 h-12 text-primary-600\" fill="none\" stroke="currentColor\" viewBox="0 0 24 24\" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth="2\" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              },
              {
                title: "Renewed Confidence",
                description: "Develop unshakable self-trust and the courage to make decisions aligned with your highest good.",
                icon: <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              },
              {
                title: "Empowered Action",
                description: "Transform insights into tangible progress with practical strategies tailored to your unique situation.",
                icon: <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              },
              {
                title: "Breakthrough Patterns",
                description: "Identify and release limiting beliefs and behaviors that have kept you stuck in unfulfilling cycles.",
                icon: <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              },
              {
                title: "Authentic Relationships",
                description: "Learn to communicate your needs and boundaries, creating more meaningful connections with others.",
                icon: <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              },
              {
                title: "Sustainable Growth",
                description: "Develop practices and mindsets that continue your evolution long after our coaching relationship ends.",
                icon: <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="card border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
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
              Client Stories
            </span>
            <h2 className="text-3xl font-bold mb-6">
              Transformations from Our Clients
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "The 1:1 mentorship was exactly what I needed at a critical transition point in my career. My coach helped me recognize patterns that were holding me back and develop strategies that aligned with my authentic self. I'm now leading my team with confidence I never thought possible.",
                name: "Jonathan Parker",
                role: "Executive Director",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              },
              {
                quote: "After years of feeling disconnected from myself and my purpose, this coaching experience helped me rediscover what truly matters to me. The personalized approach made all the difference—I wasn't following someone else's blueprint, but creating my own path forward.",
                name: "Amara Washington",
                role: "Healthcare Professional",
                image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg"
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
      
      {/* Meet Your Coach Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg" 
                alt="Your life coach" 
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
                Meet Your Coach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sarah Williams
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                With over 15 years of experience in transformational coaching, Sarah has helped hundreds of clients reconnect with their authentic selves and create lives aligned with their deepest values.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Her approach combines evidence-based coaching methodologies with intuitive guidance, creating a powerful space for clients to explore, heal, and grow. Sarah specializes in helping individuals navigate transitions, overcome limiting beliefs, and discover their unique purpose.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <span className="text-gray-700">Certified Professional Coach</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <span className="text-gray-700">M.A. in Psychology</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <span className="text-gray-700">15+ Years Experience</span>
                </div>
              </div>
              
              <Link to="/checkout/mentorship" className="btn btn-primary">
                Work With Sarah
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Pricing and CTA */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4">Your Personalized Coaching Journey</h2>
                <p className="text-gray-700 mb-6">
                  This comprehensive 8-week mentorship is designed to help you transform how you see yourself and create lasting change.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">90-minute discovery session</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">7 weekly 60-minute coaching sessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Personalized action plans after each session</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Email support between sessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Custom resources tailored to your journey</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">30-day post-program check-in</span>
                  </li>
                </ul>
                <Link to="/checkout/mentorship" className="btn btn-primary">
                  Begin Your Journey
                </Link>
              </div>
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-8 md:p-12 flex flex-col justify-center text-white">
                <div className="text-center">
                  <p className="mb-2">Investment</p>
                  <div className="text-5xl font-bold mb-4">$3,500</div>
                  <p className="mb-6">
                    Transform your self-perception and build the life that fits who you really are
                  </p>
                  <div className="mb-6 bg-white/20 rounded-lg p-4">
                    <p className="font-semibold mb-2">Payment Options Available</p>
                    <p className="text-sm">
                      Pay in full or choose our 2-payment plan. Contact us to discuss options that work for you.
                    </p>
                  </div>
                  <Link to="/checkout/mentorship" className="btn bg-white text-primary-700 hover:bg-primary-50">
                    Start Today
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
                  question: "How do the coaching sessions take place?",
                  answer: "All sessions are conducted via Zoom video calls, allowing for face-to-face interaction regardless of your location. Each session is recorded (with your permission) and shared with you afterward so you can revisit insights without having to take notes during our time together."
                },
                {
                  question: "What if I need to reschedule a session?",
                  answer: "We understand that life happens. You can reschedule a session with at least 24 hours' notice without any penalty. For cancellations with less than 24 hours' notice, the session may be forfeited, depending on circumstances."
                },
                {
                  question: "How is this different from therapy?",
                  answer: "While therapy often focuses on healing past wounds and addressing clinical mental health concerns, coaching is present and future-oriented. We focus on clarifying your vision, identifying obstacles, and creating actionable strategies to move forward. Coaching assumes you are whole and capable, rather than in need of fixing."
                },
                {
                  question: "What results can I expect?",
                  answer: "While everyone's journey is unique, clients typically experience greater clarity about their values and purpose, increased confidence in decision-making, improved relationships, and tangible progress toward their goals. The most significant changes often come from shifts in perspective that transform how you see yourself and your possibilities."
                },
                {
                  question: "Is there a guarantee?",
                  answer: "While we can't guarantee specific outcomes (as results depend on your commitment and follow-through), we do guarantee our full dedication to your growth. If after the first two sessions you feel the coaching relationship isn't the right fit, we'll refund the remaining balance of your investment."
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
              Ready to Transform Your Life?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Start your personalized coaching journey today and discover what's already right with you.
            </p>
            <Link to="/checkout/mentorship" className="btn btn-primary text-lg px-8 py-4">
              Begin Your Mentorship — $3,500
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mentorship;