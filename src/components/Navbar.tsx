import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool as Tools } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Tools className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">FreemiumTools</span>
          </Link>
          
          <div className="hidden md:flex space-x-4">
            <Link to="/text-case-converter" className="text-gray-600 hover:text-blue-600">Text Case</Link>
            <Link to="/word-counter" className="text-gray-600 hover:text-blue-600">Word Counter</Link>
            <Link to="/percentage-calculator" className="text-gray-600 hover:text-blue-600">Percentage</Link>
            <Link to="/random-number-generator" className="text-gray-600 hover:text-blue-600">Random Number</Link>
            <Link to="/age-calculator" className="text-gray-600 hover:text-blue-600">Age Calculator</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;