'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  Crown, 
  Zap, 
  Shield, 
  Users, 
  Building2, 
  Globe, 
  Clock, 
  ArrowRight, 
  Phone, 
  Mail,
  Calculator,
  Download,
  Sparkles,
  Target,
  TrendingUp,
  Award,
  Briefcase,
  Settings,
  Code,
  Headphones,
  Lock
} from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [showCustomQuote, setShowCustomQuote] = useState(false);

  const pricingTiers = [
    {
      id: 'growth',
      name: 'Growth Package',
      subtitle: 'Perfect for emerging investment groups',
      monthlyPrice: 35000,
      annualPrice: 300000,
      annualSavings: 120000,
      setupFee: 50000,
      description: 'Essential F.A.I.T.H. Platform capabilities for growing operations',
      maxAUM: '< $250M AUM',
      popular: false,
      features: {
        included: [
          'Choose 2 AI components (F.A.I.T.H.)',
          'Core member management platform',
          '10K+ API requests per hour',
          'Standard integration support',
          'Email support (<24hr response)',
          'Basic compliance features',
          'Mobile executive dashboard',
          'Standard security protocols',
          'Quarterly business reviews',
          'Basic analytics and reporting'
        ],
        excluded: [
          'Complete AI Hub (all 5 components)',
          'White-label branding',
          'Custom integrations',
          'Dedicated support team',
          'Advanced compliance suite'
        ]
      },
      idealFor: [
        'Investment groups with < $250M AUM',
        'Growing operations seeking automation',
        'Organizations ready for AI adoption',
        'Groups with basic technology needs'
      ]
    },
    {
      id: 'professional',
      name: 'Professional Suite',
      subtitle: 'Comprehensive platform for established firms',
      monthlyPrice: 75000,
      annualPrice: 650000,
      annualSavings: 250000,
      setupFee: 100000,
      description: 'Advanced F.A.I.T.H. Platform with expanded AI capabilities',
      maxAUM: '$250M - $1B AUM',
      popular: true,
      features: {
        included: [
          'Choose 3 AI components + core platform',
          'Advanced member management suite',
          '50K+ API requests per hour',
          'Priority integration support',
          'Business hours support (<4hr response)',
          'Advanced compliance monitoring',
          'Full mobile app suite',
          'Enhanced security features',
          'Monthly strategy sessions',
          'Advanced analytics and insights',
          'Property management optimization',
          'Investment committee tools'
        ],
        excluded: [
          'Complete AI Hub (all 5 components)',
          'White-label branding options',
          'Custom AI model development',
          '24/7 dedicated support'
        ]
      },
      idealFor: [
        'Investment groups with $250M-$1B AUM',
        'Established firms seeking optimization',
        'Organizations with complex operations',
        'Groups requiring advanced analytics'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise Complete',
      subtitle: 'Full F.A.I.T.H. Platform for institutional operations',
      monthlyPrice: 150000,
      annualPrice: 1400000,
      annualSavings: 400000,
      setupFee: 500000,
      description: 'Complete F.A.I.T.H. AI Hub with enterprise-grade support',
      maxAUM: '$1B+ AUM',
      popular: false,
      features: {
        included: [
          'Complete F.A.I.T.H. AI Hub (all 5 components)',
          'Enterprise member management platform',
          'Unlimited API access',
          'White-label branding options',
          '24/7 dedicated support (<1hr response)',
          'Complete compliance suite',
          'Enterprise mobile applications',
          'Advanced security + SOC 2 compliance',
          'Weekly executive briefings',
          'Custom analytics and reporting',
          'Advanced property management',
          'Investment optimization engine',
          'Custom integrations included',
          'Dedicated customer success manager',
          'Priority feature development'
        ],
        excluded: []
      },
      idealFor: [
        'Investment groups with $1B+ AUM',
        'Institutional investment firms',
        'Organizations requiring full compliance',
        'Groups needing custom development'
      ]
    }
  ];

  const enterpriseAddOns = [
    {
      name: 'White-Label Licensing',
      description: 'Complete platform rebranding with your company identity',
      price: 'Starting at $200K annually',
      features: [
        'Custom branding and domain',
        'Your logo and color scheme',
        'Custom mobile app branding',
        'Private cloud deployment',
        'Revenue sharing opportunities'
      ]
    },
    {
      name: 'Custom AI Development',
      description: 'Tailored AI models for your specific investment strategies',
      price: 'Starting at $300K per model',
      features: [
        'Custom AI model development',
        'Proprietary algorithm creation',
        'Industry-specific training data',
        'Ongoing model optimization',
        'Intellectual property rights'
      ]
    },
    {
      name: 'Dedicated Infrastructure',
      description: 'Private cloud deployment with dedicated resources',
      price: 'Starting at $150K annually',
      features: [
        'Private cloud environment',
        'Dedicated server resources',
        'Custom security protocols',
        'Geographic data residency',
        'Enhanced performance SLA'
      ]
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

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
              Enterprise Licensing
              <span className="block text-cyan-400">Transparent Pricing</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Institutional-grade F.A.I.T.H. Platform licensing for investment groups 
              managing $250M to $3B+ AUM. Choose the tier that matches your operations scale.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`${billingCycle === 'monthly' ? 'text-white' : 'text-blue-300'}`}>
                Monthly
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setBillingCycle(billingCycle === 'annual' ? 'monthly' : 'annual')}
                className="relative w-16 h-8 bg-blue-600 rounded-full p-1 transition-all duration-300"
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-0'
                }`} />
              </motion.button>
              <span className={`${billingCycle === 'annual' ? 'text-white' : 'text-blue-300'}`}>
                Annual
              </span>
              {billingCycle === 'annual' && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save up to $400K
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onHoverStart={() => setSelectedTier(tier.id)}
                onHoverEnd={() => setSelectedTier(null)}
                className={`relative bg-white rounded-3xl shadow-xl transition-all duration-300 ${
                  tier.popular 
                    ? 'border-4 border-blue-500 transform scale-105' 
                    : selectedTier === tier.id
                    ? 'transform scale-105 shadow-2xl'
                    : 'border border-gray-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {tier.id === 'growth' && <Zap className="w-6 h-6 text-green-500" />}
                      {tier.id === 'professional' && <Target className="w-6 h-6 text-blue-500" />}
                      {tier.id === 'enterprise' && <Crown className="w-6 h-6 text-purple-500" />}
                      <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{tier.subtitle}</p>
                    <div className="text-sm text-blue-600 font-semibold">{tier.maxAUM}</div>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-gray-900">
                        {formatPrice(billingCycle === 'annual' ? tier.annualPrice : tier.monthlyPrice)}
                      </span>
                      <span className="text-gray-600">
                        /{billingCycle === 'annual' ? 'year' : 'month'}
                      </span>
                    </div>
                    
                    {billingCycle === 'annual' && tier.annualSavings > 0 && (
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">
                        Save {formatPrice(tier.annualSavings)} annually
                      </div>
                    )}
                    
                    <div className="text-sm text-gray-600">
                      Setup fee: {formatPrice(tier.setupFee)}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                    <div className="space-y-3">
                      {tier.features.included.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {tier.features.excluded.length > 0 && (
                      <div className="mt-6">
                        <h5 className="font-medium text-gray-600 mb-3">Not included:</h5>
                        <div className="space-y-2">
                          {tier.features.excluded.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <X className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-500 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Ideal For */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Ideal For:</h4>
                    <div className="space-y-2">
                      {tier.idealFor.map((item, i) => (
                        <div key={i} className="text-sm text-gray-600">• {item}</div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900 hover:shadow-md'
                    }`}
                  >
                    {tier.id === 'enterprise' ? 'Contact Enterprise Sales' : 'Get Started'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Add-Ons */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Enterprise Add-Ons
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your F.A.I.T.H. Platform with additional enterprise capabilities 
              and customization options for your specific requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {enterpriseAddOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{addon.name}</h3>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-blue-600 mb-6">{addon.price}</div>
                
                <div className="space-y-3">
                  {addon.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Enterprise Solutions */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Custom Enterprise Solutions
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Need something beyond our standard tiers? We create custom F.A.I.T.H. Platform 
                implementations for unique enterprise requirements and strategic partnerships.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Building2, title: 'Multi-Tenant Architecture', desc: 'Serve multiple investment groups' },
                  { icon: Globe, title: 'Global Deployment', desc: 'Multi-region data residency' },
                  { icon: Code, title: 'Custom Development', desc: 'Proprietary features and AI models' },
                  { icon: Briefcase, title: 'Revenue Sharing', desc: 'Partner licensing opportunities' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{item.title}</div>
                      <div className="text-sm text-blue-200">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCustomQuote(true)}
                className="flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Request Custom Quote <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Custom Enterprise Features</h3>
              <div className="space-y-4">
                {[
                  'Private cloud deployment with dedicated infrastructure',
                  'Custom AI model development for specific investment strategies',
                  'White-label platform with complete rebranding options',
                  'Multi-tenant architecture for serving multiple clients',
                  'Custom integrations with proprietary systems',
                  'Dedicated development team and priority support',
                  'Revenue sharing and reseller partnership programs',
                  'Global deployment with data residency compliance'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-blue-600/30 rounded-lg border border-blue-500/50">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">$2M+</div>
                  <div className="text-blue-200">Starting investment for custom solutions</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation & Support */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Implementation & Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional implementation and ongoing support ensuring your success 
              with F.A.I.T.H. Platform from day one through scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: 'Implementation Timeline',
                items: [
                  'Growth: 30-45 days',
                  'Professional: 45-60 days', 
                  'Enterprise: 60-90 days',
                  'Custom: 90-180 days'
                ]
              },
              {
                icon: Headphones,
                title: 'Support Levels',
                items: [
                  'Growth: Email (<24hr)',
                  'Professional: Business hours (<4hr)',
                  'Enterprise: 24/7 (<1hr)',
                  'Custom: Dedicated team'
                ]
              },
              {
                icon: Settings,
                title: 'Training & Onboarding',
                items: [
                  'Executive training sessions',
                  'User onboarding program',
                  'Technical team training',
                  'Ongoing education resources'
                ]
              },
              {
                icon: Shield,
                title: 'Compliance & Security',
                items: [
                  'SOC 2 Type II compliance',
                  'Regular security audits',
                  'Compliance documentation',
                  'Regulatory reporting support'
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.items.map((item, i) => (
                    <div key={i} className="text-sm text-gray-600">{item}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Next Steps */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Transform your investment operations with F.A.I.T.H. Platform. 
              Our enterprise team is ready to discuss your specific requirements and create a custom solution.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Enterprise Sales</h3>
                <p className="text-blue-200 mb-4">Speak directly with our enterprise team</p>
                <div className="text-white font-semibold">+1-713-FAITH-AI</div>
                <div className="text-white font-semibold">(324-8424)</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Enterprise Team</h3>
                <p className="text-blue-200 mb-4">Get detailed information and proposals</p>
                <div className="text-white font-semibold">enterprise@</div>
                <div className="text-white font-semibold">houston100investmentgroup.com</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Calculate Your ROI</h3>
                <p className="text-blue-200 mb-4">See the financial impact for your AUM</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-green-400 font-semibold hover:text-green-300 transition-colors"
                >
                  Launch Calculator →
                </motion.button>
              </div>
            </div>
            
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
                <Download className="w-5 h-5" /> Download Enterprise Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
