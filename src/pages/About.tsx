import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - FreemiumTools | Free Online Utility Tools</title>
        <meta name="description" content="Learn about FreemiumTools, our mission to provide free, reliable online utilities, and our commitment to user privacy and excellent service." />
        <meta name="keywords" content="about freemiumtools, online tools, free utilities, text tools, calculators" />
      </Helmet>

      <div className="max-w-4xl mx-auto prose prose-blue">
        <h1 className="text-4xl font-bold mb-6">About FreemiumTools</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At FreemiumTools, we believe that essential online utilities should be accessible to everyone, 
            completely free of charge. Our mission is to provide high-quality, easy-to-use tools that help 
            you accomplish your daily tasks efficiently.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <p className="text-gray-700">
            Our growing collection of tools includes:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li>Text Case Converter - Transform text between different cases</li>
            <li>Word Counter - Count words, characters, and more</li>
            <li>Percentage Calculator - Quick percentage calculations</li>
            <li>Random Number Generator - Generate random numbers easily</li>
            <li>Age Calculator - Calculate precise ages between dates</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <p className="text-gray-700">
            We are committed to:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li>Providing 100% free tools with no hidden costs</li>
            <li>Maintaining user privacy and data protection</li>
            <li>Ensuring high accuracy in our calculations</li>
            <li>Continuous improvement based on user feedback</li>
            <li>Keeping our tools simple and user-friendly</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            We value your feedback and suggestions. Feel free to reach out to us through our{' '}
            <Link to="/contact" className="text-blue-600 hover:text-blue-800">
              contact page
            </Link>.
          </p>
        </section>

        <section className="mb-8 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-800">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-blue-600 hover:text-blue-800">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-blue-600 hover:text-blue-800">
              Contact Us
            </Link>
            <Link to="/" className="text-blue-600 hover:text-blue-800">
              All Tools
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default About; 