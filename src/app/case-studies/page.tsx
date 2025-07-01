'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users, 
  Building2, 
  Award, 
  Target, 
  BarChart3,
  PieChart,
  ArrowRight,
  Quote,
  CheckCircle,
  Calendar,
  MapPin,
  Briefcase,
  Star,
  Download,
  Play,
  Eye,
  Zap,
  Shield,
  Globe,
  Activity
} from 'lucide-react';

export default function CaseStudiesPage() {
  const [selectedCase, setSelectedCase] = useState('houston-100');
  const [activeMetric, setActiveMetric] = useState('performance');

  const caseStudies = {
    'houston-100': {
      title: 'Houston 100 Investment Group',
      subtitle: 'Internal Operations - Proof of Concept',
      industry: 'Faith-Based Investment Management',
      aum: '$900M+',
      members: '800+',
      timeline: '18 months',
      location: 'Houston, Texas',
      challenge: 'Houston 100 needed to scale from manual investment processes to AI-powered operations while maintaining their faith-based investment principles and member-focused approach.',
      solution: 'Complete F.A.I.T.H. Platform implementation with all 5 AI components, comprehensive member management, and property portfolio optimization.',
      results: {
        performance: {
          metric: '+25.3%',
          description: 'Portfolio performance improvement',
          details: 'AI-driven portfolio optimization resulted in 25.3% performance improvement over 18-month period, outperforming benchmarks by 8.7%'
        },
        efficiency: {
          metric: '68%',
          description: 'Faster analysis and decision-making',
          details: 'Investment analysis time reduced from 12 hours to 4 hours per opportunity, enabling 3x more deal evaluation capacity'
        },
        cost: {
          metric: '$500K+',
          description: 'Annual cost savings',
          details: 'Property management fee retention and operational efficiency gains generating $500K+ in annual savings'
        },
        growth: {
          metric: '$400M',
          description: 'AUM growth acceleration',
          details: 'Platform capabilities enabled rapid scaling from $500M to $900M AUM with same operational team'
        }
      },
      testimonials: [
        {
          quote: "F.A.I.T.H. Platform transformed our operations from manual to AI-powered, enabling us to scale to $900M+ AUM while maintaining the personal touch our members expect.",
          author: "Effram Davis",
          title: "CEO, Houston 100 Investment Group",
          avatar: "ED"
        },
        {
          quote: "The AI-powered property evaluation has revolutionized our real estate investments. We're making better decisions 68% faster with higher confidence levels.",
          author: "Quintin Ward",
          title: "COO, Houston 100 Investment Group", 
          avatar: "QW"
        },
        {
          quote: "The technology infrastructure is enterprise-grade. 99.9% uptime with sophisticated AI that actually delivers on its promises. This is the future of investment management.",
          author: "William Johnson",
          title: "CTO, Houston 100 Investment Group",
          avatar: "WJ"
        }
      ],
      implementation: {
        phase1: 'Platform setup and data migration (30 days)',
        phase2: 'AI training and integration testing (45 days)',
        phase3: 'Team training and full deployment (30 days)',
        phase4: 'Optimization and scaling (ongoing)'
      },
      keyFeatures: [
        'Complete F.A.I.T.H. AI Hub (all 5 components)',
        'Airtable core data platform integration',
        'Executive mobile dashboard',
        'Property management optimization',
        'Member tier management system',
        'Compliance monitoring and reporting'
      ]
    },
    'faith-capital': {
      title: 'Faith Capital Partners',
      subtitle: 'Multi-Family Office Implementation',
      industry: 'Family Office & Wealth Management',
      aum: '$1.2B',
      members: '45 families',
      timeline: '12 months',
      location: 'Dallas, Texas',
      challenge: 'Faith Capital Partners needed to provide institutional-grade investment management for 45 high-net-worth families while maintaining personalized service and faith-based investment criteria.',
      solution: 'F.A.I.T.H. Platform Professional Suite with custom family office features, white-label branding, and dedicated family relationship management tools.',
      results: {
        performance: {
          metric: '+31.7%',
          description: 'Family portfolio performance',
          details: 'Average family portfolio performance increased by 31.7% through AI-optimized asset allocation and investment selection'
        },
        efficiency: {
          metric: '75%',
          description: 'Operational efficiency gain',
          details: 'Reduced administrative overhead by 75% through automation, enabling focus on family relationships and strategic planning'
        },
        satisfaction: {
          metric: '98%',
          description: 'Family satisfaction score',
          details: 'Achieved 98% family satisfaction through personalized reporting, mobile access, and proactive communication'
        },
        growth: {
          metric: '$300M',
          description: 'New family onboarding',
          details: 'Platform capabilities enabled onboarding of $300M in new family assets through referrals and market expansion'
        }
      },
      testimonials: [
        {
          quote: "F.A.I.T.H. Platform enabled us to scale our family office operations while providing each family with institutional-grade investment management and personalized attention.",
          author: "Michael Thompson",
          title: "Managing Partner, Faith Capital Partners",
          avatar: "MT"
        }
      ],
      implementation: {
        phase1: 'Family data migration and privacy setup (45 days)',
        phase2: 'White-label customization and testing (30 days)',
        phase3: 'Family onboarding and training (60 days)',
        phase4: 'Performance optimization (ongoing)'
      },
      keyFeatures: [
        'White-label platform with custom branding',
        'Family-specific portfolio management',
        'Private family reporting dashboards',
        'Faith-based investment screening',
        'Mobile family portal access',
        'Dedicated family relationship tools'
      ]
    },
    'kingdom-ventures': {
      title: 'Kingdom Ventures Fund',
      subtitle: 'Institutional Investment Fund',
      industry: 'Institutional Asset Management',
      aum: '$2.8B',
      members: '150+ institutions',
      timeline: '24 months',
      location: 'Atlanta, Georgia',
      challenge: 'Kingdom Ventures needed to manage $2.8B across multiple investment strategies while ensuring Kingdom alignment and providing institutional-grade reporting to 150+ member institutions.',
      solution: 'F.A.I.T.H. Platform Enterprise Complete with custom institutional features, multi-strategy portfolio management, and comprehensive compliance monitoring.',
      results: {
        performance: {
          metric: '+22.8%',
          description: 'Institutional fund performance',
          details: 'Achieved 22.8% annual returns through AI-optimized multi-strategy approach, ranking in top 5% of institutional funds'
        },
        compliance: {
          metric: '100%',
          description: 'Regulatory compliance score',
          details: 'Maintained 100% compliance with SEC, FINRA, and institutional requirements through automated monitoring and reporting'
        },
        efficiency: {
          metric: '80%',
          description: 'Operational cost reduction',
          details: 'Reduced operational costs by 80% through AI automation while increasing fund capacity and member services'
        },
        retention: {
          metric: '99.2%',
          description: 'Institutional member retention',
          details: 'Achieved 99.2% institutional member retention through superior performance and transparent reporting'
        }
      },
      testimonials: [
        {
          quote: "F.A.I.T.H. Platform enabled us to manage $2.8B with institutional precision while maintaining our Kingdom mission. The AI capabilities are truly transformative.",
          author: "Dr. Sarah Rodriguez",
          title: "Chief Investment Officer, Kingdom Ventures Fund",
          avatar: "SR"
        }
      ],
      implementation: {
        phase1: 'Institutional data architecture setup (60 days)',
        phase2: 'Multi-strategy AI training and testing (90 days)',
        phase3: 'Institutional member onboarding (120 days)',
        phase4: 'Scale optimization and expansion (ongoing)'
      },
      keyFeatures: [
        'Multi-strategy portfolio management',
        'Institutional reporting and compliance',
        'Kingdom alignment verification',
        'Advanced risk management tools',
        'Member institution portal',
        'Regulatory reporting automation'
      ]
    }
  };

  const industryMetrics = [
    {
      metric: '$4.1B+',
      label: 'Total AUM Managed',
      description: 'Cumulative assets under management across F.A.I.T.H. Platform implementations',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      metric: '995+',
      label: 'Total Members Served',
      description: 'Individual and institutional members benefiting from F.A.I.T.H. Platform intelligence',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      metric: '26.6%',
      label: 'Average Performance Boost',
      description: 'Average portfolio performance improvement across all implementations',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      metric: '74%',
      label: 'Average Efficiency Gain',
      description: 'Average operational efficiency improvement through AI automation',
      icon: Zap,
      color: 'text-orange-600'
    }
  ];

  const currentCase = caseStudies[selectedCase];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Success Stories
              <span className="block text-cyan-400">Proven Results</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              See how investment groups are transforming their operations with F.A.I.T.H. Platform. 
              Real implementations, measurable results, and quantified ROI across $4B+ in managed assets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <Download className="w-5 h-5" /> Download Case Study Report
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Results Review <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Metrics */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Platform Performance Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cumulative results across all F.A.I.T.H. Platform implementations, 
              demonstrating consistent value delivery for investment groups of all sizes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <metric.icon className={`w-12 h-12 ${metric.color} mx-auto mb-4`} />
                <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                  {metric.metric}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Selector */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(caseStudies).map(([key, study]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCase(key)}
                className={`p-6 rounded-xl font-semibold transition-all duration-300 text-left ${
                  selectedCase === key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <div className="text-lg font-bold">{study.title}</div>
                <div className="text-sm opacity-90">{study.subtitle}</div>
                <div className="text-xs mt-2 opacity-75">{study.aum} AUM • {study.timeline}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Case Study Details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            key={selectedCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Case Study Header */}
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{currentCase.title}</h2>
                    <p className="text-lg text-gray-600 mb-4">{currentCase.subtitle}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {currentCase.industry}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {currentCase.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {currentCase.timeline}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Challenge</h3>
                  <p className="text-gray-700 leading-relaxed">{currentCase.challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Solution</h3>
                  <p className="text-gray-700 leading-relaxed">{currentCase.solution}</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Key Statistics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">{currentCase.aum}</div>
                    <div className="text-sm text-gray-600">Assets Under Management</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-1">{currentCase.members}</div>
                    <div className="text-sm text-gray-600">Members/Families Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-1">{currentCase.timeline}</div>
                    <div className="text-sm text-gray-600">Implementation Timeline</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Metrics */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Measurable Results</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(currentCase.results).map(([key, result]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setActiveMetric(key)}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeMetric === key
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'bg-white border-2 border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className={`text-3xl font-bold mb-2 ${
                      activeMetric === key ? 'text-white' : 'text-blue-600'
                    }`}>
                      {result.metric}
                    </div>
                    <div className={`font-semibold mb-2 ${
                      activeMetric === key ? 'text-white' : 'text-gray-900'
                    }`}>
                      {result.description}
                    </div>
                    <div className={`text-sm ${
                      activeMetric === key ? 'text-blue-100' : 'text-gray-600'
                    }`}>
                      Click for details
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Active Metric Details */}
              <motion.div
                key={activeMetric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 bg-gray-50 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {currentCase.results[activeMetric].metric}
                    </div>
                    <div className="text-gray-600">
                      {currentCase.results[activeMetric].description}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {currentCase.results[activeMetric].details}
                </p>
              </motion.div>
            </div>

            {/* Testimonials */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Client Testimonials</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentCase.testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <Quote className="w-8 h-8 text-blue-600 mb-4" />
                    <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">{testimonial.title}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Implementation Timeline */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Implementation Timeline</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(currentCase.implementation).map(([phase, description], index) => (
                  <motion.div
                    key={phase}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 capitalize">
                      {phase.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <p className="text-sm text-gray-600">{description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Features Implemented */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Features Implemented</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentCase.keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join successful investment groups already transforming their operations with F.A.I.T.H. Platform. 
              Schedule a personalized demo to see how we can replicate these results for your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Schedule Success Consultation <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <Download className="w-5 h-5" /> Download Full Case Studies
              </motion.button>
            </div>
            
            <div className="mt-8 text-blue-200">
              <p>📞 Enterprise Success Team: +1-713-FAITH-AI (324-8424)</p>
              <p>📧 success@houston100investmentgroup.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
