'use client';

import { useState } from 'react';
import IntroScreen from '@/components/IntroScreen';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Zap, Users, CheckCircle, Star, Play } from 'lucide-react';

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <IntroScreen onComplete={() => setShowIntro(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Message */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-600/30 rounded-full text-sm font-medium border border-blue-500/50">
                  🚀 Enterprise AI Investment Intelligence
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Investment Operations
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                F.A.I.T.H. Platform is the world's first comprehensive AI-powered investment intelligence system, 
                revolutionizing how institutional groups manage $3B+ AUM with enterprise-grade reliability.
              </p>
              
              <div className="mb-8 p-6 bg-black/30 rounded-lg border border-blue-500/30">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">$900M+</div>
                    <div className="text-sm text-blue-200">AUM Managed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400">99.9%</div>
                    <div className="text-sm text-blue-200">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400">25%+</div>
                    <div className="text-sm text-blue-200">Performance Boost</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
                >
                  Schedule Enterprise Demo <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  <Play className="w-5 h-5" /> Watch Platform Demo
                </motion.button>
              </div>
            </motion.div>
            
            {/* Right Column - Platform Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-black/20 rounded-2xl p-8 border border-blue-500/30">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-blue-300">F.A.I.T.H. Platform Enterprise Dashboard</div>
                </div>
                
                {/* Mock Dashboard */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-900/50 p-4 rounded-lg">
                      <div className="text-xs text-blue-300">Portfolio Performance</div>
                      <div className="text-2xl font-bold text-green-400">+23.7%</div>
                    </div>
                    <div className="bg-purple-900/50 p-4 rounded-lg">
                      <div className="text-xs text-purple-300">AI Confidence</div>
                      <div className="text-2xl font-bold text-purple-400">94.2%</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 rounded-lg">
                    <div className="text-xs text-blue-300 mb-2">F.A.I.T.H. AI Hub Status</div>
                    <div className="grid grid-cols-5 gap-2">
                      {['F', 'A', 'I', 'T', 'H'].map((letter, i) => (
                        <div key={letter} className="text-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                            i < 4 ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                          }`}>
                            {letter}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
              >
                🔥 Live: $2.1M Optimized Today
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
              >
                ⚡ 127ms Response Time
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* F.A.I.T.H. System Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Revolutionary F.A.I.T.H. System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five AI-powered intelligence columns working in perfect harmony to transform 
              your investment operations with institutional-grade reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                letter: 'F',
                title: 'Financial AI',
                description: 'Portfolio optimization, risk assessment, and investment scoring with 25%+ performance improvement',
                icon: TrendingUp,
                color: 'from-green-500 to-emerald-600',
                stats: '25%+ ROI Boost'
              },
              {
                letter: 'A', 
                title: 'Analytics AI',
                description: 'Property evaluation, market intelligence, and competitive analysis 68% faster than manual',
                icon: Shield,
                color: 'from-blue-500 to-cyan-600',
                stats: '68% Faster Analysis'
              },
              {
                letter: 'I',
                title: 'Intelligence AI', 
                description: 'Strategic insights, member analytics, and compliance monitoring with predictive capabilities',
                icon: Zap,
                color: 'from-purple-500 to-violet-600',
                stats: '50% Better Decisions'
              },
              {
                letter: 'T',
                title: 'Technology AI',
                description: 'System health monitoring, performance optimization, and automated issue resolution',
                icon: Users,
                color: 'from-orange-500 to-red-600',
                stats: '99.9% Uptime'
              },
              {
                letter: 'H',
                title: 'Hub Command',
                description: 'Executive intelligence synthesis, coordination, and real-time decision support for C-suite',
                icon: ArrowRight,
                color: 'from-pink-500 to-rose-600',
                stats: 'Real-time Intelligence'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center group cursor-pointer"
              >
                <div className={`mx-auto mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-3xl font-bold text-white">{item.letter}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.color} text-white`}>
                  {item.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Investment Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Houston 100's proven results with $900M+ AUM management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "F.A.I.T.H. Platform transformed our operations from manual to AI-powered, enabling us to scale to $900M+ AUM while maintaining the personal touch our members expect.",
                author: "Effram Davis",
                role: "CEO, Houston 100 Investment Group",
                metric: "$900M+ AUM",
                avatar: "ED"
              },
              {
                quote: "The AI-powered property evaluation has revolutionized our real estate investments. We're making better decisions 68% faster with higher confidence levels.",
                author: "Quintin Ward", 
                role: "COO, Houston 100 Investment Group",
                metric: "68% Faster Analysis",
                avatar: "QW"
              },
              {
                quote: "The technology infrastructure is enterprise-grade. 99.9% uptime with sophisticated AI that actually delivers on its promises. This is the future of investment management.",
                author: "William Johnson",
                role: "CTO, Houston 100 Investment Group", 
                metric: "99.9% Uptime",
                avatar: "WJ"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm font-semibold text-blue-600">{testimonial.metric}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Pricing */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Enterprise Licensing
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing for institutional investment groups
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Professional Suite",
                price: "$650K",
                period: "annually",
                description: "Perfect for growing investment groups",
                features: [
                  "Choose 3 AI components + core platform",
                  "50K+ API requests/hour",
                  "Business hours support (<4hr response)",
                  "Standard integrations included",
                  "Compliance assistance"
                ],
                cta: "Start Professional",
                popular: false
              },
              {
                name: "Enterprise Complete",
                price: "$1.4M",
                period: "annually", 
                description: "Full F.A.I.T.H. Platform for institutional operations",
                features: [
                  "Complete F.A.I.T.H. AI Hub (all 5 columns)",
                  "Unlimited API access & white-label branding",
                  "24/7 dedicated support (<1hr response)",
                  "Custom integrations & development",
                  "SOC 2 Type II compliance support"
                ],
                cta: "Contact Enterprise Sales",
                popular: true
              },
              {
                name: "Custom Enterprise",
                price: "Custom",
                period: "pricing",
                description: "Tailored solutions for unique requirements",
                features: [
                  "Custom AI model development",
                  "Private cloud deployment",
                  "Dedicated technical team",
                  "Revenue sharing opportunities",
                  "White-label licensing rights"
                ],
                cta: "Discuss Requirements",
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border-2 ${
                  plan.popular 
                    ? 'border-blue-500 bg-white shadow-xl' 
                    : 'border-gray-200 bg-white hover:border-blue-300'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Investment Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the revolution in AI-powered investment intelligence. Schedule your enterprise demo today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Schedule Enterprise Demo <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Contact Enterprise Sales
              </motion.button>
            </div>
            
            <div className="mt-8 text-blue-200">
              <p>📞 Enterprise Hotline: +1-713-FAITH-AI (324-8424)</p>
              <p>📧 enterprise@houston100investmentgroup.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
