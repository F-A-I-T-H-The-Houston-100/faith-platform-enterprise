'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Phone, 
  Mail,
  Building2,
  Calculator,
  FileText,
  Award,
  Zap,
  Brain,
  BarChart3,
  Target,
  Users,
  Shield,
  Globe,
  Download,
  Play,
  Calendar
} from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      label: 'Platform',
      href: '/platform',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'F.A.I.T.H. AI Hub',
          description: 'Complete AI intelligence system',
          href: '/platform#ai-hub',
          icon: Brain,
          highlight: 'Revolutionary 5-Column AI'
        },
        {
          title: 'Enterprise Features',
          description: 'Institutional-grade capabilities',
          href: '/platform#enterprise',
          icon: Building2,
          highlight: '99.9% Uptime SLA'
        },
        {
          title: 'Integrations',
          description: 'Connect with existing tools',
          href: '/platform#integrations',
          icon: Globe,
          highlight: '5+ Enterprise Integrations'
        },
        {
          title: 'Mobile & API',
          description: 'Executive mobile access',
          href: '/platform#mobile',
          icon: BarChart3,
          highlight: 'C-Suite Intelligence'
        }
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'Investment Groups',
          description: 'For $250M+ AUM operations',
          href: '/solutions/investment-groups',
          icon: Target,
          highlight: '$900M+ Proven Scale'
        },
        {
          title: 'Family Offices',
          description: 'Multi-family wealth management',
          href: '/solutions/family-offices',
          icon: Users,
          highlight: '45+ Families Served'
        },
        {
          title: 'Institutional Funds',
          description: 'Enterprise asset management',
          href: '/solutions/institutional',
          icon: Shield,
          highlight: '$2.8B+ Fund Management'
        },
        {
          title: 'Property Management',
          description: 'Real estate optimization',
          href: '/solutions/property',
          icon: Building2,
          highlight: '8-12% Fee Retention'
        }
      ]
    },
    {
      label: 'Pricing',
      href: '/pricing',
      hasDropdown: false
    },
    {
      label: 'Case Studies',
      href: '/case-studies',
      hasDropdown: false
    },
    {
      label: 'Resources',
      href: '/resources',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'ROI Calculator',
          description: 'Calculate your platform value',
          href: '/roi-calculator',
          icon: Calculator,
          highlight: 'See 25%+ ROI Potential'
        },
        {
          title: 'Documentation',
          description: 'Technical guides and APIs',
          href: '/docs',
          icon: FileText,
          highlight: 'Complete API Docs'
        },
        {
          title: 'Success Stories',
          description: 'Client testimonials and results',
          href: '/case-studies',
          icon: Award,
          highlight: '$4.1B+ AUM Managed'
        },
        {
          title: 'Demo Videos',
          description: 'Platform demonstrations',
          href: '/demos',
          icon: Play,
          highlight: 'Live Platform Tours'
        }
      ]
    }
  ];

  const isActiveRoute = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: '#000000' }}>
                    F.A.I.T.H. Platform
                  </div>
                  <div className="text-xs font-medium" style={{ color: '#747474' }}>
                    by Houston 100
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      isActiveRoute(item.href)
                        ? 'text-white bg-black'
                        : 'hover:bg-gray-100'
                    }`}
                    style={{ 
                      color: isActiveRoute(item.href) ? '#ffffff' : '#000000' 
                    }}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 p-6 z-50"
                      >
                        <div className="space-y-4">
                          {item.dropdownItems?.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              href={dropdownItem.href}
                              className="group flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
                            >
                              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                                <dropdownItem.icon className="w-5 h-5" />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-black group-hover:text-black">
                                  {dropdownItem.title}
                                </div>
                                <div className="text-sm" style={{ color: '#747474' }}>
                                  {dropdownItem.description}
                                </div>
                                <div className="text-xs text-green-600 font-medium mt-1">
                                  {dropdownItem.highlight}
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/roi-calculator"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold border-2 transition-all duration-300 hover:bg-black hover:text-white"
                style={{ 
                  borderColor: '#000000',
                  color: '#000000'
                }}
              >
                <Calculator className="w-4 h-4" />
                ROI Calculator
              </Link>
              
              <Link
                href="/demo-request"
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90 shadow-lg"
                style={{ backgroundColor: '#000000' }}
              >
                <Calendar className="w-4 h-4" />
                Schedule Demo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg"
              style={{ color: '#000000' }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-80 h-full bg-white shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-black to-gray-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">F</span>
                    </div>
                    <div>
                      <div className="font-bold" style={{ color: '#000000' }}>F.A.I.T.H.</div>
                      <div className="text-xs" style={{ color: '#747474' }}>Houston 100</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                  >
                    <X className="w-5 h-5" style={{ color: '#000000' }} />
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between p-3 rounded-lg font-semibold transition-all duration-300 ${
                          isActiveRoute(item.href)
                            ? 'text-white'
                            : 'hover:bg-gray-100'
                        }`}
                        style={{ 
                          backgroundColor: isActiveRoute(item.href) ? '#000000' : 'transparent',
                          color: isActiveRoute(item.href) ? '#ffffff' : '#000000'
                        }}
                      >
                        {item.label}
                        {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                      </Link>
                      
                      {/* Mobile Dropdown Items */}
                      {item.hasDropdown && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdownItems?.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              href={dropdownItem.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
                            >
                              <dropdownItem.icon className="w-4 h-4" style={{ color: '#747474' }} />
                              <div>
                                <div className="text-sm font-medium" style={{ color: '#000000' }}>
                                  {dropdownItem.title}
                                </div>
                                <div className="text-xs" style={{ color: '#747474' }}>
                                  {dropdownItem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="mt-8 space-y-4">
                  <Link
                    href="/roi-calculator"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg font-semibold border-2 transition-all duration-300"
                    style={{ 
                      borderColor: '#000000',
                      color: '#000000'
                    }}
                  >
                    <Calculator className="w-4 h-4" />
                    Calculate ROI
                  </Link>
                  
                  <Link
                    href="/demo-request"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300"
                    style={{ backgroundColor: '#000000' }}
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule Demo
                  </Link>
                </div>

                {/* Contact Information */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold mb-4" style={{ color: '#000000' }}>
                    Enterprise Contact
                  </h4>
                  <div className="space-y-3">
                    
                      href="tel:+17132348424"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    >
                      <Phone className="w-4 h-4" style={{ color: '#747474' }} />
                      <span style={{ color: '#000000' }}>+1-713-FAITH-AI</span>
                    </a>
                    
                      href="mailto:enterprise@houston100investmentgroup.com"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" style={{ color: '#747474' }} />
                      <span style={{ color: '#000000' }}>enterprise@houston100...</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Banner (Optional) */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-40 text-white text-center py-2 text-sm font-medium"
        style={{ backgroundColor: '#000000' }}
      >
        🚀 New: F.A.I.T.H. Platform Enterprise licensing now available - 
        <Link href="/pricing" className="underline hover:no-underline ml-1">
          View pricing tiers →
        </Link>
      </motion.div>
    </>
  );
}
