'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  Target, 
  Shield, 
  Clock, 
  Users, 
  Building2,
  Database,
  Smartphone,
  Globe,
  CheckCircle,
  ArrowRight,
  Play,
  Eye,
  Settings,
  Lock,
  Cpu,
  LineChart,
  PieChart,
  Activity,
  Layers,
  Network,
  Server,
  Code,
  Gauge
} from 'lucide-react';

export default function PlatformPage() {
  const [activeTab, setActiveTab] = useState('ai-hub');
  const [selectedAIComponent, setSelectedAIComponent] = useState('financial');

  const aiComponents = {
    financial: {
      title: 'Financial AI Intelligence',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      description: 'Revolutionary portfolio optimization and investment scoring with 25%+ performance improvement',
      capabilities: [
        'Real-time portfolio rebalancing with AI-driven asset allocation',
        'Advanced risk assessment using 50+ market indicators',
        'Investment opportunity scoring with 94% accuracy rate',
        'Cash flow forecasting with predictive analytics',
        'ESG and Kingdom alignment verification',
        'Performance attribution analysis and optimization recommendations'
      ],
      metrics: {
        performance: '25%+ ROI Improvement',
        accuracy: '94% Prediction Accuracy',
        speed: '<5 seconds analysis',
        coverage: '$3B+ AUM Proven'
      }
    },
    analytics: {
      title: 'Analytics AI Engine',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-600',
      description: 'Advanced property evaluation and market intelligence 68% faster than manual analysis',
      capabilities: [
        'Automated property valuation with comparable market analysis',
        'Tenant screening and risk assessment algorithms',
        'Market trend analysis and opportunity identification',
        'Competitive intelligence gathering and analysis',
        'Regulatory compliance monitoring and alerts',
        'Investment thesis validation and stress testing'
      ],
      metrics: {
        performance: '68% Faster Analysis',
        accuracy: '91% Valuation Accuracy',
        speed: '<30 seconds property eval',
        coverage: '500+ Properties Analyzed'
      }
    },
    intelligence: {
      title: 'Intelligence AI Coordinator',
      icon: Brain,
      color: 'from-purple-500 to-violet-600',
      description: 'Strategic insights and member analytics with predictive member behavior modeling',
      capabilities: [
        'Member behavior prediction and churn prevention',
        'Strategic decision support with scenario modeling',
        'Compliance monitoring and regulatory reporting',
        'Performance benchmarking against industry standards',
        'Investment committee decision optimization',
        'Kingdom impact measurement and reporting'
      ],
      metrics: {
        performance: '50% Better Decisions',
        accuracy: '87% Member Predictions',
        speed: 'Real-time insights',
        coverage: '1000+ Members Analyzed'
      }
    },
    technology: {
      title: 'Technology AI Orchestrator',
      icon: Cpu,
      color: 'from-orange-500 to-red-600',
      description: 'System health monitoring and performance optimization with 99.9% uptime guarantee',
      capabilities: [
        'Automated system health monitoring and diagnostics',
        'Performance optimization and resource allocation',
        'Security threat detection and response',
        'Integration health monitoring across all platforms',
        'Predictive maintenance and issue prevention',
        'Capacity planning and scaling recommendations'
      ],
      metrics: {
        performance: '99.9% Uptime',
        accuracy: '90% Auto-Resolution',
        speed: '<1 minute response',
        coverage: '24/7 Monitoring'
      }
    },
    hub: {
      title: 'Hub AI Command Center',
      icon: Target,
      color: 'from-pink-500 to-rose-600',
      description: 'Executive intelligence synthesis and real-time decision support for C-suite leadership',
      capabilities: [
        'Executive dashboard with real-time intelligence synthesis',
        'Cross-platform data coordination and analysis',
        'Strategic recommendation engine for leadership team',
        'Communication routing and priority management',
        'Member experience optimization and personalization',
        'Kingdom mission alignment tracking and reporting'
      ],
      metrics: {
        performance: 'Real-time Intelligence',
        accuracy: '96% Executive Satisfaction',
        speed: 'Instant synthesis',
        coverage: 'Complete Platform View'
      }
    }
  };

  const integrations = [
    {
      name: 'Airtable',
      description: 'Core data platform and source of truth',
      icon: Database,
      capabilities: ['Member management', 'Portfolio tracking', 'Property management', 'Compliance monitoring'],
      status: 'Enterprise Ready'
    },
    {
      name: 'Google Sheets',
      description: 'Executive dashboards and reporting',
      icon: BarChart3,
      capabilities: ['Executive reporting', 'Financial dashboards', 'Performance tracking', 'Board presentations'],
      status: 'Enterprise Ready'
    },
    {
      name: 'Ontraport',
      description: 'Member relationship management',
      icon: Users,
      capabilities: ['CRM automation', 'Member communications', 'Tier management', 'Marketing campaigns'],
      status: 'Enterprise Ready'
    },
    {
      name: 'Beehiiv',
      description: 'Content marketing and thought leadership',
      icon: Globe,
      capabilities: ['Newsletter management', 'Content distribution', 'Subscriber analytics', 'Engagement tracking'],
      status: 'Enterprise Ready'
    },
    {
      name: 'Motion',
      description: 'AI-powered scheduling and optimization',
      icon: Clock,
      capabilities: ['Calendar optimization', 'Meeting scheduling', 'Task prioritization', 'Team coordination'],
      status: 'Enterprise Ready'
    }
  ];

  const platformFeatures = [
    {
      category: 'Enterprise Security',
      icon: Shield,
      features: [
        'SOC 2 Type II Compliance',
        'End-to-end encryption (AES-256)',
        'Multi-factor authentication',
        'Role-based access control',
        'Advanced threat detection',
        'Regular security audits'
      ]
    },
    {
      category: 'Scalability & Performance',
      icon: Zap,
      features: [
        '99.9% uptime SLA guarantee',
        'Auto-scaling infrastructure',
        'Sub-200ms API response times',
        'Multi-region deployment',
        'Load balancing and failover',
        'Real-time data processing'
      ]
    },
    {
      category: 'Mobile & Accessibility',
      icon: Smartphone,
      features: [
        'Executive mobile dashboard',
        'Tablet-optimized interface',
        'Offline data access',
        'Push notifications',
        'Biometric authentication',
        'Cross-platform sync'
      ]
    },
    {
      category: 'API & Integration',
      icon: Code,
      features: [
        'RESTful API architecture',
        'Webhook support',
        'Custom integration support',
        'SDK libraries available',
        'Third-party connectors',
        'Real-time data streaming'
      ]
    }
  ];

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
              F.A.I.T.H. Platform
              <span className="block text-cyan-400">Complete Capabilities</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Explore the world's most advanced AI-powered investment intelligence system. 
              Five AI components, complete integrations, and enterprise-grade infrastructure 
              managing $900M+ AUM with institutional reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <Play className="w-5 h-5" /> Watch Platform Demo
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Live Demo <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Navigation */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'ai-hub', label: 'F.A.I.T.H. AI Hub', icon: Brain },
              { id: 'integrations', label: 'Integrations', icon: Network },
              { id: 'enterprise', label: 'Enterprise Features', icon: Building2 },
              { id: 'mobile', label: 'Mobile & API', icon: Smartphone },
              { id: 'security', label: 'Security & Compliance', icon: Shield }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* F.A.I.T.H. AI Hub Section */}
      {activeTab === 'ai-hub' && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Revolutionary F.A.I.T.H. AI Hub
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Five AI intelligence columns working in perfect harmony to transform every aspect 
                of your investment operations with institutional-grade performance.
              </p>
            </motion.div>

            {/* AI Component Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(aiComponents).map(([key, component]) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedAIComponent(key)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    selectedAIComponent === key
                      ? `bg-gradient-to-r ${component.color} text-white shadow-lg`
                      : 'bg-white text-gray-700 hover:shadow-md border border-gray-200'
                  }`}
                >
                  <component.icon className="w-6 h-6" />
                  <span className="text-2xl font-bold">{key.charAt(0).toUpperCase()}</span>
                  <span>{component.title.split(' ')[0]}</span>
                </motion.button>
              ))}
            </div>

            {/* Selected AI Component Details */}
            <motion.div
              key={selectedAIComponent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 border"
            >
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${aiComponents[selectedAIComponent].color} flex items-center justify-center`}>
                      <aiComponents[selectedAIComponent].icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {aiComponents[selectedAIComponent].title}
                      </h3>
                      <p className="text-gray-600">
                        {aiComponents[selectedAIComponent].description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Core Capabilities</h4>
                    {aiComponents[selectedAIComponent].capabilities.map((capability, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">Performance Metrics</h4>
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(aiComponents[selectedAIComponent].metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                    <h5 className="font-semibold text-gray-900 mb-3">Houston 100 Results</h5>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <span>Portfolio Performance:</span>
                        <span className="font-semibold text-green-600">+25.3% improvement</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Analysis Speed:</span>
                        <span className="font-semibold text-blue-600">68% faster</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Decision Accuracy:</span>
                        <span className="font-semibold text-purple-600">50% improvement</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Integrations Section */}
      {activeTab === 'integrations' && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Complete Integration Ecosystem
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Seamlessly connect with your existing tools and platforms. F.A.I.T.H. Platform 
                integrates with leading business applications to enhance, not replace, your workflow.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <integration.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{integration.name}</h3>
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                        {integration.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{integration.description}</p>
                  
                  <div className="space-y-2">
                    {integration.capabilities.map((capability, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{capability}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enterprise Features Section */}
      {activeTab === 'enterprise' && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Enterprise-Grade Platform
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built for institutional investment groups managing billions in AUM. 
                Every feature designed for enterprise scale, security, and reliability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {platformFeatures.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Performance Metrics */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Proven Performance Metrics
            </h2>
            <p className="text-xl text-gray-600">
              Real results from Houston 100's $900M+ AUM operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: '25%+',
                label: 'Portfolio Performance Improvement',
                icon: TrendingUp,
                color: 'text-green-600'
              },
              {
                metric: '68%',
                label: 'Faster Analysis & Decision Making',
                icon: Clock,
                color: 'text-blue-600'
              },
              {
                metric: '99.9%',
                label: 'Platform Uptime Guarantee',
                icon: Shield,
                color: 'text-purple-600'
              },
              {
                metric: '$900M+',
                label: 'Assets Under Management',
                icon: DollarSign,
                color: 'text-yellow-600'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg"
              >
                <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.metric}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
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
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              See F.A.I.T.H. Platform in action with a personalized demonstration 
              tailored to your investment group's specific needs and AUM size.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Schedule Live Demo <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Calculate Your ROI
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
