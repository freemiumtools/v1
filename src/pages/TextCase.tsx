import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const TextCase = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const convertCase = (type: string) => {
    switch (type) {
      case 'upper':
        setResult(text.toUpperCase());
        break;
      case 'lower':
        setResult(text.toLowerCase());
        break;
      case 'title':
        setResult(
          text.toLowerCase().replace(/(?:^|\s)\w/g, (letter) => letter.toUpperCase())
        );
        break;
      case 'sentence':
        setResult(
          text.toLowerCase().replace(/(^\w|\.\s+\w)/g, (letter) => letter.toUpperCase())
        );
        break;
      default:
        setResult(text);
    }
  };

  return (
    <>
      <Helmet>
        <title>Text Case Converter - Convert Text to Different Cases | FreemiumTools</title>
        <meta name="description" content="Free online text case converter. Convert text to uppercase, lowercase, title case, and sentence case instantly. No registration required." />
        <meta name="keywords" content="text case converter, uppercase converter, lowercase converter, title case, sentence case, text transformer" />
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Text Case Converter</h1>
          <p className="text-gray-600">
            Transform your text into different cases instantly. Perfect for formatting titles,
            headings, and content for various purposes.
          </p>
        </div>

        {/* Ad Space */}
        <div className="w-full h-[120px] bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Advertisement Space</span>
        </div>

        <div className="space-y-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-40 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your text here..."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              onClick={() => convertCase('upper')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              UPPERCASE
            </button>
            <button
              onClick={() => convertCase('lower')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              lowercase
            </button>
            <button
              onClick={() => convertCase('title')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Title Case
            </button>
            <button
              onClick={() => convertCase('sentence')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Sentence case
            </button>
          </div>

          {result && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Result:</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="break-words">{result}</p>
              </div>
            </div>
          )}
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">About Text Case Converter</h2>
          <p>
            Our Text Case Converter is a powerful tool that helps you transform text between
            different cases with just a click. Whether you need to format text for headlines,
            titles, or technical documentation, this tool makes it easy to achieve consistent
            formatting.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Features:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Convert to UPPERCASE for emphasis and headers</li>
            <li>Transform to lowercase for clean, readable text</li>
            <li>Apply Title Case for professional headings</li>
            <li>Use Sentence case for natural writing flow</li>
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

export default TextCase;