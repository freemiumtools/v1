import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - FreemiumTools</title>
        <meta name="description" content="Privacy Policy for FreemiumTools - Learn how we handle your data and protect your privacy." />
      </Helmet>

      <div className="max-w-4xl mx-auto prose prose-blue">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
          <p>
            This Privacy Policy explains how FreemiumTools ("we," "us," or "our") collects, uses, and protects your information when you visit our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
          <p>We collect information in the following ways:</p>
          <ul>
            <li>Information you provide directly</li>
            <li>Information collected automatically through cookies and similar technologies</li>
            <li>Log data and device information</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Google AdSense</h2>
          <p>
            We use Google AdSense to display advertisements. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google's Ads Settings</a>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Cookie Policy</h2>
          <p>
            We use cookies to improve your experience on our site. Cookies are small text files that are stored on your device. They help us:
          </p>
          <ul>
            <li>Remember your preferences</li>
            <li>Understand how you use our site</li>
            <li>Deliver relevant advertising</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].
          </p>
        </section>

        <section className="mb-6">
          <p className="text-sm text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy; 