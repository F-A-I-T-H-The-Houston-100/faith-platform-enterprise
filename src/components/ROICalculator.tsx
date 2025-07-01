'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Download,
  Mail,
  Building2,
  Zap,
  Shield,
  Target,
  BarChart3,
  PieChart
} from 'lucide-react';

interface ROIInputs {
  currentAUM: number;
  memberCount: number;
  currentTechCosts: number;
  staffCosts: number;
  analysisTimeHours: number;
  investmentManagerSalary: number;
  portfolioPerformance: number;
  propertyCount: number;
  managementFees: number;
}

interface ROIResults {
  annualSavings: number;
  performanceGains: number;
  timesSavings: number;
  efficiencyGains: number;
  totalBenefit: number;
  platformCost: number;
  netROI: number;
  roiPercentage: number;
  paybackMonths: number;
  threeYearValue: number;
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>({
    currentAUM: 500000000, // $500M default
    memberCount: 500,
    currentTechCosts: 200000,
    staffCosts: 300000,
    analysisTimeHours: 20,
    investmentManagerSalary: 150000,
    portfolioPerformance: 8.5,
    propertyCount: 50,
    managementFees: 150000
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [showDetailedReport, setShowDetailedReport] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    company: '',
    title: ''
  });

  const calculateROI = () => {
    // Performance improvement from F.A.I.T.H. AI (conservative 25% boost)
    const performanceBoost = 0.25;
    const performanceGains = inputs.currentAUM * (inputs.portfolioPerformance / 100) * performanceBoost;
    
    // Time savings from automation (68% faster analysis)
    const timeSavingsMultiplier = 0.68;
    const hourlyRate = inputs.investmentManagerSalary / 2080; // Annual hours
    const timesSavings = inputs.analysisTimeHours * 52 * hourlyRate * timeSavingsMultiplier;
    
    // Technology cost savings (replacing multiple systems)
    const techSavings = inputs.currentTechCosts * 0.60; // 60% reduction
    
    // Efficiency gains from automation
    const efficiencyGains = inputs.staffCosts * 0.40; // 40% efficiency improvement
    
    // Property management fee retention (Houston 100 keeps 8-12% vs outsourcing)
    const propertyFeeRetention = inputs.propertyCount * 25000; // Average $25K per property annually
    
    // Total annual benefits
    const annualSavings = techSavings + timesSavings + efficiencyGains + propertyFeeRetention;
    const totalBenefit = annualSavings + performanceGains;
    
    // Platform cost based on AUM size
    let platformCost = 300000; // Growth package default
    if (inputs.currentAUM >= 1000000000) {
      platformCost = 1400000; // Enterprise Complete
    } else if (inputs.currentAUM >= 250000000) {
      platformCost = 650000; // Professional Suite
    }
    
    // ROI calculations
    const netROI = totalBenefit - platformCost;
    const roiPercentage = (netROI / platformCost) * 100;
    const paybackMonths = (platformCost / (totalBenefit / 12));
    const threeYearValue = (totalBenefit * 3) - platformCost;

    const calculatedResults: ROIResults = {
      annualSavings,
      performanceGains,
      timesSavings,
      efficiencyGains,
      totalBenefit,
      platformCost,
      netROI,
      roiPercentage,
      paybackMonths,
      threeYearValue
    };

    setResults(calculatedResults);
    setShowResults(true);
  };

