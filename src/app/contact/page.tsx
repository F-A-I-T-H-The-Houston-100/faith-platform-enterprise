'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  MessageSquare,
  Users,
  Building2,
  Shield,
  Briefcase,
  Headphones,
  Globe,
  Linkedin,
  Twitter,
  Youtube,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Target,
  Zap,
  Download,
  Play,
  Send,
  User,
  Building,
  FileText,
  Settings,
  Code,
  Heart
} from 'lucide-react';

export default function EnterpriseContactPage() {
  const [activeContactType, setActiveContactType] = useState('enterprise-sales');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    phone: '',
    aum: '',
    message: '',
    contactReason: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactTypes = {
    'enterprise-sales': {
      title: 'Enterprise Sales',
      subtitle: 'Platform licensing and enterprise solutions',
      icon: Building2,
      color: 'from-black to-gray-600',
      description: 'Ready to transform your investment operations with F.A.I.T.H. Platform? Our enterprise sales team specializes in licensing solutions for $250M+ AUM organizations.',
      contacts: [
        { name: 'Enterprise Sales Team', email: 'enterprise@houston100investmentgroup.com', phone: '+1-713-FAITH-AI' },
        { name: 'Effram Barrett, CEO', email: 'effram@houston100investmentgroup.com', phone: '+1-713-324-8401' }
      ],
      responseTime: 'Within 4 hours',
      idealFor: ['Investment groups seeking platform licensing', 'C-suite executives evaluating solutions', 'Organizations with $250M+ AUM']
    },
    'technical-demos': {
      title: 'Technical Demos',
      subtitle: 'AI architecture and platform demonstrations',
      icon: Code,
      color: 'from-gray-800 to-black',
      description: 'See F.A.I.T.H. AI Engine in action with our technical team. Perfect for CTOs, technical decision-makers, and development teams.',
      contacts: [
        { name: 'William Brown, CTO', email: 'william@houston100investmentgroup.com', phone: '+1-713-324-8403' },
        { name: 'Technical Solutions Team', email: 'tech-demos@houston100investmentgroup.com', phone: '+1-713-FAITH-AI' }
      ],
      responseTime: 'Within 2 hours',
      idealFor: ['CTOs and technical leaders', 'Development teams', 'AI/ML specialists']
    },
    'partnerships': {
      title: 'Strategic Partnerships',
      subtitle: 'Reseller programs and strategic alliances',
      icon: Briefcase,
      color: 'from-gray-700 to-gray-900',
      description: 'Explore partnership opportunities including white-label licensing, reseller programs, and strategic technology alliances.',
      contacts: [
        { name: 'Partnership Development', email: 'partnerships@houston100investmentgroup.com', phone: '+1-713-324-8405' },
        { name: 'Quintin Ward, COO', email: 'quintin@houston100investmentgroup.com', phone: '+1-713-324-8402' }
      ],
      responseTime: 'Within 24 hours',
      idealFor: ['Technology partners', 'Reseller organizations', 'Strategic alliance prospects']
    },
    'customer-success': {
      title: 'Customer Success',
      subtitle: 'Existing client support and optimization',
      icon: Headphones,
      color: 'from-gray-600 to-black',
      description: 'Dedicated support for existing F.A.I.T.H. Platform clients including optimization, training, and technical assistance.',
      contacts: [
        { name: 'Customer Success Team', email: 'success@houston100investmentgroup.com', phone: '+1-713-324-8410' },
        { name: '24/7 Enterprise Support', email: 'support@houston100investmentgroup.com', phone: '+1-713-SUPPORT' }
      ],
      responseTime: '<1 hour for Enterprise clients',
      idealFor: ['Existing platform clients', 'Implementation teams', 'Ongoing optimization needs']
    }
  };

  const officeLocations = [
    {
      name: 'Houston Headquarters',
      address: '1000 F.A.I.T.H. Platform Drive\nHouston, TX 77002',
      phone: '+1-713-FAITH-AI (324-8424)',
      email: 'headquarters@houston100investmentgroup.com',
      hours: 'Monday - Friday: 8:00 AM - 6:00 PM CT\nSaturday: 9:00 AM - 1:00 PM CT',
      description: 'Main operations center and F.A.I.T.H. Platform development hub'
    },
    {
      name: 'Enterprise Solutions Center',
      address: '500 Enterprise Boulevard\nHouston, TX 77056',
      phone: '+1-713-324-8400',
      email: 'enterprise@houston100investmentgroup.com',
      hours: 'Monday - Friday: 7:00 AM - 7:00 PM CT\nWeekends: By appointment',
      description: 'Dedicated enterprise client services and demonstrations'
    }
  ];

  const supportLevels = [
    {
      tier: 'Enterprise Complete',
      responseTime: '<1 hour',
      availability: '24/7/365',
      features: ['Dedicated account manager', 'Priority escalation', 'Custom SLA agreements'],
      contact: 'enterprise-support@houston100investmentgroup.com'
    },
    {
      tier: 'Professional Suite',
      responseTime: '<4 hours',
      availability: 'Business hours',
      features: ['Business hour support', 'Email and phone', 'Standard escalation'],
      contact: 'professional-support@houston100investmentgroup.com'
    },
    {
      tier: 'Growth Package',
      responseTime: '<24 hours',
      availability: 'Business hours',
      features: ['Email support', 'Knowledge base access', 'Community forums'],
      contact: 'growth-support@houston100investmentgroup.com'
    }
  ];

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const currentContactType = contactTypes[activeContactType];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-gray-600 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-black mb-4">
            Message Sent Successfully!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Thank you, {formData.name}! Our {currentContactType.title.toLowerCase()} team will contact you {currentContactType.responseTime.toLowerCase()}.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-black">Response Time</div>
              <div className="text-sm text-gray-600">{currentContactType.responseTime}</div>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-black">Direct Line</div>
              <div className="text-sm text-gray-600">+1-713-FAITH-AI</div>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-black">Email Confirmation</div>
              <div className="text-sm text-gray-600">Sent to {formData.email}</div>
            </div>
          </div>
          
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
          >
            Return to F.A.I.T.H. Platform
          </button>
        </motion.div>
      </div>
    );
  }

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
              Contact Houston 100
              <span className="block text-gray-300">Enterprise Team</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Ready to transform your investment operations with F.A.I.T.H. Platform? 
              Our enterprise team is standing by to discuss licensing, demonstrations, 
              and strategic partnerships.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <Phone className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-lg font-semibold">Enterprise Hotline</div>
                <div className="text-gray-300">+1-713-FAITH-AI (324-8424)</div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-lg font-semibold">Response Time</div>
                <div className="text-gray-300">Within 4 hours</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-lg font-semibold">Enterprise Specialists</div>
                <div className="text-gray-300">Dedicated team ready</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Type Selector */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              Choose Your Contact Path
            </h2>
            <p className="text-xl text-gray-600">
              Select the team that best matches your needs for fastest response
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(contactTypes).map(([key, contact]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveContactType(key)}
                className={`p-6 rounded-xl font-semibold transition-all duration-300 text-left ${
                  activeContactType === key
                    ? `bg-gradient-to-br ${contact.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:shadow-md border border-gray-200'
                }`}
              >
                <contact.icon className="w-8 h-8 mb-4" />
                <div className="text-lg font-bold mb-2">{contact.title}</div>
                <div className="text-sm opacity-90">{contact.subtitle}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Contact Form */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            key={activeContactType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentContactType.color} flex items-center justify-center`}>
                    <currentContactType.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-black">{currentContactType.title}</h3>
                    <p className="text-lg text-gray-600">{currentContactType.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed">{currentContactType.description}</p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-3">Direct Contacts</h4>
                    {currentContactType.contacts.map((contact, index) => (
                      <div key={index} className="flex items-start gap-3 mb-4">
                        <User className="w-5 h-5 text-black mt-1" />
                        <div>
                          <div className="font-semibold text-black">{contact.name}</div>
                          <div className="text-gray-600">
                            <a href={`mailto:${contact.email}`} className="hover:text-black">{contact.email}</a>
                          </div>
                          <div className="text-gray-600">
                            <a href={`tel:${contact.phone}`} className="hover:text-black">{contact.phone}</a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-3">Response Time</h4>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-black" />
                      <span className="text-gray-700">{currentContactType.responseTime}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-3">Ideal For</h4>
                    <div className="space-y-2">
                      {currentContactType.idealFor.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-black" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-6">Send a Message</h3>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="john@yourcompany.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Your Investment Group"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Title/Role *
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="CEO, CIO, Managing Director"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Current AUM
                      </label>
                      <select
                        value={formData.aum}
                        onChange={(e) => handleInputChange('aum', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      >
                        <option value="">Select AUM Range</option>
                        <option value="under-250m">Under $250M</option>
                        <option value="250m-500m">$250M - $500M</option>
                        <option value="500m-1b">$500M - $1B</option>
                        <option value="1b-3b">$1B - $3B</option>
                        <option value="over-3b">Over $3B</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      How can we help? *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-vertical"
                      placeholder="Tell us about your investment operations, current challenges, or specific questions about F.A.I.T.H. Platform..."
                    />
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-black text-white font-semibold py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Office Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us in Houston or connect remotely with our global enterprise team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-8 h-8 text-black" />
                  <h3 className="text-2xl font-bold text-black">{office.name}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-black mb-1">Address</div>
                    <div className="text-gray-700 whitespace-pre-line">{office.address}</div>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-black mb-1">Contact</div>
                    <div className="text-gray-700">
                      <a href={`tel:${office.phone}`} className="hover:text-black block">{office.phone}</a>
                      <a href={`mailto:${office.email}`} className="hover:text-black">{office.email}</a>
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-black mb-1">Hours</div>
                    <div className="text-gray-700 whitespace-pre-line">{office.hours}</div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-600 text-sm">{office.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Enterprise Support Levels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support options designed for enterprise operations and SLA requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-black mb-4">{level.tier}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="font-semibold text-black">Response Time</div>
                    <div className="text-gray-600">{level.responseTime}</div>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-black">Availability</div>
                    <div className="text-gray-600">{level.availability}</div>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-black mb-2">Features</div>
                    <div className="space-y-1">
                      {level.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-black" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <a 
                  href={`mailto:${level.contact}`}
                  className="block w-full bg-black text-white text-center font-semibold py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Contact Support
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social & Additional Contact */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-800 to-gray-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Connect with Houston 100
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Follow our journey and stay updated on F.A.I.T.H. Platform developments
            </p>
            
            <div className="flex justify-center gap-6 mb-8">
              <a 
                href="https://linkedin.com/company/houston100investmentgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://twitter.com/houston100invest"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-all duration-300"
              >
                <Twitter className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://youtube.com/@houston100investmentgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-all duration-300"
              >
                <Youtube className="w-6 h-6 text-white" />
              </a>
            </div>
            
            <div className="text-gray-300">
              <p className="mb-2">📞 Enterprise Hotline: +1-713-FAITH-AI (324-8424)</p>
              <p className="mb-2">📧 General Inquiries: contact@houston100investmentgroup.com</p>
              <p>🏢 1000 F.A.I.T.H. Platform Drive, Houston, TX 77002</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
