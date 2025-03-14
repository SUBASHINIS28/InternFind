import React, { useState } from 'react';
import JobCard from '../components/jobs/JobCard';
import Navbar from '../components/common/Navbar';

// Temporary data for demonstration
const MOCK_JOBS = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp',
    logo: null,
    location: 'Remote',
    type: 'Full-time',
    salary: '60K-80K',
    description: 'We are looking for a skilled frontend developer proficient in React and modern CSS frameworks.',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'TypeScript']
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'DataSystems',
    logo: null,
    location: 'New York, NY',
    type: 'Full-time',
    salary: '75K-95K',
    description: 'Backend engineer role focused on building scalable APIs and microservices.',
    skills: ['Node.js', 'Express', 'MongoDB', 'AWS', 'Docker']
  },
  {
    id: 3,
    title: 'UX/UI Design Intern',
    company: 'CreativeMinds',
    logo: null,
    location: 'San Francisco, CA',
    type: 'Internship',
    salary: '25K-35K',
    description: 'Join our design team to create beautiful and functional user interfaces.',
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping']
  }
];

const JobsListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filterType, setFilterType] = useState('');
  
  // Filter jobs based on search and filters
  const filteredJobs = MOCK_JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLocation = filterLocation ? job.location.includes(filterLocation) : true;
    const matchesType = filterType ? job.type === filterType : true;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark mb-4">Find Your Perfect Job</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <input
                  type="text"
                  placeholder="Search by job title, company, or skill..."
                  className="input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <select 
                  className="input"
                  value={filterLocation}
                  onChange={(e) => setFilterLocation(e.target.value)}
                >
                  <option value="">All Locations</option>
                  <option value="Remote">Remote</option>
                  <option value="New York">New York</option>
                  <option value="San Francisco">San Francisco</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                <select 
                  className="input"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <option value="">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-dark mb-4">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
          </h2>
          
          {filteredJobs.length > 0 ? (
            <div className="space-y-4">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <h3 className="text-xl font-medium text-gray-900">No jobs found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsListingPage;