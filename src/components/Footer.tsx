import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FreemiumTools.com</h3>
            <p className="text-gray-300">
              Free online tools to help you with your daily tasks. Simple, fast, and reliable.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/text-case-converter" className="text-gray-300 hover:text-white">Text Case Converter</Link></li>
              <li><Link to="/word-counter" className="text-gray-300 hover:text-white">Word Counter</Link></li>
              <li><Link to="/percentage-calculator" className="text-gray-300 hover:text-white">Percentage Calculator</Link></li>
              <li><Link to="/random-number-generator" className="text-gray-300 hover:text-white">Random Number Generator</Link></li>
              <li><Link to="/age-calculator" className="text-gray-300 hover:text-white">Age Calculator</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">
              Have questions or suggestions? Feel free to reach out to us.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">© 2024 FreemiumTools.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;