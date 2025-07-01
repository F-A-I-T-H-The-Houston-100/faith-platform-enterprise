'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Youtube,
  Shield,
  Award,
  Zap,
  Users,
  Building2,
  Calculator,
  Calendar,
  FileText,
  Download,
  ExternalLink,
  CheckCircle,
  Star,
  Clock,
  Target,
  TrendingUp,
  BarChart3,
  Brain
} from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
  };

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: 'F.A.I.T.H. AI Hub', href: '/platform#ai-hub', icon: Brain },
        { label: 'Enterprise Features', href: '/platform#enterprise', icon: Building2 },
        { label: 'Integrations', href: '/platform#integrations', icon: Globe },
        { label: 'Mobile & API', href: '/platform#mobile', icon: BarChart3 },
        { label: 'Security & Compliance', href: '/platform#security', icon: Shield }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Investment Groups ($250M+)', href: '/solutions/investment-groups', icon: Target },
        { label: 'Family Offices', href: '/solutions/family-offices', icon: Users },
        { label: 'Institutional Funds', href: '/solutions/institutional', icon: Building2 },
        { label: 'Property Management', href: '/solutions/property', icon: TrendingUp },
        { label: 'White-Label Licensing', href: '/solutions/white-label', icon: Award }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'ROI Calculator', href: '/roi-calculator', icon: Calculator },
        { label: 'Case Studies', href: '/case-studies', icon: FileText },
        { label: 'API Documentation', href: '/docs/api', icon: Globe },
        { label: 'Success Stories', href: '/case-studies', icon: Star },
        { label: 'Demo Videos', href: '/demos', icon: Download }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Houston 100', href: '/about', icon: Building2 },
        { label: 'Leadership Team', href: '/about#team', icon: Users },
        { label: 'Careers', href: '/careers', icon: TrendingUp },
        { label: 'Press & Media', href: '/press', icon: FileText },
        { label: 'Partner Program', href: '/partners', icon: Award }
      ]
    }
  ];

  const trustIndicators = [
    {
      icon: Shield,
      label: 'SOC 2 Type II',
      description: 'Enterprise security compliance'
    },
    {
      icon: Award,
      label: 'ISO 27001',
      description: 'International security standards'
    },
    {
      icon: CheckCircle,
      label: '99.9% Uptime',
      description: 'Enterprise SLA guarantee'
    },
    {
      icon: Users,
      label: '$4.1B+ AUM',
      description: 'Proven platform scale'
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Newsletter Section */}
      <section className="border-b border-gray-200" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Ahead of Investment Technology
              </h3>
              <p className="text-lg mb-6" style={{ color: '#ffffff' }}>
                Get exclusive insights on AI-powered investment strategies, platform updates, 
                and success stories from Houston 100's $900M+ AUM operations.
              </p>
              <div className="flex flex-wrap gap-4 text-sm" style={{ color: '#ffffff' }}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Monthly platform insights
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Exclusive case studies
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Early access to features
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              {!isSubscribed ? (
                <>
                  <h4 className="text-xl font-bold text-white mb-6">
                    Enterprise Investment Intelligence Newsletter
                  </h4>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your business email"
                        className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        required
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="w-full bg-white text-black font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Subscribe to Enterprise Insights <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </form>
                  <p className="text-xs mt-4" style={{ color: '#ffffff' }}>
                    Join 500+ investment professionals. Unsubscribe anytime.
                  </p>
                </>
              ) : (
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                  <p style={{ color: '#ffffff' }}>
                    You'll receive our next enterprise investment intelligence update soon.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Company Information */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Link href="/" className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">F</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold" style={{ color: '#000000' }}>
                      F.A.I.T.H. Platform
                    </div>
                    <div className="text-sm font-medium" style={{ color: '#747474' }}>
                      by Houston 100 Investment Group
                    </div>
                  </div>
                </Link>
                
                <p className="mb-6 leading-relaxed" style={{ color: '#747474' }}>
                  The world's most advanced AI-powered investment intelligence system, 
                  transforming how institutional groups manage $3B+ AUM with enterprise-grade reliability.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" style={{ color: '#747474' }} />
                    <span style={{ color: '#000000' }}>Houston, Texas, United States</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" style={{ color: '#747474' }} />
                    <a 
                      href="tel:+17132348424" 
                      className="hover:underline transition-all duration-300"
                      style={{ color: '#000000' }}
                    >
                      +1-713-FAITH-AI (324-8424)
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" style={{ color: '#747474' }} />
                    <a 
                      href="mailto:enterprise@houston100investmentgroup.com" 
                      className="hover:underline transition-all duration-300"
                      style={{ color: '#000000' }}
                    >
                      enterprise@houston100investmentgroup.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h4 className="font-bold mb-6" style={{ color: '#000000' }}>
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
                      >
                        <link.icon className="w-4 h-4" style={{ color: '#747474' }} />
                        <span className="group-hover:underline" style={{ color: '#000000' }}>
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h4 className="text-lg font-bold mb-2" style={{ color: '#000000' }}>
              Enterprise-Grade Security & Compliance
            </h4>
            <p style={{ color: '#747474' }}>
              Trusted by investment groups managing $4.1B+ in assets
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200"
              >
                <indicator.icon className="w-8 h-8 mx-auto mb-3" style={{ color: '#000000' }} />
                <div className="font-semibold mb-1" style={{ color: '#000000' }}>
                  {indicator.label}
                </div>
                <div className="text-sm" style={{ color: '#747474' }}>
                  {indicator.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#000000' }}>
              Ready to Transform Your Investment Operations?
            </h3>
            <p className="text-lg mb-8" style={{ color: '#747474' }}>
              Join investment groups already achieving 25%+ performance improvements with F.A.I.T.H. Platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/demo-request"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg text-white transition-all duration-300 shadow-lg"
                  style={{ backgroundColor: '#000000' }}
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Enterprise Demo
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/roi-calculator"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all duration-300"
                  style={{ 
                    borderColor: '#000000',
                    color: '#000000'
                  }}
                >
                  <Calculator className="w-5 h-5" />
                  Calculate Your ROI
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="py-6 border-t border-gray-200" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-white">
              <span>© 2025 Houston 100 Investment Group LLC. All rights reserved.</span>
              <Link href="/privacy" className="hover:underline transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline transition-colors">
                Terms of Service
              </Link>
              <Link href="/compliance" className="hover:underline transition-colors">
                Compliance
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-white">Follow Houston 100:</span>
              <div className="flex gap-3">
                
                  href="https://linkedin.com/company/houston100investmentgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                
                  href="https://twitter.com/houston100invest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                >
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                
                  href="https://youtube.com/@houston100investmentgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                >
                  <Youtube className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
