import React, { useState } from 'react';
import CompanyCard from '../components/company/CompanyCard';
import Navbar from '../components/common/Navbar';

// Temporary data for demonstration
const MOCK_COMPANIES = [
  {
    id: 1,
    name: 'TechCorp',
    logo: null,
    coverImage: null,
    industry: 'Software Development',
    description: 'A leading company in software development specializing in enterprise solutions.',
    location: 'San Francisco, CA',
    openPositions: 12
  },
  {
    id: 2,
    name: 'DataSystems',
    logo: null,
    coverImage: null,
    industry: 'Data Analytics',
    description: 'Providing cutting-edge data analytics solutions for businesses of all sizes.',
    location: 'New York, NY',
    openPositions: 5
  },
  {
    id: 3,
    name: 'CreativeMinds',
    logo: null,
    coverImage: null,
    industry: 'Design & Creative',
    description: 'A creative agency specializing in brand identity, UX/UI design, and digital marketing.',
    location: 'Los Angeles, CA',
    openPositions: 3
  },
  {
    id: 4,
    name: 'CloudNine',
    logo: null,
    coverImage: null,
    industry: 'Cloud Infrastructure',
    description: 'Providing scalable cloud solutions for growing businesses.',
    location: 'Seattle, WA',
    openPositions: 8
  }
];

const CompaniesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterIndustry, setFilterIndustry] = useState('');

  // Filter companies based on search and filters
  const filteredCompanies = MOCK_COMPANIES.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          company.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIndustry = filterIndustry ? company.industry === filterIndustry : true;
    
    return matchesSearch && matchesIndustry;
  });

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark mb-4">Browse Companies</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <input
                  type="text"
                  placeholder="Search by company name or description..."
                  className="input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                <select 
                  className="input"
                  value={filterIndustry}
                  onChange={(e) => setFilterIndustry(e.target.value)}
                >
                  <option value="">All Industries</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Design & Creative">Design & Creative</option>
                  <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-dark mb-4">
            {filteredCompanies.length} {filteredCompanies.length === 1 ? 'Company' : 'Companies'} Found
          </h2>
          
          {filteredCompanies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCompanies.map(company => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <h3 className="text-xl font-medium text-gray-900">No companies found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompaniesPage;