import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - FreemiumTools</title>
        <meta name="description" content="Read FreemiumTools terms of service to understand the rules, guidelines, and policies for using our online utility tools." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, freemiumtools terms" />
      </Helmet>

      <div className="max-w-4xl mx-auto prose prose-blue">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

        <section className="mb-8">
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using FreemiumTools ("we," "our," or "us"), you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
          <p>Our services are provided free of charge and are intended for personal and commercial use. You agree to:</p>
          <ul>
            <li>Use our services legally and responsibly</li>
            <li>Not attempt to disrupt or compromise our services</li>
            <li>Not use our services for any harmful or malicious purposes</li>
            <li>Not automate or bulk process requests without prior written permission</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
          <p>
            All content, features, and functionality on FreemiumTools are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Privacy and Data</h2>
          <p>
            Your use of FreemiumTools is also governed by our{' '}
            <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-800">
              Privacy Policy
            </Link>. By using our services, you consent to our data practices as described in the Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Advertisements</h2>
          <p>
            Our services are supported by advertising. You acknowledge and agree that:
          </p>
          <ul>
            <li>We may display advertisements on our website</li>
            <li>We use third-party advertising services (including Google AdSense)</li>
            <li>Advertisers may use cookies and similar technologies</li>
            <li>We are not responsible for advertiser content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Disclaimer of Warranties</h2>
          <p>
            Our services are provided "as is" without any warranties, expressed or implied. We do not guarantee the accuracy, completeness, or reliability of our tools and calculations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p>
            FreemiumTools shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us through our{' '}
            <Link to="/contact" className="text-blue-600 hover:text-blue-800">
              Contact Page
            </Link>.
          </p>
        </section>
      </div>
    </>
  );
};

export default Terms; 