import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border-l-4 border-primary hover:shadow-lg transition-shadow">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-semibold text-dark">{job.title}</h3>
          <p className="text-gray-600">{job.company}</p>
        </div>
        <div className="flex items-center">
          {job.logo ? (
            <img src={job.logo} alt={`${job.company} logo`} className="h-12 w-12 object-contain" />
          ) : (
            <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
              {job.company.charAt(0)}
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
            {job.location}
          </span>
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
            {job.type}
          </span>
          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
            ${job.salary}
          </span>
        </div>
      </div>
      
      <div className="mt-4 text-gray-600 line-clamp-2">{job.description}</div>
      
      <div className="mt-4 flex justify-between items-center">
        <div className="flex gap-2">
          {job.skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
              {skill}
            </span>
          ))}
          {job.skills.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
              +{job.skills.length - 3} more
            </span>
          )}
        </div>
        <Link to={`/jobs/${job.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;