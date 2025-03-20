import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TextCase from './pages/TextCase';
import WordCounter from './pages/WordCounter';
import PercentageCalculator from './pages/PercentageCalculator';
import RandomNumber from './pages/RandomNumber';
import AgeCalculator from './pages/AgeCalculator';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/v1'}>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/text-case-converter" element={<TextCase />} />
              <Route path="/word-counter" element={<WordCounter />} />
              <Route path="/percentage-calculator" element={<PercentageCalculator />} />
              <Route path="/random-number-generator" element={<RandomNumber />} />
              <Route path="/age-calculator" element={<AgeCalculator />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;