'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  DollarSign,
  Home,
  Calendar,
  Award,
  Target,
  ArrowUp,
  ArrowDown,
  Filter,
  Download,
  Eye,
  MapPin,
  Building2,
  Percent,
  Clock,
  Users,
  Star,
  CheckCircle
} from 'lucide-react';

export default function PortfolioPerformancePage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('12m');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const performanceMetrics = [
    { 
      metric: '18.5%', 
      label: 'Average Annual Return', 
      change: '+2.3%', 
      trend: 'up',
      description: 'Across all property types'
    },
    { 
      metric: '$45.2M', 
      label: 'Total Portfolio Value', 
      change: '+$8.1M', 
      trend: 'up',
      description: 'Current market valuation'
    },
    { 
      metric: '247', 
      label: 'Active Properties', 
      change: '+23', 
      trend: 'up',
      description: 'Under management'
    },
    { 
      metric: '96.2%', 
      label: 'Occupancy Rate', 
      change: '+1.8%', 
      trend: 'up',
      description: 'Portfolio average'
    }
  ];

  const portfolioBreakdown = [
    { 
      category: 'DHAP Properties', 
      count: 89, 
      value: '$18.2M', 
      percentage: 40.3, 
      avgReturn: '19.2%',
      color: '#10b981'
    },
    { 
      category: 'Rental Properties', 
      count: 78, 
      value: '$15.8M', 
      percentage: 34.9, 
      avgReturn: '16.8%',
      color: '#3b82f6'
    },
    { 
      category: 'Fix & Flip', 
      count: 45, 
      value: '$7.1M', 
      percentage: 15.7, 
      avgReturn: '24.1%',
      color: '#f59e0b'
    },
    { 
      category: 'Commercial', 
      count: 35, 
      value: '$4.1M', 
      percentage: 9.1, 
      avgReturn: '14.3%',
      color: '#8b5cf6'
    }
  ];

  const topPerformingProperties = [
    {
      id: 'HP001',
      address: '1234 Oak Forest Dr, Houston, TX',
      type: 'DHAP',
      purchaseDate: '2023-03-15',
      purchasePrice: 285000,
      currentValue: 365000,
      totalReturn: 28.1,
      annualReturn: 19.2,
      status: 'Active',
      investor: 'Foundation Member'
    },
    {
      id: 'HP002',
      address: '5678 Spring Valley Rd, Houston, TX',
      type: 'Rental',
      purchaseDate: '2022-08-22',
      purchasePrice: 195000,
      currentValue: 285000,
      totalReturn: 46.2,
      annualReturn: 18.7,
      status: 'Active',
      investor: 'Cornerstone Member'
    },
    {
      id: 'HP003',
      address: '9012 Memorial Dr, Houston, TX',
      type: 'Fix & Flip',
      purchaseDate: '2024-01-10',
      purchasePrice: 125000,
      currentValue: 245000,
      totalReturn: 96.0,
      annualReturn: 24.8,
      status: 'Completed',
      investor: 'Pillar Member'
    },
    {
      id: 'HP004',
      address: '3456 Westheimer Rd, Houston, TX',
      type: 'Commercial',
      purchaseDate: '2023-06-01',
      purchasePrice: 425000,
      currentValue: 515000,
      totalReturn: 21.2,
      annualReturn: 15.1,
      status: 'Active',
      investor: 'Foundation Member'
    },
    {
      id: 'HP005',
      address: '7890 Heights Blvd, Houston, TX',
      type: 'DHAP',
      purchaseDate: '2023-11-12',
      purchasePrice: 165000,
      currentValue: 225000,
      totalReturn: 36.4,
      annualReturn: 21.7,
      status: 'Active',
      investor: 'Cornerstone Member'
    }
  ];

  const timeframes = [
    { value: '3m', label: '3 Months' },
    { value: '6m', label: '6 Months' },
    { value: '12m', label: '12 Months' },
    { value: '24m', label: '24 Months' },
    { value: 'all', label: 'All Time' }
  ];

  const categories = [
    { value: 'all', label: 'All Properties' },
    { value: 'dhap', label: 'DHAP Properties' },
    { value: 'rental', label: 'Rental Properties' },
    { value: 'flip', label: 'Fix & Flip' },
    { value: 'commercial', label: 'Commercial' }
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
              <TrendingUp className="w-12 h-12 text-white" />
              <h1 className="text-5xl lg:text-6xl font-bold">
                Portfolio Performance
                <span className="block text-gray-300">Houston 100 Real Estate</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Transparent performance reporting across our $45.2M real estate portfolio. 
              See how our faith-based investment approach delivers consistent returns 
              while creating positive community impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download Performance Report
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <Eye className="w-5 h-5" />
                View Live Dashboard
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-3xl font-bold text-black">{metric.metric}</div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-semibold ${
                    metric.trend === 'up' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {metric.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                    {metric.change}
                  </div>
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-semibold text-gray-700">Filters:</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Timeframe:</span>
              <select 
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-black focus:border-transparent"
              >
                {timeframes.map(timeframe => (
                  <option key={timeframe.value} value={timeframe.value}>
                    {timeframe.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Category:</span>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-black focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Breakdown */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Portfolio Breakdown
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diversified real estate holdings across multiple property types 
              and investment strategies, each optimized for different risk/return profiles.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-black mb-8">Property Distribution</h3>
              <div className="space-y-6">
                {portfolioBreakdown.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-200"
                  >
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: category.color }}
                      ></div>
                      <div>
                        <div className="font-semibold text-black">{category.category}</div>
                        <div className="text-sm text-gray-600">{category.count} properties</div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-black">{category.value}</div>
                      <div className="text-sm text-green-600">{category.avgReturn} avg return</div>
                    </div>
                    
                    <div className="text-2xl font-bold text-gray-700">
                      {category.percentage}%
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-6">Performance Highlights</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="font-semibold text-green-800">Top Performer</div>
                      <div className="text-sm text-green-600">DHAP Properties</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">19.2%</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="font-semibold text-blue-800">Most Stable</div>
                      <div className="text-sm text-blue-600">Rental Properties</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">96.2%</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-yellow-600" />
                    <div>
                      <div className="font-semibold text-yellow-800">Fastest Returns</div>
                      <div className="text-sm text-yellow-600">Fix & Flip</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-yellow-600">24.1%</div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black mb-2">247</div>
                    <div className="text-gray-600">Total Active Properties</div>
                    <div className="text-sm text-green-600 mt-1">+23 properties this year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Performing Properties */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Top Performing Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed performance data for our highest-returning investments, 
              showcasing the success of our faith-based investment approach.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Property</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Purchase</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Current Value</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Total Return</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Annual Return</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {topPerformingProperties.map((property, index) => (
                    <motion.tr
                      key={property.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-semibold text-black">{property.id}</div>
                          <div className="text-sm text-gray-600 max-w-xs">{property.address}</div>
                          <div className="text-xs text-blue-600 mt-1">{property.investor}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          property.type === 'DHAP' ? 'bg-green-100 text-green-800' :
                          property.type === 'Rental' ? 'bg-blue-100 text-blue-800' :
                          property.type === 'Fix & Flip' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {property.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-semibold text-black">${property.purchasePrice.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">{property.purchaseDate}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-black">${property.currentValue.toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <ArrowUp className="w-4 h-4 text-green-500" />
                          <span className="font-semibold text-green-600">{property.totalReturn}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-green-600">{property.annualReturn}%</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          property.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {property.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
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
              Invest in Proven Performance
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join Houston 100's real estate portfolio and benefit from our 
              track record of consistent returns and positive community impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                <Users className="w-5 h-5" />
                Start Investing
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download Full Report
              </motion.button>
            </div>
            
            <div className="text-gray-300 mt-8">
              <p>📞 Portfolio Team: +1-713-PORTFOLIO (767-8365)</p>
              <p>📧 portfolio@houston100investmentgroup.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
