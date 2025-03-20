import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const PercentageCalculator = () => {
  const [calculationType, setCalculationType] = useState('percentage');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (isNaN(num1) || isNaN(num2)) {
      return;
    }

    switch (calculationType) {
      case 'percentage':
        setResult((num1 / 100) * num2);
        break;
      case 'percentageOf':
        setResult((num1 / num2) * 100);
        break;
      case 'increase':
        setResult(num2 * (1 + num1 / 100));
        break;
      case 'decrease':
        setResult(num2 * (1 - num1 / 100));
        break;
    }
  };

  return (
    <>
      <Helmet>
        <title>Percentage Calculator - Calculate Percentages Easily | FreemiumTools</title>
        <meta name="description" content="Free online percentage calculator. Calculate percentages, find percentage of numbers, and compute percentage increase/decrease instantly." />
        <meta name="keywords" content="percentage calculator, percent calculator, percentage increase, percentage decrease, percentage of number" />
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Percentage Calculator</h1>
          <p className="text-gray-600">
            Calculate percentages quickly and easily. Perfect for discounts,
            tax calculations, and more.
          </p>
        </div>

        {/* Ad Space */}
        <div className="w-full h-[120px] bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Advertisement Space</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Calculation Type</label>
              <select
                value={calculationType}
                onChange={(e) => setCalculationType(e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              >
                <option value="percentage">What is X% of Y?</option>
                <option value="percentageOf">X is what percentage of Y?</option>
                <option value="increase">Increase Y by X%</option>
                <option value="decrease">Decrease Y by X%</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  {calculationType === 'percentage' ? 'Percentage (X)' :
                   calculationType === 'percentageOf' ? 'Value (X)' :
                   'Percentage Change (X)'}
                </label>
                <input
                  type="number"
                  value={value1}
                  onChange={(e) => setValue1(e.target.value)}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter number"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  {calculationType === 'percentageOf' ? 'Total Value (Y)' : 'Value (Y)'}
                </label>
                <input
                  type="number"
                  value={value2}
                  onChange={(e) => setValue2(e.target.value)}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter number"
                />
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Calculate
            </button>

            {result !== null && (
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Result:</h3>
                <p className="text-2xl text-blue-600">{result.toFixed(2)}</p>
              </div>
            )}
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">About Percentage Calculator</h2>
          <p>
            Our Percentage Calculator is a versatile tool that helps you perform various
            percentage calculations quickly and accurately. Whether you need to calculate
            discounts, tax rates, or percentage changes, this calculator makes it simple.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Common Uses:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Calculate sales tax and discounts</li>
            <li>Determine percentage increases or decreases</li>
            <li>Find what percentage one number is of another</li>
            <li>Calculate tips and commissions</li>
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

export default PercentageCalculator;