'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  TrendingUp, 
  Shield, 
  Heart, 
  Users, 
  DollarSign,
  MapPin,
  Award,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
  Mail,
  Building2,
  Target,
  BarChart3,
  Handshake,
  Star,
  Globe
} from 'lucide-react';

export default function RealEstateInvestmentPage() {
  const [activeOpportunity, setActiveOpportunity] = useState(0);

  const investmentStats = [
    { metric: '$45M+', label: 'Real Estate AUM', description: 'Properties under management' },
    { metric: '200+', label: 'Families Helped', description: 'Through DHAP program' },
    { metric: '18.5%', label: 'Average Returns', description: 'Annual investment performance' },
    { metric: '95%', label: 'Success Rate', description: 'Successful property outcomes' }
  ];

  const investmentOpportunities = [
    {
      title: 'DHAP Investment Program',
      subtitle: 'Help families while earning returns',
      description: 'Partner with Houston 100 to help distressed homeowners keep their homes while generating consistent investment returns.',
      minInvestment: '$100,000',
      expectedReturn: '15-20%',
      term: '3-7 years',
      riskLevel: 'Moderate',
      features: [
        'Direct homeowner assistance',
        'Secured real estate collateral',
        'Kingdom-focused impact',
        'Professional management',
        'Quarterly distributions'
      ]
    },
    {
      title: 'Houston Property Portfolio',
      subtitle: 'Diversified real estate holdings',
      description: 'Invest in a professionally managed portfolio of Houston-area investment properties with proven performance track record.',
      minInvestment: '$250,000',
      expectedReturn: '12-18%',
      term: '5-10 years',
      riskLevel: 'Conservative',
      features: [
        'Geographic diversification',
        'Professional property management',
        'Regular income distributions',
        'Appreciation potential',
        'Liquidity options'
      ]
    },
    {
      title: 'Fix & Flip Partnerships',
      subtitle: 'Short-term value creation',
      description: 'Partner with experienced contractors and real estate professionals to renovate and resell Houston properties.',
      minInvestment: '$50,000',
      expectedReturn: '20-30%',
      term: '6-12 months',
      riskLevel: 'Higher',
      features: [
        'Faster liquidity',
        'Higher return potential',
        'Active property improvement',
        'Market timing opportunities',
        'Experienced partnerships'
      ]
    }
  ];

  const houstonMarketData = [
    { metric: '2.3M', label: 'Population', trend: '+2.1% annually' },
    { metric: '$285K', label: 'Median Home Price', trend: '+8.5% YoY' },
    { metric: '65%', label: 'Owner Occupancy', trend: 'Stable' },
    { metric: '4.2%', label: 'Unemployment Rate', trend: 'Below national average' }
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
              <Home className="w-12 h-12 text-white" />
              <h1 className="text-5xl lg:text-6xl font-bold">
                Real Estate Investment
                <span className="block text-gray-300">Houston 100 Opportunities</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Faith-based real estate investing that creates positive community impact 
              while generating exceptional returns for our members. Help Houston families 
              while building wealth through strategic property investments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                <Building2 className="w-5 h-5" />
                Explore DHAP Program
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Schedule Property Tour
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {investmentStats.map((stat, index) => (
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

      {/* Investment Opportunities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Investment Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple pathways to invest in Houston real estate while making a 
              positive Kingdom impact in our community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {investmentOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 relative overflow-hidden"
              >
                {index === 0 && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-black mb-2">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.subtitle}</p>
                <p className="text-gray-700 mb-6">{opportunity.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-600">Minimum Investment</div>
                    <div className="font-semibold text-black">{opportunity.minInvestment}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Expected Return</div>
                    <div className="font-semibold text-green-600">{opportunity.expectedReturn}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Investment Term</div>
                    <div className="font-semibold text-black">{opportunity.term}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Risk Level</div>
                    <div className="font-semibold text-blue-600">{opportunity.riskLevel}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-black mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {opportunity.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Houston Market Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Houston Market Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Houston's robust economy, growing population, and diverse industry base 
              create exceptional real estate investment opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Why Houston Real Estate?</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Economic Growth</h4>
                    <p className="text-gray-600">Houston's diverse economy, led by energy, healthcare, and aerospace, provides stable job growth and housing demand.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Population Growth</h4>
                    <p className="text-gray-600">Consistent population growth of 2.1% annually drives sustained housing demand across all price points.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Infrastructure Investment</h4>
                    <p className="text-gray-600">Major infrastructure projects and business relocations continue to enhance property values and rental demand.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Community Impact</h4>
                    <p className="text-gray-600">Our faith-based approach creates positive community outcomes while generating strong returns for investors.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-6">Market Data</h3>
              <div className="space-y-6">
                {houstonMarketData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-black">{data.label}</div>
                      <div className="text-sm text-gray-600">{data.trend}</div>
                    </div>
                    <div className="text-2xl font-bold text-green-600">{data.metric}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Investment Outlook</h4>
                <p className="text-green-700 text-sm">
                  Houston's fundamentals support continued real estate appreciation 
                  and rental income growth, making it an ideal market for faith-based investors.
                </p>
              </div>
            </div>
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
              Start Your Real Estate Investment Journey
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join Houston 100's proven real estate investment programs and make a 
              positive Kingdom impact while building wealth through strategic property investments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Schedule Consultation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Get Investment Guide
              </motion.button>
            </div>
            
            <div className="text-gray-300">
              <p>📞 Real Estate Team: +1-713-HOUSTON-RE (468-7866)</p>
              <p>📧 realestate@houston100investmentgroup.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
