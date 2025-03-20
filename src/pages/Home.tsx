import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Type, 
  Calculator, 
  Percent, 
  Shuffle, 
  Calendar 
} from 'lucide-react';
import AdSense from '../components/AdSense';

const tools = [
  {
    title: 'Text Case Converter',
    description: 'Convert text between different cases: uppercase, lowercase, title case, and more.',
    icon: Type,
    link: '/text-case-converter'
  },
  {
    title: 'Word Counter',
    description: 'Count words, characters, sentences, and paragraphs in your text.',
    icon: Calculator,
    link: '/word-counter'
  },
  {
    title: 'Percentage Calculator',
    description: 'Calculate percentages, discounts, increases, and more with ease.',
    icon: Percent,
    link: '/percentage-calculator'
  },
  {
    title: 'Random Number Generator',
    description: 'Generate random numbers within your specified range.',
    icon: Shuffle,
    link: '/random-number-generator'
  },
  {
    title: 'Age Calculator',
    description: 'Calculate age between two dates or from birth date to today.',
    icon: Calendar,
    link: '/age-calculator'
  }
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>FreemiumTools - Free Online Utilities and Calculators</title>
        <meta name="description" content="Free online tools including text case converter, word counter, percentage calculator, random number generator, and age calculator. Simple, fast, and reliable." />
        <meta name="keywords" content="online tools, text converter, word counter, percentage calculator, random number generator, age calculator, free tools" />
      </Helmet>

      <div className="space-y-8">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Free Online Tools for Everyone
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, fast, and reliable tools to help you with your daily tasks.
            No registration required. Always free.
          </p>
        </section>

        {/* Top Ad */}
        <AdSense
          className="w-full min-h-[250px]"
          adSlot="1234567890" // Replace with your ad slot ID
          adFormat="auto"
        />

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.title}
                to={tool.link}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <Icon className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{tool.title}</h2>
                <p className="text-gray-600">{tool.description}</p>
              </Link>
            );
          })}
        </section>

        {/* Bottom Ad */}
        <AdSense
          className="w-full min-h-[250px]"
          adSlot="0987654321" // Replace with your ad slot ID
          adFormat="auto"
        />

        <footer className="text-center text-sm text-gray-600">
          <Link to="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link>
        </footer>
      </div>
    </>
  );
};

export default Home;