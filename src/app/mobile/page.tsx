'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Shield, 
  Zap, 
  TrendingUp, 
  Bell, 
  Download, 
  Star,
  CheckCircle,
  ArrowRight,
  Eye,
  Lock,
  Wifi,
  WifiOff,
  BarChart3,
  PieChart,
  DollarSign,
  Users,
  Building2,
  Globe,
  Clock,
  Target,
  Award,
  Play,
  Calendar,
  Mail,
  Phone,
  Fingerprint,
  Camera,
  MapPin,
  Activity,
  Settings,
  RefreshCw
} from 'lucide-react';

export default function MobileAppLanding() {
  const [activeFeature, setActiveFeature] = useState('dashboard');
  const [activeScreen, setActiveScreen] = useState(0);

  const features = {
    dashboard: {
      title: 'Executive Dashboard',
      description: 'Real-time portfolio insights and performance metrics at your fingertips',
      icon: BarChart3,
      benefits: [
        'Live portfolio performance tracking',
        'Real-time AUM and member metrics', 
        'Investment opportunity alerts',
        'Executive KPI monitoring'
      ]
    },
    intelligence: {
      title: 'AI Intelligence Hub',
      description: 'Access all 5 F.A.I.T.H. AI components from anywhere',
      icon: Zap,
      benefits: [
        'Financial AI portfolio optimization',
        'Property evaluation and analysis',
        'Member behavior insights',
        'Technology health monitoring'
      ]
    },
    notifications: {
      title: 'Smart Notifications',
      description: 'Stay informed with intelligent alerts and priority communications',
      icon: Bell,
      benefits: [
        'Investment opportunity alerts',
        'Portfolio performance notifications',
        'Member communication priorities',
        'System health updates'
      ]
    },
    security: {
      title: 'Enterprise Security',
      description: 'Bank-grade security with biometric authentication',
      icon: Shield,
      benefits: [
        'Biometric authentication (Face ID/Touch ID)',
        'End-to-end encryption',
        'Remote device management',
        'Secure data synchronization'
      ]
    }
  };

  const mobileScreens = [
    {
      title: 'Portfolio Overview',
      description: 'Monitor $900M+ AUM performance',
      metrics: ['$900M+ AUM', '+25.3% Performance', '800+ Members']
    },
    {
      title: 'Property Analysis',
      description: 'AI-powered property evaluation',
      metrics: ['91% Accuracy', '<30 Seconds', '500+ Properties']
    },
    {
      title: 'Member Intelligence',
      description: 'Member behavior and insights',
      metrics: ['98% Satisfaction', '1000+ Members', 'Real-time Data']
    },
    {
      title: 'Investment Alerts',
      description: 'Smart notifications and opportunities',
      metrics: ['Real-time Alerts', 'Priority Routing', '24/7 Monitoring']
    }
  ];

  const appStats = [
    { metric: '4.9★', label: 'App Store Rating', description: 'Based on 150+ executive reviews' },
    { metric: '99.9%', label: 'Uptime', description: 'Enterprise-grade reliability' },
    { metric: '<200ms', label: 'Response Time', description: 'Lightning-fast performance' },
    { metric: '256-bit', label: 'Encryption', description: 'Bank-grade security' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-800 to-gray-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/20">
                  📱 Executive Mobile Intelligence
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                F.A.I.T.H. Platform
                <span className="block text-gray-300">Mobile App</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Take the power of AI-powered investment intelligence anywhere. 
                Executive dashboard, real-time insights, and portfolio management 
                designed for C-suite leaders managing $900M+ AUM.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  Download for iOS
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download for Android
                </motion.button>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Free for Enterprise clients
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Requires F.A.I.T.H. Platform license
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              {/* Phone Frame */}
              <div className="relative">
                <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="bg-black text-white p-4 flex justify-between items-center text-sm">
                      <span className="font-semibold">9:41 AM</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-6 h-3 border border-white rounded-sm">
                          <div className="w-4 h-full bg-white rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-6 bg-gray-50 h-full">
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-black">Portfolio Dashboard</h3>
                        <p className="text-sm text-gray-600">Houston 100 Investment Group</p>
                      </div>
                      
                      {/* Stats Cards */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="text-xs text-gray-600">Total AUM</div>
                          <div className="text-lg font-bold text-black">$900M+</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="text-xs text-gray-600">Performance</div>
                          <div className="text-lg font-bold text-green-600">+25.3%</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="text-xs text-gray-600">Members</div>
                          <div className="text-lg font-bold text-black">800+</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="text-xs text-gray-600">Properties</div>
                          <div className="text-lg font-bold text-black">200+</div>
                        </div>
                      </div>
                      
                      {/* Chart Area */}
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="text-sm font-semibold text-black mb-2">Portfolio Performance</div>
                        <div className="h-20 bg-gradient-to-r from-black to-gray-600 rounded opacity-20"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-semibold"
                >
                  🔥 Live Updates
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 bg-black text-white px-3 py-2 rounded-lg text-sm font-semibold"
                >
                  ⚡ Real-time Sync
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {appStats.map((stat, index) => (
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

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Executive Mobile Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature designed specifically for C-suite executives who need 
              instant access to investment intelligence while on the go.
            </p>
          </motion.div>

          {/* Feature Selector */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {Object.entries(features).map(([key, feature]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFeature(key)}
                className={`p-6 rounded-xl font-semibold transition-all duration-300 text-left ${
                  activeFeature === key
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:shadow-md border border-gray-200'
                }`}
              >
                <feature.icon className="w-8 h-8 mb-3" />
                <div className="text-lg font-bold mb-2">{feature.title}</div>
                <div className="text-sm opacity-90">{feature.description}</div>
              </motion.button>
            ))}
          </div>

          {/* Active Feature Details */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                    {activeFeature === 'dashboard' && <BarChart3 className="w-8 h-8 text-white" />}
                    {activeFeature === 'intelligence' && <Zap className="w-8 h-8 text-white" />}
                    {activeFeature === 'notifications' && <Bell className="w-8 h-8 text-white" />}
                    {activeFeature === 'security' && <Shield className="w-8 h-8 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">{features[activeFeature].title}</h3>
                    <p className="text-gray-600">{features[activeFeature].description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {features[activeFeature].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-64 h-96 bg-black rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-gray-100 rounded-2xl p-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                        {activeFeature === 'dashboard' && <BarChart3 className="w-6 h-6 text-white" />}
                        {activeFeature === 'intelligence' && <Zap className="w-6 h-6 text-white" />}
                        {activeFeature === 'notifications' && <Bell className="w-6 h-6 text-white" />}
                        {activeFeature === 'security' && <Shield className="w-6 h-6 text-white" />}
                      </div>
                      <h4 className="font-bold text-black mb-2">{features[activeFeature].title}</h4>
                      <div className="space-y-2">
                        {features[activeFeature].benefits.slice(0, 2).map((benefit, index) => (
                          <div key={index} className="text-xs text-gray-600 p-2 bg-white rounded">
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Screens Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Designed for Executives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every screen optimized for quick decision-making and executive-level insights. 
              Access your investment intelligence in seconds, not minutes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {mobileScreens.map((screen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-48 h-80 bg-black rounded-3xl p-2 mx-auto mb-6 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl p-4 overflow-hidden">
                    <div className="text-center">
                      <div className="text-lg font-bold text-black mb-2">{screen.title}</div>
                      <div className="text-sm text-gray-600 mb-4">{screen.description}</div>
                      <div className="space-y-2">
                        {screen.metrics.map((metric, i) => (
                          <div key={i} className="bg-gray-100 p-2 rounded text-xs font-semibold text-black">
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{screen.title}</h3>
                <p className="text-gray-600">{screen.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Enterprise-Grade Mobile Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with the same security and reliability standards as our desktop platform. 
              Your investment data is always protected and synchronized.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Bank-Grade Security',
                features: [
                  'Face ID / Touch ID authentication',
                  '256-bit AES encryption',
                  'Remote device management',
                  'Secure data transmission'
                ]
              },
              {
                icon: Zap,
                title: 'Lightning Performance',
                features: [
                  'Sub-200ms response times',
                  'Offline data access',
                  'Real-time synchronization',
                  'Optimized for mobile networks'
                ]
              },
              {
                icon: Globe,
                title: 'Global Accessibility',
                features: [
                  'Works anywhere in the world',
                  'Multi-language support',
                  'Timezone awareness',
                  'International compliance'
                ]
              },
              {
                icon: Bell,
                title: 'Smart Notifications',
                features: [
                  'Priority-based alerts',
                  'Customizable notification rules',
                  'Do not disturb modes',
                  'Executive escalation paths'
                ]
              },
              {
                icon: RefreshCw,
                title: 'Real-Time Sync',
                features: [
                  'Instant data updates',
                  'Cross-platform synchronization',
                  'Conflict resolution',
                  'Offline queue management'
                ]
              },
              {
                icon: Settings,
                title: 'Customizable Interface',
                features: [
                  'Personalized dashboards',
                  'Custom metric selection',
                  'Role-based views',
                  'Executive preferences'
                ]
              }
            ].map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
              >
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                  <spec.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{spec.title}</h3>
                <div className="space-y-3">
                  {spec.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-black flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Executive Reviews
            </h2>
            <p className="text-xl text-gray-600">
              C-suite leaders share their mobile F.A.I.T.H. Platform experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Having real-time access to our $900M portfolio while traveling has transformed how I make investment decisions. The mobile app is as powerful as the desktop version.",
                author: "Effram Davis",
                title: "CEO, Houston 100",
                rating: 5,
                avatar: "ED"
              },
              {
                quote: "The mobile property evaluation tool saved me 3 hours during a site visit last week. AI analysis in 30 seconds that would have taken our team half a day.",
                author: "Quintin Ward", 
                title: "COO, Houston 100",
                rating: 5,
                avatar: "QW"
              },
              {
                quote: "Security is paramount for our mobile access. Face ID authentication and real-time encryption give me confidence accessing sensitive data anywhere.",
                author: "William Johnson",
                title: "CTO, Houston 100",
                rating: 5,
                avatar: "WJ"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-black">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-800 to-gray-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Take F.A.I.T.H. Platform Anywhere
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Download the mobile app and access your investment intelligence 
              from anywhere in the world. Available free for Enterprise clients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download for iOS
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download for Android
              </motion.button>
            </div>
            
            <div className="text-gray-300">
              <p>📱 Requires F.A.I.T.H. Platform Enterprise license</p>
              <p>📞 Mobile Support: +1-713-FAITH-AI (324-8424)</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