  const handleInputChange = (field: keyof ROIInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const handleGetDetailedReport = () => {
    setShowDetailedReport(true);
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  if (showDetailedReport) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Your F.A.I.T.H. Platform ROI Report
              </h1>
              <p className="text-lg text-gray-600">
                Detailed analysis has been sent to {contactInfo.email}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your ROI Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Total Annual Benefit:</span>
                    <span className="font-semibold text-green-600">
                      {results && formatCurrency(results.totalBenefit)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Platform Investment:</span>
                    <span className="font-semibold text-gray-900">
                      {results && formatCurrency(results.platformCost)}
                    </span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="font-bold text-gray-900">Net ROI:</span>
                    <span className="font-bold text-green-600 text-xl">
                      {results && results.roiPercentage.toFixed(0)}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Payback Period</div>
                    <div className="text-gray-600">
                      {results && results.paybackMonths.toFixed(1)} months
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">3-Year Value</div>
                    <div className="text-gray-600">
                      {results && formatCurrency(results.threeYearValue)}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Performance Boost</div>
                    <div className="text-gray-600">25%+ portfolio improvement</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Ready to transform your investment operations? Our enterprise team will contact you within 4 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
                >
                  Schedule Enterprise Demo <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  <Download className="w-5 h-5" /> Download Full Report
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              F.A.I.T.H. Platform ROI Calculator
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the quantified value of AI-powered investment intelligence. 
            See how F.A.I.T.H. Platform can boost your portfolio performance by 25%+ 
            while reducing operational costs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Your Current Operations
            </h2>

            <div className="space-y-6">
              {/* Assets Under Management */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Assets Under Management (AUM)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.currentAUM}
                    onChange={(e) => handleInputChange('currentAUM', Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="500000000"
                  />
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Current: {formatCurrency(inputs.currentAUM)}
                </div>
              </div>

              {/* Member Count */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Members/Clients
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.memberCount}
                    onChange={(e) => handleInputChange('memberCount', Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="500"
                  />
                </div>
              </div>

              {/* Current Tech Costs */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Technology Costs
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.currentTechCosts}
                    onChange={(e) => handleInputChange('currentTechCosts', Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="200000"
                  />
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Software, licenses, IT infrastructure
                </div>
              </div>

              {/* Staff Costs */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Staff Costs (Analysis Team)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.staffCosts}
                    onChange={(e) => handleInputChange('staffCosts', Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="300000"
                  />
                </div>
              </div>

              {/* Analysis Time */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Weekly Hours Spent on Manual Analysis
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.analysisTimeHours}
                    onChange={(e) => handleInputChange('analysisTimeHours', Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="20"
                  />
                </div>
              </div>

              {/* Portfolio Performance */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Portfolio Performance (Annual %)
                </label>
                <div className="relative">
                  <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    step="0.1"
                    value={inputs.portfolioPerformance}
                    onChange={(e) => handleInputChange('portfolioPerformance', Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="8.5"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* ROI Summary Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Your F.A.I.T.H. Platform ROI
              </h3>
              
              {results && (
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-600 mb-2">
                      {results.roiPercentage.toFixed(0)}%
                    </div>
                    <div className="text-lg text-gray-700">Annual Return on Investment</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-green-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {formatCurrency(results.totalBenefit)}
                      </div>
                      <div className="text-sm text-gray-600">Total Annual Benefit</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {results.paybackMonths.toFixed(1)} mo
                      </div>
                      <div className="text-sm text-gray-600">Payback Period</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Benefit Breakdown */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Benefit Breakdown
              </h3>
              
              {results && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Performance Gains (25%+)</span>
                    </div>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(results.performanceGains)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">Time Savings (68% faster)</span>
                    </div>
                    <span className="font-semibold text-blue-600">
                      {formatCurrency(results.timesSavings)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700">Efficiency Gains</span>
                    </div>
                    <span className="font-semibold text-purple-600">
                      {formatCurrency(results.efficiencyGains)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">Platform Investment</span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(results.platformCost)}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Ready to See the Full Analysis?
              </h3>
              <p className="text-blue-100 mb-6">
                Get a detailed ROI report with implementation timeline, 
                integration analysis, and personalized recommendations.
              </p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
                    className="px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                  />
                  <input
                    type="email"
                    placeholder="Business Email"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                    className="px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={contactInfo.company}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, company: e.target.value }))}
                    className="px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="Your Title"
                    value={contactInfo.title}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, title: e.target.value }))}
                    className="px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGetDetailedReport}
                  className="w-full bg-white text-blue-600 font-semibold py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Detailed ROI Report
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm">SOC 2 Type II</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span className="text-sm">$900M+ Proven AUM</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Target className="w-5 h-5 text-purple-500" />
              <span className="text-sm">25%+ Performance Boost</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Clock className="w-5 h-5 text-orange-500" />
              <span className="text-sm">68% Faster Analysis</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
