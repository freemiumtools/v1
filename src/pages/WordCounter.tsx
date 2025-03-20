import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const WordCounter = () => {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({
    characters: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0
  });

  useEffect(() => {
    const calculateStats = () => {
      const characters = text.length;
      const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
      const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(Boolean).length;
      const paragraphs = text.trim() === '' ? 0 : text.split(/\n\s*\n/).filter(Boolean).length;
      const readingTime = Math.ceil(words / 200); // Average reading speed of 200 words per minute

      setStats({ characters, words, sentences, paragraphs, readingTime });
    };

    calculateStats();
  }, [text]);

  return (
    <>
      <Helmet>
        <title>Word Counter - Count Words, Characters & More | FreemiumTools</title>
        <meta name="description" content="Free online word counter tool. Count words, characters, sentences, and paragraphs. Estimate reading time. Perfect for writers and content creators." />
        <meta name="keywords" content="word counter, character counter, sentence counter, paragraph counter, reading time calculator, text analysis" />
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Word Counter</h1>
          <p className="text-gray-600">
            Count words, characters, sentences, and paragraphs instantly.
            Perfect for essays, articles, and content creation.
          </p>
        </div>

        {/* Ad Space */}
        <div className="w-full h-[120px] bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Advertisement Space</span>
        </div>

        <div className="space-y-6">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-64 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Type or paste your text here..."
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.characters}</div>
              <div className="text-gray-600">Characters</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.words}</div>
              <div className="text-gray-600">Words</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.sentences}</div>
              <div className="text-gray-600">Sentences</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.paragraphs}</div>
              <div className="text-gray-600">Paragraphs</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.readingTime}</div>
              <div className="text-gray-600">Minutes to Read</div>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">About Word Counter</h2>
          <p>
            Our Word Counter tool is an essential resource for writers, students, and
            professionals who need to keep track of their text metrics. Whether you're
            writing an essay, blog post, or article, this tool provides instant feedback
            on your content's length and structure.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Key Features:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Real-time character counting</li>
            <li>Accurate word counting (excluding extra spaces)</li>
            <li>Sentence and paragraph detection</li>
            <li>Reading time estimation</li>
            <li>Clean, distraction-free interface</li>
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

export default WordCounter;