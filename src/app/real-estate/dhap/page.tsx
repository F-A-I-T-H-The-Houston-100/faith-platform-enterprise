'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Heart, 
  Shield, 
  Users, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Calculator,
  FileText,
  Handshake,
  TrendingUp,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Star,
  Building2,
  Target,
  BarChart3,
  Calendar,
  Download
} from 'lucide-react';

export default function DHAPProgramPage() {
  const [activeStep, setActiveStep] = useState(0);

  const dhapStats = [
    { metric: '200+', label: 'Families Helped', description: 'Homeowners kept in their homes' },
    { metric: '$15M+', label: 'DHAP Investments', description: 'Total program funding' },
    { metric: '18.5%', label: 'Average Returns', description: 'Investor annual performance' },
    { metric: '100%', label: 'Success Rate', description: 'Zero foreclosures prevented' }
  ];

  const programSteps = [
    {
      title: 'Homeowner Qualification',
      description: 'Distressed homeowners apply for DHAP assistance',
      details: [
        'Financial hardship documentation required',
        'Property valuation and equity assessment',
        'Homeowner counseling and education',
        'Legal review and compliance verification'
      ],
      duration: '2-3 weeks',
      icon: FileText
    },
    {
      title: 'Investment Opportunity Creation',
      description: 'Qualified properties become investment opportunities',
      details: [
        'Property analysis and investment structuring',
        'Market valuation and return projections',
        'Legal documentation and contracts',
        'Investor matching and funding coordination'
      ],
      duration: '1-2 weeks',
      icon: Building2
    },
    {
      title: 'Partnership Agreement',
      description: 'Homeowner and investor partnership established',
      details: [
        'Equity sharing agreement execution',
        'Monthly payment structure definition',
        'Property maintenance responsibilities',
        'Future sale and profit sharing terms'
      ],
      duration: '1 week',
      icon: Handshake
    },
    {
      title: 'Ongoing Management',
      description: 'Houston 100 manages the investment relationship',
      details: [
        'Monthly payment collection and distribution',
        'Property maintenance coordination',
        'Regular market value assessments',
        'Investor reporting and communication'
      ],
      duration: 'Ongoing',
      icon: Shield
    }
  ];

  const investmentStructure = [
    {
      category: 'Pillar Members',
      minInvestment: '$100,000',
      equityShare: '60-70%',
      expectedReturn: '15-18%',
      term: '3-5 years',
      features: [
        'Single family home focus',
        'Houston metro area properties',
        'Professional property management',
        'Quarterly performance reports'
      ]
    },
    {
      category: 'Foundation Members',
      minInvestment: '$250,000',
      equityShare: '70-80%',
      expectedReturn: '16-20%',
      term: '3-7 years',
      features: [
        'Multi-property portfolio options',
        'Priority property selection',
        'Enhanced due diligence',
        'Monthly performance updates'
      ]
    },
    {
      category: 'Cornerstone Members',
      minInvestment: '$500,000',
      equityShare: '75-85%',
      expectedReturn: '18-22%',
      term: '5-10 years',
      features: [
        'Exclusive property opportunities',
        'Custom investment structuring',
        'Direct homeowner interaction',
        'Weekly performance tracking'
      ]
    }
  ];

  const successStories = [
    {
      title: 'The Johnson Family',
      location: 'Katy, TX',
      situation: 'Job loss during pandemic led to mortgage default',
      outcome: 'Kept home, investor earned 19.2% return',
      timeline: '4 years',
      details: 'DHAP partnership allowed the Johnson family to restructure their payments while an investor gained equity appreciation of $85,000.'
    },
    {
      title: 'Maria Rodriguez',
      location: 'Spring, TX',
      situation: 'Medical bills caused financial distress',
      outcome: 'Avoided foreclosure, 17.8% investor return',
      timeline: '3 years',
      details: 'Houston 100 structured a partnership that helped Maria keep her home while providing the investor with consistent returns and equity growth.'
    },
    {
      title: 'The Williams Estate',
      location: 'Houston Heights',
      situation: 'Inherited property with tax liens',
      outcome: 'Property restored, 21.5% investor return',
      timeline: '5 years',
      details: 'Complex estate situation resolved through DHAP, resulting in property restoration and exceptional returns for the participating investor.'
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
              <Heart className="w-12 h-12 text-white" />
              <h1 className="text-5xl lg:text-6xl font-bold">
                DHAP Program
                <span className="block text-gray-300">Distressed Homeowner Assistance</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              A Kingdom-focused solution helping Houston families keep their homes while 
              creating exceptional investment opportunities for our members. Faith-based 
              investing that transforms lives and generates strong returns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                <Users className="w-5 h-5" />
                Apply for DHAP Help
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <DollarSign className="w-5 h-5" />
                Become DHAP Investor
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DHAP Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {dhapStats.map((stat, index) => (
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

      {/* How DHAP Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              How DHAP Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our 4-step process connects distressed homeowners with faith-based investors 
              to create win-win partnerships that transform lives and generate returns.
            </p>
          </motion.div>

          {/* Interactive Timeline */}
          <div className="relative">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-4">
                {programSteps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      activeStep === index
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
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                  {React.createElement(programSteps[activeStep].icon, { 
                    className: "w-8 h-8 text-white" 
                  })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">{programSteps[activeStep].title}</h3>
                  <p className="text-gray-600">{programSteps[activeStep].description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">Duration: {programSteps[activeStep].duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-black mb-3">Process Details:</h4>
                  <div className="space-y-3">
                    {programSteps[activeStep].details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-black mb-3">Key Benefits:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-gray-700 text-sm">Kingdom-focused impact</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700 text-sm">Professional management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 text-sm">Strong return potential</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-700 text-sm">Community transformation</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Structure */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              DHAP Investment Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible investment options designed for each Houston 100 member tier, 
              with varying equity shares and return expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentStructure.map((structure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-xl p-8 border-2 relative overflow-hidden ${
                  index === 1 ? 'border-black' : 'border-gray-200'
                }`}
              >
                {index === 1 && (
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-black mb-2">{structure.category}</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">{structure.expectedReturn}</div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Minimum Investment:</span>
                    <span className="font-semibold text-black">{structure.minInvestment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Equity Share:</span>
                    <span className="font-semibold text-black">{structure.equityShare}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Investment Term:</span>
                    <span className="font-semibold text-black">{structure.term}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-black mb-3">Features:</h4>
                  <div className="space-y-2">
                    {structure.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
                  Start DHAP Investment <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              DHAP Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real families helped, real returns generated. See how DHAP creates 
              life-changing outcomes for homeowners and strong returns for investors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold text-black">{story.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-3">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.situation}</p>
                
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <div className="font-semibold text-green-800 mb-1">Outcome:</div>
                  <div className="text-green-700">{story.outcome}</div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-gray-600">Timeline</div>
                    <div className="font-semibold text-black">{story.timeline}</div>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm">{story.details}</p>
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
              Join the DHAP Program Today
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Whether you're a homeowner in distress or an investor seeking Kingdom-focused 
              returns, DHAP provides the solution you need.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">For Homeowners</h3>
                <p className="text-gray-200 mb-4">
                  Facing foreclosure or financial distress? DHAP can help you keep your home.
                </p>
                <button className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-100 transition-all duration-300">
                  Apply for Help
                </button>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">For Investors</h3>
                <p className="text-gray-200 mb-4">
                  Generate strong returns while making a Kingdom impact in Houston.
                </p>
                <button className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-100 transition-all duration-300">
                  Start Investing
                </button>
              </div>
            </div>
            
            <div className="text-gray-300">
              <p>📞 DHAP Hotline: +1-713-DHAP-HELP (342-7435)</p>
              <p>📧 dhap@houston100investmentgroup.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
