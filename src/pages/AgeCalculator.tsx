import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface AgeResult {
  years: number;
  months: number;
  days: number;
}

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [toDate, setToDate] = useState(new Date().toISOString().split('T')[0]);
  const [result, setResult] = useState<AgeResult | null>(null);

  const calculateAge = () => {
    const birth = new Date(birthDate);
    const end = new Date(toDate);

    if (birth > end) {
      alert('Birth date cannot be in the future!');
      return;
    }

    let years = end.getFullYear() - birth.getFullYear();
    let months = end.getMonth() - birth.getMonth();
    let days = end.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setResult({ years, months, days });
  };

  return (
    <>
      <Helmet>
        <title>Age Calculator - Calculate Age Between Dates | FreemiumTools</title>
        <meta name="description" content="Free online age calculator. Calculate exact age in years, months, and days between any two dates. Perfect for determining precise age differences." />
        <meta name="keywords" content="age calculator, date difference calculator, birthday calculator, age difference, calculate years between dates" />
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Age Calculator</h1>
          <p className="text-gray-600">
            Calculate the exact age or time between any two dates.
            Get precise results in years, months, and days.
          </p>
        </div>

        {/* Ad Space */}
        <div className="w-full h-[120px] bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Advertisement Space</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Birth Date</label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Calculate To Date</label>
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button
              onClick={calculateAge}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Calculate Age
            </button>

            {result && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Age Result:</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600">{result.years}</div>
                    <div className="text-gray-600">Years</div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600">{result.months}</div>
                    <div className="text-gray-600">Months</div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600">{result.days}</div>
                    <div className="text-gray-600">Days</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">About Age Calculator</h2>
          <p>
            Our Age Calculator is a precise tool that helps you determine the exact age
            or time difference between any two dates. It provides detailed results broken
            down into years, months, and days, making it perfect for various applications.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Common Uses:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Calculate exact age from birth date</li>
            <li>Determine age eligibility for various purposes</li>
            <li>Calculate time periods for legal or administrative purposes</li>
            <li>Plan age-related events and milestones</li>
          </ul>
        </div>

        {/* Bottom Ad Space */}
        <div className="w-full h-[250px] bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Advertisement Space</span>
        </div>
      </div>
    </>
  );
};

export default AgeCalculator;