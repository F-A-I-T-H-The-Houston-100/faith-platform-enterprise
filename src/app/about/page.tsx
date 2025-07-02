'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Brain, 
  Shield, 
  Award, 
  Target,
  Building2,
  Globe,
  Linkedin,
  Mail,
  Phone,
  Star,
  CheckCircle,
  ArrowRight,
  Calendar,
  Download,
  BarChart3,
  Zap,
  Heart,
  Book,
  Briefcase,
  GraduationCap,
  MapPin,
  Clock,
  Settings
} from 'lucide-react';

export default function AboutTeamPage() {
  const [activeLeader, setActiveLeader] = useState('effram');

  const leadership = {
    effram: {
      name: 'Effram Barrett',
      title: 'Chief Executive Officer & Founder',
      avatar: 'EB',
      bio: 'Visionary leader who transformed Houston 100 from a faith-based investment concept into a $900M+ AUM powerhouse. Effram\'s unique combination of deep faith, investment expertise, and technology vision created the revolutionary F.A.I.T.H. Platform.',
      achievements: [
        'Scaled Houston 100 to $900M+ AUM in record time',
        '25%+ portfolio performance improvement through AI implementation',
        'Pioneer in faith-based investment technology',
        'Recognized thought leader in Kingdom investing'
      ],
      expertise: [
        'Strategic Leadership & Vision',
        'Faith-Based Investment Strategy',
        'Business Development & Growth',
        'Member Relationship Management'
      ],
      background: 'Former investment executive with 15+ years in institutional asset management. MBA from top-tier business school with focus on ethical investing and technology innovation.',
      quote: 'F.A.I.T.H. Platform represents the future of Kingdom investing - where advanced AI meets biblical principles to create both financial returns and eternal impact.'
    },
    quintin: {
      name: 'Quintin Ward',
      title: 'Chief Operating Officer',
      avatar: 'QW',
      bio: 'Operational excellence leader who transformed Houston 100\'s day-to-day operations and member services. Quintin\'s focus on efficiency and member experience drove the 68% faster analysis times and operational scalability supporting $900M+ AUM.',
      achievements: [
        'Achieved 68% faster investment analysis through process optimization',
        'Scaled member services to support 800+ active members',
        'Implemented operational excellence achieving 99.9% platform uptime',
        'Led property management optimization retaining $500K+ annual fees'
      ],
      expertise: [
        'Operational Strategy & Execution',
        'Member Services & Experience',
        'Process Optimization',
        'Property Management Excellence'
      ],
      background: 'Former operations executive with expertise in financial services scaling. Advanced degree in Operations Management with specialization in member experience and process optimization.',
      quote: 'Our operational excellence ensures every Houston 100 member receives institutional-grade service with the personal touch that reflects our Kingdom values.'
    },
    william: {
      name: 'William Brown',
      title: 'Chief Technology Officer',
      avatar: 'WB',
      bio: 'Brilliant technologist who architected the revolutionary F.A.I.T.H. AI Engine and built the enterprise platform supporting $900M+ AUM operations. William\'s expertise in AI, financial systems, and enterprise architecture drives Houston 100\'s technical excellence.',
      achievements: [
        'Architected F.A.I.T.H. AI Engine with 94% classification accuracy',
        'Built platform achieving 99.9% uptime SLA',
        'Developed A* algorithm for investment classification',
        'Led enterprise-grade security implementation'
      ],
      expertise: [
        'AI & Machine Learning Architecture',
        'Enterprise Software Development',
        'Financial Technology Systems',
        'Cloud Infrastructure & Security'
      ],
  const companyStats = [
    { metric: '$900M+', label: 'Assets Under Management', description: 'Proven scale and trust' },
    { metric: '800+', label: 'Active Members', description: 'Growing community' },
    { metric: '25%+', label: 'Performance Improvement', description: 'AI-driven results' },
    { metric: '99.9%', label: 'Platform Uptime', description: 'Enterprise reliability' }
  ];

  const companyValues = [
    {
      icon: Heart,
      title: 'Kingdom First',
      description: 'Every investment decision guided by biblical principles and eternal impact'
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'Delivering institutional-grade performance through innovation and dedication'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building lasting relationships and supporting member success in all areas'
    },
    {
      icon: Brain,
      title: 'Innovation',
      description: 'Pioneering AI technology that advances faith-based investing'
    }
  ];

  const currentLeader = leadership[activeLeader];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-800 to-gray-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Houston 100
              <span className="block text-gray-300">Investment Group</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Pioneering the future of faith-based investing through revolutionary AI technology. 
              From startup vision to $900M+ AUM leader, we're transforming Kingdom investing 
              with the F.A.I.T.H. Platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Meet Our Leadership
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Company Overview
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-black mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders who built Houston 100 from concept to $900M+ AUM 
              and created the revolutionary F.A.I.T.H. Platform transforming Kingdom investing.
            </p>
          </motion.div>

          {/* Leadership Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(leadership).map(([key, leader]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveLeader(key)}
                className={`flex items-center gap-4 p-6 rounded-xl font-semibold transition-all duration-300 ${
                  activeLeader === key
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:shadow-md border border-gray-200'
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                  {leader.avatar}
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold">{leader.name}</div>
                  <div className="text-sm opacity-75">{leader.title}</div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Active Leader Details */}
          <motion.div
            key={activeLeader}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                    {currentLeader.avatar}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-black">{currentLeader.name}</h3>
                    <p className="text-lg text-gray-600">{currentLeader.title}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{currentLeader.bio}</p>
                
                <blockquote className="border-l-4 border-black pl-6 italic text-gray-700 mb-6">
                  "{currentLeader.quote}"
                </blockquote>
                
                <div className="text-sm text-gray-600 leading-relaxed">
                  {currentLeader.background}
                </div>
              </div>
              
              <div>
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-black mb-4">Key Achievements</h4>
                  <div className="space-y-3">
                    {currentLeader.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-black mb-4">Core Expertise</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {currentLeader.expertise.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-black flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From faith-driven vision to industry-leading innovation, 
              discover how Houston 100 is transforming Kingdom investing.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">The Houston 100 Journey</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">🌱 2023: The Vision</h4>
                  <p className="text-gray-700">Founded with a simple but powerful mission: combine biblical principles with institutional-grade investment management to create both financial returns and Kingdom impact.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">🚀 2024: Innovation Breakthrough</h4>
                  <p className="text-gray-700">Developed the revolutionary F.A.I.T.H. Platform, integrating AI technology with faith-based investing principles. Achieved 25%+ performance improvement over traditional methods.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">📈 2025: Industry Leadership</h4>
                  <p className="text-gray-700">Scaled to $900M+ AUM, serving 800+ members with institutional-grade results. Now licensing F.A.I.T.H. Platform to transform the entire faith-based investing industry.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-6">Company Values</h3>
              <div className="space-y-6">
                {companyValues.map((value, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black mb-2">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Leadership */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-800 to-gray-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Connect with Our Leadership
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Ready to discuss how F.A.I.T.H. Platform can transform your investment operations? 
              Our leadership team is available for strategic conversations with fellow executives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Schedule Executive Meeting
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Contact Leadership Team
              </motion.button>
            </div>
            
            <div className="text-gray-300">
              <p>📞 Executive Line: +1-713-FAITH-AI (324-8424)</p>
              <p>📧 leadership@houston100investmentgroup.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} technology.',
      quote: 'The F.A.I.T.H. AI Engine proves that cutting-edge technology and biblical principles can work together to create unprecedented investment intelligence and Kingdom impact.'
    }
  };
