'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  MapPin, 
  DollarSign,
  TrendingUp,
  Calendar,
  Users,
  Building2,
  Eye,
  Heart,
  Star,
  Filter,
  Search,
  Grid,
  List,
  ArrowUp,
  ArrowDown,
  CheckCircle,
  Clock,
  Award,
  Target,
  BarChart3,
  Percent,
  Phone,
  Mail,
  Camera,
  Video,
  FileText,
  Download
} from 'lucide-react';

export default function PropertyShowcasePage() {
  const [viewMode, setViewMode] = useState('grid');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('return');
  const [searchTerm, setSearchTerm] = useState('');

  const properties = [
    {
      id: 'HP001',
      title: 'Oak Forest Family Home',
      address: '1234 Oak Forest Dr, Houston, TX 77018',
      type: 'DHAP',
      status: 'Active',
      purchaseDate: '2023-03-15',
      purchasePrice: 285000,
      currentValue: 365000,
      totalReturn: 28.1,
      annualReturn: 19.2,
      occupancy: 100,
      investor: 'Foundation Member',
      familyStory: 'Helped the Johnson family avoid foreclosure after job loss',
      neighborhood: 'Oak Forest',
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1850,
      yearBuilt: 1995,
      images: ['/property1-1.jpg', '/property1-2.jpg', '/property1-3.jpg'],
      features: ['Recently renovated kitchen', 'Large backyard', 'Quiet neighborhood', 'Near schools'],
      monthlyRent: 2450,
      monthlyExpenses: 680,
      netCashFlow: 1770,
      capRate: 7.4,
      appreciation: '+$80,000 in 20 months'
    },
    {
      id: 'HP002',
      title: 'Spring Valley Rental',
      address: '5678 Spring Valley Rd, Houston, TX 77055',
      type: 'Rental',
      status: 'Active',
      purchaseDate: '2022-08-22',
      purchasePrice: 195000,
      currentValue: 285000,
      totalReturn: 46.2,
      annualReturn: 18.7,
      occupancy: 100,
      investor: 'Cornerstone Member',
      familyStory: 'Young professional couple, stable long-term tenants',
      neighborhood: 'Spring Valley',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      yearBuilt: 2010,
      images: ['/property2-1.jpg', '/property2-2.jpg', '/property2-3.jpg'],
      features: ['Modern appliances', 'Covered parking', 'Pool access', 'Gated community'],
      monthlyRent: 2200,
      monthlyExpenses: 520,
      netCashFlow: 1680,
      capRate: 10.3,
      appreciation: '+$90,000 in 28 months'
    },
    {
      id: 'HP003',
      title: 'Memorial Drive Flip',
      address: '9012 Memorial Dr, Houston, TX 77024',
      type: 'Fix & Flip',
      status: 'Completed',
      purchaseDate: '2024-01-10',
      purchasePrice: 125000,
      currentValue: 245000,
      totalReturn: 96.0,
      annualReturn: 24.8,
      occupancy: 0,
      investor: 'Pillar Member',
      familyStory: 'Complete renovation brought new life to neglected property',
      neighborhood: 'Memorial',
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1650,
      yearBuilt: 1985,
      images: ['/property3-1.jpg', '/property3-2.jpg', '/property3-3.jpg'],
      features: ['Complete renovation', 'New roof and HVAC', 'Updated electrical', 'Modern finishes'],
      monthlyRent: 0,
      monthlyExpenses: 0,
      netCashFlow: 0,
      capRate: 0,
      appreciation: 'Sold for $120,000 profit'
    },
    {
      id: 'HP004',
      title: 'Westheimer Commercial',
      address: '3456 Westheimer Rd, Houston, TX 77027',
      type: 'Commercial',
      status: 'Active',
      purchaseDate: '2023-06-01',
      purchasePrice: 425000,
      currentValue: 515000,
      totalReturn: 21.2,
      annualReturn: 15.1,
      occupancy: 95,
      investor: 'Foundation Member',
      familyStory: 'Local business owner expanded operations',
      neighborhood: 'Galleria',
      bedrooms: 0,
      bathrooms: 2,
      sqft: 3200,
      yearBuilt: 2005,
      images: ['/property4-1.jpg', '/property4-2.jpg', '/property4-3.jpg'],
      features: ['High traffic location', 'Ample parking', 'Modern office space', 'Retail potential'],
      monthlyRent: 4800,
      monthlyExpenses: 1200,
      netCashFlow: 3600,
      capRate: 10.2,
      appreciation: '+$90,000 in 18 months'
    },
    {
      id: 'HP005',
      title: 'Heights Boulevard DHAP',
      address: '7890 Heights Blvd, Houston, TX 77008',
      type: 'DHAP',
      status: 'Active',
      purchaseDate: '2023-11-12',
      purchasePrice: 165000,
      currentValue: 225000,
      totalReturn: 36.4,
      annualReturn: 21.7,
      occupancy: 100,
      investor: 'Cornerstone Member',
      familyStory: 'Single mother kept home after medical emergency',
      neighborhood: 'Houston Heights',
      bedrooms: 2,
      bathrooms: 1,
      sqft: 1100,
      yearBuilt: 1940,
      images: ['/property5-1.jpg', '/property5-2.jpg', '/property5-3.jpg'],
      features: ['Historic charm', 'Walking distance to downtown', 'Hardwood floors', 'Large lot'],
      monthlyRent: 1950,
      monthlyExpenses: 450,
      netCashFlow: 1500,
      capRate: 10.9,
      appreciation: '+$60,000 in 14 months'
    },
    {
      id: 'HP006',
      title: 'Katy Suburban Home',
      address: '2468 Pine Creek Ln, Katy, TX 77449',
      type: 'Rental',
      status: 'Active',
      purchaseDate: '2023-02-28',
      purchasePrice: 320000,
      currentValue: 385000,
      totalReturn: 20.3,
      annualReturn: 16.8,
      occupancy: 100,
      investor: 'Foundation Member',
      familyStory: 'Growing family in excellent school district',
      neighborhood: 'Katy',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2400,
      yearBuilt: 2018,
      images: ['/property6-1.jpg', '/property6-2.jpg', '/property6-3.jpg'],
      features: ['Top-rated schools', 'Master suite', 'Two-car garage', 'Community amenities'],
      monthlyRent: 2850,
      monthlyExpenses: 720,
      netCashFlow: 2130,
      capRate: 8.0,
      appreciation: '+$65,000 in 22 months'
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesType = filterType === 'all' || property.type.toLowerCase() === filterType;
    const matchesStatus = filterStatus === 'all' || property.status.toLowerCase() === filterStatus;
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.neighborhood.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesStatus && matchesSearch;
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case 'return':
        return b.annualReturn - a.annualReturn;
      case 'value':
        return b.currentValue - a.currentValue;
      case 'date':
        return new Date(b.purchaseDate).getTime() - new Date(a.purchaseDate).getTime();
      case 'appreciation':
        return b.totalReturn - a.totalReturn;
      default:
        return 0;
    }
  });

  const PropertyCard = ({ property }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
    >
      {/* Property Image */}
      <div className="relative h-48 bg-gray-200">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            property.type === 'DHAP' ? 'bg-green-500 text-white' :
            property.type === 'Rental' ? 'bg-blue-500 text-white' :
            property.type === 'Fix & Flip' ? 'bg-yellow-500 text-white' :
            'bg-purple-500 text-white'
          }`}>
            {property.type}
          </span>
          {property.type === 'DHAP' && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Heart className="w-3 h-3" />
              Kingdom Impact
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            property.status === 'Active' ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
          }`}>
            {property.status}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-lg font-bold">{property.title}</div>
          <div className="text-sm opacity-90 flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {property.neighborhood}
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-black">${property.currentValue.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Current Value</div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-green-600">
              <ArrowUp className="w-4 h-4" />
              <span className="text-lg font-bold">{property.annualReturn}%</span>
            </div>
            <div className="text-sm text-gray-600">Annual Return</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-sm text-gray-600">Purchase Price</div>
            <div className="font-semibold text-black">${property.purchasePrice.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Total Return</div>
            <div className="font-semibold text-green-600">+{property.totalReturn}%</div>
          </div>
          {property.type !== 'Fix & Flip' && (
            <>
              <div>
                <div className="text-sm text-gray-600">Monthly Rent</div>
                <div className="font-semibold text-black">${property.monthlyRent?.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Net Cash Flow</div>
                <div className="font-semibold text-green-600">${property.netCashFlow?.toLocaleString()}</div>
              </div>
            </>
          )}
        </div>

        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">Property Details</div>
          <div className="flex items-center gap-4 text-sm">
            {property.bedrooms > 0 && <span>{property.bedrooms} bed</span>}
            {property.bathrooms > 0 && <span>{property.bathrooms} bath</span>}
            <span>{property.sqft?.toLocaleString()} sqft</span>
            <span>Built {property.yearBuilt}</span>
          </div>
        </div>

        {property.type === 'DHAP' && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-1">
              <Heart className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-800">Kingdom Impact Story</span>
            </div>
            <div className="text-sm text-blue-700">{property.familyStory}</div>
          </div>
        )}

        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">Key Features</div>
          <div className="flex flex-wrap gap-1">
            {property.features?.slice(0, 3).map((feature, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                {feature}
              </span>
            ))}
            {property.features?.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                +{property.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-black text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
            <Eye className="w-4 h-4" />
            View Details
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300">
            <Camera className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300">
            <FileText className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );

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
              <Building2 className="w-12 h-12 text-white" />
              <h1 className="text-5xl lg:text-6xl font-bold">
                Property Showcase
                <span className="block text-gray-300">Houston 100 Investment Portfolio</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Explore our complete real estate investment portfolio. From DHAP properties 
              helping Houston families to high-performing rental investments, see how 
              faith-based investing creates both returns and community impact.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">247</div>
                <div className="text-gray-300">Total Properties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">$45.2M</div>
                <div className="text-gray-300">Portfolio Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">18.5%</div>
                <div className="text-gray-300">Avg Annual Return</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">96.2%</div>
                <div className="text-gray-300">Occupancy Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              
              <select 
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="dhap">DHAP Properties</option>
                <option value="rental">Rental Properties</option>
                <option value="fix & flip">Fix & Flip</option>
                <option value="commercial">Commercial</option>
              </select>
              
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
              </select>
              
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="return">Sort by Return</option>
                <option value="value">Sort by Value</option>
                <option value="date">Sort by Date</option>
                <option value="appreciation">Sort by Appreciation</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            Showing {sortedProperties.length} of {properties.length} properties
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {sortedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          {sortedProperties.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">No properties match your search criteria</div>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setFilterType('all');
                  setFilterStatus('all');
                }}
                className="text-black font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
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
              Ready to Join Our Success?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              These properties represent real returns and real impact. Start your 
              faith-based real estate investment journey with Houston 100 today.
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
                Property Investment Guide
              </motion.button>
            </div>
            
            <div className="text-gray-300 mt-8">
              <p>📞 Property Team: +1-713-PROPERTY (776-7378)</p>
              <p>📧 properties@houston100investmentgroup.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
