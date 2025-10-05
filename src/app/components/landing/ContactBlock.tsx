'use client';

import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaSpinner, FaTwitter } from 'react-icons/fa';

const ContactBlock = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      // Simulate success response
      const isSuccess = Math.random() > 0.7; // 30% chance of success

      if (isSuccess) {
        setSubmitStatus('success');
        setEmail('');
        setMsg('');
      } else {
        setSubmitStatus('error');
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section className="py-9 md:py-10" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-6xl font-extrabold">Get in Touch</h1>
          <p className="mt-4 text-lg text-slate-600">
            Questions, feedback, or need help with a problem? Drop us a line.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 p-8 rounded-xl shadow-lg">
          {/* Left Side: Contact Details and Social Links */}
          <div className="flex flex-col justify-between p-4">
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Reach Out Directly
              </h3>

              <div className="mb-6">
                <p className="text-base font-medium text-slate-700">
                  Email Address
                </p>
                <a
                  href="mailto:placeholder@email.com"
                  className="mt-1 text-lg text-green-400 font-semibold hover:text-green-700 transition duration-150 underline text-wrap"
                >
                  shravan.bobade.tech@email.com
                </a>
              </div>

              {/* Placeholder for Phone/Address if needed */}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-4 border-t border-gray-100">
              <p className="text-base font-medium text-slate-700 mb-3">
                Connect With Us
              </p>
              <div className="flex items-center gap-6 text-2xl text-gray-500">
                <a
                  href="https://github.com/Shravan250"
                  aria-label="GitHub"
                  className="hover:text-green-600 text-black transition duration-150"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://x.com/ShravanBobade"
                  aria-label="Twitter"
                  className="hover:text-green-600 text-blue-500 transition duration-150"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/in/shravan-bobade/"
                  aria-label="LinkedIn"
                  className="hover:text-green-600 text-blue-600 transition duration-150"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 p-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border border-slate-300 shadow-sm px-4 py-2 text-gray-800 focus:border-green-500 focus:ring-green-500"
                placeholder="you@example.com"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="resize-none mt-1 block w-full rounded-md border border-slate-300 shadow-sm px-4 py-2 h-32 text-gray-800 focus:border-green-500 focus:ring-green-500"
                placeholder="How can we help?"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
              >
                {isLoading ? (
                  <FaSpinner className="animate-spin h-5 w-5" />
                ) : (
                  'Send Message'
                )}
              </button>
            </div>

            {/* Success Message Placeholder */}
            {submitStatus === 'success' && (
              <p className="mt-4 text-sm text-green-600 font-medium">
                Thank you! Your message has been sent successfully.
              </p>
            )}

            {/* Error Message Placeholder */}
            {submitStatus === 'error' && (
              <p className="mt-4 text-sm text-red-600 font-medium">
                Oops! Something went wrong. Please try again or email us
                directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
