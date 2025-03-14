import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobsListingPage from './pages/JobsListingPage';
import CompaniesPage from './pages/CompaniesPage';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/jobs" element={<JobsListingPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/" element={
            <div>
              <Navbar />
              <div className="max-w-7xl mx-auto py-12 px-4 text-center">
                <h1 className="text-4xl font-bold text-primary mb-4">Welcome to InternFind</h1>
                <p className="text-xl text-gray-600 mb-8">Find your perfect internship or job with AI-powered matching</p>
                <div className="flex justify-center space-x-4">
                  <a href="/jobs" className="btn btn-primary">Browse Jobs</a>
                  <a href="/companies" className="btn border border-primary text-primary hover:bg-blue-50">Explore Companies</a>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
