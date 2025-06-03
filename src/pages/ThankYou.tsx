import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const ThankYou: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-soft p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-success-100 p-4 rounded-full">
              <CheckCircle className="w-12 h-12 text-success-600" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You for Your Purchase!</h1>
          <p className="text-lg text-gray-700 mb-8">
            Your order has been successfully completed. We've sent a confirmation email with all the details to your inbox.
          </p>
          
          <div className="bg-primary-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">What Happens Next?</h2>
            <ul className="text-left space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                <span>You'll receive an email with access instructions within the next 15 minutes.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                <span>If you purchased the webinar, you'll receive a calendar invitation with Zoom details.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                <span>For eBook purchases, you'll receive download links and instructions.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                <span>If you purchased the 1:1 mentorship, we'll contact you within 24 hours to schedule your discovery session.</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn btn-secondary flex items-center justify-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Home
            </Link>
            <Link to="/#contact" className="btn btn-primary">
              Contact Support
            </Link>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h2 className="text-2xl font-bold mb-6">Explore Our Other Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/webinar" className="card hover:border-primary-300 transition-colors">
              <h3 className="font-semibold mb-2">Life Coaching Webinar</h3>
              <p className="text-gray-600 text-sm mb-2">Interactive group coaching experience</p>
              <p className="text-primary-600 font-semibold">$1,500</p>
            </Link>
            <Link to="/ebook" className="card hover:border-primary-300 transition-colors">
              <h3 className="font-semibold mb-2">Self-Discovery eBook</h3>
              <p className="text-gray-600 text-sm mb-2">Your personal coaching companion</p>
              <p className="text-primary-600 font-semibold">$600</p>
            </Link>
            <Link to="/mentorship" className="card hover:border-primary-300 transition-colors">
              <h3 className="font-semibold mb-2">1:1 Coaching Mentorship</h3>
              <p className="text-gray-600 text-sm mb-2">Personalized transformation journey</p>
              <p className="text-primary-600 font-semibold">$3,500</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;