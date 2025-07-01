'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  DollarSign, 
  Users, 
  Calendar, 
  MessageSquare, 
  Check, 
  ArrowRight,
  Shield,
  Zap,
  TrendingUp,
  Phone,
  Mail,
  Clock
} from 'lucide-react';

interface FormData {
  // Company Information
  companyName: string;
  industry: string;
  website: string;
  
  // Contact Information
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
  
  // Business Details
  currentAUM: string;
  memberCount: string;
  currentChallenges: string[];
  
  // Technical Information
  currentTech: string[];
  implementationTimeline: string;
  budgetRange: string;
  
  // Additional Information
  specificNeeds: string;
  hasScheduledCall: boolean;
}

export default function EnterpriseDemoRequest() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    industry: '',
    website: '',
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
    currentAUM: '',
    memberCount: '',
    currentChallenges: [],
    currentTech: [],
    implementationTimeline: '',
    budgetRange: '',
    specificNeeds: '',
    hasScheduledCall: false
  });

  const totalSteps = 4;

  const handleInputChange = (field: keyof FormData, value: string | string[] | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayToggle = (field: 'currentChallenges' | 'currentTech', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Demo Request Submitted Successfully!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Thank you, {formData.firstName}! Our enterprise team will contact you within 4 hours to schedule your personalized F.A.I.T.H. Platform demonstration.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Response Time</div>
              <div className="text-sm text-gray-600">Within 4 hours</div>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Demo Call</div>
              <div className="text-sm text-gray-600">45-60 minutes</div>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">ROI Analysis</div>
              <div className="text-sm text-gray-600">Customized for your AUM</div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">What Happens Next?</h3>
            <ul className="text-left space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Enterprise specialist reviews your requirements
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Personalized demo agenda created for your use case
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Live platform demonstration with your data scenarios
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                ROI analysis and implementation timeline discussion
              </li>
            </ul>
          </div>
          
          <div className="text-center text-gray-600">
            <p className="mb-2">
              <strong>Enterprise Hotline:</strong> +1-713-FAITH-AI (324-8424)
            </p>
            <p>
              <strong>Email:</strong> enterprise@houston100investmentgroup.com
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Schedule Your F.A.I.T.H. Platform Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how Houston 100's AI-powered investment intelligence can transform 
            your operations and boost portfolio performance by 25%+
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`flex items-center ${i < totalSteps - 1 ? 'flex-1' : ''}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    i + 1 <= currentStep
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {i + 1 <= currentStep ? <Check className="w-5 h-5" /> : i + 1}
                </div>
                {i < totalSteps - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${
                      i + 1 < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center text-gray-600">
            Step {currentStep} of {totalSteps}
          </div>
        </div>

        {/* Form Container */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {/* Step 1: Company & Contact Information */}
          {currentStep === 1 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Company & Contact Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Investment Group"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Industry Focus
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Industry</option>
                    <option value="faith-based-investing">Faith-Based Investing</option>
                    <option value="real-estate">Real Estate Investment</option>
                    <option value="wealth-management">Wealth Management</option>
                    <option value="family-office">Family Office</option>
                    <option value="institutional">Institutional Investment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Smith"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Title/Role *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="CEO, CIO, Managing Director"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@yourcompany.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Website
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://yourcompany.com"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Business Details */}
          {currentStep === 2 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Business Details</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Assets Under Management (AUM) *
                  </label>
                  <select
                    value={formData.currentAUM}
                    onChange={(e) => handleInputChange('currentAUM', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select AUM Range</option>
                    <option value="under-50m">Under $50M</option>
                    <option value="50m-100m">$50M - $100M</option>
                    <option value="100m-250m">$100M - $250M</option>
                    <option value="250m-500m">$250M - $500M</option>
                    <option value="500m-1b">$500M - $1B</option>
                    <option value="1b-3b">$1B - $3B</option>
                    <option value="over-3b">Over $3B</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Members/Clients
                  </label>
                  <select
                    value={formData.memberCount}
                    onChange={(e) => handleInputChange('memberCount', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Range</option>
                    <option value="under-50">Under 50</option>
                    <option value="50-100">50 - 100</option>
                    <option value="100-500">100 - 500</option>
                    <option value="500-1000">500 - 1,000</option>
                    <option value="over-1000">Over 1,000</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Current Challenges (Select all that apply)
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Manual portfolio analysis',
                      'Slow decision-making processes',
                      'Limited market intelligence',
                      'Property evaluation inefficiency',
                      'Member experience gaps',
                      'Compliance monitoring',
                      'Risk management',
                      'Technology integration',
                      'Reporting and analytics',
                      'Scaling operations'
                    ].map((challenge) => (
                      <label key={challenge} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.currentChallenges.includes(challenge)}
                          onChange={() => handleArrayToggle('currentChallenges', challenge)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-700">{challenge}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Technical Requirements */}
          {currentStep === 3 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Technical Requirements</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Current Technology Stack (Select all that apply)
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Airtable',
                      'Google Sheets',
                      'Salesforce',
                      'Microsoft Dynamics',
                      'QuickBooks',
                      'Excel/Manual Processes',
                      'Custom Database',
                      'Property Management Software',
                      'Portfolio Management System',
                      'CRM Platform'
                    ].map((tech) => (
                      <label key={tech} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.currentTech.includes(tech)}
                          onChange={() => handleArrayToggle('currentTech', tech)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-700">{tech}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Implementation Timeline
                  </label>
                  <select
                    value={formData.implementationTimeline}
                    onChange={(e) => handleInputChange('implementationTimeline', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Timeline</option>
                    <option value="immediate">Immediate (Within 30 days)</option>
                    <option value="q1-2025">Q1 2025</option>
                    <option value="q2-2025">Q2 2025</option>
                    <option value="q3-2025">Q3 2025</option>
                    <option value="q4-2025">Q4 2025</option>
                    <option value="2026">2026</option>
                    <option value="exploring">Just Exploring</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Annual Technology Budget Range
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under-100k">Under $100K</option>
                    <option value="100k-250k">$100K - $250K</option>
                    <option value="250k-500k">$250K - $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-2m">$1M - $2M</option>
                    <option value="over-2m">Over $2M</option>
                    <option value="flexible">Flexible based on ROI</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Specific Needs & Demo Preferences */}
          {currentStep === 4 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Demo Preferences</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Specific Areas of Interest
                  </label>
                  <textarea
                    value={formData.specificNeeds}
                    onChange={(e) => handleInputChange('specificNeeds', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your specific use cases, pain points, or areas where you'd like to see F.A.I.T.H. Platform in action..."
                  />
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Your Demo Will Include:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900">Live F.A.I.T.H. AI Hub Demo</div>
                        <div className="text-sm text-gray-600">See all 5 AI components in action</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900">ROI Analysis</div>
                        <div className="text-sm text-gray-600">Customized for your AUM size</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900">Integration Review</div>
                        <div className="text-sm text-gray-600">Current system compatibility</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900">Implementation Plan</div>
                        <div className="text-sm text-gray-600">Timeline and deployment strategy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextStep}
              disabled={isSubmitting}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : currentStep === totalSteps ? (
                <>
                  Schedule Demo <Calendar className="w-5 h-5" />
                </>
              ) : (
                <>
                  Next Step <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm">SOC 2 Type II Compliant</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="text-sm">$900M+ AUM Proven</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Clock className="w-5 h-5 text-purple-500" />
              <span className="text-sm">4-Hour Response Time</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
