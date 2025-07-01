'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Clock, 
  Users, 
  Settings, 
  Zap, 
  Shield, 
  TrendingUp,
  ArrowRight,
  Calendar,
  FileText,
  Download,
  Play,
  Award,
  Target,
  Building2,
  Globe,
  BarChart3,
  Phone,
  Mail,
  Briefcase,
  Database,
  Cpu,
  Network,
  Lock,
  Gauge,
  Activity,
  BookOpen,
  GraduationCap,
  Headphones,
  Star,
  AlertCircle,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

export default function OnboardingGuide() {
  const [activePhase, setActivePhase] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);

  const onboardingPhases = [
    {
      phase: 1,
      title: 'Discovery & Planning',
      duration: '2-3 weeks',
      description: 'Understanding your organization, current systems, and implementation requirements',
      icon: Target,
      color: 'from-black to-gray-600',
      tasks: [
        {
          title: 'Initial Consultation',
          duration: '2 hours',
          description: 'Executive briefing on F.A.I.T.H. Platform capabilities and your specific needs',
          deliverables: ['Requirements analysis', 'ROI projection', 'Implementation timeline']
        },
        {
          title: 'Technical Assessment',
          duration: '1 week',
          description: 'Review of current technology stack and integration requirements',
          deliverables: ['Systems audit report', 'Integration roadmap', 'Security assessment']
        },
        {
          title: 'Team Alignment',
          duration: '1 week',
          description: 'Stakeholder workshops and change management planning',
          deliverables: ['Implementation team structure', 'Training plan', 'Communication strategy']
        }
      ],
      teamRequired: [
        'C-suite executive sponsor',
        'IT/Technology leader',
        'Operations manager',
        'Investment team lead'
      ],
      successMetrics: [
        'Clear implementation roadmap approved',
        'Technical requirements documented',
        'Team roles and responsibilities defined',
        'Go-live date confirmed'
      ]
    },
    {
      phase: 2,
      title: 'Platform Setup & Configuration',
      duration: '3-4 weeks',
      description: 'Technical implementation of F.A.I.T.H. Platform with your data and integrations',
      icon: Settings,
      color: 'from-gray-800 to-black',
      tasks: [
        {
          title: 'Infrastructure Deployment',
          duration: '1 week',
          description: 'Cloud infrastructure setup and security configuration',
          deliverables: ['Production environment', 'Security protocols', 'Access controls']
        },
        {
          title: 'Data Migration',
          duration: '2 weeks',
          description: 'Secure transfer of member, property, and investment data',
          deliverables: ['Data validation reports', 'Migration completion', 'Backup verification']
        },
        {
          title: 'Integration Testing',
          duration: '1 week',
          description: 'Testing all integrations with existing systems (Airtable, etc.)',
          deliverables: ['Integration test results', 'Performance benchmarks', 'Error handling verification']
        }
      ],
      teamRequired: [
        'Houston 100 technical team',
        'Your IT administrator',
        'Data migration specialist',
        'Security compliance officer'
      ],
      successMetrics: [
        'All data successfully migrated',
        'Integrations functioning properly',
        'Security protocols implemented',
        'Performance targets met'
      ]
    },
    {
      phase: 3,
      title: 'AI Training & Optimization',
      duration: '2-3 weeks',
      description: 'Customizing AI models with your investment strategies and data patterns',
      icon: Zap,
      color: 'from-gray-700 to-gray-900',
      tasks: [
        {
          title: 'AI Model Customization',
          duration: '1 week',
          description: 'Training F.A.I.T.H. AI components with your historical data',
          deliverables: ['Customized AI models', 'Performance baselines', 'Accuracy reports']
        },
        {
          title: 'Investment Strategy Integration',
          duration: '1 week',
          description: 'Configuring platform to match your investment criteria and processes',
          deliverables: ['Strategy configurations', 'Decision trees', 'Approval workflows']
        },
        {
          title: 'Performance Validation',
          duration: '1 week',
          description: 'Testing AI recommendations against historical performance',
          deliverables: ['Validation reports', 'Accuracy metrics', 'Optimization recommendations']
        }
      ],
      teamRequired: [
        'Houston 100 AI specialists',
        'Your investment committee',
        'Portfolio managers',
        'Compliance team'
      ],
      successMetrics: [
        'AI models achieving target accuracy',
        'Investment strategies properly configured',
        'Historical validation successful',
        'Platform ready for live trading'
      ]
    },
    {
      phase: 4,
      title: 'Team Training & Certification',
      duration: '2 weeks',
      description: 'Comprehensive training program for all platform users',
      icon: GraduationCap,
      color: 'from-gray-600 to-black',
      tasks: [
        {
          title: 'Executive Training',
          duration: '1 day',
          description: 'C-suite dashboard training and strategic decision support',
          deliverables: ['Executive certification', 'Mobile app training', 'Reporting mastery']
        },
        {
          title: 'Operations Training',
          duration: '1 week',
          description: 'Comprehensive training for daily operational users',
          deliverables: ['User certifications', 'Process documentation', 'Quick reference guides']
        },
        {
          title: 'Advanced Features',
          duration: '1 week',
          description: 'Advanced analytics, custom reporting, and power user features',
          deliverables: ['Advanced certifications', 'Custom report training', 'API access training']
        }
      ],
      teamRequired: [
        'All platform users',
        'Houston 100 trainers',
        'Change management team',
        'Internal champions'
      ],
      successMetrics: [
        '100% user certification completion',
        'Training satisfaction >95%',
        'Platform adoption metrics met',
        'Support ticket volume minimal'
      ]
    },
    {
      phase: 5,
      title: 'Go-Live & Launch',
      duration: '1 week',
      description: 'Official platform launch with full monitoring and support',
      icon: TrendingUp,
      color: 'from-black to-gray-800',
      tasks: [
        {
          title: 'Production Launch',
          duration: '1 day',
          description: 'Cutover to live platform with full monitoring',
          deliverables: ['Live platform access', 'Monitoring dashboards', 'Support escalation']
        },
        {
          title: 'Performance Monitoring',
          duration: '1 week',
          description: 'Intensive monitoring of system performance and user adoption',
          deliverables: ['Performance reports', 'User adoption metrics', 'Issue resolution']
        },
        {
          title: 'Launch Celebration',
          duration: '1 day',
          description: 'Success celebration and future roadmap discussion',
          deliverables: ['Launch success report', 'Future enhancement roadmap', 'Partnership celebration']
        }
      ],
      teamRequired: [
        'Full implementation team',
        'Houston 100 support team',
        'Executive stakeholders',
        'All platform users'
      ],
      successMetrics: [
        'Zero critical issues on launch',
        'User adoption >90% within week 1',
        'Performance targets exceeded',
        'Stakeholder satisfaction >95%'
      ]
    },
    {
      phase: 6,
      title: 'Optimization & Growth',
      duration: 'Ongoing',
      description: 'Continuous optimization and feature enhancement for maximum ROI',
      icon: Award,
      color: 'from-gray-800 to-black',
      tasks: [
        {
          title: '30-Day Review',
          duration: '1 day',
          description: 'Comprehensive review of platform performance and optimization opportunities',
          deliverables: ['Performance analysis', 'Optimization recommendations', 'ROI measurement']
        },
        {
          title: 'Quarterly Business Reviews',
          duration: 'Ongoing',
          description: 'Regular strategic reviews and platform enhancement planning',
          deliverables: ['QBR reports', 'Enhancement roadmap', 'Success metrics tracking']
        },
        {
          title: 'Continuous Enhancement',
          duration: 'Ongoing',
          description: 'Regular platform updates, new features, and optimization',
          deliverables: ['Feature updates', 'Performance improvements', 'Best practice sharing']
        }
      ],
      teamRequired: [
        'Customer success manager',
        'Technical account manager',
        'Your platform champions',
        'Executive sponsors'
      ],
      successMetrics: [
        'ROI targets achieved and exceeded',
        'Platform utilization >95%',
        'User satisfaction maintained',
        'Continuous value delivery'
      ]
    }
  ];

  const implementationStats = [
    { metric: '90 days', label: 'Average Implementation', description: 'From contract to go-live' },
    { metric: '95%', label: 'On-Time Delivery', description: 'Projects delivered on schedule' },
    { metric: '<1%', label: 'Post-Launch Issues', description: 'Critical issues after launch' },
    { metric: '98%', label: 'Client Satisfaction', description: 'Implementation satisfaction score' }
  ];

  const supportLevels = [
    {
      title: 'Implementation Support',
      description: 'Dedicated team throughout implementation',
      features: [
        'Dedicated implementation manager',
        'Technical integration specialists',
        'Training and change management',
        'Daily progress updates'
      ]
    },
    {
      title: 'Go-Live Support',
      description: '24/7 support during launch week',
      features: [
        'Real-time monitoring and alerts',
        'Immediate issue resolution',
        'Performance optimization',
        'User adoption tracking'
      ]
    },
    {
      title: 'Ongoing Success',
      description: 'Continuous partnership for growth',
      features: [
        'Customer success manager',
        'Quarterly business reviews',
        'Platform optimization',
        'Feature enhancement planning'
      ]
    }
  ];

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
              Enterprise Onboarding
              <span className="block text-gray-300">Success Guide</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Your comprehensive roadmap to F.A.I.T.H. Platform implementation success. 
              From initial planning to optimization, we guide you every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Start Your Implementation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download Implementation Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {implementationStats.map((stat, index) => (
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

      {/* Implementation Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Implementation Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 6-phase implementation methodology ensures successful 
              F.A.I.T.H. Platform deployment with minimal disruption to your operations.
            </p>
          </motion.div>

          {/* Phase Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gray-300"></div>
            
            <div className="space-y-16">
              {onboardingPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-black rounded-full flex items-center justify-center z-10">
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 cursor-pointer"
                      onClick={() => setActivePhase(index)}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center`}>
                          <span className="text-white font-bold">P{phase.phase}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-black">{phase.title}</h3>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{phase.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{phase.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          {phase.tasks.length} key tasks
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Spacer for other side */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Active Phase Details */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${onboardingPhases[activePhase].color} flex items-center justify-center mx-auto mb-6`}>
                {activePhase === 0 && <Target className="w-10 h-10 text-white" />}
                {activePhase === 1 && <Settings className="w-10 h-10 text-white" />}
                {activePhase === 2 && <Zap className="w-10 h-10 text-white" />}
                {activePhase === 3 && <GraduationCap className="w-10 h-10 text-white" />}
                {activePhase === 4 && <TrendingUp className="w-10 h-10 text-white" />}
                {activePhase === 5 && <Award className="w-10 h-10 text-white" />}
              </div>
              <h2 className="text-3xl font-bold text-black mb-4">
                Phase {onboardingPhases[activePhase].phase}: {onboardingPhases[activePhase].title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {onboardingPhases[activePhase].description}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Tasks & Deliverables */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-8">Key Tasks & Deliverables</h3>
                <div className="space-y-6">
                  {onboardingPhases[activePhase].tasks.map((task, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold text-black">{task.title}</h4>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {task.duration}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{task.description}</p>
                      <div>
                        <div className="text-sm font-semibold text-black mb-2">Deliverables:</div>
                        <div className="space-y-1">
                          {task.deliverables.map((deliverable, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-black flex-shrink-0" />
                              <span className="text-sm text-gray-700">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team & Success Metrics */}
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-black mb-6">Team Required</h3>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="space-y-3">
                      {onboardingPhases[activePhase].teamRequired.map((role, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-black flex-shrink-0" />
                          <span className="text-gray-700">{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Success Metrics</h3>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="space-y-3">
                      {onboardingPhases[activePhase].successMetrics.map((metric, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Target className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
              Comprehensive Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class support throughout your implementation journey and beyond. 
              Our dedicated teams ensure your success every step of the way.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportLevels.map((support, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
              >
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{support.title}</h3>
                <p className="text-gray-600 mb-6">{support.description}</p>
                <div className="space-y-3">
                  {support.features.map((feature, i) => (
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

      {/* Houston 100 Success Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Houston 100 Implementation Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Houston 100 successfully implemented F.A.I.T.H. Platform 
              and achieved $900M+ AUM management with 25%+ performance improvement.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">Houston 100 Investment Group</h3>
                    <p className="text-gray-600">Internal Implementation & Scale</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-black" />
                    <span className="text-gray-700"><strong>Timeline:</strong> 105 days (15% faster than average)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-black" />
                    <span className="text-gray-700"><strong>Result:</strong> 25.3% portfolio performance improvement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-black" />
                    <span className="text-gray-700"><strong>Scale:</strong> $900M+ AUM, 800+ members managed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-black" />
                    <span className="text-gray-700"><strong>Satisfaction:</strong> 100% team adoption, zero critical issues</span>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-black pl-6 italic text-gray-700 mb-6">
                  "The implementation was flawless. Houston 100's team guided us through every phase, 
                  and we saw immediate value from day one. The platform has transformed how we manage 
                  our $900M+ portfolio."
                </blockquote>
                
                <div className="text-right">
                  <div className="font-semibold text-black">Effram Davis</div>
                  <div className="text-sm text-gray-600">CEO, Houston 100 Investment Group</div>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-black mb-6">Implementation Timeline</h4>
                  <div className="space-y-4">
                    {[
                      { phase: 'Discovery & Planning', duration: '18 days', status: 'completed' },
                      { phase: 'Platform Setup', duration: '25 days', status: 'completed' },
                      { phase: 'AI Training', duration: '20 days', status: 'completed' },
                      { phase: 'Team Training', duration: '12 days', status: 'completed' },
                      { phase: 'Go-Live', duration: '7 days', status: 'completed' },
                      { phase: 'Optimization', duration: 'Ongoing', status: 'active' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            item.status === 'completed' ? 'bg-green-500' : 'bg-black'
                          }`}></div>
                          <span className="text-gray-700">{item.phase}</span>
                        </div>
                        <span className="text-sm text-gray-600">{item.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">0</div>
                    <div className="text-sm text-gray-600">Critical Issues</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-sm text-gray-600">Team Adoption</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start CTA */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-800 to-gray-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Implementation?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join Houston 100 and other successful organizations who have transformed 
              their investment operations with F.A.I.T.H. Platform. Our proven methodology 
              ensures your success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Schedule Implementation Consultation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download Full Implementation Guide
              </motion.button>
            </div>
            
            <div className="text-gray-300">
              <p>📞 Implementation Hotline: +1-713-FAITH-AI (324-8424)</p>
              <p>📧 implementation@houston100investmentgroup.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
