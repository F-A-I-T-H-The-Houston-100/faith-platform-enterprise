'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown,
  Menu,
  X,
  Zap,
  Brain,
  Building2,
  DollarSign,
  Home,
  Heart,
  TrendingUp,
  Users,
  BarChart3,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Shield,
  Target,
  Calendar,
  FileText
} from 'lucide-react';

export default function DualNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enterpriseDropdownOpen, setEnterpriseDropdownOpen] = useState(false);
  const [realEstateDropdownOpen, setRealEstateDropdownOpen] = useState(false);

  const enterpriseMenuItems = [
    {
      category: 'Platform',
      items: [
        { 
          name: 'F.A.I.T.H. Platform Overview', 
          href: '/platform', 
          icon: Zap,
          description: 'AI-powered investment intelligence platform'
        },
        { 
          name: 'AI Engine Demo', 
          href: '/ai-engine', 
          icon: Brain,
          description: 'A* algorithm investment classification'
        },
        { 
          name: 'Platform Features', 
          href: '/features', 
          icon: Star,
          description: '5-component AI Hub ecosystem'
        }
      ]
    },
    {
      category: 'Solutions',
      items: [
        { 
          name: 'Enterprise Solutions', 
          href: '/solutions', 
          icon: Building2,
          description: 'For investment groups and family offices'
        },
        { 
          name: 'API Documentation', 
          href: '/api', 
          icon: FileText,
          description: 'Technical integration guides'
        },
        { 
          name: 'Compliance & Security', 
          href: '/compliance', 
          icon: Shield,
          description: 'SOC 2 Type II and regulatory compliance'
        }
      ]
    },
    {
      category: 'Business',
      items: [
        { 
          name: 'Enterprise Pricing', 
          href: '/pricing', 
          icon: DollarSign,
          description: '$300K-$1.4M annual licensing'
        },
        { 
          name: 'Technical Demos', 
          href: '/demos', 
          icon: Calendar,
          description: 'Platform demonstrations'
        },
        { 
          name: 'Enterprise Contact', 
          href: '/contact', 
          icon: Phone,
          description: 'Sales and support'
        }
      ]
    }
  ];

  const realEstateMenuItems = [
    {
      category: 'Investments',
      items: [
        { 
          name: 'Real Estate Overview', 
          href: '/real-estate', 
          icon: Home,
          description: '$45.2M portfolio with 18.5% returns'
        },
        { 
          name: 'DHAP Program', 
          href: '/real-estate/dhap', 
          icon: Heart,
          description: 'Distressed Homeowner Assistance Program'
        },
        { 
          name: 'Property Showcase', 
          href: '/real-estate/properties', 
          icon: Building2,
          description: 'View all 247 active properties'
        }
      ]
    },
    {
      category: 'Performance',
      items: [
        { 
          name: 'Portfolio Performance', 
          href: '/real-estate/portfolio', 
          icon: TrendingUp,
          description: 'Transparent performance reporting'
        },
        { 
          name: 'Investment Returns', 
          href: '/real-estate/returns', 
          icon: BarChart3,
          description: 'Detailed ROI analysis'
        },
        { 
          name: 'Market Analysis', 
          href: '/real-estate/market', 
          icon: Target,
          description: 'Houston market insights'
        }
      ]
    },
    {
      category: 'Membership',
      items: [
        { 
          name: 'Get Started', 
          href: '/real-estate/get-started', 
          icon: ArrowRight,
          description: '4-step onboarding process'
        },
        { 
          name: 'Member Portal', 
          href: '/member-portal', 
          icon: Users,
          description: 'Exclusive member resources'
        },
        { 
          name: 'Investment Contact', 
          href: '/real-estate/contact', 
          icon: Mail,
          description: 'Investment team'
        }
      ]
    }
  ];

  const DropdownMenu = ({ title, items, isOpen, setIsOpen, icon: Icon }) => (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
      >
        <Icon className="w-5 h-5" />
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50"
        >
          {items.map((category, categoryIndex) => (
            <div key={categoryIndex} className="p-4 border-b border-gray-100 last:border-b-0">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  
                    key={itemIndex}
                    href={item.href}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-black group-hover:text-gray-900 transition-colors">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                        {item.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-filter backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <a href="/" className="text-2xl font-bold text-white">
              F.A.I.T.H. Platform
            </a>
            <div className="hidden md:block w-px h-8 bg-gray-600"></div>
            <div className="hidden md:block text-gray-300 font-medium">
              Houston 100 Investment Group
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <DropdownMenu
              title="F.A.I.T.H. Platform"
              items={enterpriseMenuItems}
              isOpen={enterpriseDropdownOpen}
              setIsOpen={setEnterpriseDropdownOpen}
              icon={Zap}
            />
            
            <DropdownMenu
              title="Houston 100 Investments"
              items={realEstateMenuItems}
              isOpen={realEstateDropdownOpen}
              setIsOpen={setRealEstateDropdownOpen}
              icon={Home}
            />
            
            <a 
              href="/about" 
              className="px-4 py-2 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
              About
            </a>
            
            <div className="flex items-center gap-4 ml-4">
              <a 
                href="/real-estate/get-started" 
                className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Started
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-700 py-4"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  F.A.I.T.H. Platform
                </h3>
                <div className="pl-7 space-y-2">
                  {enterpriseMenuItems.flatMap(category => category.items).map((item, index) => (
                    
                      key={index}
                      href={item.href}
                      className="block text-gray-300 hover:text-white transition-colors py-1"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Houston 100 Investments
                </h3>
                <div className="pl-7 space-y-2">
                  {realEstateMenuItems.flatMap(category => category.items).map((item, index) => (
                    
                      key={index}
                      href={item.href}
                      className="block text-gray-300 hover:text-white transition-colors py-1"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-700">
                <a 
                  href="/about" 
                  className="block text-white font-semibold py-2"
                >
                  About
                </a>
                <a 
                  href="/real-estate/get-started" 
                  className="block bg-white text-black px-4 py-2 rounded-lg font-semibold mt-2 text-center"
                >
                  Get Started
                </a>
                <a 
                  href="/contact" 
                  className="block border-2 border-white text-white px-4 py-2 rounded-lg font-semibold mt-2 text-center"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
