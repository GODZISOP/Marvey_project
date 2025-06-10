import React from 'react';
import { Heart, Star, Users, Award, BookOpen, Compass } from 'lucide-react';

export default function AboutMarvelous() {
  const specialties = [
    { icon: <Compass className="w-6 h-6" />, title: "Identity & Self-Discovery", desc: "Helping you understand and embrace your authentic self" },
    { icon: <Award className="w-6 h-6" />, title: "Career Navigation", desc: "Strategic guidance for professional fulfillment and purpose" },
    { icon: <Heart className="w-6 h-6" />, title: "Relationship Dynamics", desc: "Building healthy, meaningful connections" },
    { icon: <Star className="w-6 h-6" />, title: "Spiritual Growth", desc: "Deepening your connection to purpose and meaning" },
    { icon: <BookOpen className="w-6 h-6" />, title: "Life Roadmapping", desc: "Creating clear pathways to your goals and dreams" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
            <span className="text-4xl font-bold text-white">MK</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Dr. Marvelous Kelechi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming Lives Through Holistic Healing and Self-Discovery
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {["Medical Doctor", "Life Coach", "Pastor", "Speaker", "Author"].map((role) => (
              <span key={role} className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-md">
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">A Multifaceted Approach</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dr. Marvelous Kelechi is a visionary leader who bridges the worlds of medicine, ministry, and personal transformation. As a medical doctor, certified life coach, public speaker, educator, strategist, and pastor, she brings an unparalleled depth of expertise to her mission of guiding individuals toward complete wholeness—mind, body, and spirit.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With her unique blend of clinical insight and spiritual wisdom, Marvelous addresses the full spectrum of human experience, helping you discover and embrace your authentic self.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Grounded in Love</h2>
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-red-500 mr-3" />
                <span className="font-semibold text-gray-700">20+ Years of Marriage</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Beyond her professional accomplishments, Marvelous is deeply rooted in family values. She has been blissfully married to her husband Kelechi for over 20 years, and together they are blessed with three wonderful children. This foundation of love and commitment infuses her work with authenticity and genuine care.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Areas of Expertise</h2>
              <div className="space-y-4">
                {specialties.map((specialty, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                    <div className="text-purple-600 mt-1">
                      {specialty.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{specialty.title}</h3>
                      <p className="text-gray-600 text-sm">{specialty.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Proven Results</h2>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 mr-3" />
                <span className="font-semibold">Countless Lives Transformed</span>
              </div>
              <p className="leading-relaxed mb-4">
                Marvelous doesn't just offer theory—she delivers transformation. With a track record of proven results and countless testimonials from those whose lives have been changed, her approach combines evidence-based strategies with compassionate guidance.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="font-semibold text-center">
                  "She has the proof. She has the evidence. She has the testimonials."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Your Partner in Transformation</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Whether through speaking engagements, workshops, one-on-one coaching, or her transformative book, Marvelous meets you where you are and guides you toward where you're meant to be. Her message is clear and powerful: true healing and fulfillment come from understanding and celebrating your complete identity.
          </p>
          <div className="space-y-4">
            <p className="text-xl font-semibold text-gray-800">
              Ready to Transform Your Life?
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With her proven track record, extensive experience, and heart for helping others, Marvelous Kelechi is uniquely equipped to guide you toward the breakthrough you've been seeking.
            </p>
            <div className="mt-8">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Start Your Transformation Journey
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Quote */}
        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            Most importantly, she can help you too.
          </p>
        </div>
      </div>
    </div>
  );
}