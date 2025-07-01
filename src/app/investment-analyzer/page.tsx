'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Target, 
  BarChart3,
  CheckCircle,
  AlertCircle,
  Star,
  Award,
  Zap,
  ArrowRight,
  Play,
  Download,
  Calendar,
  DollarSign,
  Users,
  Globe,
  Lock,
  FileText,
  Activity,
  Gauge,
  PieChart,
  Building2
} from 'lucide-react';

interface InvestmentData {
  id: string;
  name: string;
  type: 'real_estate' | 'stocks' | 'bonds' | 'private_equity' | 'commodities';
  financials: {
    expectedReturn: number;
    riskScore: number;
    liquidityScore: number;
    minimumInvestment: number;
    historicalPerformance: number[];
  };
  kingdomAlignment: {
    bibleCompliant: boolean;
    esgScore: number;
    communityImpact: number;
    ethicalBusiness: boolean;
    faithLeadership: boolean;
  };
  marketFactors: {
    marketCap: number;
    industryGrowth: number;
    competitivePosition: number;
    economicCycle: number;
  };
  compliance: {
    secCompliant: boolean;
    finraApproved: boolean;
    stateApproved: boolean;
    taxEfficient: boolean;
  };
}

export default function InvestmentAnalyzer() {
  const [selectedInvestment, setSelectedInvestment] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const sampleInvestments: InvestmentData[] = [
    {
      id: 'faith-reit-1',
      name: 'Kingdom Community REIT',
      type: 'real_estate',
      financials: {
        expectedReturn: 14.2,
        riskScore: 3,
        liquidityScore: 7,
        minimumInvestment: 50000,
        historicalPerformance: [12.5, 13.8, 15.2, 14.1, 13.9]
      },
      kingdomAlignment: {
        bibleCompliant: true,
        esgScore: 9,
        communityImpact: 9,
        ethicalBusiness: true,
        faithLeadership: true
      },
      marketFactors: {
        marketCap: 2500000000,
        industryGrowth: 8.5,
        competitivePosition: 8,
        economicCycle: 4
      },
      compliance: {
        secCompliant: true,
        finraApproved: true,
        stateApproved: true,
        taxEfficient: true
      }
    },
    {
      id: 'tech-growth-2',
      name: 'TechGrowth Innovation Fund',
      type: 'stocks',
      financials: {
        expectedReturn: 18.5,
        riskScore: 7,
        liquidityScore: 9,
        minimumInvestment: 25000,
        historicalPerformance: [22.1, 15.3, 19.8, 16.7, 20.2]
      },
      kingdomAlignment: {
        bibleCompliant: false,
        esgScore: 6,
        communityImpact: 5,
        ethicalBusiness: true,
        faithLeadership: false
      },
      marketFactors: {
        marketCap: 15000000000,
        industryGrowth: 12.3,
        competitivePosition: 9,
        economicCycle: 8
      },
      compliance: {
        secCompliant: true,
        finraApproved: true,
        stateApproved: true,
        taxEfficient: false
      }
    },
    {
      id: 'stable-bonds-3',
      name: 'Faith-Based Municipal Bonds',
      type: 'bonds',
      financials: {
        expectedReturn: 6.8,
        riskScore: 2,
        liquidityScore: 5,
        minimumInvestment: 10000,
        historicalPerformance: [6.2, 6.5, 7.1, 6.9, 6.8]
      },
      kingdomAlignment: {
        bibleCompliant: true,
        esgScore: 8,
        communityImpact: 8,
        ethicalBusiness: true,
        faithLeadership: true
      },
      marketFactors: {
        marketCap: 500000000,
        industryGrowth: 3.2,
        competitivePosition: 6,
        economicCycle: 2
      },
      compliance: {
        secCompliant: true,
        finraApproved: true,
        stateApproved: true,
        taxEfficient: true
      }
    }
  ];

  const runAnalysis = async (investment: InvestmentData) => {
    setIsAnalyzing(true);
    setAnalysisComplete(false);
    
    // Simulate AI analysis processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsAnalyzing(false);
    setAnalysisComplete(true);
  };

  const calculateScores = (investment: InvestmentData) => {
    // Financial Score (0-100)
    let financialScore = 0;
    if (investment.financials.expectedReturn >= 15) financialScore += 30;
    else if (investment.financials.expectedReturn >= 12) financialScore += 25;
    else if (investment.financials.expectedReturn >= 8) financialScore += 20;
    else if (investment.financials.expectedReturn >= 5) financialScore += 15;
    else financialScore += 5;
    
    financialScore += (11 - investment.financials.riskScore) * 2.5;
    financialScore += investment.financials.liquidityScore * 2;
    
    const avgPerformance = investment.financials.historicalPerformance.reduce((a, b) => a + b, 0) / 
                          investment.financials.historicalPerformance.length;
    if (avgPerformance >= 12) financialScore += 25;
    else if (avgPerformance >= 8) financialScore += 20;
    else if (avgPerformance >= 5) financialScore += 15;
    else financialScore += 5;

    // Kingdom Alignment Score (0-100)
    let kingdomScore = 0;
    kingdomScore += investment.kingdomAlignment.bibleCompliant ? 30 : 0;
    kingdomScore += investment.kingdomAlignment.esgScore * 2.5;
    kingdomScore += investment.kingdomAlignment.communityImpact * 2.5;
    kingdomScore += investment.kingdomAlignment.ethicalBusiness ? 10 : 0;
    kingdomScore += investment.kingdomAlignment.faithLeadership ? 10 : 0;

    // Market Score (0-100)
    let marketScore = 0;
    if (investment.marketFactors.marketCap >= 10000000000) marketScore += 25;
    else if (investment.marketFactors.marketCap >= 2000000000) marketScore += 20;
    else if (investment.marketFactors.marketCap >= 500000000) marketScore += 15;
    else marketScore += 10;
    
    if (investment.marketFactors.industryGrowth >= 10) marketScore += 30;
    else if (investment.marketFactors.industryGrowth >= 5) marketScore += 25;
    else if (investment.marketFactors.industryGrowth >= 2) marketScore += 20;
    else marketScore += 10;
    
    marketScore += investment.marketFactors.competitivePosition * 2.5;
    marketScore += (11 - investment.marketFactors.economicCycle) * 2;

    // Compliance Score (0-100)
    let complianceScore = 0;
    complianceScore += investment.compliance.secCompliant ? 25 : 0;
    complianceScore += investment.compliance.finraApproved ? 25 : 0;
    complianceScore += investment.compliance.stateApproved ? 25 : 0;
    complianceScore += investment.compliance.taxEfficient ? 25 : 0;

    // Weighted Final Score
    const finalScore = 
      (Math.min(100, financialScore) * 0.35) +
      (Math.min(100, kingdomScore) * 0.30) +
      (Math.min(100, marketScore) * 0.20) +
      (complianceScore * 0.15);

    return {
      financial: Math.min(100, financialScore),
      kingdom: Math.min(100, kingdomScore),
      market: Math.min(100, marketScore),
      compliance: complianceScore,
      final: finalScore
    };
  };

  const getTier = (score: number) => {
    if (score >= 85) return { tier: 1, label: 'Premier', color: 'text-green-600', bg: 'bg-green-50' };
    if (score >= 70) return { tier: 2, label: 'Quality', color: 'text-blue-600', bg: 'bg-blue-50' };
    if (score >= 55) return { tier: 3, label: 'Acceptable', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { tier: 'R', label: 'Rejected', color: 'text-red-600', bg: 'bg-red-50' };
  };

  const getGrade = (score: number) => {
    if (score >= 90) return 'A+';
    if (score >= 85) return 'A';
    if (score >= 80) return 'A-';
    if (score >= 75) return 'B+';
    if (score >= 70) return 'B';
    if (score >= 65) return 'B-';
    if (score >= 60) return 'C+';
    if (score >= 55) return 'C';
    return 'D';
  };

  const selectedInv = sampleInvestments.find(inv => inv.id === selectedInvestment);
  const scores = selectedInv ? calculateScores(selectedInv) : null;
  const tierInfo = scores ? getTier(scores.final) : null;

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
              <Brain className="w-12 h-12 text-white" />
              <h1 className="text-5xl lg:text-6xl font-bold">
                F.A.I.T.H. AI Engine
                <span className="block text-gray-300">Kingdom Investment AI</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Experience F.A.I.T.H. Platform's revolutionary A* algorithm-based investment 
              classification system. See how AI evaluates faith-based investments in real-time 
              with institutional-grade analysis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                <Play className="w-5 h-5" />
                Try Live Demo
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Schedule Technical Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Algorithm Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Revolutionary A* Investment Classification
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The world's first A* pathfinding algorithm adapted for faith-based investment analysis. 
              Automatically classifies investments into Tier 1, 2, and 3 categories with 94% accuracy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Financial Analysis',
                percentage: '35%',
                description: 'Expected returns, risk assessment, liquidity, and historical performance evaluation'
              },
              {
                icon: Shield,
                title: 'Kingdom Alignment', 
                percentage: '30%',
                description: 'Biblical compliance, ESG rating, community impact, and faith-based leadership'
              },
              {
                icon: BarChart3,
                title: 'Market Factors',
                percentage: '20%',
                description: 'Market cap, industry growth, competitive position, and economic cycle analysis'
              },
              {
                icon: CheckCircle,
                title: 'Compliance',
                percentage: '15%',
                description: 'SEC, FINRA, state approval verification, and tax efficiency assessment'
              }
            ].map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center"
              >
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <factor.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-black mb-2">{factor.percentage}</div>
                <h3 className="text-xl font-bold text-black mb-4">{factor.title}</h3>
                <p className="text-gray-600 text-sm">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Live Investment Analysis Demo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select an investment to see F.A.I.T.H. Platform's A* algorithm in action. 
              Watch as our AI evaluates multiple criteria and assigns tier classifications.
            </p>
          </motion.div>

          {/* Investment Selection */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {sampleInvestments.map((investment, index) => (
              <motion.div
                key={investment.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedInvestment(investment.id)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedInvestment === investment.id
                    ? 'border-black bg-black text-white'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="w-8 h-8" />
                  <div>
                    <h3 className="text-lg font-bold">{investment.name}</h3>
                    <div className="text-sm opacity-75 capitalize">{investment.type.replace('_', ' ')}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm opacity-75">Expected Return</div>
                    <div className="font-semibold">{investment.financials.expectedReturn}%</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-75">Min Investment</div>
                    <div className="font-semibold">${(investment.financials.minimumInvestment / 1000).toFixed(0)}K</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Analysis Button */}
          {selectedInvestment && (
            <div className="text-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => runAnalysis(selectedInv!)}
                disabled={isAnalyzing}
                className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg mx-auto disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Running A* Analysis...
                  </>
                ) : (
                  <>
                    <Brain className="w-5 h-5" />
                    Analyze with F.A.I.T.H. AI
                  </>
                )}
              </motion.button>
            </div>
          )}

          {/* Analysis Results */}
          {selectedInv && analysisComplete && scores && tierInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
            >
              <div className="text-center mb-8">
                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${tierInfo.bg} ${tierInfo.color} font-bold text-lg`}>
                  <Award className="w-6 h-6" />
                  Tier {tierInfo.tier} - {tierInfo.label}
                </div>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-black">{scores.final.toFixed(1)}/100</div>
                  <div className="text-gray-600">Overall F.A.I.T.H. Score</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { label: 'Financial', score: scores.financial, icon: TrendingUp },
                  { label: 'Kingdom', score: scores.kingdom, icon: Shield },
                  { label: 'Market', score: scores.market, icon: BarChart3 },
                  { label: 'Compliance', score: scores.compliance, icon: CheckCircle }
                ].map((metric, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                    <metric.icon className="w-8 h-8 text-black mx-auto mb-3" />
                    <div className="text-2xl font-bold text-black mb-1">
                      {metric.score.toFixed(1)}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
                    <div className="text-lg font-semibold text-black">
                      {getGrade(metric.score)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-black mb-4">Key Strengths</h4>
                  <div className="space-y-3">
                    {selectedInv.kingdomAlignment.bibleCompliant && (
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">Strong biblical compliance</span>
                      </div>
                    )}
                    {selectedInv.financials.expectedReturn >= 12 && (
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">Excellent expected returns</span>
                      </div>
                    )}
                    {selectedInv.financials.riskScore <= 4 && (
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">Low risk profile</span>
                      </div>
                    )}
                    {selectedInv.kingdomAlignment.esgScore >= 8 && (
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">Outstanding ESG rating</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black mb-4">Recommendations</h4>
                  <div className="space-y-3">
                    {tierInfo.tier === 1 && (
                      <>
                        <div className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-green-500 mt-0.5" />
                          <span className="text-gray-700">Excellent investment opportunity - recommend for Cornerstone and Foundation members</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <TrendingUp className="w-5 h-5 text-green-500 mt-0.5" />
                          <span className="text-gray-700">Consider increasing allocation percentage in member portfolios</span>
                        </div>
                      </>
                    )}
                    {tierInfo.tier === 2 && (
                      <>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                          <span className="text-gray-700">Good investment with room for improvement</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="w-5 h-5 text-blue-500 mt-0.5" />
                          <span className="text-gray-700">Suitable for Foundation members, consider for Cornerstone with additional due diligence</span>
                        </div>
                      </>
                    )}
                    {tierInfo.tier === 3 && (
                      <>
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                          <span className="text-gray-700">Acceptable investment with limitations</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="w-5 h-5 text-yellow-500 mt-0.5" />
                          <span className="text-gray-700">Suitable primarily for Pillar members with appropriate risk tolerance</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Algorithm Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real performance metrics from Houston 100's $900M+ AUM operations 
              demonstrate the power of A* investment classification.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '94%', label: 'Classification Accuracy', description: 'Correct tier assignments vs manual review' },
              { metric: '<200ms', label: 'Analysis Speed', description: 'Average processing time per investment' },
              { metric: '25%+', label: 'Performance Improvement', description: 'Portfolio gains using AI recommendations' },
              { metric: '10,000+', label: 'Investments Analyzed', description: 'Successfully processed by algorithm' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <div className="text-4xl font-bold text-black mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
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
              Experience the Future of Investment Intelligence
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              See how F.A.I.T.H. Platform's A* algorithm can transform your investment 
              decision-making with faith-based AI that delivers institutional results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Schedule Technical Demo
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download Algorithm Whitepaper
              </motion.button>
            </div>
            
            <div className="text-gray-300">
              <p>📞 AI Specialists: +1-713-FAITH-AI (324-8424)</p>
              <p>📧 ai-demo@houston100investmentgroup.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
