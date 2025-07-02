'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  DollarSign,
  FileText,
  Users,
  Shield,
  Calendar,
  Phone,
  Mail,
  Download,
  Building2,
  Heart,
  Target,
  Clock,
  Award,
  Star,
  TrendingUp,
  BarChart3,
  User,
  CreditCard,
  Home,
  Handshake,
  AlertCircle,
  Info
} from 'lucide-react';

export default function GetStartedPage() {
  const [selectedTier, setSelectedTier] = useState('foundation');
  const [currentStep, setCurrentStep] = useState(0);

  const membershipTiers = [
    {
      id: 'pillar',
      name: 'Pillar Member',
      minInvestment: '$100,000',
      features: [
        'DHAP investment opportunities',
        'Quarterly performance reports',
        'Basic portfolio diversification',
        'Email support',
        'Annual member meetings'
      ],
      expectedReturns: '15-18%',
      timeframe: '3-5 years',
      description: 'Perfect for first-time faith-based investors'
    },
    {
      id: 'foundation',
      name: 'Foundation Member',
      minInvestment: '$250,000',
      features: [
        'Priority DHAP opportunities',
        'Multi-property portfolios',
        'Monthly performance reports',
        'Phone & email support',
        'Quarterly strategy sessions',
        'Tax optimization guidance'
      ],
      expectedReturns: '16-20%',
      timeframe: '3-7 years',
      description: 'Most popular tier for experienced investors'
    },
    {
      id: 'cornerstone',
      name: 'Cornerstone Member',
      minInvestment: '$500,000',
      features: [
        'Exclusive investment opportunities',
        'Custom portfolio construction',
        'Weekly performance updates',
        'Dedicated relationship manager',
        'Direct homeowner interactions',
        'Estate planning integration'
      ],
      expectedReturns: '18-22%',
      timeframe: '5-10 years',
      description: 'Premium tier for sophisticated investors'
    }
  ];

  const onboardingSteps = [
    {
      title: 'Initial Consultation',
      description: 'Meet with our team to understand your investment goals',
      duration: '45 minutes',
      requirements: [
        'Investment objectives discussion',
        'Risk tolerance assessment',
        'Kingdom impact priorities',
        'Timeline and liquidity needs'
      ],
      deliverables: [
        'Personalized investment strategy',
        'Recommended membership tier',
        'Expected return projections',
        'Investment timeline'
      ]
    },
    {
      title: 'Documentation & Verification',
      description: 'Complete necessary paperwork and verification processes',
      duration: '1-2 weeks',
      requirements: [
        'Accredited investor verification',
        'Financial statements review',
        'Identity verification',
        'Investment agreements'
      ],
      deliverables: [
        'Completed member application',
        'Signed investment agreements',
        'Compliance documentation',
        'Banking setup'
      ]
    },
    {
      title: 'Investment Deployment',
      description: 'Begin investing in your selected opportunities',
      duration: '2-4 weeks',
      requirements: [
        'Capital commitment',
        'Investment selections',
        'Due diligence review',
        'Final approvals'
      ],
      deliverables: [
        'Active investment portfolio',
        'Property selections',
        'Performance tracking setup',
        'Reporting access'
      ]
    },
    {
      title: 'Ongoing Management',
      description: 'Regular monitoring and optimization of your investments',
      duration: 'Ongoing',
      requirements: [
        'Regular performance reviews',
        'Strategy adjustments',
        'Market updates',
        'Compliance monitoring'
      ],
      deliverables: [
        'Performance reports',
        'Strategy recommendations',
        'Market insights',
        'Tax documentation'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What makes Houston 100 different from other investment groups?',
      answer: 'We combine faith-based investing principles with AI-powered analytics, focusing on both financial returns and Kingdom impact. Our DHAP program uniquely helps families while generating strong returns for investors.'
    },
    {
      question: 'How are returns calculated and distributed?',
      answer: 'Returns are calculated based on property appreciation, rental income, and cash flow. Distributions are made quarterly for most investments, with detailed reporting provided monthly or weekly depending on your membership tier.'
    },
    {
      question: 'What is the minimum investment commitment?',
      answer: 'Minimum investments start at $100,000 for Pillar Members, $250,000 for Foundation Members, and $500,000 for Cornerstone Members. These minimums allow for proper diversification and risk management.'
    },
    {
      question: 'How does the DHAP program work?',
      answer: 'DHAP connects distressed homeowners with investors through equity-sharing agreements. Investors gain equity appreciation while homeowners keep their homes. It\'s a win-win approach that creates both returns and Kingdom impact.'
    },
    {
      question: 'What are the liquidity options?',
      answer: 'Most investments have 3-10 year terms depending on the strategy. We offer some liquidity options through our secondary market for members who need early access to capital, subject to availability and market conditions.'
    },
    {
      question: 'How do you ensure compliance and regulatory adherence?',
      answer: 'We maintain strict compliance through regular audits, regulatory reporting, and partnerships with leading compliance firms. All investments are structured to meet SEC requirements and state regulations.'
    }
  ];

  const requiredDocuments = [
    {
      category: 'Identity Verification',
      documents: [
        'Government-issued photo ID',
        'Social Security card or EIN',
        'Proof of address (utility bill)',
        'Professional references'
      ]
    },
    {
      category: 'Financial Documentation',
      documents: [
        'Bank statements (3 months)',
        'Investment account statements',
        'Tax returns (2 years)',
        'Net worth statement'
      ]
    },
    {
      category: 'Accredited Investor Verification',
      documents: [
        'CPA letter or tax returns showing income',
        'Financial statement verification',
        'Investment advisor confirmation',
        'Third-party verification'
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
            <div className="flex items-center justify-center gap-3 mb-6">
              <ArrowRight className="w-12 h-12 text-white" />
              <h1 className="text-5xl lg:text-6xl font-bold">
                Get Started
                <span className="block text-gray-300">Your Faith-Based Investment Journey</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Join Houston 100's proven real estate investment platform in just 4 simple steps. 
              Start generating Kingdom-focused returns while making a positive impact in Houston communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Get Investment Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Membership Tiers Selection */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Choose Your Membership Tier
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the membership level that best fits your investment goals and capital commitment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-xl p-8 cursor-pointer transition-all duration-300 ${
                  selectedTier === tier.id 
                    ? 'border-2 border-black transform scale-105' 
                    : 'border border-gray-200 hover:shadow-2xl'
                }`}
                onClick={() => setSelectedTier(tier.id)}
              >
                {tier.id === 'foundation' && (
                  <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-black mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-4">{tier.description}</p>
                
                <div className="text-3xl font-bold text-green-600 mb-4">{tier.minInvestment}</div>
                <div className="text-sm text-gray-600 mb-6">Minimum Investment</div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-600">Expected Returns</div>
                    <div className="font-semibold text-black">{tier.expectedReturns}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Timeframe</div>
                    <div className="font-semibold text-black">{tier.timeframe}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-black mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  selectedTier === tier.id
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}>
                  {selectedTier === tier.id ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Selected
                    </>
                  ) : (
                    <>
                      Select Tier
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Your 4-Step Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to active investment, we guide you through 
              every step of becoming a Houston 100 member.
            </p>
          </motion.div>

          {/* Interactive Timeline */}
          <div className="relative">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-4">
                {onboardingSteps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      currentStep === index
                        ? 'bg-black text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Step {index + 1}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 max-w-5xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                      {currentStep + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black">{onboardingSteps[currentStep].title}</h3>
                      <p className="text-gray-600">{onboardingSteps[currentStep].description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">Duration: {onboardingSteps[currentStep].duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-3">Requirements:</h4>
                    <div className="space-y-2">
                      {onboardingSteps[currentStep].requirements.map((req, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <AlertCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-black mb-3">Deliverables:</h4>
                  <div className="space-y-2">
                    {onboardingSteps[currentStep].deliverables.map((deliverable, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Info className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-800">Pro Tip</span>
                    </div>
                    <p className="text-sm text-blue-700">
                      {currentStep === 0 && "Come prepared with your investment goals and timeline to maximize this consultation."}
                      {currentStep === 1 && "Having all documents ready can reduce this phase to just a few days."}
                      {currentStep === 2 && "Our team will help you select the best opportunities based on your risk tolerance."}
                      {currentStep === 3 && "Regular communication with your account manager ensures optimal performance."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Required Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prepare these documents to streamline your onboarding process 
              and ensure fast approval for investment opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {requiredDocuments.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {index === 0 && <User className="w-8 h-8 text-white" />}
                    {index === 1 && <CreditCard className="w-8 h-8 text-white" />}
                    {index === 2 && <Shield className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold text-black">{category.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.documents.map((doc, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mx-auto"
            >
              <Download className="w-5 h-5" />
              Download Document Checklist
            </motion.button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about joining Houston 100 and our investment process.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-black mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Take the first step toward faith-based investing success. 
              Schedule your consultation today and discover how Houston 100 
              can help you achieve your Kingdom-focused investment goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now: (713) 324-8100
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Schedule Online
              </motion.button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Investment Consultation</h3>
                <p className="text-gray-200 mb-4">
                  Free 45-minute consultation to discuss your investment goals and determine the best path forward.
                </p>
                <div className="text-sm text-gray-300">
                  <p>📞 Phone: +1-713-324-8100</p>
                  <p>📧 Email: investments@houston100investmentgroup.com</p>
                  <p>⏱️ Response: Within 2 hours</p>
                </div>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">DHAP Program Information</h3>
                <p className="text-gray-200 mb-4">
                  Learn about our unique Distressed Homeowner Assistance Program and how it creates both returns and impact.
                </p>
                <div className="text-sm text-gray-300">
                  <p>📞 Phone: +1-713-DHAP-HELP (342-7435)</p>
                  <p>📧 Email: dhap@houston100investmentgroup.com</p>
                  <p>⏱️ Response: Within 4 hours</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
