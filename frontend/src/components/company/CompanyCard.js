import React from 'react';
import { Link } from 'react-router-dom';

const CompanyCard = ({ company }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-32 bg-gray-200 relative">
        {company.coverImage ? (
          <img 
            src={company.coverImage} 
            alt={`${company.name} cover`}
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-400 to-indigo-500"></div>
        )}
        <div className="absolute -bottom-10 left-6">
          {company.logo ? (
            <img 
              src={company.logo} 
              alt={`${company.name} logo`} 
              className="w-20 h-20 rounded-lg border-4 border-white bg-white object-contain" 
            />
          ) : (
            <div className="w-20 h-20 rounded-lg border-4 border-white bg-gray-100 flex items-center justify-center text-2xl font-bold text-primary">
              {company.name.charAt(0)}
            </div>
          )}
        </div>
      </div>
      
      <div className="pt-12 pb-6 px-6">
        <h3 className="font-bold text-xl">{company.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{company.industry}</p>
        
        <div className="mt-4 text-gray-600 line-clamp-2">
          {company.description}
        </div>
        
        <div className="flex items-center mt-4 text-sm text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{company.location}</span>
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          <span className="text-sm bg-blue-100 text-blue-800 rounded-full px-3 py-1">
            {company.openPositions} Open Jobs
          </span>
          <Link to={`/companies/${company.id}`} className="btn btn-primary">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;