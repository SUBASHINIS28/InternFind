import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-primary">InternFind</Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/companies" className="border-transparent text-gray-500 hover:border-primary hover:text-primary px-1 pt-1 border-b-2 text-sm font-medium">
                Companies
              </Link>
              <Link to="/jobs" className="border-transparent text-gray-500 hover:border-primary hover:text-primary px-1 pt-1 border-b-2 text-sm font-medium">
                Jobs
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Link to="/login" className="btn btn-primary">
              Sign In
            </Link>
            <Link to="/register" className="btn border border-primary text-primary hover:bg-blue-50">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;