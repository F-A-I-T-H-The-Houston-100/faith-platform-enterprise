'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Building2, 
  TrendingUp, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  DollarSign,
  BarChart3,
  Globe,
  Award,
  Clock,
  Brain,
  PieChart,
  Activity,
  Briefcase,
  Star,
  Phone,
  Mail,
  Calendar,
  Download
} from 'lucide-react';

export default function SolutionsPage() {
  const [activeSolution, setActiveSolution] = useState('investment-groups');

  const solutions = {
    'investment-groups': {
      title: 'Investment Groups ($250M+ AUM)',
      subtitle: 'Scale operations with AI-powered portfolio optimization',
      icon: Target,
      color: 'from-black to-gray-600',
      stats: {
        aum: '$900M+',
        members: '800+',
        performance: '+25.3%',
        efficiency: '68%'
      },
      challenges: [
        'Manual portfolio analysis consuming 20+ hours weekly',
        'Slow decision-making due to limited market intelligence',
        'Difficulty scaling member services with growing AUM',
        'Complex compliance monitoring across multiple investments',
        'Property management fee erosion to third-party providers'
      ],
      solutions: [
        'AI-powered portfolio optimization with 25%+ performance improvement',
        'Real-time market intelligence enabling 68% faster decisions',
        'Automated member management scaling to 1000+ members',
        'Comprehensive compliance monitoring with automated reporting',
        'Property management optimization retaining 8-12% management fees'
      ],
      features: [
        'Complete F.A.I.T.H. AI Hub (all 5 components)',
        'Executive mobile dashboard for C-suite decision making',
        'Member tier management with automated communications',
        'Property portfolio optimization and fee retention',
        'Investment committee tools and decision support',
        'Compliance monitoring and regulatory reporting'
      ],
      pricing: {
        tier: 'Professional Suite',
        price: '$650K',
        period: 'annually',
        setup: '$100K'
      },
      caseStudy: {
        company: 'Houston 100 Investment Group',
        result: '25.3% portfolio performance improvement',
        timeline: '18 months',
        aum: '$900M+'
      }
    },
    'family-offices': {
      title: 'Family Offices',
      subtitle: 'Personalized wealth management for high-net-worth families',
      icon: Users,
      color: 'from-gray-800 to-black',
      stats: {
        families: '45',
        aum: '$1.2B',
        satisfaction: '98%',
        growth: '$300M'
      },
      challenges: [
        'Providing institutional-grade service to multiple families',
        'Managing diverse investment preferences and family values',
        'Balancing personalized attention with operational efficiency',
        'Complex reporting requirements for family transparency',
        'Coordination across multiple family entities and trusts'
      ],
      solutions: [
        'White-label platform with custom family branding',
        'Family-specific portfolio management and investment screening',
        'Personalized reporting dashboards for each family',
        'Automated family communications and relationship management',
        'Multi-entity management with consolidated reporting'
      ],
      features: [
        'White-label customization with family branding',
        'Private family reporting dashboards',
        'Faith-based investment screening and alignment',
        'Family relationship management tools',
        'Multi-generational wealth planning support',
        'Privacy-first architecture with family data segregation'
      ],
      pricing: {
        tier: 'Enterprise Complete',
        price: '$1.4M',
        period: 'annually',
        setup: '$500K'
      },
      caseStudy: {
        company: 'Faith Capital Partners',
        result: '31.7% family portfolio performance increase',
        timeline: '12 months',
        aum: '$1.2B'
      }
    },
    'institutional': {
      title: 'Institutional Funds',
      subtitle: 'Enterprise-grade management for billion-dollar operations',
      icon: Building2,
      color: 'from-gray-700 to-gray-900',
      stats: {
        aum: '$2.8B',
        institutions: '150+',
        compliance: '100%',
        retention: '99.2%'
      },
      challenges: [
        'Managing multiple investment strategies across $2B+ AUM',
        'Ensuring 100% regulatory compliance across all jurisdictions',
        'Providing transparent reporting to 150+ institutional members',
        'Balancing performance optimization with risk management',
        'Maintaining Kingdom/ESG alignment at institutional scale'
      ],
      solutions: [
        'Multi-strategy portfolio management with AI optimization',
        'Automated regulatory compliance and reporting',
        'Institutional member portal with real-time transparency',
        'Advanced risk management with predictive analytics',
        'Kingdom impact measurement and ESG compliance verification'
      ],
      features: [
        'Multi-strategy portfolio management capabilities',
        'Institutional reporting and compliance automation',
        'Member institution portal with detailed analytics',
        'Advanced risk management and stress testing',
        'Regulatory reporting for SEC, FINRA, and international bodies',
        'Kingdom alignment verification and impact measurement'
      ],
      pricing: {
        tier: 'Custom Enterprise',
        price: 'Custom',
        period: 'pricing',
        setup: 'Included'
      },
      caseStudy: {
        company: 'Kingdom Ventures Fund',
        result: '22.8% annual returns, top 5% ranking',
        timeline: '24 months',
        aum: '$2.8B'
      }
    },
    'property': {
      title: 'Property Management',
      subtitle: 'AI-powered real estate optimization and fee retention',
      icon: TrendingUp,
      color: 'from-gray-600 to-black',
      stats: {
        properties: '500+',
        retention: '8-12%',
        efficiency: '75%',
        valuation: '91%'
      },
      challenges: [
        'Property management fees going to third-party providers',
        'Manual property evaluation taking 12+ hours per opportunity',
        'Limited market intelligence for investment decisions',
        'Tenant screening and risk assessment inefficiencies',
        'Compliance monitoring across multiple property types'
      ],
      solutions: [
        'Property management fee retention keeping 8-12% annually',
        'AI-powered property evaluation in under 30 seconds',
        'Comprehensive market intelligence and trend analysis',
        'Automated tenant screening with risk scoring',
        'Property compliance monitoring and regulatory alerts'
      ],
      features: [
        'Automated property valuation with 91% accuracy',
        'Market intelligence and investment opportunity identification',
        'Tenant screening and risk assessment algorithms',
        'Property management fee optimization and retention',
        'Compliance monitoring for multiple property types',
        'Performance tracking and ROI analysis'
      ],
      pricing: {
        tier: 'Professional Suite',
        price: '$650K',
        period: 'annually',
        setup: '$100K'
      },
      caseStudy: {
        company: 'Houston 100 Property Division',
        result: '$500K+ annual fee retention',
        timeline: '12 months',
        properties: '200+ properties'
      }
    }
  };

  const currentSolution = solutions[activeSolution];

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
              F.A.I.T.H. Platform
              <span className="block text-gray-300">Solutions</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Tailored AI-powered investment intelligence for every type of organization. 
              From growing investment groups to billion-dollar institutional funds.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { metric: '$4.1B+', label: 'Total AUM Managed' },
                { metric: '995+', label: 'Members Served' },
                { metric: '26.6%', label: 'Avg Performance Boost' },
                { metric: '99.9%', label: 'Platform Uptime' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.metric}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Selector */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(solutions).map(([key, solution]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSolution(key)}
                className={`p-6 rounded-xl font-semibold transition-all duration-300 text-left ${
                  activeSolution === key
                    ? `bg-gradient-to-r ${solution.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:shadow-md border border-gray-200'
                }`}
              >
                <solution.icon className="w-8 h-8 mb-3" />
                <div className="text-lg font-bold mb-2">{solution.title}</div>
                <div className="text-sm opacity-90">{solution.subtitle}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Solution Details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            key={activeSolution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Solution Header */}
            <div className="text-center mb-16">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${currentSolution.color} flex items-center justify-center mx-auto mb-6`}>
                <currentSolution.icon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{currentSolution.title}</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">{currentSolution.subtitle}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {Object.entries(currentSolution.stats).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent mb-2">
                    {value}
                  </div>
                  <div className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </motion.div>
              ))}
            </div>

            {/* Challenges & Solutions */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Common Challenges</h3>
                <div className="space-y-4">
                  {currentSolution.challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200"
                    >
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm">!</span>
                      </div>
                      <span className="text-red-800">{challenge}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">F.A.I.T.H. Platform Solutions</h3>
                <div className="space-y-4">
                  {currentSolution.solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200"
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-green-800">{solution}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Platform Features</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentSolution.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Pricing & Case Study */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Pricing */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment & Pricing</h3>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Recommended Tier</div>
                  <div className="text-xl font-bold text-gray-900">{currentSolution.pricing.tier}</div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">{currentSolution.pricing.price}</span>
                    <span className="text-gray-600">/{currentSolution.pricing.period}</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Setup: {currentSolution.pricing.setup}
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">Implementation included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">Training & onboarding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">Ongoing support included</span>
                  </div>
                </div>
                
                <button className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
                  Get Custom Quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              {/* Case Study */}
              <div className={`bg-gradient-to-br ${currentSolution.color} text-white rounded-2xl p-8`}>
                <h3 className="text-2xl font-bold mb-6">Success Story</h3>
                
                <div className="mb-6">
                  <div className="text-lg font-semibold mb-2">{currentSolution.caseStudy.company}</div>
                  <div className="text-sm opacity-90">Implementation Timeline: {currentSolution.caseStudy.timeline}</div>
                </div>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold mb-2">{currentSolution.caseStudy.result}</div>
                  <div className="text-sm opacity-90">Key Achievement</div>
                </div>
                
                <div className="mb-8">
                  <div className="text-xl font-semibold mb-1">{currentSolution.caseStudy.aum}</div>
                  <div className="text-sm opacity-90">Assets Under Management</div>
                </div>
                
                <button className="w-full bg-white text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                  <Award className="w-4 h-4" />
                  View Full Case Study
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-800 to-gray-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Schedule a personalized consultation to see how F.A.I.T.H. Platform 
              can be tailored to your organization's specific needs and goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </button>
              
              <button className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                <Download className="w-5 h-5" />
                Download Solutions Guide
              </button>
            </div>
            
            <div className="mt-8 text-gray-300">
              <p>📞 Solutions Hotline: +1-713-FAITH-AI (324-8424)</p>
              <p>📧 solutions@houston100investmentgroup.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
