import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const RandomNumber = () => {
  const [min, setMin] = useState('1');
  const [max, setMax] = useState('100');
  const [quantity, setQuantity] = useState('1');
  const [numbers, setNumbers] = useState<number[]>([]);
  const [unique, setUnique] = useState(true);

  const generateNumbers = () => {
    const minNum = parseInt(min);
    const maxNum = parseInt(max);
    const qty = parseInt(quantity);

    if (isNaN(minNum) || isNaN(maxNum) || isNaN(qty)) {
      return;
    }

    if (unique && (maxNum - minNum + 1) < qty) {
      alert('Range is too small for the requested number of unique values');
      return;
    }

    const result: number[] = [];
    const used = new Set();

    while (result.length < qty) {
      const num = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      if (!unique || !used.has(num)) {
        result.push(num);
        used.add(num);
      }
    }

    setNumbers(result);
  };

  return (
    <>
      <Helmet>
        <title>Random Number Generator - Generate Random Numbers | FreemiumTools</title>
        <meta name="description" content="Free online random number generator. Generate random numbers with custom ranges, unique values, and multiple quantities. Perfect for games, statistics, and more." />
        <meta name="keywords" content="random number generator, random numbers, number generator, random integer generator, unique random numbers" />
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Random Number Generator</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate random numbers within your specified range.
            Perfect for games, statistics, and decision making.
          </p>
        </div>

        {/* Ad Space */}
        <div className="w-full h-[120px] bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Advertisement Space</span>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Minimum Value</label>
                <input
                  type="number"
                  value={min}
                  onChange={(e) => setMin(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Maximum Value</label>
                <input
                  type="number"
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">How Many Numbers?</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                  max="100"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="unique"
                checked={unique}
                onChange={(e) => setUnique(e.target.checked)}
                className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 transition duration-150 ease-in-out"
              />
              <label htmlFor="unique" className="ml-3 text-gray-700">
                Generate unique numbers only
              </label>
            </div>

            <button
              onClick={generateNumbers}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200 font-medium text-lg"
            >
              Generate Numbers
            </button>

            {numbers.length > 0 && (
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Generated Numbers:</h3>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <div className="flex flex-wrap gap-3">
                    {numbers.map((num, index) => (
                      <span
                        key={index}
                        className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 text-lg font-medium text-gray-700 hover:shadow-md transition-shadow duration-200"
                      >
                        {num}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Random Number Generator</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our Random Number Generator creates truly random numbers within your specified
            range. Whether you need a single number or multiple numbers, this tool provides
            fast and reliable results for various applications.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Features:</h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Generate numbers within any range</li>
            <li>Option for unique numbers only</li>
            <li>Generate multiple numbers at once</li>
            <li>Perfect for games and raffles</li>
            <li>Ideal for statistical sampling</li>
          </ul>
        </div>

        {/* Bottom Ad Space */}
        <div className="w-full h-[250px] bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Advertisement Space</span>
        </div>
      </div>
    </>
  );
};

export default RandomNumber;